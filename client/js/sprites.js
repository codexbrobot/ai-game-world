/**
 * Sprite loading and rendering system.
 * Handles preloading sprite sheets and drawing animated frames.
 */

const BASE_PATH = 'assets/game-assets/Fantasy RPG monster pack -by Franuka-/1x';

// Sprite definitions: frame layout per character type
// Rows: 0=down, 1=left, 2=right, 3=up
export const SPRITE_DEFS = {
  peasant: {
    path: `${BASE_PATH}/Loyalists/Peasant`,
    frameW: 16, frameH: 24, cols: 4, rows: 4,
  },
  paladin: {
    path: `${BASE_PATH}/Loyalists/Paladin`,
    frameW: 16, frameH: 24, cols: 4, rows: 4,
  },
  ronin: {
    path: `${BASE_PATH}/Yōkai/Ronin`,
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
};

// Animation states we load for each sprite
const ANIM_STATES = ['idle', 'walk'];

// Cache of loaded images: { 'peasant_idle': Image, ... }
const imageCache = {};
let loadPromise = null;

/**
 * Preload all sprite sheets. Call once at startup.
 * Returns a promise that resolves when all images are loaded.
 */
export function preloadSprites() {
  if (loadPromise) return loadPromise;

  const promises = [];
  for (const [name, def] of Object.entries(SPRITE_DEFS)) {
    for (const anim of ANIM_STATES) {
      const key = `${name}_${anim}`;
      const img = new Image();
      img.src = `${def.path}_${anim}.png`;
      imageCache[key] = img;
      promises.push(new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = () => {
          console.warn(`Failed to load sprite: ${img.src}`);
          resolve();
        };
      }));
    }
  }

  loadPromise = Promise.all(promises);
  return loadPromise;
}

/**
 * Draw a sprite frame on the canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {string} spriteName - e.g. 'peasant', 'ronin', 'paladin'
 * @param {string} animState - 'idle' or 'walk'
 * @param {number} dirRow - 0=down, 1=left, 2=right, 3=up
 * @param {number} frame - animation frame index (0-3)
 * @param {number} x - screen x position (center of sprite)
 * @param {number} y - screen y position (bottom of sprite)
 * @param {number} scale - draw scale multiplier
 */
export function drawSprite(ctx, spriteName, animState, dirRow, frame, x, y, scale) {
  const def = SPRITE_DEFS[spriteName];
  if (!def) return false;

  const key = `${spriteName}_${animState}`;
  const img = imageCache[key];
  if (!img || !img.complete || !img.naturalWidth) return false;

  const col = frame % def.cols;
  const row = Math.min(dirRow, def.rows - 1);

  const sx = col * def.frameW;
  const sy = row * def.frameH;
  const dw = def.frameW * scale;
  const dh = def.frameH * scale;

  // Draw centered horizontally, bottom-aligned to y
  ctx.drawImage(
    img,
    sx, sy, def.frameW, def.frameH,
    x - dw / 2, y - dh, dw, dh,
  );

  return true;
}

/**
 * Check if sprites have finished loading.
 */
export function spritesReady() {
  return Object.values(imageCache).every(img => img.complete);
}
