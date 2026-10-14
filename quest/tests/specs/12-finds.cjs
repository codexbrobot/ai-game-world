// Searching remains: every find gets a DM box saying what it is and what it does (and the narrator reads it),
// not just a sound and a line in the log. Each result is forced in turn on the same spot in the infirmary.
module.exports = {
  name: 'Finds: a DM box for everything in the remains',
  async run(t) {
    const { S, check, waitModal, choose } = t;
    await t.open();
    await t.newGame();
    await S(() => { const s = Q.debug(); s.scenes.infirmary = true; s.party.forEach((p) => { p.hp = p.maxHp = 40; }); });

    // the scroll under the bones
    await t.tp('gaol', 2, 6, 'S', 600);
    await t.step('w', 2200);
    check(await waitModal() === 'Under the bones' && /Psalm of Black Flame/.test(await t.body()) && /Presence DR 12/.test(await t.body()), 'the scroll: its name, what it does, and how to read it', (await t.body()).slice(0, 120));
    check(await S(() => Q.Voice.find(document.querySelector('#modalBody p').textContent) >= 0), 'and the narrator has it');
    await choose(/Take it/);
    check(await S(() => Q.debug().scrolls.includes('flame')), 'and you have it');

    const cases = [
      [{ kind: 'silver', amount: 7 }, /7 silver/, 'silver'],
      [{ kind: 'poultice' }, /poultice.*d6 HP back/s, 'a poultice, and what it does'],
      [{ kind: 'omen' }, /One more Omen.*roll again/s, 'an Omen, and what it’s for'],
      [{ kind: 'weapon', item: { name: 'Warhammer', die: 99 } }, /Warhammer.*d99.*takes it/s, 'a better weapon, taken up'],
      [{ kind: 'weapon', item: { name: 'Bent nail', die: 0 } }, /Bent nail.*leave it/s, 'a worse weapon, left'],
      [{ kind: 'armor', item: { name: 'Rusted mail', tier: 99 } }, /Rusted mail.*puts it on/s, 'armor, put on'],
      [{ kind: 'hand', dmg: 1 }, /cold hand/, 'the grasping hand'],
    ];
    for (const [res, re, what] of cases) {
      await S((res) => { Q.searchRemains = () => res; const g = Q.debug().floors[0].grid; g[9][2] = 'L'; Q.debugWorld().refreshTile(2, 9); }, res);
      await t.tp('gaol', 2, 10, 'N', 600);
      await t.step('w', 2200);
      const title = await waitModal();
      const body = await t.body();
      const voiced = await S(() => [...document.querySelectorAll('#modalBody p')].every((p) => Q.Voice.find(p.textContent, Q.debug().party.flatMap((x) => [x.name, x.name.split(' ')[0]])) >= 0));
      check(title === 'In the remains' && re.test(body) && voiced, `${what}: a box saying so, read aloud`, { title, body: body.slice(0, 110), voiced });
      await t.closeAll();
    }
  },
};
