// Tap or click to act, drag to orbit the camera, pinch or scroll to zoom.
export const ZOOM = { min: 5, max: 20 };

export function bindInput(canvas, onTap) {
  const cam = { yaw: 0, pitch: 0.95, dist: 11 };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const pointers = new Map();
  let dragged = false;
  let pinch = null;
  const spread = () => {
    const [a, b] = [...pointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y) || 1;
  };

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY });
    if (pointers.size === 1) dragged = false;
    if (pointers.size === 2) {
      dragged = true;
      pinch = { d: spread(), dist: cam.dist };
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    p.x = e.clientX;
    p.y = e.clientY;
    if (pointers.size === 1) {
      if (!dragged && Math.hypot(e.clientX - p.sx, e.clientY - p.sy) > 8) dragged = true;
      if (dragged) {
        cam.yaw -= dx * 0.006;
        cam.pitch = clamp(cam.pitch + dy * 0.004, 0.45, 1.3);
      }
    } else if (pointers.size === 2 && pinch) {
      cam.dist = clamp(pinch.dist * pinch.d / spread(), ZOOM.min, ZOOM.max);
    }
  });
  const release = (e) => {
    if (!pointers.has(e.pointerId)) return;
    if (e.type === 'pointerup' && pointers.size === 1 && !dragged) onTap(e.clientX, e.clientY);
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
  };
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    cam.dist = clamp(cam.dist * Math.exp(e.deltaY * 0.001), ZOOM.min, ZOOM.max);
  }, { passive: false });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  return cam;
}
