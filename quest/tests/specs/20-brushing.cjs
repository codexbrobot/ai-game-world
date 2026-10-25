// Walking past things in free movement: only walking at a person, a gravestone or a sign asks about it.
// Brushing past it, sidestepping or backing into it just stops you, and a box you've closed doesn't pop up
// again while your thumb is still on the stick; let go and walk at it again and it does.
module.exports = {
  name: 'Free movement: brushing past things doesn’t keep opening their boxes',
  async run(t) {
    const { S, check, page } = t;
    await t.open({ move: 'free' });
    await t.newGame();
    await t.escaped();
    const hold = async (key, ms) => { await page.keyboard.down(key); await page.waitForTimeout(ms); await page.keyboard.up(key); };

    // the memorial is just west of this square
    check(await S(() => Q.debug().floors.find((f) => f.id === 'skarnvik').grid[17][23] === 'm'), 'the memorial stands west of the graveyard gates');
    await t.tp('skarnvik', 24, 17, 'N');
    await hold('a', 900);
    check(!(await t.title()), 'sidestepping into it: nothing opens', await t.title());
    await t.tp('skarnvik', 24, 17, 'E');
    await hold('s', 900);
    check(!(await t.title()), 'backing into it: nothing opens', await t.title());

    // walking at it asks; closing the box with the stick still pushed doesn't open it again
    await t.tp('skarnvik', 24, 17, 'W');
    await page.keyboard.down('w');
    check(await t.waitModal(3000) === 'The memorial', 'walking at it: the memorial');
    await t.closeAll();
    await page.waitForTimeout(2500);
    check(!(await t.title()), 'closed, still pushing: it stays closed', await t.title());
    await page.keyboard.up('w');
    await page.waitForTimeout(400);
    await page.keyboard.down('w');
    check(await t.waitModal(3000) === 'The memorial', 'let go and walk at it again: it asks again');
    await page.keyboard.up('w');
    await t.closeAll();
  },
};
