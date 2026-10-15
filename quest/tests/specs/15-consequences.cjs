// Dying in the city has consequences. A day goes by before new wretches pick it up, or a week if the dead left
// side quests unfinished, and those go on without them, for good: the family in Lantern Row stops waiting,
// the freed man leaves the Gutter, the hanged man gathers company, the bounties go to someone else. A narrated
// box says so when the heirs wake, and the journal marks the lost quests.
module.exports = {
  name: 'Death’s consequences: time passes, and the world moves on',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    const heirs = async () => {
      await waitModal();
      await choose(/New wretches in Skarnvik/);
      await t.wait(300);
      await page.click('#btnAccept');
      check(await waitModal() === 'Skarnvik', 'new wretches wake in Skarnvik');
      await choose(/Go on/);
      const title = await waitModal();
      const body = await t.body();
      await choose(/Go on/);
      await t.closeAll(); // and a Misery, if the days brought one
      return { title, body };
    };
    const days = () => S(() => ({ misery: Q.debug().calendar.misery, days: Q.debug().calendar.days }));
    const passed = (a, b, n) => b.misery > a.misery || a.days - b.days === n;

    await t.open();
    await t.newGame();
    await t.escaped();

    // nothing left open: a day
    await S(() => { const s = Q.debug(); s.flags.kinDone = true; s.flags.knownName = s.flags.knownName || 'Old Sigrun'; });
    let before = await days();
    await S(() => Q.debugDie('a test'));
    check(/A day goes by before they do/.test(await t.body()), 'the death screen: a day goes by');
    let box = await heirs();
    check(box.title === 'A day later' && /A day goes by/.test(box.body), 'a day later', box);
    check(passed(before, await days(), 1), 'a day off the Calendar', [before, await days()]);

    // the family waiting, the freed man owed, a bounty taken: a week, and they're gone
    await t.closeAll();
    await S(() => { const s = Q.debug(); s.flags.kinDone = false; s.flags.freed = s.flags.livingName; s.scenes.freed = true; s.flags.freedPaid = false;
      s.bounties = s.bounties || { posted: [], taken: {} }; s.bounties.posted = ['rats']; s.bounties.taken = { rats: 1 }; });
    before = await days();
    await S(() => Q.debugDie('another test'));
    check(/not for a week/.test(await t.body()) && /Lantern Row/.test(await t.body()), 'the death screen: not for a week, and why');
    box = await heirs();
    check(box.title === 'A week later' && /boarded up/.test(box.body) && /gone from his corner of the Gutter/.test(box.body) && /bounties/.test(box.body), 'a week later: the family, the freed man and the bounties are gone', box);
    check(passed(before, await days(), 7), 'seven days off the Calendar', [before, await days()]);
    const after = await S(() => { const s = Q.debug(); return { kin: s.flags.kinGone, freed: s.flags.freedGone, taken: Object.keys(s.bounties.taken).length, posted: s.bounties.posted.includes('rats') }; });
    check(after.kin && after.freed && !after.taken && !after.posted, 'for good', after);
    await S(() => document.getElementById('tJournal').click());
    await waitModal();
    const j = await t.body();
    check(/She stopped waiting/.test(j) && /He left the Gutter/.test(j), 'the journal marks them lost', j.slice(-400));
    await choose(/Close/);

    // the hanged man, left to walk: company
    await S(() => { const s = Q.debug(); s.flags.freed = false; s.flags.promised = true; s.flags.sawDawn = true; s.flags.hangedLaid = false; });
    await S(() => Q.debugDie('a third test'));
    box = await heirs();
    check(/the ones on them walk with him/.test(box.body) && await S(() => Q.debug().flags.hangedFed === 1), 'the hanged man has company now', box);
    // every paragraph of those boxes has its recording
    check(/ 0 don't/.test(require('child_process').execFileSync('node', [require('path').join(__dirname, '..', '..', 'tools', 'voice', 'check.cjs')], { encoding: 'utf8' })), 'and the narrator has every line');
  },
};
