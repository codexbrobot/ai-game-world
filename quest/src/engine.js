// The 3D dungeon: three.js geometry built from the floor maps, a torch-lit first-person camera,
// free movement with stairs and ledges, roaming monsters, and Doom-style billboard sprites that shamble
// in two-frame steps. The wretches' hands are drawn over the view like Doom's weapon: a torch on the left
// with a living flame (the light in the world flickers with it) and the front wretch's weapon on the right.
// Bundled to js/engine.js by `npm run build:quest`; the game drives it through Q.World.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';

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
  const hemi = new THREE.HemisphereLight(0x5a5346, 0x0a0806, 0.5);
  scene.add(hemi);
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
  // Surfaces are named by picture; each floor's theme says which pictures it uses.
  const matCache = {
    pit: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    abyss: new THREE.MeshBasicMaterial({ color: 0x2a0714, fog: false }), // the chasm floor, a faint wound-red
  };
  // Every stone surface knows the waterline: just above it the stone is dark and wet, and right at it
  // there is a thin pale line of scum where the water meets the wall.
  const waterline = { value: -99 };
  function wetStone(m) {
    m.onBeforeCompile = (shader) => {
      shader.uniforms.waterY = waterline;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vWorldY;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWorldY = (modelMatrix * vec4(transformed, 1.0)).y;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float waterY;\nvarying float vWorldY;')
        .replace('#include <dithering_fragment>', `#include <dithering_fragment>
          float above = vWorldY - waterY;
          float wet = 1.0 - smoothstep(0.0, 0.32, above);
          gl_FragColor.rgb *= 1.0 - 0.5 * wet * step(-0.02, above);
          gl_FragColor.rgb += vec3(0.5, 0.47, 0.4) * exp(-pow(above / 0.018, 2.0)) * 0.35;`);
    };
    return m;
  }
  function mat(name, extra) {
    if (!matCache[name]) matCache[name] = wetStone(lambert(texture(name, !/door/.test(name)), extra));
    return matCache[name];
  }
  // The Undercroft's look, used by any floor that doesn't bring its own.
  const DEFAULT_THEME = {
    walls: [['wall-stone', 6], ['wall-ossuary', 3], ['wall-relief', 1]],
    riser: 'wall-stone', floor: 'floor', ceiling: 'ceiling', door: 'door',
    sky: 0x5a5346, ground: 0x0a0806, fog: 0x000000, ceilingTint: 0x8a8070,
    water: 0.32, waterTint: 0x0b0906, // how high the flood stands, in world units above level ground
  };
  let theme = DEFAULT_THEME;
  const materials = new Proxy({}, {
    get(_, key) {
      if (key in matCache) return matCache[key];
      if (key === 'floor') return mat(theme.floor);
      if (key === 'ceiling') return mat(theme.ceiling, { color: theme.ceilingTint });
      if (key === 'door') return mat(theme.door);
      if (key === 'riser') return mat(theme.riser, theme.wallTint ? { color: theme.wallTint } : undefined);
      return mat(key, theme.wallTint ? { color: theme.wallTint } : undefined);
    },
  });

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
  // Walls pick a picture by a fixed hash of their cell, weighted by the theme.
  function wallMaterialFor(cx, cy) {
    const total = theme.walls.reduce((n, [, w]) => n + w, 0);
    let k = (((cx * 7 + cy * 13) % total) + total) % total;
    for (const [name, w] of theme.walls) {
      if (k < w) return name;
      k -= w;
    }
    return theme.walls[0][0];
  }

  function build(floor) {
    if (level) scene.remove(level.root);
    if (water) { water.mesh.dispose(); water = null; }
    theme = { ...DEFAULT_THEME, ...(floor.theme || {}) };
    scene.fog.color.setHex(theme.fog);
    renderer.setClearColor(theme.fog);
    hemi.color.setHex(theme.sky);
    hemi.groundColor.setHex(theme.ground);
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
          if (nf > fy) vface('riser', e, x, y, fy, nf);
          if (nc < cy) vface('riser', e, x, y, nc, cy);
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
    buildWater();
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
      const box = new THREE.Mesh(new THREE.BoxGeometry(CELL * 0.8, 0.22, depth), materials.riser);
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
    glow.position.set((x + 0.5) * CELL, Math.max(fy, waterOn ? theme.water || 0 : -99) + 0.03, (y + 0.5) * CELL);
    level.root.add(glow);
  }

  // ---------- the flood ----------
  // A sheet of black water at the theme's waterline over every cell whose floor is below it. It mirrors
  // the crypt (a Reflector renders the scene upside down each frame, at half size), ripples with slow
  // swells, small chop and rings where things step or water drips, catches the torch in hard bone-white
  // glints, and lets the floor show through where it is shallow.
  let waterOn = true;
  let water = null; // { mesh, y }
  const RIPPLES = 12;
  const ripples = Array.from({ length: RIPPLES }, () => new THREE.Vector4(0, 0, -100, 0));
  let rippleIx = 0;
  const t0 = performance.now();
  const clock = () => (performance.now() - t0) / 1000;
  function addRipple(x, z, amp = 1) {
    if (!water) return;
    ripples[rippleIx++ % RIPPLES].set(x, z, clock(), amp);
  }
  const waterDepth = (cx, cy) => (water ? Math.max(0, water.y - floorH(cx, cy)) : 0);

  const WaterShader = {
    name: 'FloodShader',
    uniforms: {
      color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null },
      time: { value: 0 }, lightPos: { value: new THREE.Vector3() }, lightPower: { value: 1 },
      fogColor: { value: new THREE.Color() }, fogNear: { value: 2 }, fogFar: { value: 16 },
      tint: { value: new THREE.Color() }, ripples: { value: [] },
    },
    vertexShader: /* glsl */`
      uniform mat4 textureMatrix;
      attribute float depth;
      varying vec4 vUv;
      varying vec3 vWorld;
      varying float vDepth;
      #include <common>
      #include <logdepthbuf_pars_vertex>
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vec4 w = modelMatrix * vec4(position, 1.0);
        vWorld = w.xyz;
        vDepth = depth;
        gl_Position = projectionMatrix * viewMatrix * w;
        #include <logdepthbuf_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform float time;
      uniform vec3 lightPos;
      uniform float lightPower;
      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;
      uniform vec3 tint;
      uniform vec4 ripples[${RIPPLES}];
      varying vec4 vUv;
      varying vec3 vWorld;
      varying float vDepth;
      #include <logdepthbuf_pars_fragment>
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      void main() {
        #include <logdepthbuf_fragment>
        vec2 p = vWorld.xz;
        // the slope of the surface: three slow swells and a little chop
        vec2 g = vec2(0.0);
        g += vec2(0.8, 0.6) * cos(dot(p, vec2(0.8, 0.6)) * 2.1 + time * 0.9) * 0.022;
        g += vec2(-0.5, 0.85) * cos(dot(p, vec2(-0.5, 0.85)) * 3.3 - time * 1.3) * 0.016;
        g += vec2(0.95, -0.3) * cos(dot(p, vec2(0.95, -0.3)) * 5.7 + time * 1.7) * 0.01;
        float e = 0.06;
        vec2 q = p * 3.2 + vec2(time * 0.21, time * 0.17);
        float n0 = noise(q);
        g += vec2(noise(q + vec2(e, 0.0)) - n0, noise(q + vec2(0.0, e)) - n0) / e * 0.014;
        // rings where something stepped or dripped
        float ring = 0.0;
        for (int i = 0; i < ${RIPPLES}; i++) {
          vec4 r = ripples[i];
          float age = time - r.z;
          if (age < 0.0 || age > 3.5) continue;
          vec2 d = p - r.xy;
          float dist = length(d) + 1e-4;
          float k = dist - age * 0.85;
          float env = exp(-age * 1.4) * r.w * exp(-k * k * 14.0);
          g += (d / dist) * cos(k * 26.0) * env * 0.45;
          ring += env * max(0.0, sin(k * 26.0));
        }
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(V, N), 0.0), 4.0);
        // the mirrored crypt, bent by the ripples
        vec4 uv = vUv;
        uv.xy += N.xz * 0.35 * uv.w;
        vec3 refl = texture2DProj(tDiffuse, uv).rgb;
        vec3 col = mix(tint, refl, 0.7 + 0.3 * fres);
        // the torch: hard glints, and a faint warm sheen nearby
        vec3 L = lightPos - vWorld;
        float ld = length(L);
        L /= ld;
        vec3 H = normalize(L + V);
        float spec = pow(max(dot(N, H), 0.0), 140.0) * lightPower / (1.0 + ld * ld * 0.06);
        col += vec3(0.95, 0.9, 0.78) * smoothstep(0.1, 0.32, spec);
        col += vec3(1.0, 0.85, 0.6) * 0.06 * lightPower / (1.0 + ld * ld * 0.12);
        col += vec3(0.92, 0.89, 0.82) * ring * 0.4;
        // shallow water shows a ghost of the floor; deep water is ink
        float alpha = clamp(0.74 + vDepth * 0.5, 0.74, 0.97);
        float f = smoothstep(fogNear, fogFar, distance(cameraPosition, vWorld));
        col = mix(col, fogColor, f);
        alpha = mix(alpha, 1.0, f);
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  };

  function buildWater() {
    if (water) { water.mesh.dispose(); level.root.remove(water.mesh); water = null; }
    waterline.value = -99;
    const y = theme.water || 0;
    if (!waterOn || y <= -10) return;
    const { W, H, grid, h } = level;
    const wet = (cx, cy) => grid[cy] && grid[cy][cx] && grid[cy][cx] !== '#' && h[cy][cx] < y;
    // depth at each grid corner: the deepest wet cell touching it, so the ink deepens smoothly
    const cornerDepth = (x, z) => {
      let dep = 0;
      for (const [cx, cy] of [[x - 1, z - 1], [x, z - 1], [x - 1, z], [x, z]]) if (wet(cx, cy)) dep = Math.max(dep, y - h[cy][cx]);
      return dep;
    };
    const pos = [], dep = [], idx = [];
    const corner = new Map();
    const vert = (x, z) => {
      const key = x + ',' + z;
      if (!corner.has(key)) {
        corner.set(key, pos.length / 3);
        pos.push(x * CELL, -z * CELL, 0); // the plane's local XY; the mesh is laid flat below
        dep.push(cornerDepth(x, z));
      }
      return corner.get(key);
    };
    for (let cy = 0; cy < H; cy++) {
      for (let cx = 0; cx < W; cx++) {
        if (!wet(cx, cy)) continue;
        const a = vert(cx, cy), b = vert(cx + 1, cy), c = vert(cx + 1, cy + 1), d = vert(cx, cy + 1);
        idx.push(a, d, b, b, d, c);
      }
    }
    if (!idx.length) return;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('depth', new THREE.Float32BufferAttribute(dep, 1));
    geo.setIndex(idx);
    const size = new THREE.Vector2();
    renderer.getDrawingBufferSize(size);
    const mesh = new Reflector(geo, {
      shader: WaterShader, clipBias: 0.003, multisample: 0,
      textureWidth: Math.max(256, Math.round(size.x * 0.5)), textureHeight: Math.max(256, Math.round(size.y * 0.5)),
    });
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = y;
    waterline.value = y;
    mesh.material.transparent = true;
    mesh.material.depthWrite = false;
    const u = mesh.material.uniforms;
    u.ripples.value = ripples;
    u.tint.value.setHex(theme.waterTint || 0x0b0906);
    level.root.add(mesh);
    water = { mesh, y };
  }

  let dripIn = 1;
  const torchWorld = new THREE.Vector3();
  function updateWater(dt) {
    if (!water) return;
    const u = water.mesh.material.uniforms;
    u.time.value = clock();
    torch.getWorldPosition(torchWorld);
    u.lightPos.value.copy(torchWorld);
    u.lightPower.value = torch.intensity / 13;
    u.fogColor.value.copy(scene.fog.color);
    u.fogNear.value = scene.fog.near;
    u.fogFar.value = scene.fog.far;
    // water drips from the ceiling somewhere near you
    dripIn -= dt;
    if (dripIn <= 0) {
      dripIn = 0.7 + Math.random() * 2.2;
      for (let k = 0; k < 6; k++) {
        const x = player.x + (Math.random() - 0.5) * 9, z = player.z + (Math.random() - 0.5) * 9;
        if (waterDepth(cellOf(x), cellOf(z)) > 0 && !solid(cellOf(x), cellOf(z))) {
          addRipple(x, z, 0.55);
          const dx = x - player.x, dz = z - player.z;
          const dist = Math.hypot(dx, dz) || 1;
          hooks.onDrip && hooks.onDrip((dx * -Math.sin(player.a) + dz * Math.cos(player.a)) / dist, dist / CELL);
          break;
        }
      }
    }
  }

  // ---------- sprites ----------
  // segs > 1 makes a grid the shamble can bend (see shamble()).
  function billboard(map, width, height, segs = 1) {
    const geo = new THREE.PlaneGeometry(width, height, segs, segs > 1 ? 6 : 1);
    geo.translate(0, height / 2, 0);
    if (segs > 1) geo.userData.base = geo.attributes.position.array.slice();
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
    if (t === 'K') return [texture('remains', false), 0.9, 0.68]; // the hidden niche's bundle
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
      const mesh = billboard(tex, hh * aspect, hh, 4);
      mesh.userData.slot = i;
      mesh.userData.kind = kind;
      mesh.userData.size = [hh * aspect, hh];
      g.add(mesh);
    });
    g.position.set(group.x, 0, group.z);
    level.root.add(g);
    level.groups.push({ group, mesh: g, wander: null, path: null, think: 0, step: Math.random() * 6, idle: Math.random() * 2, frame: -1, voice: 2 + Math.random() * 3 });
  }

  // ---------- movement ----------
  const keys = new Set();
  const stick = { x: 0, y: 0 }; // virtual joystick: x strafe, y forward
  const look = { dx: 0, dy: 0, dxLast: 0 };
  let turnRate = 0; // radians a second, for the hands' sway

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

  // ---------- old-school steps ----------
  // In 'grid' mode a press moves one whole square (forward, back, sideways) or turns a quarter, gliding
  // there, as in Dungeon Master or The Quest. Held keys keep stepping; the D-pad queues taps.
  let mode = 'free';
  const step = { active: false };
  const queued = [];
  const STEP_TIME = 0.3, TURN_TIME = 0.22;
  const ease = (t) => t * t * (3 - 2 * t);
  function snapToGrid() {
    player.x = (cellOf(player.x) + 0.5) * CELL;
    player.z = (cellOf(player.z) + 0.5) * CELL;
    player.a = Math.round(player.a / (Math.PI / 2)) * (Math.PI / 2);
    player.pitch = 0;
    step.active = false;
    queued.length = 0;
  }
  function heldIntent() {
    if (keys.has('w') || keys.has('arrowup')) return 'f';
    if (keys.has('s') || keys.has('arrowdown')) return 'b';
    if (keys.has('a')) return 'l';
    if (keys.has('d')) return 'r';
    if (keys.has('q') || keys.has('arrowleft')) return 'tl';
    if (keys.has('e') || keys.has('arrowright')) return 'tr';
    return null;
  }
  function moveGrid(dt) {
    if (step.active) {
      step.t = Math.min(1, step.t + dt / step.dur);
      const e = ease(step.t);
      player.x = step.x0 + (step.x1 - step.x0) * e;
      player.z = step.z0 + (step.z1 - step.z0) * e;
      player.a = step.a0 + (step.a1 - step.a0) * e;
      if (step.walk) {
        const before = Math.floor(player.phase / Math.PI);
        player.phase = step.phase0 + Math.PI * e;
        if (Math.floor(player.phase / Math.PI) !== before) stepped();
      }
      player.moving = step.walk ? 1 : 0;
      turnRate = step.walk ? 0 : (step.a1 - step.a0) / step.dur;
      if (step.t >= 1) step.active = false;
      return;
    }
    player.moving = 0;
    turnRate = 0;
    const intent = queued.shift() || heldIntent();
    if (!intent) return;
    const begin = (x1, z1, a1, walk) => Object.assign(step, {
      active: true, t: 0, dur: walk ? STEP_TIME * (waterDepth(cellOf(player.x), cellOf(player.z)) > 0.15 ? 1.2 : 1) : TURN_TIME, walk,
      x0: player.x, z0: player.z, a0: player.a, x1, z1, a1, phase0: Math.round(player.phase / Math.PI) * Math.PI + 0.01,
    });
    if (intent === 'tl' || intent === 'tr') {
      begin(player.x, player.z, player.a + (intent === 'tl' ? -1 : 1) * Math.PI / 2, false);
      return;
    }
    const fx = Math.round(Math.cos(player.a)), fz = Math.round(Math.sin(player.a));
    const [dx, dz] = { f: [fx, fz], b: [-fx, -fz], r: [-fz, fx], l: [fz, -fx] }[intent];
    const cx = cellOf(player.x), cz = cellOf(player.z);
    const tx = cx + dx, tz = cz + dz;
    if (solid(tx, tz)) {
      if (doorAt(tx, tz)) touch({ cx: tx, cy: tz, door: true });
      else hooks.onBump && hooks.onBump();
      return;
    }
    if (floorH(tx, tz) - floorH(cx, cz) > CLIMB) { hooks.onBump && hooks.onBump(); return; }
    begin((tx + 0.5) * CELL, (tz + 0.5) * CELL, player.a, true);
  }

  // The on-screen arrows for step mode (and for anyone who prefers buttons).
  const pad = document.createElement('div');
  pad.className = 'step-pad';
  pad.hidden = true;
  pad.innerHTML = [['tl', '↶', 'Turn left'], ['f', '▲', 'Step forward'], ['tr', '↷', 'Turn right'], ['l', '◀', 'Step left'], ['b', '▼', 'Step back'], ['r', '▶', 'Step right']]
    .map(([k, g, t]) => `<button type="button" data-k="${k}" aria-label="${t}">${g}</button>`).join('');
  container.appendChild(pad);
  const padHeld = new Map();
  pad.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('button');
    if (!b || paused) return;
    e.preventDefault();
    if (queued.length < 2) queued.push(b.dataset.k);
    // holding a button keeps stepping, like holding a key
    padHeld.set(e.pointerId, setInterval(() => { if (!paused && !step.active && !queued.length) queued.push(b.dataset.k); }, 60));
  });
  const padUp = (e) => { clearInterval(padHeld.get(e.pointerId)); padHeld.delete(e.pointerId); };
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) => pad.addEventListener(ev, padUp));

  function movePlayer(dt) {
    if (mode === 'grid') return moveGrid(dt);
    let fwd = stick.y, side = stick.x;
    if (keys.has('w') || keys.has('arrowup')) fwd += 1;
    if (keys.has('s') || keys.has('arrowdown')) fwd -= 1;
    if (keys.has('d')) side += 1;
    if (keys.has('a')) side -= 1;
    let turn = 0;
    if (keys.has('arrowleft') || keys.has('q')) turn -= 1;
    if (keys.has('arrowright') || keys.has('e')) turn += 1;
    player.a += turn * TURN * dt + look.dx;
    look.dxLast = dt > 0 ? look.dx / dt : 0;
    turnRate = turn * TURN + look.dxLast;
    player.pitch = Math.max(-0.55, Math.min(0.55, player.pitch - look.dy));
    look.dx = 0; look.dy = 0;
    const len = Math.hypot(fwd, side);
    if (len > 1) { fwd /= len; side /= len; }
    const fx = Math.cos(player.a), fz = Math.sin(player.a);
    const rx = -fz, rz = fx;
    const wade = waterDepth(cellOf(player.x), cellOf(player.z)) > 0.15 ? 0.82 : 1;
    const vx = (fx * fwd + rx * side) * SPEED * wade * dt, vz = (fz * fwd + rz * side) * SPEED * wade * dt;
    player.moving = Math.min(1, Math.hypot(fwd, side));
    if (vx === 0 && vz === 0) return;
    const here = floorH(cellOf(player.x), cellOf(player.z));
    // slide along walls: try each axis on its own
    const bx = blockedAt(player.x + vx, player.z, here);
    if (!bx) player.x += vx; else touch(bx);
    const bz = blockedAt(player.x, player.z + vz, here);
    if (!bz) player.z += vz; else touch(bz);
    const before = Math.floor(player.phase / Math.PI);
    player.phase += Math.hypot(vx, vz) * 3.2;
    if (Math.floor(player.phase / Math.PI) !== before) stepped();
  }

  // A footfall: a ring in the water if you're wading, and the sound of it.
  function stepped() {
    const dep = waterDepth(cellOf(player.x), cellOf(player.z));
    if (dep > 0) addRipple(player.x + Math.cos(player.a) * 0.5, player.z + Math.sin(player.a) * 0.5, 0.9);
    hooks.onStep && hooks.onStep(dep);
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
    entry.wake = (entry.wake || 0) - step;
    if (entry.wake <= 0 && waterDepth(cx, cz) > 0) { entry.wake = 0.8; addRipple(nx, nz, 0.8); }
    return dist - step < 0.05;
  }

  // -1 (on your left) to 1 (on your right)
  function panOf(g) {
    const dx = g.x - player.x, dz = g.z - player.z;
    const d = Math.hypot(dx, dz) || 1;
    return Math.max(-1, Math.min(1, (dx * -Math.sin(player.a) + dz * Math.cos(player.a)) / d));
  }

  function updateMonsters(dt, now) {
    for (const entry of level.groups) {
      const g = entry.group;
      if (!g.alive) continue;
      const def = g.def;
      const dist = Math.hypot(player.x - g.x, player.z - g.z);
      if (g.stunUntil && now < g.stunUntil) continue;
      const sees = dist < def.sight * CELL && lineOfSight(g.x, g.z, player.x, player.z);
      if (sees && !g.alert) hooks.onAlert && hooks.onAlert(def.kind, dist / CELL, panOf(g));
      if (sees) g.alert = true;
      // the hunters make themselves heard now and then
      entry.voice -= dt;
      if (g.alert && entry.voice <= 0 && dist < 7 * CELL) {
        entry.voice = 2.5 + Math.random() * 3.5;
        hooks.onVoice && hooks.onVoice(def.kind, dist / CELL, panOf(g));
      }
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
          if (!solid(nx, ny) && !'G<>RLSFfK'.includes(tile(nx, ny)) && Math.abs(floorH(nx, ny) - floorH(cx, cy)) <= CLIMB) {
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
    const under = !!water && camera.position.y < water.y;
    if (under !== wasUnder) {
      wasUnder = under;
      container.classList.toggle('underwater', under);
      if (under) { addRipple(player.x, player.z, 2); scene.fog.near = 0.1; scene.fog.far = 3.5; } else { scene.fog.near = 2; scene.fog.far = 16; }
    }
    const f = flicker(now);
    torch.intensity = 12.2 + f * 2.4;
    torch.position.x = 0.2 + (f - 0.5) * 0.08;
    drawHands(now, f);
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
        m.position.set(right.x * off - Math.cos(player.a) * back, 0, right.z * off - Math.sin(player.a) * back);
      });
      shamble(entry, now);
    }
    level.root.traverse((o) => {
      if (!o.userData.billboard) return;
      const wp = o.getWorldPosition(new THREE.Vector3());
      o.rotation.y = Math.atan2(camera.position.x - wp.x, camera.position.z - wp.z);
    });
  }

  let wasUnder = false;

  // ---------- the torch's flicker ----------
  // A smoothed random walk under two slow waves: 0 (guttering) to 1 (flaring).
  let flick = 0.5, flickTarget = 0.5, flickNext = 0;
  function flicker(now) {
    if (now > flickNext) {
      flickTarget = 0.25 + Math.random() * 0.75;
      flickNext = now + 50 + Math.random() * 110;
    }
    flick += (flickTarget - flick) * 0.35;
    const v = flick * 0.6 + (0.5 + 0.5 * Math.sin(now * 0.0063)) * 0.25 + (0.5 + 0.5 * Math.sin(now * 0.0171)) * 0.15;
    return Math.max(0, Math.min(1, v));
  }

  // ---------- shambling ----------
  // Each monster has two poses, A and B, and steps between them like a Doom sprite: on the beat of its
  // walk while it moves, slowly while it stands. A pose bends the billboard's grid: (u, v) run 0..1 across
  // and up the picture, and a pose returns the shift as fractions of the picture's width and height.
  const POSES = {
    // lurching: leans into each step, dragging one foot then the other
    zombie: (u, v, s) => [s * 0.06 * v * v, v < 0.3 && (u - 0.5) * s > 0 ? 0.045 * (1 - v / 0.3) : -0.012 * v],
    // rattling: small, quick, the skull ticking from side to side
    skeleton: (u, v, s) => [s * 0.025 * v + (v > 0.78 ? s * 0.025 : 0), v < 0.28 && (u - 0.5) * s > 0 ? 0.035 * (1 - v / 0.28) : 0],
    // the robe's hem swings; the body barely moves
    cultist: (u, v, s) => [v < 0.42 ? s * 0.045 * (1 - v / 0.42) : -s * 0.012 * v, s > 0 ? -0.01 * v : 0],
    // a scurry: stretched low, then bunched up
    rats: (u, v, s) => [(u - 0.5) * (s > 0 ? 0.12 : -0.08), (s > 0 ? -0.1 : 0.08) * v],
  };
  const CADENCE = { zombie: 1.6, skeleton: 1.0, cultist: 1.3, rats: 0.55 }; // walk units per frame
  function shamble(entry, now) {
    const moving = entry.lastStep !== entry.step;
    entry.lastStep = entry.step;
    if (!moving) entry.idle += 1 / 60;
    for (const m of entry.mesh.children) {
      const geo = m.geometry, base = geo.userData.base;
      if (!base) continue;
      const kind = m.userData.kind;
      const [w, h] = m.userData.size;
      const pos = geo.attributes.position.array;
      if (kind === 'abbess') {
        // she does not walk: she drifts, and the hem of her veil ripples
        const t = now / 1000 + m.userData.slot;
        for (let i = 0; i < pos.length; i += 3) {
          const u = base[i] / w + 0.5, v = base[i + 1] / h;
          pos[i] = base[i] + (v < 0.35 ? Math.sin(t * 2.6 + u * 7) * 0.035 * (1 - v / 0.35) * w : 0);
          pos[i + 1] = base[i + 1] + (0.06 + Math.sin(t * 1.4) * 0.05) * h * 0.4;
        }
        geo.attributes.position.needsUpdate = true;
        continue;
      }
      const pose = POSES[kind];
      if (!pose) continue;
      // which frame: by distance walked while moving, by the clock while standing
      const beat = moving ? entry.step / (CADENCE[kind] || 1.2) : entry.idle / 0.75;
      const frame = (Math.floor(beat) + m.userData.slot) % 2;
      const amp = moving ? 1 : 0.35;
      const key = frame * 2 + (moving ? 1 : 0);
      if (m.userData.frameKey === key) continue;
      m.userData.frameKey = key;
      const s = (frame ? 1 : -1) * amp;
      for (let i = 0; i < pos.length; i += 3) {
        const u = base[i] / w + 0.5, v = base[i + 1] / h;
        const [dx, dy] = pose(u, v, s);
        pos[i] = base[i] + dx * w;
        pos[i + 1] = base[i + 1] + dy * h;
      }
      geo.attributes.position.needsUpdate = true;
    }
  }

  // ---------- the hands ----------
  // DOM over the canvas, under the HUD: the torch in the left hand, the front wretch's weapon in the right.
  const hands = document.createElement('div');
  hands.className = 'hands';
  hands.innerHTML = '<div class="hand hand-left"><span class="torch-glow"></span><img alt="" draggable="false"><canvas class="flame" width="96" height="160"></canvas></div>'
    + '<div class="hand hand-right"><img alt="" draggable="false"></div>';
  renderer.domElement.after(hands);
  const leftHand = hands.querySelector('.hand-left'), rightHand = hands.querySelector('.hand-right');
  const torchImg = leftHand.querySelector('img'), weaponImg = rightHand.querySelector('img');
  const flameCanvas = leftHand.querySelector('.flame'), flameCtx = flameCanvas.getContext('2d');
  const glow = leftHand.querySelector('.torch-glow');
  // where the torch's tip is in its picture, found from the picture's alpha once it loads
  let tip = { x: 0.5, y: 0.08 };
  torchImg.addEventListener('load', () => {
    try {
      const c = document.createElement('canvas');
      c.width = 96; c.height = 128;
      const g = c.getContext('2d');
      g.drawImage(torchImg, 0, 0, c.width, c.height);
      const a = g.getImageData(0, 0, c.width, c.height).data;
      for (let y = 0; y < c.height; y++) {
        let sum = 0, n = 0;
        for (let x = 0; x < c.width; x++) if (a[(y * c.width + x) * 4 + 3] > 140) { sum += x; n++; }
        // a little below the very top, so the live flame covers any flame painted on the picture
        if (n >= 3) { tip = { x: sum / n / c.width, y: Math.min(0.5, (y + 3) / c.height + 0.07) }; break; }
      }
    } catch (e) { /* a tainted canvas keeps the default */ }
    flameCanvas.style.left = (tip.x * 100) + '%';
    flameCanvas.style.top = (tip.y * 100) + '%';
    glow.style.left = (tip.x * 100) + '%';
    glow.style.top = (tip.y * 100) + '%';
  });
  torchImg.onerror = () => { leftHand.classList.add('no-art'); };
  weaponImg.onerror = () => { rightHand.classList.add('no-art'); };
  torchImg.src = Q.assetUrl('held-torch');
  let sway = 0;
  const embers = [];
  function drawHands(now, f) {
    if (paused && !hands.classList.contains('shown')) return;
    // the walk swings the hands in a figure of eight; turning drags them behind
    const m = player.moving;
    sway += (Math.max(-3, Math.min(3, turnRate)) - sway) * 0.12;
    const bx = Math.sin(player.phase * 0.5) * 14 * m, by = Math.abs(Math.cos(player.phase * 0.5)) * 12 * m;
    leftHand.style.transform = `translate(${(bx - sway * 10).toFixed(1)}px, ${(by + 4).toFixed(1)}px) rotate(${(-4 + sway * 1.2).toFixed(2)}deg)`;
    rightHand.style.transform = `translate(${(bx * 0.9 - sway * 14).toFixed(1)}px, ${(12 - by * 0.9).toFixed(1)}px) rotate(${(5 + sway * 1.5).toFixed(2)}deg)`;
    glow.style.opacity = (0.45 + f * 0.45).toFixed(2);
    drawFlame(now, f);
  }
  // The flame: a few licking tongues in the zine's colours (acid yellow inked in black, bone-white hearts),
  // with pink embers rising. Each tongue's sides wave, and its tip whips with the flicker and your turning.
  const TONGUES = [
    { x: 0, w: 0.34, h: 1, speed: 1, phase: 0 },
    { x: -0.17, w: 0.2, h: 0.6, speed: 1.3, phase: 2.1 },
    { x: 0.16, w: 0.19, h: 0.66, speed: 1.15, phase: 4.2 },
  ];
  function drawFlame(now, f) {
    const g = flameCtx, W = flameCanvas.width, H = flameCanvas.height;
    g.clearRect(0, 0, W, H);
    const t = now / 1000;
    const base = H - 8;
    const path = (tg, scale) => {
      const h = H * 0.86 * tg.h * scale * (0.72 + f * 0.36);
      const w = W * tg.w * scale;
      const cx = W / 2 + tg.x * W;
      const whip = Math.sin(t * 6.1 * tg.speed + tg.phase) * 7 + Math.sin(t * 11.3 * tg.speed + tg.phase) * 3 - sway * 6;
      const n = 12;
      const side = (dir) => {
        const pts = [];
        for (let i = 0; i <= n; i++) {
          const k = i / n;
          // wide at the root, bellying out a little, then drawn to a point
          const width = w * Math.sin(Math.PI * (0.5 + k * 0.5)) * (1 + 0.25 * Math.sin(k * Math.PI));
          const wave = Math.sin(k * 7 - t * 9 * tg.speed + tg.phase + dir) * 3.5 * k;
          pts.push([cx + dir * width + whip * k * k + wave, base - h * k]);
        }
        return pts;
      };
      const left = side(-1), right = side(1).reverse();
      g.beginPath();
      g.moveTo(left[0][0], left[0][1]);
      for (const [x, y] of left) g.lineTo(x, y);
      for (const [x, y] of right) g.lineTo(x, y);
      g.closePath();
    };
    g.lineJoin = 'round';
    for (const tg of TONGUES) { path(tg, 1); g.fillStyle = '#ffe11a'; g.fill(); g.lineWidth = 3; g.strokeStyle = '#0a0a08'; g.stroke(); }
    for (const tg of TONGUES) { path(tg, 0.55); g.fillStyle = '#ebe4d0'; g.fill(); }
    path(TONGUES[0], 0.28); g.fillStyle = '#fffaf0'; g.fill();
    if (Math.random() < 0.3) embers.push({ x: W / 2 + (Math.random() - 0.5) * 24, y: H * 0.45, vy: 35 + Math.random() * 45, life: 1 });
    for (let i = embers.length - 1; i >= 0; i--) {
      const e = embers[i];
      e.y -= e.vy / 60; e.x += Math.sin(t * 9 + i) * 0.9 - sway * 0.6; e.life -= 0.028;
      if (e.life <= 0 || e.y < 0) { embers.splice(i, 1); continue; }
      g.fillStyle = `rgba(255,61,139,${e.life.toFixed(2)})`;
      g.fillRect(e.x, e.y, 3, 3);
    }
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
    updateWater(dt);
    renderer.render(scene, camera);
  }

  let lastW = 0, lastH = 0;
  function resize() {
    const w = container.clientWidth, hh = container.clientHeight;
    if (w === lastW && hh === lastH) return;
    lastW = w; lastH = hh;
    renderer.setSize(w, hh, false);
    if (water) {
      const size = new THREE.Vector2();
      renderer.getDrawingBufferSize(size);
      water.mesh.getRenderTarget().setSize(Math.max(256, Math.round(size.x * 0.5)), Math.max(256, Math.round(size.y * 0.5)));
    }
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
      if (mode === 'grid' && !e.repeat && !keys.has(k) && queued.length < 2) {
        queued.push({ w: 'f', arrowup: 'f', s: 'b', arrowdown: 'b', a: 'l', d: 'r', q: 'tl', arrowleft: 'tl', e: 'tr', arrowright: 'tr' }[k]);
      }
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
    if (paused || mode === 'grid') return;
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
      if (mode === 'grid') snapToGrid();
    },
    // 'free' (Doom: walk anywhere, look around) or 'grid' (old school: a square at a time, quarter turns).
    setMode(m) {
      mode = m === 'grid' ? 'grid' : 'free';
      pad.hidden = mode !== 'grid';
      container.classList.toggle('step-mode', mode === 'grid');
      if (mode === 'grid' && level) snapToGrid();
    },
    get mode() { return mode; },
    // The flood (a test): on or off; the waterline comes from the floor's theme.
    setWater(on) { waterOn = !!on; },
    get water() { return waterOn; },
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
    pause() {
      paused = true; keys.clear(); stick.x = 0; stick.y = 0; knob.hidden = true; pointers.clear(); player.moving = 0; turnRate = 0;
      queued.length = 0;
      for (const id of padHeld.values()) clearInterval(id);
      padHeld.clear();
      if (step.active) { player.x = step.x1; player.z = step.z1; player.a = step.a1; step.active = false; }
    },
    resume() { paused = false; lastTime = performance.now(); },
    get paused() { return paused; },
    refreshTile(cx, cy) { placeItem(cx, cy); },
    openDoor(cx, cy) { const d = doorAt(cx, cy); if (d) d.opening = true; },
    // After a fall: climb back out to the last firm ground.
    haulBack() {
      player.x = player.safe.x; player.z = player.safe.z; player.y = floorH(cellOf(player.x), cellOf(player.z)) + EYE; player.vy = 0; falling = false;
      if (mode === 'grid') snapToGrid();
    },
    // After fleeing: back off from the monster a pace.
    stepBack(g) {
      const dx = player.x - g.x, dz = player.z - g.z;
      const d = Math.hypot(dx, dz) || 1;
      for (let k = 2.2; k > 0.4; k -= 0.3) {
        const nx = player.x + (dx / d) * k, nz = player.z + (dz / d) * k;
        if (!blockedAt(nx, nz, floorH(cellOf(player.x), cellOf(player.z)) + CLIMB)) { player.x = nx; player.z = nz; break; }
      }
      if (mode === 'grid') snapToGrid();
    },
    monsterPos: (g) => ({ x: g.x / CELL - 0.5, y: g.z / CELL - 0.5 }),
    // The weapon drawn in the right hand, by its name in the rules ('Zweihänder' -> held-zweihander).
    setWeapon(name) {
      const slug = String(name || '').normalize('NFD').replace(/[^A-Za-z]/g, '').toLowerCase();
      rightHand.classList.toggle('no-art', !slug);
      if (slug && weaponImg.dataset.slug !== slug) {
        weaponImg.dataset.slug = slug;
        rightHand.classList.remove('no-art');
        weaponImg.src = Q.assetUrl('held-' + slug);
      }
    },
    showHands(on) { hands.classList.toggle('shown', !!on); },
    cellSize: CELL,
    render() { placeCamera(performance.now()); renderer.render(scene, camera); },
  };
}

Q.createWorld = createWorld;
