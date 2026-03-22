/**
 * Villager simulation — sprites that wander, work, and idle in the village.
 */

import { TILE, TILE_INFO, hasAdjacentTile } from './map.js';

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

// Fallback role colors for roles not tied to a class
const ROLE_COLORS = {
  elder:      { tunic: '#6a3a8a', cloak: '#4a2a6a' },
  captain:    { tunic: '#8a3a3a', cloak: '#5a2a2a' },
  scout:      { tunic: '#3a6a3a', cloak: '#2a4a2a' },
  blacksmith: { tunic: '#5a4a3a', cloak: '#3a3a2a' },
  healer:     { tunic: '#e8e8d8', cloak: '#b8b8a8' },
  builder:    { tunic: '#7a6a3a', cloak: '#5a4a2a' },
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
  };
  const chatsByRace = {
    human: ["Strange times...", "Did you hear that?", "The Voice watches over us."],
    dwarf: ["By my beard!", "Nothing a stout ale can't fix.", "Solid ground beneath my feet."],
  };
  const options = chatsByClass[v.vclass] || chatsByRace[v.race] || chatsByRace.human;
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Draw a single villager on the canvas.
 */
export function drawVillager(ctx, v, tileSize, cameraX, cameraY, nightAlpha) {
  const screenX = v.x * tileSize - cameraX;
  const screenY = v.y * tileSize - cameraY;

  // Skip if off-screen
  if (screenX < -tileSize * 2 || screenY < -tileSize * 2) return;

  const isDwarf = v.race === 'dwarf';
  const s = isDwarf ? tileSize * 0.8 : tileSize; // dwarves are shorter
  const dwarfYOffset = isDwarf ? tileSize * 0.2 : 0; // shift down so feet align
  const bobY = v.state === 'walking' ? Math.sin(v.bobOffset) * 2 : 0;
  const workBob = (v.state === 'working' || v.state === 'building') ? Math.sin(v.bobOffset * 2) * 1.5 : 0;

  ctx.save();
  ctx.translate(screenX, screenY + bobY + dwarfYOffset);

  if (v.state === 'sleeping') {
    // Draw sleeping villager (lying down)
    ctx.fillStyle = v.colors.tunic;
    ctx.fillRect(-s * 0.4, s * 0.1, s * 0.8, s * 0.25);
    ctx.fillStyle = v.skinTone;
    ctx.beginPath();
    ctx.arc(-s * 0.3, s * 0.2, s * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Zzz
    const zzAlpha = 0.5 + Math.sin(v.bobOffset) * 0.3;
    ctx.globalAlpha = zzAlpha;
    ctx.fillStyle = '#aaa';
    ctx.font = `${s * 0.3}px serif`;
    ctx.fillText('z', s * 0.1, -s * 0.1);
    ctx.font = `${s * 0.22}px serif`;
    ctx.fillText('z', s * 0.25, -s * 0.25);
    ctx.globalAlpha = 1;
  } else {
    // Body (tunic)
    ctx.fillStyle = v.colors.tunic;
    const tunicW = s * 0.4;
    const tunicH = s * 0.35;
    ctx.fillRect(-tunicW / 2, -s * 0.05 + workBob, tunicW, tunicH);

    // Cloak / shoulders
    ctx.fillStyle = v.colors.cloak;
    ctx.fillRect(-tunicW / 2 - 2, -s * 0.05 + workBob, tunicW + 4, s * 0.1);

    // Head
    ctx.fillStyle = v.skinTone;
    ctx.beginPath();
    ctx.arc(0, -s * 0.18 + workBob, s * 0.14, 0, Math.PI * 2);
    ctx.fill();

    // Eyes (tiny dots)
    ctx.fillStyle = '#222';
    const eyeX = v.facing * s * 0.04;
    ctx.fillRect(eyeX - 1, -s * 0.2 + workBob, 2, 2);
    ctx.fillRect(eyeX + s * 0.06, -s * 0.2 + workBob, 2, 2);

    // Legs (walking animation)
    ctx.fillStyle = '#3a3a2a';
    if (v.state === 'walking') {
      const legSwing = Math.sin(v.walkTimer * 8) * s * 0.1;
      ctx.fillRect(-s * 0.08 + legSwing, s * 0.3, s * 0.06, s * 0.15);
      ctx.fillRect(s * 0.02 - legSwing, s * 0.3, s * 0.06, s * 0.15);
    } else {
      ctx.fillRect(-s * 0.08, s * 0.3 + workBob, s * 0.06, s * 0.12);
      ctx.fillRect(s * 0.02, s * 0.3 + workBob, s * 0.06, s * 0.12);
    }

    // Role-specific props
    drawRoleProp(ctx, v, s, workBob);
  }

  // Name tag
  ctx.font = `${Math.max(9, s * 0.3)}px sans-serif`;
  ctx.textAlign = 'center';
  const nameStr = v.name;
  const nameWidth = ctx.measureText(nameStr).width;
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(-nameWidth / 2 - 2, -s * 0.5, nameWidth + 4, s * 0.25);
  ctx.fillStyle = '#fff';
  ctx.fillText(nameStr, 0, -s * 0.32);

  // Speech bubble
  if (v.speech && v.speechTimer > 0) {
    const bubbleAlpha = Math.min(1, v.speechTimer);
    ctx.globalAlpha = bubbleAlpha;
    ctx.font = `${Math.max(8, s * 0.25)}px sans-serif`;
    const sw = ctx.measureText(v.speech).width;
    ctx.fillStyle = 'rgba(255,255,240,0.9)';
    ctx.fillRect(-sw / 2 - 4, -s * 0.85, sw + 8, s * 0.3);
    ctx.fillStyle = '#222';
    ctx.textAlign = 'center';
    ctx.fillText(v.speech, 0, -s * 0.65);
    ctx.globalAlpha = 1;
  }

  ctx.restore();
}

function drawRoleProp(ctx, v, s, workBob) {
  // Draw props based on class
  switch (v.vclass) {
    case 'hunter':
      // Bow
      ctx.strokeStyle = '#6a4a2a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(v.facing * s * 0.3, s * 0.05 + workBob, s * 0.2, -0.8, 0.8);
      ctx.stroke();
      // String
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(v.facing * s * 0.3 + Math.cos(-0.8) * s * 0.2, s * 0.05 + workBob + Math.sin(-0.8) * s * 0.2);
      ctx.lineTo(v.facing * s * 0.3 + Math.cos(0.8) * s * 0.2, s * 0.05 + workBob + Math.sin(0.8) * s * 0.2);
      ctx.stroke();
      break;
    case 'miner':
      // Pickaxe
      ctx.fillStyle = '#8a6a3a';
      ctx.fillRect(v.facing * s * 0.2, -s * 0.1 + workBob, s * 0.05, s * 0.3);
      ctx.fillStyle = '#666';
      ctx.fillRect(v.facing * s * 0.13, -s * 0.15 + workBob, s * 0.18, s * 0.07);
      break;
    case 'builder':
      // Hammer
      ctx.fillStyle = '#6a5a3a';
      ctx.fillRect(v.facing * s * 0.2, -s * 0.05 + workBob, s * 0.04, s * 0.28);
      ctx.fillStyle = '#888';
      ctx.fillRect(v.facing * s * 0.14, -s * 0.1 + workBob, s * 0.15, s * 0.08);
      break;
  }

  // Dwarf beard
  if (v.race === 'dwarf') {
    ctx.fillStyle = '#8a6a3a';
    ctx.beginPath();
    ctx.moveTo(-s * 0.08, -s * 0.08 + workBob);
    ctx.lineTo(s * 0.08, -s * 0.08 + workBob);
    ctx.lineTo(0, s * 0.06 + workBob);
    ctx.fill();
  }
}
