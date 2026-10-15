// The journal: what to do now, spelled out; quests ticked off as they're done, and the deeds written into the
// pair's chapter; when they die, the chapter is closed with what they left unfinished, and the next pair's
// journal says so. Not narrated. After the escape, the city's quests (and the bounties you take) appear.
module.exports = {
  name: 'Journal: what to do, and what the dead did',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    await t.open();
    await t.newGame();
    const journal = async () => { await S(() => document.getElementById('tJournal').click()); await waitModal(); return t.body(); };

    check(await S(() => Q.debug().log.some((l) => /New in the journal/.test(l.html))), 'the log says the journal has something in it');
    let body = await journal();
    check(await t.title() === 'Journal' && /Now/.test(body) && /Get out of your cell/.test(body) && /wrench the rusted hinge/.test(body), 'the journal opens on what to do now, spelled out', body.slice(0, 160));
    await t.wait(1200);
    check(!(await S(() => Q.Voice.speaking)), 'the narrator doesn’t read the journal');
    await choose(/Close/);

    // out of the cell: ticked off, and the next step says where to go
    await S(() => { Q.debug().floors[0].grid[2][1] = 'D'; Q.Journal.update(Q.debug()); });
    body = await journal();
    check(/evidence room/.test(body) && /through the infirmary/.test(body), 'next: the evidence room, and how to get there', body.slice(0, 200));
    check(/Broke out of their cell/.test(body), 'what they did is in their chapter');
    await choose(/Close/);
    await page.keyboard.press('j');
    check(await waitModal() === 'Journal', 'J opens it too');
    await choose(/Close/);

    // they die in the Gaol: their chapter closes, and the next pair's journal remembers
    const first = await S(() => Q.debug().party.map((p) => p.name));
    await S(() => Q.debugDie('a test'));
    await waitModal();
    await choose(/New wretches in the Gaol/);
    await t.wait(300);
    await page.click('#btnAccept');
    for (let i = 0; i < 2; i++) { await waitModal(); await (await page.$('#modalButtons button')).click(); await t.wait(300); }
    await t.closeAll();
    body = await journal();
    check(/The dead/.test(body) && body.includes(first[0]) && /Killed by a test/.test(body) && /Left unfinished: Out of the Brine Gaol/.test(body), 'the dead pair’s chapter: what they did, how they died, what they left', body.slice(-260));
    check(/died with this unfinished/.test(body) && /the last one at the east end/.test(body), 'the quest says they died with it unfinished, and what the new pair must do');
    await choose(/Close/);

    // up in the city: the city's quests
    await t.escaped();
    await S(() => { const s = Q.debug(); s.flags.freed = s.flags.livingName; s.bounties = s.bounties || { posted: [], taken: {} }; s.bounties.taken.rats = 1; Q.Journal.update(s); });
    body = await journal();
    check(/Why Skarnvik sinks/.test(body) && /Find the Stranger/.test(body) && /Gallows Square/.test(body), 'up in the city: find the Stranger, and where', body.slice(0, 200));
    check(/Lantern Row/.test(body) && /the Gutter/.test(body) && /Bounty: Rats in the drains/.test(body) && /1 of 3/.test(body), 'and the side quests: the family, the freed man, a bounty taken');
    check(/Climbed out of the Brine Gaol/.test(body) || /Out of the Brine Gaol/.test(body), 'the Gaol is done');
    await choose(/Close/);
  },
};
