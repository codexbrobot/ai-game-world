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
  // How deep a floor is, for the loot it holds (the city is 0: nothing to find in the street).
  const depthOf = (ix) => (Q.FLOORS[ix].depth !== undefined ? Q.FLOORS[ix].depth : ix + 1);
  const lootDepth = () => Math.max(1, depthOf(S.floorIx));
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
        const dormant = band.some((key) => Q.MONSTERS[key].dormant) || (f.asleep || '').includes(t);
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
      floors: buildFloors(), floorIx: 0, pose: null, where: 'crawl', metStranger: false, log: [],
      calendar: Q.calendarStart(), found: [], curios: [], deepest: 1, pendingMiseries: [],
      flags: {}, scenes: {},
    };
    setupFonts();
    // the Gaol keeps your things until you find them: femurs and rags until then
    for (const p of party) {
      p.gaol = true; // shackle-scars: the watch, and the people the Brine took from, know them
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
    postBounties();
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

  // A test on a DM's choice ("Strength DR 12"): the scene has its best wretch at it roll, so say who, with
  // their score and their odds.
  function oddsNote(note) {
    return note.replace(/\b(Strength|Agility|Presence|Toughness) DR (\d+)/, (m, Ab, dr) => {
      const ab = Ab.toLowerCase();
      const pc = alive().slice().sort((a, b) => b[ab] - a[ab])[0];
      if (!pc) return m;
      return `${m} · ${short(pc)} ${fmt(pc[ab])}, ${chance(pc[ab], testDR(pc, ab, +dr))}%`;
    });
  }

  // The DM speaks: words fade in one after another (a tap shows them all); choices wait below.
  function say(title, text, choices) {
    return new Promise((resolve) => {
      let i = 0;
      const words = (html) => html.split(/(<[^>]+>)/).map((part) => (part.startsWith('<') ? part
        : part.replace(/(\S+)/g, (w) => `<span class="w" style="animation-delay:${(i++ * 28)}ms">${w}</span>`))).join('');
      const body = text.split(/\n\s*\n/).map((p) => `<p>${words(p.trim())}</p>`).join('');
      modal(title, `<div class="dm-text">${body}</div>`, choices.map((c, n) => ({ label: c.label, note: c.note && oddsNote(c.note), disabled: c.disabled, action: () => resolve(n) })), { closable: false });
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
      get hour() { return hourNow(); },
      get deadSlot() { return S.party.some((p) => p.dead); },
      say,
      name: (pc) => esc(pc.name.split(' ')[0]),
      d: (n) => d(n),
      best: (ab) => living().slice().sort((a, b) => b[ab] - a[ab])[0],
      async test(pc, ab, dr, what) {
        let r = Q.test(pc[ab], testDR(pc, ab, dr));
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
      loseOmen(pc) { if (pc.omens > 0) { pc.omens -= 1; log(`${short(pc)} <b>−1 Omen</b>.`, 'hurt'); renderHud(); } },
      // someone from the story takes a dead wretch's place
      recruit(name, cls) {
        const slot = S.party.findIndex((p) => p.dead);
        if (slot < 0) return null;
        const pc = rollBeside(cls, S.party[1 - slot]);
        pc.name = name;
        pc.gaol = true;
        delete pc.silver; delete pc.poultices; delete pc.scrolls;
        pc.row = S.party[slot].row;
        S.party[slot] = pc;
        Q.fixRows(S.party);
        renderHud();
        return pc;
      },
      // down a stair the story opened, onto another floor's G
      go(id) {
        enterFloor(floorIndex(id), 'G');
        log(`You go down into <b>${esc(floor().name)}</b>.`);
      },
      // the Calendar of Nechrubel, pushed back or brought nearer
      giveDays(n) { S.calendar.days += n; renderHud(); return n; },
      loseDay() { const m = tickCalendar(); if (m) S.pendingMiseries.push(m); renderHud(); },
      // who stands in the street changed: build it again around you
      refreshCity() { if (S.floorIx === cityIx()) enterFloor(S.floorIx, null, world.pose()); },
      silver(n) { S.silver = Math.max(0, S.silver + n); if (n > 0) { sfx('gain'); log(`<b>+${n}s</b>.`, 'hit'); } renderHud(); },
      item(kind) {
        const key = Q.rollItem(S, lootDepth(), kind);
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
      // wake whatever sleeps nearest and fight it, now (opts.drop: a kind of monster in it that walks away)
      async fight(opts = {}) {
        const p = world.pose();
        const g = floor().groups.filter((x) => x.alive && x.dormant).sort((a, b) => Math.hypot(a.x - p.x, a.z - p.z) - Math.hypot(b.x - p.x, b.z - p.z))[0];
        if (!g) return;
        if (opts.drop) {
          g.members = g.members.filter((m) => m.key !== opts.drop);
          world.removeGroup(g);
          world.addGroup(g);
        }
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
    const miseries = S.pendingMiseries.splice(0);
    if (miseries.length && !S.over) await new Promise((res) => showMiseries(miseries, res));
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
    const u = usesHere()[floor().grid[y][x]];
    if (u) { await useThing(u); return; }
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
    for (const id of ['title', 'create', 'crawl']) $(id).hidden = id !== screen;
    if (S) S.where = screen;
    if (screen !== 'crawl' && world) world.pause();
    if (world) world.showHands(screen === 'crawl');
    const outdoors = screen === 'crawl' && S && Q.FLOORS[S.floorIx].theme && Q.FLOORS[S.floorIx].theme.outdoor;
    if (Q.Sound) Q.Sound.ambience(outdoors ? 'town' : screen === 'crawl' ? 'crawl' : null, S && floor() ? floor().id : '');
  }

  function renderTitle() {
    $('btnContinue').hidden = !loadSave();
    $('btnCodex').textContent = `Codex (${Q.Codex.count()}/${Object.keys(Q.ITEMS).length})`;
  }

  // ---------- the party ----------
  let rolled = null;
  // A wretch who doesn't share a first name with the other one (two Stens in one cell is one too many).
  const firstName = (pc) => pc.name.split(' ')[0];
  function rollBeside(cls, other) {
    let pc = Q.rollWretch(cls);
    for (let i = 0; i < 20 && other && firstName(pc) === firstName(other); i++) pc = Q.rollWretch(cls);
    return pc;
  }

  function renderCreate() {
    $('createActions').hidden = false;
    $('customActions').hidden = true;
    // the pair is rolled together, and rolled again together: no keeping the good one
    $('sheets').innerHTML = rolled.map((pc) => `
      <div class="sheet">${sheetHtml(pc, true)}
        ${pc.custom ? '<button type="button" class="ghost reroll edit-own">Edit by hand</button>' : ''}
      </div>`).join('');
    document.querySelectorAll('.edit-own').forEach((b) => b.addEventListener('click', () => renderCustom(rolled)));
  }

  // Both again.
  function rerollBoth() {
    const keys = Object.keys(Q.CLASSES).sort(() => Math.random() - 0.5);
    rolled = [Q.rollWretch(keys[0])];
    rolled.push(rollBeside(keys[1], rolled[0]));
    renderCreate();
  }

  // ---------- your own wretches, by hand, from the book ----------
  async function askOwnBook() {
    const pick = await say('Your own wretches', `To make your own wretches you roll them up yourself from the <em>MÖRK BORG</em> rulebook: their abilities, hit points, Omens, silver, gear and terrible traits, on the book’s own tables. This game doesn’t give you those tables. They’re the book’s, and the people who made it should be paid for them.

<em>Do you own MÖRK BORG?</em>`, [{ label: 'I own it' }, { label: 'I don’t' }]);
    if (pick === 0) renderCustom(rolled.every((pc) => pc.custom) ? rolled : null);
  }
  // Two blank sheets (or the ones you made, to change).
  function renderCustom(from) {
    $('createActions').hidden = true;
    $('customActions').hidden = false;
    $('customError').hidden = true;
    const range = [-3, -2, -1, 0, 1, 2, 3];
    const sel = (name, opts, value, blank) => `<select name="${name}">${blank ? `<option value="">${blank}</option>` : ''}${opts.map(([v, label]) => `<option value="${v}"${String(value) === String(v) ? ' selected' : ''}>${esc(label)}</option>`).join('')}</select>`;
    const num = (name, value, min, max, ph) => `<input type="number" inputmode="numeric" name="${name}" min="${min}" max="${max}" placeholder="${ph}" value="${value === undefined ? '' : value}">`;
    $('sheets').innerHTML = [0, 1].map((i) => {
      const pc = (from && from[i]) || {};
      return `<form class="sheet custom" data-i="${i}" autocomplete="off" onsubmit="return false">
        <h3>Wretch ${i + 1}</h3>
        <p class="custom-hint">Roll them up from the book, then write them in.</p>
        <label class="f">Name <input name="name" maxlength="40" placeholder="Name and epithet" value="${esc(pc.name || '')}"></label>
        <label class="f">Class ${sel('cls', [...Object.entries(Q.CLASSES).map(([k, c]) => [k, c.name]), ['none', 'No class']], pc.custom ? pc.cls || 'none' : '', 'Choose…')}</label>
        <div class="abs">${[['strength', 'Str'], ['agility', 'Agi'], ['presence', 'Pre'], ['toughness', 'Tou']].map(([k, label]) => `<label class="f">${label} ${sel(k, range.map((v) => [v, fmt(v)]), pc[k], '–')}</label>`).join('')}</div>
        <div class="three">
          <label class="f">HP ${num('maxHp', pc.maxHp, 1, 30, '1–30')}</label>
          <label class="f">Omens ${num('omens', pc.omens, 0, 4, '0–4')}</label>
          <label class="f">Silver ${num('silver', pc.silver, 0, 500, 's')}</label>
        </div>
        <label class="f">Weapon ${sel('weapon', Q.WEAPONS.map((w, k) => [k, `${w.name} (d${w.die})`]), pc.weapon ? Q.WEAPONS.findIndex((w) => w.name === pc.weapon.name) : '', 'Choose…')}</label>
        <label class="f">Armor ${sel('armor', Q.ARMOR.map((a, k) => [k, `${a.name}${a.tier ? ` (−d${Q.ARMOR_DIE[a.tier]})` : ''}`]), pc.armor ? pc.armor.tier : '', 'Choose…')}</label>
        <label class="f">Stands in ${sel('row', [['front', 'The front row'], ['back', 'The back row']], pc.row || '', 'Choose…')}</label>
        <label class="f">Terrible trait <input name="trait" maxlength="120" placeholder="optional" value="${esc(pc.custom ? pc.trait || '' : '')}"></label>
      </form>`;
    }).join('');
    $('sheets').querySelectorAll('input, select').forEach((el) => el.addEventListener('input', () => el.classList.remove('missing')));
    window.scrollTo(0, 0);
  }
  // Every box filled, or no wretches.
  function saveCustom() {
    const made = [];
    let missing = 0;
    for (const form of $('sheets').querySelectorAll('form.custom')) {
      const get = (name) => form.elements[name];
      const need = ['name', 'cls', 'strength', 'agility', 'presence', 'toughness', 'maxHp', 'omens', 'silver', 'weapon', 'armor', 'row'];
      for (const name of need) {
        const el = get(name);
        const v = el.value.trim();
        const bad = v === '' || (el.type === 'number' && (!Number.isFinite(+v) || +v < +el.min || +v > +el.max));
        el.classList.toggle('missing', bad);
        if (bad) missing += 1;
      }
      if (missing) continue;
      const w = Q.WEAPONS[+get('weapon').value];
      const a = Q.ARMOR[+get('armor').value];
      const pc = {
        name: get('name').value.trim().replace(/\s+/g, ' '),
        cls: get('cls').value === 'none' ? undefined : get('cls').value,
        trait: get('trait').value.trim() || 'Made by hand, from the book.',
        strength: +get('strength').value, agility: +get('agility').value, presence: +get('presence').value, toughness: +get('toughness').value,
        weapon: { name: w.name, die: w.die },
        armor: { name: a.name, tier: a.tier },
        omens: Math.round(+get('omens').value),
        silver: Math.round(+get('silver').value),
        poultices: 2, scrolls: [], kills: 0, killsSinceBetter: 0, bleeding: false, omenMax: false, omenWard: false,
        row: get('row').value,
        maxHp: Math.round(+get('maxHp').value),
        custom: true,
      };
      pc.hp = pc.maxHp;
      pc.powers = Q.powersFor(pc);
      made.push(pc);
    }
    if (missing) {
      $('customError').textContent = 'Every box needs filling in on both sheets, except the trait.';
      $('customError').hidden = false;
      return;
    }
    rolled = made;
    renderCreate();
    window.scrollTo(0, 0);
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
        <dt>HP</dt><dd>${Math.max(0, pc.hp)} / ${pc.maxHp}${pc.bleeding ? ' <em class="pink">haemorrhaging</em>' : ''}</dd>
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

  // ---------- the character sheet ----------
  // One wretch at a time, everything spelled out: what each ability is for and the odds on it, what the
  // weapon, armor, relic and class ability do, and what the party carries between them. Tap a portrait
  // (in the dungeon or in battle), or Party, to open it.
  const USES = {
    strength: 'Attacking with your weapon. Forcing doors, breaking locks, heaving stone.',
    agility: 'Defence: dodging every blow aimed at you. Picking locks, leaping pits, reaching into dark water.',
    presence: 'Reading scrolls and old words. Listening, noticing, talking your way past.',
    toughness: 'Taking a blow to the head and staying on your feet. Your HP was rolled on it.',
  };
  // The odds on d20 + ability against a DR: a natural 1 always fails, a natural 20 always passes.
  function chance(mod, dr) {
    let n = 0;
    for (let r = 2; r <= 20; r++) if (r === 20 || r + mod >= dr) n++;
    return n * 5;
  }
  // A test outside battle: the Liar's Tongue makes Presence harder.
  const testDR = (pc, ab, dr) => Q.drOf(pc, dr) + (ab === 'presence' && Q.has(pc, 'tongue') ? 2 : 0);

  function showSheet(i) {
    if (!S) return;
    const pc = S.party[i];
    const cls = Q.classOf(pc);
    const it = (k) => Q.ITEMS[k];
    const abRow = (key) => {
      const dr = testDR(pc, key, Q.DR);
      return `<div class="ab-row"><div class="ab"><span>${ABILITY[key]}</span><b>${fmt(pc[key])}</b></div>
        <p>${USES[key]}<small>A test at DR ${dr}: <b>${chance(pc[key], dr)}%</b>${dr !== Q.DR ? ' (the Liar’s Tongue)' : ''}</small></p></div>`;
    };
    const defDR = Q.DR + (pc.armor.tier === 3 ? 2 : 0) + (Q.has(pc, 'mirror') ? 1 : 0);
    const armorDie = Q.ARMOR_DIE[pc.armor.tier];
    const weapon = pc.weapon.key ? it(pc.weapon.key) : null;
    const relic = pc.relic ? it(pc.relic) : null;
    const status = [pc.dead ? '<b class="pink">Dead.</b>' : '',
      pc.bleeding && pc.haem ? `<b class="pink">Haemorrhaging</b>: bleeds to death in ${pc.haem.left} steps unless treated (a black poultice, the basilica’s priests, a healing power). Every test is DR ${Q.haemDR(pc)}${Q.haemDR(pc) === 16 ? `, DR 18 once ${Q.HOUR_STEPS} steps are left` : ''}. One more wound at 0 HP is death.` : '',
      pc.dazed ? '<b class="pink">Dazed</b>: loses their next turn.' : '',
      pc.lostEye ? 'Lost an eye (Presence −1).' : '',
      ...(pc.injuries || []).map((x) => `Lives with ${esc(x)}.`)].filter(Boolean).join(' ');
    const party = `<div class="carried"><h3>Carried by the party</h3>
      <p><b>${S.silver}s</b> · <b>${S.poultices}</b> black poultice${S.poultices === 1 ? '' : 's'} (each heals d6 and stops a haemorrhage)</p>
      ${S.scrolls.length ? S.scrolls.map((k) => `<p><b>${esc(Q.SCROLLS[k].name)}</b>: ${esc(Q.SCROLLS[k].text)} <small>Read with Presence DR 12, using one of the reader’s Powers.</small></p>`).join('') : '<p class="dim">No scrolls.</p>'}
      <p class="small">${S.kills} slain; ${Math.max(0, 5 - S.killsSinceBetter)} more before you can Get Better at the inn. <span class="pink">☄ ${calendarText()}.</span></p></div>`;
    const html = `<div class="char">
      <img class="face" src="${Q.portraitUrl(pc.name)}" alt="" onerror="this.remove()">
      ${cls ? `<p class="cls"><b>${esc(cls.name)}</b><br>${esc(cls.blurb)}</p>` : ''}
      <p class="trait">${esc(pc.trait)}</p>
      <div class="vitals">
        <span><small>HP</small><b>${Math.max(0, pc.hp)}/${pc.maxHp}</b></span>
        <span><small>Omens</small><b>${pc.omens}</b></span>
        <span><small>Powers</small><b>${pc.powers}</b></span>
        <span><small>Row</small><b>${pc.row === 'back' ? 'Back' : 'Front'}</b></span>
      </div>
      ${status ? `<p class="status-line">${status}</p>` : ''}
      <h3>Abilities</h3>
      <div class="ab-list">${abRow('strength')}${abRow('agility')}${abRow('presence')}${abRow('toughness')}</div>
      <p class="small">Every test is a d20 plus the ability against a DR, usually 12. A natural 1 always fails; a natural 20 always succeeds.</p>
      <h3>In battle</h3>
      <dl class="gear">
        <dt>Weapon</dt><dd><b>${esc(pc.weapon.name)}</b> (d${pc.weapon.die} damage)${weapon ? `${weapon.cursed ? ' <span class="pink">cursed</span>' : ''}<br><i>${esc(weapon.flavor)}</i><br>${esc(weapon.text)}` : ''}
          <small>Attack: d20 + Strength against the foe’s DR: <b>${chance(pc.strength, Q.DR)}%</b> against DR 12${pc.row === 'back' ? `, <b>${chance(pc.strength, Q.DR + 2)}%</b> from the back row (DR +2)` : ''}.</small></dd>
        <dt>Defence</dt><dd>When a foe strikes at ${esc(pc.name.split(' ')[0])}: d20 + Agility against DR ${defDR}${defDR !== Q.DR ? ` (${[pc.armor.tier === 3 ? 'plate +2' : '', Q.has(pc, 'mirror') ? 'the Mirror Shard +1' : ''].filter(Boolean).join(', ')})` : ''} to dodge: <b>${chance(pc.agility, defDR)}%</b>.</dd>
        <dt>Armor</dt><dd><b>${esc(pc.armor.name)}</b>${armorDie ? `: soaks d${armorDie} off every wound that gets through.` : ': no protection at all.'}${pc.armor.tier === 3 ? ' Heavy: Defence at DR +2.' : ''}${pc.armor.tier ? ' A natural 1 on Defence cracks it a tier.' : ''}</dd>
        ${cls ? `<dt>Ability</dt><dd><b>${esc(cls.ability.name)}</b>: ${esc(cls.ability.text)} Once per battle.</dd>` : ''}
        <dt>Omens</dt><dd>Spend one after a roll goes wrong: roll it again, lower its DR by 4, deal maximum damage, or soften a wound that would put you down. Sleep brings them back up to d2.</dd>
        <dt>Powers</dt><dd>Scroll readings left today. Sleep brings back Presence + d4${cls && cls.powers ? ` + ${cls.powers}` : ''}.</dd>
        <dt>Row</dt><dd>${pc.row === 'back' ? 'Behind. Foes reach you one time in four, but your weapon attacks are at DR +2.' : 'In front. Foes go for you three times in four.'}</dd>
      </dl>
      ${relic ? `<h3>Relic</h3><p><b>${esc(relic.name)}</b>${relic.cursed ? ' <span class="pink">cursed: it won’t come off</span>' : ''}<br><i>${esc(relic.flavor)}</i><br>${esc(relic.text)}</p>` : ''}
      ${party}</div>`;
    const others = S.party.map((p, j) => j).filter((j) => j !== i);
    const canSwap = alive().length === 2 && !Q.Battle.active();
    modal(pc.name, html, [
      ...others.map((j) => ({ label: `${short(S.party[j])}’s sheet`, action: () => showSheet(j) })),
      ...(canSwap ? [{ label: pc.row === 'back' ? 'Move to the front row' : 'Move to the back row', action: () => { const [a, b] = S.party; [a.row, b.row] = [b.row, a.row]; save(); renderHud(); showSheet(i); } }] : []),
      { label: 'Close', ghost: true },
    ]);
  }
  // The Party button: the front wretch's sheet first.
  function partySheet() {
    const front = S.party.findIndex((p) => !p.dead && p.row !== 'back');
    showSheet(front >= 0 ? front : 0);
  }

  // ---------- the city ----------
  // Skarnvik is a floor like any other (js/data.js), walked under the sky. Its buildings, people and
  // things are its uses: walk into one (or tap its name when you face it) and this decides what happens.
  const renderTown = () => renderHud(); // what used to redraw the town screen just refreshes the HUD
  const cityIx = () => floorIndex('skarnvik');
  function enterCity(arriveOn) { enterFloor(cityIx(), arriveOn); }
  const usesHere = () => (S && Q.FLOORS[S.floorIx].uses) || {};

  // ---------- the hour ----------
  // Skarnvik's day goes by in steps walked in its streets: dawn, day, dusk, night, and dawn again. A night's
  // sleep brings the next dawn (walking the night through does too, and heals nothing). After the fourth
  // Misery noon is black as midnight, and the dead walk all day.
  const HOURS = {
    dawn: { next: 'day', steps: 30, name: 'Dawn', says: 'Dawn comes up grey over the harbor.' },
    day: { next: 'dusk', steps: 170, name: 'Day', says: 'Day. The Salt Lords’ watch is out in the streets.' },
    dusk: { next: 'night', steps: 35, name: 'Dusk', says: 'Dusk. The basilica’s bell tolls, and the fishwives haul their boats up off the quay.' },
    night: { next: 'dawn', steps: 170, name: 'Night', says: 'Night. Down at the harbor, something is coming up out of the water.' },
  };
  const blackNoon = () => S.calendar.misery >= 4;
  const hourNow = () => (blackNoon() ? 'night' : S.clock ? S.clock.phase : 'night');
  const hourName = () => (blackNoon() && S.clock && S.clock.phase !== 'night' ? 'Black noon' : HOURS[hourNow()].name);
  const inCity = () => S.floorIx === cityIx() && S.where === 'crawl' && !!world;
  function setHour(phase, left, snap) {
    S.clock = { phase, left: left === undefined ? HOURS[phase].steps : left };
    if (phase !== 'night') S.flags.sawDawn = true; // a day has passed up here since the Brine
    if (world) world.setDaylight(hourNow(), snap);
    cityStreets();
    renderHud();
  }
  // a step in the street
  function tickHour() {
    if (!S.escaped || S.floorIx !== cityIx()) return;
    if (!S.clock) S.clock = { phase: 'night', left: 25, spawned: true };
    S.clock.left -= 1;
    if (S.clock.left > 0) return;
    const next = HOURS[S.clock.phase].next;
    setHour(next);
    if (next === 'dusk') sfx('toll', { f: 147 });
    log(blackNoon() && next !== 'night' ? 'The hour turns, and the sky stays black.' : HOURS[next].says, 'dim');
  }

  // Who is out at this hour: the drowned walk up out of the harbor at night (and the hanged man, if you
  // left him in the Brine), the Salt Lords' watch by day. Once an hour; they go home when it turns.
  const NIGHT_GROUND = [[22, 23, 38, 29], [29, 12, 37, 21]];
  const DAY_GROUND = [[15, 11, 27, 16], [29, 2, 37, 7], [20, 17, 21, 21]];
  const hangedWalks = () => !!(S.flags.sawDawn && (S.flags.promised || S.flags.leftHim) && !S.flags.freed && !S.flags.hangedLaid);
  function cityStreets() {
    const ix = cityIx();
    if (ix < 0 || !S.escaped || !S.clock) return;
    const cf = S.floors[ix];
    const live = inCity();
    const h = hourNow();
    for (const g of cf.groups) {
      if (g.alive && ((g.night && h !== 'night') || (g.day && h !== 'day'))) { g.alive = false; if (live) world.removeGroup(g); }
    }
    cf.groups = cf.groups.filter((g) => g.alive);
    const add = [];
    if (!S.clock.spawned) {
      S.clock.spawned = true;
      if (h === 'night') add.push(...spawn(cf, NIGHT_GROUND, 5 - cf.groups.filter((g) => g.night && !g.hanged).length, () => Array.from({ length: d(2) }, () => ({ key: 'drowned' })), { night: true }));
      if (h === 'day') add.push(...spawn(cf, DAY_GROUND, 3, () => [{ key: 'watch' }, { key: 'watch' }], { day: true }));
    }
    if (h === 'night' && hangedWalks() && !cf.groups.some((g) => g.hanged)) {
      add.push(...spawn(cf, [[20, 13, 25, 15]], 1, () => [{ key: 'hanged', name: S.flags.livingName }], { night: true, hanged: true }, 3));
    }
    cf.groups.push(...add);
    if (live) for (const g of add) world.addGroup(g);
  }
  function spawn(cf, grounds, n, band, tags, near = 7) {
    if (n <= 0) return [];
    const p = inCity() ? world.mapPose() : { x: -99, y: -99 };
    const taken = new Set(cf.groups.map((g) => `${Math.floor(g.x / CELL)},${Math.floor(g.z / CELL)}`));
    const cells = [];
    for (const [x0, y0, x1, y1] of grounds) {
      for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
        if (cf.grid[y] && cf.grid[y][x] === '.' && Math.hypot(x - p.x, y - p.y) > near && !taken.has(`${x},${y}`)) cells.push([x, y]);
      }
    }
    const out = [];
    for (let i = 0; i < n && cells.length; i++) {
      const [x, y] = cells.splice(Math.floor(Math.random() * cells.length), 1)[0];
      S.spawned = (S.spawned || 0) + 1;
      out.push({ id: `street-${S.spawned}`, x: (x + 0.5) * CELL, z: (y + 0.5) * CELL, members: band(), alive: true, alert: false, ...tags });
    }
    return out;
  }
  // Who stands where depends on the story: the one you freed hides in the Gutter (until he comes with you).
  // A use with only/unless names the flag.
  function cityPeople() {
    const ix = cityIx(), f = Q.FLOORS[ix], grid = S.floors[ix].grid;
    f.rows.forEach((row, y) => [...row].forEach((t, x) => {
      const u = f.uses[t];
      if (u && (u.only || u.unless)) grid[y][x] = (!u.only || S.flags[u.only]) && (!u.unless || !S.flags[u.unless]) ? t : '.';
    }));
  }

  // Something in the street reaches you. Most things just fight; the watch talk first, and the hanged man
  // has something to say.
  async function meet(g) {
    const key = g.members[0].key;
    if (key === 'watch') return patrol(g);
    if (key === 'hanged') {
      await playScene(Q.SCENES.find((x) => x.id === 'hangedman'), true);
      if (!alive().length) return;
    }
    return battle(g);
  }
  const TOLL = 5;
  async function patrol(g) {
    const dm = makeDM();
    const gaol = alive().some((p) => p.gaol);
    const dr = gaol ? 14 : 12;
    const opts = [
      { label: `Pay the street toll (${TOLL}s)`, disabled: S.silver < TOLL },
      { label: 'Talk your way past', note: `Presence DR ${dr}` },
      { label: 'Fight them' },
    ];
    const pick = await say('The Salt Lords’ watch', gaol
      ? `Two watchmen in salt-white step into your way, halberds down. One of them holds up a wanted poster, wet through, and looks from it to your faces, and to your wrists.

<em>“Gaol-pale,”</em> he says. <em>“Where did you two crawl up from?”</em>`
      : `Two watchmen in salt-white step into your way, halberds down. <em>“Seal? No seal. Then it’s the street toll: ${TOLL} silver, by order of the Salt Lords.”</em>`, opts);
    let pass = pick === 0;
    if (pass) { S.silver -= TOLL; log(`The watch takes <b>${TOLL}s</b>.`, 'dim'); renderHud(); }
    if (pick === 1) pass = await dm.test(dm.best('presence'), 'presence', dr, 'talks to the watch');
    if (pass) {
      g.alive = false;
      world.removeGroup(g);
      await say('The Salt Lords’ watch', pick === 0 ? 'The silver goes into a tabard. <em>“Move along.”</em>'
        : '<em>“...Fine. Move along. And wash, for the saints’ sake.”</em> They go off down the street with their halberds on their shoulders.', [{ label: 'Move along' }]);
      return;
    }
    if (pick === 1) await say('The Salt Lords’ watch', '<em>“Liar.”</em> The halberds come up.', [{ label: 'Fight' }]);
    await battle(g);
  }
  function goal() {
    const f = S.flags;
    if (f.strangerAgne) return 'Under the Exchange, down the white stair, the Salt Lords grind the saints into salt. (The story continues in the next update.)';
    if (f.agneMet) return 'Tell the Stranger, by the gallows, what is under Church Hill.';
    if (f.hollowOpen) return 'Go down the bell-ringers’ stair, behind the graves on Church Hill, to Saint Agne.';
    if (f.seekAgne) return `Find the bell-ringers’ way into Church Hill, behind the graves. ${f.bellStair ? 'The freed man says the door only sticks: lift it on its hinges.' : 'The gravedigger buried the bell-ringers; he will know.'}`;
    if (f.strangerTold) return 'The Stranger, by the gallows, has more to tell you.';
    return S.flags.deepStair ? 'Tell the Stranger, by the gallows, what the water is doing under the square.'
        : S.metStranger ? 'Go down the crypt stair at the edge of the square, into the Undercroft, and see what the water is doing.'
          : 'A stranger in the shadow of the gallows is watching you.';
  }
  async function useThing(u) {
    if (u.act === 'grate') sewerGrate();
    else if (u.act === 'home') visitHome(u);
    else if (u.act === 'church') visitChurch();
    else if (u.act === 'inn') visitInn();
    else if (u.act === 'shop') visitShop();
    else if (u.act === 'stranger') visitStranger();
    else if (u.act === 'board') showBoard();
    else if (u.scene) {
      const sc = Q.SCENES.find((x) => x.id === u.scene);
      if (!sc) return;
      const first = !S.scenes[sc.id];
      S.scenes[sc.id] = true;
      await playScene(sc, first);
    }
  }
  // What you face: its name, as a label you can tap.
  let facingNow = null;
  function updateFacing() {
    const el = $('facing');
    const f = world && S && S.where === 'crawl' && !busy && !modalOpen && !S.over ? world.facing() : null;
    const u = f && usesHere()[f.t];
    facingNow = u ? f : null;
    el.hidden = !u;
    const name = u && (isHome(u) ? (u.home === 'scum' ? 'Your corner of the alley' : 'Your home') : u.act === 'church' && S.home && S.home.cls === 'priest' ? 'The basilica (your home)'
      : u.scene === 'belldoor' && S.flags.hollowOpen ? 'The bell-ringers’ stair' : u.name);
    if (u) el.innerHTML = `${esc(name)}<small>${u.decal ? 'step onto' : 'walk into'} ${u.prop && u.scene !== 'gallows' && u.scene !== 'graves' && u.act !== 'board' ? 'them' : 'it'}, or tap here</small>`;
  }
  // ---------- homes ----------
  // New wretches are of Skarnvik: they wake at home, and whose home is the front one's: a priest in the
  // basilica's vestry, a hermit in a graveyard crypt-house, royalty in what is left of the House of Vael, a
  // herbmaster in a narrow house in Lantern Row, a deserter in the old watch-house, gutterborn scum in an
  // alley. Their home is a free bed (js/data.js: the city's starts say where each one is).
  const HOMES = {
    priest: { wake: 'You wake on the cold floor of the basilica’s vestry, under a painting of a saint with her eyes scratched out. The other priests are already at their prayers, or pretending to be.',
      sleep: 'The vestry: a cot, a cold font, and the other priests not quite looking at you.', rest: 'home' },
    hermit: { wake: 'You wake in your crypt-house in the graveyard on Church Hill, between two coffins and a pile of books that should not exist. The dead were quiet company, as always.',
      sleep: 'Your crypt-house: a pallet between two coffins, your books, the candle stubs.', rest: 'home' },
    royalty: { wake: 'You wake in the House of Vael, up on the Hill, in the last room with a bed in it. Everything else worth selling has been sold, and the Salt Lords’ men watch the door.',
      sleep: 'The House of Vael. Everything worth selling is sold, but the bed is still a bed.', rest: 'bed' },
    herbmaster: { wake: 'You wake in your narrow house in Lantern Row, under bundles of herbs drying in the rafters, to the smell of rot and rosemary.',
      sleep: 'Your house: herbs in the rafters, jars on every shelf, a bed that smells of both.', rest: 'home' },
    deserter: { wake: 'You wake in the old watch-house in the Gutter, where the deserters keep the door barred and the brazier lit. Nobody here asks which war you walked away from.',
      sleep: 'The old watch-house. Your blanket by the brazier is where you left it.', rest: 'home' },
    scum: { wake: 'You wake in your corner of the alley, in a nest of rags, with a wall at your back and a rat you have come to an arrangement with.',
      sleep: 'Your corner of the alley. A nest of rags, a wall at your back.', rest: 'gutter' },
  };
  const NOT_HOME = {
    hermit: 'A crypt-house in the graveyard. The door is chained from the inside, and something in there is breathing, slowly.',
    royalty: 'The House of Vael. The shutters are nailed shut, and a Salt Lords’ notice of debt is nailed over the door.',
    herbmaster: 'A narrow house hung with herbs. Somebody inside tells you to go away, and means it.',
    deserter: 'The old watch-house. Deserters squat in it. A voice behind the boards tells you to keep walking.',
    scum: 'A nest of rags in a corner of the alley. It smells like somebody lives here, and they would not like you in it.',
  };
  const ANGLE = { N: -Math.PI / 2, E: 0, S: Math.PI / 2, W: Math.PI };
  function startPose(cls) {
    const st = (Q.FLOORS[cityIx()].starts || {})[cls];
    return st && { x: (st.at[0] + 0.5) * CELL, z: (st.at[1] + 0.5) * CELL, a: ANGLE[st.a] || 0 };
  }
  // Back to the city at your home's door (or, for the two who escaped and have none, the grate).
  function goHome() {
    const pose = S.home && startPose(S.home.cls);
    if (pose) enterFloor(cityIx(), null, pose);
    else enterCity('G');
  }
  const isHome = (u) => !!(u.home && S.home && S.home.cls === u.home);
  function visitHome(u) {
    if (!isHome(u)) { modal(u.name, `<p>${esc(NOT_HOME[u.home] || 'The door stays shut.')}</p>`, [{ label: 'Walk on' }]); return; }
    const h = HOMES[u.home];
    modal('Home', `<p>${esc(h.sleep)}</p><p class="small">Sleep here for nothing: ${h.rest === 'bed' ? 'all HP back' : h.rest === 'home' ? 'd6 HP each' : 'd4 HP each'}, and your Omens and Powers. It costs a day: <span class="pink">☄ ${calendarText()}</span>.</p>${bleedWarning()}`, [
      { label: 'Sleep', action: () => sleep(h.rest === 'bed' ? true : h.rest === 'home' ? 'home' : false) },
      { label: 'Leave', ghost: true },
    ]);
  }
  // The basilica on Church Hill.
  const BLESSING = 10;
  function visitChurch() {
    const mine = S.home && S.home.cls === 'priest';
    modal('The Basilica of the Two-Headed Basilisk', `<p>Candles, incense and damp. Over the altar, a basilisk of black iron with two heads, one looking up at the comet and one looking down. Along the nave, every saint’s niche is empty.</p>${alive().some((p) => p.bleeding) ? '<p class="pink">The priests can bind a haemorrhage: pay for a blessing.</p>' : ''}`, [
      { label: 'Ask about the empty niches', action: () => {
        S.flags.emptyNiches = true;
        modal('The empty niches', '<p>A priest with ash on his hands: <em>“Taken down for cleaning. By the Salt Lords’ men, in the spring, with a wagon. The saints’ days stopped the same week.”</em></p><p>He looks at the floor. <em>“They have not brought them back.”</em></p>', [{ label: 'Go on' }]);
      } },
      { label: `Pay for a blessing (${BLESSING}s)`, note: 'the priests bind your wounds: d6 HP each, a haemorrhage stops', disabled: S.silver < BLESSING || !alive().some((p) => p.hp < p.maxHp || p.bleeding), action: () => {
        S.silver -= BLESSING;
        const got = alive().map((pc) => { const n = d(6); pc.hp = Math.min(pc.maxHp, pc.hp + n); pc.bleeding = false; return `${esc(pc.name)} +${n} HP`; });
        sfx('heal'); log(`The priests mutter over your wounds. ${got.join(', ')}.`, 'hit'); save(); renderHud();
      } },
      ...(mine ? [{ label: 'Sleep in the vestry', note: 'your home: d6 HP each, free', action: () => sleep('home') }] : []),
      { label: 'Leave', ghost: true },
    ]);
  }

  // The board in Gallows Square: work for silver, killing what lives under the square.
  const BOUNTIES = [
    { id: 'rats', title: 'Rats in the drains', text: 'The rats are coming up out of the Undercroft into the cellars. 5s a pack, 3 packs.', kind: 'rats', need: 3, pay: 15 },
    { id: 'dead', title: 'The dead won’t lie down', text: 'Somebody’s grandmother walked out of the crypts. Put down two of the rotting dead.', kind: 'zombie', need: 2, pay: 24 },
    { id: 'bones', title: 'Bones on the crypt stair', text: 'The gravediggers won’t go down while the skeletons walk. Break two.', kind: 'skeleton', need: 2, pay: 30 },
    { id: 'harbor', title: 'The harbor dead', text: 'The fishwives want their streets back after dark. Put three of the drowned back in the sea.', kind: 'drowned', need: 3, pay: 24, always: true },
    { id: 'mouths', title: 'Silence the Bright Mouths', text: 'Comet cultists preach drowning under the square. The Salt Lords pay for quiet. Two of them.', kind: 'cultist', need: 2, pay: 40 },
  ];
  // Work goes up for what still lives below (and what you've taken stays up).
  function postBounties() {
    const b = S.bounties || (S.bounties = { posted: [], taken: {} });
    const under = S.floors[floorIndex('undercroft')];
    const living = new Set(under.groups.filter((g) => g.alive).flatMap((g) => g.members.map((m) => Q.MONSTERS[m.key].kind)));
    b.posted = BOUNTIES.filter((x) => b.taken[x.id] !== undefined || x.always || living.has(x.kind)).map((x) => x.id).slice(0, 4);
  }
  function showBoard() {
    if (!S.bounties) postBounties();
    const b = S.bounties;
    const rows = b.posted.map((id) => {
      const x = BOUNTIES.find((y) => y.id === id);
      const got = b.taken[id];
      const state = got === undefined ? '' : got >= x.need ? '<b class="yellow">Done: collect your pay.</b>' : `<b>Taken:</b> ${got}/${x.need}.`;
      return `<p><b>${esc(x.title)}</b> · ${x.pay}s<br><span class="small">${esc(x.text)}</span>${state ? `<br>${state}` : ''}</p>`;
    }).join('') || '<p class="dim">Nothing posted. Everything down there is dead, for now.</p>';
    const takenCount = Object.keys(b.taken).length;
    const buttons = [];
    for (const id of b.posted) {
      const x = BOUNTIES.find((y) => y.id === id);
      const got = b.taken[id];
      if (got === undefined) {
        buttons.push({ label: `Take: ${x.title}`, note: takenCount >= 2 ? 'you can carry two at a time' : `${x.need} ${x.kind === 'rats' ? 'packs' : 'kills'}, ${x.pay}s`, disabled: takenCount >= 2,
          action: () => { b.taken[id] = 0; save(); log(`You tear down the notice: <b>${esc(x.title)}</b>.`); showBoard(); } });
      } else if (got >= x.need) {
        buttons.push({ label: `Collect ${x.pay}s: ${x.title}`,
          action: () => { delete b.taken[id]; b.posted = b.posted.filter((y) => y !== id); S.silver += x.pay; sfx('gain'); log(`A Salt Lords’ clerk counts out <b>${x.pay}s</b> for <b>${esc(x.title)}</b>.`, 'hit'); save(); renderHud(); showBoard(); } });
      }
    }
    modal('The bounty board', `${rows}
      <p class="small">Between the notices, a wanted poster from the Salt Lords: <i>escaped from the Brine Gaol</i>. The faces are washed to nothing by the rain, and nobody is looking at it. New work goes up every morning.</p>`,
    [...buttons, { label: 'Walk on', ghost: true }]);
  }
  // A kill below counts toward any bounty you've taken on it.
  function countBounties(kinds) {
    if (!S.bounties) return;
    for (const [id, got] of Object.entries(S.bounties.taken)) {
      const x = BOUNTIES.find((y) => y.id === id);
      const n = kinds.filter((k) => k === x.kind).length;
      if (!n || got >= x.need) continue;
      S.bounties.taken[id] = Math.min(x.need, got + n);
      const done = S.bounties.taken[id] >= x.need;
      log(done ? `<b class="yellow">Bounty done:</b> ${esc(x.title)}. Collect at the board.` : `Bounty: ${esc(x.title)} ${S.bounties.taken[id]}/${x.need}.`, done ? 'hit' : 'dim');
    }
  }

  const HIRE = 20;
  function visitInn() {
    const better = S.killsSinceBetter >= 5;
    const dead = S.party.findIndex((p) => p.dead);
    const bed = mods().bed;
    modal('The Drowned Lamb', art('inn') + `
      <p>Damp straw, a bowl of grey gruel, a landlord who will not meet your eye. ${better ? '<br><b class="yellow">You have survived enough horror to change. Sleep and you will Get Better.</b>' : ''}</p>
      <p class="small">A night's sleep restores Omens and Powers, but it costs a day: <span class="pink">☄ ${calendarText()}</span>. You have ${S.silver}s.</p>${bleedWarning()}`, [
      { label: `Beds for the party (${bed}s): all HP back`, disabled: S.silver < bed, action: () => { S.silver -= bed; sleep(true); } },
      { label: mods().gutter ? 'The gutter (free): d4 HP each' : 'The gutter (free): it runs with blood, and heals nothing', action: () => sleep(false) },
      ...(dead >= 0 ? [{ label: `Hire a wretch from the taproom (${HIRE}s)`, disabled: S.silver < HIRE, action: () => hire(dead) }] : []),
      { label: 'Leave', ghost: true },
    ]);
  }

  function hire(slot) {
    S.silver -= HIRE;
    const pc = rollBeside(undefined, S.party[1 - slot]);
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
    for (const pc of alive().filter((p) => p.bleeding)) {
      bleedOut(pc, 'sleep');
      lines.push(pc.dead ? `<span class="pink"><b>${esc(pc.name)}</b> bled to death in the night.</span>` : `<span class="yellow">The Pilgrim’s Shroud kept <b>${esc(pc.name)}</b> from bleeding to death in the night.</span>`);
    }
    for (const pc of alive()) {
      if (bed === true) pc.hp = pc.maxHp;
      else if (bed === 'home') pc.hp = Math.min(pc.maxHp, pc.hp + d(6));
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
    postBounties();
    setHour('dawn', undefined, true);
    save();
    renderTown();
    if (!alive().length) {
      modal('Morning', lines.map((l) => `<p>${l}</p>`).join(''), [{ label: 'Go on', action: () => gameOver('a haemorrhage') }], { closable: false });
      return;
    }
    modal(bed === true ? 'Morning' : bed === 'home' ? 'Morning, at home' : 'Morning, in the gutter', lines.map((l) => `<p>${l}</p>`).join(''), [
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

  const ledgerTalk = () => (S.flags.ledger && !S.flags.ledgerTold ? [{ label: 'Tell him about the Gaol ledger', action: strangerLedger }] : []);
  function strangerLedger() {
    S.flags.ledgerTold = true;
    S.silver += 10;
    save();
    renderHud();
    modal('The Stranger', `${art('stranger')}
      <p>“Fennick.” The Stranger says the name the way you would spit out a tooth. “The diggers from the Deep Mine: <i>not to be released, not to be named</i>. So they did find something down there, and the Salt Lords buried it in the Brine with the men who found it.”</p>
      <p>He presses ten silver into your hand. “For your memory. Keep it sharp.”</p>`, [{ label: 'Take the silver' }]);
  }
  // The rest of it: the saints that hold the island up, and the one under Church Hill.
  function strangerRest(first) {
    S.flags.seekAgne = true;
    save();
    modal('The Stranger', `${art('stranger')}
      ${first ? '' : '<p>The Stranger looks at you a long time before he speaks.</p>'}
      <p>“The old hymns say seven saints hold Skarn up, one under each hill. The priests stopped singing those hymns the year the Salt Lords built their Exchange.”</p>
      <p>“Church Hill had one. <b>Saint Agne.</b> The bell-ringers kept her: they rang every dawn so she’d know she wasn’t forgotten, until the Salt Lords forbade the bell. The last of them went down into the hill and never came up.”</p>
      <p>“Find the bell-ringers’ way into Church Hill. It’s behind the graves. The gravedigger buried most of them; he’ll know how it opens.”</p>`, [...ledgerTalk(), { label: 'Nod' }]);
    log(goal());
  }
  function strangerAgne() {
    S.flags.strangerAgne = true;
    S.silver += 50;
    save();
    renderHud();
    modal('The Stranger', `${art('stranger')}
      <p>“Cut to the knee.” The Stranger is quiet for a long time. “And four of her sisters gone already. Their salt in the Exchange.”</p>
      ${S.flags.writ ? '<p>He reads the overseer’s writ twice. “<i>Leave the crown, so the hill stands until the Exchange has its fill.</i> They know. They know exactly what they’re doing.”</p>' : ''}
      <p>He presses fifty silver into your hand without counting it. “Then that’s where they grind them. Under the Exchange, down the white stair the old miners sang about. That’s where we go next. Not yet. Get stronger.”</p>
      <p class="small">(The story continues in the next update.)</p>`, [...ledgerTalk(), { label: 'Take the silver' }]);
    log(goal());
  }
  function visitStranger() {
    if (S.flags.agneMet && !S.flags.strangerAgne) { strangerAgne(); return; }
    if (S.flags.strangerAgne) {
      modal('The Stranger', `${art('stranger')}
        <p>“Under the Exchange. The white stair. Get stronger, and come back.”</p>
        <p class="small">(The story continues in the next update.)</p>`, [...ledgerTalk(), { label: 'Nod' }]);
      return;
    }
    if (S.flags.strangerTold && !S.flags.seekAgne) { strangerRest(false); return; }
    if (S.flags.seekAgne) {
      modal('The Stranger', `${art('stranger')}
        <p>“Saint Agne. Under Church Hill. Find the bell-ringers’ way in.”</p>`, [...ledgerTalk(), { label: 'Nod' }]);
      return;
    }
    if (S.flags.deepStair && !S.flags.strangerTold) {
      S.flags.strangerTold = true;
      S.silver += 40;
      save();
      renderTown();
      modal('The Stranger', `${art('stranger')}
        <p>“Rising, you say. From under. Not rain, not a spring.” The Stranger presses forty silver into your hand without counting it.</p>
        <p>“Then it’s true. The island isn’t sinking. <b>Something is pulling it down.</b> And the Salt Lords are getting rich while it happens.”</p>
        <p>“And I think I know where to look.”</p>`, [{ label: 'Take the silver', action: () => strangerRest(true) }]);
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
      <p class="small">The crypt stair is at the edge of the square. Rest at the Drowned Lamb, buy what you can at Thrumm’s, and hire a new wretch there if one of you falls.</p>`, [...ledgerTalk(), { label: 'Nod' }]);
  }

  // Out through the grate: the city, at last. From here on, the dead are replaced, not the story.
  async function escapeGaol() {
    S.escaped = true;
    S.clock = { phase: 'night', left: 25, spawned: true };
    for (const pc of alive()) if (pc.stash) { pc.weapon = pc.stash.weapon; pc.armor = pc.stash.armor; S.silver += pc.stash.silver; delete pc.stash; }
    enterCity('G');
    save();
    await say('Skarnvik', `You come up through a sewer grate in Gallows Square, an hour before dawn, and nobody looks twice. Why would they? Your faces are on posters on the gallows, so faded by rain you can barely tell they were ever faces.

The city has changed while you were inside. There is a comet over the harbor. Half the old docks are under black water, and the fishermen are moving their boats up into the streets. The dead walk in the low graveyards. The Salt Lords’ men walk everywhere else.

And nobody, <em>nobody</em>, is talking about why the island is sinking.`, [{ label: 'Look around' }]);
    log(`<b>Skarnvik.</b> ${goal()}`);
    log('The Drowned Lamb is down Rope Street, by the harbor. Thrumm’s stall is on the square.', 'dim');
  }

  // The grate you came up through. Never again.
  function sewerGrate() {
    modal('The sewer grate', `<p>Iron bars over the black, and under them, far down, the sound of the sea coming in through the cells. The Brine Gaol.</p>
      <p>You crawled out of there once, through the water and the dead and the Warden. <b>You are never going back down.</b></p>`, [{ label: 'Walk on' }]);
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
      onContact: (g) => run(() => meet(g)),
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
    S.deepest = Math.max(S.deepest || 1, depthOf(ix));
    show('crawl');
    const w = ensureWorld();
    w.showHands(true);
    const f = Q.FLOORS[ix];
    const grid = floor().grid;
    if (ix === cityIx()) cityPeople();
    w.setDaylight(hourNow());
    w.load({ grid, heights: f.heights, ceil: f.ceil, theme: f.theme, uses: f.uses, groups: floor().groups.filter((g) => g.alive), opened: floor().opened });
    let p = pose;
    if (!p) grid.forEach((row, y) => row.forEach((t, x) => { if (t === arriveOn && !p) p = w.cellPose(x, y); }));
    w.place(p);
    S.pose = p;
    if (ix === cityIx()) cityStreets();
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
    tickHour();
    await bleedTick();
    if (S.over) return;
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
      const key = Q.rollItem(S, lootDepth(), 'relic');
      if (key) await new Promise((res) => offerItem(key, { title: 'The hidden niche', intro: 'Wrapped in rotten velvet, at the back of the niche:', then: res }));
      return;
    }
    if (t === 'p') {
      g[y][x] = '.';
      const pc = alive()[Math.floor(Math.random() * alive().length)];
      let r = Q.test(pc.agility, Q.drOf(pc, Q.DR));
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
    } else if (usesHere()[t] && usesHere()[t].decal) {
      await useThing(usesHere()[t]);
    } else if (t === 'G' && floor().id === 'gaol') {
      ask('The sewer grate', '<p>Above you, a grate, and through it grey light and the smell of rain and fish and smoke. <b>The city.</b></p>', 'Climb out', () => run(escapeGaol));
    } else if (t === 'G') {
      const f = Q.FLOORS[S.floorIx];
      ask('The stair up', art('stair') + `<p>${f.upText || 'Rain and a grey light come down the steps. Gallows Square is above.'}</p>`, 'Climb out', () => {
        if (f.upAt) enterFloor(cityIx(), null, { x: (f.upAt[0] + 0.5) * CELL, z: (f.upAt[1] + 0.5) * CELL, a: ANGLE[f.upAt[2]] });
        else enterCity('>');
        log(`You climb back up into <b>${esc(placeName())}</b>.`);
        save();
      });
    } else if (t === '>' && Q.FLOORS[S.floorIx].down) {
      ask('The crypt stair', art('stair') + '<p>Worn steps go down under the square, into a cold that smells of candle wax and old water. <b>The Undercroft.</b></p>', 'Descend', enterCrypt);
    } else if (t === '>') {
      log('The stair down is drowned to the ceiling. Whatever is below, you can’t reach it. Yet.', 'dim');
    } else if (t === '<') {
      ask('Steps up', `<p>Back up to <b>${esc(S.floors[S.floorIx - 1].name)}</b>?</p>`, 'Climb', () => { enterFloor(S.floorIx - 1, '>'); log(`You climb back to <b>${esc(floor().name)}</b>.`); });
    }
  }

  // A haemorrhage, untreated: an hour is Q.HOUR_STEPS steps. The last hour is worse; then death.
  async function bleedTick() {
    for (const pc of alive()) {
      if (!pc.bleeding) { delete pc.haem; continue; }
      if (!pc.haem) pc.haem = { left: Q.HOUR_STEPS, hours: 1 }; // bleeding from before the clock
      pc.haem.left -= 1;
      if (pc.haem.left === Q.HOUR_STEPS && pc.haem.hours > 1) log(`${short(pc)} is going grey. <b>The last hour</b>: every test is DR 18.`, 'hurt');
      else if (pc.haem.left === 5) log(`${short(pc)} is bleeding to death: <b>5 steps</b> left.`, 'hurt');
      if (pc.haem.left > 0) continue;
      await bleedOut(pc, 'walking');
      if (!alive().length) { gameOver('a haemorrhage'); return; }
    }
    renderHud();
  }
  async function bleedOut(pc, how) {
    pc.bleeding = false;
    delete pc.haem;
    if (pc.relic === 'shroud') {
      Q.takeOff(pc);
      pc.hp = 1;
      sfx('toll', { f: 196 });
      if (how !== 'sleep') await say('Not yet', `${short(pc)} has bled out, and should be dead. The Pilgrim’s Shroud takes their place and falls to dust. <em>1 HP</em>, and the bleeding has stopped.`, [{ label: 'Go on' }]);
      return;
    }
    pc.dead = true;
    pc.hp = Math.min(pc.hp, 0);
    pc.cause = 'a haemorrhage';
    sfx('toll', { f: 98 });
    log(`<b class="pink">${esc(pc.name)} has bled to death.</b>`, 'hurt');
    renderHud();
    if (how === 'sleep') return;
    await say('Dead', `${short(pc)} sits down against the wall, and doesn’t get up. The haemorrhage was never treated, and the hours ran out.

<em>${short(pc)} has bled to death.</em>`, [{ label: 'Go on' }]);
  }
  // Sleeping is no cure: whoever is bleeding to death doesn't wake.
  const bleedWarning = () => {
    const dying = alive().filter((p) => p.bleeding);
    return dying.length ? `<p class="pink"><b>${dying.map((p) => esc(p.name)).join(' and ')} ${dying.length > 1 ? 'are' : 'is'} bleeding to death</b>, and won’t live through the night. Bind the wound first: a black poultice, or the priests at the basilica.</p>` : '';
  };

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
    const res = Q.searchRemains(lootDepth());
    if (res.kind === 'item') {
      const key = Q.rollItem(S, lootDepth());
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

  // Into the chasm: everyone takes the fall, and climbs out by the ladder bolted to its wall. Down there,
  // under the black water, the breath runs out: a point of HP every few seconds, but never the last one.
  async function fall() {
    log('The edge crumbles. You fall into the dark.', 'hurt');
    sfx('fall');
    for (const pc of alive()) {
      const dmg = d(6);
      await throwDice({ dice: [D(6, dmg, 'pink', 'Fall')], verdict: `${short(pc)} −${dmg} HP`, tone: 'bad', text: 'A fall into the chasm: d6 damage each' });
      await hurt(pc, dmg, 'a fall');
    }
    if (!alive().length) return;
    log('Black water over your heads. Somewhere on the wall, an <b>iron ladder</b>: climb.', 'hurt');
  }
  const PIT_EVERY = 3000;
  let pitClock = 0;
  setInterval(() => {
    if (!S || S.over || S.where !== 'crawl' || !world || !world.inPit || !world.inPit() || busy || modalOpen) { pitClock = 0; return; }
    pitClock += 500;
    if (pitClock < PIT_EVERY) return;
    pitClock = 0;
    const hurtOnes = alive().filter((p) => p.hp > 1);
    if (!hurtOnes.length) return;
    for (const pc of hurtOnes) pc.hp -= 1;
    sfx('hurt');
    flashHurt();
    log('No air down here. <b>−1 HP</b> each. Find the ladder.', 'hurt');
    renderHud();
  }, 500);

  async function hurt(pc, dmg, cause) {
    sfx('hurt');
    await Q.hurtWretch(pc, dmg, cause, { log, onHurt: flashHurt, onChange: renderHud, party: S.party, say });
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
      ...(g.members.some((m) => Q.MONSTERS[m.key].boss) ? { bossWeak: !!S.flags.abbessWeak, firstStrike: !!S.flags.ambush, foesFirst: (!!S.flags.abbessAlert || (!!S.flags.bellRung && g.members.some((m) => m.key === 'overseer'))) && !S.flags.ambush } : {}),
      onDayLost: () => { const m = tickCalendar(); if (m) S.pendingMiseries.push(m); renderHud(); },
      onChange: renderHud, onHurt: flashHurt, say, sheet: showSheet,
    });
    if (result.outcome === 'won') {
      g.alive = false;
      S.silver += result.silver;
      S.kills += result.slain;
      S.killsSinceBetter += result.slain;
      countBounties(g.members.map((m) => Q.MONSTERS[m.key].kind));
      if (g.members.some((m) => Q.MONSTERS[m.key].kind === 'warden')) {
        S.flags.wardenDead = true;
        log('The Warden goes down into the water. On his ring, among a hundred keys, one is new and bright: <b>the key to the grate at the end of the hall.</b>', 'hit');
      }
      // cultists carry relics; skeletons, strange weapons
      const kinds = g.members.map((m) => Q.MONSTERS[m.key].kind);
      let drop = null;
      if (kinds.includes('overseer')) {
        S.flags.overseerDead = true;
        S.flags.writ = true;
        log('In the overseer’s belt, a writ under Lord Fennick’s seal: <i>“Cut from below. Leave the crown, so the hill stands until the Exchange has its fill.”</i>', 'hit');
      }
      if (kinds.includes('hanged')) {
        S.flags.hangedLaid = true;
        log(`${esc(S.flags.livingName || 'The hanged man')} lies still in the street at last.`, 'hit');
        S.dropIntro = 'In his fist, the one thing he kept from the guards:';
        drop = Q.rollItem(S, 2, 'relic');
      }
      if (drop) { /* already found */ } else if (kinds.includes('cultist') && d(2) === 1) drop = Q.rollItem(S, lootDepth(), 'relic');
      else if ((kinds.includes('skeleton') || kinds.includes('guard')) && d(3) === 1) drop = Q.rollItem(S, lootDepth(), 'weapon');
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
      const intro = S.dropIntro || (key && `Something falls from the ${Q.ITEMS[key].kind === 'relic' ? 'cultist’s rags' : 'dead hand'}:`);
      S.dropIntro = null;
      if (key && !S.over) offerItem(key, { title: 'Among the dead', intro });
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
      return `<button type="button" class="chip${pc.dead ? ' dead' : ''}" data-sheet="${S.party.indexOf(pc)}" aria-label="${esc(pc.name)}’s character sheet"><img src="${Q.portraitUrl(pc.name)}" alt="">
        <span><b>${short(pc)}</b><span class="hpbar small"><span style="width:${pct}%"></span><em>${pc.dead ? 'Dead' : `${Math.max(0, pc.hp)}/${pc.maxHp}${pc.bleeding && pc.haem ? ` ♦${pc.haem.left}` : ''}`}</em></span></span></button>`;
    }).join('') + `<div class="purse">${S.silver}s</div><div class="purse comet" title="Calendar of Nechrubel: ${calendarText()}">☄ ${S.calendar.days}</div>`;
    $('hudPlace').textContent = S.where === 'crawl' ? placeName() + (S.escaped && S.floorIx === cityIx() ? ` · ${hourName()}` : '') : '';
    if (world) {
      // the front wretch's weapon is the one in the right hand
      const front = alive().find((p) => p.row !== 'back') || alive()[0];
      world.setWeapon(front ? front.weapon.art || front.weapon.name : null);
    }
    $('tPoultice').querySelector('small').textContent = S.poultices;
    $('tPoultice').disabled = S.poultices <= 0 || !alive().some((p) => p.hp < p.maxHp || p.bleeding);
  }

  // The floor's name, or in the city the district you stand in.
  function placeName() {
    const areas = Q.FLOORS[S.floorIx].areas;
    if (!areas || !world) return floor().name;
    const p = world.mapPose(), cx = Math.round(p.x), cy = Math.round(p.y);
    const a = areas.find((x) => (x.rect ? cx >= x.rect[0] && cx <= x.rect[2] && cy >= x.rect[1] && cy <= x.rect[3] : cy >= x.rows[0] && cy <= x.rows[1]));
    return a ? a.name : floor().name;
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
    updateFacing();
  }

  function mapView(mini) {
    const p = world.mapPose();
    const eye = Q.anyHas(S.party, 'eye') || !!floor().heard;
    const groups = floor().groups.filter((g) => g.alive).map((g) => ({ hp: 1, seen: true, always: eye, ...world.monsterPos(g) }));
    return { mini, grid: floor().grid, explored: floor().explored, x: p.x, y: p.y, a: p.a, monsters: groups, uses: usesHere() };
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
    if (Q.Voice && Q.Voice.speak) Q.Voice.speak($('modalBody'), S ? S.party.flatMap((p) => [p.name, p.name.split(' ')[0]]) : []);
    const first = row.querySelector('button:not(:disabled)');
    if (first) first.focus({ preventScroll: true });
    document.querySelector('#modal .card').scrollTop = 0;
  }

  function closeModal() {
    if (Q.Voice && Q.Voice.stop) Q.Voice.stop();
    $('modal').hidden = true;
    modalOpen = false;
    if (world && S && S.where === 'crawl' && !busy && !S.over) world.resume();
  }

  function showMap() {
    if (!world || S.where !== 'crawl') return;
    // the key: the city's own marks, or the dungeon's
    const marks = Object.values(usesHere()).filter((u) => u.mark && u.name).reduce((a, u) => (a.some((x) => x.mark === u.mark) ? a : [...a, u]), []);
    const below = '▲ stairs up · ▼ stairs down · ✚ remains · ◍ font · pink: monsters';
    const outdoors = !!(Q.FLOORS[S.floorIx].theme || {}).outdoor;
    const key = marks.length
      ? [...marks.map((u) => `${u.mark} ${{ '●': 'someone to talk to', '▪': 'homes', '+': 'graves' }[u.mark] || esc(u.name)}`), outdoors ? '▼ the crypt stair' : below].join(' · ')
      : below;
    modal(floor().name, `<canvas id="bigMap" width="480" height="480"></canvas><p class="small">${key}</p>`, [{ label: 'Close' }]);
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
  // The flood: black water over the dungeon floors, always (an old "dry" choice from the test is forgotten).
  Q.prefs.flood = true;
  try { localStorage.removeItem('quest-borg-flood'); } catch (e) { /* ignore */ }
  // When the Broken table is rolled: at exactly 0 HP, as the book says, or on any wound that takes you to 0
  // or below (a common house rule: a killing blow rolls on the table too).
  const BROKEN_KEY = 'quest-borg-broken';
  Q.prefs.broken = 'exact';
  try { if (localStorage.getItem(BROKEN_KEY) === 'below') Q.prefs.broken = 'below'; } catch (e) { /* ignore */ }
  const MOVE_KEY = 'quest-borg-move';
  let moveMode = 'free';
  try { moveMode = localStorage.getItem(MOVE_KEY) === 'grid' ? 'grid' : 'free'; } catch (e) { /* storage may be unavailable */ }
  function applyMove() {
    if (world) { world.setMode(moveMode); world.setWater(Q.prefs.flood); }
    $('hint').innerHTML = (moveMode === 'grid'
      ? 'Step a square at a time: the arrow pad<br>'
      : 'Left thumb: walk · Right thumb: look<br>') + 'Tap a portrait for its character sheet<br>'
      + (moveMode === 'grid' ? '<span>Keyboard: W S or ↑ ↓ to step, A D to sidestep, Q E or ← → to turn, P for sheets</span>'
        : '<span>Keyboard: W A S D to move, arrows or Q E to turn, drag to look, P for sheets</span>');
  }
  function showSettings() {
    const on = !Q.Sound || Q.Sound.on;
    const current = { move: moveMode, sound: on ? 'on' : 'off', voice: Q.Voice && Q.Voice.enabled ? 'on' : 'off', omens: Q.prefs.omens, broken: Q.prefs.broken };
    const opt = (key, val, label, note) => `<button type="button" data-set="${key}" data-val="${val}" class="${current[key] === val ? 'on' : 'ghost'}">${label}${note ? `<small class="choice-note">${note}</small>` : ''}</button>`;
    modal('Settings', `<div class="settings">
      <div class="opt"><b>Movement</b><div class="choices">
        ${opt('move', 'free', 'Free', 'walk anywhere, look around, like DOOM')}
        ${opt('move', 'grid', 'Steps', 'a square at a time, quarter turns, old school')}
      </div></div>
      <div class="opt"><b>Omens</b><div class="choices">
        ${opt('omens', 'auto', 'Auto', 'offered on the dice after a bad roll')}
        ${opt('omens', 'manual', 'Manual', 'spend from the battle menu before you act')}
      </div></div>
      <div class="opt"><b>Broken</b><div class="choices">
        ${opt('broken', 'exact', 'Exactly 0', 'the book: at 0 HP roll on the Broken table, below 0 you die')}
        ${opt('broken', 'below', '0 or below', 'house rule: even a killing blow rolls on the table')}
      </div></div>
      <div class="opt"><b>Sound</b><div class="choices">${opt('sound', 'on', 'On')}${opt('sound', 'off', 'Off')}</div></div>
      <div class="opt"><b>Narrator</b><div class="choices">
        ${opt('voice', 'on', 'On', Q.Voice && Q.Voice.supported ? 'the DM reads the boxes aloud' : 'this browser can’t play the recordings')}
        ${opt('voice', 'off', 'Off', 'read them yourself')}
      </div></div>
      <small>Settings are kept in this browser.</small></div>`, [{ label: 'Close' }]);
    document.querySelectorAll('[data-set]').forEach((b) => b.addEventListener('click', () => {
      if (b.dataset.set === 'omens') Q.setOmenMode(b.dataset.val);
      else if (b.dataset.set === 'broken') {
        Q.prefs.broken = b.dataset.val === 'below' ? 'below' : 'exact';
        try { localStorage.setItem(BROKEN_KEY, Q.prefs.broken); } catch (e) { /* ignore */ }
      }
      else if (b.dataset.set === 'move') {
        moveMode = b.dataset.val;
        try { localStorage.setItem(MOVE_KEY, moveMode); } catch (e) { /* ignore */ }
        applyMove();
      } else if (b.dataset.set === 'voice') { if (Q.Voice) Q.Voice.set({ enabled: b.dataset.val === 'on' }); }
      else if (Q.Sound && (b.dataset.val === 'on') !== Q.Sound.on) Q.Sound.toggle();
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
    rolled = [Q.rollWretch(keys[0])];
    rolled.push(rollBeside(keys[1], rolled[0]));
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
      Q.fixRows(S.party);
      // they wake at the front one's home
      const front = S.party.find((p) => p.row === 'front') || S.party[0];
      S.home = HOMES[front.cls] ? { cls: front.cls } : null;
      S.flags.heirs = (S.flags.heirs || 0) + 1;
      log(`<b>${esc(S.party[0].name)}</b> and <b>${esc(S.party[1].name)}</b> pick up where the dead left off.`);
      setHour('dawn', undefined, true);
      goHome();
      save();
      const wake = S.home ? HOMES[S.home.cls].wake : 'You wake in Skarnvik, where you have always lived.';
      say('Skarnvik', `${wake}

You have lived in Skarnvik all your short lives. You heard about the two who came up out of the Brine Gaol, and what they found, and how they died. <em>Somebody has to finish it.</em> It might as well be you.`, [{ label: 'Go on' }])
        .then(() => log(goal()));
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
    // a save from before the city had a floor of its own: add it
    const fresh = buildFloors();
    for (const f of fresh) if (!S.floors.some((x) => x.id === f.id)) S.floors.push(f);
    let moved = false;
    const city = fresh.find((f) => f.id === 'skarnvik'), cf = S.floors[cityIx()];
    if (city && cf) {
      moved = cf.grid.length !== city.grid.length || cf.grid[0].length !== city.grid[0].length;
      if (moved) cf.explored = city.explored;
      cf.grid = city.grid;
    }
    // saves from before the watch knew the two who came up out of the Brine
    if (S.escaped && !S.flags.heirs && S.party.every((p) => p.gaol === undefined)) for (const p of S.party) p.gaol = true;
    if (S.where === 'crawl' && S.pose && !(moved && S.floorIx === cityIx())) enterFloor(S.floorIx, null, S.pose);
    else goHome();
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
    $('btnReroll').addEventListener('click', rerollBoth);
    $('btnCustom').addEventListener('click', askOwnBook);
    $('btnCustomSave').addEventListener('click', saveCustom);
    $('btnCustomCancel').addEventListener('click', renderCreate);
    $('facing').addEventListener('click', () => { const f = facingNow; if (f && !busy) run(() => lockedDoor(f.x, f.y)); });
    $('tMap').addEventListener('click', showMap);
    $('tParty').addEventListener('click', partySheet);
    $('chips').addEventListener('click', (e) => { const c = e.target.closest('[data-sheet]'); if (c && !busy) showSheet(+c.dataset.sheet); });
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
  Q.debugHour = (phase, left) => setHour(phase, left, true);
  Q.debugHurt = (i, dmg) => run(() => hurt(S.party[i], dmg, 'a test'));
  Q.debugDie = (cause) => { for (const p of S.party) { p.hp = 0; p.dead = true; } gameOver(cause); };

  if (Q.Dice) Q.Dice.init($('dice'));
  bind();
  applyMove();
  renderTitle();
  Q.loadArt(() => {});
})();
