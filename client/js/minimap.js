/**
 * Minimap rendering — shows the full map in a small overlay.
 */

import { TILE, TILE_INFO } from './map.js';

/**
 * Draw the minimap into the minimap container.
 * @param {HTMLCanvasElement} canvas - Minimap canvas element
 * @param {number[][]} tiles - Map tile data
 * @param {object[]} buildings - Building positions
 * @param {object[]} villagers - Villager positions
 * @param {object} camera - { x, y } camera position
 * @param {number} tileSize - Tile pixel size (for viewport calc)
 * @param {number} viewWidth - Main canvas width
 * @param {number} viewHeight - Main canvas height
 */
export function drawMinimap(canvas, tiles, buildings, villagers, camera, tileSize, viewWidth, viewHeight) {
  const ctx = canvas.getContext('2d');
  const mapSize = tiles.length;
  const scale = canvas.width / mapSize;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw tiles
  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      const tile = tiles[y][x];
      ctx.fillStyle = TILE_INFO[tile]?.color || '#000';
      ctx.fillRect(x * scale, y * scale, scale + 0.5, scale + 0.5);
    }
  }

  // Draw buildings as bright spots
  ctx.fillStyle = '#d4a050';
  for (const b of buildings) {
    ctx.fillRect(b.x * scale, b.y * scale, Math.max(2, scale * (b.w || 1)), Math.max(2, scale * (b.h || 1)));
  }

  // Draw villagers as white dots
  ctx.fillStyle = '#fff';
  for (const v of villagers) {
    ctx.fillRect(v.x * scale - 1, v.y * scale - 1, 2, 2);
  }

  // Draw viewport rectangle
  const vpX = (camera.x / tileSize) * scale;
  const vpY = (camera.y / tileSize) * scale;
  const vpW = (viewWidth / tileSize) * scale;
  const vpH = (viewHeight / tileSize) * scale;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.lineWidth = 1;
  ctx.strokeRect(vpX, vpY, vpW, vpH);
}
