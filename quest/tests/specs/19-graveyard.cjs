// The paupers' graveyard, off Gallows Square: its gates are locked (the DM says so, and you can't walk in), and
// the memorial beside them names every wretch of yours who ever died, in any game, with what killed them and
// where. It's kept in the browser, so a new game doesn't wipe it, and nobody is written down twice.
module.exports = {
  name: 'Graveyard: the locked gates, and the memorial to every dead wretch',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    await t.open();
    await t.newGame();
    await t.escaped();

    // the forecourt off the square, the gates and the memorial
    check(await S(() => { const g = Q.debug().floors.find((f) => f.id === 'skarnvik').grid; return g[18][24] === 'r' && g[17][23] === 'm'; }), 'off Gallows Square: the graveyard gates, and the memorial beside them');
    await t.tp('skarnvik', 24, 17, 'S');
    check(/^The graveyard gates/.test(await t.place()), 'the HUD names the place', await t.place());
    check(await t.facing() === 'The graveyard gates', 'facing the gates, their name shows');
    check(await t.bump() === 'The graveyard gates' && /won’t open for you/.test(await t.body()), 'walk into them: locked, and the DM says so');
    await choose(/Step back/);
    await t.closeAll();
    await t.step();
    await t.closeAll();
    check(JSON.stringify(await t.where()) === JSON.stringify([24, 17]), 'and you can’t walk in', await t.where());

    // nobody on it yet
    await t.tp('skarnvik', 24, 17, 'W');
    check(await t.facing() === 'The memorial', 'beside the gates, the memorial');
    check(await t.bump() === 'The memorial' && /None of them are yours/.test(await t.body()), 'no names yet');
    await t.wait(1000);
    check(!(await S(() => Q.Voice.speaking)), 'the narrator doesn’t read it');
    await choose(/Step back/);
    await t.closeAll();

    // the first pair dies in the city: both on the memorial, with the cause and the place
    const first = await S(() => Q.debug().party.map((p) => p.name));
    await t.tp('skarnvik', 20, 13, 'N');
    await S(() => Q.debugDie('the harbor dead'));
    await waitModal();
    let dead = await S(() => Q.Memorial.list());
    check(dead.length === 2 && first.every((n) => dead.some((x) => x.name === n)) && dead.every((x) => x.cause === 'the harbor dead' && x.where === 'Gallows Square, Skarnvik' && x.game === 1),
      'when they die, both go on the memorial: who, what killed them, and where', dead);
    check(dead.every((x) => x.deeds.some((d) => /Climbed out/.test(d))), 'with what they had done', dead[0].deeds);

    // the heirs see them on it, and a reload doesn't write anyone down twice
    await choose(/New wretches in Skarnvik/);
    await t.wait(300);
    await page.click('#btnAccept');
    await t.closeAll();
    await t.wait(500);
    await t.closeAll();
    await S(() => Q.debugMemorial());
    const body = await t.body();
    check(first.every((n) => body.includes(n)) && /Killed by the harbor dead in Gallows Square, Skarnvik/.test(body) && /Game 1/.test(body), 'the memorial shows them, with what killed them and where', body.slice(0, 200));
    await t.closeAll();
    await page.reload();
    await t.wait(500);
    await page.click('#btnContinue');
    await t.wait(800);
    await t.closeAll();
    check(await S(() => Q.Memorial.list().length) === 2, 'nobody is written down twice');

    // a new game: the memorial keeps them, and the new game's dead go on as game 2
    await S(() => { localStorage.removeItem('quest-borg-save-v3'); });
    await page.reload();
    await t.wait(500);
    await t.newGame();
    check(await S(() => Q.debug().game) === 2, 'a new game is game 2');
    await S(() => { const p = Q.debug().party[0]; p.hp = 0; p.dead = true; p.cause = 'a test'; Q.debugRefresh(); });
    await t.escaped();
    await t.tp('skarnvik', 20, 13, 'N'); // (the next save writes the dead down)
    await S(() => Q.debugMemorial());
    dead = await S(() => Q.Memorial.list());
    const order = await S(() => [...document.querySelectorAll('.memorial .j-head')].map((h) => h.textContent));
    check(dead.length === 3 && dead[2].game === 2 && dead[2].cause === 'a test', 'a wretch who dies in the next game goes on too, as game 2', dead.map((x) => [x.game, x.name, x.cause]));
    check(JSON.stringify(order) === JSON.stringify(['Game 2', 'Game 1']), 'the newest game first', order);
    await t.closeAll();
  },
};
