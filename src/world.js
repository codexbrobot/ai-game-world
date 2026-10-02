// Builds the Vorn graveyard from the layout in map.js.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTextures } from './textures.js';
import { MAP } from './map.js';

const UP = new THREE.Vector3(0, 1, 0);
const CELL = 4; // collision grid cell size, metres

export function buildGraveyard(renderer, scene, rand, coarse) {
  const tex = makeTextures(rand, renderer.capabilities.getMaxAnisotropy());
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pv = new THREE.Vector3(), sv = new THREE.Vector3();

  // ---------- collision ----------
  const grid = new Map();
  const segments = [];
  const cellKey = (cx, cz) => cx * 10007 + cz;
  function addCircle(x, z, r) {
    const c = { x, z, r };
    for (let cx = Math.floor((x - r) / CELL); cx <= Math.floor((x + r) / CELL); cx++) {
      for (let cz = Math.floor((z - r) / CELL); cz <= Math.floor((z + r) / CELL); cz++) {
        const k = cellKey(cx, cz);
        if (!grid.has(k)) grid.set(k, []);
        grid.get(k).push(c);
      }
    }
  }
  function circlesNear(x, z) {
    const out = [];
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) {
      const list = grid.get(cellKey(cx + i, cz + j));
      if (list) for (const c of list) if (!out.includes(c)) out.push(c);
    }
    return out;
  }
  const addSegment = (ax, az, bx, bz, r) => segments.push({ ax, az, bx, bz, r });
  function segDist(s, x, z) {
    const vx = s.bx - s.ax, vz = s.bz - s.az, len = vx * vx + vz * vz || 1;
    const t = Math.max(0, Math.min(1, ((x - s.ax) * vx + (z - s.az) * vz) / len));
    return Math.hypot(x - (s.ax + vx * t), z - (s.az + vz * t));
  }
  // Is a spot free of walls, buildings and other obstacles?
  function clear(x, z, pad) {
    for (const c of circlesNear(x, z)) if (Math.hypot(x - c.x, z - c.z) < c.r + pad) return false;
    for (const s of segments) if (segDist(s, x, z) < s.r + pad) return false;
    return true;
  }
  // Rectangle outline (for buildings) as collision segments.
  function addRect(x, z, hw, hd, rot) {
    const c = Math.cos(rot), s = Math.sin(rot);
    const pt = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
    const corners = [pt(-hw, -hd), pt(hw, -hd), pt(hw, hd), pt(-hw, hd)];
    for (let i = 0; i < 4; i++) {
      const [a, b] = [corners[i], corners[(i + 1) % 4]];
      addSegment(a[0], a[1], b[0], b[1], 0.15);
    }
  }

  // ---------- paths ----------
  const pathSamples = []; // {x, z, half}
  const pathLines = [];
  for (const p of MAP.paths) {
    const curve = new THREE.CatmullRomCurve3(p.pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
    const pts = curve.getSpacedPoints(Math.max(4, Math.ceil(curve.getLength())));
    pathLines.push(pts.map((v) => [v.x, v.z]));
    for (const v of pts) pathSamples.push({ x: v.x, z: v.z, half: p.width / 2 });
  }
  function nearPath(x, z, pad) {
    for (const s of pathSamples) if (Math.hypot(x - s.x, z - s.z) < s.half + pad) return true;
    return false;
  }

  // ---------- sky, fog, light ----------
  const fog = new THREE.Color(0x17180f);
  scene.background = fog;
  scene.fog = new THREE.FogExp2(fog, 0.026);
  {
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x1c1d16, side: THREE.BackSide })));
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xd8d49a).multiplyScalar(1.4) }));
    sky.position.set(0, 4.9, 0);
    sky.rotation.x = Math.PI / 2;
    env.add(sky);
    const warm = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.5), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffa040).multiplyScalar(2.5) }));
    warm.position.set(0, -2, 4.9);
    warm.rotation.y = Math.PI;
    env.add(warm);
    scene.environment = pmrem.fromScene(env, 0.04).texture;
    scene.environmentIntensity = 0.45;
    pmrem.dispose();
  }
  scene.add(new THREE.HemisphereLight(0x6d7160, 0x1c1810, 0.75));
  // The moon's shadow box follows the player, so shadows stay sharp on a big map.
  const moon = new THREE.DirectionalLight(0xe4dfae, 1.45);
  const MOON_OFFSET = new THREE.Vector3(12, 26, -16);
  moon.castShadow = true;
  const shadowSize = coarse ? 1024 : 2048;
  moon.shadow.mapSize.set(shadowSize, shadowSize);
  Object.assign(moon.shadow.camera, { left: -28, right: 28, top: 28, bottom: -28, near: 1, far: 90 });
  moon.shadow.bias = -0.0004;
  moon.shadow.normalBias = 0.04;
  scene.add(moon, moon.target);

  // ---------- materials ----------
  const stoneMat = new THREE.MeshStandardMaterial({ map: tex.stone, bumpMap: tex.stoneBump, bumpScale: 1.5, roughness: 0.92 });
  const darkStone = new THREE.MeshStandardMaterial({ map: tex.stone, bumpMap: tex.stoneBump, bumpScale: 1.5, roughness: 0.95, color: 0x8a867c });
  const iron = new THREE.MeshStandardMaterial({ color: 0x24221f, metalness: 0.6, roughness: 0.6 });
  const dirtMat = new THREE.MeshStandardMaterial({ map: tex.dirt, roughness: 1 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x3b2d20, roughness: 0.95 });
  const oldWood = new THREE.MeshStandardMaterial({ color: 0x4a3c2c, roughness: 1 });
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x2c261f, roughness: 1, flatShading: true });
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xd4cbb0, roughness: 0.7 });
  const pitMat = new THREE.MeshBasicMaterial({ color: 0x050403 });
  const bronze = new THREE.MeshStandardMaterial({ color: 0x3f5a48, metalness: 0.7, roughness: 0.5 });
  const wax = new THREE.MeshStandardMaterial({ color: 0xd9ceb0, roughness: 0.8 });
  const flameMat = new THREE.SpriteMaterial({ map: tex.flame, color: 0xffb050, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });

  function add(geo, mat, x = 0, y = 0, z = 0, parent = scene) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }
  function instanced(geo, mat, matrices, { shadow = true, colors = null } = {}) {
    if (!matrices.length) return null;
    const inst = new THREE.InstancedMesh(geo, mat, matrices.length);
    matrices.forEach((mm, i) => inst.setMatrixAt(i, mm));
    if (colors) colors.forEach((c, i) => inst.setColorAt(i, c));
    inst.castShadow = shadow;
    inst.receiveShadow = true;
    inst.computeBoundingSphere();
    scene.add(inst);
    return inst;
  }

  const lightSources = []; // {x, y, z, color, intensity, range, phase, glow}
  const addLightSource = (x, y, z, color, intensity, range, glow = null) =>
    lightSources.push({ x, y, z, color: new THREE.Color(color), intensity, range, phase: rand() * 10, glow });

  function candles(parent, spots, baseY) {
    for (const [x, z, h] of spots) {
      add(new THREE.CylinderGeometry(0.04, 0.045, h, 8), wax, x, baseY + h / 2, z, parent);
      const f = new THREE.Sprite(flameMat);
      f.center.set(0.5, 0.1);
      f.position.set(x, baseY + h, z);
      f.scale.set(0.12, 0.24, 1);
      parent.add(f);
    }
  }

  // ---------- ground and paths ----------
  {
    tex.ground.repeat.set(75, 75);
    tex.groundBump.repeat.set(75, 75);
    const groundMat = new THREE.MeshStandardMaterial({ map: tex.ground, bumpMap: tex.groundBump, bumpScale: 1.4, roughness: 1 });
    const ground = add(new THREE.PlaneGeometry(300, 300), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.castShadow = false;

    tex.path.repeat.set(1, 1);
    const pathMat = new THREE.MeshStandardMaterial({ map: tex.path, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 });
    MAP.paths.forEach((p, pi) => {
      const pts = pathLines[pi];
      const pos = [], uv = [], idx = [];
      let dist = 0;
      for (let i = 0; i < pts.length; i++) {
        const [x, z] = pts[i];
        const [ax, az] = pts[Math.max(0, i - 1)], [bx, bz] = pts[Math.min(pts.length - 1, i + 1)];
        let tx = bx - ax, tz = bz - az;
        const tl = Math.hypot(tx, tz) || 1;
        tx /= tl; tz /= tl;
        const wob = (p.width / 2) * (0.9 + 0.2 * Math.sin(i * 1.7 + pi));
        if (i > 0) dist += Math.hypot(x - pts[i - 1][0], z - pts[i - 1][1]);
        const y = 0.012 + pi * 0.002;
        pos.push(x - tz * wob, y, z + tx * wob, x + tz * wob, y, z - tx * wob);
        uv.push(0, dist / 3, 1, dist / 3);
        if (i > 0) {
          const k = i * 2;
          idx.push(k - 2, k - 1, k, k - 1, k + 1, k);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const mesh = new THREE.Mesh(geo, pathMat);
      mesh.receiveShadow = true;
      scene.add(mesh);
    });
  }

  // ---------- ruined walls (instanced blocks) ----------
  const wallBlocks = [];
  const wallDark = [];
  function wallRun(pts, { lo, hi, thick = 0.7, broken = 0.15, closed = false, dark = false, gapPad = 0.9 }) {
    const n = closed ? pts.length : pts.length - 1;
    for (let i = 0; i < n; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
      const len = Math.hypot(bx - ax, bz - az);
      const chunks = Math.max(1, Math.ceil(len / 2.2));
      const l = len / chunks;
      const dx = (bx - ax) / len, dz = (bz - az) / len;
      const rot = Math.atan2(-dz, dx);
      for (let k = 0; k < chunks; k++) {
        const cx = ax + dx * (k + 0.5) * l, cz = az + dz * (k + 0.5) * l;
        if (nearPath(cx, cz, gapPad)) continue; // leave a gap where a path goes through
        let h = lo + rand() * (hi - lo);
        if (rand() < broken) h = 0.4 + rand() * 0.6;
        m4.compose(pv.set(cx, h / 2, cz), q.setFromAxisAngle(UP, rot), sv.set(l + 0.06, h, thick * (0.9 + rand() * 0.2)));
        (dark ? wallDark : wallBlocks).push(m4.clone());
        addSegment(ax + dx * k * l, az + dz * k * l, ax + dx * (k + 1) * l, az + dz * (k + 1) * l, thick / 2);
      }
    }
  }
  wallRun(MAP.outerWall, { lo: 2.0, hi: 3.0, thick: 0.9, broken: 0.12 });
  for (const run of MAP.innerWalls) wallRun(run, { lo: 0.8, hi: 1.5, thick: 0.6, broken: 0.25 });

  // The Lych Gate: pillars, a little roof, and gate leaves hanging open.
  {
    const gz = 64;
    for (const s of [-1, 1]) {
      add(new THREE.BoxGeometry(0.9, 3.4, 0.9), darkStone, s * 3.2, 1.7, gz);
      const leaf = new THREE.Group();
      leaf.position.set(s * 2.7, 0, gz);
      leaf.rotation.y = s * -1.9;
      scene.add(leaf);
      for (let i = 0; i < 7; i++) add(new THREE.BoxGeometry(0.05, 2.1, 0.05), iron, -s * (0.15 + i * 0.33), 1.05, 0, leaf);
      for (const y of [0.4, 1.8]) add(new THREE.BoxGeometry(2.3, 0.06, 0.06), iron, -s * 1.15, y, 0, leaf);
      addCircle(s * 3.2, gz, 0.6);
    }
    const roof = new THREE.Shape();
    roof.moveTo(-4.3, 0); roof.lineTo(4.3, 0); roof.lineTo(0, 1.3); roof.lineTo(-4.3, 0);
    const rg = new THREE.ExtrudeGeometry(roof, { depth: 2.2, bevelEnabled: false });
    rg.translate(0, 0, -1.1);
    add(rg, wood, 0, 3.4, gz);
    // You came from the town; there's no going back.
    addSegment(-3.2, gz + 3, 3.2, gz + 3, 0.2);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex.glow, color: 0xffc860, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    glow.position.set(0, 3.1, gz - 0.2);
    glow.scale.setScalar(1);
    scene.add(glow);
    addLightSource(0, 3.1, gz - 0.2, 0xffc45a, 6, 12, glow);
  }

  // ---------- props ----------
  let door = null, doorAnchor = null;
  const builders = {
    chapel({ x, z }) {
      const hx = 8, hz = 4.5;
      wallRun([[x - hx, z - hz], [x + hx, z - hz], [x + hx, z + hz], [x - hx, z + hz]], { lo: 1.3, hi: 3.0, thick: 0.8, broken: 0.3, closed: true, dark: true, gapPad: 0.6 });
      // Tall west gable behind the altar, with an empty window.
      const gable = new THREE.Shape();
      gable.moveTo(-hz, 0); gable.lineTo(hz, 0); gable.lineTo(hz, 4.5); gable.lineTo(0, 7); gable.lineTo(-hz, 4.5); gable.lineTo(-hz, 0);
      const gg = new THREE.ExtrudeGeometry(gable, { depth: 0.8, bevelEnabled: false });
      gg.translate(0, 0, -0.4);
      add(gg, darkStone, x - hx, 0, z).rotation.y = Math.PI / 2;
      add(new THREE.BoxGeometry(0.9, 1.2, 0.08), new THREE.MeshBasicMaterial({ color: 0x050505 }), x - hx + 0.45, 4.6, z).rotation.y = Math.PI / 2;
      // Altar, candles, fallen beams and broken pews.
      add(new THREE.BoxGeometry(1.2, 1.0, 2.4), stoneMat, x - hx + 1.8, 0.5, z);
      candles(scene, [[x - hx + 1.6, z - 0.8, 0.22], [x - hx + 1.9, z - 0.4, 0.14], [x - hx + 1.7, z + 0.6, 0.26], [x - hx + 2.0, z + 0.9, 0.12]], 1.0);
      addLightSource(x - hx + 1.8, 1.6, z, 0xffa850, 5, 9);
      addCircle(x - hx + 1.8, z, 1.3);
      for (const bx of [x - 3, x + 1.5]) {
        const beam = add(new THREE.BoxGeometry(0.3, 0.3, 9.5), oldWood, bx, 4.6, z);
        if (bx > x) { beam.rotation.x = 0.5; beam.position.y = 2.2; }
      }
      for (let i = 0; i < 6; i++) {
        const px = x - 4 + (i % 3) * 3.2, pz = z + (i < 3 ? -2.2 : 2.2);
        if (rand() < 0.3) continue;
        const pew = add(new THREE.BoxGeometry(2.2, 0.5, 0.5), oldWood, px, 0.35, pz);
        pew.rotation.set((rand() - 0.5) * 0.3, (rand() - 0.5) * 0.4, (rand() - 0.5) * 0.3);
        addCircle(px, pz, 0.9);
      }
    },
    charnel({ x, z }) {
      // Iron fence around the pits, open where the path comes in.
      const bars = [];
      const R = 9;
      const ring = [];
      for (let i = 0; i < 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        ring.push([x + Math.cos(a) * R, z + Math.sin(a) * R]);
      }
      for (let i = 0; i < 24; i++) {
        const [ax, az] = ring[i], [bx, bz] = ring[(i + 1) % 24];
        if (nearPath((ax + bx) / 2, (az + bz) / 2, 0.8)) continue;
        for (let k = 0; k < 7; k++) {
          const t = k / 7;
          m4.compose(pv.set(ax + (bx - ax) * t, 0, az + (bz - az) * t), q.setFromEuler(e.set((rand() - 0.5) * 0.08, 0, (rand() - 0.5) * 0.08)), sv.set(1, 1, 1));
          bars.push(m4.clone());
        }
        addSegment(ax, az, bx, bz, 0.1);
      }
      instanced(new THREE.BoxGeometry(0.05, 1.8, 0.05).translate(0, 0.9, 0), iron, bars);
      // Three pits with bones heaped around them.
      const bones = [], skulls = [];
      for (const [ox, oz] of [[2, -3.5], [4, 1.5], [0.5, 5]]) {
        const px = x + ox, pz = z + oz;
        const pit = add(new THREE.CircleGeometry(1.6, 20), pitMat, px, 0.02, pz);
        pit.rotation.x = -Math.PI / 2;
        pit.castShadow = false;
        const rim = add(new THREE.TorusGeometry(1.7, 0.25, 6, 20), dirtMat, px, 0.02, pz);
        rim.rotation.x = Math.PI / 2;
        rim.scale.z = 0.5;
        addCircle(px, pz, 1.9);
        for (let i = 0; i < 26; i++) {
          const a = rand() * Math.PI * 2, r = 1.9 + rand() * 1.2;
          m4.compose(pv.set(px + Math.cos(a) * r, 0.05, pz + Math.sin(a) * r), q.setFromEuler(e.set(Math.PI / 2, rand() * 3, rand() * 3)), sv.setScalar(0.7 + rand() * 0.6));
          (rand() < 0.25 ? skulls : bones).push(m4.clone());
        }
      }
      instanced(new THREE.CylinderGeometry(0.03, 0.03, 0.45, 5), boneMat, bones);
      instanced(new THREE.SphereGeometry(0.1, 8, 6), boneMat, skulls);
      // A bone cart.
      const cx = x - 1.5, cz = z + 5.5;
      add(new THREE.BoxGeometry(1.4, 0.6, 2.2), oldWood, cx, 0.8, cz);
      for (const s of [-1, 1]) add(new THREE.CylinderGeometry(0.45, 0.45, 0.1, 12), oldWood, cx + s * 0.78, 0.45, cz).rotation.z = Math.PI / 2;
      add(new THREE.BoxGeometry(0.08, 0.08, 1.8), oldWood, cx - 0.3, 0.6, cz - 1.8).rotation.x = 0.35;
      addCircle(cx, cz, 1.3);
    },
    crypt({ x, z, rot }) {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      scene.add(g);
      add(new THREE.BoxGeometry(3.6, 0.35, 4.4), darkStone, 0, 0.175, 0, g);
      add(new THREE.BoxGeometry(3.2, 2.8, 4), stoneMat, 0, 1.75, 0, g);
      const roof = new THREE.Shape();
      roof.moveTo(-1.9, 0); roof.lineTo(1.9, 0); roof.lineTo(0, 1.1); roof.lineTo(-1.9, 0);
      const rg = new THREE.ExtrudeGeometry(roof, { depth: 4.4, bevelEnabled: false });
      rg.translate(0, 0, -2.2);
      add(rg, darkStone, 0, 3.15, 0, g);
      add(new THREE.BoxGeometry(1.1, 1.9, 0.08), bronze, 0, 1.3, 2.02, g);
      add(new THREE.BoxGeometry(1.5, 0.25, 0.3), darkStone, 0, 2.4, 2.05, g);
      if (rand() < 0.6) add(new THREE.SphereGeometry(0.25, 10, 8), stoneMat, 0, 4.45, 1.9, g);
      addRect(x, z, 1.9, 2.3, rot);
    },
    hut({ x, z, rot }) {
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      g.rotation.y = rot;
      scene.add(g);
      add(new THREE.BoxGeometry(4, 2.6, 5), oldWood, 0, 1.3, 0, g);
      const roof = new THREE.Shape();
      roof.moveTo(-2.5, 0); roof.lineTo(2.5, 0); roof.lineTo(0, 1.6); roof.lineTo(-2.5, 0);
      const rg = new THREE.ExtrudeGeometry(roof, { depth: 5.6, bevelEnabled: false });
      rg.translate(0, 0, -2.8);
      add(rg, wood, 0, 2.6, 0, g);
      add(new THREE.BoxGeometry(1, 2, 0.08), wood, -0.8, 1, 2.52, g);
      add(new THREE.PlaneGeometry(0.7, 0.55), new THREE.MeshBasicMaterial({ color: 0xffc060 }), 1.1, 1.6, 2.52, g).castShadow = false;
      add(new THREE.BoxGeometry(0.12, 2.8, 0.12), wood, 2.2, 1.4, 2.7, g);
      add(new THREE.BoxGeometry(0.05, 1.4, 0.05), wood, 1.9, 0.75, 2.9, g).rotation.z = 0.25; // the sexton's shovel
      add(new THREE.BoxGeometry(0.3, 0.4, 0.04), iron, 1.75, 0.15, 2.9, g);
      for (let i = 0; i < 9; i++) {
        add(new THREE.CylinderGeometry(0.12, 0.12, 1.2, 7), oldWood, -2.4, 0.13 + Math.floor(i / 3) * 0.24, -1.5 + (i % 3) * 0.26, g).rotation.x = Math.PI / 2;
      }
      addRect(x, z, 2.1, 2.6, rot);
      const wx = x + Math.cos(rot) * 1.1 + Math.sin(rot) * 3.2, wz = z - Math.sin(rot) * 1.1 + Math.cos(rot) * 3.2;
      addLightSource(wx, 1.6, wz, 0xffb050, 4, 9);
    },
    gibbet({ x, z }) {
      add(new THREE.BoxGeometry(0.28, 5, 0.28), wood, x, 2.5, z);
      add(new THREE.BoxGeometry(2.4, 0.22, 0.22), wood, x + 1.05, 4.85, z);
      add(new THREE.BoxGeometry(0.16, 1.3, 0.16), wood, x + 0.45, 4.35, z).rotation.z = -0.8;
      add(new THREE.CylinderGeometry(0.02, 0.02, 1.0, 4), iron, x + 2.0, 4.25, z);
      const cage = new THREE.Group();
      cage.position.set(x + 2.0, 2.9, z);
      cage.rotation.z = 0.08;
      scene.add(cage);
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2;
        add(new THREE.CylinderGeometry(0.018, 0.018, 1.6, 4), iron, Math.cos(a) * 0.38, 0, Math.sin(a) * 0.38, cage);
      }
      for (const y of [-0.8, 0.8]) add(new THREE.TorusGeometry(0.38, 0.025, 4, 18), iron, 0, y, 0, cage).rotation.x = Math.PI / 2;
      add(new THREE.SphereGeometry(0.13, 10, 8), boneMat, 0.1, -0.62, 0.05, cage);
      addCircle(x, z, 0.4);
    },
    pool({ x, z, rx, rz }) {
      const water = add(new THREE.CircleGeometry(1, 40), new THREE.MeshStandardMaterial({ color: 0x0b100d, roughness: 0.08, metalness: 0.3 }), x, 0.03, z);
      water.rotation.x = -Math.PI / 2;
      water.scale.set(rx, rz, 1);
      water.castShadow = false;
      const reeds = [];
      for (let i = 0; i < 90; i++) {
        const a = rand() * Math.PI * 2, r = 0.92 + rand() * 0.18;
        m4.compose(pv.set(x + Math.cos(a) * rx * r, 0, z + Math.sin(a) * rz * r), q.setFromEuler(e.set((rand() - 0.5) * 0.3, 0, (rand() - 0.5) * 0.3)), sv.set(1, 0.6 + rand() * 0.8, 1));
        reeds.push(m4.clone());
      }
      instanced(new THREE.ConeGeometry(0.035, 1.3, 4).translate(0, 0.65, 0), new THREE.MeshStandardMaterial({ color: 0x4a4a2a, roughness: 1 }), reeds, { shadow: false });
      for (const ox of [-rx + rz, 0, rx - rz]) addCircle(x + ox, z, rz - 0.4);
    },
    belltower({ x, z }) {
      for (const [ox, oz, w, d, h] of [[0, -1.8, 4.4, 0.8, 8], [0, 1.8, 4.4, 0.8, 5.2], [-1.8, 0, 0.8, 2.8, 6.8], [1.8, 0, 0.8, 2.8, 4.4]]) {
        add(new THREE.BoxGeometry(w, h, d), darkStone, x + ox, h / 2, z + oz);
      }
      addRect(x, z, 2.3, 2.3, 0);
      // The cracked bell lies on its side in the grass.
      const bell = add(new THREE.LatheGeometry([
        new THREE.Vector2(0.05, 1.4), new THREE.Vector2(0.45, 1.35), new THREE.Vector2(0.6, 1.0),
        new THREE.Vector2(0.72, 0.4), new THREE.Vector2(0.95, 0.05), new THREE.Vector2(0.9, 0),
      ], 20), new THREE.MeshStandardMaterial({ color: 0x4a5a40, metalness: 0.75, roughness: 0.45, side: THREE.DoubleSide }), x + 4, 0.9, z + 3);
      bell.rotation.set(0, 0.6, Math.PI / 2 + 0.2);
      addCircle(x + 4, z + 3, 1.1);
      add(new THREE.BoxGeometry(0.35, 0.35, 5), oldWood, x + 2.5, 0.3, z + 5.2).rotation.set(0.1, 1.1, 0);
      for (let i = 0; i < 16; i++) {
        const b = add(new THREE.BoxGeometry(0.4 + rand() * 0.5, 0.3, 0.4 + rand() * 0.3), darkStone, x + (rand() - 0.5) * 8, 0.15, z + 2.5 + rand() * 3);
        b.rotation.set(rand(), rand() * 3, rand());
      }
    },
    court({ x, z }) {
      const hx = 15, hz = 15;
      wallRun([[x - hx, z + hz], [x + hx, z + hz], [x + hx, z - hz], [x - hx, z - hz]], { lo: 2.8, hi: 3.4, thick: 0.8, broken: 0.06, closed: true, dark: true, gapPad: 1.2 });
      for (const s of [-1, 1]) {
        add(new THREE.BoxGeometry(1.0, 4.2, 1.0), darkStone, x + s * 2.9, 2.1, z + hz);
        add(new THREE.CylinderGeometry(0.25, 0.35, 0.6, 10), stoneMat, x + s * 2.9, 4.5, z + hz);
        addCircle(x + s * 2.9, z + hz, 0.7);
      }
      const g = new THREE.Group();
      g.position.set(x, 0, z);
      scene.add(g);
      buildMausoleum(g);
      addRect(x, z - 0.2, 4.35, 5.35, 0);
      for (const s of [-1, 1]) addCircle(x + s * 3.1, z + 6.1, 0.62);
      addLightSource(x, 1.0, z + 5.6, 0xffa850, 5, 8);
      door = new THREE.Vector3(x, 0, z + 6.6);
      doorAnchor = new THREE.Vector3(x, 1.6, z + 4.2);
    },
  };

  // The Vorn mausoleum, built around its own origin (door facing +z).
  function buildMausoleum(g) {
    add(new THREE.BoxGeometry(8.6, 0.5, 10.6), darkStone, 0, 0.25, -0.2, g);
    add(new THREE.BoxGeometry(7, 4.1, 8), stoneMat, 0, 2.55, -1, g);
    for (const x of [-2.9, -1.1, 1.1, 2.9]) {
      add(new THREE.CylinderGeometry(0.26, 0.3, 3.6, 14), stoneMat, x, 2.3, 4.0, g);
      add(new THREE.BoxGeometry(0.72, 0.2, 0.72), darkStone, x, 0.6, 4.0, g);
    }
    add(new THREE.BoxGeometry(7.6, 0.5, 2.2), darkStone, 0, 4.35, 3.9, g);
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-4.2, 0); roofShape.lineTo(4.2, 0); roofShape.lineTo(0, 1.6); roofShape.lineTo(-4.2, 0);
    const roof = new THREE.ExtrudeGeometry(roofShape, { depth: 10.2, bevelEnabled: false });
    roof.translate(0, 0, -5.2);
    add(roof, darkStone, 0, 4.6, 0, g);
    add(new THREE.PlaneGeometry(3, 0.56), new THREE.MeshStandardMaterial({ map: tex.plaque, roughness: 0.9 }), 0, 4.35, 5.01, g).castShadow = false;
    add(new THREE.BoxGeometry(2.5, 3.1, 0.3), darkStone, 0, 2.05, 3.0, g);
    for (const x of [-0.48, 0.48]) add(new THREE.BoxGeometry(0.9, 2.6, 0.1), bronze, x, 1.8, 3.18, g);
    const chain = new THREE.MeshStandardMaterial({ color: 0x1e1c1a, metalness: 0.8, roughness: 0.5 });
    for (const a of [-0.62, 0.62]) add(new THREE.BoxGeometry(2.0, 0.07, 0.07), chain, 0, 1.8, 3.27, g).rotation.z = a;
    add(new THREE.BoxGeometry(0.24, 0.3, 0.12), chain, 0, 1.8, 3.32, g);
    add(new THREE.BoxGeometry(3.6, 0.33, 0.7), darkStone, 0, 0.165, 5.45, g);
    add(new THREE.BoxGeometry(3.6, 0.16, 0.7), darkStone, 0, 0.08, 6.1, g);
    for (const s of [-1, 1]) {
      const x = s * 3.1, z = 6.1;
      add(new THREE.BoxGeometry(0.85, 0.9, 0.85), darkStone, x, 0.45, z, g);
      add(new THREE.ConeGeometry(0.36, 1.6, 12), stoneMat, x, 1.7, z, g);
      add(new THREE.SphereGeometry(0.17, 12, 10), stoneMat, x, 2.55, z + 0.08, g).scale.set(1, 1.1, 1);
      add(new THREE.SphereGeometry(0.21, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), stoneMat, x, 2.6, z + 0.02, g).rotation.x = 0.5;
      add(new THREE.BoxGeometry(0.22, 0.32, 0.14), stoneMat, x, 2.3, z + 0.28, g).rotation.x = -0.5;
    }
    candles(g, [[-1.2, 5.3, 0.22], [-0.95, 5.55, 0.14], [1.1, 5.35, 0.26], [1.35, 5.2, 0.12], [0.7, 5.6, 0.18]], 0.33);
  }

  for (const p of MAP.props) builders[p.type](p);
  instanced(new THREE.BoxGeometry(1, 1, 1), stoneMat, wallBlocks);
  instanced(new THREE.BoxGeometry(1, 1, 1), darkStone, wallDark);

  // ---------- lanterns ----------
  for (const [x, z] of MAP.lanterns) {
    add(new THREE.BoxGeometry(0.12, 2.3, 0.12), wood, x, 1.15, z);
    add(new THREE.BoxGeometry(0.45, 0.08, 0.08), wood, x + 0.18, 2.25, z);
    add(new THREE.BoxGeometry(0.2, 0.28, 0.2), iron, x + 0.38, 1.98, z);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex.glow, color: 0xffc860, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    glow.position.set(x + 0.38, 1.98, z);
    glow.scale.setScalar(0.9);
    scene.add(glow);
    addLightSource(x + 0.38, 1.9, z, 0xffc45a, 7, 10, glow);
    addCircle(x, z, 0.25);
  }

  // ---------- open graves where the zombies crawled out ----------
  const moundGeo = new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2);
  for (const [kind, x, z] of MAP.spawns) {
    if (kind !== 'zombie') continue;
    const pit = add(new THREE.PlaneGeometry(0.95, 1.8), pitMat, x - 1.2, 0.015, z);
    pit.rotation.x = -Math.PI / 2;
    pit.castShadow = false;
    add(moundGeo, dirtMat, x - 0.2, 0, z).scale.set(0.45, 0.32, 0.9);
    addCircle(x - 1.2, z, 0.6);
  }

  // ---------- graves ----------
  {
    const slabShape = new THREE.Shape();
    slabShape.moveTo(-0.34, 0);
    slabShape.lineTo(0.34, 0);
    slabShape.lineTo(0.34, 0.72);
    slabShape.absarc(0, 0.72, 0.34, 0, Math.PI, false);
    slabShape.lineTo(-0.34, 0);
    const slab = new THREE.ExtrudeGeometry(slabShape, { depth: 0.16, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 1, curveSegments: 8 });
    slab.translate(0, 0, -0.08);
    const cross = mergeGeometries([
      new THREE.BoxGeometry(0.15, 1.25, 0.14).translate(0, 0.625, 0),
      new THREE.BoxGeometry(0.62, 0.14, 0.14).translate(0, 0.88, 0),
    ]);
    const obelisk = mergeGeometries([
      new THREE.BoxGeometry(0.56, 0.24, 0.56).translate(0, 0.12, 0),
      new THREE.CylinderGeometry(0.1, 0.25, 1.35, 4, 1).rotateY(Math.PI / 4).translate(0, 0.91, 0),
    ]);
    const woodCross = mergeGeometries([
      new THREE.BoxGeometry(0.08, 1.0, 0.06).translate(0, 0.5, 0),
      new THREE.BoxGeometry(0.45, 0.07, 0.06).translate(0, 0.72, 0),
    ]);
    const lists = { slab: [], cross: [], obelisk: [], wood: [], mound: [] };
    const colors = { slab: [], cross: [], obelisk: [] };
    const pickShape = {
      pauper: () => (rand() < 0.55 ? 'wood' : rand() < 0.55 ? null : 'slab'),
      old: () => (rand() < 0.55 ? 'slab' : rand() < 0.55 ? 'cross' : 'obelisk'),
      obelisk: () => (rand() < 0.6 ? 'obelisk' : 'slab'),
      sunk: () => (rand() < 0.7 ? 'slab' : 'cross'),
    };
    for (const f of MAP.graveFields) {
      const sunk = f.style === 'sunk';
      const sx = f.style === 'pauper' ? 2.3 : 2.6, sz = f.style === 'pauper' ? 3.0 : 3.3;
      for (let z = f.z - f.rz; z <= f.z + f.rz; z += sz) {
        for (let x = f.x - f.rx; x <= f.x + f.rx; x += sx) {
          const px = x + (rand() - 0.5) * 0.8, pz = z + (rand() - 0.5) * 0.6;
          if (((px - f.x) / f.rx) ** 2 + ((pz - f.z) / f.rz) ** 2 > 1) continue;
          if (rand() < 0.15) continue;
          if (nearPath(px, pz, 1.1) || nearPath(px, pz + 1.15, 1.0)) continue;
          if (!sunk && (!clear(px, pz, 0.7) || !clear(px, pz + 1.15, 0.6))) continue;
          const shape = pickShape[f.style]();
          if (shape) {
            if (sunk) e.set(-0.3 - rand() * 0.6, (rand() - 0.5) * 0.8, (rand() - 0.5) * 0.6);
            else e.set((rand() - 0.5) * 0.24, (rand() - 0.5) * 0.3, (rand() - 0.5) * 0.24);
            m4.compose(pv.set(px, sunk ? -0.35 : -0.03, pz), q.setFromEuler(e), sv.setScalar(0.9 + rand() * 0.35));
            lists[shape].push(m4.clone());
            if (colors[shape]) colors[shape].push(new THREE.Color().setHSL(0.12, 0.05 + rand() * 0.08, 0.45 + rand() * 0.3));
            if (!sunk) addCircle(px, pz, shape === 'obelisk' ? 0.42 : shape === 'wood' ? 0.2 : 0.36);
          }
          if (!sunk) {
            const long = f.style === 'pauper' ? 1.25 : 0.95;
            m4.compose(pv.set(px, 0, pz + 1.15), q.setFromAxisAngle(UP, (rand() - 0.5) * 0.2), sv.set(0.55, 0.16 + rand() * 0.1, long));
            lists.mound.push(m4.clone());
          }
        }
      }
    }
    instanced(slab, stoneMat, lists.slab, { colors: colors.slab });
    instanced(cross, stoneMat, lists.cross, { colors: colors.cross });
    instanced(obelisk, stoneMat, lists.obelisk, { colors: colors.obelisk });
    instanced(woodCross, oldWood, lists.wood);
    instanced(moundGeo, dirtMat, lists.mound, { shadow: false });
  }

  // ---------- dead trees ----------
  function deadTreeGeometry() {
    const parts = [];
    const branch = (start, dir, len, rad, depth) => {
      const g = new THREE.CylinderGeometry(rad * 0.65, rad, len, 5, 1);
      g.translate(0, len / 2, 0);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, dir));
      g.translate(start.x, start.y, start.z);
      parts.push(g);
      if (depth === 0) return;
      const end = start.clone().addScaledVector(dir, len);
      const n = depth > 2 ? 3 : 2;
      for (let i = 0; i < n; i++) {
        const nd = dir.clone().add(new THREE.Vector3((rand() - 0.5) * 1.5, rand() * 0.5 - 0.05, (rand() - 0.5) * 1.5)).normalize();
        branch(end, nd, len * (0.58 + rand() * 0.2), rad * 0.62, depth - 1);
      }
    };
    branch(new THREE.Vector3(), new THREE.Vector3((rand() - 0.5) * 0.25, 1, (rand() - 0.5) * 0.25).normalize(), 2.3 + rand(), 0.3, 4);
    return mergeGeometries(parts);
  }
  const poly = MAP.outerWall;
  function insideWall(x, z) {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, zi] = poly[i], [xj, zj] = poly[j];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
    }
    return c;
  }
  {
    const variants = [0, 1, 2, 3].map(() => ({ geo: deadTreeGeometry(), list: [] }));
    const place = (x, z, s) => {
      m4.compose(pv.set(x, 0, z), q.setFromAxisAngle(UP, rand() * 6.28), sv.setScalar(s));
      variants[Math.floor(rand() * 4)].list.push(m4.clone());
    };
    // A dead wood crowds in around the outer wall.
    let n = 0;
    for (let tries = 0; tries < 5000 && n < 230; tries++) {
      const x = -72 + rand() * 144, z = -76 + rand() * 150;
      if (insideWall(x, z) || (Math.abs(x) < 7 && z > 60)) continue;
      if (MAP.outerWall.every(([wx, wz]) => Math.hypot(x - wx, z - wz) > 18)) continue;
      place(x, z, 1.1 + rand() * 1.1);
      n++;
    }
    // A few more stand inside, between the graves.
    n = 0;
    for (let tries = 0; tries < 3000 && n < 55; tries++) {
      const x = -52 + rand() * 104, z = -58 + rand() * 118;
      if (!insideWall(x, z) || nearPath(x, z, 2.2) || !clear(x, z, 1.6)) continue;
      place(x, z, 0.9 + rand() * 0.8);
      addCircle(x, z, 0.45);
      n++;
    }
    for (const v of variants) instanced(v.geo, barkMat, v.list);
  }

  // ---------- loot glints ----------
  const loot = [];
  const glintMat = new THREE.SpriteMaterial({ map: tex.glow, color: 0xffe066, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  for (const [x, z] of MAP.loot) {
    const sprite = new THREE.Sprite(glintMat.clone());
    sprite.position.set(x, 0.35, z);
    sprite.scale.setScalar(0.55);
    scene.add(sprite);
    add(moundGeo, dirtMat, x, 0, z).scale.set(0.5, 0.18, 0.8);
    loot.push({ x, z, stand: new THREE.Vector3(x + 0.85, 0, z), sprite, searched: false, phase: rand() * 6 });
  }

  // ---------- ground mist ----------
  const mists = [];
  for (let i = 0; i < 44; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex.mist, color: 0xb8b8a0, transparent: true, opacity: 0.16, depthWrite: false }));
    s.position.set((rand() - 0.5) * 110, 0.7 + rand() * 0.6, (rand() - 0.5) * 124);
    s.scale.set(9 + rand() * 5, 3 + rand() * 1.5, 1);
    scene.add(s);
    mists.push({ sprite: s, vx: (rand() - 0.5) * 0.3, vz: (rand() - 0.5) * 0.3 });
  }

  // ---------- light pool: only the nearest light sources get a real light ----------
  const POOL = 5;
  const pool = Array.from({ length: POOL }, () => {
    const l = new THREE.PointLight(0xffc45a, 0, 10, 2);
    scene.add(l);
    return { light: l, src: null };
  });
  let poolTimer = 0;
  function assignLights(focus) {
    const sorted = lightSources
      .map((s) => ({ s, d: Math.hypot(s.x - focus.x, s.z - focus.z) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, POOL);
    pool.forEach((p, i) => {
      const s = sorted[i]?.s || null;
      p.src = s;
      if (!s) { p.light.intensity = 0; return; }
      p.light.position.set(s.x, s.y, s.z);
      p.light.color.copy(s.color);
      p.light.distance = s.range;
    });
  }

  const snap = 56 / shadowSize; // one shadow-map texel, so shadows don't shimmer while moving
  return {
    circlesNear,
    segments,
    loot,
    door,
    doorAnchor,
    playerStart: new THREE.Vector3(MAP.start[0], 0, MAP.start[1]),
    areas: MAP.areas,
    pathLines,
    insideWall,
    update(dt, t, calm, focus) {
      const fx = Math.round(focus.x / snap) * snap, fz = Math.round(focus.z / snap) * snap;
      moon.target.position.set(fx, 0, fz);
      moon.position.set(fx + MOON_OFFSET.x, MOON_OFFSET.y, fz + MOON_OFFSET.z);
      poolTimer -= dt;
      if (poolTimer <= 0) { poolTimer = 0.4; assignLights(focus); }
      const amp = calm ? 0.05 : 0.14;
      for (const p of pool) {
        if (!p.src) continue;
        const k = 1 - amp + amp * (Math.sin(t * 11 + p.src.phase) * 0.5 + Math.sin(t * 6.7 + p.src.phase * 2) * 0.5);
        p.light.intensity = p.src.intensity * k;
        if (p.src.glow) p.src.glow.material.opacity = 0.8 * k;
      }
      for (const m of mists) {
        m.sprite.position.x += m.vx * dt;
        m.sprite.position.z += m.vz * dt;
        if (Math.abs(m.sprite.position.x) > 58) m.vx *= -1;
        if (Math.abs(m.sprite.position.z) > 64) m.vz *= -1;
      }
      for (const l of loot) {
        if (!l.searched) l.sprite.material.opacity = 0.45 + 0.4 * Math.sin(t * 2.2 + l.phase);
      }
    },
  };
}
