// Turn-based battles, Final Fantasy style, played with Mörk Borg rules.
// The enemies line up across the top, your two wretches wait below, and each wretch picks a command in
// turn. Then the enemies act. Every roll is thrown on screen with Q.Dice.
//
// Rows: one wretch stands in front and one behind. Foes go for the front wretch three times in four, and a
// melee attack from the back row is at DR +2. Rats ignore the rows, and cultists' curses reach anyone.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const { d } = Q;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const D = (sides, value, tone, label) => ({ sides, value, tone, label });
  const throwDice = (spec) => (Q.Dice ? Q.Dice.roll(spec) : Promise.resolve());
  const speed = () => (Q.speed === undefined ? 1 : Q.speed);
  const wait = (ms) => new Promise((r) => setTimeout(r, ms * speed()));
  const sfx = (name, o) => Q.Sound && Q.Sound.play(name, o);

  // 'Strength 14 + 1 = 15 vs DR 12'
  function testText(label, t, mod) {
    const sum = mod ? ` ${mod > 0 ? '+' : '−'} ${Math.abs(mod)} = ${t.total}` : '';
    return `${label} ${t.r}${sum} vs DR ${t.dr}`;
  }
  // '5 × 2 − 2 armor = 8'
  function damageText(dmgRoll, doubled, absorbed, total) {
    return `${dmgRoll}${doubled ? ' × 2' : ''}${absorbed ? ` − ${absorbed} armor` : ''} = ${total}`;
  }
  Q.testText = testText;
  Q.damageText = damageText;

  // a named foe (someone you knew) gets no article
  const the = (f, cap) => (f.proper ? esc(f.name) : `${cap ? 'The' : 'the'} ${esc(f.name.replace(/^The /, ''))}`);
  const verb = (f, one, many) => (f.def.plural ? many : one);
  const short = (pc) => esc(pc.name.split(' ')[0]);

  let B = null; // the battle in progress

  // ---------- drawing the battle ----------
  // The cards are drawn afresh on every change, so a fallen foe's fade-out is picked up where it had got to
  // (or shown finished) rather than played again from the start, which flashed the dead back up.
  const FADE_MS = 600;
  function renderFoes() {
    const row = $('foes');
    row.innerHTML = '';
    const now = performance.now();
    B.foes.forEach((f, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      if (f.hp > 0) delete f.goneAt; // risen again
      else if (f.goneAt === undefined) f.goneAt = now;
      const since = f.hp > 0 ? 0 : now - f.goneAt;
      const fade = f.hp <= 0 ? (since >= FADE_MS ? ' gone' : f.fled ? ' fled' : ' slain') : '';
      card.className = `foe-card kind-${f.kind}${fade}` + (f.hp <= 0 && f.fled ? ' was-fled' : '') + (f.phase === 2 ? ' phase2' : '');
      if (since > 0 && since < FADE_MS) card.style.animationDelay = `-${Math.round(since)}ms`;
      card.dataset.i = i;
      const marks = `${f.stunned ? ' · kneels' : ''}${f.poison ? ' · poisoned' : ''}${f.raised && f.hp > 0 ? ' · risen' : ''}`;
      const health = Q.anyHas(B.party, 'eye') ? `${f.hp}/${f.maxHp} HP` : Q.healthWord(f.hp, f.maxHp);
      card.innerHTML = `<img src="${Q.assetUrl(f.def.art || f.kind)}" alt=""><span class="foe-label"><b>${esc(f.name)}</b><small>${f.hp > 0 ? health + marks : f.fled ? 'Fled' : 'Dead'}</small></span>`;
      card.disabled = f.hp <= 0;
      card.addEventListener('click', () => pick('foe', i));
      row.appendChild(card);
      f.el = card;
    });
  }

  function renderParty() {
    const row = $('partyCards');
    row.innerHTML = '';
    B.party.forEach((pc, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'pc-card' + (pc.dead ? ' dead' : '') + (B.active === i ? ' active' : '') + (pc.row === 'back' ? ' row-back' : ' row-front');
      card.dataset.i = i;
      const pct = pc.dead ? 0 : Math.max(0, Math.min(1, pc.hp / pc.maxHp)) * 100;
      const marks = `${pc.omenMax ? '<i title="Omen: next hit at maximum">▲</i>' : ''}${pc.omenWard ? '<i title="Omen: next wound −d6">◆</i>' : ''}${pc.omenDR ? '<i title="Omen: next attack or dodge at DR −4">▼</i>' : ''}${pc.dazed ? '<i title="dazed">✶</i>' : ''}${pc.out > 0 ? `<i class="pink" title="out cold">✖${pc.out}</i>` : ''}${pc.bleeding && pc.haem ? `<i class="pink" title="haemorrhaging: steps left to live">♦${pc.haem.left}</i>` : ''}${pc.relic ? `<i title="${esc(Q.ITEMS[pc.relic].name)}">✠</i>` : ''}`;
      card.innerHTML = `<img src="${Q.portraitUrl(pc.name)}" alt="">
        <span class="pc-info"><span class="row-tag">${pc.row === 'back' ? 'Back' : 'Front'}${Q.classOf(pc) ? ` · ${esc(Q.classOf(pc).name)}` : ''}</span><b>${esc(pc.name)}</b>
        <span class="hpbar small"><span style="width:${pct}%"></span><em>${pc.dead ? 'Dead' : pc.out > 0 ? `Out · 0/${pc.maxHp}` : `${Math.max(0, pc.hp)}/${pc.maxHp}`}</em></span>
        <small>${esc(pc.weapon.name)} d${pc.weapon.die} · Omens ${pc.omens}${marks}</small></span>`;
      card.disabled = pc.dead;
      card.addEventListener('click', () => pick('pc', i));
      row.appendChild(card);
      pc.el = card;
    });
    if (B.onChange) B.onChange();
  }

  function flash(el, cls, ms = 450) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }

  function banner(text, tone) {
    if (Q.Dice) Q.Dice.clear(); // a banner never shares the table with dice
    const b = $('banner');
    b.className = `battle-banner tone-${tone || 'neutral'}`;
    b.innerHTML = text;
    b.hidden = false;
    flash(b, 'in', 1200);
    clearTimeout(banner.timer);
    banner.timer = setTimeout(() => { b.hidden = true; }, 1200);
  }

  // ---------- choosing ----------
  // Resolve when the player picks something: a command, a foe, a wretch.
  let chooser = null;
  function pick(kind, value) {
    if (chooser && chooser.accepts.includes(kind)) chooser.resolve({ kind, value });
    // a wretch's card while you choose what to do: their character sheet
    else if (kind === 'pc' && chooser && B.sheet) B.sheet(value);
    else if (Q.Dice) Q.Dice.skip(); // a tap while dice roll hurries them
  }

  function choose(accepts, setup) {
    return new Promise((resolve) => {
      chooser = { accepts, resolve: (v) => { chooser = null; document.body.classList.remove('targeting-foe', 'targeting-pc'); resolve(v); } };
      if (setup) setup();
    });
  }

  function menu(items, title) {
    const box = $('commands');
    box.innerHTML = `<p class="cmd-title">${title}</p>`;
    items.forEach((it, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'cmd' + (it.ghost ? ' ghost' : '');
      b.innerHTML = `${it.label}${it.note ? `<small>${it.note}</small>` : ''}`;
      b.disabled = !!it.disabled;
      b.addEventListener('click', () => pick('cmd', it.value));
      box.appendChild(b);
      if (i === 0 && !it.disabled) setTimeout(() => b.focus({ preventScroll: true }), 0);
    });
    box.hidden = false;
  }

  function hideMenu() {
    $('commands').hidden = true;
  }

  async function chooseCommand(pc) {
    if (Q.Dice) Q.Dice.clear(); // take the last dice off the table before asking
    const cls = Q.classOf(pc);
    const partner = B.party.find((p) => p !== pc && !p.dead);
    for (;;) {
      menu([
        { label: 'Attack', value: 'attack', note: `${esc(pc.weapon.name)} d${pc.weapon.die}${pc.row === 'back' ? ', DR +2 from behind' : ''}` },
        ...(cls ? [{ label: esc(cls.ability.name), value: 'ability', disabled: pc.usedAbility, note: pc.usedAbility ? 'used this battle' : esc(cls.ability.note) }] : []),
        Q.has(pc, 'rosary') ? { label: 'Scroll', value: 'scroll', disabled: true, note: 'the rosary forbids it' }
          : { label: 'Scroll', value: 'scroll', disabled: !B.inv.scrolls.length || pc.powers <= 0, note: B.inv.scrolls.length ? `${pc.powers} left` : 'none' },
        { label: 'Poultice', value: 'poultice', disabled: B.inv.poultices <= 0, note: `${B.inv.poultices}` },
        manualOmens()
          ? { label: 'Omen', value: 'omen', note: `manual · ${pc.omens} left` }
          : { label: 'Omens: auto', value: 'omenmode', note: 'offered after a bad roll · tap for manual' },
        { label: pc.row === 'back' ? 'Step forward' : 'Fall back', value: 'swap', disabled: !partner, note: partner ? `swap with ${short(partner)}` : 'alone' },
        Q.has(pc, 'heart') ? { label: 'Flee', value: 'flee', ghost: true, disabled: true, note: 'the heart won’t run' } : { label: 'Flee', value: 'flee', ghost: true },
      ], `${short(pc)}’s turn`);
      const c = await choose(['cmd']);
      hideMenu();
      if (c.value === 'attack') {
        const foe = await chooseFoe('Attack whom?');
        if (foe) return { kind: 'attack', foe };
      } else if (c.value === 'ability') {
        const key = cls.ability.key;
        if (key === 'wither' || key === 'sacrament') return { kind: 'ability', key };
        const foe = await chooseFoe(`${cls.ability.name}: whom?`);
        if (foe) return { kind: 'ability', key, foe };
      } else if (c.value === 'swap') {
        return { kind: 'swap', partner };
      } else if (c.value === 'scroll') {
        menu([
          ...B.inv.scrolls.map((k) => ({ label: esc(Q.SCROLLS[k].name), value: k, note: esc(Q.SCROLLS[k].text) })),
          { label: 'Back', value: 'back', ghost: true },
        ], 'Read which scroll?');
        const s = await choose(['cmd']);
        hideMenu();
        if (s.value === 'back') continue;
        if (s.value === 'flame') {
          const foe = await chooseFoe('Burn whom?');
          if (foe) return { kind: 'scroll', key: s.value, foe };
        } else {
          const ally = await chooseAlly('Mend whom?');
          if (ally) return { kind: 'scroll', key: s.value, ally };
        }
      } else if (c.value === 'poultice') {
        const ally = await chooseAlly('Bind whose wounds?');
        if (ally) return { kind: 'poultice', ally };
      } else if (c.value === 'omenmode') {
        if (Q.setOmenMode) Q.setOmenMode('manual');
        B.log('<b class="yellow">Omens: manual.</b> No more offers on the dice; spend them from the menu before you act.', 'dim');
      } else if (c.value === 'omen') {
        menu([
          { label: 'Next hit: maximum damage', value: 'max', disabled: pc.omens <= 0 || pc.omenMax },
          { label: 'Next wound: −d6', value: 'ward', disabled: pc.omens <= 0 || pc.omenWard },
          { label: 'Next attack or dodge: DR −4', value: 'dr', disabled: pc.omens <= 0 || pc.omenDR },
          { label: 'Omens: auto', value: 'auto', note: 'offer them on the dice again' },
          { label: 'Back', value: 'back', ghost: true },
        ], `Spend an Omen (${pc.omens} left). It costs no time.`);
        const o = await choose(['cmd']);
        hideMenu();
        if (o.value === 'auto') {
          if (Q.setOmenMode) Q.setOmenMode('auto');
          B.log('<b class="yellow">Omens: auto.</b> They’ll be offered on the dice after a bad roll.', 'dim');
        } else if (o.value !== 'back') {
          pc.omens -= 1;
          if (o.value === 'max') { pc.omenMax = true; B.log(`<b class="yellow">Omen:</b> ${short(pc)}’s next hit will land with full force.`); }
          if (o.value === 'ward') { pc.omenWard = true; B.log(`<b class="yellow">Omen:</b> ${short(pc)}’s next wound will be lessened by d6.`); }
          if (o.value === 'dr') { pc.omenDR = true; B.log(`<b class="yellow">Omen:</b> ${short(pc)}’s next attack or dodge is at DR −4.`); }
          sfx('cast');
        }
        renderParty();
      } else if (c.value === 'flee') {
        return { kind: 'flee' };
      }
    }
  }

  // Pick a target; with only one left standing, it picks itself.
  async function chooseFoe(title) {
    const alive = B.foes.filter((f) => f.hp > 0);
    if (alive.length === 1) return alive[0];
    menu([{ label: 'Back', value: 'back', ghost: true }], title + ' Tap an enemy.');
    const c = await choose(['foe', 'cmd'], () => document.body.classList.add('targeting-foe'));
    hideMenu();
    return c.kind === 'foe' ? B.foes[c.value] : null;
  }

  async function chooseAlly(title) {
    const alive = B.party.filter((p) => !p.dead);
    if (alive.length === 1) return alive[0];
    menu([{ label: 'Back', value: 'back', ghost: true }], title + ' Tap a wretch.');
    const c = await choose(['pc', 'cmd'], () => document.body.classList.add('targeting-pc'));
    hideMenu();
    return c.kind === 'pc' ? B.party[c.value] : null;
  }

  const manualOmens = () => !!(Q.prefs && Q.prefs.omens === 'manual');

  // ---------- Omens, spent after the dice ----------
  // As in the rulebook, an Omen is spent once you see the roll: reroll any die, lower a test's DR by 4,
  // deal maximum damage, or lower a wound by d6. The game offers one only when a roll has gone wrong
  // and someone still has an Omen; the button sits on the dice for a moment and a tap anywhere else
  // turns it down. The wretch who rolled pays if they can, otherwise their partner.
  async function omen(pc, label) {
    if (Q.prefs && Q.prefs.omens === 'manual') return null; // manual Omens: spent from the menu instead
    const payer = pc && !pc.dead && pc.omens > 0 ? pc : B.party.find((p) => !p.dead && p.omens > 0);
    if (!payer || !Q.Dice) return null;
    const pick = await Q.Dice.offer([{ label: `${label}<small>${esc(payer.name.split(' ')[0])}’s Omen · ${payer.omens} left</small>` }]);
    if (pick !== 0) return null;
    payer.omens -= 1;
    sfx('cast');
    renderParty();
    return payer;
  }

  // A failed test: lower the DR by 4 if that is enough to pass, otherwise roll again.
  async function rescue(pc, t, mod, Ab) {
    if (t.ok) return t;
    const close = !t.fumble && t.total + 4 >= t.dr;
    const payer = await omen(pc, close ? 'Omen: lower the DR by 4' : 'Omen: roll again');
    if (!payer) return t;
    const t2 = close ? Q.test(mod, t.dr - 4, t.r) : Q.test(mod, t.dr);
    B.log(`<b class="yellow">Omen:</b> ${short(payer)} ${close ? 'bends fate a little' : 'spits on the dice'}, and ${short(pc)} ${t2.ok ? 'passes' : 'still fails'}.`, t2.ok ? 'hit' : 'miss');
    await throwDice({ dice: [D(20, t2.r, 'yellow', Ab)], verdict: t2.ok ? 'The Omen holds' : 'Fate is not moved', tone: t2.ok ? 'good' : 'bad', text: `${close ? 'Omen: DR −4' : 'Omen: rolled again'} · ${testText(Ab, t2, mod)}` });
    return t2;
  }

  // ---------- the wretches act ----------
  // A melee attack. opts (all optional): label, ability, dr, die, bonusDie, ignoreArmor, anyRow.
  async function swing(pc, f, riposte, opts = {}) {
    // a unique weapon's quirks, when it's the weapon doing the work (not a Bite)
    const usesWeapon = !opts.die;
    const perk = usesWeapon ? pc.weapon.key : null;
    const undead = ['zombie', 'skeleton', 'abbess', 'guard', 'prisoner', 'warden', 'drowned', 'hanged', 'saltwight'].includes(f.kind);
    if (perk === 'saint' && undead && !opts.bonusDie) opts = { ...opts, bonusDie: 6 };
    if (perk === 'plank' && !opts.bonusDie) opts = { ...opts, bonusDie: 4 };
    if (perk === 'gorgh') opts = { ...opts, ignoreArmor: true };
    const ability = opts.ability || 'strength';
    const Ab = ability[0].toUpperCase() + ability.slice(1);
    const behind = pc.row === 'back' && !riposte && !opts.anyRow && B.party.some((p) => p !== pc && !p.dead);
    // manual Omen: DR −4 on this attack
    const omenDR = !riposte && pc.omenDR ? 4 : 0;
    if (omenDR) pc.omenDR = false;
    let res = Q.attack(pc, f, { ...opts, drAdd: (behind ? 2 : 0) - omenDR });
    const label = opts.label || pc.weapon.name;
    const verdictOf = (k) => ({ crit: 'Critical!', hit: 'Hit!', miss: 'Miss', fumble: 'Fumble!' }[k]);
    const toneOf = (k) => (k === 'hit' || k === 'crit' ? 'good' : 'bad');
    await throwDice({ dice: [D(20, res.r, 'yellow', Ab)], verdict: verdictOf(res.kind), tone: toneOf(res.kind), text: `${short(pc)}${riposte ? ' ripostes' : opts.label ? ` · ${esc(opts.label)} on` : ' attacks'} ${the(f)}${behind ? ' from the back row' : ''} · ${testText(Ab, res, pc[ability])}` });
    if (res.kind === 'miss' || res.kind === 'fumble') {
      // an Omen: lower the DR by 4 if that turns it into a hit, otherwise roll again
      const close = res.kind === 'miss' && res.total + 4 >= res.dr;
      const payer = await omen(pc, close ? 'Omen: lower the DR by 4 and hit' : 'Omen: roll again');
      if (payer) {
        res = Q.attack(pc, f, { ...opts, drAdd: (behind ? 2 : 0) - (close ? 4 : 0), r: close ? res.r : undefined });
        B.log(`<b class="yellow">Omen:</b> ${short(payer)} ${close ? 'bends fate a little' : 'spits on the dice'}.`, 'hit');
        await throwDice({ dice: [D(20, res.r, 'yellow', Ab)], verdict: verdictOf(res.kind), tone: toneOf(res.kind), text: `${close ? 'Omen: DR −4' : 'Omen: rolled again'} · ${testText(Ab, res, pc[ability])}` });
      }
    }
    const tag = `<span class="dim">(${Ab} d20 ${res.r}${pc[ability] ? Q.fmt(pc[ability]) : ''}=${res.total} vs DR ${res.dr})</span>`;
    if (res.kind === 'fumble') {
      B.log(`${short(pc)}’s ${esc(label)} goes wide. ${tag}`, 'miss');
      sfx('miss');
      if (perk === 'plank') {
        pc.weapon = { name: 'Splinters', die: 2, art: 'Staff' };
        B.log(`The plank snaps over ${short(pc)}’s knee. Splinters (d2).`, 'hurt');
        renderParty();
      } else if (perk === 'gorgh') {
        const self = d(8);
        await throwDice({ dice: [D(8, self, 'pink', 'Gorgh')], verdict: `${short(pc)} −${self} HP`, tone: 'bad', text: 'The Black Flail swings round into its wielder' });
        B.log(`The Black Flail of Gorgh swings round into ${short(pc)}’s skull: <b>${self}</b>.`, 'hurt');
        await hurt(pc, self, 'the Black Flail of Gorgh');
      } else if (perk === 'hook') await tear(pc);
      if (!riposte && !pc.dead) await foeStrike(f, pc, true);
      return;
    }
    if (res.kind === 'miss') {
      B.log(`${short(pc)} misses ${the(f)}. ${tag}`, 'miss');
      sfx('miss');
      if (perk === 'hook') await tear(pc);
      return;
    }
    const dice = [D(res.die, res.dmgRoll, 'bone', res.maxed ? 'Omen' : 'Damage')];
    if (opts.bonusDie) dice.push(D(opts.bonusDie, res.bonusRoll, 'bone', 'Bonus'));
    if (f.armor && !opts.ignoreArmor) dice.push(D(f.armor, res.armorRoll, 'dim', 'Armor'));
    const rolled = res.dmgRoll + res.bonusRoll;
    const rolledText = opts.bonusDie ? `(${res.dmgRoll} + ${res.bonusRoll})` : rolled;
    await throwDice({ dice, verdict: res.dmg ? `${res.dmg} damage` : 'It glances off', tone: res.dmg ? 'good' : 'neutral', text: `${esc(label)} d${res.die}${opts.bonusDie ? ` + d${opts.bonusDie}` : ''}${opts.ignoreArmor ? ', through armor' : ''}${res.maxed ? ' (Omen: maximum)' : ''} · ${damageText(rolledText, res.kind === 'crit', res.absorbed, res.dmg)}` });
    // an Omen for maximum damage, offered only when it would finish the foe and the roll didn't
    const armorBack = f.armor && !opts.ignoreArmor ? res.armorRoll : 0;
    const maxDmg = Math.max(0, (res.die + (opts.bonusDie || 0)) * (res.kind === 'crit' ? 2 : 1) - armorBack);
    if (res.dmg < f.hp && maxDmg >= f.hp) {
      const payer = await omen(pc, `Omen: maximum damage (${maxDmg}) and it dies`);
      if (payer) {
        res = { ...res, dmg: maxDmg, dmgRoll: res.die, bonusRoll: opts.bonusDie || 0, absorbed: Math.min(armorBack, maxDmg + armorBack), maxed: true };
        B.log(`<b class="yellow">Omen:</b> ${short(payer)} calls the blow home: maximum damage.`, 'hit');
        const maxDice = [D(res.die, res.die, 'yellow', 'Omen')];
        if (opts.bonusDie) maxDice.push(D(opts.bonusDie, opts.bonusDie, 'yellow', 'Omen'));
        await throwDice({ dice: maxDice, verdict: `${maxDmg} damage`, tone: 'good', text: 'Omen: maximum damage' });
      }
    }
    B.log(`${short(pc)}${opts.label ? `’s ${esc(opts.label)}` : ''} hits ${the(f)} for <b>${res.dmg}</b>${res.kind === 'crit' ? ' (CRITICAL)' : ''}. ${tag}`, res.kind === 'crit' ? 'crit' : 'hit');
    sfx(res.dmg ? 'hit' : 'land', { crit: res.kind === 'crit' });
    if (res.dmg > 0 && perk === 'hook') heal(pc, 1, 'The hook drinks');
    if (res.dmg > 0 && perk === 'widow') {
      heal(pc, Math.max(1, Math.floor(res.dmg / 2)), 'The Widow’s Blade drinks');
      const partner = B.party.find((p) => p !== pc && !p.dead);
      if (partner) {
        B.log(`${short(partner)} bleeds for it: <b>1</b>.`, 'hurt');
        await hurt(partner, 1, 'the Widow’s Blade');
      }
    }
    await damageFoe(f, res.dmg, pc);
  }

  // The Gutting Hook takes its due on a miss.
  async function tear(pc) {
    B.log(`The Gutting Hook tears ${short(pc)}’s palm: <b>1</b>.`, 'hurt');
    await hurt(pc, 1, 'the Gutting Hook');
  }

  function heal(pc, n, why) {
    const before = pc.hp;
    pc.hp = Math.min(pc.maxHp, pc.hp + n);
    if (pc.hp > before) B.log(`${why}: ${short(pc)} <b>+${pc.hp - before} HP</b>.`, 'hit');
    renderParty();
  }

  async function damageFoe(f, dmg, by) {
    f.hp -= dmg;
    flash(f.el, 'hit', 500);
    await wait(250);
    if (f.hp <= 0) {
      f.hp = 0;
      B.slain.push(f);
      sfx('slain');
      B.log(`<b>${the(f, true)}</b> ${verb(f, 'is', 'are')} dead.`, 'crit');
      if (Q.anyHas(B.party, 'coin')) {
        const s = d(6);
        B.inv.silver += s;
        B.log(`The Drowned Man’s Coin grows heavier: <b>+${s}s</b>.`, 'hit');
      }
      if (by && Q.has(by, 'weeping')) {
        B.log('The Weeping Sword weeps. <span class="pink">A day is lost.</span>', 'hurt');
        if (B.onDayLost) B.onDayLost();
      }
      if (f.def.boss) B.log(bossLines(f).dead, 'hit');
      renderFoes();
      return;
    }
    if (f.def.boss && f.phase !== 2 && f.hp <= f.maxHp / 2) {
      await bossWakes(f);
      return;
    }
    const score = f.def.morale;
    if (!f.moraleChecked && f.hp <= f.maxHp / 2 && score) {
      f.moraleChecked = true;
      const mo = Q.morale(score);
      await throwDice({ dice: [D(6, mo.a, 'bone', 'Morale'), D(6, mo.b, 'bone')], verdict: mo.breaks ? verb(f, 'It flees!', 'They scatter!') : verb(f, 'It holds', 'They hold'), tone: mo.breaks ? 'good' : 'neutral', text: `${the(f, true)} · morale 2d6 = ${mo.total} vs ${score}` });
      if (mo.breaks) {
        f.hp = 0;
        f.fled = true;
        sfx('flee');
        B.log(`${the(f, true)} ${verb(f, 'flees', 'scatter')} into the dark.`, 'hit');
      }
    }
    renderFoes();
  }

  async function poultice(pc, ally) {
    B.inv.poultices -= 1;
    const rolled = d(6);
    const h = Q.has(ally, 'dirt') ? Math.ceil(rolled / 2) : rolled;
    await throwDice({ dice: [D(6, rolled, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `${short(pc)} binds ${ally === pc ? 'their own' : `${short(ally)}’s`} wounds · black poultice d6${h !== rolled ? ', halved by the grave dirt' : ''}` });
    ally.hp = Math.min(ally.maxHp, ally.hp + h);
    ally.bleeding = false;
    sfx('heal');
    B.log(`${short(ally)} is bound with a black poultice. <b>+${h} HP</b>.`, 'hit');
    renderParty();
  }

  // the Liar's Tongue makes every Presence test harder
  const presDR = (pc, dr) => Q.drOf(pc, dr) + (Q.has(pc, 'tongue') ? 2 : 0);

  async function readScroll(pc, cmd) {
    pc.powers -= 1;
    let r = Q.test(pc.presence, presDR(pc, Q.DR));
    await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? 'The words take hold' : 'The words turn to ash', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} reads the ${esc(Q.SCROLLS[cmd.key].name)} · ${testText('Presence', r, pc.presence)}` });
    r = await rescue(pc, r, pc.presence, 'Presence');
    if (!r.ok) {
      pc.powers = 0;
      sfx('miss');
      B.log(`The words turn to ash in ${short(pc)}’s mouth. No more scrolls until they sleep.`, 'miss');
      if (r.fumble) await hurt(pc, d(2), 'the scroll');
      renderParty();
      return;
    }
    if (cmd.key === 'flame') {
      const f = cmd.foe.hp > 0 ? cmd.foe : B.foes.find((x) => x.hp > 0);
      if (!f) return;
      const rolled = d(8), dmg = rolled * (r.crit ? 2 : 1);
      await throwDice({ dice: [D(8, rolled, 'pink', 'Flame')], verdict: `${dmg} damage`, tone: 'good', text: `Black flame · d8${r.crit ? ' × 2' : ''} = ${dmg}` });
      sfx('cast');
      B.log(`<b class="pink">Black flame</b> wraps ${the(f)} for <b>${dmg}</b>.`, 'crit');
      await damageFoe(f, dmg);
    } else {
      const ally = cmd.ally.dead ? pc : cmd.ally;
      const rolled = d(6), h = rolled * (r.crit ? 2 : 1);
      await throwDice({ dice: [D(6, rolled, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `Mending bone · d6${r.crit ? ' × 2' : ''} = ${h}` });
      ally.hp = Math.min(ally.maxHp, ally.hp + h);
      ally.bleeding = false;
      sfx('heal');
      B.log(`Bone knits in ${short(ally)}’s body. <b>+${h} HP</b>.`, 'hit');
    }
    renderParty();
  }

  async function flee(pc) {
    let r = Q.test(pc.agility, Q.drOf(pc, Q.DR, 'agility'));
    await throwDice({ dice: [D(20, r.r, 'yellow', 'Agility')], verdict: r.ok ? 'You get away!' : 'Cut off', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} leads the retreat · ${testText('Agility', r, pc.agility)}` });
    r = await rescue(pc, r, pc.agility, 'Agility');
    B.log(r.ok ? `${short(pc)} finds a way out. You run.` : `${short(pc)} cannot find a way out.`, r.ok ? '' : 'miss');
    if (r.ok) sfx('flee');
    return r.ok;
  }

  function swapRows(pc, partner) {
    const mine = pc.row;
    pc.row = partner.row;
    partner.row = mine;
    B.log(`${short(pc)} ${pc.row === 'front' ? 'steps in front of' : 'falls back behind'} ${short(partner)}.`, 'dim');
    renderParty();
  }

  // ---------- class abilities (once per battle) ----------
  async function useAbility(pc, cmd) {
    pc.usedAbility = true;
    const cls = Q.classOf(pc);
    const name = cls.ability.name;
    const alive = () => B.foes.filter((x) => x.hp > 0);
    const target = () => (cmd.foe && cmd.foe.hp > 0 ? cmd.foe : alive()[0]);
    if (cmd.key === 'bite') return swing(pc, target(), false, { label: 'Bite', dr: 10, die: 6, ignoreArmor: true });
    if (cmd.key === 'lowblow') return swing(pc, target(), false, { label: 'Low Blow', ability: 'agility', bonusDie: 4, anyRow: true });
    if (cmd.key === 'wither') {
      let r = Q.test(pc.presence, presDR(pc, Q.DR));
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? 'The words rot' : 'The words fail', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} speaks ${name} · ${testText('Presence', r, pc.presence)}` });
      r = await rescue(pc, r, pc.presence, 'Presence');
      if (!r.ok) { B.log(`${short(pc)} mutters the words of withering. Nothing rots.`, 'miss'); return; }
      const foes = alive();
      const rolls = foes.map(() => d(4) * (r.crit ? 2 : 1));
      await throwDice({ dice: foes.map((f, i) => D(4, r.crit ? rolls[i] / 2 : rolls[i], 'pink', f.name.split(' ').pop())), verdict: 'Flesh sloughs away', tone: 'good', text: `${name} · d4${r.crit ? ' × 2' : ''} to every foe` });
      sfx('cast');
      B.log(`<b class="pink">${name}:</b> ${foes.map((f, i) => `${the(f)} −${rolls[i]}`).join(', ')}.`, 'crit');
      for (let i = 0; i < foes.length; i++) if (foes[i].hp > 0) await damageFoe(foes[i], rolls[i]);
      return;
    }
    if (cmd.key === 'sacrament') {
      let r = Q.test(pc.presence, presDR(pc, 10));
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? 'It is heard' : 'Silence', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} performs the ${name} · ${testText('Presence', r, pc.presence)}` });
      r = await rescue(pc, r, pc.presence, 'Presence');
      if (!r.ok) { B.log(`${short(pc)} prays. Nothing below is listening.`, 'miss'); return; }
      const party = B.party.filter((p) => !p.dead);
      const heals = party.map(() => d(6));
      await throwDice({ dice: party.map((p, i) => D(6, heals[i], 'bone', p.name.split(' ')[0])), verdict: 'Wounds close', tone: 'good', text: `${name} · d6 to each wretch` });
      party.forEach((p, i) => { p.hp = Math.min(p.maxHp, p.hp + heals[i]); p.bleeding = false; });
      sfx('heal');
      B.log(`<b class="yellow">${name}:</b> ${party.map((p, i) => `${short(p)} +${heals[i]}`).join(', ')} HP.`, 'hit');
      renderParty();
      return;
    }
    if (cmd.key === 'command') {
      const f = target();
      let r = Q.test(pc.presence, presDR(pc, f.dr));
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? `${f.def.plural ? 'They kneel' : 'It kneels'}` : 'Ignored', tone: r.ok ? 'good' : 'bad', text: `${short(pc)}: “Kneel.” · ${testText('Presence', r, pc.presence)}` });
      r = await rescue(pc, r, pc.presence, 'Presence');
      if (r.ok) { f.stunned = true; sfx('cast'); B.log(`${the(f, true)} ${verb(f, 'falters', 'falter')} before ${short(pc)}’s voice and will lose ${f.def.plural ? 'their' : 'its'} next turn.`, 'hit'); }
      else B.log(`${the(f, true)} ${verb(f, 'does', 'do')} not kneel.`, 'miss');
      renderFoes();
      return;
    }
    if (cmd.key === 'toxin') {
      const f = target();
      let r = Q.test(pc.agility, Q.drOf(pc, Q.DR, 'agility'));
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Agility')], verdict: r.ok ? 'It shatters on them' : 'It misses', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} hurls a ${name} at ${the(f)} · ${testText('Agility', r, pc.agility)}` });
      r = await rescue(pc, r, pc.agility, 'Agility');
      if (!r.ok) { B.log(`The flask smashes on the flagstones. The floor hisses.`, 'miss'); return; }
      const dmg = d(4);
      await throwDice({ dice: [D(4, dmg, 'pink', 'Poison')], verdict: `${dmg} damage`, tone: 'good', text: 'Graveyard tincture · d4 now, d4 every round' });
      f.poison = true;
      sfx('hit');
      B.log(`${the(f, true)} ${verb(f, 'is', 'are')} drenched in poison: <b>${dmg}</b>, and more to come.`, 'hit');
      await damageFoe(f, dmg);
    }
  }

  // ---------- the enemies act ----------
  // Front row three times in four, unless something ignores the rows.
  function pickTarget(anyRow) {
    const living = B.party.filter((p) => !p.dead);
    if (!living.length) return null;
    // whoever is still standing; the ones lying at 0 HP only when nobody is
    const standing = living.filter((p) => !(p.out > 0));
    const alive = standing.length ? standing : living;
    const rand = (list) => list[Math.floor(Math.random() * list.length)];
    const front = alive.filter((p) => p.row !== 'back');
    const back = alive.filter((p) => p.row === 'back');
    if (anyRow || !front.length || !back.length) return rand(alive);
    return Math.random() < 0.75 ? rand(front) : rand(back);
  }

  // One foe's action: each kind has its own trick.
  async function foeAct(f) {
    const others = B.foes.filter((x) => x !== f && x.hp > 0);
    if (f.kind === 'rats') {
      // The swarm: rats ignore the rows, and every other pack of rats makes them harder to dodge.
      const packs = others.filter((x) => x.kind === 'rats').length;
      return foeStrike(f, pickTarget(true), false, packs, packs ? `The swarm comes from everywhere: DR +${packs}` : '');
    }
    if (f.kind === 'cultist') {
      const hurtAlly = [f, ...others].filter((x) => x.hp <= x.maxHp - 3).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
      if (hurtAlly && d(6) <= 2) return benediction(f, hurtAlly);
      if (d(6) <= 2) return cometCurse(f);
    }
    if (f.kind === 'skeleton') {
      const fallen = B.foes.filter((x) => x.hp <= 0 && !x.fled && !x.raised && !x.def.boss);
      if (fallen.length && d(6) <= 3) return raise(f, fallen[0]);
    }
    if (f.def.boss) {
      if (f.phase === 2 && d(6) <= 2) return toll(f);
      if (f.phase !== 2 && d(6) <= 2) return wail(f);
    }
    return foeStrike(f, null, false);
  }

  async function foeStrike(f, target, free, drAdd = 0, why = '') {
    const pc = target && !target.dead ? target : pickTarget();
    if (!pc) return;
    flash(f.el, 'lunge', 400);
    sfx('voice', { kind: f.kind, dist: 1 });
    const omenDR = pc.omenDR ? 4 : 0; // manual Omen: DR −4 on this dodge
    if (omenDR) pc.omenDR = false;
    const defDR = drAdd + (Q.has(pc, 'mirror') ? 1 : 0) - omenDR;
    let res = Q.defend(pc, f.die, defDR);
    const verdictOf = (k) => ({ riposte: 'Riposte!', dodge: 'Dodged', wound: 'Hit', fumble: 'Fumble!' }[k]);
    const toneOf = (k) => (k === 'riposte' || k === 'dodge' ? 'good' : 'bad');
    await throwDice({ dice: [D(20, res.r, 'yellow', 'Defence')], verdict: verdictOf(res.kind), tone: toneOf(res.kind), text: `${the(f, true)} ${verb(f, 'attacks', 'attack')} ${short(pc)} · ${testText('Agility', res, pc.agility)}${why ? ` · ${why}` : ''}` });
    if (res.kind === 'wound' || res.kind === 'fumble') {
      const close = res.kind === 'wound' && res.total + 4 >= res.dr;
      const payer = await omen(pc, close ? 'Omen: lower the DR by 4 and dodge' : 'Omen: roll again');
      if (payer) {
        if (res.brokeArmor) { pc.armor.tier += 1; pc.armor.name = Q.ARMOR[pc.armor.tier].name; } // the fumble never happened
        B.log(`<b class="yellow">Omen:</b> ${short(payer)} ${close ? 'bends fate a little' : 'spits on the dice'}.`, 'hit');
        if (close) res = { ...res, kind: 'dodge', ok: true, dr: res.dr - 4 };
        else res = Q.defend(pc, f.die, defDR);
        await throwDice({ dice: [D(20, res.r, 'yellow', 'Defence')], verdict: verdictOf(res.kind), tone: toneOf(res.kind), text: `${close ? 'Omen: DR −4' : 'Omen: rolled again'} · ${testText('Agility', res, pc.agility)}` });
      }
    }
    if (res.kind === 'riposte') {
      B.log(`${short(pc)} slips the blow and strikes back!`, 'hit');
      await swing(pc, f, true);
      return;
    }
    if (res.kind === 'dodge') { B.log(`${the(f, true)} ${verb(f, 'misses', 'miss')} ${short(pc)}.`, 'miss'); sfx('miss'); return; }
    const dice = [D(f.die, res.dmgRoll, 'pink', 'Wound')];
    if (res.armorDie) dice.push(D(res.armorDie, res.armorRoll, 'dim', 'Armor'));
    if (res.warded) dice.push(D(6, res.wardRoll, 'yellow', 'Omen'));
    const sum = damageText(res.dmgRoll, res.kind === 'fumble', res.absorbed, res.before) + (res.warded ? `, an Omen takes ${res.wardRoll} off: ${res.dmg}` : '');
    await throwDice({ dice, verdict: res.dmg ? `${short(pc)} −${res.dmg} HP` : 'No harm done', tone: res.dmg ? 'bad' : 'good', text: `${esc(f.def.name)} d${f.die}${res.kind === 'fumble' ? ', doubled' : ''} · ${sum}` });
    const notes = [res.brokeArmor ? `${short(pc)}’s armor cracks` : '', res.warded ? `an Omen takes ${res.wardRoll} off` : ''].filter(Boolean).join(', ');
    sfx(res.dmg ? 'hurt' : 'land');
    if (res.dmg) B.log(`${the(f, true)} ${verb(f, 'hits', 'hit')} ${short(pc)} for <b>${res.dmg}</b>${notes ? ` (${notes})` : ''}.`, 'hurt');
    else B.log(`${the(f, true)} ${verb(f, 'hits', 'hit')} ${short(pc)}, but it does no harm${notes ? ` (${notes})` : ''}.`, 'miss');
    if (res.dmg > 0) await hurt(pc, res.dmg, f.def.name);
    if (res.dmg > 0 && f.kind === 'guard' && !pc.dead && d(3) === 1) {
      // the truncheon rings your skull: Toughness DR 12 or lose your next turn
      let t = Q.test(pc.toughness, Q.drOf(pc, Q.DR));
      await throwDice({ dice: [D(20, t.r, 'yellow', 'Toughness')], verdict: t.ok ? 'Still standing' : 'Dazed', tone: t.ok ? 'good' : 'bad', text: `The truncheon rings ${short(pc)}’s skull · ${testText('Toughness', t, pc.toughness)}` });
      t = await rescue(pc, t, pc.toughness, 'Toughness');
      if (!t.ok) { pc.dazed = true; B.log(`The truncheon rings ${short(pc)}’s skull. <b>Dazed</b>: they lose their next turn.`, 'hurt'); }
    }
    if (res.dmg > 0 && Q.has(pc, 'mirror') && d(3) === 1 && f.hp > 0) {
      B.log(`The Mirror Shard flashes: ${the(f)} ${verb(f, 'takes', 'take')} the same wound, <b>${res.dmg}</b>.`, 'hit');
      await damageFoe(f, res.dmg);
    }
    renderParty();
  }

  // A Presence test against something no armor stops. Returns true if the wretch withstood it.
  async function resist(pc, label, text) {
    if (Q.has(pc, 'mask')) {
      B.log(`${text} ${short(pc)}, but it slides off the Plague Mask.`, 'miss');
      await wait(500);
      return true;
    }
    let r = Q.test(pc.presence, presDR(pc, Q.DR));
    await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? `${short(pc)} withstands it` : `${short(pc)} is struck`, tone: r.ok ? 'good' : 'bad', text: `${text} ${short(pc)} · ${testText('Presence', r, pc.presence)}` });
    r = await rescue(pc, r, pc.presence, 'Presence');
    return r.ok;
  }

  // Cultists: a curse from the comet. It reaches either row, and armor is no help.
  async function cometCurse(f) {
    const pc = pickTarget(true);
    if (!pc) return;
    flash(f.el, 'cast', 600);
    sfx('cast');
    B.log(`${the(f, true)} raises a branded hand to the comet.`, 'dim');
    if (await resist(pc, 'Curse', 'Comet’s Wrath on')) { B.log(`The curse slides off ${short(pc)}.`, 'miss'); return; }
    const dmg = d(6);
    await throwDice({ dice: [D(6, dmg, 'pink', 'Curse')], verdict: `${short(pc)} −${dmg} HP`, tone: 'bad', text: 'Comet’s Wrath · d6, armor is no help' });
    sfx('hurt');
    B.log(`Comet-fire burns through ${short(pc)}: <b>${dmg}</b>.`, 'hurt');
    await hurt(pc, dmg, 'a cultist’s curse');
    renderParty();
  }

  // Cultists: heal a hurt ally.
  async function benediction(f, ally) {
    flash(f.el, 'cast', 600);
    sfx('voice', { kind: 'cultist', dist: 1 });
    const h = d(6);
    await throwDice({ dice: [D(6, h, 'bone', 'Heal')], verdict: `${ally === f ? 'It' : the(ally, true)} +${h} HP`, tone: 'bad', text: `${the(f, true)} chants a black benediction${ally === f ? '' : ` over ${the(ally)}`}` });
    ally.hp = Math.min(ally.maxHp, ally.hp + h);
    B.log(`${the(f, true)} chants, and ${ally === f ? 'its' : `${the(ally)}’s`} wounds close. <b>+${h} HP</b>.`, 'hurt');
    renderFoes();
  }

  // Skeletons: call a fallen foe back up, once each.
  async function raise(f, x) {
    flash(f.el, 'cast', 600);
    sfx('voice', { kind: 'skeleton', dist: 0 });
    sfx('cast');
    x.hp = Math.max(1, Math.ceil(x.maxHp / 2));
    x.raised = true;
    x.moraleChecked = true;
    x.poison = false;
    B.slain = B.slain.filter((s) => s !== x);
    await throwDice({ dice: [], verdict: `${x.def.plural ? 'They rise' : 'It rises'}!`, tone: 'bad', text: `${the(f, true)} rattles a summons at ${the(x)}` });
    B.log(`${the(f, true)} clatters its jaw, and ${the(x)} ${verb(x, 'gets', 'get')} back up.`, 'hurt');
    renderFoes();
    flash(x.el, 'rise', 800);
  }

  // What each boss says and does in its two phases. The pattern is the same: a cry that freezes one
  // wretch, then at half HP it changes (no armor, a bigger die, two actions a round), its fallen
  // stand up again, and it gets a blow that hits the whole party.
  const BOSS_LINES = {
    abbess: {
      cry: 'Wail', crying: 'The Abbess wails at', shrug: (n) => `The Abbess wails. ${n} grits their teeth through it.`, froze: (n) => `The Abbess wails and ${n}’s limbs turn to lead.`,
      wake: '<b>She wakes</b><small>The Abbess tears off her crown</small>', woke: '<b class="pink">The Abbess tears off her crown.</b> The Bell-Tongue begins to swing. She will act twice each round.',
      call: (x) => `At her call, ${x} rises again.`,
      blow: 'Toll', blowing: 'The Bell-Tongue tolls against her ribs.', blowAt: 'The toll rings through', blowHit: (n) => `The sound splits ${n}’s skull`, blowEsc: (n) => `${n} stops their ears in time.`, cause: 'the toll of the Bell-Tongue',
      dead: 'The Abbess crumples. Her weeping stops.',
    },
    warden: {
      cry: 'Bellow', crying: '“BACK IN YOUR CELL!” The Warden bellows at', shrug: (n) => `${n} has heard worse. They don’t go back.`, froze: (n) => `Years of that voice: ${n} freezes like a prisoner at roll-call.`,
      wake: '<b>Lights out</b><small>The Warden tears off his mask</small>', woke: '<b class="pink">The Warden tears off his mask.</b> Under it, the sea has been at his face. He swings his great ring of keys, and will act twice each round.',
      call: (x) => `“GUARDS!” And ${x} gets back up, still on duty.`,
      blow: 'Keys', blowing: 'He whirls the great ring of keys, a pound of iron on a chain.', blowAt: 'The keys come round at', blowHit: (n) => `The keys catch ${n}`, blowEsc: (n) => `${n} ducks under the keys.`, cause: 'the Warden’s keys',
      dead: 'The Warden goes down into the water like a felled bell. His ring of keys floats up beside him.',
      // the DM stops the fight to tell you what just happened (fallen: the dead about to stand up again)
      title: 'No one leaves',
      story: (fallen) => `The Warden goes down on one knee in the black water, and for a moment you think it’s over.

Then he laughs, a wet, bubbling sound, and tears off his mask. Underneath it, the sea has been at his face for months. <em>“No one leaves,”</em> he says. <em>“No one ever leaves.”</em>

${fallen.length ? `He bellows down the hall, <em>“GUARDS!”</em>, and ${fallen.length > 1 ? 'the guards you put down stand' : 'the guard you put down stands'} back up in the water, still on duty.` : 'He bellows down the hall for his guards. Nothing answers but the water.'}

<em>He has thrown off his armor. From now on he hits harder (d10) and acts twice each round.${fallen.length ? ` ${fallen.length > 1 ? 'The risen guards fight' : 'The risen guard fights'} on at half strength.` : ''}</em>`,
    },
  };
  const bossLines = (f) => BOSS_LINES[f.kind] || BOSS_LINES.abbess;

  // A boss, before: a cry that freezes a wretch for a turn.
  async function wail(f) {
    const L = bossLines(f);
    const pc = pickTarget(true);
    if (!pc) return;
    flash(f.el, 'cast', 600);
    sfx('voice', { kind: f.kind, dist: 0 });
    if (await resist(pc, L.cry, L.crying)) { B.log(L.shrug(short(pc)), 'dim'); return; }
    pc.dazed = true;
    B.log(L.froze(short(pc)), 'hurt');
    renderParty();
  }

  // A boss, after: a blow that reaches every wretch, and no armor helps.
  async function toll(f) {
    const L = bossLines(f);
    flash(f.el, 'cast', 600);
    sfx('toll', { f: 147 });
    B.log(L.blowing, 'hurt');
    for (const pc of B.party) {
      if (pc.dead) continue;
      if (await resist(pc, L.blow, L.blowAt)) { B.log(L.blowEsc(short(pc)), 'miss'); continue; }
      const dmg = d(4);
      await throwDice({ dice: [D(4, dmg, 'pink', L.blow)], verdict: `${short(pc)} −${dmg} HP`, tone: 'bad', text: `${L.blow} · d4, armor is no help` });
      sfx('hurt');
      B.log(`${L.blowHit(short(pc))}: <b>${dmg}</b>.`, 'hurt');
      await hurt(pc, dmg, L.cause);
    }
    renderParty();
  }

  // Halfway dead, a boss changes: no more armor, a bigger die, two actions a round, and its fallen
  // stand up again. The DM stops the fight to say so.
  async function bossWakes(f) {
    const L = bossLines(f);
    f.phase = 2;
    f.armor = 0;
    f.die = 10 + B.mods.dieAdd;
    renderFoes();
    banner(L.wake, 'bad');
    sfx('toll', { f: 73 });
    sfx('voice', { kind: f.kind, dist: 0 });
    B.log(L.woke, 'hurt');
    const fallen = B.foes.filter((y) => y.hp <= 0 && !y.fled && !y.raised && !y.def.boss);
    await wait(1300);
    if (B.say && L.story) await B.say(L.title, L.story(fallen), [{ label: 'Fight on' }]);
    for (const x of fallen) {
      x.hp = Math.max(1, Math.ceil(x.maxHp / 2));
      x.raised = true;
      x.moraleChecked = true;
      B.slain = B.slain.filter((s) => s !== x);
      B.log(bossLines(f).call(the(x)), 'hurt');
      renderFoes();
      flash(x.el, 'rise', 800);
      await wait(500);
    }
  }

  // Poison from the Herbmaster's flask, at the start of the foe's turn.
  async function poisonTick(f) {
    const dmg = d(4);
    await throwDice({ dice: [D(4, dmg, 'pink', 'Poison')], verdict: `${dmg} damage`, tone: 'good', text: `The tincture eats at ${the(f)}` });
    sfx('hit');
    B.log(`Poison eats at ${the(f)}: <b>${dmg}</b>.`, 'hit');
    await damageFoe(f, dmg);
  }

  // Damage to a wretch: at 0 HP they are Broken, below 0 they are dead.
  async function hurt(pc, dmg, cause) {
    if (dmg > 0 && pc.hp - dmg <= 0) {
      const payer = await omen(pc, `Omen: lower the wound by d6`);
      if (payer) {
        const r = d(6);
        const before = dmg;
        dmg = Math.max(0, dmg - r);
        B.log(`<b class="yellow">Omen:</b> the wound to ${short(pc)} is lessened by ${r}.`, 'hit');
        await throwDice({ dice: [D(6, r, 'yellow', 'Omen')], verdict: dmg ? `${short(pc)} −${dmg} HP` : 'No harm done', tone: dmg ? 'neutral' : 'good', text: `Omen: ${before} − d6 (${r}) = ${dmg}` });
        if (!dmg) { renderParty(); return; }
      }
    }
    const before = pc.hp;
    pc.hp -= dmg;
    flash(pc.el, 'hurt', 500);
    if (B.onHurt) B.onHurt();
    // the house rule (Settings): a blow that would kill rolls on the Broken table too, unless you were already down
    const overkill = pc.hp < 0 && before > 0 && Q.prefs && Q.prefs.broken === 'below';
    if (overkill) pc.hp = 0;
    // below 0: nothing to roll
    if (pc.hp < 0) {
      const died = kill(pc, cause);
      await dmSays(pc, died ? 'Dead' : 'Not yet', died
        ? `${before > 0 ? `${short(pc)} had ${before} HP left, and takes ${dmg}.` : `${short(pc)} was already down at 0 HP, and takes ${dmg} more.`} That is <em>below 0</em>, and below 0 there is nothing to roll.

<em>${short(pc)} is dead</em>, killed by ${esc(cause)}.`
        : `${short(pc)} should be dead. The Pilgrim’s Shroud takes their place and falls to dust. <em>1 HP.</em>`);
      return;
    }
    // exactly 0, from above it: Broken
    if (pc.hp === 0 && before > 0) {
      let b = Q.broken();
      if (b.dead && Q.has(pc, 'dirt')) {
        B.log(`Death comes for ${short(pc)}, but the grave dirt says they are already buried. Roll again.`, 'hit');
        b = Q.broken();
      }
      await throwDice({ dice: [D(4, b.r, 'pink', 'Broken')], verdict: b.title, tone: b.dead ? 'bad' : 'neutral', text: `${short(pc)} drops to 0 HP and is Broken · d4` });
      if (b.dead && await omen(pc, 'Omen: roll the d4 again')) {
        b = Q.broken();
        B.log('<b class="yellow">Omen:</b> death is asked to roll again.', 'hit');
        await throwDice({ dice: [D(4, b.r, 'pink', 'Broken')], verdict: b.title, tone: b.dead ? 'bad' : 'neutral', text: 'Omen: rolled again' });
      }
      B.log(`<b>${short(pc)} is Broken:</b> ${esc(b.title.toLowerCase())}.`, 'hurt');
      if (b.dead) {
        const died = kill(pc, cause);
        await dmSays(pc, died ? 'Dead' : 'Not yet', died
          ? `${overkill ? `${short(pc)} takes ${dmg} with ${before} HP left, and is <em>Broken</em>` : `${short(pc)} drops to 0 HP: <em>Broken</em>`}. The d4 comes up <b>4</b>.

<em>${short(pc)} is dead</em>, killed by ${esc(cause)}.`
          : `The d4 says <b>4</b>: dead. But the Pilgrim’s Shroud takes ${short(pc)}’s place and falls to dust. <em>1 HP.</em>`);
        return;
      }
      applyBroken(pc, b);
      renderParty();
      await dmSays(pc, 'Broken', brokenText(pc, b, overkill && { before, dmg }));
    }
    renderParty();
  }

  // What the Broken table does, here and now. In a fight, the rounds out are real; outside one they pass
  // (a pit, a fall) and you come round.
  function applyBroken(pc, b) {
    if (b.ability) {
      pc[b.ability] = Math.max(-3, pc[b.ability] - 1);
      if (b.kind === 'eye') pc.lostEye = true;
      else pc.injuries = [...(pc.injuries || []), `${b.severed ? 'a half-severed' : 'a broken'} ${b.limb}`];
    }
    if (b.kind === 'bleed') {
      pc.bleeding = true;
      pc.haem = { left: b.hours * Q.HOUR_STEPS, hours: b.hours };
    }
    if (b.rounds) {
      if (inFight()) { pc.out = b.rounds; pc.wakeHp = b.hp; } else pc.hp = b.hp;
    }
  }
  const inFight = () => !!(B && B.foes && B.foes.length);
  const ABILITY_NAME = { strength: 'Strength', agility: 'Agility', presence: 'Presence', toughness: 'Toughness' };
  function brokenText(pc, b, over) {
    const n = short(pc);
    const rounds = (k) => `${k} round${k === 1 ? '' : 's'}`;
    const head = over
      ? `${n} takes ${over.dmg} with ${over.before} HP left. By the book that is death, but at this table a killing blow is <em>Broken</em> instead: ${n} drops to <b>0 HP</b>. The d4 comes up <b>${b.r}</b>.`
      : `${n} drops to <b>0 HP</b> and is <em>Broken</em>. The d4 comes up <b>${b.r}</b>.`;
    const still = inFight()
      ? ` Until then ${n} lies at 0 HP. The enemy will go for whoever is still standing, but <em>one more wound and ${n} is dead</em>.`
      : '';
    if (b.kind === 'out') {
      return `${head}

${n} goes down in the filth, senseless. ${inFight() ? `<em>Out for ${rounds(b.rounds)}</em>, then ${n} wakes with <b>${b.hp} HP</b>.${still}` : `A while later ${n} comes round, with <b>${b.hp} HP</b>.`}`;
    }
    if (b.kind === 'limb' || b.kind === 'eye') {
      const hurtText = b.kind === 'eye' ? `${n} loses an eye (d6: 6)` : `${n}’s ${b.limb} is ${b.severed ? 'hacked half off' : 'broken'} (d6: ${b.r6})`;
      return `${head}

${hurtText}. It won’t heal right: <em>${ABILITY_NAME[b.ability]} −1</em>, for good. ${inFight() ? `${n} can’t act for ${rounds(b.rounds)}, then gets up with <b>${b.hp} HP</b>.${still}` : `A while later ${n} gets up again, with <b>${b.hp} HP</b>.`}`;
    }
    const steps = b.hours * Q.HOUR_STEPS;
    return `${head}

<em>Haemorrhage.</em> ${n} stays on their feet, at 0 HP, bleeding badly. Unless the wound is treated, <em>${n} bleeds to death in ${b.hours} hour${b.hours === 1 ? '' : 's'}</em> (about ${steps} steps). A black poultice will stop it, or the basilica’s priests, or a healing power. Sleep won’t.

Until then every test ${n} makes is <b>DR ${b.hours > 1 ? '16' : '18'}</b>${b.hours > 1 ? ', and DR 18 in the last hour' : ''}. And at 0 HP, <em>one more wound and ${n} is dead</em>.`;
  }
  // The DM stops the fight to say what just happened.
  async function dmSays(pc, title, text) {
    if (!B.say) return;
    const over = B.party.every((p) => p.dead);
    await B.say(title, text, [{ label: over ? 'Go on' : inFight() ? 'Fight on' : 'Go on' }]);
  }

  function kill(pc, cause) {
    if (pc.relic === 'shroud') {
      Q.takeOff(pc);
      pc.hp = 1;
      pc.out = 0;
      B.log(`<b class="yellow">${esc(pc.name)} should be dead.</b> The Pilgrim’s Shroud takes their place and falls to dust. 1 HP.`, 'hit');
      sfx('toll', { f: 196 });
      renderParty();
      return false;
    }
    pc.out = 0;
    pc.bleeding = false;
    delete pc.haem;
    pc.dead = true;
    pc.hp = Math.min(pc.hp, 0);
    pc.cause = cause;
    sfx('toll', { f: 98 });
    B.log(`<b class="pink">${esc(pc.name)} is dead.</b>`, 'hurt');
    renderParty();
    return true;
  }
  Q.hurtWretch = async (pc, dmg, cause, hooks) => {
    // used outside battle (pits, fonts, falls): same rules, no battle screen
    const prev = B;
    B = { party: hooks.party || [pc], foes: [], log: hooks.log, onHurt: hooks.onHurt, onChange: hooks.onChange, say: hooks.say };
    try { await hurt(pc, dmg, cause); } finally { B = prev; }
  };

  // ---------- a whole battle ----------
  // opts: { party, foes: [{ key }], inv: { poultices, scrolls }, misery, log, onChange, onHurt }
  // Resolves to { outcome: 'won' | 'fled' | 'lost', silver }.
  async function run(opts) {
    const mods = Q.miseryMods(opts.misery || 0);
    const foes = opts.foes.map((m) => {
      const def = Q.MONSTERS[m.key];
      const hp = (m.hp !== undefined ? m.hp : def.hp()) + (def.kind === 'rats' ? mods.ratHp : 0);
      return {
        key: m.key, def, kind: def.kind, name: m.name || def.name, proper: !!m.name, hp, maxHp: m.maxHp || hp, moraleChecked: false,
        dr: def.dr, armor: def.armor, die: def.die + mods.dieAdd, phase: 1,
      };
    });
    B = { ...opts, foes, slain: [], active: -1, mods };
    // what the story did to the boss (js/story.js): no tears, no armor
    if (opts.bossWeak) for (const f of foes) if (f.def.boss) { f.armor = 0; f.hp = Math.max(1, f.hp - 3); f.maxHp = f.hp; }
    fixRows(B.party);
    B.party.forEach((p) => { p.dazed = false; p.usedAbility = false; });
    $('battle').hidden = false;
    document.body.classList.add('in-battle');
    renderFoes();
    renderParty();
    hideMenu();
    const names = [...new Set(foes.map((f) => f.name))].join(' and ');
    banner(`<b>${esc(names)}!</b>`, 'bad');
    B.log(`<b class="yellow">${esc(names)}!</b> <span class="dim">${esc(foes[0].def.desc)}</span>`);
    await wait(900);

    // the Rat-King's Knot: rats bow and scatter
    const king = B.party.find((p) => Q.has(p, 'ratking'));
    if (king && B.foes.some((f) => f.kind === 'rats' && f.hp > 0)) {
      for (const f of B.foes) if (f.kind === 'rats' && f.hp > 0) { f.hp = 0; f.fled = true; }
      B.log(`The rats see the Knot on ${short(king)} and bow, and scatter into the walls.`, 'hit');
      sfx('flee');
      renderFoes();
      await wait(900);
    }
    // the Hand of Glory: you act first, and it burns its bearer
    const glory = B.party.find((p) => Q.has(p, 'glory'));
    let theyFirst = false;
    if (!B.foes.some((f) => f.hp > 0)) {
      // nothing left to fight
    } else if (B.firstStrike) {
      B.log('You came on her unseen. <b class="yellow">You strike first.</b>', 'hit');
    } else if (B.foesFirst && !glory) {
      theyFirst = true;
      B.log('She was waiting for you. <b class="pink">She strikes first.</b>', 'hurt');
    } else if (glory) {
      B.log(`The Hand of Glory flares in ${short(glory)}’s grip: you move first.`, 'hit');
      await hurt(glory, 1, 'the Hand of Glory');
    } else {
      let init = d(6);
      theyFirst = init <= 3;
      await throwDice({ dice: [D(6, init, 'bone', 'Initiative')], verdict: theyFirst ? 'They strike first' : 'You are quicker', tone: theyFirst ? 'bad' : 'good', text: 'd6: on 1–3 the enemy acts first' });
      if (theyFirst && await omen(null, 'Omen: roll initiative again')) {
        init = d(6);
        theyFirst = init <= 3;
        await throwDice({ dice: [D(6, init, 'bone', 'Initiative')], verdict: theyFirst ? 'They strike first' : 'You are quicker', tone: theyFirst ? 'bad' : 'good', text: 'Omen: rolled again' });
      }
    }
    let outcome = B.party.every((p) => p.dead) ? 'lost' : B.foes.some((f) => f.hp > 0) ? null : 'won';
    for (let round = 1; !outcome; round++) {
      for (const p of B.party) {
        if (!p.dead && Q.has(p, 'rosary') && p.hp < p.maxHp) heal(p, 1, 'The rosary bleeds into the wound');
      }
      if (!(round === 1 && theyFirst)) {
        for (let i = 0; i < B.party.length && !outcome; i++) {
          const pc = B.party[i];
          if (pc.dead) continue;
          if (!B.foes.some((f) => f.hp > 0)) break;
          B.active = i;
          renderParty();
          if (pc.out > 0 && pc.hp > 0) {
            // healed where they lay: back up
            pc.out = 0;
            B.log(`${short(pc)} is back on their feet.`, 'hit');
          }
          if (pc.out > 0) {
            pc.out -= 1;
            if (pc.out === 0) wake(pc);
            else B.log(`${short(pc)} lies senseless at 0 HP (${pc.out} more round${pc.out === 1 ? '' : 's'}).`, 'dim');
            renderParty();
            await wait(800);
            continue;
          }
          if (pc.dazed) {
            pc.dazed = false;
            B.log(`${short(pc)} stands frozen, and the moment passes.`, 'dim');
            await wait(700);
            continue;
          }
          const cmd = await chooseCommand(pc);
          if (cmd.kind === 'attack') await swing(pc, cmd.foe.hp > 0 ? cmd.foe : B.foes.find((f) => f.hp > 0), false);
          else if (cmd.kind === 'ability') await useAbility(pc, cmd);
          else if (cmd.kind === 'swap') swapRows(pc, cmd.partner);
          else if (cmd.kind === 'poultice') await poultice(pc, cmd.ally);
          else if (cmd.kind === 'scroll') await readScroll(pc, cmd);
          else if (cmd.kind === 'flee' && (await flee(pc))) outcome = 'fled';
          if (B.party.every((p) => p.dead)) outcome = 'lost';
        }
        B.active = -1;
        renderParty();
      }
      if (outcome) break;
      if (!B.foes.some((f) => f.hp > 0)) { outcome = 'won'; break; }
      for (const f of B.foes) {
        if (f.hp <= 0) continue;
        if (f.poison) await poisonTick(f);
        if (f.hp <= 0) continue;
        if (f.stunned) {
          f.stunned = false;
          B.log(`${the(f, true)} ${verb(f, 'stays', 'stay')} down, cowed.`, 'dim');
          renderFoes();
          await wait(600);
          continue;
        }
        for (let n = f.phase === 2 ? 2 : 1; n > 0 && f.hp > 0; n--) {
          if (B.party.every((p) => p.dead)) break;
          await foeAct(f);
        }
        if (B.party.every((p) => p.dead) || !B.foes.some((x) => x.hp > 0)) break;
      }
      if (B.party.every((p) => p.dead)) outcome = 'lost';
      else if (!B.foes.some((f) => f.hp > 0)) outcome = 'won';
    }
    if (Q.Dice) Q.Dice.clear();
    hideMenu();
    // when the fight is over, whoever is still out comes round
    if (outcome !== 'lost') for (const pc of B.party) if (!pc.dead && pc.out > 0) wake(pc);
    let silver = 0;
    if (outcome === 'won') {
      silver = B.slain.reduce((s, f) => s + f.def.silver(), 0);
      banner(`<b>Victory</b>${silver ? `<small>${silver}s in the filth</small>` : ''}`, 'good');
      sfx('victory');
      B.log(`<b class="yellow">Victory.</b>${silver ? ` <b>${silver}s</b> in the filth.` : ''}`, 'crit');
    } else if (outcome === 'fled') banner('<b>Escaped</b>', 'neutral');
    else banner('<b>Dead</b>', 'bad');
    await wait(1400);
    $('battle').hidden = true;
    $('banner').hidden = true;
    document.body.classList.remove('in-battle');
    const result = { outcome, silver, slain: B.slain.length };
    B = null;
    return result;
  }

  function wake(pc) {
    pc.out = 0;
    pc.hp = Math.max(pc.hp, pc.wakeHp || 1);
    delete pc.wakeHp;
    B.log(`${short(pc)} comes round, with <b>${pc.hp} HP</b>.`, 'hit');
    sfx('heal');
    renderParty();
  }

  // keyboard: arrows move between buttons, Enter/Space presses, Escape backs out
  window.addEventListener('keydown', (e) => {
    if (!B || $('battle').hidden || !$('modal').hidden) return;
    if (!chooser) {
      if (e.key.toLowerCase() === 'o' && Q.Dice) { e.preventDefault(); Q.Dice.accept(); return; }
      if ([' ', 'enter'].includes(e.key.toLowerCase()) && Q.Dice) { e.preventDefault(); Q.Dice.skip(); }
      return;
    }
    const k = e.key.toLowerCase();
    const targets = document.body.classList.contains('targeting-foe') ? [...document.querySelectorAll('.foe-card:not(:disabled)')]
      : document.body.classList.contains('targeting-pc') ? [...document.querySelectorAll('.pc-card:not(:disabled)')]
      : [...document.querySelectorAll('#commands .cmd:not(:disabled)')];
    const i = targets.indexOf(document.activeElement);
    if (['arrowdown', 'arrowright'].includes(k)) { e.preventDefault(); (targets[(i + 1) % targets.length] || targets[0]).focus(); }
    if (['arrowup', 'arrowleft'].includes(k)) { e.preventDefault(); (targets[(i - 1 + targets.length) % targets.length] || targets[0]).focus(); }
    if (k === 'escape') { const back = [...document.querySelectorAll('#commands .cmd')].find((b) => b.textContent === 'Back'); if (back) back.click(); }
    if (/^[1-9]$/.test(k) && !document.body.classList.contains('targeting-foe') && !document.body.classList.contains('targeting-pc')) {
      const b = document.querySelectorAll('#commands .cmd')[+k - 1];
      if (b && !b.disabled) b.click();
    }
    if (document.body.classList.contains('targeting-foe') || document.body.classList.contains('targeting-pc')) {
      if (i < 0 && targets[0] && ['arrowdown', 'arrowright', 'arrowup', 'arrowleft'].includes(k)) targets[0].focus();
    }
  });

  // One wretch in front and one behind; if both stand in the same row, the first steps forward.
  function fixRows(party) {
    const alive = party.filter((p) => !p.dead);
    party.forEach((p) => { if (p.row !== 'back' && p.row !== 'front') p.row = 'front'; if (!Array.isArray(p.pack)) p.pack = []; });
    if (alive.length === 2 && alive[0].row === alive[1].row) { alive[0].row = 'front'; alive[1].row = 'back'; }
  }
  Q.fixRows = fixRows;

  // A failed test outside battle (a pit): the same Omen offer.
  Q.rescueTest = async (party, pc, t, mod, Ab, hooks) => {
    const prev = B;
    B = { party, foes: [], log: hooks.log, onChange: hooks.onChange };
    try { return await rescue(pc, t, mod, Ab); } finally { B = prev; }
  };

  Q.Battle = { run, active: () => !!B };
})();
