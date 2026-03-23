/**
 * Monster system — spawning, AI, rendering, and management for hostile creatures.
 * Self-contained module with its own sprite loading and rendering pipeline.
 */

const BASE_PATH = 'assets/game-assets/Fantasy RPG monster pack -by Franuka-/1x';

// Tile constants (mirrored from map.js to keep this module self-contained)
const TILE_WALKABLE = {
  0: true,   // GRASS
  1: true,   // FOREST
  4: true,   // VILLAGE_GROUND
  6: true,   // FARM
  7: true,   // PATH
  9: true,   // HERBS
  10: true,  // RUINS
};
const TILE_DARK = 5;

// --- Monster Definitions ---

/**
 * Registry of monster types with stats, faction, and sprite info.
 * All sprites are 64x64 PNGs with a 4x4 grid (16x16 per frame).
 * Rows: 0=down, 1=left, 2=right, 3=up.
 */
export const MONSTER_DEFS = {
  skeleton: {
    faction: 'Undead', spriteFile: 'Skeleton',
    hp: 6, damage: 2, speed: 2, aggroRange: 5,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  goblin: {
    faction: 'Wildlings', spriteFile: 'Goblin',
    hp: 4, damage: 1, speed: 3, aggroRange: 4,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  bat: {
    faction: 'Undead', spriteFile: 'Bat',
    hp: 3, damage: 1, speed: 4, aggroRange: 3,
    moveAnim: 'fly',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  orc: {
    faction: 'Wildlings', spriteFile: 'Orc',
    hp: 8, damage: 3, speed: 2, aggroRange: 4,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  wolf_rider: {
    faction: 'Wildlings', spriteFile: 'WolfRider',
    hp: 7, damage: 2, speed: 4, aggroRange: 5,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  death_knight: {
    faction: 'Undead', spriteFile: 'DeathKnight',
    hp: 12, damage: 4, speed: 2, aggroRange: 6,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  lich: {
    faction: 'Undead', spriteFile: 'Lich',
    hp: 10, damage: 5, speed: 1, aggroRange: 7,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  vampire: {
    faction: 'Undead', spriteFile: 'Vampire',
    hp: 9, damage: 3, speed: 3, aggroRange: 5,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  imp: {
    faction: 'Infernal', spriteFile: 'Imp',
    hp: 3, damage: 1, speed: 4, aggroRange: 3,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  hellhound: {
    faction: 'Infernal', spriteFile: 'Hellhound',
    hp: 6, damage: 3, speed: 4, aggroRange: 5,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
  demon: {
    faction: 'Infernal', spriteFile: 'Demon',
    hp: 14, damage: 5, speed: 2, aggroRange: 6,
    moveAnim: 'walk',
    frameW: 16, frameH: 16, cols: 4, rows: 4,
  },
};

// --- Loot Tables ---

/**
 * Per-monster-type loot tables.
 * Each entry can drop an item (`type`) or a resource (`resource` + `amount`).
 * `chance` is the probability (0–1) of that entry dropping on kill.
 */
export const LOOT_TABLES = {
  skeleton:     [{ type: 'bone_shield', chance: 0.10 }, { resource: 'iron', amount: 2, chance: 0.30 }],
  bat:          [{ resource: 'herbs', amount: 1, chance: 0.25 }],
  vampire:      [{ type: 'blood_amulet', chance: 0.08 }, { resource: 'herbs', amount: 3, chance: 0.30 }],
  death_knight: [{ type: 'dark_plate', chance: 0.05 }, { resource: 'iron', amount: 5, chance: 0.35 }],
  lich:         [{ type: 'spell_tome', chance: 0.10 }, { resource: 'iron', amount: 4, chance: 0.25 }],
  goblin:       [{ type: 'crude_sword', chance: 0.15 }, { resource: 'food', amount: 3, chance: 0.40 }],
  orc:          [{ type: 'war_axe', chance: 0.10 }, { resource: 'iron', amount: 5, chance: 0.25 }],
  wolf_rider:   [{ type: 'wolf_pelt', chance: 0.15 }, { resource: 'food', amount: 2, chance: 0.50 }],
  imp:          [{ resource: 'herbs', amount: 2, chance: 0.30 }],
  hellhound:    [{ type: 'fire_fang', chance: 0.12 }, { resource: 'iron', amount: 3, chance: 0.30 }],
  demon:        [{ type: 'infernal_blade', chance: 0.20 }, { resource: 'iron', amount: 10, chance: 0.40 }],
};

/**
 * Roll loot drops for a killed monster.
 * Iterates through the monster's loot table and rolls against each entry's chance.
 * Multiple items can drop from a single kill.
 *
 * @param {string} monsterType - Key into LOOT_TABLES (e.g. 'skeleton', 'demon')
 * @returns {Array<{ type?: string, resource?: string, amount?: number }>} Dropped loot
 */
export function rollLoot(monsterType) {
  const table = LOOT_TABLES[monsterType];
  if (!table) return [];

  const drops = [];

  for (const entry of table) {
    if (Math.random() < entry.chance) {
      if (entry.type) {
        drops.push({ type: entry.type });
      } else if (entry.resource) {
        drops.push({ resource: entry.resource, amount: entry.amount });
      }
    }
  }

  return drops;
}

// --- Sprite Cache ---

/** @type {Object<string, HTMLImageElement>} */
const monsterImageCache = {};
let monsterLoadPromise = null;

/**
 * Preload idle and movement sprite sheets for all monster types.
 * Returns a promise that resolves when every image has loaded (or failed).
 */
export function preloadMonsterSprites() {
  if (monsterLoadPromise) return monsterLoadPromise;

  const promises = [];
  for (const [name, def] of Object.entries(MONSTER_DEFS)) {
    const anims = ['idle', def.moveAnim];
    for (const anim of anims) {
      const key = `${name}_${anim}`;
      if (monsterImageCache[key]) continue;

      const img = new Image();
      img.src = `${BASE_PATH}/${def.faction}/${def.spriteFile}_${anim}.png`;
      monsterImageCache[key] = img;

      promises.push(new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = () => {
          console.warn(`Failed to load monster sprite: ${img.src}`);
          resolve();
        };
      }));
    }
  }

  monsterLoadPromise = Promise.all(promises);
  return monsterLoadPromise;
}

// --- Monster ID counter ---

let nextMonsterId = 1;

/**
 * Create a new monster instance at the given tile coordinates.
 * @param {string} type - Key into MONSTER_DEFS (e.g. 'skeleton', 'goblin')
 * @param {number} x - Tile x position
 * @param {number} y - Tile y position
 * @returns {object} Monster instance
 */
export function createMonster(type, x, y) {
  const def = MONSTER_DEFS[type];
  if (!def) {
    console.warn(`Unknown monster type: ${type}`);
    return null;
  }

  return {
    id: nextMonsterId++,
    type,
    x,
    y,
    targetX: x,
    targetY: y,
    hp: def.hp,
    maxHp: def.hp,
    damage: def.damage,
    state: 'idle',
    stateTimer: 0,
    walkFrame: 0,
    walkTimer: 0,
    dirRow: 0,
    aggroTarget: null,
    spawnX: x,
    spawnY: y,
  };
}

// --- Update Logic ---

/**
 * Per-frame update for all monsters.
 * Handles idle wandering, aggro pursuit, attack stance, and death cleanup.
 *
 * @param {object[]} monsters - Array of monster instances
 * @param {object[]} villagers - Array of villager instances (potential targets)
 * @param {number[][]} tiles - 2D tile map
 * @param {number} mapSize - Map dimension (NxN)
 * @param {number} tileSize - Pixel size of one tile (used for speed scaling)
 * @returns {object[]} Monsters to remove (dying animation complete)
 */
export function updateMonsters(monsters, villagers, tiles, mapSize, tileSize) {
  const toRemove = [];

  for (const m of monsters) {
    const def = MONSTER_DEFS[m.type];
    if (!def) continue;

    m.walkTimer += 1;

    switch (m.state) {
      case 'idle': {
        // Look for a nearby villager to aggro
        const target = findNearestVillager(m, villagers, def.aggroRange);
        if (target) {
          m.aggroTarget = target;
          m.state = 'walking';
          m.targetX = target.x;
          m.targetY = target.y;
        } else if (Math.random() < 0.20) {
          // Wander randomly near spawn
          const wanderPos = pickWanderTile(m, tiles, mapSize, 3);
          if (wanderPos) {
            m.targetX = wanderPos.x;
            m.targetY = wanderPos.y;
            m.state = 'walking';
          }
        }
        break;
      }

      case 'walking': {
        // If we have an aggro target, update its position and check validity
        if (m.aggroTarget) {
          const at = m.aggroTarget;
          // Target dead or gone
          if (at.hp <= 0 || at.state === 'dead') {
            m.aggroTarget = null;
            m.state = 'idle';
            m.stateTimer = 0;
            break;
          }
          // Target too far away — disengage
          const distToTarget = tileDist(m, at);
          if (distToTarget > def.aggroRange * 1.5) {
            m.aggroTarget = null;
            m.state = 'idle';
            m.stateTimer = 0;
            break;
          }
          // Close enough to attack
          if (distToTarget < 1.2) {
            m.state = 'attacking';
            m.stateTimer = 30; // frames until attack resolves
            break;
          }
          // Update pursuit target to villager's current position
          m.targetX = at.x;
          m.targetY = at.y;
        }

        // Move toward target
        const moveSpeed = def.speed * 0.3;
        const dx = m.targetX - m.x;
        const dy = m.targetY - m.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 0.1) {
          // Arrived at target
          m.x = m.targetX;
          m.y = m.targetY;
          m.state = 'idle';
          m.stateTimer = 0;
          break;
        }

        // Normalize and move
        const step = Math.min(moveSpeed / 60, dist);
        m.x += (dx / dist) * step;
        m.y += (dy / dist) * step;

        // Update direction row based on dominant axis
        if (Math.abs(dx) > Math.abs(dy)) {
          m.dirRow = dx > 0 ? 2 : 1; // right : left
        } else {
          m.dirRow = dy > 0 ? 0 : 3; // down : up
        }

        // Animate walk frame (cycle through 4 frames)
        m.walkFrame = Math.floor(m.walkTimer / 8) % 4;
        break;
      }

      case 'attacking': {
        m.stateTimer -= 1;
        // The combat system (separate module) handles actual damage application.
        // When stateTimer expires, return to walking/idle to re-evaluate.
        if (m.stateTimer <= 0) {
          if (m.aggroTarget && m.aggroTarget.hp > 0) {
            // Re-engage: check distance
            const d = tileDist(m, m.aggroTarget);
            if (d < 1.2) {
              m.state = 'attacking';
              m.stateTimer = 30;
            } else {
              m.state = 'walking';
              m.targetX = m.aggroTarget.x;
              m.targetY = m.aggroTarget.y;
            }
          } else {
            m.aggroTarget = null;
            m.state = 'idle';
          }
        }
        break;
      }

      case 'dying': {
        m.stateTimer -= 1;
        if (m.stateTimer <= 0) {
          toRemove.push(m);
        }
        break;
      }
    }
  }

  return toRemove;
}

/**
 * Find the nearest living villager within aggroRange tiles of the monster.
 * @param {object} m - Monster instance
 * @param {object[]} villagers - All villagers
 * @param {number} range - Aggro range in tiles
 * @returns {object|null} Nearest villager or null
 */
function findNearestVillager(m, villagers, range) {
  let nearest = null;
  let nearestDist = range;

  for (const v of villagers) {
    if (v.hp <= 0 || v.state === 'dead') continue;
    const d = tileDist(m, v);
    if (d < nearestDist) {
      nearestDist = d;
      nearest = v;
    }
  }

  return nearest;
}

/**
 * Pick a random walkable tile near the monster's spawn point for wandering.
 * @param {object} m - Monster instance
 * @param {number[][]} tiles - Tile map
 * @param {number} mapSize - Map dimension
 * @param {number} range - Wander range in tiles
 * @returns {{ x: number, y: number }|null}
 */
function pickWanderTile(m, tiles, mapSize, range) {
  for (let attempt = 0; attempt < 10; attempt++) {
    const tx = Math.floor(m.spawnX + (Math.random() - 0.5) * range * 2);
    const ty = Math.floor(m.spawnY + (Math.random() - 0.5) * range * 2);
    if (tx < 0 || ty < 0 || tx >= mapSize || ty >= mapSize) continue;
    const tile = tiles[ty]?.[tx];
    if (tile !== undefined && TILE_WALKABLE[tile]) {
      return { x: tx + 0.5, y: ty + 0.5 };
    }
  }
  return null;
}

/**
 * Euclidean distance between two entities in tile coordinates.
 * @param {object} a - Entity with x, y
 * @param {object} b - Entity with x, y
 * @returns {number}
 */
function tileDist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// --- Rendering ---

/**
 * Draw a single monster on the canvas with its sprite and HP bar.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} monster - Monster instance
 * @param {number} tileSize - Pixel size of one tile
 * @param {number} cameraX - Camera x offset in pixels
 * @param {number} cameraY - Camera y offset in pixels
 */
export function drawMonster(ctx, monster, tileSize, cameraX, cameraY) {
  const def = MONSTER_DEFS[monster.type];
  if (!def) return;

  const screenX = monster.x * tileSize - cameraX;
  const screenY = monster.y * tileSize - cameraY;

  // Skip if off-screen (generous margin)
  if (screenX < -tileSize * 2 || screenX > ctx.canvas.width + tileSize * 2) return;
  if (screenY < -tileSize * 2 || screenY > ctx.canvas.height + tileSize * 2) return;

  // Determine animation state
  const isMoving = monster.state === 'walking';
  const anim = isMoving ? def.moveAnim : 'idle';
  const key = `${monster.type}_${anim}`;
  const img = monsterImageCache[key];

  if (img && img.complete && img.naturalWidth) {
    const col = monster.walkFrame % def.cols;
    const row = Math.min(monster.dirRow, def.rows - 1);
    const sx = col * def.frameW;
    const sy = row * def.frameH;

    // Scale sprite to roughly fill a tile
    const spriteScale = tileSize / def.frameW * 1.2;
    const dw = def.frameW * spriteScale;
    const dh = def.frameH * spriteScale;

    // Dying fade-out
    if (monster.state === 'dying') {
      ctx.save();
      ctx.globalAlpha = Math.max(0, monster.stateTimer / 30);
    }

    // Draw centered horizontally, bottom-aligned
    ctx.drawImage(
      img,
      sx, sy, def.frameW, def.frameH,
      screenX - dw / 2, screenY - dh, dw, dh,
    );

    if (monster.state === 'dying') {
      ctx.restore();
    }
  }

  // HP bar (only when damaged)
  if (monster.hp < monster.maxHp && monster.state !== 'dying') {
    const barW = tileSize * 0.8;
    const barH = 3;
    const barX = screenX - barW / 2;
    const barY = screenY - tileSize * 1.1;
    const hpRatio = Math.max(0, monster.hp / monster.maxHp);

    // Background (red)
    ctx.fillStyle = '#aa2222';
    ctx.fillRect(barX, barY, barW, barH);
    // Foreground (green)
    ctx.fillStyle = '#22aa22';
    ctx.fillRect(barX, barY, barW * hpRatio, barH);
    // Border
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(barX, barY, barW, barH);
  }
}

// --- Wave Spawning ---

// Monster pools by difficulty tier
const TIER_EARLY = ['skeleton', 'goblin', 'bat', 'imp'];
const TIER_MID = [...TIER_EARLY, 'orc', 'wolf_rider', 'hellhound'];
const TIER_LATE = [...TIER_MID, 'death_knight', 'lich', 'vampire', 'demon'];

/**
 * Spawn a wave of monsters at nightfall.
 * Called when tick reaches 15 (nightfall). Returns an array of new monster instances.
 *
 * @param {number} day - Current game day (1-based)
 * @param {number} tick - Current game tick
 * @param {number[][]} tiles - Tile map
 * @param {number} mapSize - Map dimension
 * @returns {object[]} Newly spawned monsters
 */
export function spawnWave(day, tick, tiles, mapSize) {
  const baseCount = Math.min(Math.floor(day / 3) + 1, 8);

  // Select monster pool based on day
  let pool;
  if (day <= 5) {
    pool = TIER_EARLY;
  } else if (day <= 15) {
    pool = TIER_MID;
  } else {
    pool = TIER_LATE;
  }

  // Find valid spawn positions along map edges and near DARK tiles
  const spawnCandidates = findSpawnPositions(tiles, mapSize);
  if (spawnCandidates.length === 0) return [];

  // Spread spawns across different map edges
  const spawned = [];
  for (let i = 0; i < baseCount; i++) {
    const type = pool[Math.floor(Math.random() * pool.length)];
    // Pick a spawn position, cycling through candidates to spread them out
    const pos = spawnCandidates[Math.floor(Math.random() * spawnCandidates.length)];
    const monster = createMonster(type, pos.x + 0.5, pos.y + 0.5);
    if (monster) spawned.push(monster);
  }

  return spawned;
}

/**
 * Find walkable tiles suitable for monster spawning:
 * within 2 tiles of the map border or adjacent to DARK tiles.
 * @param {number[][]} tiles - Tile map
 * @param {number} mapSize - Map dimension
 * @returns {{ x: number, y: number }[]}
 */
function findSpawnPositions(tiles, mapSize) {
  const candidates = [];

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      const tile = tiles[y][x];
      if (!TILE_WALKABLE[tile]) continue;

      const nearEdge = x < 2 || y < 2 || x >= mapSize - 2 || y >= mapSize - 2;
      const nearDark = hasAdjacentDark(tiles, x, y, mapSize);

      if (nearEdge || nearDark) {
        candidates.push({ x, y });
      }
    }
  }

  return candidates;
}

/**
 * Check if a tile has an adjacent DARK tile (4-directional).
 * @param {number[][]} tiles
 * @param {number} x
 * @param {number} y
 * @param {number} mapSize
 * @returns {boolean}
 */
function hasAdjacentDark(tiles, x, y, mapSize) {
  const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  for (const [dx, dy] of dirs) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx >= 0 && ny >= 0 && nx < mapSize && ny < mapSize) {
      if (tiles[ny][nx] === TILE_DARK) return true;
    }
  }
  return false;
}

// --- Query Helpers ---

/**
 * Find the monster at the given tile coordinates (within 0.5 tile distance).
 * @param {object[]} monsters - Array of monster instances
 * @param {number} tileX - Tile x coordinate
 * @param {number} tileY - Tile y coordinate
 * @returns {object|null} Monster at position, or null
 */
export function getMonsterAt(monsters, tileX, tileY) {
  for (const m of monsters) {
    if (m.state === 'dying') continue;
    const dx = m.x - tileX;
    const dy = m.y - tileY;
    if (Math.sqrt(dx * dx + dy * dy) <= 0.5) {
      return m;
    }
  }
  return null;
}
