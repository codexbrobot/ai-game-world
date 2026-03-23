/**
 * Point of Interest (POI) discovery system for AI Village: Realm of Shadows.
 * Generates, tracks, and renders discoverable locations across the map.
 *
 * Self-contained ES module. All game data passed via parameters.
 */

import { TILE, hasAdjacentTile } from './map.js';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Visibility states (mirrored from exploration.js to stay self-contained). */
const VISIBLE = 2;

/** All POI type definitions. */
export const POI_TYPES = {
  ANCIENT_SHRINE: {
    id: 'ancient_shrine',
    name: 'Ancient Shrine',
    icon: '⛩',
    color: '#c8b8e8',
    minDist: 8,
    maxDist: 14,
    biome: 'RUINS',
    description: 'A forgotten shrine pulses with divine energy.',
  },
  BANDIT_CAMP: {
    id: 'bandit_camp',
    name: 'Bandit Camp',
    icon: '⚔',
    color: '#e88888',
    minDist: 10,
    maxDist: 20,
    biome: 'FOREST',
    description: 'Smoke rises from a hidden encampment.',
  },
  CRYSTAL_CAVE: {
    id: 'crystal_cave',
    name: 'Crystal Cave',
    icon: '💎',
    color: '#88c8e8',
    minDist: 10,
    maxDist: 18,
    biome: 'STONE',
    description: 'Crystals glimmer in the depths of a cave.',
  },
  ABANDONED_LIBRARY: {
    id: 'abandoned_library',
    name: 'Abandoned Library',
    icon: '📜',
    color: '#e8d888',
    minDist: 8,
    maxDist: 16,
    biome: 'RUINS',
    description: 'Dusty tomes line crumbling shelves.',
  },
  FAIRY_RING: {
    id: 'fairy_ring',
    name: 'Fairy Ring',
    icon: '🍄',
    color: '#b8e888',
    minDist: 6,
    maxDist: 12,
    biome: 'HERBS',
    description: 'A circle of mushrooms hums with strange magic.',
  },
  DRAGON_HOARD: {
    id: 'dragon_hoard',
    name: "Dragon's Hoard",
    icon: '🐉',
    color: '#e8a040',
    minDist: 18,
    maxDist: 25,
    biome: 'DARK_EDGE',
    description: 'Gold glints from within a vast cavern.',
  },
  REFUGEE_CAMP: {
    id: 'refugee_camp',
    name: 'Refugee Camp',
    icon: '🏕',
    color: '#d0d0d0',
    minDist: 12,
    maxDist: 20,
    biome: 'PATH',
    description: 'Weary travelers huddle around a dying fire.',
  },
  PLAGUE_PIT: {
    id: 'plague_pit',
    name: 'Plague Pit',
    icon: '☠',
    color: '#a0e070',
    minDist: 10,
    maxDist: 18,
    biome: 'WATER_ADJ',
    description: 'A foul stench rises from disturbed earth.',
  },
};

/** Lore scroll texts discovered at Abandoned Libraries. */
const LORE_SCROLLS = [
  'Before the shadows came, this land was ruled by the Sunkeeper Dynasty. Their light faded when the last king broke the Covenant of Dawn.',
  'The monsters are not natural creatures — they are echoes of a great betrayal, bound to relive their rage until someone speaks the old words of peace.',
  'Deep beneath the village lies a sealed gate. The ancients built this settlement to guard it. What sleeps below must never wake.',
  'The Voice that guides the villagers is not the first. Many Voices came before, each choosing a different path. Not all chose wisely.',
  'When five scrolls are united and read under a blood moon, the truth of the Shadow King\'s origin shall be revealed.',
];

/**
 * Mapping from POI biome requirement to the tile type (or special rule) used
 * for placement eligibility.
 */
const BIOME_TILE_MAP = {
  RUINS: TILE.RUINS,
  FOREST: TILE.FOREST,
  STONE: TILE.STONE,
  HERBS: TILE.HERBS,
  PATH: TILE.PATH,
  // WATER_ADJ and DARK_EDGE use special adjacency logic handled separately.
  WATER_ADJ: null,
  DARK_EDGE: null,
};

// ---------------------------------------------------------------------------
// Seeded RNG (mulberry32) — same algorithm used in map.js
// ---------------------------------------------------------------------------

/**
 * Create a seeded pseudo-random number generator (mulberry32).
 * @param {number} seed
 * @returns {() => number} Function returning floats in [0, 1).
 */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Check whether a tile position is a valid biome match for a given POI type.
 *
 * @param {number[][]} tiles
 * @param {number}     x
 * @param {number}     y
 * @param {number}     mapSize
 * @param {string}     biome - One of the POI biome strings.
 * @returns {boolean}
 */
function isBiomeMatch(tiles, x, y, mapSize, biome) {
  if (y < 0 || y >= mapSize || x < 0 || x >= mapSize) return false;

  const tile = tiles[y][x];

  if (biome === 'WATER_ADJ') {
    // Must be a walkable tile adjacent to water
    return tile !== TILE.WATER && tile !== TILE.DARK &&
      hasAdjacentTile(tiles, x, y, mapSize, TILE.WATER);
  }

  if (biome === 'DARK_EDGE') {
    // Must be a non-dark tile adjacent to dark tiles (edge of the known world)
    return tile !== TILE.DARK &&
      hasAdjacentTile(tiles, x, y, mapSize, TILE.DARK);
  }

  const requiredTile = BIOME_TILE_MAP[biome];
  if (requiredTile == null) return false;

  // For most biomes: tile itself matches, OR is adjacent to the required tile
  return tile === requiredTile ||
    hasAdjacentTile(tiles, x, y, mapSize, requiredTile);
}

/**
 * Euclidean distance between two points.
 */
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate 6–8 Points of Interest on the map using seeded RNG.
 *
 * Placement rules:
 * - Each POI respects its minDist / maxDist from the map center.
 * - POIs are placed at least 5 tiles apart from each other.
 * - POI must be on a tile matching its biome requirement.
 * - Uses the mulberry32 PRNG seeded with `seed + 9999` to avoid collisions
 *   with the map generator's RNG stream.
 *
 * @param {number[][]} tiles   - 2D tile array [y][x] from generateMap().
 * @param {number}     mapSize - Width/height of the square map.
 * @param {number}     seed    - Same seed used for map generation.
 * @returns {object[]} Array of POI objects: { type, x, y, discovered }.
 */
export function generatePOIs(tiles, mapSize, seed) {
  const rng = mulberry32(seed + 9999);
  const center = Math.floor(mapSize / 2);
  const placed = [];

  // Decide how many POIs to place (6–8)
  const targetCount = 6 + Math.floor(rng() * 3); // 6, 7, or 8

  // Shuffle POI type keys so that placement order varies per seed
  const typeKeys = Object.keys(POI_TYPES);
  for (let i = typeKeys.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [typeKeys[i], typeKeys[j]] = [typeKeys[j], typeKeys[i]];
  }

  for (let ti = 0; ti < typeKeys.length && placed.length < targetCount; ti++) {
    const poiType = POI_TYPES[typeKeys[ti]];
    let bestCandidate = null;

    // Try up to 200 random positions to find a valid placement
    for (let attempt = 0; attempt < 200; attempt++) {
      // Generate a random angle and distance within the POI's allowed range
      const angle = rng() * Math.PI * 2;
      const d = poiType.minDist + rng() * (poiType.maxDist - poiType.minDist);
      const x = Math.floor(center + Math.cos(angle) * d);
      const y = Math.floor(center + Math.sin(angle) * d);

      // Bounds check
      if (x < 0 || x >= mapSize || y < 0 || y >= mapSize) continue;

      // Must not be on a DARK or impassable tile for non-DARK_EDGE POIs
      const tile = tiles[y][x];
      if (tile === TILE.DARK || tile === TILE.WATER) continue;

      // Biome match
      if (!isBiomeMatch(tiles, x, y, mapSize, poiType.biome)) continue;

      // Minimum distance from other placed POIs
      let tooClose = false;
      for (const existing of placed) {
        if (dist(x, y, existing.x, existing.y) < 5) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;

      bestCandidate = { x, y };
      break;
    }

    if (bestCandidate) {
      placed.push({
        type: poiType,
        x: bestCandidate.x,
        y: bestCandidate.y,
        discovered: false,
      });
    }
  }

  return placed;
}

/**
 * Check all undiscovered POIs against the current visibility map and return
 * any that have just been discovered (tile became VISIBLE).
 *
 * Side-effect: sets `poi.discovered = true` on newly-found POIs.
 *
 * @param {object[]}  pois          - Array of POI objects from generatePOIs().
 * @param {number[][]} visibilityMap - 2D visibility array [y][x].
 * @param {number}    mapSize       - Width/height of the square map.
 * @returns {object[]} Array of POIs that were discovered this call.
 */
export function checkPOIDiscovery(pois, visibilityMap, mapSize) {
  const newlyDiscovered = [];

  for (const poi of pois) {
    if (poi.discovered) continue;
    if (poi.y < 0 || poi.y >= mapSize || poi.x < 0 || poi.x >= mapSize) continue;

    if (visibilityMap[poi.y][poi.x] === VISIBLE) {
      poi.discovered = true;
      newlyDiscovered.push(poi);
    }
  }

  return newlyDiscovered;
}

/**
 * Return the gameplay effects for discovering a specific POI.
 *
 * The returned object provides a normalized shape that main.js can apply:
 * - resources: { iron, wood, stone, ... } to add to stockpiles
 * - faith: flat faith gain
 * - spawnMonsters: array of monster type strings to spawn nearby
 * - healAll: HP restored to every villager
 * - newVillagers: number of new villagers to recruit
 * - revealRadius: fog-of-war tiles to reveal around the POI
 * - diseaseStrength: ticks of -1 HP damage applied to villagers
 * - loreScroll: a string of lore text, or null
 *
 * @param {object} poi - A POI object with a `type` property.
 * @returns {object} Effects descriptor.
 */
export function getPOIDiscoveryEffects(poi) {
  const effects = {
    resources: {},
    faith: 0,
    spawnMonsters: [],
    healAll: 0,
    newVillagers: 0,
    revealRadius: 0,
    diseaseStrength: 0,
    loreScroll: null,
  };

  switch (poi.type.id) {
    case 'ancient_shrine':
      effects.faith = 20;
      effects.revealRadius = 5;
      break;

    case 'bandit_camp':
      effects.spawnMonsters = ['goblin', 'goblin', 'goblin'];
      effects.resources = { iron: 5, wood: 10 };
      break;

    case 'crystal_cave':
      effects.resources = { iron: 15 };
      break;

    case 'abandoned_library':
      // Pick a deterministic-ish scroll based on POI position
      effects.loreScroll = LORE_SCROLLS[(poi.x + poi.y) % LORE_SCROLLS.length];
      break;

    case 'fairy_ring':
      effects.healAll = 5;
      effects.faith = 5;
      break;

    case 'dragon_hoard':
      effects.spawnMonsters = ['demon', 'death_knight'];
      effects.resources = { iron: 30, wood: 20, stone: 20 };
      break;

    case 'refugee_camp':
      effects.newVillagers = 2;
      break;

    case 'plague_pit':
      effects.diseaseStrength = 4;
      break;
  }

  return effects;
}

/**
 * Draw animated markers for discovered POIs on the main game canvas.
 *
 * Each marker renders as a pulsing glow circle with the POI's icon on top.
 * Uses frameCount to drive a smooth sine-wave pulse animation.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object[]}  pois       - Array of POI objects.
 * @param {{ x: number, y: number }} camera - Camera offset in pixels.
 * @param {number}    tileSize   - Pixel size of one map tile.
 * @param {number}    frameCount - Current animation frame (increments each tick).
 */
export function drawPOIMarkers(ctx, pois, camera, tileSize, frameCount) {
  for (const poi of pois) {
    if (!poi.discovered) continue;

    const screenX = poi.x * tileSize - camera.x + tileSize / 2;
    const screenY = poi.y * tileSize - camera.y + tileSize / 2;

    // Pulse animation: gentle sine oscillation
    const pulse = Math.sin(frameCount * 0.06) * 0.3 + 0.7; // range ~0.4–1.0
    const glowRadius = tileSize * 0.7 * pulse;

    // Outer glow
    ctx.save();
    ctx.globalAlpha = 0.25 * pulse;
    ctx.beginPath();
    ctx.arc(screenX, screenY, glowRadius + 4, 0, Math.PI * 2);
    ctx.fillStyle = poi.type.color;
    ctx.fill();

    // Inner glow
    ctx.globalAlpha = 0.5 * pulse;
    ctx.beginPath();
    ctx.arc(screenX, screenY, glowRadius * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = poi.type.color;
    ctx.fill();
    ctx.restore();

    // Icon shadow for readability
    ctx.save();
    ctx.font = `${Math.round(tileSize * 0.7)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 4;
    ctx.fillText(poi.type.icon, screenX, screenY);
    ctx.restore();

    // POI name label (small, below the icon)
    ctx.save();
    ctx.font = `bold ${Math.round(tileSize * 0.3)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0,0,0,0.9)';
    ctx.shadowBlur = 3;
    ctx.fillText(poi.type.name, screenX, screenY + tileSize * 0.45);
    ctx.restore();
  }
}

/**
 * Draw colored dots for discovered POIs on the minimap canvas.
 *
 * @param {CanvasRenderingContext2D} minimapCtx - Minimap canvas context.
 * @param {object[]}  pois        - Array of POI objects.
 * @param {number}    mapSize     - Width/height of the square map in tiles.
 * @param {number}    minimapSize - Pixel dimension of the minimap canvas.
 */
export function drawPOIOnMinimap(minimapCtx, pois, mapSize, minimapSize) {
  const scale = minimapSize / mapSize;

  for (const poi of pois) {
    if (!poi.discovered) continue;

    const mx = poi.x * scale;
    const my = poi.y * scale;
    const dotRadius = Math.max(2, scale * 0.8);

    // Outer ring
    minimapCtx.beginPath();
    minimapCtx.arc(mx, my, dotRadius + 1, 0, Math.PI * 2);
    minimapCtx.fillStyle = '#000000';
    minimapCtx.fill();

    // Colored dot
    minimapCtx.beginPath();
    minimapCtx.arc(mx, my, dotRadius, 0, Math.PI * 2);
    minimapCtx.fillStyle = poi.type.color;
    minimapCtx.fill();
  }
}
