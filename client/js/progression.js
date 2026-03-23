/**
 * Villager XP & Skill Progression — tracks experience, levels, and stat growth.
 * Self-contained module with no external dependencies.
 */

// ─── XP Thresholds ──────────────────────────────────────────────────────────

/** XP required to reach each stat level (index = level number). */
const XP_THRESHOLDS = [0, 30, 80, 160, 300];

/** Maximum number of stat upgrades a villager can earn per stat. */
const MAX_STAT_LEVELS = 4;

/** Hard cap for any individual stat value. */
const STAT_CAP = 10;

// ─── XP Amounts ─────────────────────────────────────────────────────────────

const XP_WORK     = 2;
const XP_BUILD    = 3;
const XP_COMBAT   = 4;
const XP_KILL     = 15;
const XP_SCOUT    = 10;
const XP_SURVIVAL = 1;
const XP_DISCOVER = 8;

// ─── Class Primary Stats ────────────────────────────────────────────────────

const CLASS_PRIMARY_STAT = {
  hunter:  'speed',
  miner:   'strength',
  builder: 'strength',
  knight:  'strength',
};

// ─── Level-Up Effect Duration ───────────────────────────────────────────────

const GLOW_DURATION = 60; // frames

// ─── Title Tiers ────────────────────────────────────────────────────────────

const TITLES = [
  { min: 0,  label: 'Novice' },
  { min: 1,  label: 'Apprentice' },
  { min: 4,  label: 'Journeyman' },
  { min: 7,  label: 'Expert' },
  { min: 10, label: 'Master' },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Return the current level for a given XP total.
 * @param {number} xp
 * @returns {number} Level index (0–4).
 */
function levelForXP(xp) {
  for (let i = XP_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= XP_THRESHOLDS[i]) return i;
  }
  return 0;
}

/**
 * Return the primary stat key for a villager class.
 * @param {string} vclass
 * @returns {string}
 */
function primaryStat(vclass) {
  return CLASS_PRIMARY_STAT[vclass] || 'strength';
}

/**
 * Clamp a number between min and max.
 * @param {number} v
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

/**
 * Sum all stat levels gained across speed, strength, charisma.
 * @param {object} statLevels
 * @returns {number}
 */
function totalLevels(statLevels) {
  return (statLevels.speed || 0) + (statLevels.strength || 0) + (statLevels.charisma || 0);
}

// ─── Core Functions ─────────────────────────────────────────────────────────

/**
 * Initialize XP and level tracking on a villager.
 * Call once when the villager is created.
 * @param {object} villager - Villager object to augment.
 */
export function initProgression(villager) {
  villager.xp = { speed: 0, strength: 0, charisma: 0 };
  villager.statLevels = { speed: 0, strength: 0, charisma: 0 };
}

/**
 * Grant XP to a specific stat and process any resulting level-up.
 * @param {object} villager - Villager with xp/statLevels/stats.
 * @param {string} stat - 'speed' | 'strength' | 'charisma'.
 * @param {number} amount - XP to add.
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 *   Level-up info, or null if no level was gained.
 */
export function grantXP(villager, stat, amount) {
  if (!villager.xp || !villager.statLevels) return null;

  villager.xp[stat] += amount;

  const newLevel = levelForXP(villager.xp[stat]);
  const oldLevel = villager.statLevels[stat];

  if (newLevel <= oldLevel) return null;

  // Level up
  villager.statLevels[stat] = newLevel;

  // Apply stat increase if below cap
  if (villager.stats[stat] < STAT_CAP) {
    villager.stats[stat] = clamp(villager.stats[stat] + 1, 1, STAT_CAP);
  }

  const newStatValue = villager.stats[stat];

  // Strength level-up bonus: +1 maxHp and +1 current hp
  if (stat === 'strength') {
    villager.maxHp = (villager.maxHp || 10) + 1;
    villager.hp = (villager.hp || villager.maxHp - 1) + 1;
  }

  // Trigger visual feedback
  villager.levelUpGlow = GLOW_DURATION;
  if (typeof villager.speech === 'undefined') {
    villager.speech = null;
  }
  villager.speech = { text: `${stat} leveled up!`, timer: 120 };

  return { leveledUp: true, stat, newLevel, newStatValue };
}

/**
 * Grant XP for a work tick (villager in 'working' state).
 * Awards XP to the class's primary stat.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantWorkXP(villager) {
  return grantXP(villager, primaryStat(villager.vclass), XP_WORK);
}

/**
 * Grant XP for a build tick (villager in 'building' state).
 * Awards XP to strength.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantBuildXP(villager) {
  return grantXP(villager, 'strength', XP_BUILD);
}

/**
 * Grant XP for a combat tick (villager in 'fighting' state).
 * Awards XP to strength.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantCombatXP(villager) {
  return grantXP(villager, 'strength', XP_COMBAT);
}

/**
 * Grant XP for killing a monster.
 * Awards XP to strength.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantKillXP(villager) {
  return grantXP(villager, 'strength', XP_KILL);
}

/**
 * Grant XP for completing a scout mission.
 * Awards XP to speed.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantScoutXP(villager) {
  return grantXP(villager, 'speed', XP_SCOUT);
}

/**
 * Grant XP for surviving a night.
 * Awards 1 XP to each stat.
 * @param {object} villager
 * @returns {Array<{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }>}
 *   Array of level-up results (may be empty).
 */
export function grantSurvivalXP(villager) {
  const results = [];
  for (const stat of ['speed', 'strength', 'charisma']) {
    const result = grantXP(villager, stat, XP_SURVIVAL);
    if (result) results.push(result);
  }
  return results;
}

/**
 * Grant XP for discovering a point of interest.
 * Awards XP to charisma.
 * @param {object} villager
 * @returns {{ leveledUp: boolean, stat: string, newLevel: number, newStatValue: number }|null}
 */
export function grantDiscoveryXP(villager) {
  return grantXP(villager, 'charisma', XP_DISCOVER);
}

// ─── Query Functions ────────────────────────────────────────────────────────

/**
 * Get detailed XP progress for a specific stat.
 * @param {object} villager
 * @param {string} stat - 'speed' | 'strength' | 'charisma'.
 * @returns {{ currentLevel: number, currentXP: number, nextLevelXP: number|null, progress: number, maxLevel: boolean }}
 */
export function getXPProgress(villager, stat) {
  if (!villager.xp || !villager.statLevels) {
    return { currentLevel: 0, currentXP: 0, nextLevelXP: XP_THRESHOLDS[1], progress: 0, maxLevel: false };
  }

  const xp = villager.xp[stat] || 0;
  const level = villager.statLevels[stat] || 0;
  const atMax = level >= MAX_STAT_LEVELS;

  if (atMax) {
    return { currentLevel: level, currentXP: xp, nextLevelXP: null, progress: 1, maxLevel: true };
  }

  const currentThreshold = XP_THRESHOLDS[level];
  const nextThreshold = XP_THRESHOLDS[level + 1];
  const range = nextThreshold - currentThreshold;
  const progress = range > 0 ? clamp((xp - currentThreshold) / range, 0, 1) : 0;

  return {
    currentLevel: level,
    currentXP: xp,
    nextLevelXP: nextThreshold,
    progress,
    maxLevel: false,
  };
}

/**
 * Get a title based on the villager's total stat levels gained.
 * @param {object} villager
 * @returns {string}
 */
export function getVillagerTitle(villager) {
  if (!villager.statLevels) return 'Novice';
  const total = totalLevels(villager.statLevels);

  let title = 'Novice';
  for (const tier of TITLES) {
    if (total >= tier.min) title = tier.label;
  }
  return title;
}

// ─── Rendering ──────────────────────────────────────────────────────────────

/**
 * Draw a small XP progress bar beneath the villager's HP bar.
 * Shows progress toward the next level-up for the villager's primary stat.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} villager
 * @param {number} screenX - Top-left X of the villager's tile on screen.
 * @param {number} screenY - Top-left Y of the villager's tile on screen.
 * @param {number} tileSize
 */
export function drawXPBar(ctx, villager, screenX, screenY, tileSize) {
  if (!villager.xp) return;

  const stat = primaryStat(villager.vclass);
  const info = getXPProgress(villager, stat);

  const barW = tileSize * 0.7;
  const barH = 2;
  const x = screenX + (tileSize - barW) / 2;
  // Position below HP bar — HP bar is typically at screenY - 4, so XP bar sits below it
  const y = screenY - 1;

  // Background
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(x, y, barW, barH);

  // Fill
  if (info.maxLevel) {
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(x, y, barW, barH);
  } else {
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(x, y, barW * info.progress, barH);
  }
}

/**
 * Draw a golden level-up glow effect around the villager.
 * Call each render frame; decrements villager.levelUpGlow automatically.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} villager
 * @param {number} screenX - Top-left X of the villager's tile on screen.
 * @param {number} screenY - Top-left Y of the villager's tile on screen.
 * @param {number} tileSize
 * @param {number} frameCount - Current global frame counter.
 */
export function drawLevelUpEffect(ctx, villager, screenX, screenY, tileSize, frameCount) {
  if (!villager.levelUpGlow || villager.levelUpGlow <= 0) return;

  const cx = screenX + tileSize / 2;
  const cy = screenY + tileSize / 2;
  const t = 1 - villager.levelUpGlow / GLOW_DURATION; // 0 → 1 over effect lifetime
  const alpha = Math.max(0, 1 - t);

  ctx.save();

  // Outer expanding ring
  const ringRadius = tileSize * 0.4 + tileSize * 0.6 * t;
  ctx.beginPath();
  ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.6})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Golden glow
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, tileSize * 0.5);
  gradient.addColorStop(0, `rgba(255, 215, 0, ${alpha * 0.3})`);
  gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(screenX - tileSize * 0.25, screenY - tileSize * 0.25, tileSize * 1.5, tileSize * 1.5);

  // Sparkle particles
  const particleCount = 6;
  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + frameCount * 0.05;
    const dist = tileSize * 0.3 + tileSize * 0.4 * t;
    const px = cx + Math.cos(angle) * dist;
    const py = cy + Math.sin(angle) * dist;
    const size = 2 * alpha;

    ctx.fillStyle = `rgba(255, 223, 100, ${alpha * 0.8})`;
    ctx.fillRect(px - size / 2, py - size / 2, size, size);
  }

  ctx.restore();

  villager.levelUpGlow--;
}
