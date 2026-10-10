// The 3D dungeon: three.js geometry built from the floor maps, a torch-lit first-person camera,
// free movement with stairs and ledges, roaming monsters, and Doom-style billboard sprites.
// Bundled to js/engine.js by `npm run build:quest`; the game drives it through Q.World.
import * as THREE from 'three';

const Q = window.Q || (window.Q = {});

// World units: a map cell is CELL wide. Heights in the maps are in quarter units.
const CELL = 2;
const EYE = 1.45; // eye above the floor
const RADIUS = 0.36; // the wretches' width, for walls
const CLIMB = 0.55; // the highest step you can walk up
const SPEED = 3.4; // units a second
const TURN = 2.3; // radians a second, on the keyboard
const CEILINGS = { '.': 3.2, H: 5.6, L: 2.6 };
const CHASM = -2.4;
const CONTACT = 1.3; // this close to a monster and the fight starts

// '.' level ground; '1'–'9' raised a quarter unit each; 'a'–'h' sunk a quarter each; 'x' a chasm.
function heightOf(c) {
  if (!c || c === '.') return 0;
  if (c >= '0' && c <= '9') return (c.charCodeAt(0) - 48) * 0.25;
  if (c === 'x') return CHASM;
  return -(c.charCodeAt(0) - 96) * 0.25;
}

// Monster billboards: height in world units.
const SPRITE_HEIGHT = { rats: 0.62, zombie: 1.85, skeleton: 1.9, cultist: 1.9, abbess: 2.5 };

export function createWorld(container, hooks) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000);
  container.prepend(renderer.domElement);
  renderer.domElement.className = 'world';

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 2, 16);
  const camera = new THREE.PerspectiveCamera(70, 4 / 3, 0.05, 60);
  camera.rotation.order = 'YXZ';
  scene.add(camera);
  scene.add(new THREE.HemisphereLight(0x5a5346, 0x0a0806, 0.5));
  // the torch you carry: warm bone-white, flickering
  const torch = new THREE.PointLight(0xffe7c2, 13, 18, 1.15);
  torch.position.set(0.2, 0.25, 0.9); // carried a little behind, so walls you face up close don't burn white
  camera.add(torch);

  // ---------- textures ----------
  const loader = new THREE.TextureLoader();
  const texCache = {};
  function texture(name, repeat = true) {
    if (texCache[name]) return texCache[name];
    const t = loader.load(Q.assetUrl(name), () => { needRender = true; });
    t.colorSpace = THREE.SRGBColorSpace;
    if (repeat) { t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.RepeatWrapping; }
    t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texCache[name] = t;
    return t;
  }
  // A picture with a touch painted over it in code (the scroll on the bones, the pink water).
  function compositeTexture(key, name, paint) {
    if (texCache[key]) return texCache[key];
    const c = document.createElement('canvas');
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    const img = new Image();
    img.onload = () => {
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      const g = c.getContext('2d');
      g.drawImage(img, 0, 0);
      paint(g, c.width, c.height);
      t.needsUpdate = true;
      needRender = true;
    };
    img.src = Q.assetUrl(name);
    texCache[key] = t;
    return t;
  }
  const lambert = (map, extra = {}) => new THREE.MeshLambertMaterial({ map, ...extra });
  const materials = {
    'wall-stone': lambert(texture('wall-stone')),
    'wall-ossuary': lambert(texture('wall-ossuary')),
    'wall-relief': lambert(texture('wall-relief')),
    floor: lambert(texture('floor')),
    ceiling: lambert(texture('ceiling'), { color: 0x8a8070 }),
    door: lambert(texture('door', false)),
    pit: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    abyss: new THREE.MeshBasicMaterial({ color: 0x2a0714, fog: false }), // the chasm floor, a faint wound-red
  };

  // ---------- state ----------
  let level = null; // { grid, h, c, W, H, root, doors, items, groups }
  const player = { x: 0, z: 0, a: 0, pitch: 0, y: EYE, vy: 0, phase: 0, moving: 0, safe: { x: 0, z: 0 }, cell: null };
  let paused = true;
  let needRender = true;
  let falling = false;
  let lastTime = performance.now();
  let exploreTimer = 0;

  const cellOf = (v) => Math.floor(v / CELL);
  const tile = (cx, cy) => (level.grid[cy] && level.grid[cy][cx]) || '#';
  const floorH = (cx, cy) => (level.h[cy] && level.h[cy][cx] !== undefined ? level.h[cy][cx] : 0);
  const ceilH = (cx, cy) => (level.c[cy] && level.c[cy][cx] !== undefined ? level.c[cy][cx] : 3.2);
  const doorAt = (cx, cy) => level.doors.get(cx + ',' + cy);
  function solid(cx, cy) {
    const t = tile(cx, cy);
    if (t === '#') return true;
    const d = doorAt(cx, cy);
    return !!d && d.open < 0.8;
  }

  // ---------- building a floor ----------
  function wallMaterialFor(cx, cy) {
    const k = (((cx * 7 + cy * 13) % 10) + 10) % 10;
    return k <= 5 ? 'wall-stone' : k <= 8 ? 'wall-ossuary' : 'wall-relief';
  }

  function build(floor) {
    if (level) scene.remove(level.root);
    const grid = floor.grid;
    const H = grid.length, W = grid[0].length;
    const h = floor.heights.map((row) => [...row].map(heightOf));
    const c = floor.ceil.map((row, y) => [...row].map((ch, x) => Math.max(CEILINGS[ch] || 3.2, h[y][x] + 2.4)));
    level = { grid, h, c, W, H, root: new THREE.Group(), doors: new Map(), items: new Map(), groups: [], lights: [] };
    scene.add(level.root);

    // gather quads per material, then make one mesh each
    const buckets = {};
    const quad = (mat, a, b, cc, d, uv) => {
      const B = buckets[mat] || (buckets[mat] = { pos: [], uv: [], idx: [] });
      const base = B.pos.length / 3;
      B.pos.push(...a, ...b, ...cc, ...d);
      B.uv.push(...uv);
      B.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    };
    // a vertical face along one cell edge, from y0 up to y1, facing into the cell (normal side)
    const EDGES = [
      { dx: 0, dy: -1, p: (x, y) => [[x, y], [x + 1, y]] }, // north edge, seen from inside: west -> east
      { dx: 1, dy: 0, p: (x, y) => [[x + 1, y], [x + 1, y + 1]] },
      { dx: 0, dy: 1, p: (x, y) => [[x + 1, y + 1], [x, y + 1]] },
      { dx: -1, dy: 0, p: (x, y) => [[x, y + 1], [x, y]] },
    ];
    const vface = (mat, e, x, y, y0, y1) => {
      if (y1 - y0 < 0.01) return;
      const [[ax, az], [bx, bz]] = e.p(x, y);
      const A = [ax * CELL, y0, az * CELL], B = [bx * CELL, y0, bz * CELL];
      const C = [bx * CELL, y1, bz * CELL], D = [ax * CELL, y1, az * CELL];
      const v0 = y0 / 2, v1 = y1 / 2;
      quad(mat, A, B, C, D, [0, v0, 1, v0, 1, v1, 0, v1]);
    };

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const t = grid[y][x];
        if (t === '#') continue;
        const fy = h[y][x], cy = c[y][x];
        const x0 = x * CELL, x1 = (x + 1) * CELL, z0 = y * CELL, z1 = (y + 1) * CELL;
        // floor (a hole for the stair down) and ceiling
        if (t === '>') buildStairDown(x, y, fy);
        else quad(fy <= CHASM + 0.01 ? 'abyss' : 'floor', [x0, fy, z1], [x1, fy, z1], [x1, fy, z0], [x0, fy, z0], [x, -(y + 1), x + 1, -(y + 1), x + 1, -y, x, -y]);
        quad('ceiling', [x0, cy, z0], [x1, cy, z0], [x1, cy, z1], [x0, cy, z1], [x, y, x + 1, y, x + 1, y + 1, x, y + 1]);
        for (const e of EDGES) {
          const nx = x + e.dx, ny = y + e.dy;
          const nt = (grid[ny] && grid[ny][nx]) || '#';
          if (nt === '#') {
            vface(wallMaterialFor(nx, ny), e, x, y, fy, cy);
            continue;
          }
          // a step down to the neighbour shows its riser from this side; a lower ceiling next door shows a lintel
          const nf = h[ny][nx], nc = c[ny][nx];
          if (nf > fy) vface('wall-stone', e, x, y, fy, nf);
          if (nc < cy) vface('wall-stone', e, x, y, nc, cy);
        }
        if (t === 'D') buildDoor(x, y, fy, cy);
        if (t === 'G' || t === '<') buildDaylight(x, y, fy);
      }
    }
    for (const [mat, B] of Object.entries(buckets)) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(B.pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(B.uv, 2));
      g.setIndex(B.idx);
      g.computeVertexNormals();
      level.root.add(new THREE.Mesh(g, materials[mat]));
    }
    // things on the floor
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) placeItem(x, y);
    needRender = true;
  }

  function buildDoor(x, y, fy, cy) {
    // the panel spans the passage: across x when the walls are to the east and west
    const acrossX = solid(x - 1, y) && solid(x + 1, y);
    const height = Math.min(cy - fy, 3.0);
    const geo = new THREE.BoxGeometry(CELL, height, 0.22);
    const mesh = new THREE.Mesh(geo, materials.door);
    mesh.position.set((x + 0.5) * CELL, fy + height / 2, (y + 0.5) * CELL);
    if (!acrossX) mesh.rotation.y = Math.PI / 2;
    level.root.add(mesh);
    level.doors.set(x + ',' + y, { mesh, open: 0, opening: false, base: fy + height / 2, height });
  }

  // The stair down: steps falling away into the dark.
  function buildStairDown(x, y, fy) {
    const g = new THREE.Group();
    const steps = 6;
    for (let i = 0; i < steps; i++) {
      const depth = CELL / steps;
      const box = new THREE.Mesh(new THREE.BoxGeometry(CELL * 0.8, 0.22, depth), materials['wall-stone']);
      box.position.set((x + 0.5) * CELL, fy - 0.11 - i * 0.28, y * CELL + depth * (i + 0.5));
      g.add(box);
    }
    const pit = new THREE.Mesh(new THREE.PlaneGeometry(CELL, CELL), materials.pit);
    pit.rotation.x = -Math.PI / 2;
    pit.position.set((x + 0.5) * CELL, fy - 1.9, (y + 0.5) * CELL);
    g.add(pit);
    level.root.add(g);
  }

  // Grey daylight falling down the stair from above.
  function buildDaylight(x, y, fy) {
    const light = new THREE.PointLight(0xffe11a, 5, 7, 1.2);
    light.position.set((x + 0.5) * CELL, fy + 2.4, (y + 0.5) * CELL);
    level.root.add(light);
    const glow = new THREE.Mesh(new THREE.CircleGeometry(CELL * 0.42, 24), new THREE.MeshBasicMaterial({ color: 0xffe11a, transparent: true, opacity: 0.18, depthWrite: false }));
    glow.rotation.x = -Math.PI / 2;
    glow.position.set((x + 0.5) * CELL, fy + 0.02, (y + 0.5) * CELL);
    level.root.add(glow);
  }

  // ---------- sprites ----------
  function billboard(map, width, height) {
    const geo = new THREE.PlaneGeometry(width, height);
    geo.translate(0, height / 2, 0);
    const mat = new THREE.MeshLambertMaterial({ map, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, emissive: 0x6e6658, emissiveMap: map });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.userData.billboard = true;
    return mesh;
  }

  function itemTexture(t) {
    if (t === 'L') return [texture('remains', false), 1.3, 0.98];
    if (t === 'S') {
      return [compositeTexture('remains+scroll', 'remains-scroll', (g, w, hh) => {
        g.save(); g.translate(w * 0.66, hh * 0.72); g.rotate(-0.3);
        g.fillStyle = '#ffe11a'; g.strokeStyle = '#0a0a08'; g.lineWidth = 5;
        g.fillRect(-w * 0.12, -hh * 0.05, w * 0.24, hh * 0.1); g.strokeRect(-w * 0.12, -hh * 0.05, w * 0.24, hh * 0.1);
        g.restore();
      }), 1.3, 0.98];
    }
    if (t === 'F') {
      return [compositeTexture('font+water', 'font', (g, w, hh) => {
        g.globalCompositeOperation = 'source-atop';
        g.fillStyle = 'rgba(255,61,139,0.75)';
        g.beginPath(); g.ellipse(w / 2, hh * 0.14, w * 0.34, hh * 0.07, 0, 0, Math.PI * 2); g.fill();
      }), 0.9, 1.2];
    }
    if (t === 'f') return [texture('font', false), 0.9, 1.2];
    if (t === 'R') return [texture('relic', false), 0.8, 1.1];
    return null;
  }

  function placeItem(x, y) {
    const key = x + ',' + y;
    const old = level.items.get(key);
    if (old) { level.root.remove(old); level.items.delete(key); }
    const t = tile(x, y);
    const spec = itemTexture(t);
    if (!spec) return;
    const [map, w, hh] = spec;
    const g = new THREE.Group();
    const mesh = billboard(map, w, hh);
    g.add(mesh);
    g.position.set((x + 0.5) * CELL, floorH(x, y), (y + 0.5) * CELL);
    if (t === 'F' || t === 'R') {
      const light = new THREE.PointLight(t === 'F' ? 0xff3d8b : 0xffe11a, 3.5, 6, 1.3);
      light.position.y = 1.1;
      g.add(light);
    }
    level.root.add(g);
    level.items.set(key, g);
  }

  // A monster group: up to three billboards standing together.
  function addGroup(group) {
    const g = new THREE.Group();
    group.members.forEach((m, i) => {
      const kind = Q.MONSTERS[m.key].kind;
      const hh = SPRITE_HEIGHT[kind] || 1.9;
      const tex = texture(kind, false);
      const aspect = kind === 'rats' ? 4 / 3 : 2 / 3;
      const mesh = billboard(tex, hh * aspect, hh);
      mesh.userData.slot = i;
      g.add(mesh);
    });
    g.position.set(group.x, 0, group.z);
    level.root.add(g);
    level.groups.push({ group, mesh: g, wander: null, path: null, think: 0, step: Math.random() * 6 });
  }

  // ---------- movement ----------
  const keys = new Set();
  const stick = { x: 0, y: 0 }; // virtual joystick: x strafe, y forward
  const look = { dx: 0, dy: 0 };

  function blockedAt(px, pz, fromH) {
    // every cell the wretch's circle touches must be walkable from the floor they stand on
    const minX = cellOf(px - RADIUS), maxX = cellOf(px + RADIUS);
    const minY = cellOf(pz - RADIUS), maxY = cellOf(pz + RADIUS);
    for (let cy = minY; cy <= maxY; cy++) {
      for (let cx = minX; cx <= maxX; cx++) {
        if (solid(cx, cy)) return { cx, cy, door: !!doorAt(cx, cy) };
        if (floorH(cx, cy) - fromH > CLIMB) return { cx, cy, ledge: true };
      }
    }
    return null;
  }

  function movePlayer(dt) {
    let fwd = stick.y, side = stick.x;
    if (keys.has('w') || keys.has('arrowup')) fwd += 1;
    if (keys.has('s') || keys.has('arrowdown')) fwd -= 1;
    if (keys.has('d')) side += 1;
    if (keys.has('a')) side -= 1;
    let turn = 0;
    if (keys.has('arrowleft') || keys.has('q')) turn -= 1;
    if (keys.has('arrowright') || keys.has('e')) turn += 1;
    player.a += turn * TURN * dt + look.dx;
    player.pitch = Math.max(-0.55, Math.min(0.55, player.pitch - look.dy));
    look.dx = 0; look.dy = 0;
    const len = Math.hypot(fwd, side);
    if (len > 1) { fwd /= len; side /= len; }
    const fx = Math.cos(player.a), fz = Math.sin(player.a);
    const rx = -fz, rz = fx;
    const vx = (fx * fwd + rx * side) * SPEED * dt, vz = (fz * fwd + rz * side) * SPEED * dt;
    player.moving = Math.min(1, Math.hypot(fwd, side));
    if (vx === 0 && vz === 0) return;
    const here = floorH(cellOf(player.x), cellOf(player.z));
    // slide along walls: try each axis on its own
    const bx = blockedAt(player.x + vx, player.z, here);
    if (!bx) player.x += vx; else touch(bx);
    const bz = blockedAt(player.x, player.z + vz, here);
    if (!bz) player.z += vz; else touch(bz);
    player.phase += Math.hypot(vx, vz) * 3.2;
  }

  // Bumping a closed door opens it.
  function touch(b) {
    if (!b.door) return;
    const d = doorAt(b.cx, b.cy);
    if (d && !d.opening) {
      d.opening = true;
      hooks.onDoor && hooks.onDoor(b.cx, b.cy);
    }
  }

  function updateVertical(dt) {
    const cx = cellOf(player.x), cy = cellOf(player.z);
    const ground = floorH(cx, cy) + EYE;
    if (player.y > ground + 0.02) {
      // falling
      player.vy -= 14 * dt;
      player.y = Math.max(ground, player.y + player.vy * dt);
      if (player.y === ground) {
        const drop = player.vy;
        player.vy = 0;
        if (floorH(cx, cy) <= CHASM + 0.01 && !falling) {
          falling = true;
          hooks.onFall && hooks.onFall(-drop);
        }
      }
    } else {
      // stepping up stairs: ease, don't snap
      player.y += (ground - player.y) * Math.min(1, dt * 14);
      player.vy = 0;
    }
    if (floorH(cx, cy) > CHASM + 0.01 && Math.abs(player.y - ground) < 0.05) player.safe = { x: player.x, z: player.z };
    const key = cx + ',' + cy;
    if (key !== player.cell) {
      player.cell = key;
      hooks.onEnterCell && hooks.onEnterCell(cx, cy, tile(cx, cy));
    }
  }

  // ---------- monsters ----------
  function lineOfSight(ax, az, bx, bz) {
    const dist = Math.hypot(bx - ax, bz - az);
    const steps = Math.ceil(dist / (CELL * 0.25));
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      if (solid(cellOf(ax + (bx - ax) * t), cellOf(az + (bz - az) * t))) return false;
    }
    return true;
  }

  // The next cell on the shortest walkable path from (sx, sy) toward (tx, ty): search outward from
  // the target, and the step is the cell the search reached the monster from.
  function nextStep(sx, sy, tx, ty) {
    const key = (x, y) => x + ',' + y;
    const seen = new Set([key(tx, ty)]);
    const queue = [[tx, ty]];
    while (queue.length && seen.size < 500) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, ny = y + dy;
        if (Math.abs(floorH(nx, ny) - floorH(x, y)) > CLIMB) continue;
        if (nx === sx && ny === sy) return [x, y];
        if (seen.has(key(nx, ny)) || solid(nx, ny) || 'G<>'.includes(tile(nx, ny))) continue;
        seen.add(key(nx, ny));
        queue.push([nx, ny]);
      }
    }
    return null;
  }

  function moveToward(entry, tx, tz, speed, dt) {
    const g = entry.group;
    const dx = tx - g.x, dz = tz - g.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 0.05) return true;
    const step = Math.min(dist, speed * dt);
    const nx = g.x + (dx / dist) * step, nz = g.z + (dz / dist) * step;
    const here = floorH(cellOf(g.x), cellOf(g.z));
    const cx = cellOf(nx), cz = cellOf(nz);
    if (solid(cx, cz) || Math.abs(floorH(cx, cz) - here) > CLIMB) return true;
    g.x = nx; g.z = nz;
    entry.step += step * 2.6;
    return dist - step < 0.05;
  }

  function updateMonsters(dt, now) {
    for (const entry of level.groups) {
      const g = entry.group;
      if (!g.alive) continue;
      const def = g.def;
      const dist = Math.hypot(player.x - g.x, player.z - g.z);
      if (g.stunUntil && now < g.stunUntil) continue;
      const sees = dist < def.sight * CELL && lineOfSight(g.x, g.z, player.x, player.z);
      if (sees) g.alert = true;
      else if (dist > def.sight * CELL * 2) g.alert = false;
      if (dist < CONTACT && Math.abs(floorH(cellOf(g.x), cellOf(g.z)) - floorH(cellOf(player.x), cellOf(player.z))) < 1.2) {
        hooks.onContact && hooks.onContact(g);
        return;
      }
      const speed = def.speed;
      if (g.alert && !(def.boss && dist > 3 * CELL)) {
        if (sees && dist < CELL * 1.6) moveToward(entry, player.x, player.z, speed, dt);
        else {
          entry.think -= dt;
          if (!entry.path || entry.think <= 0) {
            entry.think = 0.4;
            const n = nextStep(cellOf(g.x), cellOf(g.z), cellOf(player.x), cellOf(player.z));
            entry.path = n ? [(n[0] + 0.5) * CELL, (n[1] + 0.5) * CELL] : null;
          }
          if (entry.path && moveToward(entry, entry.path[0], entry.path[1], speed, dt)) entry.path = null;
        }
      } else if (!def.boss) {
        // wander between neighbouring cells, with pauses
        entry.think -= dt;
        if (!entry.wander && entry.think <= 0) {
          entry.think = 1.5 + Math.random() * 3;
          const cx = cellOf(g.x), cy = cellOf(g.z);
          const [dx, dy] = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(Math.random() * 4)];
          const nx = cx + dx, ny = cy + dy;
          if (!solid(nx, ny) && !'G<>RLSFf'.includes(tile(nx, ny)) && Math.abs(floorH(nx, ny) - floorH(cx, cy)) <= CLIMB) {
            entry.wander = [(nx + 0.5) * CELL, (ny + 0.5) * CELL];
          }
        }
        if (entry.wander && moveToward(entry, entry.wander[0], entry.wander[1], speed * 0.45, dt)) entry.wander = null;
      }
    }
  }

  // ---------- each frame ----------
  function placeCamera(now) {
    const bob = Math.sin(player.phase) * 0.045 * player.moving;
    camera.position.set(player.x, player.y + bob, player.z);
    camera.rotation.y = -(player.a + Math.PI / 2);
    camera.rotation.x = player.pitch;
    torch.intensity = 13 + Math.sin(now * 0.011) * 0.9 + Math.sin(now * 0.037) * 0.6;
    // billboards turn to face you; groups spread out across your view
    const right = new THREE.Vector3(-Math.sin(player.a), 0, Math.cos(player.a));
    for (const entry of level.groups) {
      const g = entry.group;
      entry.mesh.visible = g.alive;
      if (!g.alive) continue;
      entry.mesh.position.set(g.x, floorH(cellOf(g.x), cellOf(g.z)), g.z);
      const n = entry.mesh.children.length;
      entry.mesh.children.forEach((m, i) => {
        const off = (i - (n - 1) / 2) * 0.75;
        const back = i === Math.floor((n - 1) / 2) && n > 1 ? -0.25 : 0.15 * Math.abs(i - (n - 1) / 2);
        m.position.set(right.x * off - Math.cos(player.a) * back, Math.abs(Math.sin(entry.step + i)) * 0.06, right.z * off - Math.sin(player.a) * back);
      });
    }
    level.root.traverse((o) => {
      if (!o.userData.billboard) return;
      const wp = o.getWorldPosition(new THREE.Vector3());
      o.rotation.y = Math.atan2(camera.position.x - wp.x, camera.position.z - wp.z);
    });
  }

  function updateDoors(dt) {
    for (const d of level.doors.values()) {
      if (!d.opening || d.open >= 1) continue;
      d.open = Math.min(1, d.open + dt * 1.4);
      d.mesh.position.y = d.base + d.open * d.height * 0.95;
      needRender = true;
    }
  }

  function markExplored() {
    const ex = hooks.explored && hooks.explored();
    if (!ex) return;
    const px = cellOf(player.x), py = cellOf(player.z);
    for (let y = py - 5; y <= py + 5; y++) {
      for (let x = px - 5; x <= px + 5; x++) {
        if (!ex[y] || ex[y][x] === undefined || ex[y][x]) continue;
        if (Math.hypot(x - px, y - py) > 5.5) continue;
        if (lineOfSight(player.x, player.z, (x + 0.5) * CELL, (y + 0.5) * CELL) || (Math.abs(x - px) + Math.abs(y - py) <= 1)) ex[y][x] = true;
      }
    }
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    if (!level || !container.isConnected || container.offsetParent === null) return;
    resize();
    if (!paused) {
      movePlayer(dt);
      updateVertical(dt);
      updateMonsters(dt, now);
      exploreTimer -= dt;
      if (exploreTimer <= 0) { exploreTimer = 0.25; markExplored(); hooks.onTick && hooks.onTick(); }
    }
    updateDoors(dt);
    placeCamera(now);
    renderer.render(scene, camera);
  }

  let lastW = 0, lastH = 0;
  function resize() {
    const w = container.clientWidth, hh = container.clientHeight;
    if (w === lastW && hh === lastH) return;
    lastW = w; lastH = hh;
    renderer.setSize(w, hh, false);
    camera.aspect = w / Math.max(1, hh);
    // keep the horizontal view wide on tall phone screens
    camera.fov = camera.aspect < 1 ? 82 : 68;
    camera.updateProjectionMatrix();
  }

  // ---------- input ----------
  window.addEventListener('keydown', (e) => {
    if (paused || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (['w', 'a', 's', 'd', 'q', 'e', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
      keys.add(k);
      e.preventDefault();
    }
  });
  window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
  window.addEventListener('blur', () => keys.clear());

  // Touch: the left half is a joystick that appears under your thumb; the right half turns and looks.
  // Mouse: drag anywhere to look.
  const knob = document.createElement('div');
  knob.className = 'stick';
  knob.innerHTML = '<i></i>';
  knob.hidden = true;
  container.appendChild(knob);
  const pointers = new Map();
  const el = renderer.domElement;
  el.style.touchAction = 'none';
  el.addEventListener('pointerdown', (e) => {
    if (paused) return;
    el.setPointerCapture(e.pointerId);
    const r = el.getBoundingClientRect();
    const role = e.pointerType === 'mouse' ? 'look' : (e.clientX - r.left < r.width / 2 ? 'move' : 'look');
    if (role === 'move' && [...pointers.values()].some((p) => p.role === 'move')) return;
    pointers.set(e.pointerId, { role, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY });
    if (role === 'move') {
      knob.hidden = false;
      knob.style.left = (e.clientX - r.left) + 'px';
      knob.style.top = (e.clientY - r.top) + 'px';
      knob.firstChild.style.transform = 'translate(-50%, -50%)';
    }
  });
  el.addEventListener('pointermove', (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    if (p.role === 'move') {
      const R = 46;
      let dx = e.clientX - p.x0, dy = e.clientY - p.y0;
      const len = Math.hypot(dx, dy);
      if (len > R) { dx *= R / len; dy *= R / len; }
      stick.x = Math.abs(dx) < 8 ? 0 : dx / R;
      stick.y = Math.abs(dy) < 8 ? 0 : -dy / R;
      knob.firstChild.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    } else {
      look.dx += (e.clientX - p.x) * (e.pointerType === 'mouse' ? 0.005 : 0.0075);
      look.dy += (e.clientY - p.y) * 0.004;
    }
    p.x = e.clientX; p.y = e.clientY;
  });
  const release = (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    pointers.delete(e.pointerId);
    if (p.role === 'move') { stick.x = 0; stick.y = 0; knob.hidden = true; }
  };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);

  requestAnimationFrame(frame);

  // ---------- what the game can do ----------
  return {
        // Build a floor: { grid, heights, ceil, groups, opened: ['x,y', ...] }.
    load(floor) {
      build(floor);
      for (const key of floor.opened || []) {
        const dr = level.doors.get(key);
        if (dr) { dr.open = 1; dr.opening = true; dr.mesh.position.y = dr.base + dr.height * 0.95; }
      }
      for (const g of floor.groups) {
        g.def = Q.MONSTERS[g.members[0].key];
        addGroup(g);
      }
    },
    // Stand the wretches at a world position, facing angle a (0 faces east).
    place(pose) {
      player.x = pose.x; player.z = pose.z; player.a = pose.a; player.pitch = 0;
      player.y = floorH(cellOf(pose.x), cellOf(pose.z)) + EYE;
      player.vy = 0;
      player.cell = cellOf(pose.x) + ',' + cellOf(pose.z);
      player.safe = { x: pose.x, z: pose.z };
      falling = false;
      keys.clear();
    },
    // Where a cell's middle is, in world units, and which way faces out of it.
    cellPose(cx, cy) {
      let a = 0;
      for (const [dx, dy, ang] of [[0, -1, -Math.PI / 2], [1, 0, 0], [0, 1, Math.PI / 2], [-1, 0, Math.PI]]) {
        if (!solid(cx + dx, cy + dy)) { a = ang; break; }
      }
      return { x: (cx + 0.5) * CELL, z: (cy + 0.5) * CELL, a };
    },
    pose: () => ({ x: player.x, z: player.z, a: player.a }),
    // The wretches' place on the map, in cells, and their facing.
    mapPose: () => ({ x: player.x / CELL - 0.5, y: player.z / CELL - 0.5, a: player.a }),
    pause() { paused = true; keys.clear(); stick.x = 0; stick.y = 0; knob.hidden = true; pointers.clear(); },
    resume() { paused = false; lastTime = performance.now(); },
    get paused() { return paused; },
    refreshTile(cx, cy) { placeItem(cx, cy); },
    openDoor(cx, cy) { const d = doorAt(cx, cy); if (d) d.opening = true; },
    // After a fall: climb back out to the last firm ground.
    haulBack() { player.x = player.safe.x; player.z = player.safe.z; player.y = floorH(cellOf(player.x), cellOf(player.z)) + EYE; player.vy = 0; falling = false; },
    // After fleeing: back off from the monster a pace.
    stepBack(g) {
      const dx = player.x - g.x, dz = player.z - g.z;
      const d = Math.hypot(dx, dz) || 1;
      for (let k = 2.2; k > 0.4; k -= 0.3) {
        const nx = player.x + (dx / d) * k, nz = player.z + (dz / d) * k;
        if (!blockedAt(nx, nz, floorH(cellOf(player.x), cellOf(player.z)) + CLIMB)) { player.x = nx; player.z = nz; break; }
      }
    },
    monsterPos: (g) => ({ x: g.x / CELL - 0.5, y: g.z / CELL - 0.5 }),
    cellSize: CELL,
    render() { placeCamera(performance.now()); renderer.render(scene, camera); },
  };
}

Q.createWorld = createWorld;
