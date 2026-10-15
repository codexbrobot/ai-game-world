// Skarnvik: everyone and everything where they should be, other people's homes, the nest of rags, and new
// wretches of each class waking at their own home (the scum sleeping in the gutter).
module.exports = {
  name: 'Skarnvik: the town, and new wretches waking at home',
  async run(t) {
    const { S, check, choose, waitModal } = t;
    await t.open();
    await t.newGame();
    await t.escaped({ silver: 100, townSeen: false });
    const visits = [
      ['The Basilica of the Two-Headed Basilisk', 7, 2, 'N', 'Church Hill'], ['The Salt Exchange', 34, 2, 'N', 'The Hill'],
      ['A priest of the basilica', 5, 3, 'N', 'Church Hill'], ['The gravedigger', 8, 7, 'N', 'Church Hill'],
      ['A Salt Lords’ watchman', 26, 14, 'N', 'Gallows Square'], ['A blind beggar', 11, 25, 'S', 'The Gutter'],
      ['Old graves', 3, 5, 'N', 'Church Hill'], ['A crypt-house', 2, 5, 'W', 'Church Hill'], ['The House of Vael', 30, 2, 'N', 'The Hill'],
      ['A narrow house', 6, 16, 'N', 'Lantern Row'], ['The old watch-house', 10, 28, 'N', 'The Gutter'], ['The Stranger', 20, 14, 'N', 'Gallows Square'],
      ['Thrumm’s Stall', 19, 11, 'N', 'Gallows Square'], ['The Drowned Lamb', 17, 23, 'N', 'The Harbor'], ['A fishwife', 30, 27, 'N', 'The Harbor'],
    ];
    for (const [name, x, y, d, district] of visits) {
      await t.tp('skarnvik', x, y, d);
      const label = await t.facing();
      const place = await t.place();
      const m = await t.bump();
      check(label === name && m === name && place.startsWith(district), `${name} (${district}): its name shows, and walking into it opens it`, { label, m, place });
      await t.closeAll();
    }
    // other people's homes stay shut
    await t.tp('skarnvik', 30, 2, 'N');
    await t.bump();
    check(/nailed shut/.test(await t.body()), 'someone else’s home (the House of Vael) stays shut');
    await t.closeAll();
    // the nest of rags is walked onto
    await t.tp('skarnvik', 2, 26, 'S');
    check(await t.bump() === 'A nest of rags', 'stepping onto the nest of rags');
    await t.closeAll();

    // new wretches of each class wake at that class's home
    const homes = { priest: [[7, 2], 'Church Hill'], hermit: [[2, 5], 'Church Hill'], royalty: [[30, 2], 'The Hill'], herbmaster: [[6, 16], 'Lantern Row'], deserter: [[10, 28], 'The Gutter'], scum: [[2, 27], 'The Gutter'] };
    for (const [cls, [at, district]] of Object.entries(homes)) {
      await S(() => Q.debugDie('a test'));
      await waitModal();
      await choose(/New wretches/);
      await t.wait(400);
      // the dice roll only this class, and the pair is rolled again
      await S((cls) => { window.__roll = window.__roll || Q.rollWretch; Q.rollWretch = () => window.__roll(cls); }, cls);
      await t.page.click('#btnReroll');
      await t.page.click('#btnAccept');
      const m = await waitModal();
      const text = await t.body();
      await t.wait(800);
      await choose(/Go on/);
      const home = await S(() => Q.debug().home);
      const where = await t.where();
      const place = await t.place();
      check(m === 'Skarnvik' && home && home.cls === cls && where[0] === at[0] && where[1] === at[1] && place.startsWith(district),
        `new ${cls} wretches wake at home, in ${district}`, { m, home, where, place, text: text.slice(0, 60) });
      await t.closeAll(); // a day went by first (and maybe a Misery came with it)
    }
    // the scum's home is the alley: off the rags and back on, and sleep there
    await t.step('w');
    await t.page.keyboard.press('s');
    check(await waitModal() === 'Home', 'your own corner of the alley is home');
    await choose(/^Sleep/);
    check(await waitModal() === 'Morning, in the gutter', 'and you can sleep there for nothing');
    await t.closeAll();
  },
};
