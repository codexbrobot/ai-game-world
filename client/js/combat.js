// combat.js — Combat resolution system for AI Village
// ES module. Operates on villager/monster objects passed as parameters.

import { rollLoot } from './monsters.js';

/**
 * Returns a fresh combat state object.
 */
export function createCombatState() {
  return {
    activeCombats: [],
    combatEffects: [],
  };
}

/**
 * Returns the damage multiplier for a villager class.
 */
export function getClassDamageMod(vclass) {
  switch (vclass) {
    case 'knight':  return 2.0;
    case 'hunter':  return 1.5;
    case 'miner':   return 1.2;
    case 'builder': return 0.8;
    default:        return 1.0;
  }
}

/**
 * Returns the engagement range (in tiles) for a villager class.
 */
export function getClassEngageRange(vclass) {
  switch (vclass) {
    case 'knight':  return 3;
    case 'hunter':  return 2;
    case 'miner':   return 1.5;
    case 'builder': return 1.5;
    default:        return 1.5;
  }
}

/**
 * Returns a Set<number> of villager IDs currently in active combat.
 */
export function getEngagedVillagerIds(combatState) {
  const ids = new Set();
  for (const combat of combatState.activeCombats) {
    ids.add(combat.villagerId);
  }
  return ids;
}

/**
 * Returns a Set<number> of monster IDs currently in active combat.
 */
export function getEngagedMonsterIds(combatState) {
  const ids = new Set();
  for (const combat of combatState.activeCombats) {
    ids.add(combat.monsterId);
  }
  return ids;
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function distanceTiles(ax, ay, bx, by, tileSize) {
  const dx = (ax - bx) / tileSize;
  const dy = (ay - by) / tileSize;
  return Math.sqrt(dx * dx + dy * dy);
}

function findVillagerById(villagers, id) {
  return villagers.find(v => v.id === id) || null;
}

function findMonsterById(monsters, id) {
  return monsters.find(m => m.id === id) || null;
}

function shouldFlee(villager) {
  const hpRatio = villager.hp / villager.maxHp;
  if (villager.personality === 'Coward' && hpRatio < 0.3) return true;
  if (villager.personality === 'Pragmatist' && hpRatio < 0.25) return true;
  return false;
}

function pushDamageEffect(combatState, x, y, amount, targetType) {
  combatState.combatEffects.push({
    x,
    y,
    type: targetType === 'monster' ? 'slash' : 'hit',
    timer: 15,
    damageAmount: amount,
    targetType,
    floatOffset: 0,
  });
}

// ---------------------------------------------------------------------------
// Main tick
// ---------------------------------------------------------------------------

/**
 * Main combat update — called each game tick.
 * Returns an array of combat event objects. The returned array also carries a
 * `lootDrops` property — an array of loot dropped by monsters killed this tick.
 *
 * Each lootDrop entry:
 * `{ items: Array, resources: Object, killerVillager: object, monster: object, x: number, y: number }`
 *
 * @param {object} combatState
 * @param {object[]} villagers
 * @param {object[]} monsters
 * @param {number} tileSize
 * @returns {object[] & { lootDrops: object[] }}
 */
export function processCombatTick(combatState, villagers, monsters, tileSize) {
  const events = [];
  const lootDrops = [];
  const engagedVillagerIds = getEngagedVillagerIds(combatState);
  const engagedMonsterIds = getEngagedMonsterIds(combatState);

  // ------ 1. Auto-engage: pair idle villagers with nearby monsters ----------
  for (const villager of villagers) {
    if (villager.hp <= 0) continue;
    if (engagedVillagerIds.has(villager.id)) continue;

    const range = getClassEngageRange(villager.vclass);
    const rangePx = range * tileSize;

    let closest = null;
    let closestDist = Infinity;

    for (const monster of monsters) {
      if (monster.hp <= 0 || monster.state === 'dying') continue;
      // Allow multiple villagers to fight the same monster, but each villager
      // can only be in one combat at a time.
      const dist = distanceTiles(villager.x, villager.y, monster.x, monster.y, tileSize);
      if (dist <= range && dist < closestDist) {
        closest = monster;
        closestDist = dist;
      }
    }

    if (closest) {
      combatState.activeCombats.push({
        villagerId: villager.id,
        monsterId: closest.id,
      });
      engagedVillagerIds.add(villager.id);
      engagedMonsterIds.add(closest.id);
    }
  }

  // ------ 2. Resolve existing combats --------------------------------------
  const toRemove = [];

  for (let i = 0; i < combatState.activeCombats.length; i++) {
    const combat = combatState.activeCombats[i];
    const villager = findVillagerById(villagers, combat.villagerId);
    const monster = findMonsterById(monsters, combat.monsterId);

    // If either participant is gone or already dead, clean up.
    if (!villager || !monster || villager.hp <= 0 || monster.hp <= 0 || monster.state === 'dying') {
      toRemove.push(i);
      continue;
    }

    // --- Flee check (before attacking) ---
    if (shouldFlee(villager)) {
      events.push({
        type: 'flee',
        targetType: 'villager',
        targetId: villager.id,
        amount: 0,
        sourceName: monster.type,
      });
      villager.state = 'idle';
      toRemove.push(i);
      continue;
    }

    // --- Villager attacks monster ---
    const classMod = getClassDamageMod(villager.vclass);
    const vDamage = Math.ceil(villager.stats.strength * classMod);
    monster.hp -= vDamage;

    events.push({
      type: 'damage',
      targetType: 'monster',
      targetId: monster.id,
      amount: vDamage,
      sourceName: villager.name,
    });
    pushDamageEffect(combatState, monster.x, monster.y, vDamage, 'monster');

    if (monster.hp <= 0) {
      monster.hp = 0;
      monster.state = 'dying';
      events.push({
        type: 'death',
        targetType: 'monster',
        targetId: monster.id,
        amount: 0,
        sourceName: villager.name,
      });

      // Roll loot for the slain monster
      const drops = rollLoot(monster.type);
      if (drops.length > 0) {
        const items = [];
        const resources = {};
        for (const drop of drops) {
          if (drop.type) {
            items.push({ type: drop.type });
          } else if (drop.resource) {
            resources[drop.resource] = (resources[drop.resource] || 0) + drop.amount;
          }
        }
        lootDrops.push({
          items,
          resources,
          killerVillager: villager,
          monster,
          x: monster.x,
          y: monster.y,
        });
      }

      toRemove.push(i);
      continue;
    }

    // --- Monster attacks villager ---
    const mDamage = monster.damage;
    villager.hp -= mDamage;

    events.push({
      type: 'damage',
      targetType: 'villager',
      targetId: villager.id,
      amount: mDamage,
      sourceName: monster.type,
    });
    pushDamageEffect(combatState, villager.x, villager.y, mDamage, 'villager');

    if (villager.hp <= 0) {
      villager.hp = 0;
      events.push({
        type: 'death',
        targetType: 'villager',
        targetId: villager.id,
        amount: 0,
        sourceName: monster.type,
      });
      toRemove.push(i);
      continue;
    }
  }

  // Remove resolved combats in reverse order to keep indices stable.
  for (let i = toRemove.length - 1; i >= 0; i--) {
    combatState.activeCombats.splice(toRemove[i], 1);
  }

  // Attach lootDrops as a property on the events array so callers that iterate
  // the return value directly (for combat events) continue to work unchanged,
  // while new code can read `result.lootDrops`.
  events.lootDrops = lootDrops;
  return events;
}

// ---------------------------------------------------------------------------
// Effects
// ---------------------------------------------------------------------------

/**
 * Tick down timers on visual effects. Remove expired ones.
 */
export function updateCombatEffects(combatState, dt) {
  for (let i = combatState.combatEffects.length - 1; i >= 0; i--) {
    const fx = combatState.combatEffects[i];
    fx.timer -= dt;
    fx.floatOffset += dt * 0.8; // drift upward for damage numbers
    if (fx.timer <= 0) {
      combatState.combatEffects.splice(i, 1);
    }
  }
}

// ---------------------------------------------------------------------------
// Drawing
// ---------------------------------------------------------------------------

/**
 * Draw visual feedback for active combat effects.
 */
export function drawCombatEffects(ctx, combatState, tileSize, cameraX, cameraY) {
  for (const fx of combatState.combatEffects) {
    const sx = fx.x - cameraX;
    const sy = fx.y - cameraY;
    const progress = 1 - fx.timer / 15; // 0 → 1 over lifetime
    const alpha = Math.max(0, 1 - progress);

    ctx.save();
    ctx.globalAlpha = alpha;

    if (fx.type === 'slash') {
      // Animated slash marks — two crossing lines
      const halfTile = tileSize / 2;
      const cx = sx + halfTile;
      const cy = sy + halfTile;
      const len = 6 + progress * 4;

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - len, cy - len);
      ctx.lineTo(cx + len, cy + len);
      ctx.moveTo(cx + len, cy - len);
      ctx.lineTo(cx - len, cy + len);
      ctx.stroke();

      // Small arc accent
      ctx.strokeStyle = '#ffdd44';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, len + 2, -Math.PI * 0.3, Math.PI * 0.3);
      ctx.stroke();
    } else {
      // Hit flash — brief red/white burst
      const halfTile = tileSize / 2;
      const cx = sx + halfTile;
      const cy = sy + halfTile;
      const radius = 4 + progress * 8;

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.5, 'rgba(255, 80, 60, 0.6)');
      gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Damage numbers — float upward
    if (fx.damageAmount > 0) {
      const numX = sx + tileSize / 2;
      const numY = sy - fx.floatOffset;
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';

      // Outline for readability
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeText('-' + fx.damageAmount, numX, numY);

      ctx.fillStyle = fx.targetType === 'monster' ? '#ff3333' : '#ff9933';
      ctx.fillText('-' + fx.damageAmount, numX, numY);
    }

    ctx.restore();
  }
}

/**
 * Draw a small HP bar above an entity.
 */
export function drawHPBar(ctx, x, y, hp, maxHp, tileSize, cameraX, cameraY) {
  const barWidth = 20;
  const barHeight = 3;
  const sx = x - cameraX + (tileSize - barWidth) / 2;
  const sy = y - cameraY - 4;

  // Red background
  ctx.fillStyle = '#aa0000';
  ctx.fillRect(sx, sy, barWidth, barHeight);

  // Green fill proportional to remaining HP
  const ratio = Math.max(0, Math.min(1, hp / maxHp));
  ctx.fillStyle = '#00cc00';
  ctx.fillRect(sx, sy, barWidth * ratio, barHeight);
}
