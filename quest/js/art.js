// The flat pictures: the town of Skarnvik and the map. (The dungeon itself is 3D: src/engine.js.)
// The look is Mörk Borg's: black ink, scratched bone-white lines, acid yellow and a wound of pink.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const INK = '#0a0a08';
  const BONE = '#e9e2cc';
  const DIM = '#8d8673';
  const YELLOW = '#ffe11a';
  const PINK = '#ff3d8b';

  // Seeded random numbers, so scratches stay put from frame to frame.
  function rng(seed) {
    let h = 2166136261;
    for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return () => {
      h = (h + 0x6d2b79f5) | 0;
      let t = Math.imul(h ^ (h >>> 15), 1 | h);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // A hand-scratched polyline: drawn a few times, each pass slightly off.
  function scratch(ctx, pts, r, jitter, passes = 2) {
    for (let p = 0; p < passes; p++) {
      ctx.beginPath();
      pts.forEach(([x, y], i) => {
        const jx = x + (r() - 0.5) * jitter, jy = y + (r() - 0.5) * jitter;
        if (i) ctx.lineTo(jx, jy); else ctx.moveTo(jx, jy);
      });
      ctx.stroke();
    }
  }

  function canvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return c;
  }

  // ---------- painted assets ----------
  // Generated images in assets/ (see tools/make_art.py). Until one loads, the drawn fallback is used.
  const IMG = {};
  const SCENE_NAMES = ['town'];

  function loadArt(onLoad) {
    const names = SCENE_NAMES;
    let pending = names.length;
    for (const name of names) {
      const im = new Image();
      im.decoding = 'async';
      const done = () => { pending -= 1; if (onLoad) onLoad(name, pending); };
      im.onload = done;
      im.onerror = done;
      im.src = assetUrl(name);
      IMG[name] = im;
    }
  }

  function assetUrl(name) { return `assets/${name}.webp`; }
  function art(name) {
    const im = IMG[name];
    return im && im.complete && im.naturalWidth ? im : null;
  }

  // Which wretch portrait goes with a name.
  function portraitUrl(name) {
    let h = 0;
    for (const ch of String(name)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return assetUrl(`wretch-${h % 8}`);
  }

  // ---------- photocopier grain ----------
  let textures = null;

  function grainTexture(w, h) {
    const c = canvas(w, h), g = c.getContext('2d');
    const img = g.createImageData(w, h);
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() * 255;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = Math.random() < 0.5 ? 26 : 0;
    }
    g.putImageData(img, 0, 0);
    return c;
  }

  function getTextures() {
    if (!textures) textures = { grain: grainTexture(320, 240) };
    return textures;
  }

  // ---------- the town of Skarnvik ----------
  function drawTown(ctx, W, H) {
    const im = art('town');
    if (im) {
      // cover the frame, anchored to the bottom
      const k = Math.max(W / im.naturalWidth, H / im.naturalHeight);
      const w = im.naturalWidth * k, h = im.naturalHeight * k;
      ctx.drawImage(im, (W - w) / 2, H - h, w, h);
      return;
    }
    const r = rng('skarnvik');
    ctx.fillStyle = INK; ctx.fillRect(0, 0, W, H);
    // the comet: a yellow gash across the sky, pink tail
    ctx.save();
    ctx.translate(W * 0.78, H * 0.18); ctx.rotate(-0.42);
    const tail = ctx.createLinearGradient(-W * 0.75, 0, 0, 0);
    tail.addColorStop(0, 'rgba(255,61,139,0)'); tail.addColorStop(0.7, 'rgba(255,61,139,0.55)'); tail.addColorStop(1, YELLOW);
    ctx.fillStyle = tail;
    ctx.beginPath(); ctx.moveTo(-W * 0.75, -3); ctx.lineTo(0, -H * 0.03); ctx.lineTo(0, H * 0.03); ctx.lineTo(-W * 0.75, 3); ctx.fill();
    ctx.fillStyle = YELLOW; ctx.beginPath(); ctx.arc(0, 0, H * 0.035, 0, 7); ctx.fill();
    ctx.strokeStyle = YELLOW; ctx.lineWidth = 1.5;
    for (let k = 0; k < 14; k++) scratch(ctx, [[-r() * W * 0.5, (r() - 0.5) * H * 0.06], [-r() * W * 0.1, (r() - 0.5) * H * 0.02]], r, 2, 1);
    ctx.restore();
    // stars like pinpricks
    ctx.fillStyle = BONE;
    for (let k = 0; k < 60; k++) ctx.fillRect(r() * W, r() * H * 0.55, 1.4, 1.4);

    const ground = H * 0.78;
    // the crooked town
    const houses = 9;
    for (let i = 0; i < houses; i++) {
      const w = W / houses * (0.9 + r() * 0.5), x = (i / houses) * W - 10 + r() * 14;
      const h = H * (0.18 + r() * 0.2), lean = (r() - 0.5) * 18;
      ctx.fillStyle = '#121110';
      ctx.beginPath();
      ctx.moveTo(x, ground); ctx.lineTo(x + lean * 0.5, ground - h); ctx.lineTo(x + w / 2 + lean, ground - h - H * (0.06 + r() * 0.1));
      ctx.lineTo(x + w + lean * 0.5, ground - h); ctx.lineTo(x + w, ground); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(233,226,204,0.5)'; ctx.lineWidth = 1.4;
      scratch(ctx, [[x, ground], [x + lean * 0.5, ground - h], [x + w / 2 + lean, ground - h - H * 0.09], [x + w + lean * 0.5, ground - h]], r, 2, 1);
      // windows: a few lit yellow, one pink
      for (let k = 0; k < 2; k++) {
        if (r() < 0.55) {
          ctx.fillStyle = r() < 0.15 ? PINK : YELLOW;
          ctx.fillRect(x + w * (0.2 + r() * 0.5) + lean * 0.3, ground - h * (0.3 + r() * 0.5), 7, 10);
        }
      }
    }
    // the leaning church spire
    ctx.fillStyle = '#0f0e0d';
    ctx.beginPath(); ctx.moveTo(W * 0.42, ground); ctx.lineTo(W * 0.44, H * 0.3); ctx.lineTo(W * 0.475, H * 0.1); ctx.lineTo(W * 0.5, H * 0.31); ctx.lineTo(W * 0.51, ground); ctx.fill();
    ctx.strokeStyle = BONE; ctx.lineWidth = 2;
    scratch(ctx, [[W * 0.42, ground], [W * 0.44, H * 0.3], [W * 0.475, H * 0.1], [W * 0.5, H * 0.31], [W * 0.51, ground]], r, 2, 2);
    scratch(ctx, [[W * 0.475, H * 0.1], [W * 0.475, H * 0.04]], r, 1, 2);
    scratch(ctx, [[W * 0.462, H * 0.06], [W * 0.488, H * 0.06]], r, 1, 2);
    // gallows with a hanged wretch
    const gx = W * 0.14;
    ctx.strokeStyle = BONE; ctx.lineWidth = 4;
    scratch(ctx, [[gx, ground], [gx, H * 0.36], [gx + W * 0.11, H * 0.36]], r, 2, 2);
    ctx.lineWidth = 2.5; scratch(ctx, [[gx, H * 0.44], [gx + W * 0.04, H * 0.36]], r, 1.5, 2);
    ctx.lineWidth = 1.2; scratch(ctx, [[gx + W * 0.1, H * 0.36], [gx + W * 0.1, H * 0.46]], r, 1, 1);
    ctx.fillStyle = INK; ctx.strokeStyle = BONE; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(gx + W * 0.1, H * 0.475, 7, 0, 7); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(gx + W * 0.093, H * 0.49); ctx.lineTo(gx + W * 0.088, H * 0.6); ctx.lineTo(gx + W * 0.112, H * 0.6); ctx.lineTo(gx + W * 0.107, H * 0.49); ctx.fill(); ctx.stroke();
    // ground, with mud strokes
    ctx.fillStyle = '#0d0c0b'; ctx.fillRect(0, ground, W, H - ground);
    ctx.strokeStyle = 'rgba(141,134,115,0.6)'; ctx.lineWidth = 1;
    for (let k = 0; k < 40; k++) { const x = r() * W, y = ground + 4 + r() * (H - ground - 6); scratch(ctx, [[x, y], [x + 10 + r() * 30, y + (r() - 0.5) * 3]], r, 1, 1); }
    ctx.strokeStyle = YELLOW; ctx.lineWidth = 3;
    scratch(ctx, [[0, ground], [W * 0.3, ground - 3], [W * 0.6, ground + 2], [W, ground - 2]], r, 2, 2);
    ctx.globalAlpha = 0.9; ctx.drawImage(getTextures().grain, 0, 0, W, H); ctx.globalAlpha = 1;
  }

  // ---------- the map ----------
  function drawMap(ctx, W, H, view) {
    const { grid, explored, x, y, monsters, mini } = view;
    const angle = view.a !== undefined ? view.a + Math.PI / 2 : (view.dir * Math.PI) / 2;
    const where = view.monsterPos || ((m) => m);
    const rows = grid.length, cols = grid[0].length;
    const cs = Math.floor(Math.min(W / cols, H / rows));
    const ox = Math.floor((W - cs * cols) / 2), oy = Math.floor((H - cs * rows) / 2);
    const r = rng('map');
    ctx.clearRect(0, 0, W, H);
    if (!mini) { ctx.fillStyle = INK; ctx.fillRect(0, 0, W, H); }
    const seen = (gx, gy) => explored[gy] && explored[gy][gx];
    for (let gy = 0; gy < rows; gy++) {
      for (let gx = 0; gx < cols; gx++) {
        const t = grid[gy][gx];
        const px = ox + gx * cs, py = oy + gy * cs;
        if (t === '#') {
          // only walls next to explored floor are drawn
          let near = false;
          for (const [dx, dy] of DIRS) if (seen(gx + dx, gy + dy) && grid[gy + dy][gx + dx] !== '#') near = true;
          if (near) { ctx.fillStyle = '#3a352b'; ctx.fillRect(px, py, cs, cs); }
          continue;
        }
        if (!seen(gx, gy)) continue;
        ctx.fillStyle = '#d9d1b8'; ctx.fillRect(px + 1, py + 1, cs - 2, cs - 2);
        const mark = { D: '▮', G: '▲', '<': '▲', '>': '▼', L: '✚', S: '✚', F: '◍', R: '✶' }[t];
        if (mark) {
          ctx.fillStyle = t === 'R' ? PINK : INK;
          ctx.font = `bold ${Math.floor(cs * 0.7)}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(mark, px + cs / 2, py + cs / 2 + 1);
        }
      }
    }
    for (const m of monsters) {
      const p = where(m);
      if (m.hp > 0 && m.seen && seen(Math.round(p.x), Math.round(p.y))) {
        ctx.fillStyle = PINK;
        ctx.beginPath(); ctx.arc(ox + p.x * cs + cs / 2, oy + p.y * cs + cs / 2, cs * 0.28, 0, 7); ctx.fill();
      }
    }
    // the wretch: a yellow arrow
    ctx.save();
    ctx.translate(ox + x * cs + cs / 2, oy + y * cs + cs / 2);
    ctx.rotate(angle);
    ctx.fillStyle = YELLOW; ctx.strokeStyle = INK; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, -cs * 0.42); ctx.lineTo(cs * 0.34, cs * 0.34); ctx.lineTo(0, cs * 0.16); ctx.lineTo(-cs * 0.34, cs * 0.34); ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.restore();
    if (mini) return;
    ctx.strokeStyle = 'rgba(255,225,26,0.35)'; ctx.lineWidth = 2;
    scratch(ctx, [[ox - 3, oy - 3], [ox + cs * cols + 3, oy - 3], [ox + cs * cols + 3, oy + cs * rows + 3], [ox - 3, oy + cs * rows + 3], [ox - 3, oy - 3]], r, 2, 1);
  }

  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  Object.assign(Q, { drawTown, drawMap, DIRS, loadArt, assetUrl, portraitUrl });
})();
