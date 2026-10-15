// Dying in the Gaol: the last cell in the row is sealed from the corridor; when the wretches die before the
// escape, two new ones (rolled, or made from the book) wake behind that door. The Gaol stays as the dead left
// it (what they killed stays dead, what they opened stays open), but their things and the key are back in the
// evidence room, and the Warden's hall is locked again while he still walks it. The new two break out of
// their cell the way the first did, and the evidence room gives them their own sacks and the key. A day goes by
// and the water rises; if this pair dies too, the Gaol drowns and the run is over.
module.exports = {
  name: 'Respawn: new wretches in the sealed cell',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    await t.open();
    await t.newGame();

    // from the corridor, the sealed cell won't open
    check(await S(() => Q.debug().floors[0].grid[2][13] === 'C' && Q.debug().floors[0].grid[1][14] === '.'), 'the last cell in the row is sealed, and empty');
    await t.tp('gaol', 13, 3, 'N');
    check(await t.bump() === 'A sealed cell' && /won’t open from out here/.test(await t.body()), 'from the corridor: a sealed cell, and it won’t open');
    await choose(/Step back/);
    await t.closeAll();

    // the first two get somewhere: guards dead, the key taken, the Warden's hall open; then they die
    const before = await S(() => {
      const s = Q.debug();
      const gaol = s.floors[0];
      const guards = gaol.groups.find((g) => g.members.some((m) => m.key === 'g') && !g.members.some((m) => m.key === 'W'));
      guards.alive = false;
      s.scenes.evidence = true; s.scenes.knewher = true; s.flags.hallKey = true; s.flags.ledger = true;
      gaol.grid[12][9] = 'D'; gaol.opened.push('9,12');
      s.silver = 40; s.poultices = 2;
      return { names: s.party.map((p) => p.name), guards: guards.id, kills: s.kills };
    });
    await S(() => Q.debugDie('a test'));
    check(await waitModal() === 'Dead' && await t.page.isVisible('#modalButtons button'), 'they die in the Gaol');
    check(/New wretches in the Gaol/.test(await page.textContent('#modalButtons')) && /two more prisoners heard every scream/.test(await t.body()), 'and two more are waiting in the last cell');
    check(await S(() => { const s = JSON.parse(localStorage.getItem('quest-borg-save-v3') || 'null'); return !!(s && s.awaitingWretches && s.scenes.evidence); }), 'the run is kept, waiting for new wretches');
    await choose(/New wretches in the Gaol/);
    await t.wait(300);
    const rolled = await page.$$eval('#sheets .pcname', (els) => els.map((e) => e.textContent));
    check(rolled.length === 2 && !rolled.includes('Varg Hollowtooth') && await page.isVisible('#btnCustom'), 'new wretches are rolled (or made from the book), not Varg and Wren again', rolled);
    await page.click('#btnAccept');

    check(await waitModal() === 'The Brine Gaol' && /Screaming wakes you/.test(await t.body()), 'they wake to the screaming');
    await choose(/Listen/);
    check(await waitModal() === 'The Brine Gaol' && /evidence room/.test(await t.body()), 'and are told where their things are');
    await choose(/Take a bone/);
    check(await waitModal() === 'The Brine Gaol' && /The water is higher/.test(await t.body()) && /the Gaol drowns/.test(await t.body()), 'the water has risen, and they’re warned: die again and the Gaol drowns');
    await choose(/Wade out/);
    await t.closeAll();
    check(await S(() => Q.debug().flags.gaolFlood === 1 && Q.debug().flags.gaolHeirs === 1), 'the Gaol is deeper now');

    const now = await S((guards) => {
      const s = Q.debug();
      const gaol = s.floors[0];
      const p = s.pose;
      return {
        names: s.party.map((x) => x.name), cell: [Math.floor(p.x / 2), Math.floor(p.z / 2)], floor: s.floorIx,
        stashed: s.party.map((x) => x.stash && x.stash.weapon.name),
        femurs: s.party.every((x) => x.weapon.name === 'Femur' && x.armor.tier === 0 && x.stash && x.stash.weapon),
        silver: s.silver, poultices: s.poultices,
        guardsDead: !gaol.groups.find((g) => g.id === guards).alive, scenes: s.scenes.knewher && s.flags.ledger,
        key: s.flags.hallKey, evidence: s.scenes.evidence, hall: gaol.grid[12][9], door: gaol.grid[2][13],
      };
    }, before.guards);
    check(now.floor === 0 && now.cell[0] === 13 && now.cell[1] === 1 && now.names.every((n) => !before.names.includes(n)), 'the new two are in the sealed cell', now);
    check(now.femurs && now.silver === 0 && now.poultices === 0, 'with femurs and rags; their own things are in the evidence room, and the dead two’s went with them', now);
    check(now.guardsDead && now.scenes, 'the Gaol is as the dead left it: the guards they killed stay dead, what they learned stays learned', now);
    check(!now.key && !now.evidence && now.hall === 'J' && now.door === 'C', 'the key is back on its hook, the Warden’s hall locked again, their own door shut', now);

    // out of the cell the way the first two got out
    await S(() => { for (const p of Q.debug().party) p.agility = 9; });
    check(await t.bump() === 'Your cell door', 'their cell door asks how they get out');
    // (a 1 always fails, so pick at it until it gives)
    for (let i = 0; i < 6; i++) {
      await choose(/Pick the lock/);
      let said = '';
      for (let w = 0; w < 60 && !/out of the cell|snaps off/.test(said); w++) { await t.wait(200); said = await t.body(); }
      if (/out of the cell/.test(said)) { await choose(/^Out/); break; }
      await choose(/Again/);
      await t.closeAll();
      await t.bump();
    }
    await t.closeAll();
    check(await S(() => Q.debug().floors[0].grid[2][13] === 'D' && !Q.debug().flags.inSealedCell), 'the lock gives: they’re out');

    // the evidence room: their own sacks, and the key
    await t.tp('gaol', 2, 11, 'S');
    let room = null;
    for (let i = 0; i < 3 && room !== 'The evidence room'; i++) { await t.step(); room = await t.title(); }
    check(room === 'The evidence room', 'the evidence room again', room);
    await choose(/Open your sacks/);
    check(await waitModal() === 'Your things' && now.names.every((n) => /./.test(n)) && (await t.body()).includes(now.names[0]), 'their own things, in sacks with their names', await t.body());
    await choose(/Get dressed/);
    await t.closeAll();
    const after = await S((stashed) => ({ key: Q.debug().flags.hallKey, armed: Q.debug().party.every((p, i) => p.weapon.name === stashed[i] && !p.stash), poultices: Q.debug().poultices }), now.stashed);
    check(after.key && after.armed && after.poultices >= 2, 'armed again, and the long key in hand', after);

    // the second pair dies too: the Gaol drowns, and it's a new game
    await S(() => Q.debugDie('a second test'));
    check(await waitModal() === 'The Gaol drowns' && /The Gaol is drowned/.test(await t.body()), 'the second pair dies: the Gaol drowns');
    check(await S(() => !localStorage.getItem('quest-borg-save-v3')), 'and the run is over');
    await choose(/New game/);
    await t.wait(300);
    check(JSON.stringify(await page.$$eval('#sheets .pcname', (els) => els.map((e) => e.textContent))) === JSON.stringify(['Varg Hollowtooth', 'Wren Sixpence']), 'a new game starts with Varg and Wren again');
  },
};
