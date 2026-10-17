// The hour in Skarnvik (steps turn it, sleep brings dawn), the watch by day, the drowned at night and their
// bounty, and what the Brine Gaol left behind: the freed man, the family of the one you knew, the ledger,
// and the man you left, hanged and walking.
module.exports = {
  name: 'Skarnvik by day and night, and the Gaol’s payoffs',
  async run(t) {
    const { S, check, choose, waitModal } = t;
    const groups = (tag) => S((tag) => Q.debug().floors.find((f) => f.id === 'skarnvik').groups.filter((g) => g.alive && (!tag || g[tag]))
      .map((g) => ({ x: g.x, z: g.z, cx: Math.floor(g.x / 2), cy: Math.floor(g.z / 2), keys: g.members.map((m) => m.key) })), tag);
    const clearStreets = () => S(() => { for (const g of Q.debug().floors.find((f) => f.id === 'skarnvik').groups) g.alive = false; });
    const meet = (g) => S((g) => Q.debugEnter(Q.FLOORS.findIndex((f) => f.id === 'skarnvik'), { x: g.x + 1.0, z: g.z, a: Math.PI }), g);
    await t.open();
    await t.newGame();
    await t.escaped({ silver: 60 });

    // three steps from dawn
    await S(() => { Q.debug().clock = { phase: 'night', left: 3, spawned: true }; });
    await t.tp('skarnvik', 16, 12, 'E');
    check(await t.place() === 'Gallows Square · Night', 'the HUD shows the hour', await t.place());
    for (let i = 0; i < 3; i++) await t.step();
    check(await t.place() === 'Gallows Square · Dawn' && /Dawn comes up grey/.test(await t.lastLog()), 'walking turns the hour: dawn', await t.place());

    // day: the watch
    await S(() => Q.debugHour('day'));
    await t.wait(600);
    let watch = await groups('day');
    check(watch.length === 3 && !(await groups('night')).length, 'by day three pairs of watchmen are out, and no drowned', watch);
    await meet(watch[0]);
    check(await waitModal() === 'The Salt Lords’ watch' && /Gaol-pale/.test(await t.body()), 'the watch stops you, and they know a Gaol face');
    const silver0 = await S(() => Q.debug().silver);
    await choose(/Pay the street toll/);
    check(await S(() => Q.debug().silver) === silver0 - 5 && (await groups('day')).length === 2, 'pay the 5s toll and they move on');
    await t.closeAll();
    watch = await groups('day');
    await meet(watch[0]);
    await waitModal();
    await choose(/Fight them/);
    const fought = await t.fight();
    check(fought.result !== 'timeout' && (await groups('day')).length === 1, 'or fight them', fought);
    await t.closeAll();
    await clearStreets();

    // the board: work on the harbor dead
    await t.tp('skarnvik', 25, 14, 'S');
    await t.bump();
    check(/The harbor dead/.test(await t.body()), 'the bounty board has work on the harbor dead');
    await choose(/Take: The harbor dead/);
    await t.closeAll();

    // night: the drowned come up out of the harbor
    await S(() => Q.debugHour('night'));
    await t.wait(500);
    const dead = await groups('night');
    const inHarbor = dead.every((g) => (g.cx >= 22 && g.cy >= 23) || (g.cx >= 29 && g.cy >= 12 && g.cy <= 21));
    check(dead.length === 5 && dead.every((g) => g.keys.every((k) => k === 'drowned')) && inHarbor && !(await groups('day')).length,
      'by night five groups of drowned walk the Harbor and Saltpan Lane, and the watch is gone', dead);
    await meet(dead[0]);
    await t.fight();
    await t.closeAll();
    const taken = await S(() => Q.debug().bounties.taken.harbor);
    check(taken >= 1, 'killing them counts for the bounty', taken);

    // sleep at the inn: dawn, and the drowned go back
    await t.tp('skarnvik', 17, 23, 'N');
    await t.bump();
    await choose(/^Beds|gutter/i);
    check(/^Morning/.test(await waitModal() || '') && (await S(() => Q.debug().clock.phase)) === 'dawn' && !(await groups('night')).length, 'sleeping brings dawn, and the drowned are gone');
    await t.closeAll();

    // the one you freed, in the Gutter
    await S(() => Object.assign(Q.debug().flags, { freed: 'Jorl Nine-Lives', livingName: 'Jorl Nine-Lives', knownName: 'Grey Ottar', knownShe: 'he', mourned: true, ledger: true }));
    await S(() => Q.debugHour('day'));
    await clearStreets();
    await t.tp('skarnvik', 9, 28, 'W');
    const label = await t.facing();
    check(label === 'A man in a stolen cloak' && await t.bump() === 'Jorl Nine-Lives', 'the man you freed hides in the Gutter, and knows you', label);
    await choose(/Ask what he knows/);
    check((await t.flags()).bellStair && /bell-ringer’s stair/.test(await t.body()), 'he tells you of the bell-ringer’s stair');
    await t.closeAll();
    // (a busy page can miss the step into him; walk up again)
    const visit = async () => { for (let i = 0; i < 3; i++) { await t.tp('skarnvik', 9, 28, 'W'); if (await t.bump()) return; } };
    await visit();
    await choose(/owed us/);
    await choose(/Unwrap/);
    check(await waitModal() === 'Found', 'he pays you back from his stash');
    await t.closeAll();
    await S(() => { const p = Q.debug().party[1]; p.hp = 0; p.dead = true; });
    await visit();
    await choose(/come with you/);
    await t.closeAll();
    await t.wait(600);
    const party = await t.party();
    check(party[1].name === 'Jorl Nine-Lives' && !party[1].dead && await S(() => Q.debug().floors.find((f) => f.id === 'skarnvik').grid[28][8]) === '.',
      'with one of yours dead, he takes their place, and leaves the Gutter', party.map((p) => p.name));

    // the family of the one you knew
    await t.tp('skarnvik', 8, 18, 'S');
    check(await t.bump() === 'A woman in mourning black', 'the family of the one you knew waits in Lantern Row');
    await choose(/closed his eyes/);
    await choose(/Take it/);
    check(await waitModal() === 'Found', 'you closed his eyes: she gives you his keepsake');
    await t.closeAll();
    const fk = await t.flags();
    check(fk.kinDone && fk.saltBleeds, 'and tells you why he was put in the Brine');

    // the ledger, told to the Stranger
    await t.tp('skarnvik', 20, 14, 'N');
    await t.bump();
    const s0 = await S(() => Q.debug().silver);
    await choose(/Gaol ledger/);
    check(await S(() => Q.debug().silver) === s0 + 10, 'the Stranger pays 10s for what the ledger said');
    await t.closeAll();

    // the one you left behind: hanged, and walking at night
    await S(() => { const f = Q.debug().flags; delete f.freed; delete f.freedJoined; delete f.mourned; Object.assign(f, { leftHim: true, sawDawn: true, tookBoots: true, kinDone: false }); Q.debug().party.forEach((p) => { p.gaol = true; p.omens = 2; }); });
    await t.tp('skarnvik', 22, 14, 'N');
    await t.bump();
    check(/third rope, new since you came up/.test(await t.body()), 'the man you left hangs from a third rope on the gallows');
    await t.closeAll();
    await S(() => Q.debugHour('night'));
    await t.wait(500);
    const hanged = (await groups('hanged'))[0];
    check(hanged, 'at night the third rope is cut, and he walks');
    await meet(hanged);
    check(await waitModal() === 'Jorl Nine-Lives' && /You walked away/.test(await t.body()), 'he has something to say to you');
    await choose(/Fight/);
    const fh = await t.fight();
    check((await t.flags()).hangedLaid && fh.result === 'Among the dead' && /In his fist/.test(await t.body()), 'put down, he leaves the thing he kept from the guards', fh);
    await t.closeAll();
    await t.tp('skarnvik', 22, 14, 'N');
    await t.bump();
    check(/third rope is gone/.test(await t.body()), 'and the third rope is burned');
    await t.closeAll();

    // her, if you took the boots
    await t.tp('skarnvik', 8, 18, 'S');
    await t.bump();
    await choose(/is dead/);
    check(/I made those boots/.test(await t.body()), 'she knows the boots you took');
    const o0 = (await t.party()).filter((p) => !p.dead).map((p) => p.omens);
    await choose(/Walk away/);
    const o1 = (await t.party()).filter((p) => !p.dead).map((p) => p.omens);
    check(o1.every((v, i) => v === o0[i] - 1), 'walk away and she curses you: −1 Omen each', { o0, o1 });
    await t.closeAll();
  },
};
