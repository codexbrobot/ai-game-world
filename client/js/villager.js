/**
 * Villager simulation — sprites that wander, work, and idle in the village.
 */

import { TILE, TILE_INFO } from './map.js';

const PERSONALITY_TYPES = [
  'Stalwart', 'Skeptic', 'Dreamer', 'Coward', 'Zealot', 'Pragmatist'
];

const ROLES = [
  'elder', 'captain', 'scout', 'blacksmith', 'healer', 'farmer', 'farmer', 'villager'
];

const NAMES = [
  'Aldric', 'Elena', 'Bram', 'Isolde', 'Theron', 'Mira',
  'Gareth', 'Rowena', 'Cedric', 'Lyra', 'Osmund', 'Freya',
  'Wulfric', 'Astrid', 'Leofric', 'Sigrid', 'Edmund', 'Hild',
  'Godwin', 'Aelswith', 'Dunstan', 'Eadgyth', 'Cuthbert', 'Mildred'
];

// Skin tone palette (warm medieval tones)
const SKIN_TONES = ['#d4a574', '#c68c5e', '#e8c5a0', '#a0704e', '#f0d5b0'];

// Role-specific outfit colors
const ROLE_COLORS = {
  elder:      { tunic: '#6a3a8a', cloak: '#4a2a6a' },
  captain:    { tunic: '#8a3a3a', cloak: '#5a2a2a' },
  scout:      { tunic: '#3a6a3a', cloak: '#2a4a2a' },
  blacksmith: { tunic: '#5a4a3a', cloak: '#3a3a2a' },
  healer:     { tunic: '#e8e8d8', cloak: '#b8b8a8' },
  farmer:     { tunic: '#8a7a4a', cloak: '#6a5a3a' },
  villager:   { tunic: '#6a6a5a', cloak: '#4a4a3a' },
};

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

/**
 * Create a set of villagers.
 */
export function createVillagers(count, mapCenter, seed = 123) {
  const rng = seededRandom(seed);
  const villagers = [];
  const usedNames = new Set();

  for (let i = 0; i < count; i++) {
    let name;
    do {
      name = NAMES[Math.floor(rng() * NAMES.length)];
    } while (usedNames.has(name) && usedNames.size < NAMES.length);
    usedNames.add(name);

    const role = i < ROLES.length ? ROLES[i] : 'villager';

    villagers.push({
      id: i,
      name,
      role,
      personality: PERSONALITY_TYPES[Math.floor(rng() * PERSONALITY_TYPES.length)],
      skinTone: SKIN_TONES[Math.floor(rng() * SKIN_TONES.length)],
      colors: ROLE_COLORS[role] || ROLE_COLORS.villager,

      // Position (in tile coords, fractional for smooth movement)
      x: mapCenter + (rng() - 0.5) * 6,
      y: mapCenter + (rng() - 0.5) * 6,

      // Movement target
      targetX: null,
      targetY: null,

      // State
      state: 'idle',  // idle, walking, working, sleeping, seeking_guidance
      stateTimer: Math.floor(rng() * 60),
      facing: rng() < 0.5 ? 1 : -1, // 1 = right, -1 = left

      // Animation
      walkFrame: 0,
      walkTimer: 0,
      bobOffset: rng() * Math.PI * 2,

      // Attributes
      courage: 30 + Math.floor(rng() * 50),
      faith: 40 + Math.floor(rng() * 40),
      intelligence: 30 + Math.floor(rng() * 50),
      loyalty: 50 + Math.floor(rng() * 40),

      // Speech bubble
      speech: null,
      speechTimer: 0,
    });
  }

  return villagers;
}

/**
 * Update all villagers for one frame.
 */
export function updateVillagers(villagers, tiles, mapSize, dt, timeOfDay) {
  const isNight = timeOfDay === 'night';

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
          } else {
            // Pick a random nearby walkable tile
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

          // After arriving, do something based on role
          if (v.role === 'farmer' && tileAt(tiles, v.x, v.y, mapSize) === TILE.FARM) {
            v.state = 'working';
            v.stateTimer = 4 + Math.random() * 6;
            v.speech = '* farming *';
            v.speechTimer = 2;
          } else if (v.role === 'scout') {
            v.state = 'idle';
            v.stateTimer = 1 + Math.random() * 2;
          } else {
            v.state = 'idle';
            v.stateTimer = 2 + Math.random() * 5;
            // Occasionally say something
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
}

function pickWanderTarget(v, tiles, mapSize) {
  // Pick a random walkable tile within range
  const range = v.role === 'scout' ? 8 : 4;
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
  // Couldn't find a target, stay idle
  v.targetX = null;
  v.state = 'idle';
  v.stateTimer = 2;
}

function moveToward(v, dt) {
  const speed = v.role === 'scout' ? 2.5 : 1.5;
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
  const chats = {
    elder: ["The signs are troubling...", "We must stay vigilant.", "I sense a darkness growing."],
    captain: ["Stay sharp!", "Check the walls.", "I don't like this quiet."],
    scout: ["Tracks to the north...", "The forest feels wrong.", "I should venture further."],
    blacksmith: ["* hammering *", "Need more iron.", "This blade is ready."],
    healer: ["Rest well, friend.", "Herbs are running low.", "Let me see that wound."],
    farmer: ["Good harvest today.", "Rain's coming.", "The soil is rich here."],
    villager: ["Strange times...", "Did you hear that?", "The Voice watches over us."],
  };
  const options = chats[v.role] || chats.villager;
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

  const s = tileSize; // base scale
  const bobY = v.state === 'walking' ? Math.sin(v.bobOffset) * 2 : 0;
  const workBob = v.state === 'working' ? Math.sin(v.bobOffset * 2) * 1.5 : 0;

  ctx.save();
  ctx.translate(screenX, screenY + bobY);

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
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.font = `${Math.max(9, s * 0.3)}px sans-serif`;
  const nameWidth = ctx.measureText(v.name).width;
  ctx.fillRect(-nameWidth / 2 - 2, -s * 0.5, nameWidth + 4, s * 0.25);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText(v.name, 0, -s * 0.32);

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
  switch (v.role) {
    case 'captain':
      // Sword
      ctx.strokeStyle = '#c0c0c0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(v.facing * s * 0.25, s * 0.05 + workBob);
      ctx.lineTo(v.facing * s * 0.4, -s * 0.2 + workBob);
      ctx.stroke();
      break;
    case 'blacksmith':
      // Hammer
      ctx.fillStyle = '#8a6a3a';
      ctx.fillRect(v.facing * s * 0.2, -s * 0.1 + workBob, s * 0.05, s * 0.25);
      ctx.fillStyle = '#555';
      ctx.fillRect(v.facing * s * 0.15, -s * 0.15 + workBob, s * 0.15, s * 0.08);
      break;
    case 'healer':
      // Staff with glow
      ctx.strokeStyle = '#8a6a3a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(v.facing * s * 0.2, s * 0.4 + workBob);
      ctx.lineTo(v.facing * s * 0.2, -s * 0.3 + workBob);
      ctx.stroke();
      ctx.fillStyle = 'rgba(100, 255, 100, 0.4)';
      ctx.beginPath();
      ctx.arc(v.facing * s * 0.2, -s * 0.35 + workBob, s * 0.06, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'scout':
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
    case 'elder':
      // Walking stick + hood
      ctx.strokeStyle = '#5a3a1a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-v.facing * s * 0.25, s * 0.4 + workBob);
      ctx.lineTo(-v.facing * s * 0.2, -s * 0.15 + workBob);
      ctx.stroke();
      break;
  }
}
