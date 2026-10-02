// QUEST — a first-person crawl through the Weeping Vault, in the dying world of Mörk Borg.
// State, input, the town, the crawl and turn-by-turn combat.
'use strict';

(function () {
  const { d, fmt, DIRS } = Q;
  const SAVE_KEY = 'quest-borg-save-v1';
  const $ = (id) => document.getElementById(id);

  let S = null; // the run in progress
  const fx = { flashUntil: 0, flashColor: 'pink', shakeUntil: 0, hitId: null, hitUntil: 0, lungeId: null, lungeUntil: 0 };
  let modalOpen = false;

  // ---------- small helpers ----------
  const floor = () => S.floors[S.floorIx];
  const tileAt = (x, y) => (floor().grid[y] && floor().grid[y][x]) || '#';
  const blocks = (t) => t === '#' || t === 'D';
  const monsterAt = (x, y) => floor().monsters.find((m) => m.hp > 0 && m.x === x && m.y === y);
  const def = (m) => Q.MONSTERS[m.key];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  // 'the skeleton', or just 'The Pale Abbess' when the name already has its article.
  const the = (m, cap) => (/^The /.test(m.name) ? esc(m.name) : `${cap ? 'The' : 'the'} ${esc(m.name)}`);
  // Verb agreement: 'the rats hit', 'the skeleton hits'.
  const verb = (m, one, many) => (def(m).plural ? many : one);
  const roll20 = (t, ability) => `d20 ${t.r}${ability ? fmt(ability) : ''}=${t.total} vs DR ${t.dr}`;

  function log(html, cls = '') {
    S.log.push({ html, cls });
    if (S.log.length > 40) S.log.shift();
    renderLog();
  }

  // ---------- starting a run ----------
  function buildFloors() {
    let id = 0;
    return Q.FLOORS.map((f, ix) => {
      const grid = f.rows.map((row) => row.split(''));
      const monsters = [];
      grid.forEach((row, y) => row.forEach((t, x) => {
        if (Q.MONSTERS[t]) {
          const m = Q.MONSTERS[t];
          const hp = m.hp();
          monsters.push({ id: 'm' + ix + '-' + id++, key: t, kind: m.kind, name: m.name, hp, maxHp: hp, x, y, alert: false, seen: false, stun: 0, moraleChecked: false });
          row[x] = '.';
        }
      }));
      const explored = grid.map((row) => row.map(() => false));
      return { name: f.name, grid, monsters, explored };
    });
  }

  function newRun(pc) {
    S = {
      pc, floors: buildFloors(), floorIx: 0, x: 0, y: 0, dir: 0,
      where: 'town', combat: null, hasRelic: false, metStranger: false, won: false, turn: 0, log: [],
    };
  }

  // ---------- saving ----------
  function save() {
    if (!S || S.dead) return;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { /* storage may be unavailable */ }
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
    if (screen === 'town') renderTown();
    if (screen === 'crawl') { resize(); draw(); }
  }

  function renderTitle() {
    $('btnContinue').hidden = !loadSave();
  }

  let rolled = null;
  function renderCreate() {
    const pc = rolled;
    $('sheet').innerHTML = sheetHtml(pc, true);
  }

  function sheetHtml(pc, fresh) {
    const ab = (label, v) => `<div class="ab"><span>${label}</span><b>${fmt(v)}</b></div>`;
    const scrolls = pc.scrolls.length ? pc.scrolls.map((k) => esc(Q.SCROLLS[k].name)).join(', ') : 'none';
    return `
      <img class="face" src="${Q.portraitUrl(pc.name)}" alt="" onerror="this.remove()">
      <h2 class="pcname">${esc(pc.name)}</h2>
      <p class="trait">${esc(pc.trait)}</p>
      <div class="abs">${ab('Strength', pc.strength)}${ab('Agility', pc.agility)}${ab('Presence', pc.presence)}${ab('Toughness', pc.toughness)}</div>
      <dl class="gear">
        <dt>HP</dt><dd>${pc.hp} / ${pc.maxHp}${pc.bleeding ? ' <em class="pink">bleeding</em>' : ''}</dd>
        <dt>Omens</dt><dd>${pc.omens}</dd>
        <dt>Weapon</dt><dd>${esc(pc.weapon.name)} (d${pc.weapon.die})</dd>
        <dt>Armor</dt><dd>${esc(pc.armor.name)}${pc.armor.tier ? ` (−d${Q.ARMOR_DIE[pc.armor.tier]})` : ''}</dd>
        <dt>Silver</dt><dd>${pc.silver}s</dd>
        <dt>Poultices</dt><dd>${pc.poultices}</dd>
        <dt>Scrolls</dt><dd>${scrolls}</dd>
        <dt>Powers</dt><dd>${pc.powers} use${pc.powers === 1 ? '' : 's'} a day</dd>
        ${fresh ? '' : `<dt>Slain</dt><dd>${pc.kills}</dd>`}
      </dl>`;
  }

  // ---------- the town ----------
  function renderTown() {
    const c = $('townArt');
    const W = 640, H = 340, dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = W * dpr; c.height = H * dpr;
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawTown(ctx, W, H);
    const pc = S.pc;
    $('townStatus').innerHTML = `<b>${esc(pc.name)}</b> · HP ${pc.hp}/${pc.maxHp} · ${pc.silver}s · Omens ${pc.omens}`;
    $('townGoal').textContent = S.hasRelic
      ? 'You carry the Bell-Tongue. The Stranger is waiting.'
      : S.metStranger ? 'Bring the Bell-Tongue up from the Weeping Vault.' : 'A stranger in the square is asking for you.';
  }

  function visitInn() {
    const pc = S.pc;
    const better = pc.killsSinceBetter >= 5;
    modal('The Drowned Lamb', art('inn') + `
      <p>Damp straw, a bowl of grey gruel, a landlord who will not meet your eye. ${better ? '<br><b class="yellow">You have survived enough horror to change. Sleep and you will Get Better.</b>' : ''}</p>
      <p class="small">A night's sleep restores your Omens and your Powers.</p>`, [
      { label: 'A bed (10s): all HP back', disabled: pc.silver < 10, action: () => { pc.silver -= 10; sleep(true); } },
      { label: 'The gutter (free): d4 HP', action: () => sleep(false) },
      { label: 'Leave', ghost: true },
    ]);
  }

  // A painted picture at the top of a dialog; it disappears quietly if the file is missing.
  function art(name, cutout) {
    return `<img class="modal-art${cutout ? ' cutout' : ''}" src="${Q.assetUrl(name)}" alt="" onerror="this.remove()">`;
  }

  function sleep(bed) {
    const pc = S.pc;
    const lines = [];
    if (bed) {
      pc.hp = pc.maxHp;
      lines.push('You sleep like the dead. All HP restored.');
    } else {
      const h = d(4);
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      lines.push(`Cold stones and colder dreams. +${h} HP.`);
      if (d(6) === 1 && pc.silver > 0) {
        const lost = Math.ceil(pc.silver / 2);
        pc.silver -= lost;
        lines.push(`<span class="pink">You wake with a lighter purse. ${lost}s gone.</span>`);
      }
    }
    pc.bleeding = false;
    pc.omens = d(2);
    pc.powers = Math.max(0, pc.presence + d(4));
    lines.push(`Omens: ${pc.omens}. Powers: ${pc.powers}.`);
    if (pc.killsSinceBetter >= 5) {
      pc.killsSinceBetter = 0;
      lines.push('<b class="yellow">Getting Better</b>', ...Q.gettingBetter(pc));
    }
    save();
    renderTown();
    modal(bed ? 'Morning' : 'Morning, in the gutter', lines.map((l) => `<p>${l}</p>`).join(''), [{ label: 'Get up' }]);
  }

  function visitShop() {
    const pc = S.pc;
    const rows = Q.SHOP.map((item, i) => {
      let owned = false;
      if (item.kind === 'weapon') owned = pc.weapon.die >= item.item.die;
      if (item.kind === 'armor') owned = pc.armor.tier >= item.item.tier;
      const can = pc.silver >= item.price && !owned;
      return `<button class="shoprow" data-i="${i}" ${can ? '' : 'disabled'}>
        <span><b>${esc(item.name)}</b><small>${esc(item.note)}${owned ? ' · yours is as good' : ''}</small></span><span class="price">${item.price}s</span></button>`;
    }).join('');
    modal('Thrumm’s Stall', `${art('stall')}<p>Thrumm sells what the dead no longer need. You have <b>${pc.silver}s</b>.</p><div class="shop">${rows}</div>`, [{ label: 'Leave', ghost: true }]);
    document.querySelectorAll('.shoprow').forEach((b) => b.addEventListener('click', () => {
      const item = Q.SHOP[+b.dataset.i];
      pc.silver -= item.price;
      if (item.kind === 'poultice') pc.poultices += 1;
      if (item.kind === 'weapon') pc.weapon = { name: item.item.name, die: item.item.die };
      if (item.kind === 'armor') pc.armor = { name: item.item.name, tier: item.item.tier };
      save();
      renderTown();
      visitShop();
    }));
  }

  function visitStranger() {
    if (S.hasRelic) {
      S.won = true;
      clearSave();
      modal('The Bell-Tongue', `${art('stranger')}
        <p>The Stranger takes the clapper in both hands and laughs, a dry sound like pages tearing.</p>
        <p>“Three hundred silver, as promised. And a seat on the last cart.”</p>
        <p>As the cart rolls out of Skarnvik you hear it: one note, rung on no bell at all. Above you the comet turns, slowly, toward the sound.</p>
        <p class="yellow"><b>${esc(S.pc.name)} survived the Weeping Vault.</b> ${S.pc.kills} foes slain.</p>`, [
        { label: 'Roll a new wretch', action: () => startCreate() },
      ], { closable: false });
      return;
    }
    S.metStranger = true;
    save();
    renderTown();
    modal('The Stranger', `${art('stranger')}
      <p>A stranger with a sewn-shut eye takes your wrist in a cold grip.</p>
      <p>“Under the hill lies the Weeping Vault. At its bottom the Pale Abbess still wears the <b>Bell-Tongue</b>, the clapper of the last bell of Skarnvik. Bring it to me.”</p>
      <p>“Three hundred silver, and a seat on the last cart out before the gates are chained.”</p>
      <p class="small">The crypt stair is at the edge of the square. Rest at the Drowned Lamb, buy what you can at Thrumm’s.</p>`, [{ label: 'Nod' }]);
  }

  function enterCrypt() {
    enterFloor(0, 'G');
    log(`You climb down into <b>${esc(floor().name)}</b>.`);
    if (!S.metStranger) log('You have no reason to be here yet, but here you are.', 'dim');
  }

  // ---------- the crawl ----------
  function enterFloor(ix, arriveOn) {
    S.floorIx = ix;
    S.combat = null;
    const g = floor().grid;
    g.forEach((row, y) => row.forEach((t, x) => { if (t === arriveOn) { S.x = x; S.y = y; } }));
    // face the first open way out
    for (let k = 0; k < 4; k++) {
      const [dx, dy] = DIRS[k];
      if (!blocks(tileAt(S.x + dx, S.y + dy))) { S.dir = k; break; }
    }
    show('crawl');
    updateExplored();
    renderHud();
    draw();
    save();
  }

  function act(action) {
    if (!S || S.where !== 'crawl' || modalOpen || S.dead) return;
    if (S.combat) return;
    if (action === 'turnL') { S.dir = (S.dir + 3) % 4; afterLook(); return; }
    if (action === 'turnR') { S.dir = (S.dir + 1) % 4; afterLook(); return; }
    const md = { fwd: S.dir, back: (S.dir + 2) % 4, strafeL: (S.dir + 3) % 4, strafeR: (S.dir + 1) % 4 }[action];
    if (md === undefined) return;
    step(md);
  }

  function afterLook() {
    updateExplored();
    draw();
    renderHud();
  }

  function step(md) {
    const [dx, dy] = DIRS[md];
    const nx = S.x + dx, ny = S.y + dy;
    const t = tileAt(nx, ny);
    if (t === '#') {
      fx.shakeUntil = performance.now() + 120;
      animate();
      return;
    }
    if (t === 'D') {
      floor().grid[ny][nx] = '.';
      log('The door groans open.');
      endTurn();
      return;
    }
    const m = monsterAt(nx, ny);
    if (m) {
      S.dir = md;
      startCombat();
      return;
    }
    S.x = nx; S.y = ny;
    stepOn(t);
    if (S.dead) return;
    endTurn();
    if (!S.combat && !S.dead) arriveAt(tileAt(S.x, S.y));
  }

  // Things that happen the moment you set foot on a tile.
  function stepOn(t) {
    const g = floor().grid;
    if (t === 'p') {
      g[S.y][S.x] = '.';
      const r = Q.test(S.pc.agility, Q.DR);
      if (r.ok) log(`The flagstone tilts. You leap clear. <span class="dim">(Agility ${roll20(r, S.pc.agility)})</span>`);
      else {
        const dmg = d(6);
        log(`The floor gives way into a spiked pit! <span class="dim">(Agility ${roll20(r, S.pc.agility)})</span>`, 'hurt');
        hurt(dmg, 'the pit');
      }
    } else if (t === 'L' || t === 'S') {
      g[S.y][S.x] = '.';
      searchRemains(t === 'S');
    }
  }

  function searchRemains(scroll) {
    const pc = S.pc;
    if (scroll) {
      const key = S.floorIx === 0 ? 'flame' : 'mend';
      if (!pc.scrolls.includes(key)) pc.scrolls.push(key);
      const sc = Q.SCROLLS[key];
      log(`Under the bones, a scroll: <b class="yellow">${esc(sc.name)}</b>. ${esc(sc.text)}`, 'hit');
      return;
    }
    const res = Q.searchRemains(S.floorIx + 1);
    if (res.kind === 'silver') { pc.silver += res.amount; log(`You pick the remains clean: <b>${res.amount}s</b>.`, 'hit'); }
    if (res.kind === 'poultice') { pc.poultices += 1; log('A black poultice, still sticky. <b>+1 poultice</b>.', 'hit'); }
    if (res.kind === 'omen') { pc.omens += 1; log('A black feather twitches in the dust. <b>+1 Omen</b>.', 'hit'); }
    if (res.kind === 'weapon') {
      if (res.item.die > pc.weapon.die) { pc.weapon = res.item; log(`A <b>${esc(res.item.name)}</b> (d${res.item.die}). You take it.`, 'hit'); }
      else log(`A ${esc(res.item.name)}, no better than yours.`);
    }
    if (res.kind === 'armor') {
      if (res.item.tier > pc.armor.tier) { pc.armor = res.item; log(`<b>${esc(res.item.name)}</b>, cut from a corpse. You put it on.`, 'hit'); }
      else log(`${esc(res.item.name)}, too ruined to wear.`);
    }
    if (res.kind === 'hand') {
      log('A cold hand closes around your wrist!', 'hurt');
      hurt(res.dmg, 'a grasping hand');
    }
  }

  // Places that ask before doing anything.
  function arriveAt(t) {
    if (t === 'G') {
      modal('The stair up', art('stair') + '<p>Grey daylight leaks down the steps. Skarnvik is above.</p>', [
        { label: 'Climb out', action: () => { show('town'); save(); } },
        { label: 'Stay below', ghost: true },
      ]);
    } else if (t === '>') {
      const next = S.floors[S.floorIx + 1];
      modal('Steps down', `<p>The stair descends into a cold that smells of candle wax and old water. <b>${esc(next.name)}</b>.</p>`, [
        { label: 'Descend', action: () => { enterFloor(S.floorIx + 1, '<'); log(`You descend into <b>${esc(floor().name)}</b>.`); } },
        { label: 'Not yet', ghost: true },
      ]);
    } else if (t === '<') {
      modal('Steps up', `<p>Back up to <b>${esc(S.floors[S.floorIx - 1].name)}</b>?</p>`, [
        { label: 'Climb', action: () => { enterFloor(S.floorIx - 1, '>'); log(`You climb back to <b>${esc(floor().name)}</b>.`); } },
        { label: 'Stay', ghost: true },
      ]);
    } else if (t === 'F') {
      modal('A black font', '<p>A font of black stone, brimming with pink water that does not ripple.</p>', [
        { label: 'Drink', action: drinkFont },
        { label: 'Leave it', ghost: true },
      ]);
    } else if (t === 'R') {
      S.hasRelic = true;
      floor().grid[S.y][S.x] = '.';
      log('You take the <b class="yellow">Bell-Tongue</b>. It is warm, and it hums.', 'hit');
      draw();
      save();
      modal('The Bell-Tongue', art('relic', true) + '<p>The clapper of the last bell, black iron as long as your forearm. It is warm. It hums against your ribs.</p><p>Take it up to the Stranger in Skarnvik.</p>', [{ label: 'Go' }]);
    }
  }

  function drinkFont() {
    const pc = S.pc;
    floor().grid[S.y][S.x] = 'f';
    const r = d(6);
    if (r === 1) { log('It burns like lye.', 'hurt'); hurt(d(4), 'the font'); }
    else if (r <= 3) log('It tastes of iron and nothing happens. The font runs dry.');
    else if (r <= 5) { const h = d(6); pc.hp = Math.min(pc.maxHp, pc.hp + h); pc.bleeding = false; log(`Warmth spreads through you. <b>+${h} HP</b>.`, 'hit'); }
    else { pc.omens += 1; log('You see your own death, and it is not today. <b>+1 Omen</b>.', 'hit'); }
    renderHud();
    draw();
    save();
  }

  function endTurn() {
    S.turn += 1;
    const pc = S.pc;
    if (pc.bleeding && S.turn % 6 === 0) {
      log('You are bleeding.', 'hurt');
      hurt(1, 'blood loss');
      if (S.dead) return;
    }
    monstersAct();
    updateExplored();
    renderHud();
    draw();
    if (!S.combat && adjacentFoes().length) startCombat();
    save();
  }

  // ---------- monsters out of combat ----------
  function los(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy, x = x0, y = y0;
    while (!(x === x1 && y === y1)) {
      if (!(x === x0 && y === y0) && blocks(tileAt(x, y))) return false;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x += sx; }
      if (e2 <= dx) { err += dx; y += sy; }
    }
    return true;
  }

  function adjacent(m) { return Math.abs(m.x - S.x) + Math.abs(m.y - S.y) === 1; }
  function adjacentFoes() { return floor().monsters.filter((m) => m.hp > 0 && adjacent(m)); }

  // Search outward from the wretch; the monster's next step is the cell it was reached from.
  function pathStep(m) {
    const key = (x, y) => x + ',' + y;
    const seen = new Set([key(S.x, S.y)]);
    const queue = [[S.x, S.y]];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of DIRS) {
        const nx = x + dx, ny = y + dy, k = key(nx, ny);
        if (nx === m.x && ny === m.y) return x === S.x && y === S.y ? null : [x, y];
        if (seen.has(k) || blocks(tileAt(nx, ny)) || monsterAt(nx, ny)) continue;
        if (seen.size > 300) return null;
        seen.add(k);
        queue.push([nx, ny]);
      }
    }
    return null;
  }

  function monstersAct() {
    for (const m of floor().monsters) {
      if (m.hp <= 0) continue;
      if (m.stun > 0) { m.stun -= 1; continue; }
      if (adjacent(m)) continue;
      const dm = def(m);
      const dist = Math.abs(m.x - S.x) + Math.abs(m.y - S.y);
      if (dist <= dm.sight && los(m.x, m.y, S.x, S.y)) {
        if (!m.alert && m.seen) log(`${the(m, true)} ${verb(m, 'comes', 'come')} for you.`, 'dim');
        m.alert = true;
      } else if (dist > dm.sight * 2) m.alert = false;
      if (m.alert) {
        if (dm.slow && S.turn % 2) continue;
        const next = pathStep(m);
        if (next) { m.x = next[0]; m.y = next[1]; }
      } else if (!dm.boss && d(4) === 1) {
        const [dx, dy] = DIRS[d(4) - 1];
        const nx = m.x + dx, ny = m.y + dy;
        if (!blocks(tileAt(nx, ny)) && !monsterAt(nx, ny) && !(nx === S.x && ny === S.y) && !'G<>R'.includes(tileAt(nx, ny))) { m.x = nx; m.y = ny; }
      }
    }
  }

  // Mark what the wretch can see: the cone ahead, and the cells around them.
  function updateExplored() {
    const ex = floor().explored;
    const mark = (x, y) => { if (ex[y] && x >= 0 && x < ex[y].length) ex[y][x] = true; };
    for (const [dx, dy] of [[0, 0], ...DIRS]) mark(S.x + dx, S.y + dy);
    const [fx0, fy0] = DIRS[S.dir], rt = DIRS[(S.dir + 1) % 4];
    for (let lz = 1; lz <= 6; lz++) {
      for (let lx = -lz - 1; lx <= lz + 1; lx++) {
        const x = S.x + fx0 * lz + rt[0] * lx, y = S.y + fy0 * lz + rt[1] * lx;
        if (tileAt(x, y) !== '#' && los(S.x, S.y, x, y)) mark(x, y);
      }
    }
    for (const m of floor().monsters) {
      if (m.hp > 0 && ex[m.y][m.x] && los(S.x, S.y, m.x, m.y)) m.seen = true;
    }
  }

  // ---------- combat ----------
  function frontFoe() {
    const [dx, dy] = DIRS[S.dir];
    return monsterAt(S.x + dx, S.y + dy);
  }

  function faceFoe() {
    if (frontFoe()) return frontFoe();
    const foes = adjacentFoes();
    if (!foes.length) return null;
    const m = foes[0];
    S.dir = DIRS.findIndex(([dx, dy]) => S.x + dx === m.x && S.y + dy === m.y);
    return m;
  }

  function startCombat() {
    const m = faceFoe();
    if (!m) return;
    S.combat = { dazed: false };
    for (const f of adjacentFoes()) { f.alert = true; f.seen = true; }
    log(`<b class="yellow">${esc(m.name)}!</b> <span class="dim">${esc(def(m).desc)}</span>`);
    const init = d(6);
    if (init <= 3) {
      log(`They strike first. <span class="dim">(initiative d6 ${init})</span>`, 'dim');
      foesAttack();
    } else log(`You are quicker. <span class="dim">(initiative d6 ${init})</span>`, 'dim');
    renderHud();
    draw();
  }

  function combatAction(kind) {
    if (!S.combat || modalOpen || S.dead) return;
    const pc = S.pc;
    if (kind === 'omen') return omenMenu();
    if (kind === 'scroll') return scrollMenu();
    if (S.combat.dazed) {
      S.combat.dazed = false;
      log('You stand frozen, and the moment passes.', 'dim');
      return foesTurn();
    }
    const m = faceFoe();
    if (!m) return afterRound();
    if (kind === 'attack') {
      const res = Q.attack(pc, def(m));
      const roll = `<span class="dim">(Strength ${roll20(res, pc.strength)})</span>`;
      if (res.kind === 'fumble') {
        log(`Your ${esc(pc.weapon.name)} goes wide and you stumble. ${roll}`, 'miss');
        foeStrike(m, true);
        if (S.dead) return;
      } else if (res.kind === 'miss') {
        log(`You miss ${the(m)}. ${roll}`, 'miss');
      } else {
        const note = [res.kind === 'crit' ? 'CRITICAL' : '', res.maxed ? 'Omen: maximum damage' : '', res.absorbed ? `armor soaks ${res.absorbed}` : ''].filter(Boolean).join(', ');
        log(`You hit ${the(m)} for <b>${res.dmg}</b>${note ? ` (${note})` : ''}. ${roll}`, res.kind === 'crit' ? 'crit' : 'hit');
        damageFoe(m, res.dmg);
      }
    } else if (kind === 'poultice') {
      if (pc.poultices <= 0) return;
      pc.poultices -= 1;
      const h = d(6);
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      pc.bleeding = false;
      log(`You slap on a black poultice. <b>+${h} HP</b>.`, 'hit');
    } else if (kind === 'flee') {
      const r = Q.test(pc.agility, Q.DR);
      const away = fleeCell(m);
      if (r.ok && away) {
        log(`You break away! <span class="dim">(Agility ${roll20(r, pc.agility)})</span>`);
        for (const f of adjacentFoes()) f.stun = 2;
        S.x = away[0]; S.y = away[1];
        S.combat = null;
        updateExplored();
        renderHud();
        draw();
        save();
        return;
      }
      log(away ? `You cannot get away. <span class="dim">(Agility ${roll20(r, pc.agility)})</span>` : 'There is nowhere to run.', 'miss');
    }
    foesTurn();
  }

  function fleeCell(m) {
    const options = [(S.dir + 2) % 4, (S.dir + 1) % 4, (S.dir + 3) % 4].map((k) => [S.x + DIRS[k][0], S.y + DIRS[k][1]]);
    return options.find(([x, y]) => !blocks(tileAt(x, y)) && !monsterAt(x, y) && Math.abs(x - m.x) + Math.abs(y - m.y) > 1) || null;
  }

  function damageFoe(m, dmg) {
    m.hp -= dmg;
    fx.hitId = m.id; fx.hitUntil = performance.now() + 380;
    animate();
    if (m.hp <= 0) return slay(m);
    if (!m.moraleChecked && m.hp <= m.maxHp / 2 && def(m).morale) {
      m.moraleChecked = true;
      if (Q.moraleBreaks(def(m).morale)) {
        m.hp = 0;
        m.fled = true;
        log(`${the(m, true)} ${verb(m, 'flees', 'scatter')} into the dark. <span class="dim">(morale broken)</span>`, 'hit');
      }
    }
  }

  function slay(m) {
    const pc = S.pc;
    const dm = def(m);
    pc.kills += 1;
    pc.killsSinceBetter += 1;
    const silver = dm.silver();
    pc.silver += silver;
    log(`<b>${the(m, true)}</b> ${verb(m, 'is', 'are')} dead.${silver ? ` <b>${silver}s</b> in the filth.` : ''}`, 'crit');
    if (dm.boss) log('The Abbess crumples. Her weeping stops. On the altar beyond, something hums.', 'hit');
  }

  // The foes' half of the round, then see whether the fight goes on.
  function foesTurn() {
    if (S.dead) return;
    foesAttack();
    if (S.dead) return;
    afterRound();
  }

  function foesAttack() {
    for (const m of adjacentFoes()) {
      if (S.dead) return;
      if (m.stun > 0) { m.stun -= 1; continue; }
      foeStrike(m, false);
    }
  }

  function foeStrike(m, free) {
    const pc = S.pc;
    const dm = def(m);
    fx.lungeId = m.id; fx.lungeUntil = performance.now() + 260;
    if (dm.boss && !free && d(6) <= 2) {
      const r = Q.test(pc.presence, Q.DR);
      if (r.ok) log(`The Abbess wails. You grit your teeth through it. <span class="dim">(Presence ${roll20(r, pc.presence)})</span>`, 'dim');
      else {
        log(`The Abbess wails and your limbs turn to lead. <span class="dim">(Presence ${roll20(r, pc.presence)})</span>`, 'hurt');
        if (S.combat) S.combat.dazed = true;
      }
      animate();
      return;
    }
    const res = Q.defend(pc, dm.die);
    const rollTxt = `<span class="dim">(Defence ${roll20(res, pc.agility)})</span>`;
    if (res.kind === 'riposte') {
      log(`You slip ${the(m)}’s blow and strike back! ${rollTxt}`, 'hit');
      const back = Q.attack(pc, dm);
      if (back.dmg) { log(`Your riposte deals <b>${back.dmg}</b>.`, 'hit'); damageFoe(m, back.dmg); }
    } else if (res.kind === 'dodge') {
      log(`${the(m, true)} ${verb(m, 'misses', 'miss')}. ${rollTxt}`, 'miss');
    } else {
      const notes = [res.kind === 'fumble' ? 'FUMBLE: double damage' : '', res.absorbed ? `armor soaks ${res.absorbed}` : '', res.brokeArmor ? `armor cracks to ${S.pc.armor.name}` : '', res.warded ? 'an Omen turns it aside' : ''].filter(Boolean).join(', ');
      const hits = verb(m, 'hits', 'hit');
      if (res.dmg) log(`${the(m, true)} ${hits} you for <b>${res.dmg}</b>${notes ? ` (${notes})` : ''}. ${rollTxt}`, 'hurt');
      else log(`${the(m, true)} ${hits} you, but it does no harm (${notes}). ${rollTxt}`, 'miss');
      if (res.dmg > 0) hurt(res.dmg, m.name);
    }
    animate();
  }

  function afterRound() {
    if (!adjacentFoes().length) {
      S.combat = null;
      log('Silence again, apart from your breathing.', 'dim');
    } else {
      faceFoe();
    }
    renderHud();
    draw();
    save();
  }

  function omenMenu() {
    const pc = S.pc;
    if (pc.omens <= 0) return;
    modal('Spend an Omen', `<p>You have <b>${pc.omens}</b>. Spending one costs no time.</p>`, [
      { label: 'Next hit deals maximum damage', disabled: pc.omenMax, action: () => { pc.omens -= 1; pc.omenMax = true; log('<b class="yellow">Omen:</b> your next hit will land with full force.'); renderHud(); } },
      { label: 'Turn aside the next wound', disabled: pc.omenWard, action: () => { pc.omens -= 1; pc.omenWard = true; log('<b class="yellow">Omen:</b> the next wound will miss its mark.'); renderHud(); } },
      { label: 'Keep it', ghost: true },
    ]);
  }

  function scrollMenu() {
    const pc = S.pc;
    if (!pc.scrolls.length) return;
    if (pc.powers <= 0) { log('Your mind is spent. No more scrolls until you sleep.', 'dim'); return; }
    modal('Read a scroll', `<p>Presence test, DR 12. ${pc.powers} use${pc.powers === 1 ? '' : 's'} left today.</p>`, [
      ...pc.scrolls.map((k) => ({ label: `${Q.SCROLLS[k].name}: ${Q.SCROLLS[k].text}`, action: () => readScroll(k) })),
      { label: 'Not now', ghost: true },
    ]);
  }

  function readScroll(key) {
    const pc = S.pc;
    if (S.combat && S.combat.dazed) { S.combat.dazed = false; log('You stand frozen, and the moment passes.', 'dim'); foesTurn(); return; }
    pc.powers -= 1;
    const r = Q.test(pc.presence, Q.DR);
    const rollTxt = `<span class="dim">(Presence ${roll20(r, pc.presence)})</span>`;
    if (!r.ok) {
      pc.powers = 0;
      log(`The words turn to ash in your mouth. No more scrolls until you sleep. ${rollTxt}`, 'miss');
      if (r.fumble) { log('The ash burns.', 'hurt'); hurt(d(2), 'the scroll'); }
    } else if (key === 'flame') {
      const m = S.combat && faceFoe();
      if (m) {
        const dmg = d(8) * (r.crit ? 2 : 1);
        log(`<b class="pink">Black flame</b> wraps ${the(m)} for <b>${dmg}</b>. ${rollTxt}`, 'crit');
        fx.flashColor = 'pink'; fx.flashUntil = performance.now() + 350;
        damageFoe(m, dmg);
      } else log(`Black flame gutters in the empty air. ${rollTxt}`, 'dim');
    } else if (key === 'mend') {
      const h = d(6) * (r.crit ? 2 : 1);
      pc.hp = Math.min(pc.maxHp, pc.hp + h);
      pc.bleeding = false;
      log(`Bone knits with a sound like snapping twigs. <b>+${h} HP</b>. ${rollTxt}`, 'hit');
    }
    if (S.dead) return;
    if (S.combat) foesTurn(); else { renderHud(); draw(); save(); }
  }

  // ---------- harm and death ----------
  function hurt(dmg, cause) {
    const pc = S.pc;
    pc.hp -= dmg;
    fx.flashColor = 'pink'; fx.flashUntil = performance.now() + 350; fx.shakeUntil = performance.now() + 220;
    animate();
    if (pc.hp < 0) return die(cause);
    if (pc.hp === 0) {
      const b = Q.broken(pc);
      log(`<b>Broken.</b> ${esc(b.text)}`, 'hurt');
      if (b.dead) return die(cause);
      if (b.lostTurn && S.combat) S.combat.dazed = true;
    }
    renderHud();
  }

  function die(cause) {
    S.dead = true;
    S.pc.hp = Math.min(S.pc.hp, 0);
    clearSave();
    renderHud();
    draw();
    const pc = S.pc;
    modal('Dead', `${art('grave')}
      <p class="epitaph">Here lies <b>${esc(pc.name)}</b>.<br>${esc(pc.trait)}</p>
      <p>Killed by ${esc(cause)} in ${esc(floor().name)}, with ${pc.kills} foe${pc.kills === 1 ? '' : 's'} slain and ${pc.silver}s in a purse someone else will empty.</p>
      <p class="small">The Weeping Vault keeps what it takes. A new wretch is already on the way.</p>`, [
      { label: 'Roll a new wretch', action: () => startCreate() },
    ], { closable: false, dead: true });
  }

  // ---------- drawing ----------
  const W = 640, H = 480;
  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const c = $('view');
    if (c.width !== W * dpr) { c.width = W * dpr; c.height = H * dpr; }
    const mini = $('mini');
    if (mini.width !== 112 * dpr) { mini.width = 112 * dpr; mini.height = 112 * dpr; }
  }

  function draw() {
    if (!S || S.where !== 'crawl') return;
    const c = $('view'), ctx = c.getContext('2d');
    const dpr = c.width / W;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const g = floor().grid;
    Q.drawView(ctx, W, H, {
      grid: g, x: S.x, y: S.y, dir: S.dir, monsters: floor().monsters, fx, now: performance.now(),
      items: (x, y) => { const t = g[y] && g[y][x]; return t && 'LSFfR'.includes(t) ? t : null; },
    });
    const mini = $('mini'), mctx = mini.getContext('2d');
    const md = mini.width / 112;
    mctx.setTransform(md, 0, 0, md, 0, 0);
    Q.drawMap(mctx, 112, 112, { mini: true, grid: g, explored: floor().explored, x: S.x, y: S.y, dir: S.dir, monsters: floor().monsters });
  }

  let animating = false;
  function animate() {
    if (animating) return;
    animating = true;
    const tick = () => {
      draw();
      const now = performance.now();
      if (Math.max(fx.flashUntil, fx.shakeUntil, fx.hitUntil, fx.lungeUntil) > now) requestAnimationFrame(tick);
      else { animating = false; draw(); }
    };
    requestAnimationFrame(tick);
  }

  // ---------- HUD ----------
  function renderHud() {
    if (!S) return;
    const pc = S.pc;
    $('hudName').textContent = pc.name;
    const face = Q.portraitUrl(pc.name);
    if ($('hudFace').getAttribute('src') !== face) $('hudFace').src = face;
    $('hudHp').textContent = `${Math.max(pc.hp, 0)}/${pc.maxHp}`;
    $('hpFill').style.width = `${Math.max(0, Math.min(1, pc.hp / pc.maxHp)) * 100}%`;
    $('hudMore').innerHTML = `Omens <b>${pc.omens}</b>${pc.omenMax ? '<i title="next hit at maximum">▲</i>' : ''}${pc.omenWard ? '<i title="next wound turned aside">◆</i>' : ''} · <b>${pc.silver}</b>s${pc.bleeding ? ' · <span class="pink">bleeding</span>' : ''}`;
    $('hudPlace').textContent = floor().name;
    const inFight = !!S.combat;
    $('pad').hidden = inFight;
    $('fight').hidden = !inFight;
    $('foe').hidden = !inFight;
    if (inFight) {
      const m = frontFoe() || adjacentFoes()[0];
      if (m) {
        const more = adjacentFoes().length - 1;
        $('foe').innerHTML = `<b>${esc(m.name)}</b><span>${Q.healthWord(m.hp, m.maxHp)}${more > 0 ? ` · +${more} more` : ''}</span>`;
      }
      $('bScroll').disabled = !pc.scrolls.length || pc.powers <= 0;
      $('bPoultice').disabled = pc.poultices <= 0;
      $('bOmen').disabled = pc.omens <= 0;
      $('bPoultice').querySelector('small').textContent = pc.poultices;
      $('bOmen').querySelector('small').textContent = pc.omens;
      $('bScroll').querySelector('small').textContent = pc.scrolls.length ? pc.powers : '–';
    }
    $('tPoultice').disabled = pc.poultices <= 0 || inFight || pc.hp >= pc.maxHp && !pc.bleeding;
    $('tPoultice').querySelector('small').textContent = pc.poultices;
    $('tScroll').hidden = !pc.scrolls.includes('mend');
    $('tScroll').disabled = inFight || pc.powers <= 0;
  }

  function renderLog() {
    const list = $('log');
    list.innerHTML = S.log.slice(-5).map((e) => `<li class="${e.cls}">${e.html}</li>`).join('');
  }

  // ---------- modal ----------
  function modal(title, body, buttons, opts = {}) {
    modalOpen = true;
    const box = $('modal');
    box.classList.toggle('dead', !!opts.dead);
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
  }

  function showMap() {
    modal(floor().name, '<canvas id="bigMap" width="480" height="480"></canvas><p class="small">▲ stairs up · ▼ stairs down · ✚ remains · ◍ font · pink: foes you have seen</p>', [{ label: 'Close' }]);
    const c = $('bigMap'), dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = 480 * dpr; c.height = 480 * dpr;
    const ctx = c.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    Q.drawMap(ctx, 480, 480, { grid: floor().grid, explored: floor().explored, x: S.x, y: S.y, dir: S.dir, monsters: floor().monsters });
  }

  function showSheet() {
    modal('Wretch', sheetHtml(S.pc, false) + '<p class="small">Survive five more horrors and sleep at the inn to Get Better.</p>'.replace('five more', `${Math.max(0, 5 - S.pc.killsSinceBetter)} more`), [{ label: 'Close' }]);
  }

  function usePoulticeOutside() {
    const pc = S.pc;
    if (S.combat || pc.poultices <= 0) return;
    pc.poultices -= 1;
    const h = d(6);
    pc.hp = Math.min(pc.maxHp, pc.hp + h);
    pc.bleeding = false;
    log(`You bind your wounds with a black poultice. <b>+${h} HP</b>.`, 'hit');
    renderHud();
    save();
  }

  // ---------- flow ----------
  function startCreate() {
    S = null;
    rolled = Q.rollWretch();
    renderCreate();
    show('create');
  }

  function acceptWretch() {
    newRun(rolled);
    log(`<b>${esc(S.pc.name)}</b> crawls into Skarnvik under the comet.`);
    show('town');
    save();
    visitStranger();
  }

  function continueRun() {
    const saved = loadSave();
    if (!saved) return;
    S = saved;
    S.combat = null;
    if (S.where === 'crawl') {
      show('crawl');
      renderLog();
      renderHud();
      updateExplored();
      draw();
      if (adjacentFoes().length) startCombat();
    } else show('town');
  }

  // ---------- input ----------
  function bind() {
    $('btnNew').addEventListener('click', () => {
      if (loadSave()) {
        modal('Start over?', '<p>Your wretch in progress will be forgotten.</p>', [
          { label: 'Roll a new wretch', action: () => { clearSave(); startCreate(); } },
          { label: 'Keep them', ghost: true },
        ]);
      } else startCreate();
    });
    $('btnContinue').addEventListener('click', continueRun);
    $('btnReroll').addEventListener('click', () => { rolled = Q.rollWretch(); renderCreate(); });
    $('btnAccept').addEventListener('click', acceptWretch);
    $('goInn').addEventListener('click', visitInn);
    $('goShop').addEventListener('click', visitShop);
    $('goStranger').addEventListener('click', visitStranger);
    $('goCrypt').addEventListener('click', enterCrypt);
    $('goSheet').addEventListener('click', () => modal('Wretch', sheetHtml(S.pc, false), [{ label: 'Close' }]));

    document.querySelectorAll('[data-move]').forEach((b) => b.addEventListener('click', () => act(b.dataset.move)));
    document.querySelectorAll('[data-fight]').forEach((b) => b.addEventListener('click', () => combatAction(b.dataset.fight)));
    $('tMap').addEventListener('click', showMap);
    $('tSheet').addEventListener('click', showSheet);
    $('tPoultice').addEventListener('click', usePoulticeOutside);
    $('tScroll').addEventListener('click', () => { if (!S.combat) scrollMenu(); });
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
      if (S.combat) {
        const map = { 1: 'attack', 2: 'scroll', 3: 'poultice', 4: 'omen', 5: 'flee', ' ': 'attack', enter: 'attack' };
        if (map[k]) { e.preventDefault(); combatAction(map[k]); }
      } else {
        const map = { arrowup: 'fwd', w: 'fwd', arrowdown: 'back', s: 'back', arrowleft: 'turnL', a: 'turnL', arrowright: 'turnR', d: 'turnR', q: 'strafeL', e: 'strafeR' };
        if (map[k]) { e.preventDefault(); act(map[k]); }
      }
      if (k === 'm') showMap();
      if (k === 'c') showSheet();
    });
  }

  // For testing from the browser console.
  Q.debug = () => S;

  bind();
  renderTitle();
  Q.loadArt(() => {
    if (!S) return;
    if (S.where === 'crawl') draw();
    if (S.where === 'town') renderTown();
  });
})();
