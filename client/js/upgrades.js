/**
 * Building upgrade system.
 * Allows base buildings to be upgraded to enhanced versions
 * with better effects, new visuals, and potentially larger footprints.
 */

import { BUILDING_DEFS } from './buildings.js';

export const UPGRADE_DEFS = {
  // House → Manor: more capacity
  house: {
    upgradeTo: 'manor',
    label: 'Manor',
    size: { w: 2, h: 1 },
    cost: { wood: 40, stone: 30, iron: 10 },
    minDay: 5,
    effect: 'capacity',
    effectValue: 5,
    description: 'A grand manor housing many villagers.',
  },
  // Chapel → Cathedral: massive faith bonuses
  chapel: {
    upgradeTo: 'cathedral',
    label: 'Cathedral',
    size: { w: 2, h: 2 },
    cost: { stone: 60, iron: 20, wood: 30 },
    minDay: 10,
    effect: 'faithPerTick',
    effectValue: 2,
    description: 'A towering cathedral radiating divine power.',
  },
  // Watchtower → Fortress: bigger sight + defense
  watchtower: {
    upgradeTo: 'fortress',
    label: 'Fortress',
    size: { w: 2, h: 2 },
    cost: { stone: 50, iron: 30 },
    minDay: 12,
    effect: 'hunterRange',
    effectValue: 8,
    description: 'An imposing fortress commanding the landscape.',
  },
  // Workshop → Forge: better crafting bonuses
  workshop: {
    upgradeTo: 'forge',
    label: 'Forge',
    size: { w: 2, h: 2 },
    cost: { iron: 40, stone: 30, wood: 20 },
    minDay: 8,
    effect: 'minerBonus',
    effectValue: 1.0,
    description: 'A master forge for legendary weapons.',
  },
  // Farm → Granary: much more food
  farm: {
    upgradeTo: 'granary',
    label: 'Granary',
    size: { w: 2, h: 1 },
    cost: { wood: 35, stone: 20 },
    minDay: 6,
    effect: 'passiveFood',
    effectValue: 3,
    description: 'An efficient granary with bountiful harvests.',
  },
  // Wall → Rampart: stronger defense
  wall: {
    upgradeTo: 'rampart',
    label: 'Rampart',
    size: { w: 1, h: 1 },
    cost: { stone: 25, iron: 10 },
    minDay: 8,
    effect: 'defense',
    effectValue: 3,
    description: 'Reinforced stone ramparts with arrow slits.',
  },
};

/** Set of all upgraded building type names. */
const UPGRADED_TYPES = new Set(
  Object.values(UPGRADE_DEFS).map(d => d.upgradeTo)
);

/**
 * Check whether a building can be upgraded.
 * @param {object} building - { x, y, type, w, h }
 * @param {object[]} buildings - all buildings array
 * @param {object} resources - current resources (e.g. { wood, stone, iron })
 * @param {number} day - current game day
 * @param {number[][]} tiles - 2D tile map (0 = walkable)
 * @param {number} mapSize - map width/height in tiles
 * @returns {{ canUpgrade: boolean, reason: string, upgradeDef: object|null }}
 */
export function canUpgrade(building, buildings, resources, day, tiles, mapSize) {
  const def = UPGRADE_DEFS[building.type];

  if (!def) {
    return { canUpgrade: false, reason: 'No upgrade available for this building type.', upgradeDef: null };
  }

  // Already upgraded?
  if (isUpgradedType(building.type)) {
    return { canUpgrade: false, reason: 'Building is already upgraded.', upgradeDef: null };
  }

  // Day requirement
  if (day < def.minDay) {
    return { canUpgrade: false, reason: `Upgrade requires day ${def.minDay} (current: ${day}).`, upgradeDef: def };
  }

  // Resource check
  for (const [res, amount] of Object.entries(def.cost)) {
    if ((resources[res] || 0) < amount) {
      return { canUpgrade: false, reason: `Not enough ${res} (need ${amount}, have ${resources[res] || 0}).`, upgradeDef: def };
    }
  }

  // Footprint overlap check — only needed when size changes
  const newW = def.size.w;
  const newH = def.size.h;
  const oldW = building.w || (BUILDING_DEFS[building.type] ? BUILDING_DEFS[building.type].w : 1);
  const oldH = building.h || (BUILDING_DEFS[building.type] ? BUILDING_DEFS[building.type].h : 1);

  if (newW > oldW || newH > oldH) {
    // Check that expanded tiles are within map bounds
    for (let dx = 0; dx < newW; dx++) {
      for (let dy = 0; dy < newH; dy++) {
        const tx = building.x + dx;
        const ty = building.y + dy;

        // Map bounds
        if (tx < 0 || ty < 0 || tx >= mapSize || ty >= mapSize) {
          return { canUpgrade: false, reason: 'Upgraded building would extend beyond map bounds.', upgradeDef: def };
        }

        // Skip tiles already occupied by this building
        if (dx < oldW && dy < oldH) continue;

        // Unwalkable tile check (non-zero tiles are unwalkable terrain)
        if (tiles[ty] && tiles[ty][tx] && tiles[ty][tx] !== 0) {
          return { canUpgrade: false, reason: 'Upgraded footprint overlaps unwalkable terrain.', upgradeDef: def };
        }

        // Other building overlap
        for (const other of buildings) {
          if (other === building) continue;
          const ow = other.w || (BUILDING_DEFS[other.type] ? BUILDING_DEFS[other.type].w : 1);
          const oh = other.h || (BUILDING_DEFS[other.type] ? BUILDING_DEFS[other.type].h : 1);
          if (
            tx >= other.x && tx < other.x + ow &&
            ty >= other.y && ty < other.y + oh
          ) {
            return { canUpgrade: false, reason: 'Upgraded footprint overlaps another building.', upgradeDef: def };
          }
        }
      }
    }
  }

  return { canUpgrade: true, reason: 'Ready to upgrade.', upgradeDef: def };
}

/**
 * Perform an upgrade on a building: deduct resources, change type and size.
 * @param {object} building - the building to upgrade (mutated in place)
 * @param {object[]} buildings - all buildings (for reference)
 * @param {object} resources - current resources (mutated: costs deducted)
 * @param {number[][]} tiles - tile map (unused but kept for consistency)
 * @returns {object} the upgrade definition applied
 */
export function performUpgrade(building, buildings, resources, tiles) {
  const def = UPGRADE_DEFS[building.type];

  // Deduct resources
  for (const [res, amount] of Object.entries(def.cost)) {
    resources[res] -= amount;
  }

  // Change type
  building.type = def.upgradeTo;

  // Update dimensions
  building.w = def.size.w;
  building.h = def.size.h;

  return def;
}

/**
 * Get all buildings that can currently be upgraded.
 * @param {object[]} buildings
 * @param {object} resources
 * @param {number} day
 * @param {number[][]} tiles
 * @param {number} mapSize
 * @returns {{ building: object, upgradeDef: object }[]}
 */
export function getUpgradeableBuildings(buildings, resources, day, tiles, mapSize) {
  const results = [];
  for (const building of buildings) {
    const check = canUpgrade(building, buildings, resources, day, tiles, mapSize);
    if (check.canUpgrade) {
      results.push({ building, upgradeDef: check.upgradeDef });
    }
  }
  return results;
}

/**
 * Check whether a building type is an upgraded version.
 * @param {string} type
 * @returns {boolean}
 */
export function isUpgradedType(type) {
  return UPGRADED_TYPES.has(type);
}
