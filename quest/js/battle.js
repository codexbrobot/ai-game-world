// Turn-based battles, Final Fantasy style, played with Mörk Borg rules.
// The enemies line up across the top, your two wretches wait below, and each wretch picks a command in
// turn. Then the enemies strike. Every roll is thrown on screen with Q.Dice.
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

  const the = (f, cap) => (/^The /.test(f.name) ? esc(f.name) : `${cap ? 'The' : 'the'} ${esc(f.name)}`);
  const verb = (f, one, many) => (f.def.plural ? many : one);
  const short = (pc) => esc(pc.name.split(' ')[0]);

  let B = null; // the battle in progress

  // ---------- drawing the battle ----------
  function renderFoes() {
    const row = $('foes');
    row.innerHTML = '';
    B.foes.forEach((f, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `foe-card kind-${f.kind}` + (f.hp <= 0 ? (f.fled ? ' fled' : ' slain') : '');
      card.dataset.i = i;
      card.innerHTML = `<img src="${Q.assetUrl(f.kind)}" alt=""><span class="foe-label"><b>${esc(f.name)}</b><small>${f.hp > 0 ? Q.healthWord(f.hp, f.maxHp) : f.fled ? 'Fled' : 'Dead'}</small></span>`;
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
      card.className = 'pc-card' + (pc.dead ? ' dead' : '') + (B.active === i ? ' active' : '');
      card.dataset.i = i;
      const pct = pc.dead ? 0 : Math.max(0, Math.min(1, pc.hp / pc.maxHp)) * 100;
      const marks = `${pc.omenMax ? '<i title="next hit at maximum">▲</i>' : ''}${pc.omenWard ? '<i title="next wound turned aside">◆</i>' : ''}${pc.dazed ? '<i title="dazed">✶</i>' : ''}`;
      card.innerHTML = `<img src="${Q.portraitUrl(pc.name)}" alt="">
        <span class="pc-info"><b>${esc(pc.name)}</b>
        <span class="hpbar small"><span style="width:${pct}%"></span><em>${pc.dead ? 'Dead' : `${Math.max(0, pc.hp)}/${pc.maxHp}`}</em></span>
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
    for (;;) {
      menu([
        { label: 'Attack', value: 'attack', note: `${esc(pc.weapon.name)} d${pc.weapon.die}` },
        { label: 'Scroll', value: 'scroll', disabled: !B.inv.scrolls.length || pc.powers <= 0, note: B.inv.scrolls.length ? `${pc.powers} left` : 'none' },
        { label: 'Poultice', value: 'poultice', disabled: B.inv.poultices <= 0, note: `${B.inv.poultices}` },
        { label: 'Omen', value: 'omen', disabled: pc.omens <= 0, note: `${pc.omens}` },
        { label: 'Flee', value: 'flee', ghost: true },
      ], `${short(pc)}’s turn`);
      const c = await choose(['cmd']);
      hideMenu();
      if (c.value === 'attack') {
        const foe = await chooseFoe('Attack whom?');
        if (foe) return { kind: 'attack', foe };
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
      } else if (c.value === 'omen') {
        menu([
          { label: 'Next hit: maximum damage', value: 'max', disabled: pc.omenMax },
          { label: 'Turn aside the next wound', value: 'ward', disabled: pc.omenWard },
          { label: 'Back', value: 'back', ghost: true },
        ], `Spend an Omen (${pc.omens} left). It costs no time.`);
        const o = await choose(['cmd']);
        hideMenu();
        if (o.value === 'max') { pc.omens -= 1; pc.omenMax = true; B.log(`<b class="yellow">Omen:</b> ${short(pc)}’s next hit will land with full force.`); }
        if (o.value === 'ward') { pc.omens -= 1; pc.omenWard = true; B.log(`<b class="yellow">Omen:</b> the next wound to ${short(pc)} will miss its mark.`); }
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

  // ---------- the wretches act ----------
  async function swing(pc, f, riposte) {
    const res = Q.attack(pc, f.def);
    const verdict = { crit: 'Critical!', hit: 'Hit!', miss: 'Miss', fumble: 'Fumble!' }[res.kind];
    await throwDice({ dice: [D(20, res.r, 'yellow', 'Strength')], verdict, tone: res.kind === 'hit' || res.kind === 'crit' ? 'good' : 'bad', text: `${short(pc)}${riposte ? ' ripostes' : ' attacks'} ${the(f)} · ${testText('Strength', res, pc.strength)}` });
    const tag = `<span class="dim">(Strength d20 ${res.r}${pc.strength ? Q.fmt(pc.strength) : ''}=${res.total} vs DR ${res.dr})</span>`;
    if (res.kind === 'fumble') {
      B.log(`${short(pc)}’s ${esc(pc.weapon.name)} goes wide. ${tag}`, 'miss');
      if (!riposte) await foeStrike(f, pc, true);
      return;
    }
    if (res.kind === 'miss') { B.log(`${short(pc)} misses ${the(f)}. ${tag}`, 'miss'); return; }
    const dice = [D(pc.weapon.die, res.dmgRoll, 'bone', res.maxed ? 'Omen' : 'Damage')];
    if (f.def.armor) dice.push(D(f.def.armor, res.armorRoll, 'dim', 'Armor'));
    await throwDice({ dice, verdict: res.dmg ? `${res.dmg} damage` : 'It glances off', tone: res.dmg ? 'good' : 'neutral', text: `${esc(pc.weapon.name)} d${pc.weapon.die}${res.maxed ? ' (Omen: maximum)' : ''} · ${damageText(res.dmgRoll, res.kind === 'crit', res.absorbed, res.dmg)}` });
    B.log(`${short(pc)} hits ${the(f)} for <b>${res.dmg}</b>${res.kind === 'crit' ? ' (CRITICAL)' : ''}. ${tag}`, res.kind === 'crit' ? 'crit' : 'hit');
    await damageFoe(f, res.dmg, pc);
  }

  async function damageFoe(f, dmg) {
    f.hp -= dmg;
    flash(f.el, 'hit', 500);
    await wait(250);
    if (f.hp <= 0) {
      f.hp = 0;
      B.slain.push(f);
      B.log(`<b>${the(f, true)}</b> ${verb(f, 'is', 'are')} dead.`, 'crit');
      if (f.def.boss) B.log('The Abbess crumples. Her weeping stops.', 'hit');
      renderFoes();
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
        B.log(`${the(f, true)} ${verb(f, 'flees', 'scatter')} into the dark.`, 'hit');
      }
    }
    renderFoes();
  }

  async function poultice(pc, ally) {
    B.inv.poultices -= 1;
    const h = d(6);
    await throwDice({ dice: [D(6, h, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `${short(pc)} binds ${ally === pc ? 'their own' : `${short(ally)}’s`} wounds · black poultice d6` });
    ally.hp = Math.min(ally.maxHp, ally.hp + h);
    ally.bleeding = false;
    B.log(`${short(ally)} is bound with a black poultice. <b>+${h} HP</b>.`, 'hit');
    renderParty();
  }

  async function readScroll(pc, cmd) {
    pc.powers -= 1;
    const r = Q.test(pc.presence, Q.DR);
    await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? 'The words take hold' : 'The words turn to ash', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} reads the ${esc(Q.SCROLLS[cmd.key].name)} · ${testText('Presence', r, pc.presence)}` });
    if (!r.ok) {
      pc.powers = 0;
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
      B.log(`<b class="pink">Black flame</b> wraps ${the(f)} for <b>${dmg}</b>.`, 'crit');
      await damageFoe(f, dmg);
    } else {
      const ally = cmd.ally.dead ? pc : cmd.ally;
      const rolled = d(6), h = rolled * (r.crit ? 2 : 1);
      await throwDice({ dice: [D(6, rolled, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `Mending bone · d6${r.crit ? ' × 2' : ''} = ${h}` });
      ally.hp = Math.min(ally.maxHp, ally.hp + h);
      ally.bleeding = false;
      B.log(`Bone knits in ${short(ally)}’s body. <b>+${h} HP</b>.`, 'hit');
    }
    renderParty();
  }

  async function flee(pc) {
    const r = Q.test(pc.agility, Q.DR);
    await throwDice({ dice: [D(20, r.r, 'yellow', 'Agility')], verdict: r.ok ? 'You get away!' : 'Cut off', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} leads the retreat · ${testText('Agility', r, pc.agility)}` });
    B.log(r.ok ? `${short(pc)} finds a way out. You run.` : `${short(pc)} cannot find a way out.`, r.ok ? '' : 'miss');
    return r.ok;
  }

  // ---------- the enemies act ----------
  async function foeStrike(f, target, free) {
    const pc = target && !target.dead ? target : pickTarget();
    if (!pc) return;
    flash(f.el, 'lunge', 400);
    if (f.def.boss && !free && d(6) <= 2) {
      const r = Q.test(pc.presence, Q.DR);
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Presence')], verdict: r.ok ? `${short(pc)} endures it` : `${short(pc)} is frozen`, tone: r.ok ? 'good' : 'bad', text: `The Abbess wails at ${short(pc)} · ${testText('Presence', r, pc.presence)}` });
      if (!r.ok) { pc.dazed = true; B.log(`The Abbess wails and ${short(pc)}’s limbs turn to lead.`, 'hurt'); }
      else B.log(`The Abbess wails. ${short(pc)} grits their teeth through it.`, 'dim');
      renderParty();
      return;
    }
    const res = Q.defend(pc, f.def.die);
    const verdict = { riposte: 'Riposte!', dodge: 'Dodged', wound: 'Hit', fumble: 'Fumble!' }[res.kind];
    await throwDice({ dice: [D(20, res.r, 'yellow', 'Defence')], verdict, tone: res.kind === 'riposte' || res.kind === 'dodge' ? 'good' : 'bad', text: `${the(f, true)} ${verb(f, 'attacks', 'attack')} ${short(pc)} · ${testText('Agility', res, pc.agility)}` });
    if (res.kind === 'riposte') {
      B.log(`${short(pc)} slips the blow and strikes back!`, 'hit');
      await swing(pc, f, true);
      return;
    }
    if (res.kind === 'dodge') { B.log(`${the(f, true)} ${verb(f, 'misses', 'miss')} ${short(pc)}.`, 'miss'); return; }
    const dice = [D(f.def.die, res.dmgRoll, 'pink', 'Wound')];
    if (res.armorDie) dice.push(D(res.armorDie, res.armorRoll, 'dim', 'Armor'));
    const sum = damageText(res.dmgRoll, res.kind === 'fumble', res.absorbed, res.before) + (res.warded ? ', but an Omen turns it aside' : '');
    await throwDice({ dice, verdict: res.dmg ? `${short(pc)} −${res.dmg} HP` : 'No harm done', tone: res.dmg ? 'bad' : 'good', text: `${esc(f.def.name)} d${f.def.die}${res.kind === 'fumble' ? ', doubled' : ''} · ${sum}` });
    const notes = [res.brokeArmor ? `${short(pc)}’s armor cracks` : '', res.warded ? 'an Omen turns it aside' : ''].filter(Boolean).join(', ');
    if (res.dmg) B.log(`${the(f, true)} ${verb(f, 'hits', 'hit')} ${short(pc)} for <b>${res.dmg}</b>${notes ? ` (${notes})` : ''}.`, 'hurt');
    else B.log(`${the(f, true)} ${verb(f, 'hits', 'hit')} ${short(pc)}, but it does no harm${notes ? ` (${notes})` : ''}.`, 'miss');
    if (res.dmg > 0) await hurt(pc, res.dmg, f.def.name);
    renderParty();
  }

  function pickTarget() {
    const alive = B.party.filter((p) => !p.dead);
    return alive.length ? alive[Math.floor(Math.random() * alive.length)] : null;
  }

  // Damage to a wretch: at 0 HP they are Broken, below 0 they are dead.
  async function hurt(pc, dmg, cause) {
    pc.hp -= dmg;
    flash(pc.el, 'hurt', 500);
    if (B.onHurt) B.onHurt();
    if (pc.hp < 0) return kill(pc, cause);
    if (pc.hp === 0) {
      const b = Q.broken(pc);
      await throwDice({ dice: [D(4, b.r, 'pink', 'Broken')], verdict: b.title, tone: b.dead ? 'bad' : 'neutral', text: `${short(pc)} is Broken · d4 · ${esc(b.text)}` });
      B.log(`<b>${short(pc)} is Broken.</b> ${esc(b.text)}`, 'hurt');
      if (b.dead) return kill(pc, cause);
      if (b.lostTurn) pc.dazed = true;
    }
    renderParty();
  }

  function kill(pc, cause) {
    pc.dead = true;
    pc.hp = Math.min(pc.hp, 0);
    pc.cause = cause;
    B.log(`<b class="pink">${esc(pc.name)} is dead.</b>`, 'hurt');
    renderParty();
  }
  Q.hurtWretch = async (pc, dmg, cause, hooks) => {
    // used outside battle (pits, fonts, falls): same rules, no battle screen
    const prev = B;
    B = { party: [pc], foes: [], log: hooks.log, onHurt: hooks.onHurt, onChange: hooks.onChange };
    try { await hurt(pc, dmg, cause); } finally { B = prev; }
  };

  // ---------- a whole battle ----------
  // opts: { party, foes: [{ key }], inv: { poultices, scrolls }, log, onChange, onHurt }
  // Resolves to { outcome: 'won' | 'fled' | 'lost', silver }.
  async function run(opts) {
    const foes = opts.foes.map((m) => {
      const def = Q.MONSTERS[m.key];
      const hp = m.hp !== undefined ? m.hp : def.hp();
      return { key: m.key, def, kind: def.kind, name: def.name, hp, maxHp: m.maxHp || hp, moraleChecked: false };
    });
    B = { ...opts, foes, slain: [], active: -1 };
    B.party.forEach((p) => { p.dazed = false; });
    $('battle').hidden = false;
    document.body.classList.add('in-battle');
    renderFoes();
    renderParty();
    hideMenu();
    const names = [...new Set(foes.map((f) => f.name))].join(' and ');
    banner(`<b>${esc(names)}!</b>`, 'bad');
    B.log(`<b class="yellow">${esc(names)}!</b> <span class="dim">${esc(foes[0].def.desc)}</span>`);
    await wait(900);

    const init = d(6);
    const theyFirst = init <= 3;
    await throwDice({ dice: [D(6, init, 'bone', 'Initiative')], verdict: theyFirst ? 'They strike first' : 'You are quicker', tone: theyFirst ? 'bad' : 'good', text: 'd6: on 1–3 the enemy acts first' });
    let outcome = null;
    for (let round = 1; !outcome; round++) {
      if (!(round === 1 && theyFirst)) {
        for (let i = 0; i < B.party.length && !outcome; i++) {
          const pc = B.party[i];
          if (pc.dead) continue;
          if (!B.foes.some((f) => f.hp > 0)) break;
          B.active = i;
          renderParty();
          if (pc.dazed) {
            pc.dazed = false;
            B.log(`${short(pc)} stands frozen, and the moment passes.`, 'dim');
            await wait(700);
            continue;
          }
          const cmd = await chooseCommand(pc);
          if (cmd.kind === 'attack') await swing(pc, cmd.foe.hp > 0 ? cmd.foe : B.foes.find((f) => f.hp > 0), false);
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
        if (B.party.every((p) => p.dead)) break;
        await foeStrike(f, null, false);
        if (!B.foes.some((x) => x.hp > 0)) break;
      }
      if (B.party.every((p) => p.dead)) outcome = 'lost';
      else if (!B.foes.some((f) => f.hp > 0)) outcome = 'won';
    }
    if (Q.Dice) Q.Dice.clear();
    hideMenu();
    let silver = 0;
    if (outcome === 'won') {
      silver = B.slain.reduce((s, f) => s + f.def.silver(), 0);
      banner(`<b>Victory</b>${silver ? `<small>${silver}s in the filth</small>` : ''}`, 'good');
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

  // keyboard: arrows move between buttons, Enter/Space presses, Escape backs out
  window.addEventListener('keydown', (e) => {
    if (!B || $('battle').hidden) return;
    if (!chooser) {
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
    if (/^[1-5]$/.test(k) && !document.body.classList.contains('targeting-foe') && !document.body.classList.contains('targeting-pc')) {
      const b = document.querySelectorAll('#commands .cmd')[+k - 1];
      if (b && !b.disabled) b.click();
    }
    if (document.body.classList.contains('targeting-foe') || document.body.classList.contains('targeting-pc')) {
      if (i < 0 && targets[0] && ['arrowdown', 'arrowright', 'arrowup', 'arrowleft'].includes(k)) targets[0].focus();
    }
  });

  Q.Battle = { run, active: () => !!B };
})();
