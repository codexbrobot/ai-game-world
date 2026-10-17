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
      [{ kind: 'weapon', item: { name: 'Warhammer', die: 99 } }, /Warhammer.*d99 damage/s, 'a weapon'],
      [{ kind: 'weapon', item: { name: 'Bent nail', die: 0 } }, /Bent nail.*d0 damage/s, 'a worse weapon, the same box'],
      [{ kind: 'armor', item: { name: 'Rusted mail', tier: 99 } }, /Rusted mail.*cut from a corpse/s, 'armor'],
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

    // a weapon or armor isn't swapped in behind your back: the DM asks who takes it, and it goes in the pack
    const held = await S(() => Q.debug().party.map((p) => p.weapon.name));
    await S((res) => { Q.searchRemains = () => res; const g = Q.debug().floors[0].grid; g[9][2] = 'L'; Q.debugWorld().refreshTile(2, 9); }, { kind: 'weapon', item: { name: 'Warhammer', die: 6 } });
    await t.tp('gaol', 2, 10, 'N', 600);
    await t.step('w', 2200);
    await waitModal();
    await choose(/Take a look/);
    check(await waitModal() === 'In the remains' && /takes it/.test(await t.page.textContent('#modalButtons')), 'a weapon: then the DM asks who takes it');
    await choose(/takes it/);
    await waitModal();
    await choose(/Keep it in the pack/);
    await t.closeAll();
    const now = await S(() => Q.debug().party.map((p) => ({ w: p.weapon.name, pack: p.pack.map((x) => x.name) })));
    check(now.every((p, i) => p.w === held[i]) && now.some((p) => p.pack.includes('Warhammer')), 'it went in a pack, and what they held is still in hand', now);
  },
};
