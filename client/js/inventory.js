// inventory.js — Inventory, equipment, and crafting system for AI Village
// Self-contained ES module — no imports from other game modules.

// ---------------------------------------------------------------------------
// Icon path base
// ---------------------------------------------------------------------------
const ICON_PATH =
  'assets/game-assets/Fantasy RPG icon pack -by Franuka-/Individual icons (32x32)';

// ---------------------------------------------------------------------------
// Resource icon mapping
// ---------------------------------------------------------------------------
export const RESOURCE_ICONS = {
  wood:  175,
  stone: 177,
  iron:  179,
  food:  170,
  herbs: 182,
};

// ---------------------------------------------------------------------------
// Item definitions registry
// ---------------------------------------------------------------------------
export const ITEM_DEFS = {
  wooden_sword: {
    name: 'Wooden Sword',
    slot: 'weapon',
    iconId: 3,
    damageMod: 1,
    defenseMod: 0,
    cost: { wood: 5 },
  },
  iron_sword: {
    name: 'Iron Sword',
    slot: 'weapon',
    iconId: 5,
    damageMod: 2,
    defenseMod: 0,
    cost: { iron: 3, wood: 2 },
  },
  iron_axe: {
    name: 'Iron Axe',
    slot: 'weapon',
    iconId: 8,
    damageMod: 2,
    defenseMod: 0,
    cost: { iron: 2, wood: 3 },
  },
  wooden_shield: {
    name: 'Wooden Shield',
    slot: 'shield',
    iconId: 81,
    damageMod: 0,
    defenseMod: 1,
    cost: { wood: 8 },
  },
  iron_shield: {
    name: 'Iron Shield',
    slot: 'shield',
    iconId: 83,
    damageMod: 0,
    defenseMod: 2,
    cost: { iron: 4, wood: 1 },
  },
  leather_cap: {
    name: 'Leather Cap',
    slot: 'helmet',
    iconId: 41,
    damageMod: 0,
    defenseMod: 1,
    cost: { wood: 4 },
  },
  iron_helmet: {
    name: 'Iron Helmet',
    slot: 'helmet',
    iconId: 45,
    damageMod: 0,
    defenseMod: 2,
    cost: { iron: 3 },
  },
  health_potion: {
    name: 'Health Potion',
    slot: 'consumable',
    iconId: 155,
    healAmount: 5,
    cost: { herbs: 3 },
  },
  strength_potion: {
    name: 'Strength Potion',
    slot: 'consumable',
    iconId: 158,
    buffType: 'strength',
    buffAmount: 2,
    buffDuration: 24,
    cost: { herbs: 4, iron: 1 },
  },
};

// ---------------------------------------------------------------------------
// Icon cache
// ---------------------------------------------------------------------------
const iconCache = new Map();

/**
 * Preload all icon images referenced by ITEM_DEFS and RESOURCE_ICONS.
 * Returns a Promise that resolves when every image has loaded (or failed).
 */
export function preloadIcons() {
  const idsToLoad = new Set();

  // Collect icon IDs from item definitions
  for (const def of Object.values(ITEM_DEFS)) {
    idsToLoad.add(def.iconId);
  }

  // Collect icon IDs from resource icons
  for (const id of Object.values(RESOURCE_ICONS)) {
    idsToLoad.add(id);
  }

  const promises = [];

  for (const iconId of idsToLoad) {
    if (iconCache.has(iconId)) continue;

    const promise = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        iconCache.set(iconId, img);
        resolve();
      };
      img.onerror = () => {
        // Resolve anyway so the game doesn't stall on a missing icon
        resolve();
      };
      img.src = `${ICON_PATH}/${iconId}.png`;
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}

// ---------------------------------------------------------------------------
// Drawing
// ---------------------------------------------------------------------------

/**
 * Draw a cached icon onto a canvas context.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} iconId
 * @param {number} x
 * @param {number} y
 * @param {number} size - target render size (icon is scaled from 32×32)
 * @returns {boolean} true if drawn, false if icon not loaded
 */
export function drawItemIcon(ctx, iconId, x, y, size) {
  const img = iconCache.get(iconId);
  if (!img) return false;
  ctx.drawImage(img, 0, 0, 32, 32, x, y, size, size);
  return true;
}

// ---------------------------------------------------------------------------
// Equipment bonuses
// ---------------------------------------------------------------------------

/**
 * Calculate combined damage/defense modifiers from equipped items.
 * @param {{ weapon: object|null, shield: object|null, helmet: object|null }} equipment
 * @returns {{ totalDamage: number, totalDefense: number }}
 */
export function getEquipmentBonuses(equipment) {
  let totalDamage = 0;
  let totalDefense = 0;

  for (const slot of ['weapon', 'shield', 'helmet']) {
    const item = equipment[slot];
    if (item) {
      totalDamage += item.damageMod || 0;
      totalDefense += item.defenseMod || 0;
    }
  }

  return { totalDamage, totalDefense };
}

// ---------------------------------------------------------------------------
// Crafting helpers
// ---------------------------------------------------------------------------

const WOODEN_ITEMS = new Set(['wooden_sword', 'wooden_shield']);

/**
 * Check whether an item can be crafted given current resources and buildings.
 * @param {string} itemType - key into ITEM_DEFS
 * @param {object} resources - e.g. { wood: 10, iron: 5, herbs: 3 }
 * @param {Array} buildings - array of building objects with a `type` property
 * @returns {{ canCraft: boolean, reason: string }}
 */
export function canCraft(itemType, resources, buildings) {
  const def = ITEM_DEFS[itemType];
  if (!def) {
    return { canCraft: false, reason: 'Unknown item type' };
  }

  // Workshop check (wooden items are exempt)
  if (!WOODEN_ITEMS.has(itemType)) {
    const hasWorkshop = buildings && buildings.some((b) => b.type === 'workshop');
    if (!hasWorkshop) {
      return { canCraft: false, reason: 'Requires a workshop' };
    }
  }

  // Resource check
  for (const [resource, amount] of Object.entries(def.cost)) {
    const available = (resources && resources[resource]) || 0;
    if (available < amount) {
      return {
        canCraft: false,
        reason: `Not enough ${resource} (need ${amount}, have ${available})`,
      };
    }
  }

  return { canCraft: true, reason: 'Ready to craft' };
}

/**
 * Deduct crafting costs from resources and return a copy of the item definition.
 * Returns null if the player cannot afford the item.
 * @param {string} itemType
 * @param {object} resources - mutated in place
 * @returns {object|null}
 */
export function craftItem(itemType, resources) {
  const def = ITEM_DEFS[itemType];
  if (!def) return null;

  // Affordability check
  for (const [resource, amount] of Object.entries(def.cost)) {
    if ((resources[resource] || 0) < amount) return null;
  }

  // Deduct costs
  for (const [resource, amount] of Object.entries(def.cost)) {
    resources[resource] -= amount;
  }

  return { ...def };
}

/**
 * Return every item in ITEM_DEFS with an `affordable` flag based on current resources.
 * @param {object} resources
 * @param {Array} buildings
 * @returns {Array<{ type: string, def: object, affordable: boolean }>}
 */
export function getAvailableCrafts(resources, buildings) {
  const result = [];

  for (const [type, def] of Object.entries(ITEM_DEFS)) {
    const { canCraft: affordable } = canCraft(type, resources, buildings);
    result.push({ type, def, affordable });
  }

  return result;
}

// ---------------------------------------------------------------------------
// Equipment / inventory management
// ---------------------------------------------------------------------------

/**
 * Equip an item on a villager.
 * - weapon / shield / helmet  → stored in villager.equipment[slot]
 * - consumable                → pushed onto villager.inventory (max 4)
 *
 * If the equipment slot is already occupied the old item is returned (swap).
 * @param {object} villager
 * @param {object} item
 * @returns {object|null} the displaced item, or null
 */
export function equipItem(villager, item) {
  // Ensure structures exist
  if (!villager.equipment) {
    villager.equipment = { weapon: null, shield: null, helmet: null };
  }
  if (!villager.inventory) {
    villager.inventory = [];
  }

  if (item.slot === 'consumable') {
    if (villager.inventory.length < 4) {
      villager.inventory.push(item);
    }
    return null;
  }

  // Equipment slot
  const slot = item.slot;
  const old = villager.equipment[slot] || null;
  villager.equipment[slot] = item;
  return old;
}

// ---------------------------------------------------------------------------
// Consumable usage
// ---------------------------------------------------------------------------

/**
 * Use a consumable from a villager's inventory.
 * @param {object} villager - must have `inventory`, `hp`, and `maxHp` properties
 * @param {number} inventoryIndex
 * @returns {{ type: string, amount: number }|null} the effect applied, or null
 */
export function useConsumable(villager, inventoryIndex) {
  if (!villager.inventory || inventoryIndex < 0 || inventoryIndex >= villager.inventory.length) {
    return null;
  }

  const item = villager.inventory[inventoryIndex];
  if (!item || item.slot !== 'consumable') return null;

  // Remove from inventory
  villager.inventory.splice(inventoryIndex, 1);

  // Apply effect
  if (item.healAmount) {
    const before = villager.hp || 0;
    villager.hp = Math.min((villager.hp || 0) + item.healAmount, villager.maxHp || villager.hp + item.healAmount);
    return { type: 'heal', amount: villager.hp - before };
  }

  if (item.buffType) {
    return { type: 'buff', amount: item.buffAmount || 0 };
  }

  return null;
}
