/**
 * Day/night cycle system.
 * 24 ticks per day, mapped to visual lighting states.
 */

export const PHASES = {
  DAWN: 'dawn',
  DAY: 'day',
  DUSK: 'dusk',
  NIGHT: 'night',
};

// Phase definitions: [startTick, endTick]
const PHASE_RANGES = {
  [PHASES.DAY]:   [1, 12],
  [PHASES.DUSK]:  [13, 14],
  [PHASES.NIGHT]: [15, 22],
  [PHASES.DAWN]:  [23, 24],
};

// Color overlays for each phase
const PHASE_COLORS = {
  [PHASES.DAY]:   { r: 0, g: 0, b: 0, a: 0 },
  [PHASES.DUSK]:  { r: 40, g: 20, b: 0, a: 0.25 },
  [PHASES.NIGHT]: { r: 0, g: 0, b: 20, a: 0.55 },
  [PHASES.DAWN]:  { r: 30, g: 15, b: 0, a: 0.15 },
};

// Ambient light multiplier (1 = full bright)
const PHASE_LIGHT = {
  [PHASES.DAY]:   1.0,
  [PHASES.DUSK]:  0.7,
  [PHASES.NIGHT]: 0.35,
  [PHASES.DAWN]:  0.75,
};

/**
 * Get the current phase from a tick number.
 */
export function getPhase(tick) {
  const t = ((tick - 1) % 24) + 1; // 1-24
  for (const [phase, [start, end]] of Object.entries(PHASE_RANGES)) {
    if (t >= start && t <= end) return phase;
  }
  return PHASES.DAY;
}

/**
 * Interpolate between two phase states for smooth transitions.
 */
export function getDayNightState(gameTick, tickProgress) {
  const currentPhase = getPhase(gameTick);
  const nextTick = gameTick + 1;
  const nextPhase = getPhase(nextTick);

  const currentColor = PHASE_COLORS[currentPhase];
  const nextColor = PHASE_COLORS[nextPhase];
  const currentLight = PHASE_LIGHT[currentPhase];
  const nextLight = PHASE_LIGHT[nextPhase];

  // Interpolate
  const t = tickProgress; // 0-1 progress within current tick
  return {
    phase: currentPhase,
    overlay: {
      r: lerp(currentColor.r, nextColor.r, t),
      g: lerp(currentColor.g, nextColor.g, t),
      b: lerp(currentColor.b, nextColor.b, t),
      a: lerp(currentColor.a, nextColor.a, t),
    },
    light: lerp(currentLight, nextLight, t),
  };
}

/**
 * Apply the day/night overlay to the full canvas.
 */
export function applyDayNightOverlay(ctx, width, height, state) {
  if (state.overlay.a <= 0) return;
  const { r, g, b, a } = state.overlay;
  ctx.fillStyle = `rgba(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)},${a})`;
  ctx.fillRect(0, 0, width, height);
}

/**
 * Draw a light radius around a point (torch/campfire effect).
 */
export function drawPointLight(ctx, screenX, screenY, radius, intensity) {
  const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, radius);
  gradient.addColorStop(0, `rgba(255, 200, 100, ${intensity * 0.3})`);
  gradient.addColorStop(0.5, `rgba(255, 180, 80, ${intensity * 0.1})`);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(screenX - radius, screenY - radius, radius * 2, radius * 2);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}
