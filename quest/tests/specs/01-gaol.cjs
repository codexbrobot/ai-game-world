// The Brine Gaol, start to finish: wake, the cell door, the one you knew, the living prisoner, the ledger, the
// evidence room, the Warden, and out through the grate into Skarnvik.
module.exports = {
  name: 'The Brine Gaol: the whole escape',
  async run(t) {
    const { S, check, choose, waitModal, body } = t;
    const walkUntilModal = async (max = 5) => {
      for (let i = 0; i < max; i++) {
        const m = await t.title(); if (m) return m;
        if (await S(() => document.body.classList.contains('in-battle'))) return 'BATTLE';
        await t.page.keyboard.press('w'); await t.wait(900);
      }
      return waitModal(3000);
    };
    const gaol = () => S(() => Q.debug().floors.find((f) => f.id === 'gaol'));
    await t.open();
    await t.page.click('#btnNew'); await t.wait(200);
    await t.page.click('#btnAccept');
    check(await waitModal(), 'you wake in the Gaol with a DM box');
    await choose(/Take his legs/); await waitModal();
    await choose(/Get up/); await t.wait(400);
    const cell = await S(() => Q.debug().party.map((p) => ({ w: p.weapon.name, stash: !!p.stash })));
    check(cell.every((p) => p.w === 'Femur' && p.stash), 'in the cell you hold femurs, and your own gear is taken', cell);
    await S(() => Q.debug().party.forEach((p) => { p.maxHp = 40; p.hp = 40; p.strength = 15; p.agility = 15; p.presence = 15; }));

    // the cell door
    await t.tp('gaol', 1, 1, 'S', 500);
    check(await walkUntilModal() === 'Your cell door', 'the cell door asks how you get out');
    await choose(/Wrench/);
    for (let i = 0; i < 6; i++) {
      await waitModal();
      if (/out of the cell/.test(await body())) { await choose(/Out/); break; }
      await choose(/Again/); await walkUntilModal(); await choose(/Wrench/);
    }
    check((await gaol()).grid[2][1] === 'D', 'the cell door opens');

    // the one you knew
    await t.tp('gaol', 7, 3, 'N', 500);
    const knew = await walkUntilModal();
    check(/^The cell of /.test(knew || ''), 'the cell of the one you knew', knew);
    const omens0 = (await t.party()).map((p) => p.omens);
    await choose(/Close the eyes/); await waitModal();
    const omens1 = (await t.party()).map((p) => p.omens);
    check(omens1.reduce((a, b) => a + b) === omens0.reduce((a, b) => a + b) + 1, 'closing their eyes gives an Omen', { omens0, omens1 });
    check((await t.flags()).mourned, 'and the game remembers you mourned them');
    await choose(/Fight/);
    await t.fight();
    check((await gaol()).groups.filter((g) => g.members.some((m) => m.key === 'P')).every((g) => !g.alive), 'then they rise, and you put them down');
    await t.closeAll();

    // the living prisoner
    await t.tp('gaol', 10, 3, 'N', 500);
    check(await walkUntilModal() === 'A voice from the cell', 'a living prisoner calls from a cell');
    await choose(/Break the lock/);
    for (let i = 0; i < 6; i++) {
      await waitModal();
      if (/evidence room/.test(await body())) { await choose(/Go on/); break; }
      await choose(/Step back/); await walkUntilModal(); await choose(/Break the lock/);
    }
    const f1 = await t.flags();
    check(f1.freed && f1.knowsEvidence, 'breaking the lock frees him, and he tells you about the evidence room', f1);

    // the infirmary's ledger
    await t.tp('gaol', 2, 3, 'S', 500);
    check(await walkUntilModal() === 'The infirmary', 'the infirmary');
    await choose(/Read the ledger/); await waitModal();
    check(/Fennick/.test(await body()) && (await t.flags()).ledger, 'the ledger names Lord Fennick');
    await choose(/Close it/);

    // the hall door, without the key
    await t.tp('gaol', 9, 11, 'S', 500);
    let m = await walkUntilModal();
    if (m === 'The lower block') { await choose(/Wade on/); m = await walkUntilModal(); }
    check(m === 'A locked door', 'the Warden’s hall is locked without the key', m);
    await choose(/Step back/);

    // the evidence room
    await t.tp('gaol', 2, 11, 'S', 500);
    check(await walkUntilModal() === 'The evidence room', 'the evidence room');
    await choose(/Open your sacks/); await waitModal();
    await choose(/Get dressed/);
    for (let i = 0; i < 3 && await t.title(); i++) await choose(/./);
    const gear = await S(() => ({ party: Q.debug().party.map((p) => ({ w: p.weapon.name, stash: !!p.stash })), poultices: Q.debug().poultices, key: Q.debug().flags.hallKey }));
    check(gear.party.every((p) => !p.stash) && gear.poultices >= 2 && gear.key, 'your own gear back, poultices, and the key to the hall', gear);

    // the grate, padlocked while the Warden lives
    await S(() => Q.debug().floors.find((f) => f.id === 'gaol').groups.forEach((g) => { if (!g.members.some((m) => m.key === 'W')) g.alive = false; }));
    await t.tp('gaol', 13, 14, 'E', 500);
    m = await walkUntilModal();
    check(m === 'The sewer grate' && /Warden/.test(await body()), 'the grate is padlocked: the key is on the Warden’s ring', m);
    await choose(/Step back/);

    // the Warden
    await t.tp('gaol', 9, 11, 'S', 500);
    check(await walkUntilModal() === 'The Warden’s hall', 'the long key opens the Warden’s hall');
    await choose(/Go in/); await t.wait(800);
    m = await walkUntilModal(6);
    const fought = await t.fight();
    check((await t.flags()).wardenDead, 'the Warden dies (twice)', { m, fought });
    for (let i = 0; i < 3 && await t.title(); i++) await choose(/./);

    // out through the grate
    await t.tp('gaol', 13, 14, 'E', 500);
    check(await walkUntilModal() === 'The sewer grate', 'the grate again');
    await choose(/Climb out/);
    check(await waitModal() === 'Skarnvik', 'up into Skarnvik');
    await choose(/Look around/); await t.wait(600);
    const city = await S(() => Q.debug().floors[Q.debug().floorIx].id);
    const place = await t.place();
    check(city === 'skarnvik' && /^Gallows Square · Night/.test(place), 'standing in Gallows Square, an hour before dawn', { city, place });
    await t.shot('gaol-out');
  },
};
