// The wretches page: the pair is only ever rolled again together; making your own (the DM asks about the
// book: I don't / I own it), two blank sheets, every box needed, saving, editing, and going into the dark.
module.exports = {
  name: 'The wretches page: roll both again, or make your own',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    const names = () => page.$$eval('#sheets .pcname', (els) => els.map((e) => e.textContent));
    await t.open();
    await page.click('#btnNew'); await t.wait(300);
    check(!(await page.$('.reroll[data-i]')) && !(await page.$('.cls-pick')), 'no rolling one wretch again, and no class picker: only the pair');
    const n0 = await names();
    await page.click('#btnReroll'); await t.wait(200);
    const n1 = await names();
    check(n1.length === 2 && n0[0] !== n1[0] && n0[1] !== n1[1], 'roll both again: two new wretches', { n0, n1 });

    await page.click('#btnCustom');
    check(await waitModal() === 'Your own wretches' && /Do you own MÖRK BORG\?/.test(await t.body()), 'making your own: the DM asks if you own the book');
    await choose(/I don’t/);
    check(!(await t.title()) && JSON.stringify(await names()) === JSON.stringify(n1) && !(await page.$('form.custom')), 'I don’t: back to the same rolled wretches');
    await page.click('#btnCustom'); await waitModal();
    await choose(/I own it/);
    check((await page.$$('form.custom')).length === 2 && await page.isVisible('#btnCustomSave') && !(await page.isVisible('#btnAccept')), 'I own it: two blank sheets, and a save button');
    await page.click('#btnCustomSave'); await t.wait(200);
    check(await page.isVisible('#customError') && (await page.$$('.missing')).length === 24, 'saving blank sheets is refused, and the empty boxes are marked');
    const fill = async (i, v) => {
      const f = `form.custom[data-i="${i}"]`;
      await page.fill(`${f} [name=name]`, v.name);
      await page.selectOption(`${f} [name=cls]`, v.cls);
      for (const [k, x] of Object.entries(v.abs)) await page.selectOption(`${f} [name=${k}]`, String(x));
      await page.fill(`${f} [name=maxHp]`, String(v.hp));
      await page.fill(`${f} [name=omens]`, String(v.omens));
      await page.fill(`${f} [name=silver]`, String(v.silver));
      await page.selectOption(`${f} [name=weapon]`, String(v.weapon));
      await page.selectOption(`${f} [name=armor]`, String(v.armor));
      await page.selectOption(`${f} [name=row]`, v.row);
      if (v.trait) await page.fill(`${f} [name=trait]`, v.trait);
    };
    await fill(0, { name: 'Morgo the Unready', cls: 'deserter', abs: { strength: 2, agility: -1, presence: 0, toughness: 1 }, hp: 9, omens: 2, silver: 60, weapon: 5, armor: 1, row: 'front', trait: 'Smells of wet dog.' });
    await page.click('#btnCustomSave'); await t.wait(200);
    check((await page.$$('.missing')).length === 12, 'one sheet filled in is not enough');
    await fill(1, { name: 'Ysolde Nobody', cls: 'none', abs: { strength: -1, agility: 1, presence: 3, toughness: 0 }, hp: 4, omens: 1, silver: 110, weapon: 1, armor: 0, row: 'back' });
    await page.click('#btnCustomSave'); await t.wait(300);
    check(JSON.stringify(await names()) === JSON.stringify(['Morgo the Unready', 'Ysolde Nobody']) && (await page.$$('.edit-own')).length === 2 && await page.isVisible('#btnAccept'), 'both filled in: saved, and shown like rolled wretches');
    await page.click('.edit-own');
    check(await page.inputValue('form.custom[data-i="0"] [name=name]') === 'Morgo the Unready' && await page.inputValue('form.custom[data-i="1"] [name=cls]') === 'none', 'editing by hand brings the sheets back filled in');
    await page.fill('form.custom[data-i="0"] [name=name]', 'Morgo the Ready');
    await page.click('#btnCustomSave'); await t.wait(300);
    await page.click('#btnAccept');
    await waitModal();
    const party = await S(() => Q.debug().party.map((p) => ({ name: p.name, cls: p.cls || null, strength: p.strength, presence: p.presence, maxHp: p.maxHp, omens: p.omens, row: p.row,
      stash: p.stash && `${p.stash.weapon.name}/${p.stash.armor.name}/${p.stash.silver}s` })));
    check(party[0].name === 'Morgo the Ready' && party[0].cls === 'deserter' && party[0].strength === 2 && party[0].maxHp === 9 && party[0].stash === 'Sword/Boiled leather/60s'
      && party[1].cls === null && party[1].presence === 3 && party[1].row === 'back' && party[1].stash === 'Knife/Rags/110s', 'your own wretches wake in the Gaol, their gear in the evidence room', party);
  },
};
