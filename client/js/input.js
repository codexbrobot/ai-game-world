/**
 * Input handling — keyboard, mouse, and touch for camera movement.
 */

export function createInputHandler(canvas) {
  const keys = {};
  let dragStart = null;
  let cameraStart = null;
  let isPinching = false;
  let lastPinchDist = 0;

  window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
  });
  window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
  });

  // Mouse drag
  canvas.addEventListener('mousedown', (e) => {
    dragStart = { x: e.clientX, y: e.clientY };
    cameraStart = null; // Will be set by the caller
  });

  window.addEventListener('mousemove', (e) => {
    if (dragStart && cameraStart) {
      dragStart._dx = e.clientX - dragStart.x;
      dragStart._dy = e.clientY - dragStart.y;
    }
  });

  window.addEventListener('mouseup', () => {
    dragStart = null;
    cameraStart = null;
  });

  // Touch support (single finger pan)
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      cameraStart = null;
      isPinching = false;
    } else if (e.touches.length === 2) {
      isPinching = true;
      dragStart = null;
      lastPinchDist = getTouchDist(e.touches);
    }
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && dragStart && !isPinching) {
      dragStart._dx = e.touches[0].clientX - dragStart.x;
      dragStart._dy = e.touches[0].clientY - dragStart.y;
    }
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
      dragStart = null;
      cameraStart = null;
      isPinching = false;
    }
  });

  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  return {
    keys,
    getDrag() { return dragStart; },
    setCameraStart(cam) { cameraStart = { ...cam }; },
    getCameraStart() { return cameraStart; },

    /**
     * Apply keyboard-based camera movement.
     * @returns {{ dx: number, dy: number }}
     */
    getCameraMovement(speed) {
      let dx = 0, dy = 0;
      if (keys['arrowup'] || keys['w']) dy -= speed;
      if (keys['arrowdown'] || keys['s']) dy += speed;
      if (keys['arrowleft'] || keys['a']) dx -= speed;
      if (keys['arrowright'] || keys['d']) dx += speed;
      return { dx, dy };
    },

    /**
     * Get drag-based camera offset.
     */
    getDragOffset() {
      if (!dragStart || !cameraStart) return null;
      return {
        x: cameraStart.x - (dragStart._dx || 0),
        y: cameraStart.y - (dragStart._dy || 0),
      };
    }
  };
}
