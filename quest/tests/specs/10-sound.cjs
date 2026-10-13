// The recorded sounds: every monster's voice loads (two takes each), each place's loop takes over from the
// synthesized bed once it has loaded, and a monster spotting you plays its recording without a fuss.
module.exports = {
  name: 'Sound: recorded monsters and places',
  async run(t) {
    const { S, check } = t;
    const waitFor = async (fn, ms) => { for (let i = 0; i < ms; i += 150) { const v = await fn(); if (v) return v; await t.wait(150); } return null; };
    await t.open();
    await t.newGame(); // the clicks start the audio
    const kinds = await S(() => Object.keys(Q.SFX.monsters));
    const voices = await waitFor(async () => { const r = await S(() => Q.Sound.recorded.voices); return r.length === kinds.length && r; }, 8000);
    check(voices && kinds.length >= 14, 'every monster’s recorded voice has loaded', { kinds: kinds.length, loaded: voices && voices.length });
    check(await S(() => Object.values(Q.SFX.monsters).every((takes) => takes.length === 2)), 'two takes of each, so they don’t repeat');

    // each floor, standing where you arrive on it (its G)
    for (const place of ['gaol', 'undercroft', 'hollow', 'skarnvik']) {
      const at = await S((id) => {
        const grid = Q.debug().floors[Q.FLOORS.findIndex((f) => f.id === id)].grid;
        for (let y = 0; y < grid.length; y++) for (let x = 0; x < grid[y].length; x++) if (grid[y][x] === 'G') return [x, y];
        return null;
      }, place);
      check(at, `${place} has somewhere to arrive`);
      if (!at) continue;
      await t.tp(place, at[0], at[1], 'N');
      const loop = place === 'skarnvik' ? 'town' : place;
      const ok = await waitFor(() => S((loop) => Q.Sound.recorded.loops.includes(loop) && Q.Sound.recorded.bed, loop), 8000);
      check(ok, `${place}: its recorded loop is the bed`, await S(() => Q.Sound.recorded));
      await t.closeAll();
    }

    await S(() => { for (const kind of Object.keys(Q.SFX.monsters)) { Q.Sound.play('alert', { kind, pan: 0.3 }); Q.Sound.play('voice', { kind, dist: 2 }); } });
    await t.wait(500);
    check(true, 'every monster can spot you and growl (no errors below)');
  },
};
