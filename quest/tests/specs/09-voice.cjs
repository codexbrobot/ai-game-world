// The narrator: every paragraph finds its recording (tools/voice/check.cjs, over the whole script), the first
// box is read aloud in order while the ambience is hushed, closing a box stops him, a box with a wretch's
// name and a die roll in it is read too, and Settings turns him off and on.
const path = require('path');
const { execFileSync } = require('child_process');

module.exports = {
  name: 'Voice: the narrator reads the boxes',
  async run(t) {
    const { S, check, page, waitModal, choose } = t;

    let out = '';
    try { out = execFileSync('node', [path.join(__dirname, '..', '..', 'tools', 'voice', 'check.cjs')], { encoding: 'utf8' }); } catch (e) { out = e.stdout || e.message; }
    check(/ 0 don't/.test(out), 'every paragraph in the script finds its own recording', out.split('\n')[0]);

    await t.open();
    check(await S(() => Q.Voice.supported && Q.Voice.enabled && Q.VOICE.clips.length > 300), 'the browser can play them, the narrator is on by default, and the index is loaded');
    // keep a note of what he plays, and of the ambience being hushed
    await S(() => {
      window.heard = []; window.hushes = [];
      const play = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () { window.heard.push(this.src); return play.call(this); };
      const hush = Q.Sound.hush;
      Q.Sound.hush = (on) => { window.hushes.push(on); hush(on); };
    });
    const heard = () => S(() => window.heard.length);
    const waitFor = async (fn, ms) => { for (let i = 0; i < ms; i += 100) { if (await fn()) return true; await t.wait(100); } return false; };

    // the first box of a new run
    await page.click('#btnNew'); await t.wait(200);
    await page.click('#btnAccept');
    await waitModal();
    const found = await S(() => {
      const names = Q.debug().party.flatMap((p) => [p.name, p.name.split(' ')[0]]);
      return [...document.querySelectorAll('#modalBody p')].map((p) => Q.Voice.find(p.textContent, names));
    });
    check(found.length && found.every((ix) => ix >= 0), 'each paragraph of the waking box has a recording', found);
    check(await waitFor(() => S(() => Q.Voice.speaking), 4000), 'he starts reading it');
    check((await S(() => window.hushes)).includes(true), 'the ambience is hushed while he speaks');
    check(found.length < 2 || await waitFor(async () => (await heard()) >= 2, 30000), 'one paragraph after another', { paragraphs: found.length, played: await heard() });

    // a choice closes the box, and he stops
    // (the next box opens at once, and he starts on that: what matters is that this one's recording stops)
    const playing = await S(() => window.heard[window.heard.length - 1]);
    await S(() => { window.stopped = 0; const stop = Q.Voice.stop; Q.Voice.stop = () => { window.stopped++; stop(); }; });
    await (await page.$('#modalButtons button')).click();
    await t.wait(150);
    const now = await S((src) => ({ stopped: window.stopped, still: Q.Voice.speaking && window.heard[window.heard.length - 1] === src }), playing);
    check(now.stopped > 0 && !now.still, 'closing the box stops him', now);
    await t.closeAll();
    await t.wait(400);
    check(await S(() => !Q.Voice.speaking && window.hushes[window.hushes.length - 1] === false), 'and the ambience comes back up');

    // a box with a name and a die in it (the Broken table, matched by pattern)
    await t.escaped({ hp: 10, omens: 0 });
    await t.tp('skarnvik', 16, 12, 'E');
    await S(() => { Q.broken = () => ({ r: 1, kind: 'out', title: 'Unconscious', rounds: 3, hp: 2 }); });
    let before = await heard();
    await S(() => { Q.debug().party[0].hp = 4; Q.debugHurt(0, 4); });
    await waitModal();
    const broken = await S(() => {
      const names = Q.debug().party.flatMap((p) => [p.name, p.name.split(' ')[0]]);
      return [...document.querySelectorAll('#modalBody p')].map((p) => [Q.Voice.find(p.textContent, names), p.textContent.slice(0, 60)]);
    });
    check(broken.every(([ix]) => ix >= 0), 'the Broken box, with a wretch’s name and the die in it, has its recordings', broken);
    check(await waitFor(async () => (await heard()) > before, 4000), 'and he reads it');
    await choose(/Go on/);
    await t.closeAll();

    // Settings: off is kept, and the next box is quiet; then on again
    await S(() => document.getElementById('tSettings').click());
    await waitModal();
    await S(() => document.querySelector('[data-set="voice"][data-val="off"]').click());
    check(await S(() => !Q.Voice.enabled && JSON.parse(localStorage.getItem('quest-voice')).enabled === false), 'Narrator: Off, kept in the browser');
    await t.closeAll();
    before = await heard();
    await S(() => { Q.debug().party[1].hp = 4; Q.debugHurt(1, 4); });
    await waitModal();
    await t.wait(1500);
    check(await heard() === before && !(await S(() => Q.Voice.speaking)), 'with the narrator off, the box is not read', { before, after: await heard() });
    await choose(/Go on/);
    await t.closeAll();
    await S(() => document.getElementById('tSettings').click());
    await waitModal();
    await S(() => document.querySelector('[data-set="voice"][data-val="on"]').click());
    check(await S(() => Q.Voice.enabled), 'and back on');
    await t.closeAll();
  },
};
