// events-system.js — Random events and weather system for AI Village
// Pure ES module, no external imports required.

// ---------------------------------------------------------------------------
// Phase helper
// ---------------------------------------------------------------------------
function getCurrentPhase(tick) {
  if (tick >= 23 || tick === 24) return 'dawn';
  if (tick >= 1 && tick <= 12) return 'day';
  if (tick >= 13 && tick <= 14) return 'dusk';
  return 'night'; // 15-22
}

// ---------------------------------------------------------------------------
// Random helpers
// ---------------------------------------------------------------------------
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randInt(min, max) {
  return Math.floor(rand(min, max + 1));
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function weightedRandom(items) {
  const total = items.reduce((s, e) => s + e.weight, 0);
  let r = Math.random() * total;
  for (const item of items) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return items[items.length - 1];
}

// ---------------------------------------------------------------------------
// Traveler name generator
// ---------------------------------------------------------------------------
const FIRST_NAMES = [
  'Aldric', 'Brenna', 'Cael', 'Dara', 'Eamon', 'Fiona', 'Gareth', 'Helena',
  'Idris', 'Jorin', 'Kael', 'Lira', 'Maren', 'Nadia', 'Orin', 'Petra',
  'Quinn', 'Rowan', 'Seren', 'Thane',
];

function randomTravelerName() {
  return pick(FIRST_NAMES);
}

// ---------------------------------------------------------------------------
// WORLD_EVENTS — 18 event definitions
// ---------------------------------------------------------------------------
export const WORLD_EVENTS = [
  // ---- Weather (5) --------------------------------------------------------
  {
    id: 'heavy_rain',
    name: 'Heavy Rain',
    weight: 4,
    phases: ['day', 'dawn'],
    minDay: 1,
    cooldown: 12,
    category: 'weather',
    trigger() { return true; },
    apply() {
      return {
        message: 'Heavy rain pours over the village, slowing movement.',
        effects: {
          weather: { type: 'rain', ticksRemaining: 8, intensity: 0.7 },
        },
      };
    },
  },
  {
    id: 'thick_fog',
    name: 'Thick Fog',
    weight: 3,
    phases: ['dawn', 'night'],
    minDay: 1,
    cooldown: 12,
    category: 'weather',
    trigger() { return true; },
    apply() {
      return {
        message: 'A thick fog rolls in, obscuring visibility.',
        effects: {
          weather: { type: 'fog', ticksRemaining: 6, intensity: 0.5 },
        },
      };
    },
  },
  {
    id: 'clear_skies',
    name: 'Clear Skies',
    weight: 5,
    phases: ['day'],
    minDay: 1,
    cooldown: 8,
    category: 'weather',
    trigger() { return true; },
    apply() {
      return {
        message: 'The skies clear beautifully, lifting spirits.',
        effects: {
          faith: 3,
          weather: { type: 'clear', ticksRemaining: 6, intensity: 1.0 },
        },
      };
    },
  },
  {
    id: 'thunderstorm',
    name: 'Thunderstorm',
    weight: 2,
    phases: ['day', 'dusk'],
    minDay: 1,
    cooldown: 18,
    category: 'weather',
    trigger() { return true; },
    apply() {
      const lightningHit = Math.random() < 0.1;
      const msg = lightningHit
        ? 'A thunderstorm rages! Lightning splits a tree, yielding extra wood.'
        : 'A violent thunderstorm darkens the sky!';
      const effects = {
        weather: { type: 'storm', ticksRemaining: 8, intensity: 0.5 },
      };
      if (lightningHit) effects.wood = 5;
      return { message: msg, effects };
    },
  },
  {
    id: 'blizzard',
    name: 'Blizzard',
    weight: 1,
    phases: ['night'],
    minDay: 10,
    cooldown: 24,
    category: 'weather',
    trigger() { return true; },
    apply(_gameState, villagers) {
      if (villagers && villagers.length) {
        for (const v of villagers) {
          if (v.state !== 'inside' && v.state !== 'sleeping') {
            v.hp = Math.max(0, v.hp - 1);
          }
        }
      }
      return {
        message: 'A fierce blizzard sweeps the land! Villagers caught outside take damage.',
        effects: {
          weather: { type: 'blizzard', ticksRemaining: 8, intensity: 0.3 },
        },
      };
    },
  },

  // ---- NPC (3) ------------------------------------------------------------
  {
    id: 'wandering_merchant',
    name: 'Wandering Merchant',
    weight: 3,
    phases: ['day'],
    minDay: 3,
    cooldown: 24,
    category: 'npc',
    trigger(gameState) { return gameState.resources.food >= 15; },
    apply() {
      return {
        message: 'A wandering merchant offers iron for food.',
        effects: { food: -10, iron: 5 },
      };
    },
  },
  {
    id: 'lost_traveler',
    name: 'Lost Traveler',
    weight: 2,
    phases: ['day', 'dusk'],
    minDay: 5,
    cooldown: 48,
    category: 'npc',
    trigger() { return true; },
    apply() {
      const name = randomTravelerName();
      return {
        message: `A lost traveler named ${name} stumbles upon the village and decides to stay!`,
        effects: { newVillager: true, travelerName: name },
      };
    },
  },
  {
    id: 'hermit_visit',
    name: 'Hermit Visit',
    weight: 2,
    phases: ['dawn', 'day'],
    minDay: 1,
    cooldown: 18,
    category: 'npc',
    trigger() { return true; },
    apply() {
      return {
        message: 'A forest hermit shares medicinal herbs.',
        effects: { herbs: 5 },
      };
    },
  },

  // ---- Discovery (3) ------------------------------------------------------
  {
    id: 'ancient_artifact',
    name: 'Ancient Artifact',
    weight: 1,
    phases: ['day'],
    minDay: 7,
    cooldown: 72,
    category: 'discovery',
    trigger() { return true; },
    apply() {
      return {
        message: 'Miners unearth an ancient artifact!',
        effects: { faith: 15 },
      };
    },
  },
  {
    id: 'hidden_cache',
    name: 'Hidden Cache',
    weight: 2,
    phases: ['day'],
    minDay: 4,
    cooldown: 24,
    category: 'discovery',
    trigger() { return true; },
    apply() {
      const roll = Math.random();
      if (roll < 0.33) {
        return {
          message: 'A villager discovers a hidden cache of wood!',
          effects: { wood: 10 },
        };
      } else if (roll < 0.66) {
        return {
          message: 'A villager discovers a hidden cache of stone!',
          effects: { stone: 8 },
        };
      }
      return {
        message: 'A villager discovers a hidden cache of food!',
        effects: { food: 8 },
      };
    },
  },
  {
    id: 'strange_tracks',
    name: 'Strange Tracks',
    weight: 3,
    phases: ['dawn', 'dusk'],
    minDay: 1,
    cooldown: 12,
    category: 'discovery',
    trigger() { return true; },
    apply() {
      return {
        message: 'Strange tracks found near the village...',
        effects: {},
      };
    },
  },

  // ---- Omen (3) -----------------------------------------------------------
  {
    id: 'bad_omen',
    name: 'Bad Omen',
    weight: 3,
    phases: ['night'],
    minDay: 1,
    cooldown: 12,
    category: 'omen',
    trigger() { return true; },
    apply() {
      return {
        message: 'Dark clouds gather... an ill omen.',
        effects: { faith: -5 },
      };
    },
  },
  {
    id: 'blood_moon',
    name: 'Blood Moon',
    weight: 1,
    phases: ['night'],
    minDay: 8,
    cooldown: 48,
    category: 'omen',
    trigger() { return true; },
    apply() {
      return {
        message: 'The moon runs red with blood!',
        effects: { monsterBuff: 1.5 },
      };
    },
  },
  {
    id: 'celestial_sign',
    name: 'Celestial Sign',
    weight: 2,
    phases: ['night'],
    minDay: 1,
    cooldown: 16,
    category: 'omen',
    trigger() { return true; },
    apply() {
      return {
        message: 'A brilliant star illuminates the sky!',
        effects: { faith: 10 },
      };
    },
  },

  // ---- Village (4) --------------------------------------------------------
  {
    id: 'village_feast',
    name: 'Village Feast',
    weight: 2,
    phases: ['day'],
    minDay: 4,
    cooldown: 36,
    category: 'village',
    trigger(gameState) { return gameState.resources.food >= 20; },
    apply() {
      return {
        message: 'The village holds a feast!',
        effects: { food: -10, faith: 15 },
      };
    },
  },
  {
    id: 'villager_argument',
    name: 'Villager Argument',
    weight: 3,
    phases: ['day', 'dusk'],
    minDay: 1,
    cooldown: 12,
    category: 'village',
    trigger(_gs, villagers) { return villagers && villagers.length >= 2; },
    apply(_gameState, villagers) {
      const shuffled = [...villagers].sort(() => Math.random() - 0.5);
      const a = shuffled[0];
      const b = shuffled[1];
      a.hp = Math.max(0, a.hp - 1);
      b.hp = Math.max(0, b.hp - 1);
      return {
        message: `Tensions flare between ${a.name} and ${b.name}!`,
        effects: {},
      };
    },
  },
  {
    id: 'bountiful_harvest',
    name: 'Bountiful Harvest',
    weight: 2,
    phases: ['day'],
    minDay: 1,
    cooldown: 18,
    category: 'village',
    trigger(_gs, _v, buildings) {
      return buildings && buildings.some(b => b.type === 'farm');
    },
    apply() {
      return {
        message: 'The farms yield a bountiful harvest!',
        effects: { food: 8 },
      };
    },
  },
  {
    id: 'prayer_answered',
    name: 'Prayer Answered',
    weight: 2,
    phases: ['dawn'],
    minDay: 1,
    cooldown: 24,
    category: 'village',
    trigger(gameState, _v, buildings) {
      return (
        gameState.faith >= 50 &&
        buildings &&
        buildings.some(b => b.type === 'chapel')
      );
    },
    apply(_gameState, villagers) {
      if (villagers && villagers.length) {
        for (const v of villagers) {
          v.hp = Math.min(v.maxHp, v.hp + 2);
        }
      }
      return {
        message: 'Morning prayers bring renewed vigor.',
        effects: {},
      };
    },
  },
];

// ---------------------------------------------------------------------------
// createEventSystem — initializes event system state
// ---------------------------------------------------------------------------
export function createEventSystem() {
  return {
    activeWeather: null,   // { type, ticksRemaining, intensity }
    cooldowns: {},         // { eventId: ticksUntilAvailable }
    history: [],           // last 20 events
    particles: [],         // weather visual particles
  };
}

// ---------------------------------------------------------------------------
// rollForEvent — called each tick, may trigger an event
// ---------------------------------------------------------------------------
export function rollForEvent(eventState, gameState, villagers, buildings) {
  // 8% base chance per tick
  if (Math.random() > 0.08) return null;

  const phase = getCurrentPhase(gameState.tick);

  // Filter eligible events
  const eligible = WORLD_EVENTS.filter(ev => {
    if (!ev.phases.includes(phase)) return false;
    if (gameState.day < ev.minDay) return false;
    if (eventState.cooldowns[ev.id] && eventState.cooldowns[ev.id] > 0) return false;
    if (!ev.trigger(gameState, villagers, buildings)) return false;
    return true;
  });

  if (eligible.length === 0) return null;

  // Weighted random selection
  const chosen = weightedRandom(eligible);

  // Apply the event
  const result = chosen.apply(gameState, villagers, buildings);

  // Set cooldown
  eventState.cooldowns[chosen.id] = chosen.cooldown;

  // Add to history (cap at 20)
  eventState.history.push({
    id: chosen.id,
    name: chosen.name,
    category: chosen.category,
    day: gameState.day,
    tick: gameState.tick,
    message: result.message,
  });
  if (eventState.history.length > 20) {
    eventState.history.shift();
  }

  // Activate weather if the result includes it
  if (result.effects && result.effects.weather) {
    eventState.activeWeather = { ...result.effects.weather };
    initWeatherParticles(eventState, 800, 600); // default canvas size; updated on draw
  }

  return { event: chosen, result };
}

// ---------------------------------------------------------------------------
// applyEventEffects — apply resource / faith changes from event result
// ---------------------------------------------------------------------------
export function applyEventEffects(result, gameState) {
  if (!result || !result.effects) return '';

  const effects = result.effects;
  const parts = [];

  const resourceKeys = ['wood', 'stone', 'food', 'iron', 'herbs'];
  for (const key of resourceKeys) {
    if (effects[key] !== undefined) {
      gameState.resources[key] = Math.max(0, (gameState.resources[key] || 0) + effects[key]);
      const sign = effects[key] >= 0 ? '+' : '';
      parts.push(`${key} ${sign}${effects[key]}`);
    }
  }

  if (effects.faith !== undefined) {
    gameState.faith = (gameState.faith || 0) + effects.faith;
    const sign = effects.faith >= 0 ? '+' : '';
    parts.push(`faith ${sign}${effects.faith}`);
  }

  if (effects.monsterBuff) {
    parts.push(`monsters x${effects.monsterBuff}`);
  }

  if (effects.newVillager) {
    parts.push('new villager joins');
  }

  // Add to gameState.events array if it exists
  if (gameState.events && result.message) {
    gameState.events.push(result.message);
  }

  if (parts.length === 0) return result.message || '';
  return `${result.message} (${parts.join(', ')})`;
}

// ---------------------------------------------------------------------------
// updateWeather — tick down active weather duration
// ---------------------------------------------------------------------------
export function updateWeather(eventState, dt) {
  if (!eventState.activeWeather) return;

  eventState.activeWeather.ticksRemaining -= (dt || 1);
  if (eventState.activeWeather.ticksRemaining <= 0) {
    eventState.activeWeather = null;
    eventState.particles = [];
  }
}

// ---------------------------------------------------------------------------
// Particle initializer for weather types
// ---------------------------------------------------------------------------
function initWeatherParticles(eventState, canvasW, canvasH) {
  eventState.particles = [];
  const weather = eventState.activeWeather;
  if (!weather) return;

  switch (weather.type) {
    case 'rain':
      for (let i = 0; i < 100; i++) {
        eventState.particles.push({
          x: Math.random() * canvasW,
          y: Math.random() * canvasH,
          speed: rand(4, 8),
          length: rand(10, 22),
        });
      }
      break;

    case 'blizzard':
      for (let i = 0; i < 80; i++) {
        eventState.particles.push({
          x: Math.random() * canvasW,
          y: Math.random() * canvasH,
          speed: rand(2, 5),
          size: rand(2, 5),
          drift: rand(-1, 1),
        });
      }
      break;

    case 'fog':
      for (let i = 0; i < 6; i++) {
        eventState.particles.push({
          x: Math.random() * canvasW,
          y: rand(canvasH * 0.2, canvasH * 0.8),
          radius: rand(100, 250),
          drift: rand(0.2, 0.8),
          opacity: rand(0.1, 0.25),
        });
      }
      break;

    case 'storm':
      eventState.particles.push({ flashTimer: 0, flashDuration: 0 });
      for (let i = 0; i < 120; i++) {
        eventState.particles.push({
          x: Math.random() * canvasW,
          y: Math.random() * canvasH,
          speed: rand(6, 12),
          length: rand(14, 28),
        });
      }
      break;

    case 'clear':
      // no particles needed for clear; we draw a gradient
      break;
  }
}

// ---------------------------------------------------------------------------
// updateParticles — animate weather particles each frame
// ---------------------------------------------------------------------------
export function updateParticles(eventState, canvasW, canvasH, dt) {
  const weather = eventState.activeWeather;
  if (!weather) return;

  const delta = dt || 1;

  switch (weather.type) {
    case 'rain':
      for (const p of eventState.particles) {
        p.x += delta * 1.5;
        p.y += delta * p.speed;
        if (p.y > canvasH) { p.y = -p.length; p.x = Math.random() * canvasW; }
        if (p.x > canvasW) p.x -= canvasW;
      }
      break;

    case 'blizzard':
      for (const p of eventState.particles) {
        p.x += delta * (p.drift + 1.2);
        p.y += delta * p.speed;
        if (p.y > canvasH) { p.y = -p.size; p.x = Math.random() * canvasW; }
        if (p.x > canvasW) p.x -= canvasW;
        if (p.x < 0) p.x += canvasW;
      }
      break;

    case 'fog':
      for (const p of eventState.particles) {
        p.x += delta * p.drift;
        if (p.x - p.radius > canvasW) p.x = -p.radius;
      }
      break;

    case 'storm': {
      const flash = eventState.particles[0];
      if (flash) {
        if (flash.flashTimer > 0) {
          flash.flashTimer -= delta;
        } else if (Math.random() < 0.005 * delta) {
          flash.flashTimer = rand(2, 6);
          flash.flashDuration = flash.flashTimer;
        }
      }
      for (let i = 1; i < eventState.particles.length; i++) {
        const p = eventState.particles[i];
        p.x += delta * 2;
        p.y += delta * p.speed;
        if (p.y > canvasH) { p.y = -p.length; p.x = Math.random() * canvasW; }
        if (p.x > canvasW) p.x -= canvasW;
      }
      break;
    }
  }
}

// ---------------------------------------------------------------------------
// drawWeatherEffects — render weather visuals onto the canvas
// ---------------------------------------------------------------------------
export function drawWeatherEffects(ctx, eventState, canvasW, canvasH) {
  const weather = eventState.activeWeather;
  if (!weather) return;

  // Re-initialize particles if canvas size has changed and particles are empty
  if (eventState.particles.length === 0 && weather.type !== 'clear') {
    initWeatherParticles(eventState, canvasW, canvasH);
  }

  ctx.save();

  switch (weather.type) {
    case 'rain':
      ctx.strokeStyle = 'rgba(150, 170, 200, 0.5)';
      ctx.lineWidth = 1;
      for (const p of eventState.particles) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 3, p.y + p.length);
        ctx.stroke();
      }
      // Slight darkening overlay
      ctx.fillStyle = 'rgba(40, 50, 70, 0.1)';
      ctx.fillRect(0, 0, canvasW, canvasH);
      break;

    case 'fog':
      // Semi-transparent white overlay
      ctx.fillStyle = 'rgba(200, 210, 220, 0.15)';
      ctx.fillRect(0, 0, canvasW, canvasH);
      // Moving gradient patches
      for (const p of eventState.particles) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(220, 225, 235, ${p.opacity})`);
        grad.addColorStop(1, 'rgba(220, 225, 235, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
      }
      break;

    case 'storm': {
      // Dark overlay
      ctx.fillStyle = 'rgba(15, 15, 30, 0.35)';
      ctx.fillRect(0, 0, canvasW, canvasH);
      // Rain (heavier than normal rain)
      ctx.strokeStyle = 'rgba(130, 150, 190, 0.6)';
      ctx.lineWidth = 1.5;
      for (let i = 1; i < eventState.particles.length; i++) {
        const p = eventState.particles[i];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 4, p.y + p.length);
        ctx.stroke();
      }
      // Lightning flash
      const flash = eventState.particles[0];
      if (flash && flash.flashTimer > 0) {
        const alpha = 0.3 * (flash.flashTimer / flash.flashDuration);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(0, 0, canvasW, canvasH);
      }
      break;
    }

    case 'blizzard':
      // White haze
      ctx.fillStyle = 'rgba(230, 235, 245, 0.15)';
      ctx.fillRect(0, 0, canvasW, canvasH);
      // Snow particles — thicker diagonal lines
      ctx.fillStyle = 'rgba(240, 245, 255, 0.8)';
      for (const p of eventState.particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      break;

    case 'clear': {
      // Faint yellow radial gradient from top center (sunbeams)
      const grad = ctx.createRadialGradient(
        canvasW * 0.5, 0, 0,
        canvasW * 0.5, 0, canvasH * 0.7
      );
      grad.addColorStop(0, 'rgba(255, 245, 180, 0.12)');
      grad.addColorStop(0.5, 'rgba(255, 240, 160, 0.05)');
      grad.addColorStop(1, 'rgba(255, 240, 160, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvasW, canvasH);
      break;
    }
  }

  ctx.restore();
}

// ---------------------------------------------------------------------------
// getActiveWeatherEffects — returns current modifiers
// ---------------------------------------------------------------------------
export function getActiveWeatherEffects(eventState) {
  const defaults = { speedMultiplier: 1.0, sightMultiplier: 1.0, monsterBuff: 1.0 };
  if (!eventState || !eventState.activeWeather) return defaults;

  switch (eventState.activeWeather.type) {
    case 'rain':
      return { speedMultiplier: 0.7, sightMultiplier: 1.0, monsterBuff: 1.0 };
    case 'fog':
      return { speedMultiplier: 1.0, sightMultiplier: 0.5, monsterBuff: 1.0 };
    case 'storm':
      return { speedMultiplier: 0.5, sightMultiplier: 0.8, monsterBuff: 1.0 };
    case 'blizzard':
      return { speedMultiplier: 0.3, sightMultiplier: 0.6, monsterBuff: 1.0 };
    case 'clear':
      return { speedMultiplier: 1.0, sightMultiplier: 1.0, monsterBuff: 1.0 };
    default:
      return defaults;
  }
}

// ---------------------------------------------------------------------------
// getEventHistory — returns last N events for AI thought context
// ---------------------------------------------------------------------------
export function getEventHistory(eventState, count) {
  if (!eventState || !eventState.history) return [];
  const n = Math.min(count || 5, eventState.history.length);
  return eventState.history.slice(-n);
}

// ---------------------------------------------------------------------------
// Tick cooldowns — should be called each tick to decrement cooldown counters
// ---------------------------------------------------------------------------
export function tickCooldowns(eventState) {
  for (const id in eventState.cooldowns) {
    eventState.cooldowns[id]--;
    if (eventState.cooldowns[id] <= 0) {
      delete eventState.cooldowns[id];
    }
  }
}
