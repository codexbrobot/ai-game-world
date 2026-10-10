// QUEST — a crawl through the Weeping Vault, in the dying world of Mörk Borg.
// Two wretches roam a torch-lit 3D crypt (js/engine.js). Touch a monster and the fight turns into a
// turn-based battle (js/battle.js). This file holds the run: the party, the town, the floors, saving.
'use strict';

(function () {
  const { d, fmt } = Q;
  const SAVE_KEY = 'quest-borg-save-v2';
  const CELL = 2; // world units per map cell (matches the engine)
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const D = (sides, value, tone, label) => ({ sides, value, tone, label });
  const throwDice = (spec) => (Q.Dice ? Q.Dice.roll(spec) : Promise.resolve());
  const short = (pc) => esc(pc.name.split(' ')[0]);

  let S = null; // the run in progress
  let world = null; // the 3D engine, made the first time you go below
  let modalOpen = false;
  let busy = false; // something is playing out (dice, a battle): the dungeon waits

  // ---------- small helpers ----------
  const floor = () => S.floors[S.floorIx];
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
        const band = Q.GROUPS[ix][t];
        if (!band) return;
        groups.push({ id: `g${ix}-${id++}`, x: (x + 0.5) * CELL, z: (y + 0.5) * CELL, members: band.map((key) => ({ key })), alive: true, alert: false });
        row[x] = '.';
      }));
      return { name: f.name, grid, groups, opened: [], explored: grid.map((row) => row.map(() => false)) };
    });
  }

  function newRun(party) {
    S = {
      party, silver: party.reduce((s, p) => s + p.silver, 0), poultices: 3, scrolls: [], kills: 0, killsSinceBetter: 0,
      floors: buildFloors(), floorIx: 0, pose: null, where: 'town', hasRelic: false, metStranger: false, log: [],
    };
    for (const p of party) { delete p.silver; delete p.poultices; delete p.scrolls; }
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
      return raw ? JSON.parse(raw) : null;
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
    if (screen === 'town') renderTown();
  }

  function renderTitle() {
    $('btnContinue').hidden = !loadSave();
  }

  // ---------- the party ----------
  let rolled = null;
  function renderCreate() {
    $('sheets').innerHTML = rolled.map((pc, i) => `
      <div class="sheet">${sheetHtml(pc, true)}
        <button type="button" class="ghost reroll" data-i="${i}">Roll this one again</button>
      </div>`).join('');
    document.querySelectorAll('.reroll').forEach((b) => b.addEventListener('click', () => {
      rolled[+b.dataset.i] = Q.rollWretch();
      renderCreate();
    }));
  }

  function sheetHtml(pc, fresh) {
    const ab = (label, v) => `<div class="ab"><span>${label}</span><b>${fmt(v)}</b></div>`;
    return `
      <img class="face" src="${Q.portraitUrl(pc.name)}" alt="" onerror="this.remove()">
      <h2 class="pcname">${esc(pc.name)}${pc.dead ? ' <span class="pink">(dead)</span>' : ''}</h2>
      <p class="trait">${esc(pc.trait)}</p>
      <div class="abs">${ab('Strength', pc.strength)}${ab('Agility', pc.agility)}${ab('Presence', pc.presence)}${ab('Toughness', pc.toughness)}</div>
      <dl class="gear">
        <dt>HP</dt><dd>${Math.max(0, pc.hp)} / ${pc.maxHp}${pc.bleeding ? ' <em class="pink">bleeding</em>' : ''}</dd>
        <dt>Omens</dt><dd>${pc.omens}</dd>
        <dt>Weapon</dt><dd>${esc(pc.weapon.name)} (d${pc.weapon.die})</dd>
        <dt>Armor</dt><dd>${esc(pc.armor.name)}${pc.armor.tier ? ` (−d${Q.ARMOR_DIE[pc.armor.tier]})` : ''}</dd>
        <dt>Powers</dt><dd>${pc.powers} use${pc.powers === 1 ? '' : 's'} a day</dd>
        ${fresh ? `<dt>Silver</dt><dd>${pc.silver}s</dd>` : ''}
      </dl>`;
  }

  function partySheet() {
    const extra = `<p class="small">The party carries <b>${S.silver}s</b>, <b>${S.poultices}</b> poultice${S.poultices === 1 ? '' : 's'}${S.scrolls.length ? ` and ${S.scrolls.map((k) => esc(Q.SCROLLS[k].name)).join(', ')}` : ''}. ${S.kills} slain; ${Math.max(0, 5 - S.killsSinceBetter)} more before you can Get Better at the inn.</p>`;
    modal('The party', `<div class="sheets">${S.party.map((pc) => `<div class="sheet">${sheetHtml(pc, false)}</div>`).join('')}</div>${extra}`, [{ label: 'Close' }], { wide: true });
  }

  // ---------- the town ----------
  function renderTown() {
    const c = $('townArt');
    const W = 640, H = 340, dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = W * dpr; c.height = H * dpr;
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawTown(ctx, W, H);
    $('townStatus').innerHTML = S.party.map((pc) => `<b>${esc(pc.name)}</b> ${pc.dead ? '<span class="pink">dead</span>' : `HP ${pc.hp}/${pc.maxHp}`}`).join(' · ') + ` · ${S.silver}s`;
    $('townGoal').textContent = S.hasRelic
      ? 'You carry the Bell-Tongue. The Stranger is waiting.'
      : S.metStranger ? 'Bring the Bell-Tongue up from the Weeping Vault.' : 'A stranger in the square is asking for you.';
  }

  const HIRE = 20;
  function visitInn() {
    const better = S.killsSinceBetter >= 5;
    const dead = S.party.findIndex((p) => p.dead);
    modal('The Drowned Lamb', art('inn') + `
      <p>Damp straw, a bowl of grey gruel, a landlord who will not meet your eye. ${better ? '<br><b class="yellow">You have survived enough horror to change. Sleep and you will Get Better.</b>' : ''}</p>
      <p class="small">A night's sleep restores Omens and Powers. You have ${S.silver}s.</p>`, [
      { label: 'Beds for the party (10s): all HP back', disabled: S.silver < 10, action: () => { S.silver -= 10; sleep(true); } },
      { label: 'The gutter (free): d4 HP each', action: () => sleep(false) },
      ...(dead >= 0 ? [{ label: `Hire a wretch from the taproom (${HIRE}s)`, disabled: S.silver < HIRE, action: () => hire(dead) }] : []),
      { label: 'Leave', ghost: true },
    ]);
  }

  function hire(slot) {
    S.silver -= HIRE;
    const pc = Q.rollWretch();
    delete pc.silver; delete pc.poultices; delete pc.scrolls;
    const lost = S.party[slot];
    S.party[slot] = pc;
    save();
    renderTown();
    modal('A new wretch', `<p>${esc(lost.name)} is gone. For ${HIRE}s, this one will take their place.</p><div class="sheet">${sheetHtml(pc, false)}</div>`, [{ label: 'Welcome aboard' }]);
  }

  function art(name, cutout) {
    return `<img class="modal-art${cutout ? ' cutout' : ''}" src="${Q.assetUrl(name)}" alt="" onerror="this.remove()">`;
  }

  function sleep(bed) {
    const lines = [];
    for (const pc of alive()) {
      if (bed) pc.hp = pc.maxHp;
      else pc.hp = Math.min(pc.maxHp, pc.hp + d(4));
      pc.bleeding = false;
      pc.omens = d(2);
      pc.powers = Math.max(0, pc.presence + d(4));
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
    save();
    renderTown();
    modal(bed ? 'Morning' : 'Morning, in the gutter', lines.map((l) => `<p>${l}</p>`).join(''), [{ label: 'Get up' }]);
  }

  function visitShop() {
    const rows = Q.SHOP.map((item, i) => {
      const can = S.silver >= item.price;
      return `<button class="shoprow" data-i="${i}" ${can ? '' : 'disabled'}>
        <span><b>${esc(item.name)}</b><small>${esc(item.note)}</small></span><span class="price">${item.price}s</span></button>`;
    }).join('');
    modal('Thrumm’s Stall', `${art('stall')}<p>Thrumm sells what the dead no longer need. You have <b>${S.silver}s</b>.</p><div class="shop">${rows}</div>`, [{ label: 'Leave', ghost: true }]);
    document.querySelectorAll('.shoprow').forEach((b) => b.addEventListener('click', () => buy(Q.SHOP[+b.dataset.i])));
  }

  function buy(item) {
    if (item.kind === 'poultice') {
      S.silver -= item.price;
      S.poultices += 1;
      save(); renderTown(); visitShop();
      return;
    }
    // weapons and armor go to one wretch: ask who
    const better = (pc) => (item.kind === 'weapon' ? item.item.die > pc.weapon.die : item.item.tier > pc.armor.tier);
    modal(item.name, `<p>Who takes the ${esc(item.name)}? (${item.price}s)</p>`, [
      ...S.party.map((pc) => ({
        label: `${pc.name}: now ${item.kind === 'weapon' ? `${pc.weapon.name} d${pc.weapon.die}` : pc.armor.name}`,
        disabled: pc.dead || !better(pc),
        action: () => {
          S.silver -= item.price;
          if (item.kind === 'weapon') pc.weapon = { name: item.item.name, die: item.item.die };
          else pc.armor = { name: item.item.name, tier: item.item.tier };
          save(); renderTown(); visitShop();
        },
      })),
      { label: 'Back', ghost: true, action: visitShop },
    ]);
  }

  function visitStranger() {
    if (S.hasRelic) {
      S.won = true;
      S.over = true;
      clearSave();
      const names = alive().map((p) => esc(p.name)).join(' and ');
      modal('The Bell-Tongue', `${art('stranger')}
        <p>The Stranger takes the clapper in both hands and laughs, a dry sound like pages tearing.</p>
        <p>“Three hundred silver, as promised. And seats on the last cart.”</p>
        <p>As the cart rolls out of Skarnvik you hear it: one note, rung on no bell at all. Above you the comet turns, slowly, toward the sound.</p>
        <p class="yellow"><b>${names} survived the Weeping Vault.</b> ${S.kills} foes slain.</p>`, [
        { label: 'Roll new wretches', action: () => startCreate() },
      ], { closable: false });
      return;
    }
    S.metStranger = true;
    save();
    renderTown();
    modal('The Stranger', `${art('stranger')}
      <p>A stranger with a sewn-shut eye takes your wrists in a cold grip, one each.</p>
      <p>“Under the hill lies the Weeping Vault. At its bottom the Pale Abbess still wears the <b>Bell-Tongue</b>, the clapper of the last bell of Skarnvik. Bring it to me.”</p>
      <p>“Three hundred silver, and seats on the last cart out before the gates are chained.”</p>
      <p class="small">The crypt stair is at the edge of the square. Rest at the Drowned Lamb, buy what you can at Thrumm’s, and hire a new wretch there if one of you falls.</p>`, [{ label: 'Nod' }]);
  }

  function enterCrypt() {
    if (!alive().length) return;
    enterFloor(0, 'G');
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
      },
      onContact: (g) => run(() => battle(g)),
      onFall: () => run(fall),
      explored: () => (S && S.where === 'crawl' ? floor().explored : null),
      onTick: drawMini,
    });
    return world;
  }

  // Go below: onto floor ix, standing on the first `arriveOn` tile, or at a saved pose.
  function enterFloor(ix, arriveOn, pose) {
    S.floorIx = ix;
    show('crawl');
    const w = ensureWorld();
    const f = Q.FLOORS[ix];
    const grid = floor().grid;
    w.load({ grid, heights: f.heights, ceil: f.ceil, groups: floor().groups.filter((g) => g.alive), opened: floor().opened });
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
    if (t === 'p') {
      g[y][x] = '.';
      const pc = alive()[Math.floor(Math.random() * alive().length)];
      const r = Q.test(pc.agility, Q.DR);
      await throwDice({ dice: [D(20, r.r, 'yellow', 'Agility')], verdict: r.ok ? `${short(pc)} leaps clear` : 'The floor gives way!', tone: r.ok ? 'good' : 'bad', text: `A hidden pit under ${short(pc)} · ${Q.testText('Agility', r, pc.agility)}` });
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
    } else if (t === 'G') {
      ask('The stair up', art('stair') + '<p>Grey daylight leaks down the steps. Skarnvik is above.</p>', 'Climb out', () => { show('town'); save(); });
    } else if (t === '>') {
      const next = S.floors[S.floorIx + 1];
      ask('Steps down', `<p>The stair descends into a cold that smells of candle wax and old water. <b>${esc(next.name)}</b>.</p>`, 'Descend', () => { enterFloor(S.floorIx + 1, '<'); log(`You descend into <b>${esc(floor().name)}</b>.`); });
    } else if (t === '<') {
      ask('Steps up', `<p>Back up to <b>${esc(S.floors[S.floorIx - 1].name)}</b>?</p>`, 'Climb', () => { enterFloor(S.floorIx - 1, '>'); log(`You climb back to <b>${esc(floor().name)}</b>.`); });
    } else if (t === 'F') {
      ask('A black font', '<p>A font of black stone, brimming with pink water that does not ripple.</p>', 'Drink', () => run(() => drinkFont(x, y)));
    } else if (t === 'R') {
      S.hasRelic = true;
      g[y][x] = '.';
      world.refreshTile(x, y);
      log('You take the <b class="yellow">Bell-Tongue</b>. It is warm, and it hums.', 'hit');
      modal('The Bell-Tongue', art('relic', true) + '<p>The clapper of the last bell, black iron as long as your forearm. It is warm. It hums against your ribs.</p><p>Take it up to the Stranger in Skarnvik.</p>', [{ label: 'Go' }]);
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
      return;
    }
    const res = Q.searchRemains(S.floorIx + 1);
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

  async function drinkFont(x, y) {
    floor().grid[y][x] = 'f';
    world.refreshTile(x, y);
    const pc = alive()[0];
    const r = d(6);
    const verdict = ['', 'It burns!', 'Iron', 'Iron', 'Warmth', 'Warmth', 'An Omen'][r];
    await throwDice({ dice: [D(6, r, 'bone', 'Font')], verdict, tone: r === 1 ? 'bad' : r <= 3 ? 'neutral' : 'good', text: `${short(pc)} drinks · 1 burns · 2–3 nothing · 4–5 heal d6 · 6 an Omen` });
    if (r === 1) {
      log('It burns like lye.', 'hurt');
      await hurt(pc, d(4), 'the font');
    } else if (r <= 3) log('It tastes of iron and nothing happens. The font runs dry.');
    else if (r <= 5) {
      const h = d(6);
      await throwDice({ dice: [D(6, h, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `Warmth spreads through ${short(pc)}` });
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      pc.bleeding = false;
      log(`Warmth spreads through ${short(pc)}. <b>+${h} HP</b>.`, 'hit');
    } else { pc.omens += 1; log(`${short(pc)} sees their own death, and it is not today. <b>+1 Omen</b>.`, 'hit'); }
    renderHud();
  }

  // Into the chasm: everyone takes the fall, then climbs back out.
  async function fall() {
    log('The edge crumbles. You fall into the dark.', 'hurt');
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
    await Q.hurtWretch(pc, dmg, cause, { log, onHurt: flashHurt, onChange: renderHud });
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
    await new Promise((r) => setTimeout(r, 420 * (Q.speed === undefined ? 1 : Q.speed)));
    v.classList.remove('shatter');
    const result = await Q.Battle.run({
      party: S.party, foes: g.members, inv: S, log,
      onChange: renderHud, onHurt: flashHurt,
    });
    if (result.outcome === 'won') {
      g.alive = false;
      S.silver += result.silver;
      S.kills += result.slain;
      S.killsSinceBetter += result.slain;
      if (g.members.some((m) => Q.MONSTERS[m.key].boss)) log('Beyond the Abbess, on a bone altar, something hums.', 'hit');
    } else if (result.outcome === 'fled') {
      g.stunUntil = performance.now() + 4500;
      world.stepBack(g);
    }
    for (const pc of S.party) pc.dazed = false;
    renderHud();
    drawMini();
    if (result.outcome === 'lost' || !alive().length) gameOver(S.party.map((p) => p.cause).find(Boolean) || 'the Vault');
  }

  function gameOver(cause) {
    if (S.over) return;
    S.over = true;
    clearSave();
    if (world) world.pause();
    const pcs = S.party.map((pc) => `<p class="epitaph">Here lies <b>${esc(pc.name)}</b>.<br>${esc(pc.trait)}</p>`).join('');
    modal('Dead', `${art('grave')}${pcs}
      <p>Killed by ${esc(cause)} in ${esc(floor().name)}, with ${S.kills} foe${S.kills === 1 ? '' : 's'} slain and ${S.silver}s in a purse someone else will empty.</p>
      <p class="small">The Weeping Vault keeps what it takes. New wretches are already on the way.</p>`, [
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
    }).join('') + `<div class="purse">${S.silver}s</div>`;
    $('hudPlace').textContent = S.where === 'crawl' ? floor().name : '';
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
    const groups = floor().groups.filter((g) => g.alive).map((g) => ({ hp: 1, seen: true, ...world.monsterPos(g) }));
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
    if (first) first.focus();
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
      const h = d(6);
      await throwDice({ dice: [D(6, h, 'bone', 'Heal')], verdict: `+${h} HP`, tone: 'good', text: `${short(pc)}’s wounds bound · black poultice d6` });
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      pc.bleeding = false;
      log(`${short(pc)} is bound with a black poultice. <b>+${h} HP</b>.`, 'hit');
    });
    if (hurtOnes.length === 1) return bind(hurtOnes[0]);
    modal('Black poultice', `<p>Bind whose wounds? ${S.poultices} left.</p>`, [
      ...hurtOnes.map((pc) => ({ label: `${pc.name} (${pc.hp}/${pc.maxHp})`, action: () => bind(pc) })),
      { label: 'Not now', ghost: true },
    ]);
  }

  // ---------- flow ----------
  function startCreate() {
    S = null;
    if (world) world.pause();
    rolled = [Q.rollWretch(), Q.rollWretch()];
    renderCreate();
    show('create');
  }

  function acceptParty() {
    newRun(rolled);
    log(`<b>${esc(S.party[0].name)}</b> and <b>${esc(S.party[1].name)}</b> crawl into Skarnvik under the comet.`);
    show('town');
    save();
    visitStranger();
  }

  function continueRun() {
    const saved = loadSave();
    if (!saved) return;
    S = saved;
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

  if (Q.Dice) Q.Dice.init($('dice'));
  bind();
  renderTitle();
  Q.loadArt(() => { if (S && S.where === 'town') renderTown(); });
})();
