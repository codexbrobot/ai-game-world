// scout.js — Scout mission & fog ambush system for AI Village
// Self-contained ES module. All game data passed via parameters.

// ---------------------------------------------------------------------------
// Scout State
// ---------------------------------------------------------------------------

/**
 * Create a fresh scout state object.
 * @returns {{ activeMissions: Array, ambushCooldown: number }}
 */
export function createScoutState() {
  return {
    activeMissions: [],
    ambushCooldown: 0,
  };
}

// ---------------------------------------------------------------------------
// Scout Assignment
// ---------------------------------------------------------------------------

/**
 * Check whether a villager is capable of being assigned a scout mission.
 * Only Hunters and Knights that are alive and not currently fighting qualify.
 * @param {object} villager - Villager object with vclass and state.
 * @returns {boolean}
 */
export function isScoutCapable(villager) {
  const cls = (villager.vclass || villager.classLabel || '').toLowerCase();
  if (cls !== 'hunter' && cls !== 'knight') return false;
  if (villager.state === 'dead' || villager.state === 'fighting') return false;
  return true;
}

/**
 * Assign a scout mission to a villager.
 * Validates bounds, capability, and cancels any prior mission for this villager.
 * @param {object} scoutState  - Scout state from createScoutState().
 * @param {object} villager    - Villager to send on mission.
 * @param {number} targetX     - Destination tile X.
 * @param {number} targetY     - Destination tile Y.
 * @param {number} mapSize     - Width/height of the square map.
 * @returns {boolean} True if the mission was successfully assigned.
 */
export function assignScoutMission(scoutState, villager, targetX, targetY, mapSize) {
  // Validate target within map bounds
  if (targetX < 0 || targetY < 0 || targetX >= mapSize || targetY >= mapSize) {
    return false;
  }

  // Validate villager is scout-capable
  if (!isScoutCapable(villager)) {
    return false;
  }

  // Cancel any existing mission for this villager
  cancelScoutMission(scoutState, villager);

  // Add new mission
  scoutState.activeMissions.push({
    villager,
    targetX,
    targetY,
    phase: 'traveling',
    scoutTicksRemaining: 0,
  });

  // Mark villager with scout target for movement integration
  villager.scoutTarget = { x: targetX, y: targetY };

  return true;
}

/**
 * Cancel an active scout mission for a villager.
 * @param {object} scoutState - Scout state from createScoutState().
 * @param {object} villager   - Villager whose mission to cancel.
 */
export function cancelScoutMission(scoutState, villager) {
  for (let i = scoutState.activeMissions.length - 1; i >= 0; i--) {
    if (scoutState.activeMissions[i].villager === villager) {
      scoutState.activeMissions.splice(i, 1);
    }
  }
  villager.scoutTarget = null;
}

/**
 * Update all active scout missions for one tick.
 *
 * - Traveling: check if villager reached the target (within 1.5 tiles).
 * - Scouting: count down ticks until the reveal phase completes.
 *
 * @param {object}  scoutState - Scout state from createScoutState().
 * @param {Array}   villagers  - All villagers (unused directly, kept for API symmetry).
 * @returns {{ completed: Array, active: Array }} Lists of completed and still-active missions.
 */
export function updateScoutMissions(scoutState, villagers) {
  const completed = [];
  const toRemove = [];

  for (let i = 0; i < scoutState.activeMissions.length; i++) {
    const mission = scoutState.activeMissions[i];
    const v = mission.villager;

    if (mission.phase === 'traveling') {
      // Check proximity to target
      const dx = v.x - mission.targetX;
      const dy = v.y - mission.targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= 1.5) {
        mission.phase = 'scouting';
        mission.scoutTicksRemaining = 2;
      }
    } else if (mission.phase === 'scouting') {
      mission.scoutTicksRemaining--;

      if (mission.scoutTicksRemaining <= 0) {
        // Mission complete
        completed.push(mission);
        toRemove.push(i);
        v.scoutTarget = null;
      }
    }
  }

  // Remove completed missions in reverse order
  for (let i = toRemove.length - 1; i >= 0; i--) {
    scoutState.activeMissions.splice(toRemove[i], 1);
  }

  return {
    completed,
    active: scoutState.activeMissions.slice(),
  };
}

/**
 * Return the sight radius for a villager, accounting for active scout missions.
 * Scouts in the 'scouting' phase get an extended radius of 8.
 * Otherwise falls back to the default radius for Hunters/Knights (6).
 * @param {object} villager    - Villager to check.
 * @param {object} scoutState  - Scout state from createScoutState().
 * @returns {number} Sight radius in tiles.
 */
export function getScoutSightRadius(villager, scoutState) {
  if (scoutState) {
    for (const mission of scoutState.activeMissions) {
      if (mission.villager === villager && mission.phase === 'scouting') {
        return 8;
      }
    }
  }
  return 6;
}

// ---------------------------------------------------------------------------
// Fog Ambush System
// ---------------------------------------------------------------------------

/**
 * Check whether newly visible monsters trigger a fog ambush against a villager.
 *
 * When a villager discovers a monster hidden in the fog, the monster may get
 * a surprise attack with doubled damage. Hunters are more perceptive (20%
 * chance) and Knights are immune.
 *
 * @param {Array}  newlyVisibleMonsters - Monsters that just became visible this tick.
 * @param {object} villager            - The villager who revealed the fog.
 * @returns {Array<{ambushed: boolean, monster: object, villager: object, damageMultiplier: number}>}
 */
export function checkFogAmbush(newlyVisibleMonsters, villager) {
  const results = [];

  if (!newlyVisibleMonsters || newlyVisibleMonsters.length === 0) {
    return results;
  }

  const cls = (villager.vclass || villager.classLabel || '').toLowerCase();

  for (const monster of newlyVisibleMonsters) {
    // Only consider monsters within 4 tiles
    const dx = monster.x - villager.x;
    const dy = monster.y - villager.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 4) continue;

    // Determine ambush chance by class
    let ambushChance;
    if (cls === 'knight') {
      ambushChance = 0; // Immune
    } else if (cls === 'hunter') {
      ambushChance = 0.20;
    } else {
      ambushChance = 0.50;
    }

    if (ambushChance > 0 && Math.random() < ambushChance) {
      results.push({
        ambushed: true,
        monster,
        villager,
        damageMultiplier: 2.0,
      });
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Drawing — Scout Markers (Main Canvas)
// ---------------------------------------------------------------------------

/**
 * Draw pulsing destination markers and dotted guide-lines for active scout missions.
 *
 * @param {CanvasRenderingContext2D} ctx        - Main canvas context.
 * @param {object}                  scoutState - Scout state from createScoutState().
 * @param {object}                  camera     - { x, y } camera offset in pixels.
 * @param {number}                  tileSize   - Pixel size of one tile.
 * @param {number}                  frameCount - Frame counter for animation timing.
 */
export function drawScoutMarkers(ctx, scoutState, camera, tileSize, frameCount) {
  const SCOUT_BLUE = '#5ab8e8';

  for (const mission of scoutState.activeMissions) {
    const v = mission.villager;

    // Target position in screen space
    const tx = mission.targetX * tileSize + tileSize / 2 - camera.x;
    const ty = mission.targetY * tileSize + tileSize / 2 - camera.y;

    // Villager position in screen space
    const vx = v.x * tileSize - camera.x;
    const vy = v.y * tileSize - camera.y;

    // --- Dotted line from villager to target ---
    ctx.save();
    ctx.strokeStyle = SCOUT_BLUE;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(vx, vy);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // --- Pulsing concentric circles at destination ---
    ctx.save();

    // Two rings expanding and fading over time
    const pulseSpeed = 0.04;
    for (let ring = 0; ring < 2; ring++) {
      const phase = ((frameCount * pulseSpeed) + ring * 0.5) % 1.0;
      const radius = 4 + phase * tileSize * 0.8;
      const alpha = Math.max(0, 0.6 - phase * 0.7);

      ctx.strokeStyle = SCOUT_BLUE;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(tx, ty, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Solid centre dot
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = SCOUT_BLUE;
    ctx.beginPath();
    ctx.arc(tx, ty, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

// ---------------------------------------------------------------------------
// Drawing — Scout Markers (Minimap)
// ---------------------------------------------------------------------------

/**
 * Draw small pulsing blue dots on the minimap for active scout destinations.
 *
 * @param {CanvasRenderingContext2D} minimapCtx  - Minimap canvas context.
 * @param {object}                  scoutState  - Scout state from createScoutState().
 * @param {number}                  mapSize     - Width/height of the map in tiles.
 * @param {number}                  minimapSize - Width/height of the minimap canvas in pixels.
 */
export function drawScoutMarkerOnMinimap(minimapCtx, scoutState, mapSize, minimapSize) {
  const SCOUT_BLUE = '#5ab8e8';
  const scale = minimapSize / mapSize;

  for (const mission of scoutState.activeMissions) {
    const mx = mission.targetX * scale;
    const my = mission.targetY * scale;

    // Pulsing size using timestamp for smooth animation
    const t = (Date.now() % 1000) / 1000;
    const radius = 1.5 + Math.sin(t * Math.PI * 2) * 0.8;

    minimapCtx.save();
    minimapCtx.fillStyle = SCOUT_BLUE;
    minimapCtx.globalAlpha = 0.6 + Math.sin(t * Math.PI * 2) * 0.3;
    minimapCtx.beginPath();
    minimapCtx.arc(mx, my, radius, 0, Math.PI * 2);
    minimapCtx.fill();
    minimapCtx.restore();
  }
}
