// Procedural canvas textures, so the game ships without image files.
import * as THREE from 'three';

function canvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  return c;
}

function blotches(ctx, S, rand, n, tones, rMin, rMax, alpha) {
  for (let i = 0; i < n; i++) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = tones[Math.floor(rand() * tones.length)];
    ctx.beginPath();
    ctx.arc(rand() * S, rand() * S, rMin + rand() * (rMax - rMin), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function speckle(ctx, S, rand, n, alpha) {
  for (let i = 0; i < n; i++) {
    const v = rand() < 0.5 ? 0 : 255;
    ctx.fillStyle = `rgba(${v},${v},${v},${alpha * rand()})`;
    const s = 1 + rand() * 2.5;
    ctx.fillRect(rand() * S, rand() * S, s, s);
  }
}

export function makeTextures(rand, anisotropy) {
  const tile = (c, rx, ry, color = true) => {
    const t = new THREE.CanvasTexture(c);
    if (color) t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rx, ry);
    t.anisotropy = anisotropy;
    return t;
  };

  // Mud and dead grass.
  const ground = canvas(512, 512, (ctx, S) => {
    ctx.fillStyle = '#2a291c';
    ctx.fillRect(0, 0, S, S);
    blotches(ctx, S, rand, 900, ['#34331f', '#3d3a24', '#24241a', '#403826', '#2e3320', '#4a4430'], 3, 26, 0.22);
    ctx.lineWidth = 1.3;
    for (let i = 0; i < 2600; i++) {
      const x = rand() * S, y = rand() * S, len = 4 + rand() * 9, a = -Math.PI / 2 + (rand() - 0.5) * 1.2;
      ctx.strokeStyle = `rgba(${150 + rand() * 40},${135 + rand() * 30},${80 + rand() * 20},${0.12 + rand() * 0.3})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
      ctx.stroke();
    }
    speckle(ctx, S, rand, 6000, 0.12);
  });

  // Turned grave dirt.
  const dirt = canvas(256, 256, (ctx, S) => {
    ctx.fillStyle = '#3a2f22';
    ctx.fillRect(0, 0, S, S);
    blotches(ctx, S, rand, 500, ['#2c231a', '#46392a', '#332a1e', '#4d4232'], 2, 12, 0.3);
    for (let i = 0; i < 160; i++) {
      ctx.fillStyle = `rgba(150,140,120,${0.2 + rand() * 0.3})`;
      ctx.beginPath();
      ctx.ellipse(rand() * S, rand() * S, 1 + rand() * 2.5, 1 + rand() * 1.5, rand() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    speckle(ctx, S, rand, 3000, 0.15);
  });

  // Weathered stone with lichen.
  const stone = canvas(256, 256, (ctx, S) => {
    ctx.fillStyle = '#76736a';
    ctx.fillRect(0, 0, S, S);
    blotches(ctx, S, rand, 160, ['#817e74', '#65625a', '#8a877c', '#5c5a52'], 4, 22, 0.28);
    for (let i = 0; i < 40; i++) {
      ctx.strokeStyle = `rgba(30,28,24,${0.1 + rand() * 0.2})`;
      ctx.lineWidth = 1 + rand() * 2;
      const x = rand() * S;
      ctx.beginPath();
      ctx.moveTo(x, rand() * S * 0.3);
      ctx.lineTo(x + (rand() - 0.5) * 6, S * (0.5 + rand() * 0.5));
      ctx.stroke();
    }
    blotches(ctx, S, rand, 120, ['#a6a256', '#8c8c4a', '#6f7a44'], 1, 6, 0.3);
    speckle(ctx, S, rand, 4000, 0.16);
  });

  const glow = new THREE.CanvasTexture(canvas(64, 64, (ctx, S) => {
    const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.45)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S, S);
  }));

  const flame = new THREE.CanvasTexture(canvas(64, 128, (ctx) => {
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < 24; i++) {
      const t = i / 23, cy = 112 - t * 92, r = 26 * Math.pow(1 - t, 0.8) + 3;
      const g = ctx.createRadialGradient(32, cy, 0, 32, cy, r);
      g.addColorStop(0, `rgba(255,${Math.round(215 - t * 100)},${Math.round(110 - t * 80)},0.22)`);
      g.addColorStop(1, 'rgba(255,140,40,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 128);
    }
  }));
  flame.colorSpace = THREE.SRGBColorSpace;

  const mist = new THREE.CanvasTexture(canvas(128, 128, (ctx, S) => {
    for (let i = 0; i < 14; i++) {
      const x = S * (0.3 + rand() * 0.4), y = S * (0.3 + rand() * 0.4), r = S * (0.15 + rand() * 0.2);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,0.22)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, S, S);
    }
  }));

  const plaque = new THREE.CanvasTexture(canvas(512, 96, (ctx, w, h) => {
    ctx.fillStyle = '#6a665d';
    ctx.fillRect(0, 0, w, h);
    speckle(ctx, w, rand, 2500, 0.18);
    ctx.font = '600 50px Georgia, "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,255,240,0.25)';
    ctx.fillText('DOMVS · VORN', w / 2 + 1.5, h / 2 + 2);
    ctx.fillStyle = '#26231e';
    ctx.fillText('DOMVS · VORN', w / 2, h / 2);
  }));
  plaque.colorSpace = THREE.SRGBColorSpace;

  return {
    ground: tile(ground, 40, 40),
    groundBump: tile(ground, 40, 40, false),
    path: tile(dirt, 1, 6),
    dirt: tile(dirt, 1, 1),
    stone: tile(stone, 1, 1),
    stoneBump: tile(stone, 1, 1, false),
    glow,
    flame,
    mist,
    plaque,
  };
}
