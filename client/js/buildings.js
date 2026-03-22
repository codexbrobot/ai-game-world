/**
 * Building rendering system.
 * Draws structures on the tile map with simple pixel-art style.
 */

const BUILDING_DEFS = {
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
      // This is drawn as tile decoration, not a building sprite
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
  return buildings
    .filter(b => b.type !== 'wall' && b.type !== 'farm')
    .map(b => {
      const def = BUILDING_DEFS[b.type] || { w: 1, h: 1 };
      return {
        x: b.x + def.w * 0.5,
        y: b.y + def.h * 0.5,
      };
    });
}
