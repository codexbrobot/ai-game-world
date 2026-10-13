// An old save (from before the clock, with a smaller town map) carries on in today's town; and after the
// fourth Misery noon is black, with the dead out all day.
module.exports = {
  name: 'Old saves, and black noon',
  async run(t) {
    const { S, check } = t;
    await t.open();
    await t.newGame();
    await S(() => {
      const s = Q.debug();
      s.escaped = true; delete s.clock; s.party.forEach((p) => { delete p.gaol; p.stash = null; });
      const ix = s.floors.findIndex((f) => f.id === 'skarnvik');
      s.floors[ix].grid = Array.from({ length: 18 }, () => Array.from({ length: 22 }, () => '.'));
      s.floors[ix].explored = s.floors[ix].grid.map((r) => r.map(() => false));
      s.floorIx = ix; s.where = 'crawl'; s.pose = { x: 9, z: 9, a: 0 };
      localStorage.setItem('quest-borg-save-v3', JSON.stringify(s));
    });
    await t.page.reload(); await t.wait(600);
    await t.page.click('#btnContinue'); await t.wait(1500);
    const grid = await S(() => { const s = Q.debug(); const f = s.floors[s.floorIx]; return `${f.grid.length}x${f.grid[0].length}`; });
    const gaol = await S(() => Q.debug().party.map((p) => p.gaol));
    const where = await t.where();
    check(grid === '31x40' && where[0] === 18 && where[1] === 15, 'the old save is moved onto today’s town, at the grate', { grid, where });
    check(gaol.every(Boolean), 'and the two who escaped are known as the two from the Gaol', gaol);
    for (let i = 0; i < 3; i++) await t.step();
    const clock = await S(() => Q.debug().clock);
    check(clock && clock.phase === 'night' && clock.left === 22, 'and its clock starts', clock);
    await S(() => { Q.debug().calendar.misery = 4; Q.debugHour('day'); });
    await t.wait(1000);
    const counts = await S(() => { const s = Q.debug(); const g = s.floors[s.floorIx].groups.filter((x) => x.alive); return { night: g.filter((x) => x.night).length, day: g.filter((x) => x.day).length }; });
    check(/· Black noon$/.test(await t.place()) && counts.night === 5 && counts.day === 0, 'after the fourth Misery, noon is black and the drowned are out', { place: await t.place(), counts });
  },
};
