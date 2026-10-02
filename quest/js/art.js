// Everything drawn: the first-person dungeon view, monsters, the town and the map.
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
  const SPRITE_NAMES = ['rats', 'zombie', 'skeleton', 'cultist', 'abbess', 'remains', 'remains-scroll', 'font', 'relic'];
  const SURFACE_NAMES = ['wall-stone', 'wall-ossuary', 'wall-relief', 'door', 'floor', 'ceiling'];
  const SCENE_NAMES = ['town'];

  function loadArt(onLoad) {
    const names = [...SPRITE_NAMES, ...SURFACE_NAMES, ...SCENE_NAMES];
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
  const texW = (t) => t.naturalWidth || t.width;
  const texH = (t) => t.naturalHeight || t.height;

  // Which wretch portrait goes with a name.
  function portraitUrl(name) {
    let h = 0;
    for (const ch of String(name)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return assetUrl(`wretch-${h % 8}`);
  }

  // ---------- wall textures ----------
  const TEX = 256; // textures are drawn on a 128 grid at double resolution
  let textures = null;

  function stoneTexture(variant) {
    const c = canvas(TEX, TEX), g = c.getContext('2d'), r = rng('stone' + variant);
    g.scale(TEX / 128, TEX / 128);
    g.fillStyle = '#16130f'; g.fillRect(0, 0, 128, 128);
    const rows = 5, bh = 128 / rows;
    for (let row = 0; row < rows; row++) {
      const off = row % 2 ? 0.5 : 0;
      for (let col = -1; col < 3; col++) {
        const x0 = (col + off) * 128 / 2.4, y0 = row * bh, bw = 128 / 2.4;
        const shade = 0.75 + r() * 0.5;
        g.fillStyle = `rgb(${34 * shade | 0},${30 * shade | 0},${24 * shade | 0})`;
        g.fillRect(x0 + 2, y0 + 2, bw - 3, bh - 3);
        // hatching on the lower right of each block, like cheap woodcut shading
        g.strokeStyle = 'rgba(0,0,0,0.55)'; g.lineWidth = 1;
        for (let k = 0; k < 6; k++) {
          const t = r();
          g.beginPath(); g.moveTo(x0 + bw * (0.4 + t * 0.6), y0 + bh - 2); g.lineTo(x0 + bw - 2, y0 + bh * (0.3 + t * 0.6)); g.stroke();
        }
        g.strokeStyle = `rgba(233,226,204,${0.18 + r() * 0.2})`; g.lineWidth = 1.2;
        scratch(g, [[x0 + 2, y0 + 2], [x0 + bw - 1, y0 + 2]], r, 1.5, 1);
        g.strokeStyle = 'rgba(0,0,0,0.9)'; g.lineWidth = 2;
        scratch(g, [[x0 + 1, y0 + bh - 1], [x0 + bw, y0 + bh - 1], [x0 + bw, y0 + 1]], r, 1.2, 1);
      }
    }
    // cracks
    g.strokeStyle = 'rgba(0,0,0,0.85)'; g.lineWidth = 1.3;
    for (let k = 0; k < 3; k++) {
      let x = r() * 128, y = r() * 128; const pts = [[x, y]];
      for (let s = 0; s < 5; s++) { x += (r() - 0.5) * 24; y += 6 + r() * 10; pts.push([x, y]); }
      scratch(g, pts, r, 1, 1);
    }
    // graffiti on some walls: a yellow sigil or a pink smear
    if (variant === 1) {
      g.strokeStyle = 'rgba(255,225,26,0.75)'; g.lineWidth = 2.4;
      const cx = 40 + r() * 48, cy = 44 + r() * 30;
      scratch(g, [[cx - 14, cy + 12], [cx, cy - 14], [cx + 14, cy + 12], [cx - 14, cy + 12]], r, 2, 2);
      scratch(g, [[cx - 6, cy + 2], [cx + 6, cy + 2]], r, 2, 2);
      g.beginPath(); g.arc(cx, cy + 3, 2.5, 0, 7); g.fillStyle = 'rgba(255,225,26,0.8)'; g.fill();
    }
    if (variant === 2) {
      g.fillStyle = 'rgba(255,61,139,0.55)';
      const x = 20 + r() * 80;
      g.fillRect(x, 10, 9, 30);
      for (let k = 0; k < 4; k++) g.fillRect(x + r() * 9, 38, 2 + r() * 2, 12 + r() * 40);
    }
    return c;
  }

  function doorTexture() {
    const c = canvas(TEX, TEX), g = c.getContext('2d'), r = rng('door');
    g.scale(TEX / 128, TEX / 128);
    g.drawImage(stoneTexture(0), 0, 0, 128, 128);
    const x0 = 26, x1 = 102, y0 = 18;
    g.fillStyle = '#2a1d12';
    g.beginPath(); g.moveTo(x0, 128); g.lineTo(x0, y0 + 20); g.quadraticCurveTo(64, y0 - 14, x1, y0 + 20); g.lineTo(x1, 128); g.fill();
    g.strokeStyle = 'rgba(0,0,0,0.8)'; g.lineWidth = 2;
    for (let x = x0 + 12; x < x1; x += 13) scratch(g, [[x, y0 + 4], [x, 128]], r, 1.5, 1);
    g.strokeStyle = 'rgba(233,226,204,0.25)'; g.lineWidth = 1;
    for (let k = 0; k < 30; k++) { const x = x0 + r() * (x1 - x0), y = y0 + 10 + r() * 90; scratch(g, [[x, y], [x + 1, y + 6 + r() * 10]], r, 0.5, 1); }
    g.fillStyle = '#4a4438';
    for (const y of [48, 96]) g.fillRect(x0, y, x1 - x0, 6);
    g.fillStyle = YELLOW; g.beginPath(); g.arc(88, 74, 3.5, 0, 7); g.fill();
    g.strokeStyle = BONE; g.lineWidth = 2;
    scratch(g, [[x0, 128], [x0, y0 + 20]], r, 1.5, 2);
    scratch(g, [[x1, 128], [x1, y0 + 20]], r, 1.5, 2);
    return c;
  }

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
    if (!textures) textures = { stone: [0, 1, 2].map(stoneTexture), door: doorTexture(), grain: grainTexture(320, 240) };
    return textures;
  }

  // ---------- the first-person view ----------
  //
  // The camera stands at the back edge of its cell, so the wall just ahead sits at depth 1.
  // A cell `lx` across and `lz` ahead spans x lx±0.5 and depth lz..lz+1. Walls are 1 high.
  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const NEAR = 0.06;
  const MAX_DEPTH = 6;

  let layerCanvas = null;
  function spriteLayer(size) {
    if (!layerCanvas || layerCanvas.width < size) layerCanvas = canvas(Math.max(size, 256), Math.max(size, 256));
    return layerCanvas;
  }

  // Mostly plain stone, some ossuary, the odd carved saint.
  function wallTexture(T, t, gx, gy) {
    const h = (((gx * 7 + gy * 13) % 10) + 10) % 10;
    if (t === 'D') return art('door') || T.door;
    const name = h <= 5 ? 'wall-stone' : h <= 8 ? 'wall-ossuary' : 'wall-relief';
    return art(name) || T.stone[h % 3];
  }

  function fog(z) { return Math.min(0.94, Math.max(0, (z - 0.7) / 5.2)); }

  function drawView(ctx, W, H, view) {
    const { grid, x: px, y: py, dir, monsters, items, fx, now } = view;
    const T = getTextures();
    const F = (W / 2) / Math.tan((68 * Math.PI) / 360);
    const cx = W / 2, cy = H / 2;
    const P = (x, z, y) => [cx + (x / z) * F, cy - (y / z) * F];
    const [fx0, fz0] = DIRS[dir];
    const right = DIRS[(dir + 1) % 4];
    const cellAt = (lx, lz) => [px + fx0 * lz + right[0] * lx, py + fz0 * lz + right[1] * lx];
    const tile = (gx, gy) => (grid[gy] && grid[gy][gx]) || '#';

    ctx.save();
    if (fx.shakeUntil > now) ctx.translate((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8);

    // ceiling and floor
    const ceil = ctx.createLinearGradient(0, 0, 0, cy);
    ceil.addColorStop(0, '#050504'); ceil.addColorStop(1, '#000');
    ctx.fillStyle = ceil; ctx.fillRect(-10, -10, W + 20, cy + 10);
    const floor = ctx.createLinearGradient(0, cy, 0, H);
    floor.addColorStop(0, '#000'); floor.addColorStop(1, '#1c1913');
    ctx.fillStyle = floor; ctx.fillRect(-10, cy, W + 20, H - cy + 10);

    const visible = [];
    for (let lz = MAX_DEPTH; lz >= 0; lz--) {
      const span = lz + 2;
      // outer cells first, centre last
      const order = [];
      for (let k = span; k >= 1; k--) order.push(-k, k);
      order.push(0);
      for (const lx of order) {
        const [gx, gy] = cellAt(lx, lz);
        const t = tile(gx, gy);
        const zN = Math.max(NEAR, lz), zF = lz + 1;
        if (t === '#' || t === 'D') {
          const tex = wallTexture(T, t, gx, gy);
          // the side face that looks toward the centre line
          if (lx !== 0) {
            const sx = lx < 0 ? lx + 0.5 : lx - 0.5;
            sideFace(ctx, P, tex, sx, zN, zF, lz);
            inkEdges(ctx, P, [[sx, zN], [sx, zF]], gx + ',' + gy + 's', (zN + zF) / 2);
          }
          // front face
          if (lz >= 1) {
            const [ax, ay] = P(lx - 0.5, lz, 0.5), [bx, by] = P(lx + 0.5, lz, -0.5);
            ctx.drawImage(tex, ax, ay, bx - ax, by - ay);
            ctx.fillStyle = `rgba(0,0,0,${fog(lz)})`; ctx.fillRect(ax, ay, bx - ax, by - ay);
            inkEdges(ctx, P, [[lx - 0.5, lz], [lx + 0.5, lz]], gx + ',' + gy + 'f', lz);
          }
          continue;
        }
        // open cell: floor and ceiling, marks, then objects
        const floorTex = art('floor'), ceilTex = art('ceiling');
        if (floorTex) flatFace(ctx, P, floorTex, lx, zN, zF, lz, -0.5);
        if (ceilTex) flatFace(ctx, P, ceilTex, lx, zN, zF, lz, 0.5);
        floorMarks(ctx, P, lx, zN, zF, gx, gy, t);
        if (Math.abs(lx) <= lz + 1) visible.push({ lx, lz, gx, gy, t });
        const sprites = [];
        const item = items(gx, gy);
        if (item) sprites.push({ type: 'item', t: item });
        const m = monsters.find((mm) => mm.x === gx && mm.y === gy && mm.hp > 0);
        if (m && lz > 0) sprites.push({ type: 'monster', m });
        if (lz === 0) continue;
        for (const s of sprites) {
          const zc = lz + 0.5;
          const [sx, groundY] = P(lx, zc, -0.5);
          const scale = F / zc;
          // Draw the sprite on its own layer so the fog darkens only the sprite.
          const box = Math.ceil(scale * 1.4);
          const layer = spriteLayer(box);
          const g = layer.getContext('2d');
          g.clearRect(0, 0, box, box);
          if (s.type === 'item') drawItem(g, s.t, box / 2, box - 2, scale, gx + ',' + gy);
          else drawMonster(g, s.m, box / 2, box - 2, scale, fx, now);
          const f = fog(zc);
          if (f > 0.02) {
            g.globalCompositeOperation = 'source-atop';
            g.fillStyle = `rgba(0,0,0,${f * 0.92})`;
            g.fillRect(0, 0, box, box);
            g.globalCompositeOperation = 'source-over';
          }
          ctx.drawImage(layer, 0, 0, box, box, sx - box / 2, groundY - box + 2, box, box);
        }
      }
    }
    ctx.restore();

    // lantern vignette and grain
    const vig = ctx.createRadialGradient(cx, cy * 1.1, H * 0.25, cx, cy, W * 0.72);
    vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 0.9;
    ctx.drawImage(T.grain, 0, 0, W, H);
    ctx.globalAlpha = 1;

    if (fx.flashUntil > now) {
      const a = (fx.flashUntil - now) / 350;
      ctx.fillStyle = fx.flashColor === 'pink' ? `rgba(255,61,139,${0.45 * a})` : `rgba(255,225,26,${0.3 * a})`;
      ctx.fillRect(0, 0, W, H);
    }
    return visible;
  }

  // Scratched bone-white lines along the top and bottom of a wall, and up its ends.
  function inkEdges(ctx, P, [[x0, z0], [x1, z1]], seed, z) {
    const a = 0.75 - fog(z);
    if (a <= 0.04) return;
    const r = rng(seed);
    ctx.strokeStyle = `rgba(233,226,204,${a})`;
    ctx.lineWidth = Math.max(1, 3.2 / Math.max(1, z));
    for (const y of [0.5, -0.5]) scratch(ctx, [P(x0, z0, y), P((x0 + x1) / 2, (z0 + z1) / 2, y), P(x1, z1, y)], r, 2.5, 2);
    for (const [x, zz] of [[x0, z0], [x1, z1]]) {
      if (zz < 0.3) continue;
      scratch(ctx, [P(x, zz, 0.5), P(x, zz, -0.5)], r, 2, 1);
    }
  }

  function sideFace(ctx, P, tex, x, z0, z1, lz) {
    const strips = lz <= 1 ? 14 : 7;
    for (let i = 0; i < strips; i++) {
      const za = z0 + ((z1 - z0) * i) / strips, zb = z0 + ((z1 - z0) * (i + 1)) / strips;
      const [xa, ta] = P(x, za, 0.5), [xb] = P(x, zb, 0.5);
      const [, ba] = P(x, za, -0.5);
      const [, tb] = P(x, zb, 0.5), [, bb] = P(x, zb, -0.5);
      const left = Math.min(xa, xb), w = Math.abs(xb - xa) + 0.8;
      const tw = texW(tex), th = texH(tex);
      const ua = (za - lz) * tw, ub = (zb - lz) * tw; // texture columns
      // draw as a slanted quad: approximate with the larger height, clipped to the trapezoid
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xa, ta); ctx.lineTo(xb, tb); ctx.lineTo(xb, bb); ctx.lineTo(xa, ba); ctx.closePath();
      ctx.clip();
      const top = Math.min(ta, tb), bottom = Math.max(ba, bb);
      ctx.drawImage(tex, Math.min(ua, ub), 0, Math.max(1, Math.abs(ub - ua)), th, left, top, w, bottom - top);
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.96, fog((za + zb) / 2) + 0.18)})`;
      ctx.fillRect(left, top, w, bottom - top);
      ctx.restore();
    }
  }

  // A floor (y = -0.5) or ceiling (y = 0.5) tile, drawn as strips of constant depth.
  function flatFace(ctx, P, tex, lx, z0, z1, lz, y) {
    const strips = lz <= 1 ? 10 : lz <= 3 ? 6 : 3;
    const tw = texW(tex), th = texH(tex);
    for (let i = 0; i < strips; i++) {
      const za = z0 + ((z1 - z0) * i) / strips, zb = z0 + ((z1 - z0) * (i + 1)) / strips;
      const a0 = P(lx - 0.5, za, y), a1 = P(lx + 0.5, za, y), b1 = P(lx + 0.5, zb, y), b0 = P(lx - 0.5, zb, y);
      const top = Math.min(a0[1], b0[1]), bottom = Math.max(a0[1], b0[1]);
      if (bottom < -50 || top > 2000) continue;
      const left = Math.min(a0[0], b0[0]), right = Math.max(a1[0], b1[0]);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(a0[0], a0[1]); ctx.lineTo(a1[0], a1[1]); ctx.lineTo(b1[0], b1[1]); ctx.lineTo(b0[0], b0[1]); ctx.closePath();
      ctx.clip();
      const va = (1 - (za - lz)) * th, vb = (1 - (zb - lz)) * th;
      ctx.drawImage(tex, 0, Math.min(va, vb), tw, Math.max(1, Math.abs(va - vb)), left, top - 0.5, right - left, bottom - top + 1);
      ctx.fillStyle = `rgba(0,0,0,${Math.min(0.97, fog((za + zb) / 2) + (y > 0 ? 0.35 : 0.12))})`;
      ctx.fillRect(left, top - 1, right - left, bottom - top + 2);
      ctx.restore();
    }
  }

  function floorMarks(ctx, P, lx, z0, z1, gx, gy, t) {
    const r = rng(gx + ':' + gy);
    const zm = (z0 + z1) / 2;
    const a = Math.max(0, 0.5 - fog(zm));
    // flagstone seams
    ctx.strokeStyle = `rgba(141,134,115,${a * 0.55})`; ctx.lineWidth = 1;
    const pts = [P(lx - 0.5, z1, -0.5), P(lx + 0.5, z1, -0.5)];
    scratch(ctx, pts, r, 1.5, 1);
    for (let k = 0; k < 2; k++) {
      const x = lx - 0.4 + r() * 0.8, za = z0 + r() * (z1 - z0) * 0.5;
      scratch(ctx, [P(x, Math.max(z0, za), -0.5), P(x + (r() - 0.5) * 0.2, Math.min(z1, za + 0.3), -0.5)], r, 1, 1);
    }
    if ((t === '>' || t === 'G' || t === '<') && z0 >= 0.5) {
      const down = t === '>';
      const c = P(lx, (z0 + z1) / 2, -0.5);
      ctx.save();
      // a black hole in the floor with steps, or a glow from above
      const q = [P(lx - 0.38, z0 + 0.12, -0.5), P(lx + 0.38, z0 + 0.12, -0.5), P(lx + 0.38, z1 - 0.12, -0.5), P(lx - 0.38, z1 - 0.12, -0.5)];
      ctx.beginPath(); q.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
      ctx.fillStyle = down ? '#000' : `rgba(255,225,26,${0.12 + a * 0.4})`;
      ctx.fill();
      ctx.strokeStyle = down ? `rgba(233,226,204,${a + 0.15})` : `rgba(255,225,26,${a + 0.3})`;
      ctx.lineWidth = 1.5;
      for (let k = 1; k <= 4; k++) {
        const z = z0 + 0.12 + ((z1 - z0 - 0.24) * k) / 5;
        scratch(ctx, [P(lx - 0.36, z, -0.5), P(lx + 0.36, z, -0.5)], r, 1.5, 1);
      }
      if (!down) {
        // a shaft of light falling from above
        const [tx, ty] = P(lx, (z0 + z1) / 2, 0.5);
        const grad = ctx.createLinearGradient(tx, ty, c[0], c[1]);
        grad.addColorStop(0, 'rgba(255,225,26,0)'); grad.addColorStop(1, `rgba(255,225,26,${0.1 + a * 0.3})`);
        ctx.fillStyle = grad;
        const [lx0] = P(lx - 0.3, (z0 + z1) / 2, 0.5), [lx1] = P(lx + 0.3, (z0 + z1) / 2, 0.5);
        ctx.beginPath(); ctx.moveTo(lx0, ty); ctx.lineTo(lx1, ty); ctx.lineTo(q[2][0], q[2][1]); ctx.lineTo(q[3][0], q[3][1]); ctx.fill();
      }
      ctx.restore();
    }
  }

  // ---------- items on the floor ----------
  // Heights in world units (a wall is 1 high).
  const ITEM_ART = { L: ['remains', 0.24], S: ['remains-scroll', 0.24], F: ['font', 0.5], f: ['font', 0.5], R: ['relic', 0.55] };
  const MONSTER_ART = { rats: 0.3, zombie: 0.92, skeleton: 0.95, cultist: 0.95, abbess: 1.04 };

  function drawArt(ctx, im, x, y, s, height) {
    const h = height * s, w = h * (im.naturalWidth / im.naturalHeight);
    ctx.drawImage(im, x - w / 2, y - h, w, h);
    return [w, h];
  }

  // Painted items, with a few touches pasted on in code, collage-style.
  function drawItem(ctx, t, x, y, s, seed) {
    const a = ITEM_ART[t];
    const im = a && art(a[0]);
    if (im) {
      ctx.save();
      if (t === 'R') {
        // the Bell-Tongue glows
        const g = ctx.createRadialGradient(x, y - a[1] * s * 0.55, 0, x, y - a[1] * s * 0.55, a[1] * s * 0.75);
        g.addColorStop(0, 'rgba(255,225,26,0.55)'); g.addColorStop(1, 'rgba(255,225,26,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - s, y - a[1] * s * 1.4, 2 * s, a[1] * s * 1.4);
      }
      const [w, h] = drawArt(ctx, im, x, y, s, a[1]);
      if (t === 'F') {
        // pink water brimming in the bowl, and its glow
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = 'rgba(255,61,139,0.7)';
        ctx.beginPath(); ctx.ellipse(x, y - h * 0.86, w * 0.34, h * 0.075, 0, 0, Math.PI * 2); ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        const g = ctx.createRadialGradient(x, y - h * 0.9, 0, x, y - h * 0.9, w * 0.6);
        g.addColorStop(0, 'rgba(255,61,139,0.35)'); g.addColorStop(1, 'rgba(255,61,139,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - w, y - h * 1.5, w * 2, h);
      }
      if (t === 'S') {
        // a yellow scroll on the heap
        ctx.translate(x + w * 0.18, y - h * 0.22);
        ctx.rotate(-0.28);
        ctx.fillStyle = YELLOW; ctx.strokeStyle = INK; ctx.lineWidth = Math.max(1, s * 0.006);
        ctx.fillRect(-s * 0.075, -s * 0.024, s * 0.15, s * 0.048);
        ctx.strokeRect(-s * 0.075, -s * 0.024, s * 0.15, s * 0.048);
        ctx.fillStyle = INK;
        ctx.fillRect(-s * 0.05, -s * 0.008, s * 0.1, s * 0.005);
        ctx.fillRect(-s * 0.05, s * 0.005, s * 0.07, s * 0.005);
      }
      ctx.restore();
      return;
    }
    const r = rng('item' + seed);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (t === 'L' || t === 'S') {
      // a heap of bones and rags; a scroll glints yellow
      ctx.fillStyle = '#16130f';
      ctx.beginPath(); ctx.ellipse(0, -0.03, 0.26, 0.07, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = BONE; ctx.lineWidth = 0.014;
      for (let k = 0; k < 5; k++) {
        const a = r() * Math.PI, l = 0.08 + r() * 0.08, ox = (r() - 0.5) * 0.3;
        scratch(ctx, [[ox - Math.cos(a) * l, -0.04 - Math.sin(a) * 0.02], [ox + Math.cos(a) * l, -0.06 + Math.sin(a) * 0.02]], r, 0.01, 1);
      }
      // the skull
      ctx.fillStyle = BONE;
      ctx.beginPath(); ctx.ellipse(-0.05, -0.1, 0.06, 0.055, 0.2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = INK;
      ctx.beginPath(); ctx.arc(-0.07, -0.1, 0.014, 0, 7); ctx.arc(-0.03, -0.095, 0.014, 0, 7); ctx.fill();
      if (t === 'S') {
        ctx.fillStyle = YELLOW;
        ctx.save(); ctx.translate(0.11, -0.07); ctx.rotate(-0.3);
        ctx.fillRect(-0.06, -0.02, 0.12, 0.04);
        ctx.fillStyle = INK; ctx.fillRect(-0.04, -0.008, 0.08, 0.004); ctx.fillRect(-0.04, 0.004, 0.06, 0.004);
        ctx.restore();
      }
    } else if (t === 'F') {
      // a black font of pink water
      ctx.fillStyle = '#1e1a14'; ctx.strokeStyle = BONE; ctx.lineWidth = 0.012;
      ctx.beginPath(); ctx.moveTo(-0.08, 0); ctx.lineTo(-0.05, -0.25); ctx.lineTo(0.05, -0.25); ctx.lineTo(0.08, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(0, -0.28, 0.2, 0.06, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = PINK; ctx.beginPath(); ctx.ellipse(0, -0.285, 0.16, 0.04, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,61,139,0.2)'; ctx.beginPath(); ctx.arc(0, -0.32, 0.22, 0, 7); ctx.fill();
    } else if (t === 'f') {
      ctx.fillStyle = '#1e1a14'; ctx.strokeStyle = DIM; ctx.lineWidth = 0.012;
      ctx.beginPath(); ctx.moveTo(-0.08, 0); ctx.lineTo(-0.05, -0.25); ctx.lineTo(0.05, -0.25); ctx.lineTo(0.08, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(0, -0.28, 0.2, 0.06, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    } else if (t === 'R') {
      // the Bell-Tongue on a bone altar, glowing
      const glow = ctx.createRadialGradient(0, -0.35, 0, 0, -0.35, 0.35);
      glow.addColorStop(0, 'rgba(255,225,26,0.55)'); glow.addColorStop(1, 'rgba(255,225,26,0)');
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, -0.35, 0.35, 0, 7); ctx.fill();
      ctx.fillStyle = '#16130f'; ctx.strokeStyle = BONE; ctx.lineWidth = 0.012;
      ctx.fillRect(-0.16, -0.22, 0.32, 0.22); ctx.strokeRect(-0.16, -0.22, 0.32, 0.22);
      ctx.fillStyle = YELLOW;
      ctx.beginPath(); ctx.moveTo(-0.05, -0.24); ctx.quadraticCurveTo(0, -0.5, 0.05, -0.24); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.arc(0, -0.25, 0.022, 0, 7); ctx.fill();
    }
    ctx.restore();
  }

  // ---------- monsters ----------
  // Each is drawn in a box 1 unit tall with its feet at the origin.
  function drawMonster(ctx, m, x, y, s, fx, now) {
    const r = rng(m.id);
    const hurt = fx.hitId === m.id && fx.hitUntil > now;
    const lunge = fx.lungeId === m.id && fx.lungeUntil > now;
    ctx.save();
    ctx.translate(x + (hurt ? (Math.random() - 0.5) * s * 0.06 : 0), y);
    const k = lunge ? 1.12 : 1;
    ctx.scale(s * k, s * k);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const im = art(m.kind);
    if (im) {
      // the image is drawn in unit space: scale back out so it stays crisp
      ctx.scale(1 / s, 1 / s);
      if (m.kind === 'rats') {
        // one painted rat, three times over: a swarm
        for (const [dx, dy, k, flip] of [[-0.2, -0.05, 0.75, -1], [0.22, -0.04, 0.7, 1], [0, 0, 1, 1]]) {
          ctx.save();
          ctx.translate(dx * s, dy * s);
          ctx.scale(flip, 1);
          drawArt(ctx, im, 0, 0, s, MONSTER_ART.rats * k);
          ctx.restore();
        }
      } else {
        drawArt(ctx, im, 0, 0, s, MONSTER_ART[m.kind]);
      }
      ctx.scale(s, s);
    } else {
      ({ rats: drawRats, zombie: drawZombie, skeleton: drawSkeleton, cultist: drawCultist, abbess: drawAbbess })[m.kind](ctx, r, m);
    }
    if (hurt) {
      ctx.fillStyle = PINK;
      const sr = rng(m.id + 'blood' + Math.floor(fx.hitUntil));
      for (let i = 0; i < 9; i++) {
        ctx.beginPath(); ctx.arc((sr() - 0.5) * 0.4, -0.3 - sr() * 0.45, 0.01 + sr() * 0.035, 0, 7); ctx.fill();
      }
    }
    ctx.restore();
  }

  function eyes(ctx, pts, color, rad) {
    ctx.save();
    ctx.shadowColor = color; ctx.shadowBlur = 12;
    ctx.fillStyle = color;
    for (const [x, y] of pts) { ctx.beginPath(); ctx.arc(x, y, rad, 0, 7); ctx.fill(); }
    ctx.restore();
  }

  function outline(ctx, r, pts, width = 0.012, color = BONE) {
    ctx.strokeStyle = color; ctx.lineWidth = width;
    scratch(ctx, pts, r, 0.012, 2);
  }

  function drawRats(ctx, r) {
    for (let i = 0; i < 6; i++) {
      const ox = (i % 3 - 1) * 0.2 + (r() - 0.5) * 0.08, oy = -0.02 - Math.floor(i / 3) * 0.06 - r() * 0.03;
      const dirn = r() < 0.5 ? -1 : 1, sz = 0.8 + r() * 0.4;
      ctx.save(); ctx.translate(ox, oy); ctx.scale(dirn * sz, sz);
      ctx.fillStyle = '#121010';
      ctx.beginPath(); ctx.ellipse(0, -0.05, 0.1, 0.05, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(0.08, -0.07); ctx.lineTo(0.16, -0.05); ctx.lineTo(0.08, -0.03); ctx.fill();
      ctx.strokeStyle = BONE; ctx.lineWidth = 0.009;
      ctx.beginPath(); ctx.ellipse(0, -0.05, 0.1, 0.05, 0, 0, Math.PI * 2); ctx.stroke();
      outline(ctx, r, [[0.08, -0.07], [0.16, -0.05], [0.08, -0.03]], 0.008);
      outline(ctx, r, [[0.05, -0.095], [0.07, -0.125], [0.085, -0.09]], 0.008);
      ctx.strokeStyle = PINK; ctx.lineWidth = 0.008;
      scratch(ctx, [[-0.1, -0.04], [-0.2, -0.02], [-0.28, -0.06]], r, 0.01, 1);
      eyes(ctx, [[0.1, -0.065]], YELLOW, 0.008);
      ctx.restore();
    }
  }

  function drawZombie(ctx, r) {
    ctx.fillStyle = '#141712';
    ctx.beginPath();
    ctx.moveTo(-0.17, 0); ctx.lineTo(-0.2, -0.45); ctx.lineTo(-0.15, -0.68); ctx.lineTo(-0.03, -0.74);
    ctx.lineTo(0.12, -0.7); ctx.lineTo(0.2, -0.45); ctx.lineTo(0.16, 0); ctx.closePath(); ctx.fill();
    // shroud rags
    ctx.strokeStyle = DIM; ctx.lineWidth = 0.009;
    for (let k = 0; k < 7; k++) { const x = -0.16 + k * 0.05; scratch(ctx, [[x, -0.6 + r() * 0.1], [x + (r() - 0.5) * 0.04, -0.02]], r, 0.01, 1); }
    outline(ctx, r, [[-0.17, 0], [-0.2, -0.45], [-0.15, -0.68], [-0.03, -0.74], [0.12, -0.7], [0.2, -0.45], [0.16, 0]]);
    // reaching arms
    ctx.strokeStyle = '#6f7a5e'; ctx.lineWidth = 0.05;
    ctx.beginPath(); ctx.moveTo(-0.13, -0.62); ctx.lineTo(-0.24, -0.5); ctx.lineTo(-0.1, -0.44); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0.13, -0.62); ctx.lineTo(0.27, -0.52); ctx.lineTo(0.16, -0.43); ctx.stroke();
    outline(ctx, r, [[-0.1, -0.44], [-0.04, -0.42]], 0.01);
    // head, lolling
    ctx.save(); ctx.translate(-0.02, -0.82); ctx.rotate(-0.25);
    ctx.fillStyle = '#7d8768'; ctx.beginPath(); ctx.ellipse(0, 0, 0.085, 0.1, 0, 0, Math.PI * 2); ctx.fill();
    outline(ctx, r, [[-0.08, 0.02], [-0.06, -0.08], [0.02, -0.1], [0.08, -0.04], [0.07, 0.06], [0, 0.1], [-0.06, 0.07], [-0.08, 0.02]], 0.01, INK);
    ctx.fillStyle = INK;
    ctx.beginPath(); ctx.ellipse(-0.03, -0.01, 0.022, 0.026, 0, 0, 7); ctx.ellipse(0.035, -0.01, 0.02, 0.024, 0, 0, 7); ctx.fill();
    ctx.fillRect(-0.035, 0.045, 0.07, 0.03);
    eyes(ctx, [[-0.03, -0.01], [0.035, -0.01]], YELLOW, 0.008);
    ctx.restore();
    // a wound
    ctx.fillStyle = PINK; ctx.fillRect(0.04, -0.55, 0.05, 0.012); ctx.fillRect(0.06, -0.55, 0.008, 0.08);
  }

  function drawSkeleton(ctx, r) {
    ctx.strokeStyle = BONE; ctx.lineWidth = 0.018;
    // legs
    scratch(ctx, [[-0.07, 0], [-0.06, -0.2], [-0.05, -0.4]], r, 0.01, 2);
    scratch(ctx, [[0.08, 0], [0.06, -0.2], [0.05, -0.4]], r, 0.01, 2);
    // pelvis
    ctx.beginPath(); ctx.ellipse(0, -0.42, 0.08, 0.035, 0, 0, Math.PI * 2); ctx.stroke();
    // spine and ribs
    scratch(ctx, [[0, -0.42], [0, -0.72]], r, 0.008, 2);
    ctx.lineWidth = 0.012;
    for (let k = 0; k < 5; k++) {
      const y = -0.52 - k * 0.04, w = 0.11 - Math.abs(k - 1.5) * 0.015;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.quadraticCurveTo(-w, y + 0.02, -w * 0.9, y + 0.04); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, y); ctx.quadraticCurveTo(w, y + 0.02, w * 0.9, y + 0.04); ctx.stroke();
    }
    // arms: one hangs, one raises a rusted blade
    ctx.lineWidth = 0.016;
    scratch(ctx, [[-0.12, -0.72], [-0.17, -0.55], [-0.15, -0.4]], r, 0.01, 2);
    scratch(ctx, [[0.12, -0.72], [0.22, -0.66], [0.25, -0.8]], r, 0.01, 2);
    ctx.strokeStyle = '#9a6a3a'; ctx.lineWidth = 0.022;
    scratch(ctx, [[0.25, -0.78], [0.2, -1.1]], r, 0.008, 1);
    ctx.strokeStyle = BONE; ctx.lineWidth = 0.016;
    scratch(ctx, [[-0.13, -0.73], [0.13, -0.73]], r, 0.01, 2);
    // skull
    ctx.fillStyle = BONE;
    ctx.beginPath(); ctx.ellipse(0, -0.82, 0.075, 0.085, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(-0.045, -0.77, 0.09, 0.05);
    ctx.fillStyle = INK;
    ctx.beginPath(); ctx.arc(-0.03, -0.83, 0.022, 0, 7); ctx.arc(0.03, -0.83, 0.022, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.moveTo(0, -0.81); ctx.lineTo(-0.01, -0.79); ctx.lineTo(0.01, -0.79); ctx.fill();
    for (let k = -2; k <= 2; k++) ctx.fillRect(k * 0.017 - 0.002, -0.755, 0.004, 0.025);
    eyes(ctx, [[-0.03, -0.83], [0.03, -0.83]], YELLOW, 0.007);
  }

  function drawCultist(ctx, r) {
    // robe
    ctx.fillStyle = '#100d0b';
    ctx.beginPath();
    ctx.moveTo(-0.24, 0); ctx.quadraticCurveTo(-0.2, -0.4, -0.13, -0.68); ctx.quadraticCurveTo(0, -0.98, 0.13, -0.68);
    ctx.quadraticCurveTo(0.2, -0.4, 0.24, 0); ctx.closePath(); ctx.fill();
    outline(ctx, r, [[-0.24, 0], [-0.19, -0.38], [-0.13, -0.68], [0, -0.9], [0.13, -0.68], [0.19, -0.38], [0.24, 0]], 0.012);
    // the hood's black hollow and a grin
    ctx.fillStyle = INK; ctx.beginPath(); ctx.ellipse(0, -0.71, 0.075, 0.095, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = BONE; ctx.lineWidth = 0.008;
    ctx.beginPath(); ctx.arc(0, -0.69, 0.035, 0.2, Math.PI - 0.2); ctx.stroke();
    eyes(ctx, [[-0.028, -0.74], [0.028, -0.74]], YELLOW, 0.008);
    // comet brand on the chest
    ctx.strokeStyle = PINK; ctx.lineWidth = 0.016;
    scratch(ctx, [[-0.08, -0.38], [0.05, -0.53]], r, 0.01, 2);
    ctx.fillStyle = PINK; ctx.beginPath(); ctx.arc(0.06, -0.54, 0.028, 0, 7); ctx.fill();
    ctx.lineWidth = 0.008;
    scratch(ctx, [[-0.06, -0.42], [0.03, -0.5]], r, 0.01, 1);
    // a curved knife
    ctx.strokeStyle = BONE; ctx.lineWidth = 0.014;
    ctx.beginPath(); ctx.moveTo(0.2, -0.4); ctx.quadraticCurveTo(0.33, -0.48, 0.3, -0.62); ctx.stroke();
    ctx.fillStyle = '#c9b48a'; ctx.beginPath(); ctx.ellipse(0.19, -0.39, 0.035, 0.025, 0.5, 0, 7); ctx.fill();
  }

  function drawAbbess(ctx, r) {
    // tall, crowned, weeping black; a halo of pink
    ctx.scale(0.8, 0.8);
    const halo = ctx.createRadialGradient(0, -0.9, 0, 0, -0.9, 0.38);
    halo.addColorStop(0, 'rgba(255,61,139,0.35)'); halo.addColorStop(1, 'rgba(255,61,139,0)');
    ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(0, -0.9, 0.38, 0, 7); ctx.fill();
    ctx.fillStyle = '#0c0b0a';
    ctx.beginPath();
    ctx.moveTo(-0.32, 0); ctx.lineTo(-0.22, -0.6); ctx.lineTo(-0.14, -0.86); ctx.lineTo(0.14, -0.86); ctx.lineTo(0.22, -0.6); ctx.lineTo(0.32, 0);
    ctx.closePath(); ctx.fill();
    outline(ctx, r, [[-0.32, 0], [-0.22, -0.6], [-0.14, -0.86], [0.14, -0.86], [0.22, -0.6], [0.32, 0]], 0.014);
    // the veil
    ctx.strokeStyle = DIM; ctx.lineWidth = 0.008;
    for (let k = 0; k < 9; k++) { const x = -0.2 + k * 0.05; scratch(ctx, [[x * 0.6, -0.84], [x, -0.1 - r() * 0.3]], r, 0.01, 1); }
    // face
    ctx.fillStyle = '#d8d2c0'; ctx.beginPath(); ctx.ellipse(0, -0.94, 0.075, 0.1, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = INK;
    ctx.beginPath(); ctx.ellipse(-0.028, -0.955, 0.02, 0.026, 0, 0, 7); ctx.ellipse(0.028, -0.955, 0.02, 0.026, 0, 0, 7); ctx.fill();
    ctx.lineWidth = 0.012; ctx.strokeStyle = INK;
    scratch(ctx, [[-0.03, -0.93], [-0.035, -0.84]], r, 0.004, 1);
    scratch(ctx, [[0.03, -0.93], [0.032, -0.83]], r, 0.004, 1);
    ctx.beginPath(); ctx.moveTo(-0.03, -0.885); ctx.quadraticCurveTo(0, -0.875, 0.03, -0.885); ctx.stroke();
    eyes(ctx, [[-0.028, -0.955], [0.028, -0.955]], PINK, 0.01);
    // crown of iron spikes
    ctx.fillStyle = YELLOW;
    for (let k = -2; k <= 2; k++) {
      ctx.beginPath(); ctx.moveTo(k * 0.03 - 0.012, -1.03); ctx.lineTo(k * 0.03, -1.1 - (k === 0 ? 0.03 : 0)); ctx.lineTo(k * 0.03 + 0.012, -1.03); ctx.fill();
    }
    ctx.fillRect(-0.075, -1.035, 0.15, 0.015);
    // long hands
    ctx.strokeStyle = '#d8d2c0'; ctx.lineWidth = 0.012;
    for (const sgn of [-1, 1]) {
      for (let f = 0; f < 4; f++) scratch(ctx, [[sgn * 0.24, -0.5], [sgn * (0.3 + f * 0.012), -0.38 + f * 0.01]], r, 0.006, 1);
    }
    // the Bell-Tongue on a chain
    ctx.strokeStyle = DIM; ctx.lineWidth = 0.006;
    ctx.beginPath(); ctx.moveTo(-0.06, -0.84); ctx.lineTo(0, -0.66); ctx.lineTo(0.06, -0.84); ctx.stroke();
    ctx.fillStyle = YELLOW; ctx.beginPath(); ctx.moveTo(-0.02, -0.66); ctx.quadraticCurveTo(0, -0.56, 0.02, -0.66); ctx.closePath(); ctx.fill();
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
    const { grid, explored, x, y, dir, monsters, mini } = view;
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
      if (m.hp > 0 && m.seen && seen(m.x, m.y)) {
        ctx.fillStyle = PINK;
        ctx.beginPath(); ctx.arc(ox + m.x * cs + cs / 2, oy + m.y * cs + cs / 2, cs * 0.28, 0, 7); ctx.fill();
      }
    }
    // the wretch: a yellow arrow
    ctx.save();
    ctx.translate(ox + x * cs + cs / 2, oy + y * cs + cs / 2);
    ctx.rotate((dir * Math.PI) / 2);
    ctx.fillStyle = YELLOW; ctx.strokeStyle = INK; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, -cs * 0.42); ctx.lineTo(cs * 0.34, cs * 0.34); ctx.lineTo(0, cs * 0.16); ctx.lineTo(-cs * 0.34, cs * 0.34); ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.restore();
    if (mini) return;
    ctx.strokeStyle = 'rgba(255,225,26,0.35)'; ctx.lineWidth = 2;
    scratch(ctx, [[ox - 3, oy - 3], [ox + cs * cols + 3, oy - 3], [ox + cs * cols + 3, oy + cs * rows + 3], [ox - 3, oy + cs * rows + 3], [ox - 3, oy - 3]], r, 2, 1);
  }

  Object.assign(Q, { drawView, drawTown, drawMap, DIRS, loadArt, assetUrl, portraitUrl });
})();
