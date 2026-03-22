/**
 * Map generation and tile management.
 * Produces a medieval village surrounded by terrain with resource clusters.
 */

export const TILE = {
  GRASS: 0,
  FOREST: 1,
  STONE: 2,
  WATER: 3,
  VILLAGE_GROUND: 4,
  DARK: 5,
  FARM: 6,
  PATH: 7,
  IRON: 8,
  HERBS: 9,
  RUINS: 10,
};

export const TILE_INFO = {
  [TILE.GRASS]:          { color: '#4a7c3f', name: 'Grass', walkable: true },
  [TILE.FOREST]:         { color: '#2d5a27', name: 'Forest', walkable: true },
  [TILE.STONE]:          { color: '#7a7a7a', name: 'Stone', walkable: false },
  [TILE.WATER]:          { color: '#2a5a8a', name: 'Water', walkable: false },
  [TILE.VILLAGE_GROUND]: { color: '#8a7a5a', name: 'Village', walkable: true },
  [TILE.DARK]:           { color: '#0d0d14', name: 'Unknown', walkable: false },
  [TILE.FARM]:           { color: '#7a9a3f', name: 'Farm', walkable: true },
  [TILE.PATH]:           { color: '#9a8a6a', name: 'Path', walkable: true },
  [TILE.IRON]:           { color: '#5a4a3a', name: 'Iron Deposit', walkable: false },
  [TILE.HERBS]:          { color: '#3a8a4a', name: 'Herb Patch', walkable: true },
  [TILE.RUINS]:          { color: '#5a5a6a', name: 'Ruins', walkable: true },
};

// Seeded random for reproducible maps
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// Simple 2D noise approximation using value noise
function createNoise(seed) {
  const rng = mulberry32(seed);
  const grid = [];
  for (let i = 0; i < 256; i++) {
    grid[i] = [];
    for (let j = 0; j < 256; j++) {
      grid[i][j] = rng();
    }
  }

  return function noise(x, y, scale) {
    const sx = x / scale;
    const sy = y / scale;
    const ix = Math.floor(sx) & 255;
    const iy = Math.floor(sy) & 255;
    const fx = sx - Math.floor(sx);
    const fy = sy - Math.floor(sy);
    // Smoothstep
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);

    const a = grid[ix][iy];
    const b = grid[(ix + 1) & 255][iy];
    const c = grid[ix][(iy + 1) & 255];
    const d = grid[(ix + 1) & 255][(iy + 1) & 255];

    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) +
           c * (1 - ux) * uy + d * ux * uy;
  };
}

/**
 * Generate the game map.
 * @param {number} size - Map dimension (NxN)
 * @param {number} seed - Random seed
 * @returns {{ tiles: number[][], buildings: object[], resourceNodes: object[] }}
 */
export function generateMap(size, seed = 42) {
  const rng = mulberry32(seed);
  const noise = createNoise(seed);
  const tiles = [];
  const buildings = [];
  const resourceNodes = [];
  const center = Math.floor(size / 2);

  // Initialize all as dark
  for (let y = 0; y < size; y++) {
    tiles[y] = [];
    for (let x = 0; x < size; x++) {
      tiles[y][x] = TILE.DARK;
    }
  }

  // Revealed radius (starts small)
  const revealRadius = Math.floor(size / 2) - 1;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dist = Math.sqrt((x - center) ** 2 + (y - center) ** 2);

      // Outside revealed area stays dark
      if (dist > revealRadius) continue;

      // Terrain layers using noise
      const elevation = noise(x, y, 8);
      const moisture = noise(x + 100, y + 100, 10);
      const detail = noise(x + 200, y + 200, 4);

      // Village core
      if (dist < 4) {
        tiles[y][x] = TILE.VILLAGE_GROUND;
      }
      // Village outskirts with some buildings
      else if (dist < 6 && rng() < 0.4) {
        tiles[y][x] = TILE.VILLAGE_GROUND;
      }
      // Water bodies (low elevation + high moisture)
      else if (elevation < 0.25 && moisture > 0.6) {
        tiles[y][x] = TILE.WATER;
      }
      // Stone/mountains (high elevation)
      else if (elevation > 0.78) {
        if (detail > 0.6 && rng() < 0.3) {
          tiles[y][x] = TILE.IRON;
          resourceNodes.push({ x, y, type: 'iron', amount: 20 + Math.floor(rng() * 30) });
        } else {
          tiles[y][x] = TILE.STONE;
        }
      }
      // Dense forest (medium elevation + high moisture)
      else if (moisture > 0.55 && elevation > 0.35) {
        tiles[y][x] = TILE.FOREST;
        if (rng() < 0.08) {
          tiles[y][x] = TILE.HERBS;
          resourceNodes.push({ x, y, type: 'herbs', amount: 5 + Math.floor(rng() * 10) });
        }
      }
      // Light forest
      else if (moisture > 0.4 && rng() < 0.4) {
        tiles[y][x] = TILE.FOREST;
      }
      // Ruins (rare, mid-distance)
      else if (dist > 8 && dist < revealRadius - 2 && rng() < 0.005) {
        tiles[y][x] = TILE.RUINS;
      }
      // Grass
      else {
        tiles[y][x] = TILE.GRASS;
      }
    }
  }

  // Carve paths from village center outward (4 cardinal directions)
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  for (const [dx, dy] of directions) {
    let px = center;
    let py = center;
    for (let i = 0; i < 8; i++) {
      px += dx;
      py += dy;
      if (px < 0 || py < 0 || px >= size || py >= size) break;
      if (tiles[py][px] === TILE.WATER || tiles[py][px] === TILE.DARK) break;
      if (tiles[py][px] !== TILE.VILLAGE_GROUND) {
        tiles[py][px] = TILE.PATH;
      }
      // Slight wobble
      if (rng() < 0.3) {
        const perpX = px + dy;
        const perpY = py + dx;
        if (perpX >= 0 && perpY >= 0 && perpX < size && perpY < size) {
          if (tiles[perpY][perpX] === TILE.GRASS || tiles[perpY][perpX] === TILE.FOREST) {
            tiles[perpY][perpX] = TILE.PATH;
          }
        }
      }
    }
  }

  // Place farms near village
  for (let y = center - 6; y <= center + 6; y++) {
    for (let x = center - 6; x <= center + 6; x++) {
      if (x < 0 || y < 0 || x >= size || y >= size) continue;
      const dist2 = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
      if (dist2 > 4 && dist2 < 7 && tiles[y][x] === TILE.GRASS && rng() < 0.25) {
        tiles[y][x] = TILE.FARM;
      }
    }
  }

  // Place initial buildings in village core
  const buildingSpots = [
    { x: center, y: center, type: 'chapel', w: 2, h: 2 },
    { x: center - 3, y: center - 1, type: 'house', w: 1, h: 1 },
    { x: center + 2, y: center - 1, type: 'house', w: 1, h: 1 },
    { x: center - 2, y: center + 2, type: 'house', w: 1, h: 1 },
    { x: center + 1, y: center + 2, type: 'workshop', w: 2, h: 1 },
    { x: center - 1, y: center - 3, type: 'house', w: 1, h: 1 },
    { x: center + 3, y: center + 1, type: 'healer', w: 1, h: 1 },
  ];

  for (const b of buildingSpots) {
    buildings.push(b);
  }

  return { tiles, buildings, resourceNodes };
}
