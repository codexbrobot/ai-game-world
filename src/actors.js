// Character models built from primitives, and their animation.
// Every model shares one rig: root (feet) > hips (legs) + body (torso, head, arms).
import * as THREE from 'three';

const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...extra });

function add(parent, geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

// A cylinder lying along +z, starting at z0.
const rod = (r, len) => new THREE.CylinderGeometry(r, r, len, 6).rotateX(Math.PI / 2);

function rig(o) {
  const root = new THREE.Group();
  root.rotation.order = 'YXZ'; // tip over relative to where the actor faces
  const body = new THREE.Group();
  root.add(body);
  const legGeo = new THREE.CapsuleGeometry(o.legR, 0.42, 4, 8);
  const footGeo = new THREE.BoxGeometry(0.14, 0.08, 0.25);
  const hips = [-0.13, 0.13].map((x) => {
    const hip = new THREE.Group();
    hip.position.set(x, 0.8, 0);
    root.add(hip);
    add(hip, legGeo, o.legMat, 0, -0.38, 0);
    add(hip, footGeo, o.footMat, 0, -0.76, 0.05);
    return hip;
  });
  const armGeo = new THREE.CapsuleGeometry(o.armR, 0.4, 4, 8);
  const arm = (x) => {
    const s = new THREE.Group();
    s.position.set(x, 1.38, 0);
    body.add(s);
    add(s, armGeo, o.armMat, 0, -0.27, 0);
    add(s, new THREE.SphereGeometry(o.armR * 0.95 + 0.01, 8, 6), o.handMat, 0, -0.55, 0.02);
    return s;
  };
  return { root, body, hips, armL: arm(-o.shoulder), armR: arm(o.shoulder), walk: 0 };
}

// Weapon held in the hand, pointing along +z.
function weapon(name, parent) {
  const g = new THREE.Group();
  g.position.set(0, -0.56, 0.04);
  parent.add(g);
  const iron = std(0x9a9892, { metalness: 0.85, roughness: 0.35 });
  const rust = std(0x6b4a32, { metalness: 0.5, roughness: 0.7 });
  const wood = std(0x5a4430);
  const leather = std(0x3a2a1d);
  const bone = std(0xd8cfb4, { roughness: 0.7 });
  const blade = (w, len, mat = iron) => add(g, new THREE.BoxGeometry(w, 0.016, len), mat, 0, 0, 0.12 + len / 2);
  const grip = (len = 0.2) => add(g, rod(0.022, len), leather, 0, 0, 0);
  const guard = (w) => add(g, new THREE.BoxGeometry(w, 0.04, 0.04), iron, 0, 0, 0.11);
  switch (name) {
    case 'Femur':
      add(g, rod(0.032, 0.6), bone, 0, 0, 0.2);
      for (const z of [-0.1, 0.5]) add(g, new THREE.SphereGeometry(0.055, 8, 6), bone, 0, 0, z);
      break;
    case 'Staff':
      add(g, rod(0.028, 1.7), wood, 0, 0, 0.25);
      break;
    case 'Knife':
      grip(0.14);
      blade(0.04, 0.26);
      break;
    case 'Shortsword':
      grip();
      guard(0.18);
      blade(0.055, 0.5);
      break;
    case 'Sword':
      grip();
      guard(0.28);
      blade(0.065, 0.8);
      add(g, new THREE.SphereGeometry(0.035, 8, 6), iron, 0, 0, -0.12);
      break;
    case 'Warhammer':
      add(g, rod(0.024, 0.8), wood, 0, 0, 0.28);
      add(g, new THREE.BoxGeometry(0.28, 0.11, 0.11), iron, 0, 0, 0.64);
      break;
    case 'Flail':
      add(g, rod(0.026, 0.45), wood, 0, 0, 0.15);
      for (let i = 0; i < 3; i++) add(g, new THREE.TorusGeometry(0.02, 0.007, 4, 8), iron, 0, 0, 0.4 + i * 0.045);
      add(g, new THREE.IcosahedronGeometry(0.09, 0), iron, 0, 0, 0.58);
      break;
    case 'Zweihänder':
      grip(0.32);
      guard(0.38);
      blade(0.08, 1.15);
      break;
    case 'Rusted blade':
      grip();
      guard(0.16);
      blade(0.06, 0.6, rust);
      break;
    default:
      grip();
  }
  return g;
}

function cape(body, mat, width, len, y, z) {
  const geo = new THREE.PlaneGeometry(width, len, 1, 4);
  geo.translate(0, -len / 2, 0);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setX(i, p.getX(i) * (0.6 - p.getY(i) * 0.5));
  return add(body, geo, mat, 0, y, z);
}

export function makeWretch(weaponName) {
  const cloak = std(0x2b2722, { roughness: 0.95, side: THREE.DoubleSide });
  const cloth = std(0x4a4032);
  const leather = std(0x3a2a1d);
  const skin = std(0xb59c80);
  const a = rig({ legR: 0.11, armR: 0.085, shoulder: 0.34, legMat: cloth, footMat: leather, armMat: cloth, handMat: skin });
  add(a.body, new THREE.CapsuleGeometry(0.25, 0.38, 6, 12), cloth, 0, 1.16, 0).scale.set(1, 1, 0.75);
  add(a.body, new THREE.CylinderGeometry(0.3, 0.44, 0.95, 12, 1, true), cloak, 0, 1.02, -0.02);
  const belt = add(a.body, new THREE.TorusGeometry(0.25, 0.03, 6, 18), leather, 0, 0.86, 0);
  belt.rotation.x = Math.PI / 2;
  belt.scale.set(1, 0.76, 1);
  add(a.body, new THREE.SphereGeometry(0.23, 14, 10), cloak, 0, 1.72, -0.02).scale.set(1, 1.12, 1.05);
  add(a.body, new THREE.ConeGeometry(0.12, 0.34, 8), cloak, 0, 1.85, -0.2).rotation.x = -1.1;
  add(a.body, new THREE.CircleGeometry(0.13, 16), new THREE.MeshBasicMaterial({ color: 0x050505 }), 0, 1.7, 0.225);
  a.cape = cape(a.body, cloak, 0.6, 1.15, 1.5, -0.22);
  weapon(weaponName, a.armR);
  return Object.assign(a, { kind: 'wretch', restL: -0.1, restR: -0.3 });
}

export function makeZombie(rand) {
  const skinHex = [0x7f8a66, 0x8a8a6a, 0x6f7a5c][Math.floor(rand() * 3)];
  const skin = std(skinHex);
  const rags = std([0x3b3428, 0x2f3a3a, 0x40342c][Math.floor(rand() * 3)], { side: THREE.DoubleSide, roughness: 1 });
  const a = rig({ legR: 0.1, armR: 0.075, shoulder: 0.32, legMat: rags, footMat: skin, armMat: skin, handMat: skin });
  add(a.body, new THREE.CapsuleGeometry(0.24, 0.36, 6, 12), rags, 0, 1.15, 0).scale.set(1, 1, 0.78);
  add(a.body, new THREE.BoxGeometry(0.2, 0.24, 0.05), std(0x5a3a30), 0.06, 1.2, 0.18); // the wound in its chest
  const head = new THREE.Group();
  head.position.set(0, 1.64, 0.06);
  head.rotation.z = 0.3;
  head.rotation.x = 0.2;
  a.body.add(head);
  add(head, new THREE.SphereGeometry(0.17, 12, 10), skin, 0, 0, 0).scale.set(0.95, 1.1, 1);
  add(head, new THREE.BoxGeometry(0.14, 0.05, 0.1), skin, 0, -0.16, 0.06).rotation.x = 0.4;
  const eye = new THREE.MeshBasicMaterial({ color: 0xd8d060 });
  for (const x of [-0.06, 0.06]) add(head, new THREE.SphereGeometry(0.022, 6, 4), eye, x, 0.02, 0.15);
  for (const [x, len] of [[-0.14, 0.5], [0.1, 0.38], [0.18, 0.44]]) {
    add(a.body, new THREE.PlaneGeometry(0.08, len), rags, x, 0.8 - len / 2 + 0.2, 0.18).rotation.x = 0.1;
  }
  a.body.rotation.x = 0.3;
  return Object.assign(a, { kind: 'zombie', restL: -1.3, restR: -1.2, skinHex });
}

export function makeSkeleton() {
  const bone = std(0xd8cfb3, { roughness: 0.7 });
  const a = rig({ legR: 0.045, armR: 0.04, shoulder: 0.3, legMat: bone, footMat: bone, armMat: bone, handMat: bone });
  add(a.body, new THREE.CylinderGeometry(0.035, 0.035, 0.7, 6), bone, 0, 1.15, -0.04);
  add(a.body, new THREE.BoxGeometry(0.32, 0.1, 0.14), bone, 0, 0.84, 0);
  for (let i = 0; i < 4; i++) {
    const rib = add(a.body, new THREE.TorusGeometry(0.16 - i * 0.012, 0.018, 4, 14), bone, 0, 1.16 + i * 0.075, 0);
    rib.rotation.x = Math.PI / 2;
    rib.scale.set(1, 0.72, 1);
  }
  add(a.body, new THREE.CylinderGeometry(0.02, 0.02, 0.6, 5), bone, 0, 1.42, 0).rotation.z = Math.PI / 2;
  const skull = new THREE.Group();
  skull.position.set(0, 1.66, 0);
  a.body.add(skull);
  add(skull, new THREE.SphereGeometry(0.15, 12, 10), bone, 0, 0, 0).scale.set(1, 1.1, 1.05);
  add(skull, new THREE.BoxGeometry(0.15, 0.05, 0.12), bone, 0, -0.13, 0.04);
  const socket = new THREE.MeshBasicMaterial({ color: 0x080604 });
  const ember = new THREE.MeshBasicMaterial({ color: 0xffd54a });
  for (const x of [-0.055, 0.055]) {
    add(skull, new THREE.SphereGeometry(0.042, 8, 6), socket, x, 0.01, 0.115);
    add(skull, new THREE.SphereGeometry(0.014, 6, 4), ember, x, 0.01, 0.14);
  }
  weapon('Rusted blade', a.armR);
  return Object.assign(a, { kind: 'skeleton', restL: -0.15, restR: -0.35 });
}

// Overhand chop: wind up, strike, recover. u runs 0 → 1.
export function swingAngle(u, rest) {
  if (u < 0.35) return lerp(rest, -2.8, ease(u / 0.35));
  if (u < 0.6) return lerp(-2.8, -0.45, ((u - 0.35) / 0.25) ** 2);
  return lerp(-0.45, rest, ease(Math.min(1, (u - 0.6) / 0.4)));
}

// actor: { parts, heading, phase, moving, swing (-1 when idle), seed, crouch }
export function animate(actor, dt, t) {
  const p = actor.parts;
  p.walk += ((actor.moving ? 1 : 0) - p.walk) * Math.min(1, dt * 8);
  const s = Math.sin(actor.phase) * p.walk;
  const stride = p.kind === 'zombie' ? 0.45 : 0.7;
  p.hips[0].rotation.x = s * stride;
  p.hips[1].rotation.x = -s * stride;
  p.body.position.y = Math.abs(Math.cos(actor.phase)) * 0.05 * p.walk;

  if (p.kind === 'zombie') {
    const sway = Math.sin(t * 1.3 + actor.seed) * 0.08;
    const lunge = actor.swing >= 0 ? Math.sin(Math.min(1, actor.swing) * Math.PI) : 0;
    p.armL.rotation.x = p.restL + sway + s * 0.15 - lunge * 0.5;
    p.armR.rotation.x = p.restR - sway - s * 0.15 - lunge * 0.5;
    p.body.rotation.x = 0.3 + lunge * 0.35;
    p.body.rotation.z = Math.sin(actor.phase * 0.5) * 0.08 * p.walk;
  } else {
    p.armL.rotation.x = p.restL - s * 0.5;
    const rest = p.restR + s * 0.4;
    p.armR.rotation.x = actor.swing >= 0 ? swingAngle(actor.swing, rest) : rest;
    p.body.rotation.y = actor.swing >= 0 ? Math.sin(Math.min(1, actor.swing) * Math.PI) * -0.25 : p.body.rotation.y * 0.9;
    p.body.rotation.x = lerp(p.body.rotation.x, actor.crouch ? 0.55 : 0, Math.min(1, dt * 8));
    if (p.kind === 'skeleton') p.body.rotation.z = Math.sin(t * 9 + actor.seed) * 0.02;
  }
  if (p.cape) p.cape.rotation.x = 0.2 + p.walk * 0.35;
  p.root.rotation.y = actor.heading;
}

// Fall backwards, lie still, then sink into the earth. Returns true when gone.
export function animateDeath(actor, dt) {
  const p = actor.parts;
  actor.deadT += dt;
  const k = ease(Math.min(1, actor.deadT / 0.55));
  p.root.rotation.x = -1.45 * k;
  p.root.position.y = 0.12 * k;
  if (actor.deadT > 5) p.root.position.y -= (actor.deadT - 5) * 0.3;
  return actor.deadT > 7;
}
