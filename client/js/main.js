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
import { getApiKey, setApiKey, getModel, setModel, isAiEnabled, testConnection, getGuidanceResponse } from './ai.js';

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
  }
  if (gameState.tick === 13) {
    addEvent('Dusk approaches. The villagers prepare for nightfall.', 'danger');
  }
  if (gameState.tick === 15) {
    addEvent('Night falls. Strange sounds echo from the darkness...', 'danger');
  }
  if (gameState.tick === 23) {
    addEvent('Dawn breaks. The village survived another night.', 'discovery');
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
        }
      } else if (v.vclass === 'miner') {
        const hasStoneAdj = hasAdjacentTile(tiles, Math.floor(v.x), Math.floor(v.y), MAP_SIZE, TILE.STONE);
        const hasIronAdj = hasAdjacentTile(tiles, Math.floor(v.x), Math.floor(v.y), MAP_SIZE, TILE.IRON);
        const mineBonus = hasWorkshop ? 1.5 : 1;
        if (hasStoneAdj) gameState.resources.stone += Math.floor(1 * strengthBonus * mineBonus);
        if (hasIronAdj && gameState.tick % 2 === 0) gameState.resources.iron += 1;
      } else if (v.vclass === 'builder') {
        if (tile === TILE.FOREST) {
          gameState.resources.wood += Math.floor(1 * strengthBonus);
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

  // Random villager seeking guidance (for demo)
  if (Math.random() < 0.03 && phase !== PHASES.NIGHT) {
    const seeker = villagers[Math.floor(Math.random() * villagers.length)];
    if (seeker.state !== 'sleeping') {
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

function renderRoster() {
  const list = document.getElementById('roster-list');
  list.innerHTML = '';

  for (const v of villagers) {
    const card = document.createElement('div');
    card.className = 'roster-card';

    const maxStat = 10; // visual max for stat bars

    card.innerHTML = `
      <div class="roster-card-header">
        <span class="roster-name">${v.name}</span>
        <span class="roster-identity">${v.raceLabel} ${v.classLabel}</span>
      </div>
      <div class="roster-personality">${v.personality}</div>
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
    `;
    list.appendChild(card);
  }
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
  document.getElementById('villager-count').textContent = `Villagers: ${villagers.length}`;
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
    // Refresh building lights
    buildingLights.length = 0;
    buildingLights.push(...getBuildingLights(buildings));
  }

  // --- Draw ---
  // Clear
  ctx.fillStyle = '#0a0a12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw tile map
  drawTiles();

  // Draw buildings
  drawBuildings(ctx, buildings, TILE_SIZE, camera.x, camera.y);

  // Draw villagers (sorted by Y for depth)
  const sortedVillagers = [...villagers].sort((a, b) => a.y - b.y);
  for (const v of sortedVillagers) {
    drawVillager(ctx, v, TILE_SIZE, camera.x, camera.y, dayNightState.overlay.a);
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

  // Particles
  spawnParticles(dayNightState);
  updateAndDrawParticles(dt);

  // Minimap (update every few frames for performance)
  if (Math.floor(now / 500) !== Math.floor((now - rawDt * 1000) / 500)) {
    drawMinimap(minimapCanvas, tiles, buildings, villagers, camera, TILE_SIZE, canvas.width, canvas.height);
  }

  requestAnimationFrame(gameLoop);
}

// --- Start ---
preloadSprites().then(() => {
  console.log('Sprites loaded');
});
updateUI();
requestAnimationFrame(gameLoop);

console.log(`AI Village: Realm of Shadows — initialized (seed: ${MAP_SEED})`);
