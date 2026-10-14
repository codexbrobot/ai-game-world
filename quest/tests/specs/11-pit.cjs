// The pit by the Warden's door: falling in hurts, the black water at the bottom costs a point of HP every few
// seconds (never the last), and an iron ladder on its north wall lets you climb out; its other walls don't.
module.exports = {
  name: 'The pit: a ladder out',
  async run(t) {
    const { S, check } = t;
    await t.open();
    await t.newGame();
    await S(() => { const s = Q.debug(); s.scenes.lowerblock = true; s.party.forEach((p) => { p.hp = p.maxHp = 40; }); });
    const hp = async () => (await t.party()).map((p) => p.hp);
    const pit = () => S(() => Q.debugWorld().inPit());

    // over the edge
    await t.tp('gaol', 8, 9, 'S', 600);
    await t.step('w', 3500);
    const fell = await hp();
    check(fell.every((h) => h < 40), 'falling in hurts', fell);
    check(await pit(), 'and you are at the bottom of the pit');
    check(/iron ladder/.test(await t.lastLog(3)), 'the DM points you to the ladder', await t.lastLog(3));

    // the air runs out, a point at a time
    await t.wait(3800);
    const drowning = await hp();
    check(drowning.every((h, i) => h === fell[i] - 1 || h === 1), 'a point of HP each, every few seconds', { fell, drowning });

    // the east wall has no ladder; the north one does
    await t.tp('gaol', 9, 10, 'N', 900);
    await t.step('w', 1500);
    check(await pit(), 'no climbing out where there is no ladder');
    await t.tp('gaol', 8, 10, 'N', 900);
    await t.step('w', 2500);
    const out = await t.where();
    check(!(await pit()) && out[0] === 8 && out[1] === 9, 'up the ladder and out', out);
    const after = await hp();
    await t.wait(3500);
    check(JSON.stringify(await hp()) === JSON.stringify(after), 'out of the water, the bleeding of breath stops', { after, now: await hp() });

    // and walking freely: up the same ladder
    await S(() => { document.getElementById('tSettings').click(); document.querySelector('[data-set="move"][data-val="free"]').click(); });
    await t.closeAll();
    await t.tp('gaol', 8, 10, 'N', 900);
    check(await pit(), 'back at the bottom (free movement)');
    await t.page.keyboard.down('w'); await t.wait(1600); await t.page.keyboard.up('w');
    await t.wait(800);
    check(!(await pit()), 'free movement climbs the ladder too', await t.where());
  },
};
