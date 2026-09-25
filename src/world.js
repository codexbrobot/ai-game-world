// The graveyard: ground, fence, graves, dead trees, the gibbet and the Vorn mausoleum.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTextures } from './textures.js';

export const G = 22; // half-width of the fenced graveyard, in metres
const UP = new THREE.Vector3(0, 1, 0);

export function buildGraveyard(renderer, scene, rand, coarse) {
  const tex = makeTextures(rand, renderer.capabilities.getMaxAnisotropy());
  const world = {
    circles: [], // round obstacles {x, z, r}
    boxes: [], // rectangular obstacles {minX, maxX, minZ, maxZ}
    openGraves: [], // where the dead crawled out
    loot: [], // disturbed graves the wretch can search
    door: new THREE.Vector3(0, 0, 6.6), // where you stand to try the mausoleum doors
    doorAnchor: new THREE.Vector3(0, 1.6, 4.2),
    playerStart: new THREE.Vector3(0, 0, G - 3),
  };
  const flickers = [];
  const mists = [];

  function add(geo, mat, x = 0, y = 0, z = 0, parent = scene) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  }

  // ---------- sky, fog, light ----------
  const fog = new THREE.Color(0x17180f);
  scene.background = fog;
  scene.fog = new THREE.FogExp2(fog, 0.034);

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
  const moon = new THREE.DirectionalLight(0xe4dfae, 1.45);
  moon.position.set(10, 22, -14);
  moon.castShadow = true;
  const shadowSize = coarse ? 1024 : 2048;
  moon.shadow.mapSize.set(shadowSize, shadowSize);
  Object.assign(moon.shadow.camera, { left: -27, right: 27, top: 27, bottom: -27, near: 1, far: 70 });
  moon.shadow.bias = -0.0004;
  moon.shadow.normalBias = 0.04;
  scene.add(moon);

  // ---------- ground and path ----------
  const groundMat = new THREE.MeshStandardMaterial({ map: tex.ground, bumpMap: tex.groundBump, bumpScale: 1.4, roughness: 1 });
  const ground = add(new THREE.PlaneGeometry(160, 160), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.castShadow = false;

  const pathLen = G + 4 - 6.2;
  const path = add(new THREE.PlaneGeometry(2.6, pathLen), new THREE.MeshStandardMaterial({
    map: tex.path, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2,
  }), 0, 0.01, 6.2 + pathLen / 2);
  path.rotation.x = -Math.PI / 2;
  path.castShadow = false;

  // ---------- materials ----------
  const stoneMat = new THREE.MeshStandardMaterial({ map: tex.stone, bumpMap: tex.stoneBump, bumpScale: 1.5, roughness: 0.92 });
  const darkStone = new THREE.MeshStandardMaterial({ map: tex.stone, bumpMap: tex.stoneBump, bumpScale: 1.5, roughness: 0.95, color: 0x8a867c });
  const iron = new THREE.MeshStandardMaterial({ color: 0x24221f, metalness: 0.6, roughness: 0.6 });
  const dirtMat = new THREE.MeshStandardMaterial({ map: tex.dirt, roughness: 1 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x3b2d20, roughness: 0.95 });
  const barkMat = new THREE.MeshStandardMaterial({ color: 0x2c261f, roughness: 1, flatShading: true });

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), pv = new THREE.Vector3(), sv = new THREE.Vector3();

  // ---------- iron fence ----------
  {
    const spots = [];
    const step = 0.34;
    for (let t = -G; t <= G; t += step) {
      spots.push([t, -G], [-G, t], [G, t]);
      if (Math.abs(t) > 2.6) spots.push([t, G]); // gate gap on the south side
    }
    const bars = new THREE.InstancedMesh(new THREE.BoxGeometry(0.05, 1.9, 0.05).translate(0, 0.95, 0), iron, spots.length);
    const tips = new THREE.InstancedMesh(new THREE.ConeGeometry(0.05, 0.18, 4).translate(0, 1.99, 0), iron, spots.length);
    spots.forEach(([x, z], i) => {
      m4.compose(pv.set(x, 0, z), q.setFromEuler(e.set((rand() - 0.5) * 0.06, 0, (rand() - 0.5) * 0.06)), sv.set(1, 1, 1));
      bars.setMatrixAt(i, m4);
      tips.setMatrixAt(i, m4);
    });
    bars.castShadow = tips.castShadow = true;
    scene.add(bars, tips);
    for (const y of [0.35, 1.6]) {
      add(new THREE.BoxGeometry(G * 2, 0.06, 0.06), iron, 0, y, -G);
      add(new THREE.BoxGeometry(0.06, 0.06, G * 2), iron, -G, y, 0);
      add(new THREE.BoxGeometry(0.06, 0.06, G * 2), iron, G, y, 0);
      for (const s of [-1, 1]) add(new THREE.BoxGeometry(G - 2.6, 0.06, 0.06), iron, s * (G + 2.6) / 2, y, G);
    }
    // Gate pillars and the gate leaves, hanging open.
    for (const s of [-1, 1]) {
      add(new THREE.BoxGeometry(0.7, 2.8, 0.7), darkStone, s * 2.95, 1.4, G);
      add(new THREE.SphereGeometry(0.3, 10, 8), darkStone, s * 2.95, 3.0, G);
      const leaf = new THREE.Group();
      leaf.position.set(s * 2.6, 0, G);
      leaf.rotation.y = s * -1.9;
      scene.add(leaf);
      for (let i = 0; i < 7; i++) add(new THREE.BoxGeometry(0.05, 2.1, 0.05), iron, -s * (0.15 + i * 0.33), 1.05, 0, leaf);
      add(new THREE.BoxGeometry(2.3, 0.06, 0.06), iron, -s * 1.15, 0.4, 0, leaf);
      add(new THREE.BoxGeometry(2.3, 0.06, 0.06), iron, -s * 1.15, 1.8, 0, leaf);
      world.circles.push({ x: s * 2.95, z: G, r: 0.5 });
    }
  }

  // ---------- dead trees and the gibbet ----------
  const trees = [[-16, -14], [15, -16], [-17, 5], [17, 3], [-8, 15.5], [10, 14], [5, -18]];
  const gibbet = [13, -7];

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
  for (const [x, z] of trees) {
    const t = add(deadTreeGeometry(), barkMat, x, 0, z);
    t.rotation.y = rand() * Math.PI * 2;
    world.circles.push({ x, z, r: 0.45 });
  }
  {
    const [x, z] = gibbet;
    add(new THREE.BoxGeometry(0.28, 5, 0.28), wood, x, 2.5, z);
    add(new THREE.BoxGeometry(2.4, 0.22, 0.22), wood, x + 1.05, 4.85, z);
    const brace = add(new THREE.BoxGeometry(0.16, 1.3, 0.16), wood, x + 0.45, 4.35, z);
    brace.rotation.z = -0.8;
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
    const boneMat = new THREE.MeshStandardMaterial({ color: 0xd4cbb0, roughness: 0.7 });
    add(new THREE.SphereGeometry(0.13, 10, 8), boneMat, 0.1, -0.62, 0.05, cage);
    add(new THREE.BoxGeometry(0.34, 0.05, 0.05), boneMat, -0.05, -0.74, -0.08, cage).rotation.y = 0.7;
    world.circles.push({ x, z, r: 0.4 });
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
    const shapes = [slab, cross, obelisk];
    const placed = [[], [], []];
    const mounds = [];
    const trunks = [...trees, gibbet];

    for (let z = -19; z <= 17; z += 3.3) {
      for (let x = -19.5; x <= 19.5; x += 2.6) {
        const px = x + (rand() - 0.5) * 0.8, pz = z + (rand() - 0.5) * 0.6;
        if (Math.abs(px) < 7.4 && pz > -9.5 && pz < 10) continue; // clearing around the mausoleum
        if (Math.abs(px) < 2.6 && pz > 5) continue; // the path
        if (trunks.some(([tx, tz]) => Math.hypot(px - tx, pz - tz) < 2.2)) continue;
        if (rand() < 0.2) continue;
        const kind = rand() < 0.62 ? 0 : rand() < 0.6 ? 1 : 2;
        const open = world.openGraves.length < 7 && rand() < 0.1;
        const fallen = open && rand() < 0.6;
        placed[kind].push({ x: px, z: pz, fallen });
        world.circles.push({ x: px, z: pz, r: kind === 2 ? 0.42 : 0.36 });
        if (open) world.openGraves.push({ x: px, z: pz + 1.15 });
        else mounds.push({ x: px, z: pz + 1.15 });
      }
    }

    const shade = new THREE.Color();
    placed.forEach((list, k) => {
      if (!list.length) return;
      const inst = new THREE.InstancedMesh(shapes[k], stoneMat, list.length);
      list.forEach((g, i) => {
        if (g.fallen) e.set(-1.35, (rand() - 0.5) * 0.6, (rand() - 0.5) * 0.3);
        else e.set((rand() - 0.5) * 0.24, (rand() - 0.5) * 0.3, (rand() - 0.5) * 0.24);
        m4.compose(pv.set(g.x, g.fallen ? 0.08 : -0.03, g.z), q.setFromEuler(e), sv.setScalar(0.9 + rand() * 0.35));
        inst.setMatrixAt(i, m4);
        inst.setColorAt(i, shade.setHSL(0.12, 0.05 + rand() * 0.08, 0.45 + rand() * 0.3));
      });
      inst.castShadow = inst.receiveShadow = true;
      scene.add(inst);
    });

    const moundGeo = new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const moundInst = new THREE.InstancedMesh(moundGeo, dirtMat, mounds.length);
    mounds.forEach((mnd, i) => {
      m4.compose(pv.set(mnd.x, 0, mnd.z), q.setFromAxisAngle(UP, (rand() - 0.5) * 0.2), sv.set(0.55, 0.16 + rand() * 0.1, 0.95));
      moundInst.setMatrixAt(i, m4);
    });
    moundInst.receiveShadow = true;
    scene.add(moundInst);

    // Open graves: a dark pit and a spill of dirt beside it.
    const pitMat = new THREE.MeshBasicMaterial({ color: 0x050403 });
    for (const g of world.openGraves) {
      const pit = add(new THREE.PlaneGeometry(0.95, 1.8), pitMat, g.x, 0.015, g.z);
      pit.rotation.x = -Math.PI / 2;
      pit.castShadow = false;
      const pile = add(moundGeo, dirtMat, g.x + 0.95, 0, g.z);
      pile.scale.set(0.45, 0.32, 0.9);
    }

    // A few disturbed graves glint with something worth digging for.
    const glintMat = new THREE.SpriteMaterial({ map: tex.glow, color: 0xffe066, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    const shuffled = mounds.slice().sort(() => rand() - 0.5).slice(0, 6);
    for (const mnd of shuffled) {
      const sprite = new THREE.Sprite(glintMat.clone());
      sprite.position.set(mnd.x, 0.35, mnd.z);
      sprite.scale.setScalar(0.5);
      scene.add(sprite);
      world.loot.push({ x: mnd.x, z: mnd.z, stand: new THREE.Vector3(mnd.x + 0.85, 0, mnd.z), sprite, searched: false, phase: rand() * 6 });
    }
  }

  // ---------- the Vorn mausoleum ----------
  {
    add(new THREE.BoxGeometry(8.6, 0.5, 10.6), darkStone, 0, 0.25, -0.2);
    add(new THREE.BoxGeometry(7, 4.1, 8), stoneMat, 0, 0.5 + 2.05, -1);
    for (const x of [-2.9, -1.1, 1.1, 2.9]) {
      add(new THREE.CylinderGeometry(0.26, 0.3, 3.6, 14), stoneMat, x, 0.5 + 1.8, 4.0);
      add(new THREE.BoxGeometry(0.72, 0.2, 0.72), darkStone, x, 0.6, 4.0);
    }
    add(new THREE.BoxGeometry(7.6, 0.5, 2.2), darkStone, 0, 4.35, 3.9);
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-4.2, 0);
    roofShape.lineTo(4.2, 0);
    roofShape.lineTo(0, 1.6);
    roofShape.lineTo(-4.2, 0);
    const roof = new THREE.ExtrudeGeometry(roofShape, { depth: 10.2, bevelEnabled: false });
    roof.translate(0, 0, -5.2);
    add(roof, darkStone, 0, 4.6, 0);
    const plaque = add(new THREE.PlaneGeometry(3, 0.56), new THREE.MeshStandardMaterial({ map: tex.plaque, roughness: 0.9 }), 0, 4.35, 5.01);
    plaque.castShadow = false;

    // Bronze doors, chained shut.
    add(new THREE.BoxGeometry(2.5, 3.1, 0.3), darkStone, 0, 0.5 + 1.55, 3.0);
    const bronze = new THREE.MeshStandardMaterial({ color: 0x3f5a48, metalness: 0.7, roughness: 0.5 });
    for (const x of [-0.48, 0.48]) add(new THREE.BoxGeometry(0.9, 2.6, 0.1), bronze, x, 0.5 + 1.3, 3.18);
    const chain = new THREE.MeshStandardMaterial({ color: 0x1e1c1a, metalness: 0.8, roughness: 0.5 });
    for (const a of [-0.62, 0.62]) add(new THREE.BoxGeometry(2.0, 0.07, 0.07), chain, 0, 1.8, 3.27).rotation.z = a;
    add(new THREE.BoxGeometry(0.24, 0.3, 0.12), chain, 0, 1.8, 3.32);

    // Steps down to the path.
    add(new THREE.BoxGeometry(3.6, 0.33, 0.7), darkStone, 0, 0.165, 5.45);
    add(new THREE.BoxGeometry(3.6, 0.16, 0.7), darkStone, 0, 0.08, 6.1);

    // Two mourning statues flank the steps.
    for (const s of [-1, 1]) {
      const x = s * 3.1, z = 6.1;
      add(new THREE.BoxGeometry(0.85, 0.9, 0.85), darkStone, x, 0.45, z);
      add(new THREE.ConeGeometry(0.36, 1.6, 12), stoneMat, x, 0.9 + 0.8, z);
      const head = add(new THREE.SphereGeometry(0.17, 12, 10), stoneMat, x, 2.55, z + 0.08);
      head.scale.set(1, 1.1, 1);
      const hood = add(new THREE.SphereGeometry(0.21, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), stoneMat, x, 2.6, z + 0.02);
      hood.rotation.x = 0.5;
      add(new THREE.BoxGeometry(0.22, 0.32, 0.14), stoneMat, x, 2.3, z + 0.28).rotation.x = -0.5; // hands raised to the face
      world.circles.push({ x, z, r: 0.62 });
    }

    // Candles left on the steps by someone who still mourns.
    const wax = new THREE.MeshStandardMaterial({ color: 0xd9ceb0, roughness: 0.8 });
    const flameMat = new THREE.SpriteMaterial({ map: tex.flame, color: 0xffb050, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
    for (const [x, z, h] of [[-1.2, 5.3, 0.22], [-0.95, 5.55, 0.14], [1.1, 5.35, 0.26], [1.35, 5.2, 0.12], [0.7, 5.6, 0.18]]) {
      add(new THREE.CylinderGeometry(0.04, 0.045, h, 8), wax, x, 0.33 + h / 2, z);
      const f = new THREE.Sprite(flameMat);
      f.center.set(0.5, 0.1);
      f.position.set(x, 0.33 + h, z);
      f.scale.set(0.12, 0.24, 1);
      scene.add(f);
    }
    const candleLight = new THREE.PointLight(0xffa850, 5, 8, 2);
    candleLight.position.set(0, 1.0, 5.6);
    scene.add(candleLight);
    flickers.push({ light: candleLight, base: 5, phase: 1.3 });

    world.boxes.push({ minX: -4.35, maxX: 4.35, minZ: -5.55, maxZ: 5.1 });
  }

  // ---------- lanterns along the path ----------
  for (const [x, z] of [[1.75, 9.5], [-1.75, 14.5], [1.75, 19.5]]) {
    add(new THREE.BoxGeometry(0.12, 2.3, 0.12), wood, x, 1.15, z);
    add(new THREE.BoxGeometry(0.5, 0.08, 0.08), wood, x - Math.sign(x) * 0.2, 2.25, z);
    const lx = x - Math.sign(x) * 0.4;
    add(new THREE.BoxGeometry(0.2, 0.28, 0.2), iron, lx, 1.98, z);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex.glow, color: 0xffc860, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.8 }));
    glow.position.set(lx, 1.98, z);
    glow.scale.setScalar(0.9);
    scene.add(glow);
    const light = new THREE.PointLight(0xffc45a, 7, 10, 2);
    light.position.set(lx, 1.9, z);
    scene.add(light);
    flickers.push({ light, glow, base: 7, phase: rand() * 10 });
    world.circles.push({ x, z, r: 0.25 });
  }

  // ---------- ground mist ----------
  for (let i = 0; i < 16; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex.mist, color: 0xb8b8a0, transparent: true, opacity: 0.16, depthWrite: false }));
    s.position.set((rand() - 0.5) * G * 2, 0.7 + rand() * 0.6, (rand() - 0.5) * G * 2);
    s.scale.set(9 + rand() * 5, 3 + rand() * 1.5, 1);
    scene.add(s);
    mists.push({ sprite: s, vx: (rand() - 0.5) * 0.3, vz: (rand() - 0.5) * 0.3 });
  }

  world.moon = moon;
  world.update = (dt, t, calm) => {
    const amp = calm ? 0.05 : 0.14;
    for (const f of flickers) {
      const k = 1 - amp + amp * (Math.sin(t * 11 + f.phase) * 0.5 + Math.sin(t * 6.7 + f.phase * 2) * 0.5);
      f.light.intensity = f.base * k;
      if (f.glow) f.glow.material.opacity = 0.8 * k;
    }
    for (const m of mists) {
      m.sprite.position.x += m.vx * dt;
      m.sprite.position.z += m.vz * dt;
      if (Math.abs(m.sprite.position.x) > G + 4) m.vx *= -1;
      if (Math.abs(m.sprite.position.z) > G + 4) m.vz *= -1;
    }
    for (const l of world.loot) {
      if (l.searched) continue;
      l.sprite.material.opacity = 0.45 + 0.4 * Math.sin(t * 2.2 + l.phase);
    }
  };
  return world;
}
