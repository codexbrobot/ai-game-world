// QUEST — out of the Brine Gaol and into sinking Skarnvik, in the dying world of Mörk Borg.
// Two wretches roam a torch-lit 3D crypt (js/engine.js). Touch a monster and the fight turns into a
// turn-based battle (js/battle.js). This file holds the run: the party, the town, the floors, saving.
'use strict';

(function () {
  const { d, fmt } = Q;
  const SAVE_KEY = 'quest-borg-save-v3'; // v3: the run starts in the Brine Gaol
  const CELL = 2; // world units per map cell (matches the engine)
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const D = (sides, value, tone, label) => ({ sides, value, tone, label });
  const throwDice = (spec) => (Q.Dice ? Q.Dice.roll(spec) : Promise.resolve());
  const short = (pc) => esc(pc.name.split(' ')[0]);
  const sfx = (name, o) => Q.Sound && Q.Sound.play(name, o);

  let S = null; // the run in progress
  let world = null; // the 3D engine, made the first time you go below
  let modalOpen = false;
  let busy = false; // something is playing out (dice, a battle): the dungeon waits

  // ---------- small helpers ----------
  const floor = () => S.floors[S.floorIx];
  const floorIndex = (id) => S.floors.findIndex((f) => f.id === id);
  const alive = () => S.party.filter((p) => !p.dead);

  function log(html, cls = '') {
    if (!S) return;
    S.log.push({ html, cls });
    if (S.log.length > 40) S.log.shift();
    renderLog();
  }

  // ---------- starting a run ----------
  function buildFloors() {
    let id = 0;
    return Q.FLOORS.map((f, ix) => {
      const grid = f.rows.map((row) => row.split(''));
      const groups = [];
      grid.forEach((row, y) => row.forEach((t, x) => {
        const band = (f.groups || {})[t];
        if (!band) return;
        const dormant = band.some((key) => Q.MONSTERS[key].dormant);
        groups.push({ id: `g${ix}-${id++}`, x: (x + 0.5) * CELL, z: (y + 0.5) * CELL, members: band.map((key) => ({ key })), alive: true, alert: false, ...(dormant ? { dormant: true } : {}) });
        row[x] = '.';
      }));
      return { id: f.id, name: f.name, grid, groups, opened: [], explored: grid.map((row) => row.map(() => false)) };
    });
  }

  function newRun(party) {
    const extra = party.reduce((n, p) => n + ((Q.classOf(p) || {}).poultices || 0), 0);
    S = {
      party, silver: party.reduce((s, p) => s + p.silver, 0), poultices: 3 + extra, scrolls: [], kills: 0, killsSinceBetter: 0,
      floors: buildFloors(), floorIx: 0, pose: null, where: 'town', metStranger: false, log: [],
      calendar: Q.calendarStart(), found: [], curios: [], deepest: 1, pendingMiseries: [],
      flags: {}, scenes: {},
    };
    setupFonts();
    // the Gaol keeps your things until you find them: femurs and rags until then
    for (const p of party) {
      p.stash = { weapon: p.weapon, armor: p.armor, silver: p.silver };
      p.weapon = { name: 'Femur', die: 4 };
      p.armor = { name: 'Rags', tier: 0 };
      delete p.silver; delete p.poultices; delete p.scrolls;
    }
    S.silver = 0;
    S.poultices = 0;
    nameTheGaol();
    Q.fixRows(S.party);
    Q.applyMiseries(0);
    rollCurios();
  }

  // Who the Gaol remembers: the prisoner you knew across the corridor, and the one still alive.
  function nameTheGaol() {
    const pick = (list) => list[Math.floor(Math.random() * list.length)];
    const knew = pick([
      ['Old Sigrun', 'she', 'She whistled every night so you would know she was still alive.'],
      ['Matthis the Cook', 'he', 'He traded you half his bread for stories, and never once asked for the ending.'],
      ['Little Ragna', 'she', 'She sang hymns backwards to annoy the guards, and it worked.'],
      ['Grey Ottar', 'he', 'He scratched a calendar on the wall and lied to you about the date so you wouldn’t despair.'],
    ]);
    S.flags.knownName = knew[0];
    S.flags.knownShe = knew[1];
    S.flags.knownWhat = knew[2];
    S.flags.livingName = pick(['Brann Two-Fingers', 'Osk the Weasel', 'Tobbe Saltlung', 'Jorl Nine-Lives']);
    const gaol = S.floors.find((f) => f.id === 'gaol');
    if (gaol) for (const g of gaol.groups) for (const m of g.members) if (m.key === 'P') m.name = knew[0];
  }

  // Each black font gets a hidden nature for this run (js/story.js).
  function setupFonts() {
    const natures = Object.keys(Q.FONT_NATURES);
    S.floors.forEach((f) => {
      if (f.font || !f.grid.some((row) => row.includes('F'))) return;
      const nature = natures[Math.floor(Math.random() * natures.length)];
      f.font = { nature, uses: Q.FONT_NATURES[nature].uses, known: false, searched: false };
    });
  }

  // ---------- the DM (scenes in js/story.js) ----------
  const ABILITY = { strength: 'Strength', agility: 'Agility', presence: 'Presence', toughness: 'Toughness' };

  // The DM speaks: words fade in one after another (a tap shows them all); choices wait below.
  function say(title, text, choices) {
    return new Promise((resolve) => {
      let i = 0;
      const words = (html) => html.split(/(<[^>]+>)/).map((part) => (part.startsWith('<') ? part
        : part.replace(/(\S+)/g, (w) => `<span class="w" style="animation-delay:${(i++ * 28)}ms">${w}</span>`))).join('');
      const body = text.split(/\n\s*\n/).map((p) => `<p>${words(p.trim())}</p>`).join('');
      modal(title, `<div class="dm-text">${body}</div>`, choices.map((c, n) => ({ label: c.label, note: c.note, disabled: c.disabled, action: () => resolve(n) })), { closable: false });
      const box = document.querySelector('#modalBody .dm-text');
      if (box) box.addEventListener('click', () => box.classList.add('all'));
    });
  }

  function makeDM() {
    const living = () => alive();
    const dm = {
      get party() { return living(); },
      get font() { return floor().font; },
      get silverLeft() { return S.silver; },
      say,
      name: (pc) => esc(pc.name.split(' ')[0]),
      d: (n) => d(n),
      best: (ab) => living().slice().sort((a, b) => b[ab] - a[ab])[0],
      async test(pc, ab, dr, what) {
        let r = Q.test(pc[ab], dr);
        const Ab = ABILITY[ab];
        await throwDice({ dice: [D(20, r.r, 'yellow', Ab)], verdict: r.ok ? 'Success' : 'Failure', tone: r.ok ? 'good' : 'bad', text: `${short(pc)} ${what} · ${Q.testText(Ab, r, pc[ab])}` });
        r = await Q.rescueTest(S.party, pc, r, pc[ab], Ab, { log, onChange: renderHud });
        await new Promise((res) => setTimeout(res, 350 * (Q.speed === undefined ? 1 : Q.speed)));
        if (Q.Dice) Q.Dice.clear();
        return r.ok;
      },
      heal(pc, n) { pc.hp = Math.min(pc.maxHp, pc.hp + n); sfx('heal'); log(`${short(pc)} <b>+${n} HP</b>.`, 'hit'); renderHud(); },
      async hurt(pc, n, cause) { await hurt(pc, n, cause); },
      omen(pc) { pc.omens += 1; sfx('gain'); log(`${short(pc)} <b>+1 Omen</b>.`, 'hit'); renderHud(); },
      silver(n) { S.silver = Math.max(0, S.silver + n); if (n > 0) { sfx('gain'); log(`<b>+${n}s</b>.`, 'hit'); } renderHud(); },
      item(kind) {
        const key = Q.rollItem(S, S.floorIx + 1, kind);
        if (!key) { dm.silver(d(6) * 5); return Promise.resolve(); }
        return new Promise((res) => offerItem(key, { title: 'Found', then: res }));
      },
      listen() { floor().heard = true; drawMini(); },
      openDoor(x, y) {
        floor().grid[y][x] = 'D';
        if (!floor().opened.includes(x + ',' + y)) floor().opened.push(x + ',' + y);
        world.openDoor(x, y);
        sfx('door');
      },
      // wake whatever sleeps nearest and fight it, now
      async fight() {
        const p = world.pose();
        const g = floor().groups.filter((x) => x.alive && x.dormant).sort((a, b) => Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z))[0];
        if (!g) return;
        g.dormant = false;
        g.alert = true;
        await battle(g);
      },
      // everything awake on this floor comes looking for you
      alarm() { for (const g of floor().groups) if (g.alive && !g.dormant) g.alert = true; },
      // the evidence room: each wretch's own things, more or less
      restoreGear() {
        const lines = [];
        for (const pc of living()) {
          if (!pc.stash) continue;
          const { weapon, armor, silver } = pc.stash;
          delete pc.stash;
          if (!pc.weapon.key) pc.weapon = weapon;
          pc.armor = armor;
          let got = silver;
          const r = d(6);
          let note = '';
          if (r === 1 && silver > 0) { got = Math.floor(silver / 2); note = ` A guard helped himself: only <em>${got}s</em> left of ${silver}.`; }
          S.silver += got;
          lines.push(`<b>${esc(pc.name)}</b>: ${esc(weapon.name)} (d${weapon.die}), ${esc(armor.name)}, ${got}s.${note}`);
          if (r === 6) S.pendingDrop = Q.rollItem(S, 1);
        }
        if (S.pendingDrop) lines.push('<br>And the sack beside yours, with a crossed-out name on it, was never collected. Something is still in it.');
        S.poultices += 2;
        lines.push('<br>Two black poultices in a guard’s satchel. <em>+2 poultices.</em>');
        renderHud();
        sfx('gain');
        return lines;
      },
      open(x, y, tile) {
        floor().grid[y][x] = tile;
        if (floor().explored[y]) floor().explored[y][x] = true;
        sfx('door');
        enterFloor(S.floorIx, null, world.pose());
        log('Stone grinds against stone. <b class="yellow">A secret opens.</b>', 'hit');
      },
      dry() {
        floor().grid.forEach((row, y) => row.forEach((t, x) => { if (t === 'F') { row[x] = 'f'; world.refreshTile(x, y); } }));
      },
      flag(name, value) {
        if (value === undefined) return S.flags[name];
        S.flags[name] = value;
        return value;
      },
      log,
    };
    return dm;
  }

  async function playScene(scene, first) {
    if (!alive().length) return;
    await scene.run(makeDM(), first);
    // something a scene turned up (a sack in the evidence room)
    if (S.pendingDrop && !S.over) {
      const key = S.pendingDrop;
      S.pendingDrop = null;
      await new Promise((res) => offerItem(key, { title: 'The uncollected sack', intro: 'Under somebody else’s name:', then: res }));
    }
    save();
    renderHud();
  }

  // A locked door in a story: its scene decides what happens.
  async function lockedDoor(x, y) {
    const scene = Q.SCENES.find((sc) => sc.floor === floor().id && sc.door && sc.door[0] === x && sc.door[1] === y);
    if (scene) await playScene(scene, true);
    else log('Locked.', 'dim');
  }

  // ---------- loot with personality (js/items.js) ----------
  // Thrumm's curios: two strange things on the shelf, new ones after every night.
  function rollCurios() {
    S.found = S.found.filter((k) => !S.curios.includes(k)); // unsold ones go back into the world
    S.curios = [];
    for (let i = 0; i < 2; i++) {
      const k = Q.rollItem(S, S.deepest || 1);
      if (k) S.curios.push(k);
    }
  }

  // Something found (or bought): which wretch takes it? opts: { price, source, then }
  function offerItem(key, opts = {}) {
    const it = Q.ITEMS[key];
    const verbWord = it.kind === 'weapon' ? 'wields' : 'wears';
    const buttons = alive().map((pc) => {
      const stuck = it.kind === 'relic' && Q.cursedOn(pc);
      const old = it.kind === 'relic' ? (pc.relic ? Q.ITEMS[pc.relic].name : null) : pc.weapon.name;
      return {
        label: `${pc.name.split(' ')[0]} ${verbWord} it${stuck ? ' (their cursed relic won’t come off)' : old ? ` (drops the ${old})` : ''}`,
        disabled: stuck || (opts.price && S.silver < opts.price),
        action: () => takeItem(pc, key, opts),
      };
    });
    modal(opts.title || it.name, `${opts.intro ? `<p>${opts.intro}</p>` : ''}<p class="item-card">${Q.itemHtml(key, esc)}</p>${opts.price ? `<p class="small">Thrumm wants <b>${opts.price}s</b>. You have ${S.silver}s.</p>` : ''}`, [
      ...buttons,
      { label: opts.price ? 'Not today' : 'Leave it', ghost: true, action: () => { if (!opts.price) log(`You leave the ${esc(it.name)} where it lies.`, 'dim'); if (opts.then) opts.then(); } },
    ]);
  }

  function takeItem(pc, key, opts) {
    const it = Q.ITEMS[key];
    if (opts.price) {
      S.silver -= opts.price;
      S.curios = S.curios.filter((k) => k !== key);
    }
    const fresh = it.kind === 'weapon' ? Q.wield(pc, key) : Q.wear(pc, key);
    sfx(it.cursed ? 'toll' : 'gain', it.cursed ? { f: 110 } : undefined);
    log(`${short(pc)} ${it.kind === 'weapon' ? 'takes up' : 'puts on'} the <b class="yellow">${esc(it.name)}</b>.${it.cursed ? ' <span class="pink">It will not come off.</span>' : ''}`, it.cursed ? 'hurt' : 'hit');
    save();
    renderHud();
    if (S.where === 'town') renderTown();
    modal(fresh ? 'Now you know' : it.name, `<p>${esc(pc.name)} ${it.kind === 'weapon' ? 'closes a hand around' : 'puts on'} the ${esc(it.name)}.</p>
      <p class="item-card">${Q.itemHtml(key, esc)}</p>
      ${it.cursed ? '<p class="pink"><b>Cursed.</b> It sinks into the flesh and will not come off. Thrumm knows a way, for silver.</p>' : ''}
      ${fresh ? '<p class="small">Written in your Codex.</p>' : ''}`, [{ label: 'So be it', action: opts.then }]);
  }

  // Thrumm pries a cursed relic off.
  const PRY = 25;
  function pryOff(pc) {
    S.silver -= PRY;
    const name = Q.ITEMS[pc.relic].name;
    Q.takeOff(pc);
    log(`Thrumm pries the ${esc(name)} off ${short(pc)} with pliers and a prayer.`, 'hit');
    save(); renderTown(); visitShop();
  }

  function showCodex() {
    const rows = Object.entries(Q.ITEMS).map(([k, it]) => (Q.Codex.known(k)
      ? `<li><b>${esc(it.name)}</b>${it.kind === 'weapon' ? ` (d${it.die})` : ''}${it.cursed ? ' <span class="pink">cursed</span>' : ''}<br><span class="small">${esc(it.text)}</span></li>`
      : '<li class="dim">??? <span class="small">Not yet found.</span></li>')).join('');
    modal(`The Codex (${Q.Codex.count()} of ${Object.keys(Q.ITEMS).length})`, `<p class="small">Every strange thing your wretches have worn or wielded, in any run.</p><ol class="codex">${rows}</ol>`, [{ label: 'Close' }], { wide: true });
  }

  // ---------- the Calendar of Nechrubel ----------
  const mods = () => Q.miseryMods(S.calendar.misery);
  const calendarText = () => {
    const c = S.calendar;
    return `${c.days} day${c.days === 1 ? '' : 's'} until the next Misery · ${c.misery} of 7 have come`;
  };
  // A day lost (a night's sleep, a flight from battle). Returns the Misery that came to pass, if one did.
  function tickCalendar() {
    const c = S.calendar;
    c.days -= 1;
    if (c.days > 0) return null;
    c.misery += 1;
    c.days = Q.calendarNext();
    Q.applyMiseries(c.misery);
    return Q.MISERIES[c.misery - 1];
  }
  function showMiseries(list, then) {
    if (!list.length) { if (then) then(); return; }
    showMisery(list[0], () => showMiseries(list.slice(1), then));
  }
  function showMisery(m, then) {
    const n = S.calendar.misery;
    if (n >= 7) return worldEnds(m);
    sfx('toll', { f: 65 });
    log(`<b class="pink">The ${['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][n - 1]} Misery:</b> ${esc(m.title)}.`, 'hurt');
    modal(`The ${['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'][n - 1]} Misery`, `
      <p class="misery-title">${esc(m.title)}</p>
      <p>${esc(m.text)}</p>
      <p class="small">The Calendar of Nechrubel turns. ${7 - n} Miser${7 - n === 1 ? 'y' : 'ies'} remain before the end. The next in ${S.calendar.days} days.</p>`,
    [{ label: 'Endure', action: then }], { closable: false, dead: true });
  }

  // ---------- saving ----------
  const unsaved = new Set(['el', 'def']);
  function save() {
    if (!S || S.over) return;
    if (world && S.where === 'crawl') S.pose = world.pose();
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(S, (k, v) => (unsaved.has(k) ? undefined : v))); } catch (e) { /* storage may be unavailable */ }
  }
  function loadSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      const saved = raw ? JSON.parse(raw) : null;
      if (saved && !saved.calendar) saved.calendar = Q.calendarStart(); // saves from before the Calendar
      if (saved && !saved.found) Object.assign(saved, { found: [], curios: [], deepest: 1, pendingMiseries: [] }); // or before loot
      if (saved && !saved.flags) Object.assign(saved, { flags: {}, scenes: {} }); // or before the DM
      return saved;
    } catch (e) { return null; }
  }
  function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
  }

  // ---------- screens ----------
  function show(screen) {
    for (const id of ['title', 'create', 'town', 'crawl']) $(id).hidden = id !== screen;
    if (S) S.where = screen;
    if (screen !== 'crawl' && world) world.pause();
    if (world) world.showHands(screen === 'crawl');
    if (Q.Sound) Q.Sound.ambience(screen === 'crawl' ? 'crawl' : screen === 'town' ? 'town' : null, S && floor() ? floor().id : '');
    if (screen === 'town') renderTown();
  }

  function renderTitle() {
    $('btnContinue').hidden = !loadSave();
    $('btnCodex').textContent = `Codex (${Q.Codex.count()}/${Object.keys(Q.ITEMS).length})`;
  }

  // ---------- the party ----------
  let rolled = null;
  function renderCreate() {
    const options = (pc) => Object.entries(Q.CLASSES).map(([k, c]) => `<option value="${k}"${pc.cls === k ? ' selected' : ''}>${esc(c.name)}</option>`).join('');
    $('sheets').innerHTML = rolled.map((pc, i) => `
      <div class="sheet">${sheetHtml(pc, true)}
        <label class="cls-pick">Class <select data-i="${i}">${options(pc)}</select></label>
        <button type="button" class="ghost reroll" data-i="${i}">Roll this one again</button>
      </div>`).join('');
    document.querySelectorAll('.reroll').forEach((b) => b.addEventListener('click', () => {
      rolled[+b.dataset.i] = Q.rollWretch(rolled[+b.dataset.i].cls);
      renderCreate();
    }));
    document.querySelectorAll('.cls-pick select').forEach((sel) => sel.addEventListener('change', () => {
      rolled[+sel.dataset.i] = Q.rollWretch(sel.value);
      renderCreate();
    }));
  }

  function sheetHtml(pc, fresh) {
    const ab = (label, v) => `<div class="ab"><span>${label}</span><b>${fmt(v)}</b></div>`;
    const cls = Q.classOf(pc);
    return `
      <img class="face" src="${Q.portraitUrl(pc.name)}" alt="" onerror="this.remove()">
      <h2 class="pcname">${esc(pc.name)}${pc.dead ? ' <span class="pink">(dead)</span>' : ''}</h2>
      ${cls ? `<p class="cls"><b>${esc(cls.name)}</b> · ${esc(cls.blurb)}</p>` : ''}
      <p class="trait">${esc(pc.trait)}</p>
      <div class="abs">${ab('Strength', pc.strength)}${ab('Agility', pc.agility)}${ab('Presence', pc.presence)}${ab('Toughness', pc.toughness)}</div>
      <dl class="gear">
        <dt>HP</dt><dd>${Math.max(0, pc.hp)} / ${pc.maxHp}${pc.bleeding ? ' <em class="pink">bleeding</em>' : ''}</dd>
        <dt>Omens</dt><dd>${pc.omens}</dd>
        <dt>Weapon</dt><dd>${esc(pc.weapon.name)} (d${pc.weapon.die})${pc.weapon.key ? `<br><small>${esc(Q.ITEMS[pc.weapon.key].text)}</small>` : ''}</dd>
        ${pc.relic ? `<dt>Relic</dt><dd>${esc(Q.ITEMS[pc.relic].name)}${Q.ITEMS[pc.relic].cursed ? ' <em class="pink">cursed</em>' : ''}<br><small>${esc(Q.ITEMS[pc.relic].text)}</small></dd>` : ''}
        <dt>Armor</dt><dd>${esc(pc.armor.name)}${pc.armor.tier ? ` (−d${Q.ARMOR_DIE[pc.armor.tier]})` : ''}</dd>
        <dt>Powers</dt><dd>${pc.powers} use${pc.powers === 1 ? '' : 's'} a day</dd>
        ${cls ? `<dt>${esc(cls.ability.name)}</dt><dd>${esc(cls.ability.text)} Once per battle.</dd>` : ''}
        ${fresh ? '' : `<dt>Row</dt><dd>${pc.row === 'back' ? 'Back' : 'Front'}</dd>`}
        ${fresh ? `<dt>Silver</dt><dd>${pc.silver}s</dd>` : ''}
      </dl>`;
  }

  function partySheet() {
    const calendar = `<p class="small"><b class="pink">☄ The Calendar of Nechrubel:</b> ${calendarText()}.${S.calendar.misery ? ` So far: ${Q.MISERIES.slice(0, S.calendar.misery).map((m) => esc(m.title)).join('; ')}.` : ''}</p>`;
    const extra = calendar + `<p class="small">The party carries <b>${S.silver}s</b>, <b>${S.poultices}</b> poultice${S.poultices === 1 ? '' : 's'}${S.scrolls.length ? ` and ${S.scrolls.map((k) => esc(Q.SCROLLS[k].name)).join(', ')}` : ''}. ${S.kills} slain; ${Math.max(0, 5 - S.killsSinceBetter)} more before you can Get Better at the inn.</p>`;
    const both = alive().length === 2;
    modal('The party', `<div class="sheets">${S.party.map((pc) => `<div class="sheet">${sheetHtml(pc, false)}</div>`).join('')}</div>${extra}<p class="small">In battle, foes go for the front wretch three times in four, and a melee attack from the back row is at DR +2.</p>`, [
      ...(both ? [{ label: 'Swap front and back', action: () => { const [a, b] = S.party; [a.row, b.row] = [b.row, a.row]; save(); partySheet(); } }] : []),
      { label: 'Close' },
    ], { wide: true });
  }

  // ---------- the town ----------
  function renderTown() {
    const c = $('townArt');
    const W = 640, H = 340, dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = W * dpr; c.height = H * dpr;
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawTown(ctx, W, H);
    $('townStatus').innerHTML = S.party.map((pc) => `<b>${esc(pc.name)}</b> ${pc.dead ? '<span class="pink">dead</span>' : `HP ${pc.hp}/${pc.maxHp}`}`).join(' · ') + ` · ${S.silver}s`
      + `<br><span class="pink">☄ ${calendarText()}</span>`;
    $('townGoal').textContent = S.flags.strangerTold ? 'Something is pulling the island down. (The story continues in the next update.)'
      : S.flags.deepStair ? 'Tell the Stranger what the water is doing under the basilica.'
        : S.metStranger ? 'Go down through the Undercroft, under the basilica, and see what the water is doing.' : 'A stranger in the shadow of the gallows is watching you.';
  }

  const HIRE = 20;
  function visitInn() {
    const better = S.killsSinceBetter >= 5;
    const dead = S.party.findIndex((p) => p.dead);
    const bed = mods().bed;
    modal('The Drowned Lamb', art('inn') + `
      <p>Damp straw, a bowl of grey gruel, a landlord who will not meet your eye. ${better ? '<br><b class="yellow">You have survived enough horror to change. Sleep and you will Get Better.</b>' : ''}</p>
      <p class="small">A night's sleep restores Omens and Powers, but it costs a day: <span class="pink">☄ ${calendarText()}</span>. You have ${S.silver}s.</p>`, [
      { label: `Beds for the party (${bed}s): all HP back`, disabled: S.silver < bed, action: () => { S.silver -= bed; sleep(true); } },
      { label: mods().gutter ? 'The gutter (free): d4 HP each' : 'The gutter (free): it runs with blood, and heals nothing', action: () => sleep(false) },
      ...(dead >= 0 ? [{ label: `Hire a wretch from the taproom (${HIRE}s)`, disabled: S.silver < HIRE, action: () => hire(dead) }] : []),
      { label: 'Leave', ghost: true },
    ]);
  }

  function hire(slot) {
    S.silver -= HIRE;
    const pc = Q.rollWretch();
    delete pc.silver; delete pc.poultices; delete pc.scrolls;
    const lost = S.party[slot];
    pc.row = lost.row;
    S.party[slot] = pc;
    Q.fixRows(S.party);
    save();
    renderTown();
    modal('A new wretch', `<p>${esc(lost.name)} is gone. For ${HIRE}s, this one will take their place.</p><div class="sheet">${sheetHtml(pc, false)}</div>`, [{ label: 'Welcome aboard' }]);
  }

  function art(name, cutout) {
    return `<img class="modal-art${cutout ? ' cutout' : ''}" src="${Q.assetUrl(name)}" alt="" onerror="this.remove()">`;
  }

  function sleep(bed) {
    const lines = [];
    const m = mods();
    for (const pc of alive()) {
      if (bed) pc.hp = pc.maxHp;
      else if (m.gutter) pc.hp = Math.min(pc.maxHp, pc.hp + d(4));
      pc.bleeding = false;
      pc.omens = m.omenCap || d((Q.classOf(pc) || { omenDie: 2 }).omenDie);
      pc.powers = Q.powersFor(pc);
      lines.push(`<b>${esc(pc.name)}</b>: HP ${pc.hp}/${pc.maxHp}, Omens ${pc.omens}, Powers ${pc.powers}.`);
    }
    if (!bed && d(6) === 1 && S.silver > 0) {
      const lost = Math.ceil(S.silver / 2);
      S.silver -= lost;
      lines.push(`<span class="pink">You wake with a lighter purse. ${lost}s gone.</span>`);
    }
    if (S.killsSinceBetter >= 5) {
      S.killsSinceBetter = 0;
      for (const pc of alive()) lines.push(`<b class="yellow">${esc(pc.name)} Gets Better</b>`, ...Q.gettingBetter(pc));
    }
    // what the relics take in the night
    let days = 1;
    for (const pc of alive()) {
      if (Q.has(pc, 'crown')) {
        pc.omens += 1;
        days += 1;
        lines.push(`The Comet Crown gives ${short(pc)} one more Omen, and <span class="pink">takes a day</span>.`);
      }
    }
    if (Q.anyHas(S.party, 'coin')) {
      const r = d(6);
      if (r <= 2) { days += 1; lines.push(`<span class="pink">The drowned come for their coin in the night (d6: ${r}) and take a day.</span>`); }
    }
    if (Q.anyHas(S.party, 'ratking') && S.poultices > 0) {
      S.poultices -= 1;
      lines.push('Rats in the pack have eaten a poultice.');
    }
    const miseries = [];
    for (let i = 0; i < days; i++) { const m = tickCalendar(); if (m) miseries.push(m); }
    lines.push(`<span class="pink">☄ ${days === 1 ? 'A day is' : `${days} days are`} gone. ${miseries.length ? 'Something is wrong with the sky.' : calendarText() + '.'}</span>`);
    rollCurios();
    save();
    renderTown();
    modal(bed ? 'Morning' : 'Morning, in the gutter', lines.map((l) => `<p>${l}</p>`).join(''), [
      { label: 'Get up', action: miseries.length ? () => showMiseries(miseries, () => { save(); renderTown(); }) : null },
    ]);
  }

  function visitShop() {
    const rows = Q.SHOP.map((item, i) => {
      const can = S.silver >= price(item);
      return `<button class="shoprow" data-i="${i}" ${can ? '' : 'disabled'}>
        <span><b>${esc(item.name)}</b><small>${esc(item.note)}</small></span><span class="price">${price(item)}s</span></button>`;
    }).join('');
    const curios = S.curios.map((k) => {
      const it = Q.ITEMS[k];
      const p = price(it);
      return `<button class="shoprow curio" data-k="${k}" ${S.silver >= p ? '' : 'disabled'}>
        <span><b>${esc(it.name)}</b><small>${esc(it.flavor)}${Q.Codex.known(k) ? '' : ' (Thrumm swears it’s lucky.)'}</small></span><span class="price">${p}s</span></button>`;
    }).join('');
    const pries = alive().filter((pc) => Q.cursedOn(pc)).map((pc) => `<button class="shoprow pry" data-n="${S.party.indexOf(pc)}" ${S.silver >= PRY ? '' : 'disabled'}>
        <span><b>Pry off ${esc(pc.name.split(' ')[0])}’s ${esc(Q.ITEMS[pc.relic].name)}</b><small>Pliers, salt and a muttered prayer.</small></span><span class="price">${PRY}s</span></button>`).join('');
    modal('Thrumm’s Stall', `${art('stall')}<p>Thrumm sells what the dead no longer need. You have <b>${S.silver}s</b>.</p><div class="shop">${rows}</div>
      ${curios || pries ? `<p class="small"><b>Under the counter.</b> New curios after every night.</p><div class="shop">${curios}${pries}</div>` : ''}`, [{ label: 'Leave', ghost: true }]);
    document.querySelectorAll('.shoprow:not(.curio):not(.pry)').forEach((b) => b.addEventListener('click', () => buy(Q.SHOP[+b.dataset.i])));
    document.querySelectorAll('.shoprow.curio').forEach((b) => b.addEventListener('click', () => {
      const k = b.dataset.k;
      offerItem(k, { price: price(Q.ITEMS[k]), title: 'Under Thrumm’s counter', then: visitShop });
    }));
    document.querySelectorAll('.shoprow.pry').forEach((b) => b.addEventListener('click', () => pryOff(S.party[+b.dataset.n])));
  }

  const price = (item) => Math.round(item.price * mods().price * (Q.anyHas(S.party, 'tongue') ? 0.6 : 1));
  function buy(item) {
    if (item.kind === 'poultice') {
      S.silver -= price(item);
      S.poultices += 1;
      save(); renderTown(); visitShop();
      return;
    }
    // weapons and armor go to one wretch: ask who
    const better = (pc) => (item.kind === 'weapon' ? item.item.die > pc.weapon.die : item.item.tier > pc.armor.tier);
    modal(item.name, `<p>Who takes the ${esc(item.name)}? (${price(item)}s)</p>`, [
      ...S.party.map((pc) => ({
        label: `${pc.name}: now ${item.kind === 'weapon' ? `${pc.weapon.name} d${pc.weapon.die}` : pc.armor.name}`,
        disabled: pc.dead || !better(pc),
        action: () => {
          S.silver -= price(item);
          if (item.kind === 'weapon') pc.weapon = { name: item.item.name, die: item.item.die };
          else pc.armor = { name: item.item.name, tier: item.item.tier };
          save(); renderTown(); visitShop();
        },
      })),
      { label: 'Back', ghost: true, action: visitShop },
    ]);
  }

  function visitStranger() {
    if (S.flags.deepStair && !S.flags.strangerTold) {
      S.flags.strangerTold = true;
      S.silver += 40;
      save();
      renderTown();
      modal('The Stranger', `${art('stranger')}
        <p>“Rising, you say. From under. Not rain, not a spring.” The Stranger presses forty silver into your hand without counting it.</p>
        <p>“Then it’s true. The island isn’t sinking. <b>Something is pulling it down.</b> And the Salt Lords are getting rich while it happens.”</p>
        <p>“Get stronger. Get richer. When you’re ready to hear the rest, I’ll be here.” <span class="pink">(The story continues in the next update.)</span></p>`, [{ label: 'Take the silver' }]);
      return;
    }
    if (S.flags.strangerTold) {
      modal('The Stranger', `${art('stranger')}
        <p>The Stranger hasn’t moved from the gallows’ shadow.</p>
        <p>“Something is pulling the island down. Get stronger. When you’re ready to hear the rest, I’ll be here.”</p>
        <p class="small">(The story continues in the next update.)</p>`, [{ label: 'Nod' }]);
      return;
    }
    const first = !S.metStranger;
    S.metStranger = true;
    save();
    renderTown();
    modal('The Stranger', `${art('stranger')}
      ${first ? '<p>A stranger with a sewn-shut eye takes your wrists in a cold grip, one each, and turns them over. Shackle-scars.</p><p>“Gaol-pale. You came up out of the Brine, didn’t you? Nobody comes up out of the Brine.”</p>' : '<p>The Stranger hasn’t moved from the gallows’ shadow.</p>'}
      <p>“The island is sinking, and the Salt Lords say it isn’t. Ask yourself why they aren’t afraid.”</p>
      <p>“Go under the basilica, into the <b>Undercroft</b>. Go all the way down. Tell me what the water is doing down there.”</p>
      <p class="small">The crypt stair is at the edge of the square. Rest at the Drowned Lamb, buy what you can at Thrumm’s, and hire a new wretch there if one of you falls.</p>`, [{ label: 'Nod' }]);
  }

  // Out through the grate: the city, at last. From here on, the dead are replaced, not the story.
  async function escapeGaol() {
    S.escaped = true;
    for (const pc of alive()) if (pc.stash) { pc.weapon = pc.stash.weapon; pc.armor = pc.stash.armor; S.silver += pc.stash.silver; delete pc.stash; }
    show('town');
    save();
    await say('Skarnvik', `You come up through a sewer grate in Gallows Square, an hour before dawn, and nobody looks twice. Why would they? Your faces are on posters on the gallows, so faded by rain you can barely tell they were ever faces.

The city has changed while you were inside. There is a comet over the harbor. Half the old docks are under black water, and the fishermen are moving their boats up into the streets. The dead walk in the low graveyards. The Salt Lords’ men walk everywhere else.

And nobody, <em>nobody</em>, is talking about why the island is sinking.`, [{ label: 'Find a bed' }]);
    renderTown();
  }

  function enterCrypt() {
    if (!alive().length) return;
    enterFloor(floorIndex('undercroft'), 'G');
    log(`You climb down into <b>${esc(floor().name)}</b>.`);
    if (!S.metStranger) log('You have no reason to be here yet, but here you are.', 'dim');
  }

  // ---------- the crawl ----------
  function ensureWorld() {
    if (world) return world;
    world = Q.createWorld($('viewport'), {
      onEnterCell: (x, y, t) => run(() => enterCell(x, y, t)),
      onDoor: (x, y) => {
        if (!floor().opened.includes(x + ',' + y)) floor().opened.push(x + ',' + y);
        log('The door groans open.');
        sfx('door');
      },
      onStep: (depth) => sfx('step', { wet: depth > 0, splash: depth }),
      onDrip: (pan, dist) => sfx('drip', { pan, gain: Math.max(0.08, 0.4 - dist * 0.05) }),
      onAlert: (kind, dist, pan) => sfx('alert', { kind, dist, pan }),
      onVoice: (kind, dist, pan) => sfx('voice', { kind, dist, pan }),
      onContact: (g) => run(() => battle(g)),
      onLocked: (x, y) => run(() => lockedDoor(x, y)),
      onFall: () => run(fall),
      explored: () => (S && S.where === 'crawl' ? floor().explored : null),
      onTick: drawMini,
    });
    applyMove();
    return world;
  }

  // Go below: onto floor ix, standing on the first `arriveOn` tile, or at a saved pose.
  function enterFloor(ix, arriveOn, pose) {
    S.floorIx = ix;
    S.deepest = Math.max(S.deepest || 1, ix + 1);
    show('crawl');
    const w = ensureWorld();
    w.showHands(true);
    const f = Q.FLOORS[ix];
    const grid = floor().grid;
    w.load({ grid, heights: f.heights, ceil: f.ceil, theme: f.theme, groups: floor().groups.filter((g) => g.alive), opened: floor().opened });
    let p = pose;
    if (!p) grid.forEach((row, y) => row.forEach((t, x) => { if (t === arriveOn && !p) p = w.cellPose(x, y); }));
    w.place(p);
    S.pose = p;
    const v = $('viewport');
    v.classList.remove('fade-in');
    void v.offsetWidth;
    v.classList.add('fade-in');
    renderHud();
    drawMini();
    if (!modalOpen && !busy) w.resume();
    save();
    const arrival = Q.SCENES.find((sc) => sc.arrive && sc.floor === S.floors[ix].id && !S.scenes[sc.id]);
    if (arrival) {
      setTimeout(() => {
        if (busy || modalOpen || !S || S.scenes[arrival.id] || S.floorIx !== ix || S.where !== 'crawl') return;
        S.scenes[arrival.id] = true;
        run(() => playScene(arrival, true));
      }, 700 * (Q.speed === undefined ? 1 : Q.speed));
    }
  }

  // Run something that plays out over time (dice, a battle) with the dungeon paused.
  async function run(task) {
    if (busy || !S) return;
    busy = true;
    if (world) world.pause();
    try {
      await task();
    } finally {
      busy = false;
      if (Q.Dice) Q.Dice.clear();
      renderHud();
      if (world && S && S.where === 'crawl' && !modalOpen && !S.over) world.resume();
      save();
    }
  }

  async function enterCell(x, y, t) {
    const g = floor().grid;
    // a place the DM has something to say about, the first time you walk in
    const scene = Q.SCENES.find((sc) => sc.floor === floor().id && sc.area && !S.scenes[sc.id]
      && x >= sc.area[0] && x <= sc.area[2] && y >= sc.area[1] && y <= sc.area[3]);
    if (scene) {
      S.scenes[scene.id] = true;
      await playScene(scene, true);
      if (scene.tile === t) return;
    } else {
      const again = Q.SCENES.find((sc) => sc.floor === floor().id && sc.tile && sc.tile === t);
      if (again) { await playScene(again, false); return; }
    }
    if (t === 'K') {
      g[y][x] = '.';
      world.refreshTile(x, y);
      const key = Q.rollItem(S, S.floorIx + 1, 'relic');
      if (key) await new Promise((res) => offerItem(key, { title: 'The hidden niche', intro: 'Wrapped in rotten velvet, at the back of the niche:', then: res }));
      return;
    }
    if (t === 'p') {
      g[y][x] = '.';
      const pc = alive()[Math.floor(Math.random() * alive().length)];
      let r = Q.test(pc.agility, Q.DR);
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Agility')], verdict: r.ok ? `${short(pc)} leaps clear` : 'The floor gives way!', tone: r.ok ? 'good' : 'bad', text: `A hidden pit under ${short(pc)} · ${Q.testText('Agility', r, pc.agility)}` });
      r = await Q.rescueTest(S.party, pc, r, pc.agility, 'Agility', { log, onChange: renderHud });
      if (r.ok) log(`The flagstone tilts. ${short(pc)} leaps clear.`);
      else {
        const dmg = d(6);
        await throwDice({ dice: [D(6, dmg, 'pink', 'Spikes')], verdict: `${short(pc)} −${dmg} HP`, tone: 'bad', text: 'Spikes: d6 damage' });
        log(`The floor gives way under ${short(pc)}: a spiked pit!`, 'hurt');
        await hurt(pc, dmg, 'a spiked pit');
      }
    } else if (t === 'L' || t === 'S') {
      g[y][x] = '.';
      world.refreshTile(x, y);
      await searchRemains(t === 'S');
    } else if (t === 'G' && floor().id === 'gaol' && !S.flags.wardenDead) {
      modal('The sewer grate', '<p>Above you, a grate, and through it grey light and the smell of rain and fish and smoke. It is chained shut, and the padlock is new.</p><p><b>The key will be on the Warden’s ring.</b></p>', [{ label: 'Step back' }]);
    } else if (t === 'G' && floor().id === 'gaol') {
      ask('The sewer grate', '<p>Above you, a grate, and through it grey light and the smell of rain and fish and smoke. <b>The city.</b></p>', 'Climb out', () => run(escapeGaol));
    } else if (t === 'G') {
      ask('The stair up', art('stair') + '<p>Grey daylight leaks down the steps. Skarnvik is above.</p>', 'Climb out', () => { show('town'); save(); });
    } else if (t === '>' && !S.floors[S.floorIx + 1]) {
      log('The stair down is drowned to the ceiling. Whatever is below, you can’t reach it. Yet.', 'dim');
    } else if (t === '>') {
      const next = S.floors[S.floorIx + 1];
      ask('Steps down', `<p>The stair descends into a cold that smells of candle wax and old water. <b>${esc(next.name)}</b>.</p>`, 'Descend', () => { enterFloor(S.floorIx + 1, '<'); log(`You descend into <b>${esc(floor().name)}</b>.`); });
    } else if (t === '<') {
      ask('Steps up', `<p>Back up to <b>${esc(S.floors[S.floorIx - 1].name)}</b>?</p>`, 'Climb', () => { enterFloor(S.floorIx - 1, '>'); log(`You climb back to <b>${esc(floor().name)}</b>.`); });
    }
  }

  // A question at a stair or a font: yes does the thing, no walks on.
  function ask(title, body, yes, action) {
    modal(title, body, [{ label: yes, action }, { label: 'Not now', ghost: true }]);
  }

  async function searchRemains(scroll) {
    if (scroll) {
      const key = S.floorIx === 0 ? 'flame' : 'mend';
      if (!S.scrolls.includes(key)) S.scrolls.push(key);
      const sc = Q.SCROLLS[key];
      log(`Under the bones, a scroll: <b class="yellow">${esc(sc.name)}</b>. ${esc(sc.text)}`, 'hit');
      sfx('gain');
      return;
    }
    const res = Q.searchRemains(S.floorIx + 1);
    if (res.kind === 'item') {
      const key = Q.rollItem(S, S.floorIx + 1);
      if (key) {
        sfx('gain');
        log(`Something strange in the remains: <b class="yellow">${esc(Q.ITEMS[key].name)}</b>.`, 'hit');
        offerItem(key, { title: 'In the remains', intro: 'Clutched in a dead hand, or hidden in the ribs:' });
        return;
      }
      res.kind = 'omen';
    }
    if (res.kind !== 'hand') sfx('gain');
    if (res.kind === 'silver') { S.silver += res.amount; log(`You pick the remains clean: <b>${res.amount}s</b>.`, 'hit'); }
    if (res.kind === 'poultice') { S.poultices += 1; log('A black poultice, still sticky. <b>+1 poultice</b>.', 'hit'); }
    if (res.kind === 'omen') {
      const pc = alive()[0];
      pc.omens += 1;
      log(`A black feather twitches in the dust. <b>+1 Omen</b> for ${short(pc)}.`, 'hit');
    }
    if (res.kind === 'weapon') {
      const pc = alive().filter((p) => res.item.die > p.weapon.die).sort((a, b) => a.weapon.die - b.weapon.die)[0];
      if (pc) { pc.weapon = res.item; log(`A <b>${esc(res.item.name)}</b> (d${res.item.die}). ${short(pc)} takes it.`, 'hit'); }
      else log(`A ${esc(res.item.name)}, no better than yours.`);
    }
    if (res.kind === 'armor') {
      const pc = alive().filter((p) => res.item.tier > p.armor.tier).sort((a, b) => a.armor.tier - b.armor.tier)[0];
      if (pc) { pc.armor = res.item; log(`<b>${esc(res.item.name)}</b>, cut from a corpse. ${short(pc)} puts it on.`, 'hit'); }
      else log(`${esc(res.item.name)}, too ruined to wear.`);
    }
    if (res.kind === 'hand') {
      const pc = alive()[Math.floor(Math.random() * alive().length)];
      log(`A cold hand closes around ${short(pc)}’s wrist!`, 'hurt');
      await hurt(pc, res.dmg, 'a grasping hand');
    }
    renderHud();
  }

  // Into the chasm: everyone takes the fall, then climbs back out.
  async function fall() {
    log('The edge crumbles. You fall into the dark.', 'hurt');
    sfx('fall');
    for (const pc of alive()) {
      const dmg = d(6);
      await throwDice({ dice: [D(6, dmg, 'pink', 'Fall')], verdict: `${short(pc)} −${dmg} HP`, tone: 'bad', text: 'A fall into the chasm: d6 damage each' });
      await hurt(pc, dmg, 'a fall');
    }
    if (!alive().length) return;
    log('You claw your way back up to the ledge.', 'dim');
    world.haulBack();
  }

  async function hurt(pc, dmg, cause) {
    sfx('hurt');
    await Q.hurtWretch(pc, dmg, cause, { log, onHurt: flashHurt, onChange: renderHud, party: S.party });
    renderHud();
    if (!alive().length) gameOver(cause);
  }

  function flashHurt() {
    const v = $('viewport');
    v.classList.remove('hurt');
    void v.offsetWidth;
    v.classList.add('hurt');
  }

  // ---------- battles ----------
  async function battle(g) {
    if (!g.alive || !alive().length) return;
    const v = $('viewport');
    v.classList.add('shatter');
    sfx('shatter');
    if (Q.Sound) Q.Sound.duck(true);
    await new Promise((r) => setTimeout(r, 420 * (Q.speed === undefined ? 1 : Q.speed)));
    v.classList.remove('shatter');
    const result = await Q.Battle.run({
      party: S.party, foes: g.members, inv: S, log, misery: S.calendar.misery,
      ...(g.members.some((m) => Q.MONSTERS[m.key].boss) ? { bossWeak: !!S.flags.abbessWeak, firstStrike: !!S.flags.ambush, foesFirst: !!S.flags.abbessAlert && !S.flags.ambush } : {}),
      onDayLost: () => { const m = tickCalendar(); if (m) S.pendingMiseries.push(m); renderHud(); },
      onChange: renderHud, onHurt: flashHurt, say,
    });
    if (result.outcome === 'won') {
      g.alive = false;
      S.silver += result.silver;
      S.kills += result.slain;
      S.killsSinceBetter += result.slain;
      if (g.members.some((m) => Q.MONSTERS[m.key].kind === 'warden')) {
        S.flags.wardenDead = true;
        log('The Warden goes down into the water. On his ring, among a hundred keys, one is new and bright: <b>the key to the grate at the end of the hall.</b>', 'hit');
      }
      // cultists carry relics; skeletons, strange weapons
      const kinds = g.members.map((m) => Q.MONSTERS[m.key].kind);
      let drop = null;
      if (kinds.includes('cultist') && d(2) === 1) drop = Q.rollItem(S, S.floorIx + 1, 'relic');
      else if ((kinds.includes('skeleton') || kinds.includes('guard')) && d(3) === 1) drop = Q.rollItem(S, S.floorIx + 1, 'weapon');
      if (drop) S.pendingDrop = drop;
    } else if (result.outcome === 'fled') {
      g.stunUntil = performance.now() + 4500;
      world.stepBack(g);
    }
    for (const pc of S.party) pc.dazed = false;
    if (Q.Sound) Q.Sound.duck(false);
    renderHud();
    drawMini();
    if (result.outcome === 'lost' || !alive().length) return gameOver(S.party.map((p) => p.cause).find(Boolean) || 'the dark');
    if (result.outcome === 'fled') {
      const misery = tickCalendar();
      log(`☄ Running costs you a day. ${misery ? '' : calendarText() + '.'}`, 'dim');
      renderHud();
      if (misery) S.pendingMiseries.push(misery);
    }
    // what the battle left: Miseries the Weeping Sword brought on, and anything the dead dropped
    const after = () => {
      const key = S.pendingDrop;
      S.pendingDrop = null;
      if (key && !S.over) offerItem(key, { title: 'Among the dead', intro: `Something falls from the ${esc(Q.ITEMS[key].kind === 'relic' ? 'cultist’s rags' : 'dead hand')}:` });
    };
    const miseries = S.pendingMiseries.splice(0);
    if (miseries.length && !S.over) showMiseries(miseries, after);
    else after();
  }

  function worldEnds(m) {
    if (S.over) return;
    sfx('toll', { f: 49 });
    S.over = true;
    clearSave();
    if (world) world.pause();
    modal('The Seventh Misery', `${art('grave')}<p class="misery-title">${esc(m.title)}</p><p>${esc(m.text)}</p>
      <p>${S.party.map((pc) => esc(pc.name)).join(' and ')} ${S.flags.deepStair ? 'came close to learning why Skarnvik sinks' : S.escaped ? 'never learned why Skarnvik sinks' : 'never saw daylight again'}. ${S.kills} foe${S.kills === 1 ? '' : 's'} slain, for nothing.</p>
      <p class="small">The Calendar of Nechrubel has run out. New wretches, in some other world, are already on the way.</p>`, [
      { label: 'Roll new wretches', action: () => startCreate() },
    ], { closable: false, dead: true });
  }

  function gameOver(cause) {
    if (S.over) return;
    S.over = true;
    if (world) world.pause();
    sfx('toll', { f: 82 });
    const pcs = S.party.map((pc) => `<p class="epitaph">Here lies <b>${esc(pc.name)}</b>.<br>${esc(pc.trait)}</p>`).join('');
    const where = esc(S.where === 'crawl' ? floor().name : 'Skarnvik');
    if (S.escaped) {
      // the story goes on without them: someone else in Skarnvik picks it up
      S.awaitingWretches = true;
      S.over = false;
      save();
      S.over = true;
      modal('Dead', `${art('grave')}${pcs}
        <p>Killed by ${esc(cause)} in ${where}, with ${S.kills} foe${S.kills === 1 ? '' : 's'} slain.</p>
        <p class="small">Skarnvik is full of desperate people. Somebody else heard what you learned, and somebody else will finish it.</p>`, [
        { label: 'New wretches in Skarnvik', action: () => startCreate(true) },
      ], { closable: false, dead: true });
      return;
    }
    clearSave();
    modal('Dead', `${art('grave')}${pcs}
      <p>Killed by ${esc(cause)} in ${where}, never having seen daylight again.</p>
      <p class="small">The Brine Gaol keeps what it takes. New prisoners are already being thrown in.</p>`, [
      { label: 'Roll new wretches', action: () => startCreate() },
    ], { closable: false, dead: true });
  }

  // ---------- HUD ----------
  function renderHud() {
    if (!S) return;
    $('chips').innerHTML = S.party.map((pc) => {
      const pct = pc.dead ? 0 : Math.max(0, Math.min(1, pc.hp / pc.maxHp)) * 100;
      return `<div class="chip${pc.dead ? ' dead' : ''}"><img src="${Q.portraitUrl(pc.name)}" alt="">
        <span><b>${short(pc)}</b><span class="hpbar small"><span style="width:${pct}%"></span><em>${pc.dead ? 'Dead' : `${Math.max(0, pc.hp)}/${pc.maxHp}`}</em></span></span></div>`;
    }).join('') + `<div class="purse">${S.silver}s</div><div class="purse comet" title="Calendar of Nechrubel: ${calendarText()}">☄ ${S.calendar.days}</div>`;
    $('hudPlace').textContent = S.where === 'crawl' ? floor().name : '';
    if (world) {
      // the front wretch's weapon is the one in the right hand
      const front = alive().find((p) => p.row !== 'back') || alive()[0];
      world.setWeapon(front ? front.weapon.art || front.weapon.name : null);
    }
    $('tPoultice').querySelector('small').textContent = S.poultices;
    $('tPoultice').disabled = S.poultices <= 0 || !alive().some((p) => p.hp < p.maxHp || p.bleeding);
  }

  function renderLog() {
    $('log').innerHTML = S.log.slice(-3).map((e) => `<li class="${e.cls}">${e.html}</li>`).join('');
  }

  function drawMini() {
    if (!S || S.where !== 'crawl' || !world) return;
    const mini = $('mini');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    if (mini.width !== 112 * dpr) { mini.width = 112 * dpr; mini.height = 112 * dpr; }
    const ctx = mini.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawMap(ctx, 112, 112, mapView(true));
  }

  function mapView(mini) {
    const p = world.mapPose();
    const eye = Q.anyHas(S.party, 'eye') || !!floor().heard;
    const groups = floor().groups.filter((g) => g.alive).map((g) => ({ hp: 1, seen: true, always: eye, ...world.monsterPos(g) }));
    return { mini, grid: floor().grid, explored: floor().explored, x: p.x, y: p.y, a: p.a, monsters: groups };
  }

  // ---------- modal ----------
  function modal(title, body, buttons, opts = {}) {
    modalOpen = true;
    if (world) world.pause();
    const box = $('modal');
    box.classList.toggle('dead', !!opts.dead);
    box.classList.toggle('wide', !!opts.wide);
    $('modalTitle').textContent = title;
    $('modalBody').innerHTML = body;
    const row = $('modalButtons');
    row.innerHTML = '';
    box.dataset.closable = opts.closable === false ? 'no' : 'yes';
    for (const b of buttons) {
      const el = document.createElement('button');
      el.type = 'button';
      el.textContent = b.label;
      if (b.note) { const n = document.createElement('small'); n.className = 'choice-note'; n.textContent = b.note; el.appendChild(n); }
      if (b.ghost) el.className = 'ghost';
      if (b.disabled) el.disabled = true;
      el.addEventListener('click', () => {
        closeModal();
        if (b.action) b.action();
      });
      row.appendChild(el);
    }
    box.hidden = false;
    const first = row.querySelector('button:not(:disabled)');
    if (first) first.focus({ preventScroll: true });
    document.querySelector('#modal .card').scrollTop = 0;
  }

  function closeModal() {
    $('modal').hidden = true;
    modalOpen = false;
    if (world && S && S.where === 'crawl' && !busy && !S.over) world.resume();
  }

  function showMap() {
    if (!world || S.where !== 'crawl') return;
    modal(floor().name, '<canvas id="bigMap" width="480" height="480"></canvas><p class="small">▲ stairs up · ▼ stairs down · ✚ remains · ◍ font · pink: monsters</p>', [{ label: 'Close' }]);
    const c = $('bigMap'), dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = 480 * dpr; c.height = 480 * dpr;
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawMap(ctx, 480, 480, mapView(false));
  }

  function usePoultice() {
    if (busy || S.poultices <= 0) return;
    const hurtOnes = alive().filter((p) => p.hp < p.maxHp || p.bleeding);
    const bind = (pc) => run(async () => {
      S.poultices -= 1;
      const rolled = d(6);
      const h = Q.has(pc, 'dirt') ? Math.ceil(rolled / 2) : rolled;
      await throwDice({ dice: [D(6, rolled, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `${short(pc)}’s wounds bound · black poultice d6${h !== rolled ? ', halved by the grave dirt' : ''}` });
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      pc.bleeding = false;
      sfx('heal');
      log(`${short(pc)} is bound with a black poultice. <b>+${h} HP</b>.`, 'hit');
    });
    if (hurtOnes.length === 1) return bind(hurtOnes[0]);
    modal('Black poultice', `<p>Bind whose wounds? ${S.poultices} left.</p>`, [
      ...hurtOnes.map((pc) => ({ label: `${pc.name} (${pc.hp}/${pc.maxHp})`, action: () => bind(pc) })),
      { label: 'Not now', ghost: true },
    ]);
  }

  // ---------- settings ----------
  // Omens: 'auto' offers one on the dice after a bad roll; 'manual' spends them from the battle menu.
  const OMEN_KEY = 'quest-borg-omens';
  Q.prefs = { omens: 'auto' };
  try { if (localStorage.getItem(OMEN_KEY) === 'manual') Q.prefs.omens = 'manual'; } catch (e) { /* storage may be unavailable */ }
  Q.setOmenMode = (m) => {
    Q.prefs.omens = m === 'manual' ? 'manual' : 'auto';
    try { localStorage.setItem(OMEN_KEY, Q.prefs.omens); } catch (e) { /* ignore */ }
  };
  // The flood (being tried out): water over the dungeon floors.
  const FLOOD_KEY = 'quest-borg-flood';
  Q.prefs.flood = true;
  try { if (localStorage.getItem(FLOOD_KEY) === 'dry') Q.prefs.flood = false; } catch (e) { /* ignore */ }
  const MOVE_KEY = 'quest-borg-move';
  let moveMode = 'free';
  try { moveMode = localStorage.getItem(MOVE_KEY) === 'grid' ? 'grid' : 'free'; } catch (e) { /* storage may be unavailable */ }
  function applyMove() {
    if (world) { world.setMode(moveMode); world.setWater(Q.prefs.flood); }
    $('hint').innerHTML = moveMode === 'grid'
      ? 'Step a square at a time: the arrow pad<br><span>Keyboard: W S or ↑ ↓ to step, A D to sidestep, Q E or ← → to turn</span>'
      : 'Left thumb: walk · Right thumb: look<br><span>Keyboard: W A S D to move, arrows or Q E to turn, drag to look</span>';
  }
  function showSettings() {
    const on = !Q.Sound || Q.Sound.on;
    const current = { move: moveMode, sound: on ? 'on' : 'off', omens: Q.prefs.omens, flood: Q.prefs.flood ? 'on' : 'off' };
    const opt = (key, val, label, note) => `<button type="button" data-set="${key}" data-val="${val}" class="${current[key] === val ? 'on' : 'ghost'}">${label}${note ? `<small class="choice-note">${note}</small>` : ''}</button>`;
    modal('Settings', `<div class="settings">
      <div class="opt"><b>Movement</b><div class="choices">
        ${opt('move', 'free', 'Free', 'walk anywhere, look around, like DOOM')}
        ${opt('move', 'grid', 'Steps', 'a square at a time, quarter turns, old school')}
      </div></div>
      <div class="opt"><b>Water (test)</b><div class="choices">
        ${opt('flood', 'on', 'Flooded', 'black water over the dungeon floors')}
        ${opt('flood', 'off', 'Dry', 'the old stone floors')}
      </div></div>
      <div class="opt"><b>Omens</b><div class="choices">
        ${opt('omens', 'auto', 'Auto', 'offered on the dice after a bad roll')}
        ${opt('omens', 'manual', 'Manual', 'spend from the battle menu before you act')}
      </div></div>
      <div class="opt"><b>Sound</b><div class="choices">${opt('sound', 'on', 'On')}${opt('sound', 'off', 'Off')}</div></div>
      <small>Settings are kept in this browser.</small></div>`, [{ label: 'Close' }]);
    document.querySelectorAll('[data-set]').forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.set === 'flood') {
        Q.prefs.flood = b.dataset.val === 'on';
        try { localStorage.setItem(FLOOD_KEY, Q.prefs.flood ? 'on' : 'dry'); } catch (e) { /* ignore */ }
        if (world) {
          world.setWater(Q.prefs.flood);
          if (S && S.where === 'crawl') enterFloor(S.floorIx, null, world.pose());
        }
      } else if (b.dataset.set === 'omens') Q.setOmenMode(b.dataset.val);
      else if (b.dataset.set === 'move') {
        moveMode = b.dataset.val;
        try { localStorage.setItem(MOVE_KEY, moveMode); } catch (e) { /* ignore */ }
        applyMove();
      } else if (Q.Sound && (b.dataset.val === 'on') !== Q.Sound.on) Q.Sound.toggle();
      showSettings();
    }));
  }

  // ---------- flow ----------
  let heirs = null; // a run whose wretches died after the escape: new ones carry it on
  function startCreate(keep) {
    heirs = keep && S ? S : null;
    S = null;
    if (world) world.pause();
    const keys = Object.keys(Q.CLASSES).sort(() => Math.random() - 0.5);
    rolled = [Q.rollWretch(keys[0]), Q.rollWretch(keys[1])];
    renderCreate();
    show('create');
  }

  function acceptParty() {
    // the one who would rather stand in front does; otherwise the first
    if (rolled[0].row === rolled[1].row) { rolled[0].row = 'front'; rolled[1].row = 'back'; }
    if (heirs) {
      // new wretches from Skarnvik itself, with their own gear, carrying on the story
      S = heirs;
      heirs = null;
      S.party = rolled;
      S.silver = rolled.reduce((n, p) => n + p.silver, 0);
      for (const p of rolled) { delete p.silver; delete p.poultices; delete p.scrolls; }
      S.poultices = 3;
      S.killsSinceBetter = 0;
      S.over = false;
      S.awaitingWretches = false;
      S.floorIx = floorIndex('undercroft');
      Q.fixRows(S.party);
      log(`<b>${esc(S.party[0].name)}</b> and <b>${esc(S.party[1].name)}</b> pick up where the dead left off.`);
      show('town');
      save();
      say('Skarnvik', 'You have lived in Skarnvik all your short lives. You heard about the two who came up out of the Brine Gaol, and what they found, and how they died. <em>Somebody has to finish it.</em> It might as well be you.', [{ label: 'Go on' }]).then(renderTown);
      return;
    }
    newRun(rolled);
    log(`<b>${esc(S.party[0].name)}</b> and <b>${esc(S.party[1].name)}</b> wake in the Brine Gaol.`);
    enterFloor(floorIndex('gaol'), '@');
    save();
  }

  function continueRun() {
    const saved = loadSave();
    if (!saved) return;
    S = saved;
    if (S.awaitingWretches) { startCreate(true); return; }
    setupFonts();
    Q.fixRows(S.party);
    Q.applyMiseries(S.calendar.misery);
    renderLog();
    if (S.where === 'crawl' && S.pose) enterFloor(S.floorIx, null, S.pose);
    else show('town');
  }

  // ---------- input ----------
  function bind() {
    $('btnNew').addEventListener('click', () => {
      if (loadSave()) {
        modal('Start over?', '<p>Your wretches in progress will be forgotten.</p>', [
          { label: 'Roll new wretches', action: () => { clearSave(); startCreate(); } },
          { label: 'Keep them', ghost: true },
        ]);
      } else startCreate();
    });
    $('btnContinue').addEventListener('click', continueRun);
    $('btnCodex').addEventListener('click', showCodex);
    $('btnAccept').addEventListener('click', acceptParty);
    $('goInn').addEventListener('click', visitInn);
    $('goShop').addEventListener('click', visitShop);
    $('goStranger').addEventListener('click', visitStranger);
    $('goCrypt').addEventListener('click', enterCrypt);
    $('goSheet').addEventListener('click', partySheet);
    $('tMap').addEventListener('click', showMap);
    $('tParty').addEventListener('click', partySheet);
    $('tPoultice').addEventListener('click', usePoultice);
    $('mini').addEventListener('click', showMap);
    $('btnSettings').addEventListener('click', showSettings);
    $('tSettings').addEventListener('click', showSettings);
    $('modal').addEventListener('click', (e) => { if (e.target === $('modal') && $('modal').dataset.closable === 'yes') closeModal(); });
    window.addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (modalOpen) {
        if (e.key === 'Escape' && $('modal').dataset.closable === 'yes') closeModal();
        return;
      }
      if (!S || S.where !== 'crawl') return;
      const k = e.key.toLowerCase();
      if (busy) {
        if (k === 'o' && Q.Dice && !Q.Battle.active()) { e.preventDefault(); Q.Dice.accept(); }
        if ((k === ' ' || k === 'enter') && Q.Dice && !Q.Battle.active()) { e.preventDefault(); Q.Dice.skip(); }
        return;
      }
      if (k === 'm') showMap();
      if (k === 'p') partySheet();
    });
    // the hint fades after a while
    setTimeout(() => $('hint').classList.add('gone'), 9000);
  }

  // For testing from the browser console.
  Q.debug = () => S;
  Q.debugWorld = () => world;
  Q.debugEnter = (ix, pose) => enterFloor(ix, null, pose);
  Q.debugDie = (cause) => { for (const p of S.party) { p.hp = 0; p.dead = true; } gameOver(cause); };

  if (Q.Dice) Q.Dice.init($('dice'));
  bind();
  applyMove();
  renderTitle();
  Q.loadArt(() => { if (S && S.where === 'town') renderTown(); });
})();
