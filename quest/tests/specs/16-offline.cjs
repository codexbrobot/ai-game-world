// Losing the connection, and the phone taking the 3D away: the pictures that didn't arrive are fetched again
// once they can be, so the walls don't stay black; a lost 3D view is built again when it comes back; and
// Settings can take you back to the title screen (the run kept) or reload the game.
module.exports = {
  name: 'Offline and back: pictures come back, and a way out to the title',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    // how bright the middle of the view is (0-255)
    const light = async () => {
      const shot = await page.screenshot({ clip: { x: 60, y: 300, width: 260, height: 240 } });
      return S((b64) => new Promise((res) => {
        const im = new Image();
        im.onload = () => { const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0);
          const d = g.getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 0; i < d.length; i += 4) n += d[i] + d[i + 1] + d[i + 2]; res(n / (d.length / 4) / 3); };
        im.src = `data:image/png;base64,${b64}`;
      }), shot.toString('base64'));
    };

    // no connection for the pictures when the game starts
    await page.route('**/assets/*.webp', (route) => route.abort('internetdisconnected'));
    await t.open();
    await t.newGame();
    await t.wait(800);
    const dark = await light();
    await page.unroute('**/assets/*.webp');
    let back = dark;
    for (let i = 0; i < 16 && back < dark + 6; i++) { await t.wait(1000); back = await light(); }
    check(back > dark + 6, 'the walls were black without their pictures; once the connection is back, they come back', { dark, back });

    // the phone takes the 3D away, and gives it back
    await S(() => { const gl = document.querySelector('canvas.world').getContext('webgl2'); window.__lose = gl.getExtension('WEBGL_lose_context'); window.__lose.loseContext(); });
    await t.wait(500);
    await S(() => window.__lose.restoreContext());
    let again = 0;
    for (let i = 0; i < 10 && again < dark + 6; i++) { await t.wait(600); again = await light(); }
    check(again > dark + 6, 'a lost 3D view is built again when it comes back', { dark, again });

    // Settings: back to the title screen, the run kept
    const where = await S(() => [Math.floor(Q.debug().pose.x / 2), Math.floor(Q.debug().pose.z / 2)]);
    await S(() => document.getElementById('tSettings').click());
    await waitModal();
    check(/Reload the game/.test(await page.textContent('#modalButtons')), 'Settings can reload the game');
    await choose(/back to the title screen/);
    check(await page.isVisible('#btnContinue') && await page.isVisible('#btnNew'), 'Settings can take you back to the title screen, with Continue');
    await page.click('#btnContinue');
    await t.wait(800);
    const at = await S(() => [Math.floor(Q.debug().pose.x / 2), Math.floor(Q.debug().pose.z / 2)]);
    check(JSON.stringify(at) === JSON.stringify(where), 'Continue picks it up where you left it', { where, at });
  },
};
