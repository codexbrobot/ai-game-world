// exploration.js — Fog of war and exploration system for AI Village
// Self-contained ES module. All game data passed via parameters.

// Visibility states
const UNEXPLORED = 0; // Never seen
const EXPLORED   = 1; // Seen before, currently in fog
const VISIBLE    = 2; // Currently visible

/**
 * Create a 2D visibility map initialized to unexplored.
 * @param {number} mapSize - Width/height of the square map in tiles.
 * @returns {number[][]} 2D array [y][x] of visibility states.
 */
export function createVisibilityMap(mapSize) {
  const map = new Array(mapSize);
  for (let y = 0; y < mapSize; y++) {
    map[y] = new Array(mapSize).fill(UNEXPLORED);
  }
  return map;
}

/**
 * Return the sight radius for a given villager class/role.
 * @param {string} vclass - Villager class (knight, scout, miner, etc.)
 * @param {string} role   - Villager role (fallback lookup)
 * @returns {number} Sight radius in tiles.
 */
export function getSightRadius(vclass, role) {
  const key = (vclass || role || '').toLowerCase();
  switch (key) {
    case 'knight':
    case 'scout':
    case 'hunter':
      return 6;
    case 'blacksmith':
    case 'miner':
      return 4;
    case 'builder':
      return 4;
    default:
      return 4;
  }
}

/**
 * Update the visibility map for the current frame.
 *
 * 1. Demote all VISIBLE tiles to EXPLORED.
 * 2. For each villager, reveal tiles within their sight radius.
 * 3. For each watchtower building, reveal an 8-tile radius.
 *
 * @param {number[][]} visibilityMap
 * @param {Array}      villagers  - [{ x, y, vclass, role, ... }]
 * @param {Array}      buildings  - [{ x, y, type, w, h }]
 * @param {number}     mapSize
 */
export function updateVisibility(visibilityMap, villagers, buildings, mapSize) {
  // --- Pass 1: demote currently-visible tiles to explored ---
  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      if (visibilityMap[y][x] === VISIBLE) {
        visibilityMap[y][x] = EXPLORED;
      }
    }
  }

  // --- Pass 2: reveal around each villager ---
  if (villagers) {
    for (let i = 0; i < villagers.length; i++) {
      const v = villagers[i];
      const radius = getSightRadius(v.vclass, v.role);
      revealCircle(visibilityMap, v.x, v.y, radius, mapSize, VISIBLE);
    }
  }

  // --- Pass 3: reveal around each watchtower ---
  if (buildings) {
    const WATCHTOWER_RADIUS = 8;
    for (let i = 0; i < buildings.length; i++) {
      const b = buildings[i];
      if (b.type === 'watchtower') {
        // Center of the building
        const cx = b.x + (b.w || 1) / 2;
        const cy = b.y + (b.h || 1) / 2;
        revealCircle(visibilityMap, cx, cy, WATCHTOWER_RADIUS, mapSize, VISIBLE);
      }
    }
  }
}

/**
 * Internal helper: set all tiles within a circular radius to at least `level`.
 */
function revealCircle(visibilityMap, cx, cy, radius, mapSize, level) {
  const r  = Math.ceil(radius);
  const r2 = radius * radius;
  const ox = Math.floor(cx);
  const oy = Math.floor(cy);

  const yMin = Math.max(0, oy - r);
  const yMax = Math.min(mapSize - 1, oy + r);
  const xMin = Math.max(0, ox - r);
  const xMax = Math.min(mapSize - 1, ox + r);

  for (let ty = yMin; ty <= yMax; ty++) {
    const dy = ty - cy;
    for (let tx = xMin; tx <= xMax; tx++) {
      const dx = tx - cx;
      if (dx * dx + dy * dy <= r2) {
        if (visibilityMap[ty][tx] < level) {
          visibilityMap[ty][tx] = level;
        }
      }
    }
  }
}

/**
 * Draw the fog-of-war overlay on the canvas.
 *
 * Only iterates over tiles that fall within the current camera view.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number[][]} visibilityMap
 * @param {number}     tileSize   - Pixel size of one tile (e.g. 32).
 * @param {number}     cameraX    - Camera offset in pixels (left edge).
 * @param {number}     cameraY    - Camera offset in pixels (top edge).
 * @param {number}     canvasW    - Canvas width in pixels.
 * @param {number}     canvasH    - Canvas height in pixels.
 */
export function drawFogOfWar(ctx, visibilityMap, tileSize, cameraX, cameraY, canvasW, canvasH) {
  const mapSize = visibilityMap.length;

  // Determine the range of tiles on screen
  const startX = Math.max(0, Math.floor(cameraX / tileSize));
  const startY = Math.max(0, Math.floor(cameraY / tileSize));
  const endX   = Math.min(mapSize - 1, Math.floor((cameraX + canvasW) / tileSize));
  const endY   = Math.min(mapSize - 1, Math.floor((cameraY + canvasH) / tileSize));

  for (let ty = startY; ty <= endY; ty++) {
    for (let tx = startX; tx <= endX; tx++) {
      const vis = visibilityMap[ty][tx];
      if (vis === VISIBLE) continue; // Nothing to draw

      const px = tx * tileSize - cameraX;
      const py = ty * tileSize - cameraY;

      if (vis === UNEXPLORED) {
        // Solid black — completely hidden
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(px, py, tileSize, tileSize);
      } else {
        // EXPLORED but not currently visible — semi-transparent fog
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(px, py, tileSize, tileSize);

        // Smooth edge blending: if an adjacent tile is VISIBLE, draw a
        // subtle gradient toward the visible side to soften the boundary.
        drawFogEdgeBlend(ctx, visibilityMap, tx, ty, px, py, tileSize, mapSize);
      }
    }
  }
}

/**
 * Internal helper: soften the edge between explored-fog and visible tiles
 * by drawing small gradient strips on the sides that border a visible tile.
 */
function drawFogEdgeBlend(ctx, visibilityMap, tx, ty, px, py, tileSize, mapSize) {
  const blendSize = tileSize * 0.35;

  // Check each cardinal neighbour
  // Left neighbour visible
  if (tx > 0 && visibilityMap[ty][tx - 1] === VISIBLE) {
    const grad = ctx.createLinearGradient(px, py, px + blendSize, py);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = grad;
    ctx.fillRect(px, py, blendSize, tileSize);
  }
  // Right neighbour visible
  if (tx < mapSize - 1 && visibilityMap[ty][tx + 1] === VISIBLE) {
    const grad = ctx.createLinearGradient(px + tileSize, py, px + tileSize - blendSize, py);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = grad;
    ctx.fillRect(px + tileSize - blendSize, py, blendSize, tileSize);
  }
  // Top neighbour visible
  if (ty > 0 && visibilityMap[ty - 1][tx] === VISIBLE) {
    const grad = ctx.createLinearGradient(px, py, px, py + blendSize);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = grad;
    ctx.fillRect(px, py, tileSize, blendSize);
  }
  // Bottom neighbour visible
  if (ty < mapSize - 1 && visibilityMap[ty + 1][tx] === VISIBLE) {
    const grad = ctx.createLinearGradient(px, py + tileSize, px, py + tileSize - blendSize);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = grad;
    ctx.fillRect(px, py + tileSize - blendSize, tileSize, blendSize);
  }
}

/**
 * Reveal a circular area on the map.
 *
 * All tiles within the radius are set to at least EXPLORED (1).
 * Tiles within direct view (inner half of the radius) are set to VISIBLE (2).
 *
 * @param {number[][]} visibilityMap
 * @param {number}     cx     - Center x in tile coordinates.
 * @param {number}     cy     - Center y in tile coordinates.
 * @param {number}     radius - Reveal radius in tiles.
 * @param {number}     mapSize
 */
export function revealArea(visibilityMap, cx, cy, radius, mapSize) {
  // Outer ring → explored; inner core → visible
  revealCircle(visibilityMap, cx, cy, radius, mapSize, EXPLORED);
  revealCircle(visibilityMap, cx, cy, radius * 0.5, mapSize, VISIBLE);
}

/**
 * Return the percentage of tiles that have been explored (value >= 1).
 *
 * Tiles whose actual map type is DARK (5) are excluded from the total count
 * since they are permanently hidden.
 *
 * @param {number[][]} visibilityMap
 * @param {number}     mapSize
 * @param {number[][]} [tiles] - Optional game map to exclude DARK tiles.
 * @returns {number} Percentage 0–100.
 */
export function getExplorationPercentage(visibilityMap, mapSize, tiles) {
  const DARK_TILE = 5;
  let explored = 0;
  let total = 0;

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      // Skip permanently dark tiles if a tile map is provided
      if (tiles && tiles[y] && tiles[y][x] === DARK_TILE) continue;
      total++;
      if (visibilityMap[y][x] >= EXPLORED) {
        explored++;
      }
    }
  }

  if (total === 0) return 100;
  return (explored / total) * 100;
}

/**
 * Check if a tile is currently visible (state === 2).
 * Returns false for out-of-bounds coordinates.
 *
 * @param {number[][]} visibilityMap
 * @param {number}     x - Tile x coordinate (floored internally).
 * @param {number}     y - Tile y coordinate (floored internally).
 * @returns {boolean}
 */
export function isVisible(visibilityMap, x, y) {
  const tx = Math.floor(x);
  const ty = Math.floor(y);
  if (ty < 0 || ty >= visibilityMap.length) return false;
  if (tx < 0 || tx >= visibilityMap[0].length) return false;
  return visibilityMap[ty][tx] === VISIBLE;
}

/**
 * Check if a tile has ever been explored (state >= 1).
 * Returns false for out-of-bounds coordinates.
 *
 * @param {number[][]} visibilityMap
 * @param {number}     x - Tile x coordinate (floored internally).
 * @param {number}     y - Tile y coordinate (floored internally).
 * @returns {boolean}
 */
export function isExplored(visibilityMap, x, y) {
  const tx = Math.floor(x);
  const ty = Math.floor(y);
  if (ty < 0 || ty >= visibilityMap.length) return false;
  if (tx < 0 || tx >= visibilityMap[0].length) return false;
  return visibilityMap[ty][tx] >= EXPLORED;
}
