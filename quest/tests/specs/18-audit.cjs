// What the code audit found, kept fixed: a box something waits on can be closed with Escape (or a tap outside)
// without freezing the game; relics put on and taken off leave a wretch as they were (no free HP, no free
// Agility); the evidence room keeps a weapon found on the way; and changing floors frees the old floor's
// graphics, instead of piling them up until a phone's browser drops the 3D view.
module.exports = {
  name: 'Audit fixes: Escape, relics, the evidence room, GPU memory',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    await page.addInitScript(() => {
      window.__gl = { buffers: 0, textures: 0 };
      for (const C of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
        if (!C) continue;
        const p = C.prototype;
        const cb = p.createBuffer, db = p.deleteBuffer, ct = p.createTexture, dt = p.deleteTexture;
        p.createBuffer = function () { window.__gl.buffers++; return cb.apply(this, arguments); };
        p.deleteBuffer = function (b) { if (b) window.__gl.buffers--; return db.apply(this, arguments); };
        p.createTexture = function () { window.__gl.textures++; return ct.apply(this, arguments); };
        p.deleteTexture = function (x) { if (x) window.__gl.textures--; return dt.apply(this, arguments); };
      }
    });
    await t.open();
    await t.newGame();
    await t.escaped();

    // 1. Escape on an item offer inside a scene: is the game stuck?
    await S(() => Object.assign(Q.debug().flags, { freed: 'Jorl Nine-Lives', livingName: 'Jorl Nine-Lives', knownName: 'Grey Ottar', knownShe: 'he' }));
    await S(() => Q.debugHour('day'));
    await t.tp('skarnvik', 9, 28, 'W');
    await t.bump();
    await choose(/owed us/);
    await choose(/Unwrap/);
    check(await waitModal() === 'Found', 'a strange thing, offered in the middle of a scene');
    await page.keyboard.press('Escape');
    await t.wait(500);
    await page.keyboard.press('j');
    await t.wait(500);
    const stuck = (await t.title()) !== 'Journal';
    check(!stuck, 'after Escape on an item offer, the game still answers keys (J opens the journal)', await t.title());
    await t.closeAll();

    // 2. Eye in a Jar on and off heals
    const eye = await S(() => {
      const pc = Q.debug().party[0];
      pc.maxHp = 20; pc.hp = 10; pc.relic = null; pc.pack = [];
      const out = [pc.hp];
      for (let i = 0; i < 3; i++) {
        pc.pack.push(Q.packItem('eye')); Q.equip(pc, pc.pack.length - 1);
        pc.pack.push(Q.packItem('tongue')); Q.equip(pc, pc.pack.length - 1); // eye goes in the pack
        pc.pack = pc.pack.filter((x) => x.key !== 'eye');
        out.push(pc.hp);
      }
      return { hps: out, max: pc.maxHp };
    });
    check(eye.hps[3] === eye.hps[0], 'taking off the Eye in a Jar doesn’t heal', eye);

    // 3. Plague Mask at Agility −3, on and off
    const mask = await S(() => {
      const pc = Q.debug().party[0];
      Q.takeOff(pc); pc.agility = -3; pc.pack = [Q.packItem('mask')];
      Q.equip(pc, 0); const on = pc.agility;
      pc.pack.push(Q.packItem('tongue')); Q.equip(pc, pc.pack.length - 1);
      return { on, off: pc.agility };
    });
    check(mask.off === -3, 'the Plague Mask on and off leaves Agility as it was', mask);

    // 4. the evidence room and a plain weapon found before it
    const ev = await S(() => {
      const pc = Q.debug().party[0];
      pc.weapon = { name: 'Zweihänder', die: 10 }; pc.pack = [];
      pc.stash = { weapon: { name: 'Knife', die: 4 }, armor: { name: 'Rags', tier: 0 }, silver: 0 };
      Q.debugRestoreGear();
      return { w: pc.weapon.name, pack: pc.pack.map((x) => x.name) };
    });
    check(ev.w === 'Zweihänder' || ev.pack.includes('Zweihänder'), 'the evidence room doesn’t throw away a weapon found before it', ev);

    // 5. GPU buffers across floor rebuilds: going back and forth, each floor costs the same every time
    const go = (id) => S((id) => { const ix = Q.FLOORS.findIndex((f) => f.id === id); const rows = Q.FLOORS[ix].rows; const y = rows.findIndex((r) => r.includes('G')); const x = rows[y].indexOf('G'); Q.debugEnter(ix, { x: (x + 0.5) * 2, z: (y + 0.5) * 2, a: 0 }); }, id);
    const series = [];
    for (let i = 0; i < 12; i++) {
      await go(i % 2 ? 'skarnvik' : 'undercroft');
      await t.wait(400);
      series.push(await S(() => window.__gl.buffers));
    }
    check(series[11] - series[1] <= 2 && series[10] - series[0] <= 2, 'floor changes don’t pile up GPU buffers: the city costs the same on the sixth visit as the first', series);
  },
};
