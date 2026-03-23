/**
 * Building rendering system.
 * Draws structures on the tile map with simple pixel-art style.
 */

export const BUILDING_DEFS = {
  house: {
    w: 1, h: 1,
    label: 'House',
    draw(ctx, x, y, s) {
      // Walls
      ctx.fillStyle = '#8a6a3a';
      ctx.fillRect(x + 2, y + s * 0.3, s - 4, s * 0.65);
      // Roof
      ctx.fillStyle = '#6a3a2a';
      ctx.beginPath();
      ctx.moveTo(x - 2, y + s * 0.35);
      ctx.lineTo(x + s / 2, y + 2);
      ctx.lineTo(x + s + 2, y + s * 0.35);
      ctx.closePath();
      ctx.fill();
      // Door
      ctx.fillStyle = '#4a2a1a';
      ctx.fillRect(x + s * 0.38, y + s * 0.55, s * 0.24, s * 0.4);
      // Window
      ctx.fillStyle = '#aac8e8';
      ctx.fillRect(x + s * 0.15, y + s * 0.45, s * 0.15, s * 0.12);
    }
  },

  chapel: {
    w: 2, h: 2,
    label: 'Chapel',
    draw(ctx, x, y, s) {
      const w = s * 2;
      const h = s * 2;
      // Main building
      ctx.fillStyle = '#a0a0a0';
      ctx.fillRect(x + 4, y + h * 0.3, w - 8, h * 0.65);
      // Roof
      ctx.fillStyle = '#5a3a2a';
      ctx.beginPath();
      ctx.moveTo(x, y + h * 0.35);
      ctx.lineTo(x + w / 2, y + 4);
      ctx.lineTo(x + w, y + h * 0.35);
      ctx.closePath();
      ctx.fill();
      // Steeple
      ctx.fillStyle = '#a0a0a0';
      ctx.fillRect(x + w * 0.42, y + h * 0.05, w * 0.16, h * 0.25);
      // Cross
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(x + w * 0.48, y - 2, w * 0.04, h * 0.1);
      ctx.fillRect(x + w * 0.44, y + 2, w * 0.12, h * 0.03);
      // Door
      ctx.fillStyle = '#4a2a1a';
      ctx.fillRect(x + w * 0.4, y + h * 0.6, w * 0.2, h * 0.35);
      // Windows
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(x + w * 0.15, y + h * 0.42, w * 0.1, h * 0.15);
      ctx.fillRect(x + w * 0.75, y + h * 0.42, w * 0.1, h * 0.15);
    }
  },

  workshop: {
    w: 2, h: 1,
    label: 'Workshop',
    draw(ctx, x, y, s) {
      const w = s * 2;
      // Walls
      ctx.fillStyle = '#6a5a3a';
      ctx.fillRect(x + 2, y + s * 0.25, w - 4, s * 0.7);
      // Roof (flat-ish)
      ctx.fillStyle = '#4a3a2a';
      ctx.fillRect(x - 2, y + s * 0.2, w + 4, s * 0.12);
      // Chimney with smoke
      ctx.fillStyle = '#555';
      ctx.fillRect(x + w * 0.75, y - s * 0.1, s * 0.15, s * 0.35);
      // Anvil
      ctx.fillStyle = '#444';
      ctx.fillRect(x + s * 0.15, y + s * 0.55, s * 0.25, s * 0.15);
      // Door
      ctx.fillStyle = '#3a2a1a';
      ctx.fillRect(x + w * 0.42, y + s * 0.45, w * 0.16, s * 0.5);
    }
  },

  healer: {
    w: 1, h: 1,
    label: "Healer's Hut",
    draw(ctx, x, y, s) {
      // Round-ish hut
      ctx.fillStyle = '#7a8a5a';
      ctx.fillRect(x + 3, y + s * 0.35, s - 6, s * 0.6);
      // Thatched roof
      ctx.fillStyle = '#5a6a3a';
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.4);
      ctx.lineTo(x + s / 2, y + 4);
      ctx.lineTo(x + s, y + s * 0.4);
      ctx.closePath();
      ctx.fill();
      // Herb marker (green cross)
      ctx.fillStyle = '#4a8a4a';
      ctx.fillRect(x + s * 0.42, y + s * 0.5, s * 0.16, s * 0.3);
      ctx.fillRect(x + s * 0.35, y + s * 0.58, s * 0.3, s * 0.14);
    }
  },

  watchtower: {
    w: 1, h: 1,
    label: 'Watchtower',
    draw(ctx, x, y, s) {
      // Tower base
      ctx.fillStyle = '#7a7a7a';
      ctx.fillRect(x + s * 0.25, y + s * 0.1, s * 0.5, s * 0.85);
      // Platform
      ctx.fillStyle = '#5a4a2a';
      ctx.fillRect(x + s * 0.15, y + s * 0.05, s * 0.7, s * 0.1);
      // Flag
      ctx.fillStyle = '#8a3a3a';
      ctx.fillRect(x + s * 0.55, y - s * 0.15, s * 0.25, s * 0.12);
      ctx.strokeStyle = '#5a3a1a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + s * 0.55, y - s * 0.2);
      ctx.lineTo(x + s * 0.55, y + s * 0.08);
      ctx.stroke();
    }
  },

  wall: {
    w: 1, h: 1,
    label: 'Wall',
    draw(ctx, x, y, s) {
      ctx.fillStyle = '#6a6a6a';
      ctx.fillRect(x + 2, y + s * 0.2, s - 4, s * 0.7);
      // Battlements
      ctx.fillStyle = '#7a7a7a';
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(x + 4 + i * (s * 0.3), y + s * 0.12, s * 0.2, s * 0.15);
      }
    }
  },

  farm: {
    w: 1, h: 1,
    label: 'Farm',
    draw(ctx, x, y, s) {
      // Crop rows
      ctx.strokeStyle = '#5a7a2a';
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const ry = y + s * 0.2 + i * s * 0.2;
        ctx.beginPath();
        ctx.moveTo(x + 4, ry);
        ctx.lineTo(x + s - 4, ry);
        ctx.stroke();
      }
    }
  },

  storehouse: {
    w: 2, h: 1,
    label: 'Storehouse',
    draw(ctx, x, y, s) {
      const w = s * 2;
      // Walls
      ctx.fillStyle = '#7a6a4a';
      ctx.fillRect(x + 2, y + s * 0.25, w - 4, s * 0.7);
      // Flat roof overhang
      ctx.fillStyle = '#5a4a3a';
      ctx.fillRect(x - 2, y + s * 0.18, w + 4, s * 0.12);
      // Open front
      ctx.fillStyle = '#3a2a1a';
      ctx.fillRect(x + w * 0.15, y + s * 0.35, w * 0.3, s * 0.55);
      // Crates inside
      ctx.fillStyle = '#8a7a5a';
      ctx.fillRect(x + w * 0.55, y + s * 0.5, s * 0.25, s * 0.2);
      ctx.fillRect(x + w * 0.65, y + s * 0.4, s * 0.2, s * 0.3);
    }
  },

  // ── Upgraded building types ──────────────────────────────────

  manor: {
    w: 2, h: 1,
    label: 'Manor',
    draw(ctx, x, y, s) {
      const w = s * 2;
      // Stone foundation
      ctx.fillStyle = '#808080';
      ctx.fillRect(x + 2, y + s * 0.8, w - 4, s * 0.15);
      // Walls (rich brown)
      ctx.fillStyle = '#a08050';
      ctx.fillRect(x + 2, y + s * 0.3, w - 4, s * 0.55);
      // Slate roof
      ctx.fillStyle = '#5a3a2a';
      ctx.beginPath();
      ctx.moveTo(x - 2, y + s * 0.35);
      ctx.lineTo(x + w / 2, y + 2);
      ctx.lineTo(x + w + 2, y + s * 0.35);
      ctx.closePath();
      ctx.fill();
      // Windows (multiple)
      ctx.fillStyle = '#aac8e8';
      ctx.fillRect(x + w * 0.1, y + s * 0.42, s * 0.15, s * 0.12);
      ctx.fillRect(x + w * 0.3, y + s * 0.42, s * 0.15, s * 0.12);
      ctx.fillRect(x + w * 0.55, y + s * 0.42, s * 0.15, s * 0.12);
      ctx.fillRect(x + w * 0.75, y + s * 0.42, s * 0.15, s * 0.12);
      // Balcony railing
      ctx.fillStyle = '#6a5a3a';
      ctx.fillRect(x + w * 0.25, y + s * 0.58, w * 0.5, s * 0.03);
      for (let i = 0; i < 5; i++) {
        ctx.fillRect(x + w * 0.27 + i * w * 0.1, y + s * 0.58, s * 0.03, s * 0.1);
      }
      // Door
      ctx.fillStyle = '#4a2a1a';
      ctx.fillRect(x + w * 0.42, y + s * 0.55, w * 0.16, s * 0.4);
    }
  },

  cathedral: {
    w: 2, h: 2,
    label: 'Cathedral',
    draw(ctx, x, y, s) {
      const w = s * 2;
      const h = s * 2;
      // Main stone walls
      ctx.fillStyle = '#b0b0b0';
      ctx.fillRect(x + 4, y + h * 0.3, w - 8, h * 0.65);
      // Dark slate roof
      ctx.fillStyle = '#4a3a3a';
      ctx.beginPath();
      ctx.moveTo(x, y + h * 0.35);
      ctx.lineTo(x + w / 2, y + 4);
      ctx.lineTo(x + w, y + h * 0.35);
      ctx.closePath();
      ctx.fill();
      // Bell tower
      ctx.fillStyle = '#b0b0b0';
      ctx.fillRect(x + w * 0.38, y - h * 0.05, w * 0.24, h * 0.38);
      ctx.fillStyle = '#4a3a3a';
      ctx.beginPath();
      ctx.moveTo(x + w * 0.36, y + h * 0.02);
      ctx.lineTo(x + w * 0.5, y - h * 0.1);
      ctx.lineTo(x + w * 0.64, y + h * 0.02);
      ctx.closePath();
      ctx.fill();
      // Gold cross (larger than chapel)
      ctx.fillStyle = '#d4af37';
      ctx.fillRect(x + w * 0.475, y - h * 0.18, w * 0.05, h * 0.12);
      ctx.fillRect(x + w * 0.44, y - h * 0.14, w * 0.12, h * 0.04);
      // Rose window (radial pattern)
      const cx = x + w * 0.5;
      const cy = y + h * 0.45;
      const rr = s * 0.18;
      const colors = ['#d44a4a', '#4a4ad4', '#d4d44a'];
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = colors[i % 3];
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, rr, angle, angle + Math.PI / 3);
        ctx.closePath();
        ctx.fill();
      }
      // Stained glass windows (alternating)
      const glassColors = ['#d44a4a', '#4a4ad4', '#d4d44a', '#4a8a4a'];
      ctx.fillStyle = glassColors[0];
      ctx.fillRect(x + w * 0.1, y + h * 0.5, w * 0.08, h * 0.15);
      ctx.fillStyle = glassColors[1];
      ctx.fillRect(x + w * 0.22, y + h * 0.5, w * 0.08, h * 0.15);
      ctx.fillStyle = glassColors[2];
      ctx.fillRect(x + w * 0.7, y + h * 0.5, w * 0.08, h * 0.15);
      ctx.fillStyle = glassColors[3];
      ctx.fillRect(x + w * 0.82, y + h * 0.5, w * 0.08, h * 0.15);
      // Door
      ctx.fillStyle = '#4a2a1a';
      ctx.fillRect(x + w * 0.38, y + h * 0.65, w * 0.24, h * 0.3);
    }
  },

  fortress: {
    w: 2, h: 2,
    label: 'Fortress',
    draw(ctx, x, y, s) {
      const w = s * 2;
      const h = s * 2;
      // Main walls (dark gray)
      ctx.fillStyle = '#606060';
      ctx.fillRect(x + 4, y + h * 0.15, w - 8, h * 0.8);
      // Battlements (crenelated top)
      ctx.fillStyle = '#707070';
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(x + 4 + i * (w - 8) / 6, y + h * 0.08, (w - 8) / 8, h * 0.12);
      }
      // Arrow slits
      ctx.fillStyle = '#2a2a2a';
      ctx.fillRect(x + w * 0.15, y + h * 0.35, w * 0.03, h * 0.1);
      ctx.fillRect(x + w * 0.35, y + h * 0.35, w * 0.03, h * 0.1);
      ctx.fillRect(x + w * 0.62, y + h * 0.35, w * 0.03, h * 0.1);
      ctx.fillRect(x + w * 0.82, y + h * 0.35, w * 0.03, h * 0.1);
      // Iron gate (grid pattern)
      ctx.fillStyle = '#3a3a3a';
      ctx.fillRect(x + w * 0.35, y + h * 0.55, w * 0.3, h * 0.4);
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const gx = x + w * 0.37 + i * w * 0.07;
        ctx.beginPath();
        ctx.moveTo(gx, y + h * 0.55);
        ctx.lineTo(gx, y + h * 0.95);
        ctx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        const gy = y + h * 0.6 + i * h * 0.12;
        ctx.beginPath();
        ctx.moveTo(x + w * 0.35, gy);
        ctx.lineTo(x + w * 0.65, gy);
        ctx.stroke();
      }
      // Banner (red, hanging from top)
      ctx.fillStyle = '#8a2020';
      ctx.fillRect(x + w * 0.8, y + h * 0.02, w * 0.12, h * 0.18);
      ctx.strokeStyle = '#5a3a1a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + w * 0.86, y - h * 0.02);
      ctx.lineTo(x + w * 0.86, y + h * 0.08);
      ctx.stroke();
    }
  },

  forge: {
    w: 2, h: 2,
    label: 'Forge',
    draw(ctx, x, y, s) {
      const w = s * 2;
      const h = s * 2;
      // Walls (dark brown)
      ctx.fillStyle = '#5a4a3a';
      ctx.fillRect(x + 4, y + h * 0.25, w - 8, h * 0.7);
      // Flat roof
      ctx.fillStyle = '#4a3a2a';
      ctx.fillRect(x - 2, y + h * 0.2, w + 4, h * 0.08);
      // Furnace glow (radial gradient)
      const grad = ctx.createRadialGradient(
        x + w * 0.25, y + h * 0.6, s * 0.05,
        x + w * 0.25, y + h * 0.6, s * 0.25
      );
      grad.addColorStop(0, '#ff6020');
      grad.addColorStop(1, '#ff2000');
      ctx.fillStyle = grad;
      ctx.fillRect(x + w * 0.1, y + h * 0.45, w * 0.3, h * 0.3);
      // Metal glow around furnace
      const glow = ctx.createRadialGradient(
        x + w * 0.25, y + h * 0.6, s * 0.1,
        x + w * 0.25, y + h * 0.6, s * 0.45
      );
      glow.addColorStop(0, 'rgba(255, 96, 32, 0.3)');
      glow.addColorStop(1, 'rgba(255, 32, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(x, y + h * 0.3, w * 0.5, h * 0.6);
      // Chimney (tall, with smoke puff)
      ctx.fillStyle = '#555';
      ctx.fillRect(x + w * 0.18, y - h * 0.05, s * 0.2, h * 0.32);
      // Smoke puff
      ctx.fillStyle = 'rgba(180, 180, 180, 0.4)';
      ctx.beginPath();
      ctx.arc(x + w * 0.22, y - h * 0.08, s * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + w * 0.26, y - h * 0.13, s * 0.08, 0, Math.PI * 2);
      ctx.fill();
      // Anvil (larger than workshop)
      ctx.fillStyle = '#444';
      ctx.fillRect(x + w * 0.55, y + h * 0.6, s * 0.35, s * 0.2);
      ctx.fillRect(x + w * 0.6, y + h * 0.55, s * 0.25, s * 0.08);
      // Metal tanks
      ctx.fillStyle = '#555';
      ctx.fillRect(x + w * 0.7, y + h * 0.35, s * 0.2, s * 0.2);
      ctx.fillRect(x + w * 0.8, y + h * 0.38, s * 0.15, s * 0.15);
    }
  },

  granary: {
    w: 2, h: 1,
    label: 'Granary',
    draw(ctx, x, y, s) {
      const w = s * 2;
      // Walls (golden brown)
      ctx.fillStyle = '#8a7a4a';
      ctx.fillRect(x + 2, y + s * 0.3, w * 0.55, s * 0.65);
      // Flat roof
      ctx.fillStyle = '#6a5a3a';
      ctx.fillRect(x - 2, y + s * 0.22, w * 0.6, s * 0.12);
      // Silo (cylindrical shape using arc)
      ctx.fillStyle = '#7a6a3a';
      ctx.beginPath();
      ctx.arc(x + w * 0.75, y + s * 0.55, s * 0.25, Math.PI, 0);
      ctx.fillRect(x + w * 0.75 - s * 0.25, y + s * 0.55, s * 0.5, s * 0.35);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + w * 0.75, y + s * 0.55, s * 0.25, Math.PI, 0);
      ctx.fill();
      // Wheat bales (stacked rectangles)
      ctx.fillStyle = '#c8b040';
      ctx.fillRect(x + w * 0.08, y + s * 0.6, s * 0.2, s * 0.15);
      ctx.fillRect(x + w * 0.08, y + s * 0.48, s * 0.18, s * 0.12);
      ctx.fillRect(x + w * 0.28, y + s * 0.6, s * 0.18, s * 0.15);
      // Fence (vertical posts)
      ctx.fillStyle = '#6a5a3a';
      for (let i = 0; i < 4; i++) {
        ctx.fillRect(x + w * 0.05 + i * w * 0.13, y + s * 0.78, s * 0.04, s * 0.18);
      }
      // Fence rail
      ctx.fillRect(x + w * 0.05, y + s * 0.82, w * 0.42, s * 0.03);
      // Crop rows (thicker than farm)
      ctx.strokeStyle = '#5a7a2a';
      ctx.lineWidth = 3;
      for (let i = 0; i < 3; i++) {
        const ry = y + s * 0.35 + i * s * 0.12;
        ctx.beginPath();
        ctx.moveTo(x + w * 0.62, ry);
        ctx.lineTo(x + w * 0.92, ry);
        ctx.stroke();
      }
    }
  },

  rampart: {
    w: 1, h: 1,
    label: 'Rampart',
    draw(ctx, x, y, s) {
      // Walls (darker than regular wall)
      ctx.fillStyle = '#505050';
      ctx.fillRect(x + 2, y + s * 0.2, s - 4, s * 0.7);
      // Stone texture (small lighter rectangles)
      ctx.fillStyle = '#5e5e5e';
      ctx.fillRect(x + s * 0.15, y + s * 0.35, s * 0.12, s * 0.08);
      ctx.fillRect(x + s * 0.55, y + s * 0.5, s * 0.12, s * 0.08);
      ctx.fillRect(x + s * 0.35, y + s * 0.7, s * 0.12, s * 0.08);
      ctx.fillRect(x + s * 0.7, y + s * 0.35, s * 0.1, s * 0.06);
      ctx.fillRect(x + s * 0.2, y + s * 0.58, s * 0.1, s * 0.06);
      // Crenellations (wider, more prominent)
      ctx.fillStyle = '#606060';
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(x + 3 + i * (s * 0.3), y + s * 0.1, s * 0.24, s * 0.16);
      }
      // Arrow slits (narrow vertical)
      ctx.fillStyle = '#2a2a2a';
      ctx.fillRect(x + s * 0.3, y + s * 0.4, s * 0.05, s * 0.18);
      ctx.fillRect(x + s * 0.6, y + s * 0.4, s * 0.05, s * 0.18);
    }
  },
};

export const BUILDING_COSTS = {
  house:      { cost: { wood: 20, stone: 10 }, priority: 1, effect: 'capacity', effectValue: 2 },
  farm:       { cost: { wood: 10, stone: 5 },  priority: 2, effect: 'passiveFood', effectValue: 1 },
  workshop:   { cost: { wood: 30, stone: 20, iron: 5 }, priority: 3, effect: 'minerBonus', effectValue: 0.5 },
  watchtower: { cost: { wood: 0, stone: 25, iron: 10 }, priority: 4, effect: 'hunterRange', effectValue: 4 },
  wall:       { cost: { wood: 0, stone: 10 },  priority: 5, effect: 'defense', effectValue: 1 },
  storehouse: { cost: { wood: 25, stone: 15 }, priority: 6, effect: 'resourceCap', effectValue: 2 },

  // Upgraded building types (not auto-built; high costs prevent AI from choosing them)
  manor:     { cost: { wood: 999, stone: 999, iron: 999 }, priority: 99, effect: 'capacity', effectValue: 5 },
  cathedral: { cost: { stone: 999, iron: 999, wood: 999 }, priority: 99, effect: 'faithPerTick', effectValue: 2 },
  fortress:  { cost: { stone: 999, iron: 999 },            priority: 99, effect: 'hunterRange', effectValue: 8 },
  forge:     { cost: { iron: 999, stone: 999, wood: 999 },  priority: 99, effect: 'minerBonus', effectValue: 1.0 },
  granary:   { cost: { wood: 999, stone: 999 },             priority: 99, effect: 'passiveFood', effectValue: 3 },
  rampart:   { cost: { stone: 999, iron: 999 },             priority: 99, effect: 'defense', effectValue: 3 },
};

/**
 * Draw all buildings on the map.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object[]} buildings - Array of { x, y, type }
 * @param {number} tileSize
 * @param {number} cameraX
 * @param {number} cameraY
 */
export function drawBuildings(ctx, buildings, tileSize, cameraX, cameraY) {
  for (const b of buildings) {
    const def = BUILDING_DEFS[b.type];
    if (!def) continue;

    const screenX = b.x * tileSize - cameraX;
    const screenY = b.y * tileSize - cameraY;

    def.draw(ctx, screenX, screenY, tileSize);
  }
}

/**
 * Get building light positions (for night torches).
 */
export function getBuildingLights(buildings) {
  const lights = [];
  for (const b of buildings) {
    // Skip types that don't emit light
    if (b.type === 'wall' || b.type === 'farm') continue;

    const def = BUILDING_DEFS[b.type] || { w: 1, h: 1 };
    const cx = b.x + def.w * 0.5;
    const cy = b.y + def.h * 0.5;

    // Cathedral gets 2 light points
    if (b.type === 'cathedral') {
      lights.push({ x: cx - 0.3, y: cy });
      lights.push({ x: cx + 0.3, y: cy });
    // Fortress gets 2 light points
    } else if (b.type === 'fortress') {
      lights.push({ x: cx - 0.4, y: cy - 0.2 });
      lights.push({ x: cx + 0.4, y: cy + 0.2 });
    // Forge gets 1 light point (furnace already glows)
    } else if (b.type === 'forge') {
      lights.push({ x: cx, y: cy });
    // Rampart emits no light (upgraded wall)
    } else if (b.type === 'rampart') {
      continue;
    } else {
      lights.push({ x: cx, y: cy });
    }
  }
  return lights;
}
