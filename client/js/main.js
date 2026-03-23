/**
 * AI Village: Realm of Shadows — Main game loop.
 * Integrates map, villagers, buildings, day/night cycle, minimap, and UI.
 */

import { generateMap, TILE, TILE_INFO, hasAdjacentTile } from './map.js';
import { createVillagers, updateVillagers, drawVillager, promoteToKnight } from './villager.js';
import { preloadSprites } from './sprites.js';
import { getDayNightState, applyDayNightOverlay, drawPointLight, PHASES } from './daynight.js';
import { drawBuildings, getBuildingLights, BUILDING_DEFS, BUILDING_COSTS } from './buildings.js';
import { drawMinimap } from './minimap.js';
import { createInputHandler } from './input.js';
import { getApiKey, setApiKey, getModel, setModel, isAiEnabled, testConnection, getGuidanceResponse, getThoughtResponse } from './ai.js';
import { preloadMonsterSprites, createMonster, updateMonsters, drawMonster, spawnWave, getMonsterAt } from './monsters.js';
import { createCombatState, processCombatTick, getEngagedVillagerIds, getEngagedMonsterIds, updateCombatEffects, drawCombatEffects, drawHPBar } from './combat.js';
import { preloadIcons, getEquipmentBonuses, canCraft, craftItem, getAvailableCrafts, equipItem, ITEM_DEFS, RESOURCE_ICONS } from './inventory.js';
import { createEventSystem, rollForEvent, applyEventEffects, updateWeather, updateParticles, drawWeatherEffects, getActiveWeatherEffects, tickCooldowns } from './events-system.js';
import { createVisibilityMap, updateVisibility, drawFogOfWar, revealArea, getExplorationPercentage } from './exploration.js';
import { preloadHUDAssets, createHUDState, handleClick, drawSelectionRing, drawInspectPanel, drawThreatIndicators, drawDayProgressBar, drawExplorationCounter, isClickInPanel } from './hud.js';
import { generatePOIs, checkPOIDiscovery, getPOIDiscoveryEffects, drawPOIMarkers, drawPOIOnMinimap } from './poi.js';
import { initMorale, updateMorale, getMoraleEffects, rollDesertion, checkProximityBonds, getFriendshipBonus, processAllyDeath, getMoraleContext } from './morale.js';
import { createScoutState, isScoutCapable, assignScoutMission, updateScoutMissions, getScoutSightRadius, checkFogAmbush, drawScoutMarkers, drawScoutMarkerOnMinimap } from './scout.js';
import { createQuestState, initQuests, checkQuestTriggers, updateQuestProgress, getQuestRewards, trackMonsterKill, trackPOIDiscovery, getActiveQuests, getActProgress } from './quests.js';
import { createChainState, checkChainTriggers, updateChains, resolveChoice, getActiveChainSummaries } from './event-chains.js';
import { UPGRADE_DEFS, canUpgrade, performUpgrade, getUpgradeableBuildings } from './upgrades.js';
import { initProgression, grantWorkXP, grantBuildXP, grantCombatXP, grantKillXP, grantScoutXP, grantSurvivalXP, grantDiscoveryXP, getXPProgress, getVillagerTitle, drawXPBar, drawLevelUpEffect } from './progression.js';

// --- Configuration ---
const TILE_SIZE = 32;
const MAP_SIZE = 30;
const MAP_SEED = Math.floor(Math.random() * 99999);
const STARTING_VILLAGERS = 12;

// Tick timing
const BASE_TICK_MS = 5000; // 5 seconds per tick at 1x speed
let tickSpeedMultiplier = 1;
let paused = false;

// --- Game State ---
const gameState = {
  day: 1,
  tick: 23,       // Start at dawn
  tickAccumulator: 0,
  resources: { wood: 30, stone: 15, food: 30, iron: 0, herbs: 5 },
  faith: 70,
  events: [],
};

// --- Init ---
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const minimapCanvas = document.getElementById('minimap-canvas');

const { tiles, buildings, resourceNodes } = generateMap(MAP_SIZE, MAP_SEED);
const villagers = createVillagers(STARTING_VILLAGERS, Math.floor(MAP_SIZE / 2), MAP_SEED + 1);
const buildingLights = getBuildingLights(buildings);
const input = createInputHandler(canvas);

const camera = { x: 0, y: 0 };

// --- New Systems ---
const monsters = [];
const combatState = createCombatState();
const eventSystem = createEventSystem();
const visibilityMap = createVisibilityMap(MAP_SIZE);
const hudState = createHUDState();
let frameCount = 0;

// --- Phase Systems ---
const pois = generatePOIs(tiles, MAP_SIZE, MAP_SEED);
const scoutState = createScoutState();
const questState = createQuestState();
initQuests(questState);
const chainState = createChainState();
// Disease tracking: { active, ticksRemaining }
const diseaseState = { active: false, ticksRemaining: 0 };

// Initialize morale and progression on all starting villagers
for (const v of villagers) {
  initMorale(v);
  initProgression(v);
}

// --- Visual Effect State ---
const lootFloats = []; // { text, x, y, timer, color }
let questFanfare = 0; // countdown frames for screen flash

// Reveal village center area at start
revealArea(visibilityMap, Math.floor(MAP_SIZE / 2), Math.floor(MAP_SIZE / 2), 6, MAP_SIZE);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Center camera on village
camera.x = (MAP_SIZE / 2) * TILE_SIZE - canvas.width / 2;
camera.y = (MAP_SIZE / 2) * TILE_SIZE - canvas.height / 2;

// --- Event Log ---
function addEvent(text, type = '') {
  const phase = getDayNightState(gameState.tick, 0).phase;
  const timeStr = `D${gameState.day} ${phase}`;
  gameState.events.push({ text, type, time: timeStr });
  if (gameState.events.length > 50) gameState.events.shift();

  const logEl = document.getElementById('log-entries');
  const entry = document.createElement('div');
  entry.className = `log-entry event-${type}`;
  entry.innerHTML = `<span class="log-time">[${timeStr}]</span> ${text}`;
  logEl.appendChild(entry);
  // Cap DOM nodes to prevent unbounded growth
  while (logEl.childNodes.length > 60) {
    logEl.removeChild(logEl.firstChild);
  }
  logEl.parentElement.scrollTop = logEl.parentElement.scrollHeight;
}

// Initial events
addEvent('The village stirs at dawn. A new day begins.', 'discovery');
addEvent('You are The Voice. Wait for a villager to seek your counsel.', 'guidance');

// --- Speed Controls ---
document.getElementById('btn-pause').addEventListener('click', () => {
  paused = !paused;
  updateSpeedButtons();
});
document.getElementById('btn-speed1').addEventListener('click', () => {
  paused = false; tickSpeedMultiplier = 1; updateSpeedButtons();
});
document.getElementById('btn-speed2').addEventListener('click', () => {
  paused = false; tickSpeedMultiplier = 3; updateSpeedButtons();
});
document.getElementById('btn-speed3').addEventListener('click', () => {
  paused = false; tickSpeedMultiplier = 8; updateSpeedButtons();
});

function updateSpeedButtons() {
  document.querySelectorAll('#tick-controls button').forEach(b => b.classList.remove('active'));
  if (paused) {
    document.getElementById('btn-pause').classList.add('active');
  } else if (tickSpeedMultiplier === 1) {
    document.getElementById('btn-speed1').classList.add('active');
  } else if (tickSpeedMultiplier === 3) {
    document.getElementById('btn-speed2').classList.add('active');
  } else {
    document.getElementById('btn-speed3').classList.add('active');
  }
}

// --- Tile Rendering ---
function drawTiles() {
  const startCol = Math.max(0, Math.floor(camera.x / TILE_SIZE));
  const startRow = Math.max(0, Math.floor(camera.y / TILE_SIZE));
  const endCol = Math.min(MAP_SIZE, startCol + Math.ceil(canvas.width / TILE_SIZE) + 2);
  const endRow = Math.min(MAP_SIZE, startRow + Math.ceil(canvas.height / TILE_SIZE) + 2);

  for (let y = startRow; y < endRow; y++) {
    for (let x = startCol; x < endCol; x++) {
      const tile = tiles[y][x];
      const info = TILE_INFO[tile];
      const sx = x * TILE_SIZE - camera.x;
      const sy = y * TILE_SIZE - camera.y;

      ctx.fillStyle = info?.color || '#000';
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);

      // Tile detail decorations
      drawTileDetail(ctx, tile, sx, sy, TILE_SIZE, x, y);
    }
  }
}

function drawTileDetail(ctx, tile, sx, sy, s, tx, ty) {
  // Use tile coords as a pseudo-random seed for consistent decorations
  const hash = ((tx * 7919 + ty * 6271) & 0xffff) / 0xffff;

  switch (tile) {
    case TILE.FOREST:
      // Tree trunks and canopy
      ctx.fillStyle = '#4a3a1a';
      ctx.fillRect(sx + s * 0.4, sy + s * 0.5, s * 0.15, s * 0.35);
      ctx.fillStyle = '#1a4a1a';
      ctx.beginPath();
      ctx.arc(sx + s * 0.47, sy + s * 0.35, s * 0.3, 0, Math.PI * 2);
      ctx.fill();
      if (hash > 0.5) {
        // Second smaller tree
        ctx.fillStyle = '#4a3a1a';
        ctx.fillRect(sx + s * 0.7, sy + s * 0.55, s * 0.1, s * 0.3);
        ctx.fillStyle = '#1a4a1a';
        ctx.beginPath();
        ctx.arc(sx + s * 0.75, sy + s * 0.45, s * 0.2, 0, Math.PI * 2);
        ctx.fill();
      }
      break;

    case TILE.WATER:
      // Wave highlights
      ctx.fillStyle = 'rgba(100, 180, 255, 0.2)';
      const waveOffset = (Date.now() / 1000 + hash * 10) % 1;
      ctx.fillRect(sx + waveOffset * s * 0.3, sy + s * 0.3, s * 0.4, 1);
      ctx.fillRect(sx + s * 0.2 + waveOffset * s * 0.2, sy + s * 0.6, s * 0.3, 1);
      break;

    case TILE.STONE:
      // Rock texture
      ctx.fillStyle = 'rgba(100,100,100,0.5)';
      ctx.fillRect(sx + s * 0.2, sy + s * 0.3, s * 0.3, s * 0.25);
      ctx.fillStyle = 'rgba(80,80,80,0.5)';
      ctx.fillRect(sx + s * 0.5, sy + s * 0.5, s * 0.3, s * 0.3);
      break;

    case TILE.FARM:
      // Crop rows
      ctx.strokeStyle = 'rgba(90,120,40,0.6)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(sx + 4, sy + 6 + i * (s * 0.22));
        ctx.lineTo(sx + s - 4, sy + 6 + i * (s * 0.22));
        ctx.stroke();
      }
      // Wheat dots
      ctx.fillStyle = '#aaaa40';
      for (let i = 0; i < 6; i++) {
        const dx = (((hash * (i + 1) * 1000) | 0) % (s - 8)) + 4;
        const dy = (((hash * (i + 1) * 777) | 0) % (s - 8)) + 4;
        ctx.fillRect(sx + dx, sy + dy, 2, 3);
      }
      break;

    case TILE.HERBS:
      // Small green plants
      ctx.fillStyle = '#2a8a3a';
      for (let i = 0; i < 4; i++) {
        const dx = 4 + (((hash * (i + 1) * 999) | 0) % (s - 10));
        const dy = 4 + (((hash * (i + 1) * 555) | 0) % (s - 10));
        ctx.beginPath();
        ctx.arc(sx + dx, sy + dy, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      break;

    case TILE.IRON:
      // Dark metallic deposits
      ctx.fillStyle = '#3a3a4a';
      ctx.fillRect(sx + s * 0.2, sy + s * 0.3, s * 0.6, s * 0.4);
      ctx.fillStyle = '#5a5a6a';
      ctx.fillRect(sx + s * 0.3, sy + s * 0.35, s * 0.2, s * 0.15);
      break;

    case TILE.RUINS:
      // Crumbled stone pillars
      ctx.fillStyle = '#5a5a5a';
      ctx.fillRect(sx + s * 0.1, sy + s * 0.4, s * 0.15, s * 0.5);
      ctx.fillRect(sx + s * 0.6, sy + s * 0.3, s * 0.2, s * 0.6);
      ctx.fillStyle = '#4a4a4a';
      ctx.fillRect(sx + s * 0.3, sy + s * 0.6, s * 0.35, s * 0.15);
      break;

    case TILE.PATH:
      // Dirt path with pebbles
      ctx.fillStyle = 'rgba(120,100,70,0.3)';
      ctx.fillRect(sx + 2, sy + 2, s - 4, s - 4);
      break;

    case TILE.DARK:
      // Fog of war effect
      ctx.fillStyle = 'rgba(5,5,15,0.95)';
      ctx.fillRect(sx, sy, s, s);
      // Occasional eerie glow
      if (hash > 0.95) {
        ctx.fillStyle = 'rgba(80, 0, 0, 0.15)';
        ctx.beginPath();
        ctx.arc(sx + s / 2, sy + s / 2, s * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
  }
}

// --- Camera Update ---
function updateCamera(dt) {
  const speed = 200 * dt;
  const { dx, dy } = input.getCameraMovement(speed);
  camera.x += dx;
  camera.y += dy;

  // Handle drag
  const drag = input.getDrag();
  if (drag && !input.getCameraStart()) {
    input.setCameraStart(camera);
  }
  const dragOffset = input.getDragOffset();
  if (dragOffset) {
    camera.x = dragOffset.x;
    camera.y = dragOffset.y;
  }

  // Clamp
  const maxX = MAP_SIZE * TILE_SIZE - canvas.width;
  const maxY = MAP_SIZE * TILE_SIZE - canvas.height;
  camera.x = Math.max(0, Math.min(camera.x, maxX));
  camera.y = Math.max(0, Math.min(camera.y, maxY));
}

function tileAt(tiles, x, y, mapSize) {
  const tx = Math.floor(x);
  const ty = Math.floor(y);
  if (tx < 0 || ty < 0 || tx >= mapSize || ty >= mapSize) return -1;
  return tiles[ty][tx];
}

function canAfford(buildingType, resources) {
  const costs = BUILDING_COSTS[buildingType]?.cost;
  if (!costs) return false;
  for (const [res, amt] of Object.entries(costs)) {
    if ((resources[res] || 0) < amt) return false;
  }
  return true;
}

function tryAssignBuild(builder, buildings, gameState, tiles, mapSize) {
  const center = Math.floor(mapSize / 2);
  const houseCount = buildings.filter(b => b.type === 'house').length;
  const farmCount = buildings.filter(b => b.type === 'farm').length;
  const hasWorkshop = buildings.some(b => b.type === 'workshop');
  const hasWatchtower = buildings.some(b => b.type === 'watchtower');
  const hasStorehouse = buildings.some(b => b.type === 'storehouse');
  const wallCount = buildings.filter(b => b.type === 'wall').length;
  const hasMiners = villagers.some(v => v.vclass === 'miner');
  const hasHunters = villagers.some(v => v.vclass === 'hunter');
  const totalResources = Object.values(gameState.resources).reduce((a, b) => a + b, 0);

  // Sorted by priority
  const needs = [
    { type: 'house', needed: villagers.length >= houseCount * 2 },
    { type: 'farm', needed: farmCount < 4 },
    { type: 'workshop', needed: !hasWorkshop && hasMiners },
    { type: 'watchtower', needed: !hasWatchtower && hasHunters },
    { type: 'wall', needed: wallCount < 6 },
    { type: 'storehouse', needed: !hasStorehouse && totalResources > 80 },
  ];

  for (const need of needs) {
    if (!need.needed) continue;
    if (!canAfford(need.type, gameState.resources)) continue;

    // Find a valid build site near center
    const def = BUILDING_DEFS[need.type] || { w: 1, h: 1 };
    const site = findBuildSite(tiles, buildings, center, mapSize, def.w, def.h);
    if (!site) continue;

    // Deduct resources
    const costs = BUILDING_COSTS[need.type].cost;
    for (const [res, amt] of Object.entries(costs)) {
      gameState.resources[res] -= amt;
    }

    builder.buildTarget = { type: need.type, x: site.x, y: site.y };
    builder.targetX = site.x + 0.5;
    builder.targetY = site.y + 0.5;
    builder.facing = site.x > builder.x ? 1 : -1;
    builder.state = 'walking';
    return true;
  }
  return false;
}

function findBuildSite(tiles, buildings, center, mapSize, bw, bh) {
  // Search in expanding rings from center
  for (let ring = 2; ring < 8; ring++) {
    for (let dy = -ring; dy <= ring; dy++) {
      for (let dx = -ring; dx <= ring; dx++) {
        if (Math.abs(dx) !== ring && Math.abs(dy) !== ring) continue; // only ring edges
        const tx = center + dx;
        const ty = center + dy;
        if (tx < 0 || ty < 0 || tx + bw > mapSize || ty + bh > mapSize) continue;

        // Check all tiles the building would occupy
        let valid = true;
        for (let by = 0; by < bh && valid; by++) {
          for (let bx = 0; bx < bw && valid; bx++) {
            const tile = tiles[ty + by][tx + bx];
            if (tile !== TILE.VILLAGE_GROUND && tile !== TILE.GRASS) valid = false;
          }
        }
        if (!valid) continue;

        // Check no existing building overlaps
        let overlap = false;
        for (const b of buildings) {
          const bDef = BUILDING_DEFS[b.type] || { w: 1, h: 1 };
          if (tx < b.x + bDef.w && tx + bw > b.x && ty < b.y + bDef.h && ty + bh > b.y) {
            overlap = true;
            break;
          }
        }
        if (overlap) continue;

        return { x: tx, y: ty };
      }
    }
  }
  return null;
}

// --- Villager Thought Templates ---
const THOUGHT_TEMPLATES = {
  hunter: [
    "The forest is thinning. Am I hunting too much in one area?",
    "I spotted strange tracks today. Should I follow them deeper?",
    "The other villagers depend on me for food. Can I do more?",
    "I wonder if there are better hunting grounds beyond the known lands.",
    "My bow arm aches. Is this life sustainable?",
  ],
  miner: [
    "The veins here are rich but the stone is hard. Is there a better technique?",
    "I feel the mountain breathe. Am I digging too deep?",
    "Iron is scarce. Should I focus on stone instead?",
    "The other miners seem tired. Should we take turns resting?",
    "I found a glint of something unusual in the rock today.",
  ],
  builder: [
    "The village needs more shelter. What should I build next?",
    "This wood is warped. Should I use it anyway or seek better timber?",
    "I see cracks in the chapel wall. Should I repair or reinforce?",
    "We're running low on building materials. Should I gather or build?",
    "The village layout could be more defensible. Should I suggest changes?",
  ],
  knight: [
    "The perimeter is quiet tonight. Too quiet?",
    "Am I serving the village well in this role?",
    "I miss my old trade, but duty calls. Was this the right choice?",
    "The darkness beyond the torchlight feels... watchful.",
    "Should I train others to fight, or is my solo watch enough?",
  ],
};

const THOUGHT_TEMPLATES_GENERAL = [
  "I wonder what lies beyond the edges of the map.",
  "Food was scarce yesterday. Will we survive another winter?",
  "The Voice hasn't spoken in a while. Have we been forgotten?",
  "I feel a strange connection to this village. Why?",
  "My strength is {strength_status}. What does that mean for my future?",
  "The night sounds are getting louder. Should I be worried?",
  "I trust my fellow villagers... mostly. But {personality_doubt}.",
  "Today feels different. Something is changing.",
];

const MORALE_THOUGHTS = {
  high: [
    "Life in this village fills me with hope. We're building something that matters.",
    "I feel strong today. The work is hard but our progress is real.",
    "The bonds between us grow stronger each day. We will endure.",
  ],
  low: [
    "Despair gnaws at me. Is this village worth saving, or are we prolonging the inevitable?",
    "I can barely bring myself to work. The weight of this place crushes my spirit.",
    "Others seem to falter too. How long before someone breaks?",
  ],
  quest: [
    "Our quest weighs on me — {quest_name}. Can we really accomplish this?",
    "I keep thinking about our mission. {quest_name}... the stakes grow higher.",
    "Every step toward completing {quest_name} feels like it matters more than the last.",
  ],
  relationship: [
    "I've grown close to {friend_name}. Their presence gives me courage.",
    "Working alongside {friend_name} makes the hardest tasks bearable.",
  ],
};

const PERSONALITY_DOUBTS = {
  Stalwart: "I must stay strong regardless",
  Skeptic: "can I really trust any of them?",
  Dreamer: "maybe change is what we need",
  Coward: "what if they can't protect me?",
  Zealot: "the faithless may doom us all",
  Pragmatist: "sentiment aside, are they pulling their weight?",
};

function generateThought(v) {
  const classThoughts = THOUGHT_TEMPLATES[v.vclass] || THOUGHT_TEMPLATES_GENERAL;
  const allOptions = [...classThoughts, ...THOUGHT_TEMPLATES_GENERAL];

  // Add morale-driven thoughts
  const morale = v.morale !== undefined ? v.morale : 60;
  if (morale >= 75 && Math.random() < 0.3) {
    allOptions.push(...MORALE_THOUGHTS.high);
  } else if (morale <= 30 && Math.random() < 0.4) {
    allOptions.push(...MORALE_THOUGHTS.low);
  }

  // Add quest-driven thoughts
  const activeQuests = getActiveQuests(questState);
  if (activeQuests.length > 0 && Math.random() < 0.25) {
    allOptions.push(...MORALE_THOUGHTS.quest);
  }

  // Add relationship thoughts
  if (v.relationships && Object.keys(v.relationships).length > 0 && Math.random() < 0.2) {
    allOptions.push(...MORALE_THOUGHTS.relationship);
  }

  let thought = allOptions[Math.floor(Math.random() * allOptions.length)];

  // Fill in template variables
  const strengthDesc = v.stats.strength >= 7 ? 'formidable' : v.stats.strength >= 5 ? 'average' : 'lacking';
  thought = thought.replace('{strength_status}', strengthDesc);
  thought = thought.replace('{personality_doubt}', PERSONALITY_DOUBTS[v.personality] || 'I wonder');

  // Fill quest name
  if (activeQuests.length > 0) {
    thought = thought.replace('{quest_name}', activeQuests[0].title);
  } else {
    thought = thought.replace('{quest_name}', 'our survival');
  }

  // Fill friend name
  if (v.relationships && Object.keys(v.relationships).length > 0) {
    const friendId = Object.keys(v.relationships).sort((a, b) => v.relationships[b] - v.relationships[a])[0];
    const friend = villagers.find(vv => String(vv.id) === friendId);
    thought = thought.replace('{friend_name}', friend ? friend.name : 'a companion');
  } else {
    thought = thought.replace('{friend_name}', 'my fellow villagers');
  }

  return thought;
}

function triggerVillagerThought(phase) {
  // Each tick, small chance for a villager to have a thought (targeting 1-3 per day)
  // There are ~12 day ticks, so we want ~0.15 chance per villager per tick for ~2/day avg
  // But we process one villager at a time to avoid API spam
  const candidates = villagers.filter(v =>
    v.thoughtsToday < 3 &&
    !v.thinkingInProgress &&
    v.state !== 'sleeping'
  );

  if (candidates.length === 0) return;

  // Only trigger one thought per tick max across all villagers
  if (Math.random() > 0.12) return;

  const v = candidates[Math.floor(Math.random() * candidates.length)];
  const thought = generateThought(v);

  v.thinkingInProgress = true;
  v.speech = `"${thought.substring(0, 35)}..."`;
  v.speechTimer = 3;

  const activeQ = getActiveQuests(questState);
  const gameContext = {
    day: gameState.day,
    tick: gameState.tick,
    phase,
    resources: { ...gameState.resources },
    morale: v.morale,
    moodLabel: getMoraleEffects(v).moodLabel,
    activeQuests: activeQ.map(q => q.title).slice(0, 2),
    title: getVillagerTitle(v),
  };

  getThoughtResponse(v, thought, gameContext).then(response => {
    v.thinkingInProgress = false;
    v.thoughtsToday++;

    const entry = {
      thought,
      response: response || '...',
      day: gameState.day,
      tick: gameState.tick,
    };
    v.thoughts.push(entry);

    // Cap stored thoughts at 20 per villager
    if (v.thoughts.length > 20) v.thoughts.shift();

    if (response) {
      v.speech = response.substring(0, 50) + (response.length > 50 ? '...' : '');
      v.speechTimer = 4;
      addEvent(`${v.name} reflects: "${response.substring(0, 60)}${response.length > 60 ? '...' : ''}"`, 'guidance');
    }
  });
}

// --- Game Tick ---
function processTick() {
  gameState.tick++;
  if (gameState.tick > 24) {
    gameState.tick = 1;
    gameState.day++;
  }

  const phase = getDayNightState(gameState.tick, 0).phase;

  // Periodic events based on time of day
  if (gameState.tick === 1) {
    addEvent(`Day ${gameState.day} begins. The sun rises over the village.`, 'discovery');
    // Reset daily thought counter for all villagers
    for (const v of villagers) {
      v.thoughtsToday = 0;
    }
  }
  if (gameState.tick === 13) {
    addEvent('Dusk approaches. The villagers prepare for nightfall.', 'danger');
  }
  if (gameState.tick === 15) {
    addEvent('Night falls. Strange sounds echo from the darkness...', 'danger');
    // Spawn monsters at nightfall
    const newMonsters = spawnWave(gameState.day, gameState.tick, tiles, MAP_SIZE);
    if (newMonsters.length > 0) {
      monsters.push(...newMonsters);
      addEvent(`${newMonsters.length} creature(s) emerge from the darkness!`, 'danger');
    }
  }
  if (gameState.tick === 23) {
    addEvent('Dawn breaks. The village survived another night.', 'discovery');
    // Survival XP for surviving the night
    for (const v of villagers) grantSurvivalXP(v);
  }

  // Per-villager resource gathering
  if (phase === PHASES.DAY) {
    const hasWorkshop = buildings.some(b => b.type === 'workshop');
    for (const v of villagers) {
      if (v.state !== 'working') continue;
      const tile = tileAt(tiles, v.x, v.y, MAP_SIZE);
      const strengthBonus = (v.stats.strength || 5) / 5;

      if (v.vclass === 'hunter') {
        if (tile === TILE.FOREST || tile === TILE.FARM) {
          gameState.resources.food += Math.floor(1 * strengthBonus);
          if (tile === TILE.FOREST) gameState.resources.wood += 1;
          grantWorkXP(v);
        }
      } else if (v.vclass === 'miner') {
        const hasStoneAdj = hasAdjacentTile(tiles, Math.floor(v.x), Math.floor(v.y), MAP_SIZE, TILE.STONE);
        const hasIronAdj = hasAdjacentTile(tiles, Math.floor(v.x), Math.floor(v.y), MAP_SIZE, TILE.IRON);
        const mineBonus = hasWorkshop ? 1.5 : 1;
        if (hasStoneAdj) gameState.resources.stone += Math.floor(1 * strengthBonus * mineBonus);
        if (hasIronAdj && gameState.tick % 2 === 0) gameState.resources.iron += 1;
        if (hasStoneAdj || hasIronAdj) grantWorkXP(v);
      } else if (v.vclass === 'builder') {
        if (tile === TILE.FOREST) {
          gameState.resources.wood += Math.floor(1 * strengthBonus);
          grantWorkXP(v);
        }
      }
    }

    // Passive farm income
    const farmBuildingCount = buildings.filter(b => b.type === 'farm').length;
    gameState.resources.food += farmBuildingCount;
  }

  // Food consumption at end of day (tick 24)
  if (gameState.tick === 24) {
    const foodNeeded = villagers.length;
    const foodAvailable = gameState.resources.food;
    const consumed = Math.min(foodNeeded, foodAvailable);
    gameState.resources.food -= consumed;

    const deficit = foodNeeded - consumed;
    if (deficit > 0) {
      addEvent(`Not enough food! ${deficit} villager(s) go hungry and take damage.`, 'danger');
      const shuffled = [...villagers].sort(() => Math.random() - 0.5);
      for (let i = 0; i < deficit && i < shuffled.length; i++) {
        shuffled[i].hp -= 1;
        shuffled[i].speech = '* starving *';
        shuffled[i].speechTimer = 3;
        if (shuffled[i].hp <= 0) {
          addEvent(`${shuffled[i].name} has died of starvation!`, 'danger');
        }
      }
      // Remove dead villagers (iterate backwards)
      for (let i = villagers.length - 1; i >= 0; i--) {
        if (villagers[i].hp <= 0) {
          villagers.splice(i, 1);
        }
      }
    } else {
      addEvent(`All villagers fed. (${foodAvailable - consumed} food remaining)`, 'discovery');
    }
  }

  // Builder AI: assign builds every 3 ticks
  if (gameState.tick % 3 === 0) {
    for (const v of villagers) {
      if (v.vclass === 'builder' && v.state === 'idle' && !v.buildTarget) {
        tryAssignBuild(v, buildings, gameState, tiles, MAP_SIZE);
      }
    }
  }

  // --- Combat Processing ---
  const combatEvents = processCombatTick(combatState, villagers, monsters, TILE_SIZE);
  for (const evt of combatEvents) {
    if (evt.type === 'damage' && evt.targetType === 'monster') {
      const attacker = villagers.find(v => v.name === evt.sourceName);
      if (attacker) grantCombatXP(attacker);
    }
    if (evt.type === 'death' && evt.targetType === 'monster') {
      addEvent(`${evt.sourceName} slew a monster!`, 'combat');
      trackMonsterKill(questState);
      const killer = villagers.find(v => v.name === evt.sourceName);
      if (killer) grantKillXP(killer);
    } else if (evt.type === 'death' && evt.targetType === 'villager') {
      addEvent(`${evt.sourceName} has fallen in combat!`, 'danger');
    } else if (evt.type === 'flee') {
      addEvent(`A villager flees from combat!`, 'danger');
    }
  }
  // Process loot drops from killed monsters
  if (combatEvents.lootDrops) {
    for (const drop of combatEvents.lootDrops) {
      // Add resources
      for (const [res, amt] of Object.entries(drop.resources)) {
        gameState.resources[res] = (gameState.resources[res] || 0) + amt;
      }
      // Equip items on the killer (if still alive)
      const killerAlive = drop.killerVillager && drop.killerVillager.hp > 0;
      for (const item of drop.items) {
        const def = ITEM_DEFS[item.type];
        if (def && killerAlive) {
          equipItem(drop.killerVillager, { ...def });
          addEvent(`${drop.killerVillager.name} found ${def.name}!`, 'discovery');
        }
      }
      if (Object.keys(drop.resources).length > 0) {
        const resList = Object.entries(drop.resources).map(([r, a]) => `${a} ${r}`).join(', ');
        addEvent(`Loot: ${resList}`, 'discovery');
        // Spawn floating loot text
        lootFloats.push({ text: resList, x: drop.x * TILE_SIZE, y: drop.y * TILE_SIZE, timer: 90, color: '#ffd700' });
      }
      // Item loot floats
      for (const item of drop.items) {
        const def = ITEM_DEFS[item.type];
        if (def) {
          lootFloats.push({ text: `+${def.name}`, x: drop.x * TILE_SIZE, y: drop.y * TILE_SIZE - 12, timer: 90, color: '#ff9944' });
        }
      }
    }
  }
  // Remove dead monsters
  for (let i = monsters.length - 1; i >= 0; i--) {
    if (monsters[i].hp <= 0) monsters.splice(i, 1);
  }
  // Remove dead villagers from combat (with morale effects)
  for (let i = villagers.length - 1; i >= 0; i--) {
    if (villagers[i].hp <= 0) {
      const dead = villagers[i];
      addEvent(`${dead.name} has died in battle!`, 'danger');
      const mourners = processAllyDeath(dead, villagers);
      for (const m of mourners) {
        addEvent(`${m.name} mourns the loss of ${dead.name}...`, 'village');
      }
      villagers.splice(i, 1);
    }
  }
  // Set fighting state for engaged villagers
  const engagedVillagerIds = getEngagedVillagerIds(combatState);
  for (const v of villagers) {
    if (engagedVillagerIds.has(v.id) && v.state !== 'fighting') {
      v.state = 'fighting';
      v.stateTimer = 10;
      v.targetX = null;
      v.targetY = null;
    }
  }

  // --- Random Events ---
  const eventResult = rollForEvent(eventSystem, gameState, villagers, buildings);
  if (eventResult) {
    const msg = applyEventEffects(eventResult.result, gameState);
    if (msg) addEvent(msg, eventResult.event.category || 'discovery');
  }
  tickCooldowns(eventSystem);

  // --- POI Discovery ---
  const newPOIs = checkPOIDiscovery(pois, visibilityMap, MAP_SIZE);
  for (const poi of newPOIs) {
    addEvent(`Discovered: ${poi.type.name} — ${poi.type.description}`, 'discovery');
    trackPOIDiscovery(questState, poi);
    const effects = getPOIDiscoveryEffects(poi);
    // Apply resource gains
    for (const [res, amt] of Object.entries(effects.resources)) {
      gameState.resources[res] = (gameState.resources[res] || 0) + amt;
      if (amt > 0) addEvent(`Found ${amt} ${res}!`, 'discovery');
    }
    // Faith
    if (effects.faith) {
      gameState.faith = Math.min(100, gameState.faith + effects.faith);
      addEvent(`Faith +${effects.faith}`, 'omen');
    }
    // Heal all villagers
    if (effects.healAll) {
      for (const v of villagers) v.hp = Math.min(v.maxHp, v.hp + effects.healAll);
      addEvent(`All villagers healed +${effects.healAll} HP!`, 'village');
    }
    // Spawn monsters at POI location
    for (const mType of effects.spawnMonsters) {
      const m = createMonster(mType, poi.x + (Math.random() - 0.5) * 2, poi.y + (Math.random() - 0.5) * 2);
      if (m) { monsters.push(m); addEvent(`A ${mType} emerges!`, 'danger'); }
    }
    // Reveal fog
    if (effects.revealRadius) {
      revealArea(visibilityMap, poi.x, poi.y, effects.revealRadius, MAP_SIZE);
    }
    // New villagers
    for (let i = 0; i < effects.newVillagers; i++) {
      const recruit = createVillagers(1, poi.x, MAP_SEED + gameState.day * 100 + i)[0];
      if (recruit) { initMorale(recruit); initProgression(recruit); villagers.push(recruit); addEvent(`${recruit.name} joins the village!`, 'npc'); }
    }
    // Disease
    if (effects.diseaseStrength > 0) {
      diseaseState.active = true;
      diseaseState.ticksRemaining = effects.diseaseStrength;
      addEvent('A foul plague spreads from the pit!', 'danger');
    }
    // Lore scroll
    if (effects.loreScroll) {
      addEvent(`Lore: "${effects.loreScroll.substring(0, 80)}..."`, 'discovery');
    }
    // Morale boost and discovery XP for all villagers
    for (const v of villagers) {
      updateMorale(v, ['poi_found']);
      grantDiscoveryXP(v);
    }
  }

  // --- Disease Tick ---
  if (diseaseState.active && diseaseState.ticksRemaining > 0) {
    diseaseState.ticksRemaining--;
    for (const v of villagers) { v.hp = Math.max(1, v.hp - 1); }
    addEvent(`The plague weakens your villagers... (${diseaseState.ticksRemaining} ticks remain)`, 'danger');
    if (diseaseState.ticksRemaining <= 0) {
      diseaseState.active = false;
      addEvent('The plague has run its course.', 'village');
    }
  }

  // --- Scout Missions ---
  const scoutResults = updateScoutMissions(scoutState, villagers);
  for (const completed of scoutResults.completed) {
    addEvent(`${completed.villager.name} completed scouting mission!`, 'discovery');
    revealArea(visibilityMap, completed.targetX, completed.targetY, 8, MAP_SIZE);
    updateMorale(completed.villager, ['discovery']);
    grantScoutXP(completed.villager);
  }
  // Set scout villager movement targets
  for (const mission of scoutState.activeMissions) {
    const v = mission.villager;
    if (mission.phase === 'traveling' && v.state === 'idle') {
      v.targetX = mission.targetX;
      v.targetY = mission.targetY;
      v.state = 'walking';
    }
  }

  // --- Morale & Relationships ---
  // Check starvation morale
  const moraleEvents = [];
  if (gameState.resources.food < villagers.length) moraleEvents.push('starving');
  if (eventResult?.event?.id === 'bad_omen') moraleEvents.push('bad_omen');

  if (moraleEvents.length > 0) {
    for (const v of villagers) updateMorale(v, moraleEvents);
  }
  // Proximity bonds (every 3 ticks to save CPU)
  if (gameState.tick % 3 === 0) {
    checkProximityBonds(villagers, TILE_SIZE);
  }
  // Desertion at night
  if (phase === PHASES.NIGHT) {
    for (let i = villagers.length - 1; i >= 0; i--) {
      if (rollDesertion(villagers[i])) {
        addEvent(`${villagers[i].name} has deserted the village in despair!`, 'danger');
        villagers.splice(i, 1);
      }
    }
  }

  // --- Quest System ---
  const newQuests = checkQuestTriggers(questState, gameState, villagers, buildings, pois);
  for (const qid of newQuests) {
    const quests = getActiveQuests(questState);
    const q = quests.find(quest => quest.id === qid);
    if (q) addEvent(`New Quest: ${q.title} — ${q.description.substring(0, 60)}...`, 'discovery');
  }
  const questProgress = updateQuestProgress(questState, gameState, villagers, buildings, pois, monsters);
  for (const qid of questProgress.completed) {
    const rewards = getQuestRewards(qid);
    if (rewards) {
      if (rewards.faith) gameState.faith = Math.min(100, gameState.faith + rewards.faith);
      if (rewards.resources) {
        for (const [res, amt] of Object.entries(rewards.resources)) {
          gameState.resources[res] = (gameState.resources[res] || 0) + amt;
        }
      }
      if (rewards.healAll) {
        for (const v of villagers) v.hp = Math.min(v.maxHp, v.hp + rewards.healAll);
      }
      if (rewards.moraleAll) {
        for (const v of villagers) updateMorale(v, ['quest_complete']);
      }
      addEvent(`Quest Complete! Rewards claimed.`, 'discovery');
      questFanfare = 45; // trigger screen flash
    }
  }

  // --- Event Chains ---
  const newChains = checkChainTriggers(chainState, gameState, villagers, pois,
    gameState.events);
  for (const chain of newChains) {
    addEvent(`${chain.description}`, 'omen');
  }
  const chainUpdates = updateChains(chainState, gameState, villagers, pois);
  for (const stage of chainUpdates.stageEvents) {
    addEvent(`${stage.title}: ${stage.description.substring(0, 80)}`, 'omen');
    // Apply chain effects
    const fx = stage.effects;
    if (fx) {
      if (fx.damageRandom && villagers.length > 0) {
        const count = Math.min(fx.damageRandom.count || 3, villagers.length);
        const targets = [...villagers].sort(() => Math.random() - 0.5).slice(0, count);
        for (const v of targets) v.hp = Math.max(1, v.hp - (fx.damageRandom.amount || 2));
      }
      if (fx.damageAll) {
        for (const v of villagers) v.hp = Math.max(1, v.hp - fx.damageAll);
      }
      if (fx.damage) {
        const targets = [...villagers].sort(() => Math.random() - 0.5).slice(0, 3);
        for (const v of targets) v.hp = Math.max(1, v.hp - fx.damage);
      }
      if (fx.kill) {
        const sorted = [...villagers].sort((a, b) => a.hp - b.hp);
        for (let i = 0; i < fx.kill && sorted.length > 0; i++) {
          const v = sorted.shift();
          v.hp = 0;
          addEvent(`${v.name} has succumbed to the plague!`, 'danger');
        }
      }
      if (fx.faith) gameState.faith = Math.max(0, Math.min(100, gameState.faith + fx.faith));
      if (fx.morale) { for (const v of villagers) v.morale = Math.max(0, Math.min(100, (v.morale || 60) + fx.morale)); }
      if (fx.healAll) { for (const v of villagers) v.hp = Math.min(v.maxHp, v.hp + fx.healAll); }
      if (fx.newVillagers) {
        for (let i = 0; i < fx.newVillagers; i++) {
          const r = createVillagers(1, Math.floor(MAP_SIZE / 2), MAP_SEED + gameState.day * 200 + i)[0];
          if (r) { initMorale(r); initProgression(r); villagers.push(r); }
        }
      }
      if (fx.spawnMonsters) {
        for (const mType of fx.spawnMonsters) {
          const m = createMonster(mType, MAP_SIZE / 2 + (Math.random() - 0.5) * 8, MAP_SIZE / 2 + (Math.random() - 0.5) * 8);
          if (m) monsters.push(m);
        }
      }
      if (fx.revealSpots) {
        for (let i = 0; i < fx.revealSpots; i++) {
          const rx = Math.floor(Math.random() * MAP_SIZE);
          const ry = Math.floor(Math.random() * MAP_SIZE);
          revealArea(visibilityMap, rx, ry, 3, MAP_SIZE);
        }
      }
    }
  }
  // Handle chain choices via guidance panel UI
  for (const choice of chainUpdates.choices) {
    showChainChoice(choice);
  }

  // --- Auto-Craft (when workshop exists, every 6 ticks) ---
  if (gameState.tick % 6 === 0 && buildings.some(b => b.type === 'workshop')) {
    // Try to equip unarmed knights/hunters first
    const needsWeapon = villagers.filter(v =>
      (v.vclass === 'knight' || v.vclass === 'hunter') && !v.equipment.weapon
    );
    for (const v of needsWeapon) {
      const sword = canCraft('iron_sword', gameState.resources, buildings).canCraft
        ? craftItem('iron_sword', gameState.resources)
        : canCraft('wooden_sword', gameState.resources, buildings).canCraft
          ? craftItem('wooden_sword', gameState.resources)
          : null;
      if (sword) {
        equipItem(v, sword);
        addEvent(`${v.name} received a ${sword.name}!`, 'build');
      }
    }
  }

  // --- Building Upgrades (auto-upgrade every 5 ticks) ---
  if (gameState.tick % 5 === 0) {
    const upgradeable = getUpgradeableBuildings(buildings, gameState.resources, gameState.day, tiles, MAP_SIZE);
    if (upgradeable.length > 0) {
      const { building, upgradeDef } = upgradeable[0];
      performUpgrade(building, buildings, gameState.resources, tiles);
      addEvent(`${upgradeDef.label} upgrade complete!`, 'build');
      // Refresh building lights
      buildingLights.length = 0;
      buildingLights.push(...getBuildingLights(buildings));
    }
  }

  // Init progression on new villagers that may lack it
  for (const v of villagers) {
    if (!v.xp) initProgression(v);
  }

  // Knight promotion: after watchtower is built, villagers may consider becoming knights
  const hasWatchtower = buildings.some(b => b.type === 'watchtower');
  if (hasWatchtower && Math.random() < 0.02 && phase === PHASES.DAY) {
    const candidates = villagers.filter(v =>
      v.vclass !== 'knight' && v.state === 'idle' && v.stats.strength >= 5
    );
    if (candidates.length > 0) {
      const candidate = candidates[Math.floor(Math.random() * candidates.length)];
      // The villager contemplates becoming a knight
      const thoughts = [
        "The watchtower stands tall... perhaps I should take up the sword.",
        "I could serve the village better as a knight.",
        "The darkness grows. Someone must defend us.",
        "I feel called to protect this village.",
      ];
      candidate.speech = thoughts[Math.floor(Math.random() * thoughts.length)];
      candidate.speechTimer = 4;

      // After contemplation, they become a knight
      setTimeout(() => {
        if (candidate.vclass !== 'knight') {
          const oldClass = candidate.classLabel;
          promoteToKnight(candidate);
          addEvent(`${candidate.name} the ${oldClass} has become a Knight!`, 'discovery');
          candidate.speech = '* dons armor *';
          candidate.speechTimer = 3;
        }
      }, 4000);
    }
  }

  // Villager thought/conscience system: 1-3 thoughts per day per villager
  if (isAiEnabled() && phase !== PHASES.NIGHT) {
    triggerVillagerThought(phase);
  }

  // Random villager seeking guidance (for demo)
  if (Math.random() < 0.03 && phase !== PHASES.NIGHT && villagers.length > 0) {
    const seeker = villagers[Math.floor(Math.random() * villagers.length)];
    if (seeker && seeker.state !== 'sleeping') {
      showGuidanceRequest(seeker);
    }
  }

  updateUI();
}

// --- Guidance System ---
function showGuidanceRequest(villager) {
  const questionsByClass = {
    hunter: [
      "I found tracks leading into the dark forest. Should I follow them alone or bring others?",
      "There's a ruined structure to the northeast. Worth exploring?",
      "Game is growing scarce near the village. Should I range further out?",
    ],
    miner: [
      "I've struck a new vein deep in the tunnels, but the air feels wrong. Should I keep digging?",
      "I have enough iron for either swords or shields, but not both. Which do we need more?",
      "The deeper mines echo with strange sounds. Should we seal them or investigate?",
    ],
    builder: [
      "We're running low on timber. Should I venture further to find better trees?",
      "I could reinforce the walls or build another house. Which is more urgent?",
      "The foundation here is soft. Should I build anyway or find a better spot?",
    ],
    knight: [
      "I've spotted movement in the shadows. Should I investigate alone or rally others?",
      "My armor grows heavy but the watch must continue. Should I rest or stand guard?",
      "A fellow villager questions my path. How do I convince them of its worth?",
    ],
  };

  const questionsFallback = [
    "I'm frightened. The darkness seems closer each night. What should we do?",
    "My neighbor has been acting strangely — avoiding others, muttering. Should I worry?",
    "Strange omens in the sky last night. What do they portend?",
  ];

  const options = questionsByClass[villager.vclass] || questionsFallback;
  const question = options[Math.floor(Math.random() * options.length)];

  villager.state = 'idle';
  villager.stateTimer = 15;
  villager.speech = '* seeking The Voice *';
  villager.speechTimer = 4;

  const panel = document.getElementById('guidance-panel');
  const qEl = document.getElementById('villager-question');
  const inputEl = document.getElementById('guidance-input');

  qEl.textContent = `${villager.name} the ${villager.raceLabel} ${villager.classLabel} (${villager.personality}): "${question}"`;
  inputEl.value = '';
  panel.classList.remove('hidden');
  panel.dataset.villagerId = villager.id;

  addEvent(`${villager.name} seeks your counsel...`, 'guidance');
}

document.getElementById('send-guidance').addEventListener('click', async () => {
  const panel = document.getElementById('guidance-panel');
  const inputEl = document.getElementById('guidance-input');
  const sendBtn = document.getElementById('send-guidance');
  const guidance = inputEl.value.trim();

  if (!guidance) return;

  const villagerId = parseInt(panel.dataset.villagerId);
  const villager = villagers.find(v => v.id === villagerId);

  if (!villager) { panel.classList.add('hidden'); return; }

  addEvent(`You counseled ${villager.name}: "${guidance.substring(0, 60)}${guidance.length > 60 ? '...' : ''}"`, 'guidance');
  gameState.faith = Math.min(100, gameState.faith + 3);

  if (isAiEnabled()) {
    // Show thinking state
    sendBtn.disabled = true;
    sendBtn.textContent = 'Interpreting...';
    villager.speech = '* pondering your words... *';
    villager.speechTimer = 30;

    const question = document.getElementById('villager-question').textContent;
    const interpreted = await getGuidanceResponse(villager, question, guidance);

    sendBtn.disabled = false;
    sendBtn.textContent = 'Counsel';

    if (interpreted) {
      villager.speech = interpreted;
      villager.speechTimer = 8;
      addEvent(`${villager.name} interprets: "${interpreted.substring(0, 80)}${interpreted.length > 80 ? '...' : ''}"`, 'guidance');
    } else {
      villager.speech = `The Voice says: "${guidance.substring(0, 40)}${guidance.length > 40 ? '...' : ''}"`;
      villager.speechTimer = 5;
    }
  } else {
    villager.speech = `The Voice says: "${guidance.substring(0, 40)}${guidance.length > 40 ? '...' : ''}"`;
    villager.speechTimer = 5;
  }

  villager.state = 'idle';
  villager.stateTimer = 3;
  panel.classList.add('hidden');
});

// --- Chain Choice UI ---
let pendingChainChoice = null;

function showChainChoice(choice) {
  paused = true;
  updateSpeedButtons();
  pendingChainChoice = choice;

  const panel = document.getElementById('guidance-panel');
  const header = document.getElementById('guidance-header');
  const qEl = document.getElementById('villager-question');
  const inputEl = document.getElementById('guidance-input');
  const sendBtn = document.getElementById('send-guidance');

  header.textContent = 'A critical decision awaits...';
  qEl.innerHTML = `<strong>${choice.prompt}</strong>`;
  inputEl.style.display = 'none';
  sendBtn.style.display = 'none';

  // Build option buttons
  let optionsHtml = '';
  choice.options.forEach((opt, i) => {
    optionsHtml += `<button class="chain-choice-btn" data-choice-idx="${i}">${opt.label}</button>`;
  });
  const optContainer = document.createElement('div');
  optContainer.id = 'chain-choice-options';
  optContainer.innerHTML = optionsHtml;
  qEl.appendChild(optContainer);

  optContainer.querySelectorAll('.chain-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.choiceIdx);
      const effects = resolveChoice(chainState, choice.chainId, idx);
      if (effects) {
        applyChainEffects(effects);
        addEvent(`Decision: ${choice.options[idx].label}`, 'omen');
      }
      // Restore panel
      header.textContent = 'A villager seeks your counsel...';
      inputEl.style.display = '';
      sendBtn.style.display = '';
      panel.classList.add('hidden');
      pendingChainChoice = null;
      paused = false;
      updateSpeedButtons();
    });
  });

  panel.classList.remove('hidden');
}

function applyChainEffects(fx) {
  if (!fx) return;
  if (fx.faith !== undefined) gameState.faith = Math.max(0, Math.min(100, gameState.faith + fx.faith));
  if (fx.setFaith !== undefined) gameState.faith = fx.setFaith;
  if (fx.resources) {
    for (const [res, amt] of Object.entries(fx.resources)) {
      gameState.resources[res] = Math.max(0, (gameState.resources[res] || 0) + amt);
    }
  }
  if (fx.morale) {
    for (const v of villagers) v.morale = Math.max(0, Math.min(100, (v.morale || 60) + fx.morale));
  }
  if (fx.healAll) {
    for (const v of villagers) v.hp = Math.min(v.maxHp, v.hp + fx.healAll);
  }
  if (fx.desertVillager) {
    const idx = villagers.findIndex(v => v.personality === fx.desertVillager);
    if (idx !== -1) {
      addEvent(`${villagers[idx].name} has left the village!`, 'danger');
      villagers.splice(idx, 1);
    }
  }
}

// --- Settings Panel ---
document.getElementById('btn-settings').addEventListener('click', () => {
  const overlay = document.getElementById('settings-overlay');
  const keyInput = document.getElementById('openai-key');
  const modelSelect = document.getElementById('openai-model');
  keyInput.value = getApiKey();
  modelSelect.value = getModel();
  document.getElementById('test-result').textContent = '';
  overlay.classList.remove('hidden');
});

document.getElementById('close-settings').addEventListener('click', () => {
  document.getElementById('settings-overlay').classList.add('hidden');
});

document.getElementById('save-settings').addEventListener('click', () => {
  setApiKey(document.getElementById('openai-key').value);
  setModel(document.getElementById('openai-model').value);
  document.getElementById('settings-overlay').classList.add('hidden');
  if (isAiEnabled()) {
    addEvent('AI guidance enabled. Villagers will now interpret your counsel.', 'discovery');
  }
});

document.getElementById('toggle-key-vis').addEventListener('click', () => {
  const input = document.getElementById('openai-key');
  const btn = document.getElementById('toggle-key-vis');
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = 'Hide';
  } else {
    input.type = 'password';
    btn.textContent = 'Show';
  }
});

document.getElementById('test-connection').addEventListener('click', async () => {
  const resultEl = document.getElementById('test-result');
  const btn = document.getElementById('test-connection');
  // Temporarily save the key for testing
  setApiKey(document.getElementById('openai-key').value);
  setModel(document.getElementById('openai-model').value);

  btn.disabled = true;
  resultEl.textContent = 'Testing...';
  resultEl.className = '';

  const result = await testConnection();
  btn.disabled = false;

  if (result.ok) {
    resultEl.textContent = 'Connected!';
    resultEl.className = 'success';
  } else {
    resultEl.textContent = result.error;
    resultEl.className = 'error';
  }
});

// --- Roster Panel ---
document.getElementById('btn-roster').addEventListener('click', () => {
  const panel = document.getElementById('roster-panel');
  if (panel.classList.contains('hidden')) {
    renderRoster();
    panel.classList.remove('hidden');
  } else {
    panel.classList.add('hidden');
  }
});

document.getElementById('close-roster').addEventListener('click', () => {
  document.getElementById('roster-panel').classList.add('hidden');
});

// Minimap toggle (mobile)
document.getElementById('minimap-toggle').addEventListener('click', () => {
  const mc = document.getElementById('minimap-canvas');
  mc.classList.toggle('minimap-hidden');
});

function renderRoster() {
  const list = document.getElementById('roster-list');
  list.innerHTML = '';

  for (const v of villagers) {
    const card = document.createElement('div');
    card.className = 'roster-card';

    const maxStat = 10; // visual max for stat bars

    const title = getVillagerTitle(v);
    card.innerHTML = `
      <div class="roster-card-header">
        <span class="roster-name">${v.name}</span>
        <span class="roster-identity">${v.raceLabel} ${v.classLabel} <span style="color:#d4af37;font-size:0.85em">(${title})</span></span>
      </div>
      <div class="roster-personality">${v.personality} ${v.morale !== undefined ? `<span style="color:${getMoraleEffects(v).moodColor}"> — ${getMoraleEffects(v).moodLabel} (${v.morale})</span>` : ''}</div>
      <div class="roster-stats">
        <div class="roster-stat">
          <span class="roster-stat-label">Speed</span>
          <div class="roster-stat-bar"><div class="roster-stat-fill stat-speed" style="width:${(v.stats.speed / maxStat) * 100}%"></div></div>
          <span class="roster-stat-val">${v.stats.speed}</span>
        </div>
        <div class="roster-stat">
          <span class="roster-stat-label">Strength</span>
          <div class="roster-stat-bar"><div class="roster-stat-fill stat-strength" style="width:${(v.stats.strength / maxStat) * 100}%"></div></div>
          <span class="roster-stat-val">${v.stats.strength}</span>
        </div>
        <div class="roster-stat">
          <span class="roster-stat-label">Charisma</span>
          <div class="roster-stat-bar"><div class="roster-stat-fill stat-charisma" style="width:${(v.stats.charisma / maxStat) * 100}%"></div></div>
          <span class="roster-stat-val">${v.stats.charisma}</span>
        </div>
      </div>
      <div class="roster-hp">
        <span class="roster-hp-label">HP</span>
        <div class="roster-hp-bar"><div class="roster-hp-fill" style="width:${(v.hp / v.maxHp) * 100}%"></div></div>
        <span class="roster-hp-val">${v.hp}/${v.maxHp}</span>
      </div>
      ${v.equipment.weapon || v.equipment.shield || v.equipment.helmet ? `
      <div class="roster-equipment">
        ${v.equipment.weapon ? `<span class="equip-slot">⚔ ${v.equipment.weapon.name}</span>` : ''}
        ${v.equipment.shield ? `<span class="equip-slot">🛡 ${v.equipment.shield.name}</span>` : ''}
        ${v.equipment.helmet ? `<span class="equip-slot">⛑ ${v.equipment.helmet.name}</span>` : ''}
      </div>
      ` : ''}
      ${v.thoughts.length > 0 ? `
      <div class="roster-thoughts">
        <div class="roster-thoughts-toggle" data-villager-id="${v.id}">
          Inner Thoughts (${v.thoughts.length}) <span class="toggle-arrow">▸</span>
        </div>
        <div class="roster-thoughts-list hidden" id="thoughts-${v.id}">
          ${v.thoughts.slice().reverse().map(t => `
            <div class="thought-entry">
              <div class="thought-meta">Day ${t.day}, Tick ${t.tick}</div>
              <div class="thought-text">"${escapeHtml(t.thought)}"</div>
              <div class="thought-response">→ ${escapeHtml(t.response)}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ` : `
      <div class="roster-thoughts">
        <div class="roster-thoughts-empty">No thoughts yet...</div>
      </div>
      `}
    `;
    list.appendChild(card);
  }

  // Wire up accordion toggles
  list.querySelectorAll('.roster-thoughts-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const vid = toggle.dataset.villagerId;
      const thoughtsList = document.getElementById(`thoughts-${vid}`);
      const arrow = toggle.querySelector('.toggle-arrow');
      if (thoughtsList.classList.contains('hidden')) {
        thoughtsList.classList.remove('hidden');
        arrow.textContent = '▾';
      } else {
        thoughtsList.classList.add('hidden');
        arrow.textContent = '▸';
      }
    });
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// --- UI Updates ---
function updateUI() {
  const state = getDayNightState(gameState.tick, 0);
  const phaseNames = { dawn: 'Dawn', day: 'Day', dusk: 'Dusk', night: 'Night' };

  document.getElementById('time-display').textContent =
    `Day ${gameState.day} — ${phaseNames[state.phase]} (${gameState.tick}/24)`;

  document.getElementById('res-wood').textContent = `Wood: ${gameState.resources.wood}`;
  document.getElementById('res-stone').textContent = `Stone: ${gameState.resources.stone}`;
  document.getElementById('res-food').textContent = `Food: ${gameState.resources.food}`;
  document.getElementById('res-iron').textContent = `Iron: ${gameState.resources.iron}`;
  document.getElementById('villager-count').textContent = `${villagers.length}`;
  document.getElementById('faith-fill').style.width = `${gameState.faith}%`;

  // Food tracker
  const foodNeeded = villagers.length;
  const foodCurrent = gameState.resources.food;
  document.getElementById('food-current').textContent = foodCurrent;
  document.getElementById('food-needed').textContent = foodNeeded;
  const foodRatio = Math.min(foodCurrent / Math.max(foodNeeded, 1), 3);
  document.getElementById('food-tracker-fill').style.width = `${Math.min(100, foodRatio * 33)}%`;
  const tracker = document.getElementById('food-tracker');
  if (foodCurrent < foodNeeded) {
    tracker.classList.add('critical');
  } else {
    tracker.classList.remove('critical');
  }

  // Quest tracker
  const qtEl = document.getElementById('quest-tracker');
  const activeQuests = getActiveQuests(questState);
  const actInfo = getActProgress(questState);
  if (activeQuests.length > 0) {
    let html = `<div class="qt-title">Act ${actInfo.currentAct}: ${actInfo.actTitle}</div>`;
    for (const q of activeQuests.slice(0, 3)) {
      html += `<div class="qt-quest"><div class="qt-name">${q.title}</div>`;
      for (const obj of q.objectives) {
        const done = obj.current >= obj.target;
        html += `<div class="qt-obj${done ? ' done' : ''}">${done ? '✓' : '○'} ${obj.text} (${obj.current}/${obj.target})</div>`;
      }
      html += '</div>';
    }
    qtEl.innerHTML = html;
  } else {
    qtEl.innerHTML = '';
  }

  // Chain alerts
  const chainSummaries = getActiveChainSummaries(chainState);
  const alertEl = document.getElementById('chain-alert');
  const urgent = chainSummaries.find(c => c.urgent);
  if (urgent) {
    alertEl.textContent = `⚠ ${urgent.title}: ${urgent.description}`;
    alertEl.classList.remove('hidden');
  } else {
    alertEl.classList.add('hidden');
  }
}

// --- Particles (ambient) ---
const particles = [];

function spawnParticles(state) {
  if (state.phase === PHASES.NIGHT && Math.random() < 0.1) {
    // Fireflies near village
    const center = MAP_SIZE / 2;
    particles.push({
      x: (center + (Math.random() - 0.5) * 8) * TILE_SIZE,
      y: (center + (Math.random() - 0.5) * 8) * TILE_SIZE,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      life: 3 + Math.random() * 3,
      maxLife: 6,
      color: '180, 255, 100',
      size: 2,
    });
  }

  if (state.phase === PHASES.DAWN && Math.random() < 0.05) {
    // Morning mist
    particles.push({
      x: camera.x + Math.random() * canvas.width,
      y: camera.y + Math.random() * canvas.height,
      vx: Math.random() * 5,
      vy: -Math.random() * 3,
      life: 4 + Math.random() * 4,
      maxLife: 8,
      color: '200, 200, 220',
      size: 8 + Math.random() * 12,
    });
  }
}

function updateAndDrawParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.life -= dt;

    if (p.life <= 0) {
      particles.splice(i, 1);
      continue;
    }

    const alpha = Math.min(1, p.life / (p.maxLife * 0.3)) * 0.5;
    const sx = p.x - camera.x;
    const sy = p.y - camera.y;

    ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(sx, sy, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// --- Main Render Loop ---
let lastTime = performance.now();

function gameLoop(now) {
  const rawDt = (now - lastTime) / 1000;
  const dt = Math.min(rawDt, 0.1); // Cap delta time
  lastTime = now;

  // Update camera
  updateCamera(dt);

  // Update tick timer
  if (!paused) {
    gameState.tickAccumulator += rawDt * 1000 * tickSpeedMultiplier;
    if (gameState.tickAccumulator >= BASE_TICK_MS) {
      gameState.tickAccumulator -= BASE_TICK_MS;
      processTick();
    }
  }

  const tickProgress = gameState.tickAccumulator / BASE_TICK_MS;
  const dayNightState = getDayNightState(gameState.tick, tickProgress);
  const timeOfDay = dayNightState.phase;

  // Update villagers
  const completedBuilds = updateVillagers(villagers, tiles, MAP_SIZE, dt, timeOfDay);
  for (const event of completedBuilds) {
    const b = event.building;
    const def = BUILDING_DEFS[b.type] || { w: 1, h: 1 };
    buildings.push({ x: b.x, y: b.y, type: b.type, w: def.w, h: def.h });
    addEvent(`${event.villager.name} built a ${def.label || b.type}!`, 'build');
    grantBuildXP(event.villager);
    // Refresh building lights
    buildingLights.length = 0;
    buildingLights.push(...getBuildingLights(buildings));
  }

  // Update monsters
  const monstersToRemove = updateMonsters(monsters, villagers, tiles, MAP_SIZE, TILE_SIZE);
  for (let i = monsters.length - 1; i >= 0; i--) {
    if (monstersToRemove.includes(monsters[i])) monsters.splice(i, 1);
  }

  // Update combat effects
  updateCombatEffects(combatState, dt);

  // Update visibility (throttled — every 5 frames to reduce CPU)
  if (frameCount % 5 === 0) {
    updateVisibility(visibilityMap, villagers, buildings, MAP_SIZE);
  }

  // Update weather
  updateWeather(eventSystem, dt);
  updateParticles(eventSystem, canvas.width, canvas.height, dt);

  frameCount++;

  // --- Draw ---
  // Clear
  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw tile map
  drawTiles();

  // Fog of war
  drawFogOfWar(ctx, visibilityMap, TILE_SIZE, camera.x, camera.y, canvas.width, canvas.height);

  // Draw buildings
  drawBuildings(ctx, buildings, TILE_SIZE, camera.x, camera.y);

  // Draw entities sorted by Y for depth (villagers + monsters interleaved)
  const allEntities = [
    ...villagers.map(v => ({ type: 'villager', entity: v, y: v.y })),
    ...monsters.map(m => ({ type: 'monster', entity: m, y: m.y })),
  ].sort((a, b) => a.y - b.y);

  for (const e of allEntities) {
    if (e.type === 'villager') {
      drawVillager(ctx, e.entity, TILE_SIZE, camera.x, camera.y, dayNightState.overlay.a);
    } else {
      drawMonster(ctx, e.entity, TILE_SIZE, camera.x, camera.y);
    }
  }

  // XP bars and level-up effects on villagers
  for (const v of villagers) {
    const sx = v.x * TILE_SIZE - camera.x;
    const sy = v.y * TILE_SIZE - camera.y;
    drawXPBar(ctx, v, sx, sy, TILE_SIZE);
    drawLevelUpEffect(ctx, v, sx, sy, TILE_SIZE, frameCount);
  }

  // Combat effects
  drawCombatEffects(ctx, combatState, TILE_SIZE, camera.x, camera.y);

  // POI markers
  drawPOIMarkers(ctx, pois, camera, TILE_SIZE, frameCount);

  // Scout markers
  drawScoutMarkers(ctx, scoutState, camera, TILE_SIZE, frameCount);

  // Selection ring for HUD
  if (hudState.selectedVillager) {
    const sv = villagers.find(v => v.id === hudState.selectedVillager.id);
    if (sv) {
      drawSelectionRing(ctx, sv, TILE_SIZE, camera.x, camera.y, frameCount);
    } else {
      hudState.selectedVillager = null;
      hudState.showInspectPanel = false;
    }
  }

  // Day/night overlay
  applyDayNightOverlay(ctx, canvas.width, canvas.height, dayNightState);

  // Point lights during night/dusk
  if (dayNightState.overlay.a > 0.1) {
    ctx.globalCompositeOperation = 'lighter';

    // Building torches
    for (const light of buildingLights) {
      const sx = light.x * TILE_SIZE - camera.x;
      const sy = light.y * TILE_SIZE - camera.y;
      if (sx > -100 && sx < canvas.width + 100 && sy > -100 && sy < canvas.height + 100) {
        const flicker = 0.8 + Math.sin(now / 200 + light.x) * 0.2;
        drawPointLight(ctx, sx, sy, TILE_SIZE * 3, dayNightState.overlay.a * flicker);
      }
    }

    // Villager-carried torches at night
    if (timeOfDay === PHASES.NIGHT) {
      for (const v of villagers) {
        if (v.state !== 'sleeping') {
          const sx = v.x * TILE_SIZE - camera.x;
          const sy = v.y * TILE_SIZE - camera.y;
          drawPointLight(ctx, sx, sy, TILE_SIZE * 1.5, 0.4);
        }
      }
    }

    ctx.globalCompositeOperation = 'source-over';
  }

  // Weather effects
  drawWeatherEffects(ctx, eventSystem, canvas.width, canvas.height);

  // Loot float texts
  for (let i = lootFloats.length - 1; i >= 0; i--) {
    const lf = lootFloats[i];
    lf.timer--;
    const alpha = Math.min(1, lf.timer / 30);
    const floatY = (90 - lf.timer) * 0.6;
    const sx = lf.x - camera.x;
    const sy = lf.y - camera.y - floatY;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeText(lf.text, sx, sy);
    ctx.fillStyle = lf.color;
    ctx.fillText(lf.text, sx, sy);
    ctx.restore();

    if (lf.timer <= 0) lootFloats.splice(i, 1);
  }

  // Quest completion fanfare (screen flash)
  if (questFanfare > 0) {
    const alpha = (questFanfare / 45) * 0.3;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    // Center text
    if (questFanfare > 20) {
      ctx.save();
      ctx.globalAlpha = Math.min(1, (questFanfare - 20) / 15);
      ctx.font = 'bold 24px monospace';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.strokeText('QUEST COMPLETE!', canvas.width / 2, canvas.height / 3);
      ctx.fillText('QUEST COMPLETE!', canvas.width / 2, canvas.height / 3);
      ctx.restore();
    }
    questFanfare--;
  }

  // Particles
  spawnParticles(dayNightState);
  updateAndDrawParticles(dt);

  // HUD elements
  const phase = getDayNightState(gameState.tick, 0).phase;
  drawDayProgressBar(ctx, gameState.tick, phase, canvas.width);
  drawThreatIndicators(ctx, monsters, camera, canvas.width, canvas.height, TILE_SIZE);
  drawExplorationCounter(ctx, getExplorationPercentage(visibilityMap, MAP_SIZE, tiles), canvas.width, canvas.height);
  drawInspectPanel(ctx, hudState, canvas.width, canvas.height);

  // Minimap (update every few frames for performance)
  if (Math.floor(now / 500) !== Math.floor((now - rawDt * 1000) / 500)) {
    drawMinimap(minimapCanvas, tiles, buildings, villagers, camera, TILE_SIZE, canvas.width, canvas.height, monsters);
    // Draw POI and scout markers on minimap
    const mmCtx = minimapCanvas.getContext('2d');
    drawPOIOnMinimap(mmCtx, pois, MAP_SIZE, minimapCanvas.width);
    drawScoutMarkerOnMinimap(mmCtx, scoutState, MAP_SIZE, minimapCanvas.width);
  }

  requestAnimationFrame(gameLoop);
}

// --- Villager Click-to-Inspect ---
canvas.addEventListener('click', (e) => {
  // Skip if click is on a UI panel
  if (isClickInPanel(hudState, e.clientX, e.clientY, canvas.width, canvas.height)) return;
  handleClick(hudState, e.clientX, e.clientY, camera, villagers, TILE_SIZE);
});

// --- Minimap Click-to-Scout ---
minimapCanvas.addEventListener('click', (e) => {
  const rect = minimapCanvas.getBoundingClientRect();
  const mx = (e.clientX - rect.left) / rect.width * MAP_SIZE;
  const my = (e.clientY - rect.top) / rect.height * MAP_SIZE;
  const tileX = Math.floor(mx);
  const tileY = Math.floor(my);

  // Only scout unexplored areas
  if (visibilityMap[tileY]?.[tileX] === 2) return; // already visible

  // Find nearest scout-capable villager
  let best = null;
  let bestDist = Infinity;
  for (const v of villagers) {
    if (!isScoutCapable(v)) continue;
    const d = Math.sqrt((v.x - tileX) ** 2 + (v.y - tileY) ** 2);
    if (d < bestDist) { bestDist = d; best = v; }
  }
  if (best) {
    if (assignScoutMission(scoutState, best, tileX, tileY, MAP_SIZE)) {
      addEvent(`${best.name} sent to scout (${tileX}, ${tileY})`, 'discovery');
    }
  }
});

// --- Start ---
Promise.all([
  preloadSprites(),
  preloadMonsterSprites(),
  preloadIcons(),
  preloadHUDAssets(),
]).then(() => {
  console.log('All assets loaded');
});
updateUI();
requestAnimationFrame(gameLoop);

console.log(`AI Village: Realm of Shadows — initialized (seed: ${MAP_SEED})`);
