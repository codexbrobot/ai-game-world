/**
 * Villager simulation — sprites that wander, work, and idle in the village.
 */

import { TILE, TILE_INFO, hasAdjacentTile } from './map.js';
import { drawSprite } from './sprites.js';

const PERSONALITY_TYPES = [
  'Stalwart', 'Skeptic', 'Dreamer', 'Coward', 'Zealot', 'Pragmatist'
];

// --- Race Definitions ---
const RACES = {
  human: {
    label: 'Human',
    baseStats: { speed: 5, strength: 5, charisma: 5, hp: 10 },
    names: [
      'Aldric', 'Elena', 'Bram', 'Isolde', 'Theron', 'Mira',
      'Gareth', 'Rowena', 'Cedric', 'Lyra', 'Osmund', 'Freya',
      'Leofric', 'Sigrid', 'Edmund', 'Hild', 'Godwin', 'Aelswith',
    ],
    skinTones: ['#d4a574', '#c68c5e', '#e8c5a0', '#a0704e', '#f0d5b0'],
  },
  dwarf: {
    label: 'Dwarf',
    baseStats: { speed: 3, strength: 7, charisma: 4, hp: 12 },
    names: [
      'Durgan', 'Bruni', 'Thorek', 'Helga', 'Grimli', 'Agna',
      'Balin', 'Dotta', 'Nori', 'Hilda', 'Dwalin', 'Sigrun',
      'Ulfgar', 'Ingrid', 'Kragni', 'Birna', 'Thrain', 'Svala',
    ],
    skinTones: ['#d4a070', '#c0885a', '#dab890', '#b08060', '#e8c8a0'],
  },
};
const RACE_KEYS = Object.keys(RACES);

// --- Class Definitions ---
const CLASSES = {
  hunter: {
    label: 'Hunter',
    statBonuses: { speed: 2, strength: 1, charisma: 0 },
    role: 'scout',
    colors: { tunic: '#3a6a3a', cloak: '#2a4a2a' },
  },
  miner: {
    label: 'Miner',
    statBonuses: { speed: 0, strength: 2, charisma: 1 },
    role: 'blacksmith',
    colors: { tunic: '#5a4a3a', cloak: '#3a3a2a' },
  },
  builder: {
    label: 'Builder',
    statBonuses: { speed: 1, strength: 1, charisma: 1 },
    role: 'builder',
    colors: { tunic: '#7a6a3a', cloak: '#5a4a2a' },
  },
};
const CLASS_KEYS = Object.keys(CLASSES);

// Knight class — unlocked after watchtower is built, not in starting pool
export const KNIGHT_CLASS = {
  label: 'Knight',
  statBonuses: { speed: 1, strength: 3, charisma: 0 },
  role: 'knight',
  colors: { tunic: '#8a5a3a', cloak: '#5a3a2a' },
};

// Fallback role colors for roles not tied to a class
const ROLE_COLORS = {
  elder:      { tunic: '#6a3a8a', cloak: '#4a2a6a' },
  captain:    { tunic: '#8a3a3a', cloak: '#5a2a2a' },
  scout:      { tunic: '#3a6a3a', cloak: '#2a4a2a' },
  blacksmith: { tunic: '#5a4a3a', cloak: '#3a3a2a' },
  healer:     { tunic: '#e8e8d8', cloak: '#b8b8a8' },
  builder:    { tunic: '#7a6a3a', cloak: '#5a4a2a' },
  knight:     { tunic: '#8a5a3a', cloak: '#5a3a2a' },
  farmer:     { tunic: '#8a7a4a', cloak: '#6a5a3a' },
  villager:   { tunic: '#6a6a5a', cloak: '#4a4a3a' },
};

const STAT_NAMES = ['speed', 'strength', 'charisma'];

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

/**
 * Create a set of villagers with random races and classes.
 */
/**
 * Record a life event in a villager's history timeline.
 * @param {object} v - Villager object
 * @param {string} type - Event type: 'created','promoted','kill','injured','built','guidance','discovery','mourned','leveled','equipped','scouted','explored'
 * @param {string} text - Human-readable description
 * @param {number} day - Current game day
 * @param {number} tick - Current game tick
 */
export function addHistory(v, type, text, day, tick) {
  if (!v.history) v.history = [];
  v.history.push({ type, text, day, tick });
  if (v.history.length > 50) v.history.shift();
}

export function createVillagers(count, mapCenter, seed = 123) {
  const rng = seededRandom(seed);
  const villagers = [];
  const usedNames = new Set();

  for (let i = 0; i < count; i++) {
    // Random race and class
    const raceKey = RACE_KEYS[Math.floor(rng() * RACE_KEYS.length)];
    const classKey = CLASS_KEYS[Math.floor(rng() * CLASS_KEYS.length)];
    const race = RACES[raceKey];
    const cls = CLASSES[classKey];

    // Pick a unique name from the race's pool
    let name;
    do {
      name = race.names[Math.floor(rng() * race.names.length)];
    } while (usedNames.has(name) && usedNames.size < race.names.length);
    usedNames.add(name);

    // Compute stats: base + class bonus + random +1/-1
    const stats = {};
    for (const stat of STAT_NAMES) {
      stats[stat] = race.baseStats[stat] + cls.statBonuses[stat];
    }

    // Random +1 to one stat and -1 to a different stat
    const plusStat = STAT_NAMES[Math.floor(rng() * STAT_NAMES.length)];
    let minusStat;
    do {
      minusStat = STAT_NAMES[Math.floor(rng() * STAT_NAMES.length)];
    } while (minusStat === plusStat);
    stats[plusStat] += 1;
    stats[minusStat] = Math.max(1, stats[minusStat] - 1);

    // The class determines the functional role for behavior
    const role = cls.role;

    const maxHp = race.baseStats.hp;

    villagers.push({
      id: i,
      name,
      race: raceKey,
      raceLabel: race.label,
      vclass: classKey,
      classLabel: cls.label,
      role,
      personality: PERSONALITY_TYPES[Math.floor(rng() * PERSONALITY_TYPES.length)],
      skinTone: race.skinTones[Math.floor(rng() * race.skinTones.length)],
      colors: cls.colors,

      // Stats
      stats,
      hp: maxHp,
      maxHp,

      // Position (in tile coords, fractional for smooth movement)
      x: mapCenter + (rng() - 0.5) * 6,
      y: mapCenter + (rng() - 0.5) * 6,

      // Movement target
      targetX: null,
      targetY: null,

      // State
      state: 'idle',
      stateTimer: Math.floor(rng() * 60),
      facing: rng() < 0.5 ? 1 : -1,
      dirRow: 0, // sprite direction: 0=down, 1=left, 2=right, 3=up

      // Animation
      walkFrame: 0,
      walkTimer: 0,
      bobOffset: rng() * Math.PI * 2,

      // Legacy attributes (personality-driven)
      courage: 30 + Math.floor(rng() * 50),
      faith: 40 + Math.floor(rng() * 40),
      intelligence: 30 + Math.floor(rng() * 50),
      loyalty: 50 + Math.floor(rng() * 40),

      // Builder target
      buildTarget: null,

      // Equipment & inventory
      equipment: { weapon: null, shield: null, helmet: null },
      inventory: [],

      // Thought/conscience system
      thoughts: [],       // Array of { thought, response, day, tick }
      thoughtsToday: 0,   // How many thoughts this villager has had today
      thinkingInProgress: false, // Whether an AI call is pending

      // Life story timeline — array of { type, text, day, tick }
      history: [],

      // Speech bubble
      speech: null,
      speechTimer: 0,
    });
  }

  return villagers;
}

/**
 * Update all villagers for one frame.
 * Returns array of completed build events: [{ villager, building }]
 */
export function updateVillagers(villagers, tiles, mapSize, dt, timeOfDay) {
  const isNight = timeOfDay === 'night';
  const isDay = timeOfDay === 'day' || timeOfDay === 'dawn';
  const completedBuilds = [];

  for (const v of villagers) {
    v.stateTimer -= dt;
    v.walkTimer += dt;
    v.bobOffset += dt * 3;

    if (v.speechTimer > 0) {
      v.speechTimer -= dt;
      if (v.speechTimer <= 0) v.speech = null;
    }

    // Walk animation frame
    if (v.state === 'walking') {
      v.walkFrame = Math.floor(v.walkTimer * 4) % 4;
    } else {
      v.walkFrame = 0;
    }

    // State machine
    switch (v.state) {
      case 'idle':
        if (v.stateTimer <= 0) {
          if (isNight && Math.random() < 0.7) {
            v.state = 'sleeping';
            v.stateTimer = 5 + Math.random() * 10;
            v.speech = '* sleeping *';
            v.speechTimer = 2;
          } else if (isDay && !v.buildTarget) {
            // During day, try to find a work-appropriate tile
            pickWorkTarget(v, tiles, mapSize);
            v.state = 'walking';
          } else if (v.buildTarget) {
            // Builder has an assigned build target
            v.targetX = v.buildTarget.x + 0.5;
            v.targetY = v.buildTarget.y + 0.5;
            v.facing = v.buildTarget.x > v.x ? 1 : -1;
            v.state = 'walking';
          } else {
            pickWanderTarget(v, tiles, mapSize);
            v.state = 'walking';
          }
        }
        break;

      case 'walking':
        if (v.targetX === null) {
          v.state = 'idle';
          v.stateTimer = 2 + Math.random() * 4;
          break;
        }
        moveToward(v, dt);
        if (Math.abs(v.x - v.targetX) < 0.1 && Math.abs(v.y - v.targetY) < 0.1) {
          v.x = v.targetX;
          v.y = v.targetY;
          v.targetX = null;
          v.targetY = null;

          const currentTile = tileAt(tiles, v.x, v.y, mapSize);

          // After arriving, do something based on role
          if (v.vclass === 'hunter' && (currentTile === TILE.FOREST || currentTile === TILE.FARM)) {
            v.state = 'working';
            v.stateTimer = 4 + Math.random() * 6;
            v.speech = currentTile === TILE.FOREST ? '* hunting in forest *' : '* gathering crops *';
            v.speechTimer = 2;
          } else if (v.vclass === 'miner' && hasAdjacentTile(tiles, Math.floor(v.x), Math.floor(v.y), mapSize, TILE.STONE, TILE.IRON)) {
            v.state = 'working';
            v.stateTimer = 4 + Math.random() * 6;
            v.speech = '* mining *';
            v.speechTimer = 2;
          } else if (v.vclass === 'builder' && v.buildTarget) {
            v.state = 'building';
            v.stateTimer = 6 + Math.random() * 4;
            v.speech = `* building ${v.buildTarget.type} *`;
            v.speechTimer = 3;
          } else if (v.vclass === 'builder' && currentTile === TILE.FOREST) {
            v.state = 'working';
            v.stateTimer = 3 + Math.random() * 4;
            v.speech = '* chopping wood *';
            v.speechTimer = 2;
          } else {
            v.state = 'idle';
            v.stateTimer = 1 + Math.random() * 3;
            if (Math.random() < 0.1) {
              v.speech = getIdleChat(v);
              v.speechTimer = 3;
            }
          }
        }
        break;

      case 'working':
        if (v.stateTimer <= 0) {
          v.state = 'idle';
          v.stateTimer = 1 + Math.random() * 3;
        }
        break;

      case 'building':
        if (v.stateTimer <= 0) {
          if (v.buildTarget) {
            completedBuilds.push({ villager: v, building: v.buildTarget });
            v.buildTarget = null;
          }
          v.state = 'idle';
          v.stateTimer = 2 + Math.random() * 3;
          v.speech = '* done building *';
          v.speechTimer = 2;
        }
        break;

      case 'fighting':
        // Combat state — managed externally by combat.js
        // Stay in fighting state until combat system clears it
        if (v.stateTimer <= 0) {
          v.state = 'idle';
          v.stateTimer = 1 + Math.random() * 2;
        }
        break;

      case 'sleeping':
        if (v.stateTimer <= 0 || !isNight) {
          v.state = 'idle';
          v.stateTimer = 1 + Math.random() * 2;
          v.speech = '* yawns *';
          v.speechTimer = 2;
        }
        break;
    }
  }

  return completedBuilds;
}

/**
 * Pick a work-appropriate target tile for the villager's class.
 * Hunters seek FOREST/FARM, miners seek tiles adjacent to STONE/IRON,
 * builders seek FOREST for wood gathering.
 */
function pickWorkTarget(v, tiles, mapSize) {
  const range = v.vclass === 'hunter' ? 8 : v.vclass === 'builder' ? 6 : 5;
  const targetTiles = [];

  // Collect candidate tiles
  const cx = Math.floor(v.x);
  const cy = Math.floor(v.y);
  for (let dy = -range; dy <= range; dy++) {
    for (let dx = -range; dx <= range; dx++) {
      const tx = cx + dx;
      const ty = cy + dy;
      if (tx < 0 || ty < 0 || tx >= mapSize || ty >= mapSize) continue;
      const tile = tiles[ty][tx];
      if (!TILE_INFO[tile]?.walkable) continue;

      if (v.vclass === 'hunter' && (tile === TILE.FOREST || tile === TILE.FARM)) {
        targetTiles.push({ x: tx, y: ty });
      } else if (v.vclass === 'miner' && hasAdjacentTile(tiles, tx, ty, mapSize, TILE.STONE, TILE.IRON)) {
        targetTiles.push({ x: tx, y: ty });
      } else if (v.vclass === 'builder' && tile === TILE.FOREST) {
        targetTiles.push({ x: tx, y: ty });
      }
    }
  }

  if (targetTiles.length > 0) {
    const target = targetTiles[Math.floor(Math.random() * targetTiles.length)];
    v.targetX = target.x + 0.5;
    v.targetY = target.y + 0.5;
    v.facing = target.x > v.x ? 1 : -1;
    return;
  }

  // Fallback: random wander
  pickWanderTarget(v, tiles, mapSize);
}

function pickWanderTarget(v, tiles, mapSize) {
  const range = v.vclass === 'hunter' ? 8 : v.vclass === 'builder' ? 6 : 4;
  for (let attempt = 0; attempt < 10; attempt++) {
    const tx = Math.floor(v.x + (Math.random() - 0.5) * range * 2);
    const ty = Math.floor(v.y + (Math.random() - 0.5) * range * 2);
    if (tx >= 0 && ty >= 0 && tx < mapSize && ty < mapSize) {
      const tile = tiles[ty]?.[tx];
      if (tile !== undefined && TILE_INFO[tile]?.walkable) {
        v.targetX = tx + 0.5;
        v.targetY = ty + 0.5;
        v.facing = tx > v.x ? 1 : -1;
        return;
      }
    }
  }
  v.targetX = null;
  v.state = 'idle';
  v.stateTimer = 2;
}

function moveToward(v, dt) {
  // Speed stat (1-10) maps to movement speed 1.0-3.0
  const speed = 1.0 + (v.stats?.speed || 5) * 0.2;
  const dx = v.targetX - v.x;
  const dy = v.targetY - v.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 0.05) return;
  v.x += (dx / dist) * speed * dt;
  v.y += (dy / dist) * speed * dt;
  v.facing = dx > 0 ? 1 : -1;

  // Update sprite direction row based on dominant movement axis
  if (Math.abs(dx) > Math.abs(dy)) {
    v.dirRow = dx > 0 ? 2 : 1; // right : left
  } else {
    v.dirRow = dy > 0 ? 0 : 3; // down : up
  }
}

function tileAt(tiles, x, y, mapSize) {
  const tx = Math.floor(x);
  const ty = Math.floor(y);
  if (tx < 0 || ty < 0 || tx >= mapSize || ty >= mapSize) return -1;
  return tiles[ty][tx];
}

function getIdleChat(v) {
  const chatsByClass = {
    hunter: ["Tracks to the north...", "The forest feels wrong.", "I should venture further.", "Game is scarce lately."],
    miner: ["* hammering *", "Need more iron.", "This vein looks promising.", "The stone speaks to those who listen."],
    builder: ["Need more timber.", "* measuring *", "This wall needs shoring up.", "A good foundation is everything."],
    knight: ["I stand ready.", "The watch never ends.", "For the village!", "* patrolling *"],
  };
  const chatsByRace = {
    human: ["Strange times...", "Did you hear that?", "The Voice watches over us."],
    dwarf: ["By my beard!", "Nothing a stout ale can't fix.", "Solid ground beneath my feet."],
  };
  const options = chatsByClass[v.vclass] || chatsByRace[v.race] || chatsByRace.human;
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Get the sprite name for a villager based on race and class.
 * Humans use peasant, dwarves use ronin, knights use paladin.
 */
function getSpriteKey(v) {
  if (v.vclass === 'knight') return 'paladin';
  return v.race === 'dwarf' ? 'ronin' : 'peasant';
}

/**
 * Draw a single villager on the canvas.
 */
export function drawVillager(ctx, v, tileSize, cameraX, cameraY, nightAlpha) {
  const screenX = v.x * tileSize - cameraX;
  const screenY = v.y * tileSize - cameraY;

  // Skip if off-screen
  if (screenX < -tileSize * 2 || screenY < -tileSize * 2) return;

  const s = tileSize;
  const bobY = v.state === 'walking' ? Math.sin(v.bobOffset) * 1.5 : 0;

  ctx.save();

  // Determine sprite animation state and frame
  const spriteKey = getSpriteKey(v);
  const isMoving = v.state === 'walking';
  const animState = isMoving ? 'walk' : 'idle';
  const frame = isMoving ? (Math.floor(v.walkTimer * 5) % 4) : (Math.floor(v.bobOffset * 0.5) % 4);
  const dirRow = v.dirRow || 0;

  // Sprite scale: render 16px sprite to fill ~tileSize with some padding
  const spriteScale = tileSize / 16 * 1.2;

  if (v.state === 'sleeping') {
    // Draw sleeping: show idle frame 0 with reduced alpha + zzz
    ctx.globalAlpha = 0.5;
    drawSprite(ctx, spriteKey, 'idle', 0, 0,
      screenX, screenY + s * 0.5, spriteScale);
    ctx.globalAlpha = 1;

    // Zzz
    const zzAlpha = 0.5 + Math.sin(v.bobOffset) * 0.3;
    ctx.globalAlpha = zzAlpha;
    ctx.fillStyle = '#aaa';
    ctx.font = `${s * 0.3}px serif`;
    ctx.fillText('z', screenX + s * 0.15, screenY - s * 0.2);
    ctx.font = `${s * 0.22}px serif`;
    ctx.fillText('z', screenX + s * 0.3, screenY - s * 0.4);
    ctx.globalAlpha = 1;
  } else {
    // Draw the sprite
    drawSprite(ctx, spriteKey, animState, dirRow, frame,
      screenX, screenY + s * 0.5 + bobY, spriteScale);
  }

  // Name tag
  ctx.font = `${Math.max(9, s * 0.3)}px sans-serif`;
  ctx.textAlign = 'center';
  const nameStr = v.name;
  const nameWidth = ctx.measureText(nameStr).width;
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(screenX - nameWidth / 2 - 2, screenY - s * 0.6, nameWidth + 4, s * 0.25);
  ctx.fillStyle = '#fff';
  ctx.fillText(nameStr, screenX, screenY - s * 0.42);

  // Speech bubble
  if (v.speech && v.speechTimer > 0) {
    const bubbleAlpha = Math.min(1, v.speechTimer);
    ctx.globalAlpha = bubbleAlpha;
    ctx.font = `${Math.max(8, s * 0.25)}px sans-serif`;
    const sw = ctx.measureText(v.speech).width;
    ctx.fillStyle = 'rgba(255,255,240,0.9)';
    ctx.fillRect(screenX - sw / 2 - 4, screenY - s * 0.95, sw + 8, s * 0.3);
    ctx.fillStyle = '#222';
    ctx.textAlign = 'center';
    ctx.fillText(v.speech, screenX, screenY - s * 0.75);
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

/**
 * Promote a villager to Knight class.
 * Called from main.js when a villager decides to become a knight.
 */
export function promoteToKnight(v) {
  v.vclass = 'knight';
  v.classLabel = KNIGHT_CLASS.label;
  v.role = KNIGHT_CLASS.role;
  v.colors = KNIGHT_CLASS.colors;
  // Apply stat bonus difference (remove old class bonus, add knight bonus)
  // For simplicity, just add +2 strength since knight is a promotion
  v.stats.strength = Math.min(10, v.stats.strength + 2);
}
