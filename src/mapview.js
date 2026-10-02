// The parchment map: walls, paths, the places you've found, and where you stand.
import { MAP } from './map.js';

const PAD = 14;

export function drawMap(canvas, world, player, discovered) {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const xs = MAP.outerWall.map((p) => p[0]), zs = MAP.outerWall.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minZ = Math.min(...zs), maxZ = Math.max(...zs) + 4;
  const scale = Math.min((w - PAD * 2) / (maxX - minX), (h - PAD * 2) / (maxZ - minZ));
  const ox = (w - (maxX - minX) * scale) / 2, oz = (h - (maxZ - minZ) * scale) / 2;
  const X = (x) => ox + (x - minX) * scale;
  const Z = (z) => oz + (z - minZ) * scale;
  const line = (pts, closed) => {
    ctx.beginPath();
    pts.forEach(([x, z], i) => (i ? ctx.lineTo(X(x), Z(z)) : ctx.moveTo(X(x), Z(z))));
    if (closed) ctx.closePath();
  };

  ctx.fillStyle = '#0a0a08';
  ctx.fillRect(0, 0, w, h);

  // Ground inside the wall.
  line(MAP.outerWall, true);
  ctx.fillStyle = '#1d1c14';
  ctx.fill();
  ctx.strokeStyle = '#8a8474';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = '#5c584c';
  for (const run of MAP.innerWalls) { line(run); ctx.stroke(); }

  // Paths.
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  MAP.paths.forEach((p, i) => {
    line(world.pathLines[i]);
    ctx.strokeStyle = '#6b5a3c';
    ctx.lineWidth = Math.max(2, p.width * scale * 0.8);
    ctx.stroke();
  });

  // Landmarks.
  for (const p of MAP.props) {
    ctx.fillStyle = p.type === 'court' ? '#ffe11a' : p.type === 'pool' ? '#0c1410' : '#77736a';
    if (p.type === 'court') {
      ctx.strokeStyle = '#8a8474';
      ctx.lineWidth = 2;
      ctx.strokeRect(X(p.x - 15), Z(p.z - 15), 30 * scale, 30 * scale);
      ctx.fillRect(X(p.x - 4.3), Z(p.z - 5.5), 8.6 * scale, 10.6 * scale);
    } else if (p.type === 'pool') {
      ctx.beginPath();
      ctx.ellipse(X(p.x), Z(p.z), p.rx * scale, p.rz * scale, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#3a4a3a';
      ctx.stroke();
    } else if (p.type === 'chapel') {
      ctx.strokeStyle = '#8a8474';
      ctx.lineWidth = 2;
      ctx.strokeRect(X(p.x - 8), Z(p.z - 4.5), 16 * scale, 9 * scale);
    } else if (p.type === 'charnel') {
      ctx.strokeStyle = '#5c584c';
      ctx.beginPath();
      ctx.arc(X(p.x), Z(p.z), 9 * scale, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      const s = p.type === 'gibbet' ? 1.2 : 4;
      ctx.fillRect(X(p.x) - (s * scale) / 2, Z(p.z) - (s * scale) / 2, s * scale, s * scale);
    }
  }

  // Place names: only the ones you've found.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const a of MAP.areas) {
    const found = discovered.has(a.id);
    ctx.font = found ? '600 12px "Archivo Narrow", "Arial Narrow", sans-serif' : '600 13px "Archivo Narrow", sans-serif';
    const label = found ? a.name.replace(/^The /, '') : '?';
    const ty = a.id === 'court' ? Z(a.z + 11) : Z(a.z);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(10,10,8,0.9)';
    ctx.strokeText(label, X(a.x), ty);
    ctx.fillStyle = found ? '#ebe4d0' : '#6f6a5c';
    ctx.fillText(label, X(a.x), ty);
  }

  // You.
  const px = X(player.pos.x), pz = Z(player.pos.z), hd = player.heading;
  ctx.save();
  ctx.translate(px, pz);
  ctx.rotate(-hd + Math.PI);
  ctx.beginPath();
  ctx.moveTo(0, -8); ctx.lineTo(5.5, 6); ctx.lineTo(0, 3); ctx.lineTo(-5.5, 6); ctx.closePath();
  ctx.fillStyle = '#ff3d8b';
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#0a0a08';
  ctx.stroke();
  ctx.restore();
}
