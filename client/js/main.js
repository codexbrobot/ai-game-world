/**
 * AI Village: Realm of Shadows — Client entry point.
 * Phase 1: Render the tile map and basic village.
 */

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Tile constants
const TILE_SIZE = 32;
const TILE_TYPES = {
  GRASS: 0,
  FOREST: 1,
  STONE: 2,
  WATER: 3,
  VILLAGE: 4,
  DARK: 5,
};

const TILE_COLORS = {
  [TILE_TYPES.GRASS]: '#4a7c3f',
  [TILE_TYPES.FOREST]: '#2d5a27',
  [TILE_TYPES.STONE]: '#7a7a7a',
  [TILE_TYPES.WATER]: '#2a5a8a',
  [TILE_TYPES.VILLAGE]: '#8a7a5a',
  [TILE_TYPES.DARK]: '#0a0a0a',
};

// Camera state
const camera = { x: 0, y: 0 };
let mapData = [];
let mapSize = 30;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function generateMap(size) {
  const map = [];
  const center = Math.floor(size / 2);

  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const dist = Math.sqrt((x - center) ** 2 + (y - center) ** 2);

      if (dist < 3) {
        row.push(TILE_TYPES.VILLAGE);
      } else if (dist < 5 && Math.random() < 0.3) {
        row.push(TILE_TYPES.VILLAGE);
      } else if (dist > size / 2 - 2) {
        row.push(TILE_TYPES.DARK);
      } else if (Math.random() < 0.02) {
        row.push(TILE_TYPES.WATER);
      } else if (Math.random() < 0.15) {
        row.push(TILE_TYPES.STONE);
      } else if (Math.random() < 0.3) {
        row.push(TILE_TYPES.FOREST);
      } else {
        row.push(TILE_TYPES.GRASS);
      }
    }
    map.push(row);
  }
  return map;
}

function render() {
  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const startCol = Math.floor(camera.x / TILE_SIZE);
  const startRow = Math.floor(camera.y / TILE_SIZE);
  const endCol = startCol + Math.ceil(canvas.width / TILE_SIZE) + 1;
  const endRow = startRow + Math.ceil(canvas.height / TILE_SIZE) + 1;

  for (let y = startRow; y < endRow && y < mapSize; y++) {
    for (let x = startCol; x < endCol && x < mapSize; x++) {
      if (y < 0 || x < 0) continue;
      const tile = mapData[y][x];
      ctx.fillStyle = TILE_COLORS[tile] || '#000';
      ctx.fillRect(
        x * TILE_SIZE - camera.x,
        y * TILE_SIZE - camera.y,
        TILE_SIZE - 1,
        TILE_SIZE - 1
      );
    }
  }

  requestAnimationFrame(render);
}

// Camera panning with arrow keys and WASD
const keys = {};
window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { keys[e.key] = false; });

function updateCamera() {
  const speed = 4;
  if (keys['ArrowUp'] || keys['w']) camera.y -= speed;
  if (keys['ArrowDown'] || keys['s']) camera.y += speed;
  if (keys['ArrowLeft'] || keys['a']) camera.x -= speed;
  if (keys['ArrowRight'] || keys['d']) camera.x += speed;

  // Clamp
  camera.x = Math.max(0, Math.min(camera.x, mapSize * TILE_SIZE - canvas.width));
  camera.y = Math.max(0, Math.min(camera.y, mapSize * TILE_SIZE - canvas.height));

  requestAnimationFrame(updateCamera);
}

// Initialize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

mapData = generateMap(mapSize);

// Center camera on village
camera.x = (mapSize / 2) * TILE_SIZE - canvas.width / 2;
camera.y = (mapSize / 2) * TILE_SIZE - canvas.height / 2;

render();
updateCamera();

console.log('AI Village: Realm of Shadows — initialized');
