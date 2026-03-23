/**
 * HUD and UI enhancement module for the AI Village game.
 * Self-contained — no imports from other modules. All rendering is pure canvas 2D.
 */

const UI_PATH = 'assets/game-assets/RPG UI pack -by Franuka-';

/** @type {HTMLImageElement|null} */
let uiSpritesheet = null;

/** @type {boolean} */
let fontsLoaded = false;

// ─── Panel constants ─────────────────────────────────────────────────────────

const PANEL_W_DESKTOP = 220;
const PANEL_H_DESKTOP = 200;
const PANEL_PAD = 10;
const CLOSE_BTN_SIZE = 16;
/** Mobile breakpoint — below this width, inspect panel becomes a full-width bottom sheet */
const MOBILE_W = 600;

/**
 * Compute panel dimensions based on canvas width.
 * @param {number} canvasW
 * @returns {{ w: number, h: number }}
 */
function panelSize(canvasW) {
  if (canvasW <= MOBILE_W) {
    return { w: canvasW - PANEL_PAD * 2, h: 160 };
  }
  return { w: PANEL_W_DESKTOP, h: PANEL_H_DESKTOP };
}

// ─── Asset loading ───────────────────────────────────────────────────────────

/**
 * Preload the UI spritesheet and register custom RPG fonts.
 * @returns {Promise<void>}
 */
export async function preloadHUDAssets() {
  // Load UI spritesheet
  const imgPromise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { uiSpritesheet = img; resolve(); };
    img.onerror = () => {
      console.warn('[HUD] Could not load UI spritesheet — using fallback rendering');
      resolve();
    };
    img.src = `${UI_PATH}/UI assets (2x).png`;
  });

  // Register fonts via FontFace API
  const textFont = new FontFace('FantasyRPG', `url('${UI_PATH}/FantasyRPGtext (size 8).ttf')`);
  const titleFont = new FontFace('FantasyRPGTitle', `url('${UI_PATH}/FantasyRPGtitle (size 11).ttf')`);
  document.fonts.add(textFont);
  document.fonts.add(titleFont);

  const fontPromise = Promise.all([textFont.load(), titleFont.load()])
    .then(() => { fontsLoaded = true; })
    .catch(() => {
      console.warn('[HUD] Custom fonts unavailable — using fallback');
      fontsLoaded = false;
    });

  await Promise.all([imgPromise, fontPromise]);
}

// ─── HUD state factory ───────────────────────────────────────────────────────

/**
 * Create a fresh HUD state object.
 * @returns {{ selectedVillager: object|null, showInspectPanel: boolean, threatArrows: Array }}
 */
export function createHUDState() {
  return {
    selectedVillager: null,
    showInspectPanel: false,
    inspectTab: 'stats', // 'stats' | 'story' | 'thoughts'
    threatArrows: [],
  };
}

// ─── Click handling ──────────────────────────────────────────────────────────

/**
 * Handle a mouse click — select or deselect a villager.
 * @param {object} hudState - HUD state from createHUDState()
 * @param {number} mouseX - Click X in screen pixels
 * @param {number} mouseY - Click Y in screen pixels
 * @param {{ x: number, y: number }} camera - Camera pixel offset
 * @param {object[]} villagers - Array of villager objects
 * @param {number} tileSize - Tile size in pixels
 * @returns {boolean} True if a villager was selected (caller should suppress other click actions)
 */
export function handleClick(hudState, mouseX, mouseY, camera, villagers, tileSize) {
  const worldX = mouseX + camera.x;
  const worldY = mouseY + camera.y;
  const tileX = worldX / tileSize;
  const tileY = worldY / tileSize;

  let nearest = null;
  let nearestDist = Infinity;

  for (const v of villagers) {
    const dx = v.x - tileX;
    const dy = v.y - tileY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < nearestDist) {
      nearestDist = dist;
      nearest = v;
    }
  }

  if (nearest && nearestDist <= 0.8) {
    hudState.selectedVillager = nearest;
    hudState.showInspectPanel = true;
    return true;
  }

  hudState.selectedVillager = null;
  hudState.showInspectPanel = false;
  return false;
}

/**
 * Check whether a click falls inside the inspect panel bounds.
 * @param {object} hudState - HUD state
 * @param {number} mouseX - Click X in screen pixels
 * @param {number} mouseY - Click Y in screen pixels
 * @param {number} canvasW - Canvas width
 * @param {number} canvasH - Canvas height
 * @returns {boolean}
 */
export function isClickInPanel(hudState, mouseX, mouseY, canvasW, canvasH) {
  if (!hudState.showInspectPanel) return false;
  const { w, h } = panelSize(canvasW);
  const px = canvasW <= MOBILE_W ? PANEL_PAD : canvasW - w - PANEL_PAD;
  const py = canvasH - h - PANEL_PAD;
  return (
    mouseX >= px && mouseX <= px + w &&
    mouseY >= py && mouseY <= py + h
  );
}

// ─── Selection ring ──────────────────────────────────────────────────────────

/**
 * Draw an animated pulsing selection ring around the selected villager.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} villager - Villager object with x, y (in tiles)
 * @param {number} tileSize - Tile size in pixels
 * @param {number} cameraX - Camera X offset in pixels
 * @param {number} cameraY - Camera Y offset in pixels
 * @param {number} frameCount - Monotonically increasing frame counter
 */
export function drawSelectionRing(ctx, villager, tileSize, cameraX, cameraY, frameCount) {
  const screenX = villager.x * tileSize - cameraX + tileSize / 2;
  const screenY = villager.y * tileSize - cameraY + tileSize / 2;

  const pulse = Math.sin(frameCount * 0.1);
  const baseRadius = tileSize * 0.55;
  const radius = baseRadius + pulse * 3;
  const alpha = 0.5 + pulse * 0.2; // oscillates 0.3 – 0.7

  ctx.save();
  ctx.beginPath();
  ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Secondary outer glow
  ctx.beginPath();
  ctx.arc(screenX, screenY, radius + 3, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 215, 0, ${alpha * 0.4})`;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

// ─── Inspect panel ───────────────────────────────────────────────────────────

/**
 * Resolve the correct font family string, falling back when custom fonts are absent.
 * @param {'text'|'title'} variant
 * @returns {string}
 */
function fontFamily(variant) {
  if (fontsLoaded) {
    return variant === 'title' ? 'FantasyRPGTitle' : 'FantasyRPG';
  }
  return 'Courier New';
}

/**
 * Draw a small HP bar.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number} hp
 * @param {number} maxHp
 */
function drawHPBar(ctx, x, y, w, h, hp, maxHp) {
  const ratio = Math.max(0, Math.min(1, hp / maxHp));
  // Background
  ctx.fillStyle = '#3a1010';
  ctx.fillRect(x, y, w, h);
  // Fill
  ctx.fillStyle = ratio > 0.5 ? '#2a8a2a' : ratio > 0.25 ? '#c8a020' : '#b02020';
  ctx.fillRect(x, y, w * ratio, h);
  // Border
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, w, h);
  // Text
  ctx.fillStyle = '#fff';
  ctx.font = `10px ${fontFamily('text')}`;
  ctx.textAlign = 'center';
  ctx.fillText(`${hp}/${maxHp}`, x + w / 2, y + h - 2);
  ctx.textAlign = 'left';
}

/**
 * Draw a detailed villager inspection panel when showInspectPanel is true.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} hudState - HUD state
 * @param {number} canvasW - Canvas width
 * @param {number} canvasH - Canvas height
 */
export function drawInspectPanel(ctx, hudState, canvasW, canvasH) {
  if (!hudState.showInspectPanel || !hudState.selectedVillager) return;

  const v = hudState.selectedVillager;
  const { w: PANEL_W, h: PANEL_H } = panelSize(canvasW);
  const isMobile = canvasW <= MOBILE_W;
  // Mobile: full-width bottom sheet. Desktop: bottom-right corner.
  const px = isMobile ? PANEL_PAD : canvasW - PANEL_W - PANEL_PAD;
  const py = canvasH - PANEL_H - PANEL_PAD;

  ctx.save();

  // Panel background
  ctx.fillStyle = 'rgba(15, 10, 25, 0.90)';
  ctx.fillRect(px, py, PANEL_W, PANEL_H);

  // Border
  ctx.strokeStyle = 'rgba(180, 160, 120, 0.8)';
  ctx.lineWidth = 2;
  ctx.strokeRect(px, py, PANEL_W, PANEL_H);

  // Inner bevel highlight
  ctx.strokeStyle = 'rgba(255, 240, 200, 0.15)';
  ctx.lineWidth = 1;
  ctx.strokeRect(px + 2, py + 2, PANEL_W - 4, PANEL_H - 4);

  // Close button (X)
  const cbx = px + PANEL_W - CLOSE_BTN_SIZE - 4;
  const cby = py + 4;
  ctx.fillStyle = 'rgba(180, 40, 40, 0.7)';
  ctx.fillRect(cbx, cby, CLOSE_BTN_SIZE, CLOSE_BTN_SIZE);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cbx + 3, cby + 3);
  ctx.lineTo(cbx + CLOSE_BTN_SIZE - 3, cby + CLOSE_BTN_SIZE - 3);
  ctx.moveTo(cbx + CLOSE_BTN_SIZE - 3, cby + 3);
  ctx.lineTo(cbx + 3, cby + CLOSE_BTN_SIZE - 3);
  ctx.stroke();

  let cx = px + 8;
  let cy = py + 18;

  // Name
  ctx.fillStyle = '#ffd700';
  ctx.font = `bold 14px ${fontFamily('title')}`;
  ctx.fillText(v.name || 'Unknown', cx, cy);
  cy += 16;

  // Race / Class
  ctx.fillStyle = '#c8c0b0';
  ctx.font = `11px ${fontFamily('text')}`;
  const raceClass = `${v.raceLabel || '?'} ${v.classLabel || ''}`.trim();
  ctx.fillText(raceClass, cx, cy);
  cy += 14;

  // Personality
  if (v.personality) {
    ctx.fillStyle = '#a0a8c0';
    ctx.fillText(`Personality: ${v.personality}`, cx, cy);
  }
  cy += 14;

  // Stats
  const stats = v.stats || {};
  ctx.fillStyle = '#d0d0d0';
  ctx.fillText(`SPD ${stats.speed ?? '-'}  STR ${stats.strength ?? '-'}  CHA ${stats.charisma ?? '-'}`, cx, cy);
  cy += 14;

  // HP bar
  const hp = v.hp ?? 0;
  const maxHp = v.maxHp ?? 1;
  drawHPBar(ctx, cx, cy, PANEL_W - 20, 12, hp, maxHp);
  cy += 20;

  // State
  ctx.fillStyle = '#90d090';
  ctx.font = `11px ${fontFamily('text')}`;
  ctx.fillText(`State: ${v.state || 'idle'}`, cx, cy);

  // Equipment — on mobile, show inline on same row; on desktop, show below
  const eq = v.equipment || {};
  const slots = ['weapon', 'shield', 'helmet'];
  if (isMobile) {
    // Inline after state
    const eqParts = slots.map(s => {
      const item = eq[s];
      return item ? (typeof item === 'string' ? item : item.name || item.type || '?') : '-';
    });
    ctx.fillStyle = '#909090';
    ctx.font = `10px ${fontFamily('text')}`;
    ctx.fillText(`  Eq: ${eqParts.join(' / ')}`, cx + 100, cy);
  } else {
    cy += 16;
    ctx.fillStyle = '#b0a890';
    ctx.fillText('Equipment:', cx, cy);
    cy += 13;
    ctx.fillStyle = '#909090';
    ctx.font = `10px ${fontFamily('text')}`;
    for (const slot of slots) {
      const item = eq[slot];
      const label = item ? (typeof item === 'string' ? item : item.name || item.type || 'Equipped') : 'Empty';
      ctx.fillText(`  ${slot}: ${label}`, cx, cy);
      cy += 12;
    }
  }

  ctx.restore();
}

// ─── Threat indicators ───────────────────────────────────────────────────────

/**
 * Draw directional arrows at screen edges pointing toward off-screen monsters.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object[]} monsters - Array of monster objects with x, y, hp, maxHp
 * @param {{ x: number, y: number }} camera - Camera pixel offset
 * @param {number} canvasW
 * @param {number} canvasH
 * @param {number} tileSize
 */
export function drawThreatIndicators(ctx, monsters, camera, canvasW, canvasH, tileSize) {
  if (!monsters || monsters.length === 0) return;

  const margin = 24;
  const centerX = canvasW / 2;
  const centerY = canvasH / 2;

  // Filter to off-screen monsters
  const offscreen = [];
  for (const m of monsters) {
    if (m.hp <= 0) continue;
    const sx = m.x * tileSize - camera.x;
    const sy = m.y * tileSize - camera.y;
    if (sx < -tileSize || sx > canvasW + tileSize || sy < -tileSize || sy > canvasH + tileSize) {
      const dx = sx - centerX;
      const dy = sy - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) / tileSize;
      offscreen.push({ monster: m, sx, sy, dx, dy, dist });
    }
  }

  // Sort by distance, keep nearest 5
  offscreen.sort((a, b) => a.dist - b.dist);
  const capped = offscreen.slice(0, 5);

  ctx.save();
  for (const entry of capped) {
    const { dx, dy, dist } = entry;
    const angle = Math.atan2(dy, dx);

    // Clamp arrow position to screen edge with margin
    const absCos = Math.abs(Math.cos(angle));
    const absSin = Math.abs(Math.sin(angle));
    let edgeX, edgeY;

    if (absCos * (canvasH - 2 * margin) > absSin * (canvasW - 2 * margin)) {
      // Left/right edge
      edgeX = Math.cos(angle) > 0 ? canvasW - margin : margin;
      edgeY = centerY + Math.tan(angle) * (edgeX - centerX);
    } else {
      // Top/bottom edge
      edgeY = Math.sin(angle) > 0 ? canvasH - margin : margin;
      edgeX = centerX + (edgeY - centerY) / Math.tan(angle);
    }

    // Clamp within screen bounds
    edgeX = Math.max(margin, Math.min(canvasW - margin, edgeX));
    edgeY = Math.max(margin, Math.min(canvasH - margin, edgeY));

    // Arrow color: red if close (< 10 tiles), orange otherwise
    const color = dist < 10 ? '#e03030' : '#e0a020';

    // Draw chevron arrow
    ctx.save();
    ctx.translate(edgeX, edgeY);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(-4, -6);
    ctx.lineTo(-1, 0);
    ctx.lineTo(-4, 6);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    // Distance text
    const tileDist = Math.round(dist);
    ctx.fillStyle = color;
    ctx.font = `10px ${fontFamily('text')}`;
    ctx.textAlign = 'center';
    ctx.fillText(`${tileDist}`, edgeX, edgeY - 10);
  }
  ctx.textAlign = 'left';
  ctx.restore();
}

// ─── Day progress bar ────────────────────────────────────────────────────────

/**
 * Draw a time-of-day indicator bar at the top of the screen.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} tick - Current tick in the day (0-23)
 * @param {string} phase - Current phase name: 'Dawn', 'Day', 'Dusk', or 'Night'
 * @param {number} canvasW - Canvas width
 */
export function drawDayProgressBar(ctx, tick, phase, canvasW) {
  const barH = canvasW <= MOBILE_W ? 6 : 4;

  ctx.save();

  // Background
  ctx.fillStyle = '#111';
  ctx.fillRect(0, 0, canvasW, barH);

  // Phase colour gradient
  const gradient = ctx.createLinearGradient(0, 0, canvasW, 0);
  // Dawn ticks 23-24 (end), Day 1-12, Dusk 13-14, Night 15-22
  gradient.addColorStop(0, '#1a1a50');    // start of day (tick 0) — night end
  gradient.addColorStop(0.04, '#d08030'); // dawn
  gradient.addColorStop(0.08, '#d4a840'); // sunrise
  gradient.addColorStop(0.10, '#e8c840'); // day
  gradient.addColorStop(0.50, '#e8c840'); // day peak
  gradient.addColorStop(0.54, '#d08030'); // dusk
  gradient.addColorStop(0.60, '#1a1a50'); // night
  gradient.addColorStop(1.0, '#1a1a50');  // night
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasW, barH);

  // Position indicator (tick / 24 across bar)
  const progress = tick / 24;
  const indicatorX = progress * canvasW;

  // Sun/moon icon — simple filled circle
  const isNight = phase === 'Night';
  const iconRadius = 5;
  const iconY = barH + iconRadius + 2;

  ctx.beginPath();
  ctx.arc(indicatorX, iconY, iconRadius, 0, Math.PI * 2);
  if (isNight) {
    ctx.fillStyle = '#c0c8e8';
    ctx.fill();
    // Moon cutout
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(indicatorX + 3, iconY - 2, iconRadius - 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  } else {
    ctx.fillStyle = '#ffd700';
    ctx.fill();
    // Sun glow
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(indicatorX, iconY, iconRadius + 3, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Small tick indicator line
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(indicatorX, 0);
  ctx.lineTo(indicatorX, barH);
  ctx.stroke();

  ctx.restore();
}

// ─── HTML-based Villager Detail Panel ────────────────────────────────────────

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Render the villager detail panel content for the given tab.
 * Called whenever the selection changes or tab switches.
 * @param {object} hudState
 * @param {object} [moraleHelper] - Optional { getMoraleEffects, getVillagerTitle } functions
 */
export function renderVillagerDetail(hudState, moraleHelper) {
  const panel = document.getElementById('villager-detail');
  const content = document.getElementById('vd-content');
  if (!panel || !content) return;

  const v = hudState.selectedVillager;
  if (!v || !hudState.showInspectPanel) {
    panel.classList.add('hidden');
    return;
  }

  panel.classList.remove('hidden');

  // Update active tab styling
  panel.querySelectorAll('.vd-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === hudState.inspectTab);
  });

  const tab = hudState.inspectTab || 'stats';

  if (tab === 'stats') {
    const stats = v.stats || {};
    const hp = v.hp ?? 0;
    const maxHp = v.maxHp ?? 1;
    const hpRatio = Math.max(0, Math.min(1, hp / maxHp));
    const hpColor = hpRatio > 0.5 ? '#2a8a2a' : hpRatio > 0.25 ? '#c8a020' : '#b02020';
    const eq = v.equipment || {};
    const title = moraleHelper?.getVillagerTitle?.(v) || '';
    const moraleInfo = moraleHelper?.getMoraleEffects?.(v);
    const moraleText = v.morale !== undefined && moraleInfo
      ? `<span style="color:${moraleInfo.moodColor}">${moraleInfo.moodLabel} (${v.morale})</span>`
      : '';

    // Relationships
    let relHtml = '';
    if (v.relationships && Object.keys(v.relationships).length > 0) {
      const sorted = Object.entries(v.relationships).sort((a, b) => b[1] - a[1]).slice(0, 5);
      relHtml = sorted.map(([id, bond]) => {
        const label = bond >= 20 ? 'Close' : bond >= 10 ? 'Friendly' : 'Acquaintance';
        return `<div style="font-size:11px;color:#c8b8e8">Villager #${id}: ${label} (${bond})</div>`;
      }).join('');
    }

    content.innerHTML = `
      <div class="vd-name">${escapeHtml(v.name)} ${title ? `<span style="color:#d4af37;font-size:12px">(${escapeHtml(title)})</span>` : ''}</div>
      <div class="vd-subtitle">${escapeHtml(v.raceLabel || '')} ${escapeHtml(v.classLabel || '')} — ${escapeHtml(v.personality || '')}</div>
      <div class="vd-stats-row">
        <div class="vd-stat"><div class="vd-stat-label">Speed</div><div class="vd-stat-val vd-stat-spd">${stats.speed ?? '-'}</div></div>
        <div class="vd-stat"><div class="vd-stat-label">Strength</div><div class="vd-stat-val vd-stat-str">${stats.strength ?? '-'}</div></div>
        <div class="vd-stat"><div class="vd-stat-label">Charisma</div><div class="vd-stat-val vd-stat-cha">${stats.charisma ?? '-'}</div></div>
      </div>
      <div class="vd-hp-bar"><div class="vd-hp-fill" style="width:${hpRatio * 100}%;background:${hpColor}"></div></div>
      <div class="vd-hp-text">HP: ${hp} / ${maxHp}</div>
      ${moraleText ? `<div class="vd-section-label">Morale</div><div class="vd-morale">${moraleText}</div>` : ''}
      <div class="vd-section-label">Equipment</div>
      ${['weapon', 'shield', 'helmet'].map(s => {
        const item = eq[s];
        const name = item ? (typeof item === 'string' ? item : item.name || 'Equipped') : null;
        return name
          ? `<div class="vd-equip">${s}: ${escapeHtml(name)}</div>`
          : `<div class="vd-equip vd-equip-empty">${s}: Empty</div>`;
      }).join('')}
      <div class="vd-state">State: ${escapeHtml(v.state || 'idle')}</div>
      ${relHtml ? `<div class="vd-section-label">Bonds</div>${relHtml}` : ''}
    `;
  } else if (tab === 'story') {
    const history = v.history || [];
    if (history.length === 0) {
      content.innerHTML = '<div class="vd-empty">No events recorded yet...</div>';
    } else {
      content.innerHTML = history.slice().reverse().map(h =>
        `<div class="vd-story-entry type-${escapeHtml(h.type || '')}">
          <div class="vd-story-time">Day ${h.day}, Tick ${h.tick}</div>
          <div class="vd-story-text">${escapeHtml(h.text)}</div>
        </div>`
      ).join('');
    }
  } else if (tab === 'thoughts') {
    const thoughts = v.thoughts || [];
    if (thoughts.length === 0) {
      content.innerHTML = '<div class="vd-empty">No thoughts yet...</div>';
    } else {
      content.innerHTML = thoughts.slice().reverse().map(t =>
        `<div class="vd-thought">
          <div class="vd-thought-time">Day ${t.day}, Tick ${t.tick}</div>
          <div class="vd-thought-text">"${escapeHtml(t.thought)}"</div>
          <div class="vd-thought-response">${escapeHtml(t.response)}</div>
        </div>`
      ).join('');
    }
  }
}

/**
 * Initialize villager detail panel event listeners.
 * @param {object} hudState
 * @param {function} rerenderFn - Function to call after tab change
 */
export function initDetailPanel(hudState, rerenderFn) {
  const panel = document.getElementById('villager-detail');
  if (!panel) return;

  panel.querySelectorAll('.vd-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      hudState.inspectTab = tab.dataset.tab;
      rerenderFn();
    });
  });

  document.getElementById('vd-close').addEventListener('click', () => {
    hudState.selectedVillager = null;
    hudState.showInspectPanel = false;
    panel.classList.add('hidden');
  });
}

// ─── Exploration counter ─────────────────────────────────────────────────────

/**
 * Draw exploration percentage in the bottom-left corner with a small eye icon.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} percentage - Exploration percentage (0-100)
 * @param {number} canvasW
 * @param {number} canvasH
 */
export function drawExplorationCounter(ctx, percentage, canvasW, canvasH) {
  const x = 12;
  // On mobile, position above the event log; on desktop, near bottom edge
  const y = canvasW <= MOBILE_W ? canvasH - 96 : canvasH - 16;

  ctx.save();

  // Eye icon (canvas drawn)
  const eyeX = x + 8;
  const eyeY = y - 3;

  // Outer eye shape
  ctx.beginPath();
  ctx.moveTo(eyeX - 7, eyeY);
  ctx.quadraticCurveTo(eyeX, eyeY - 5, eyeX + 7, eyeY);
  ctx.quadraticCurveTo(eyeX, eyeY + 5, eyeX - 7, eyeY);
  ctx.closePath();
  ctx.fillStyle = 'rgba(200, 200, 220, 0.8)';
  ctx.fill();

  // Pupil
  ctx.beginPath();
  ctx.arc(eyeX, eyeY, 2, 0, Math.PI * 2);
  ctx.fillStyle = '#1a1a30';
  ctx.fill();

  // Text
  const pct = Math.round(percentage);
  ctx.fillStyle = '#d0d0d0';
  ctx.font = `12px ${fontFamily('text')}`;
  ctx.textAlign = 'left';
  ctx.fillText(`Explored: ${pct}%`, x + 20, y);

  ctx.restore();
}
