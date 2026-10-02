// Painted-style SVG portraits, generated from a seed so every wretch and every undead looks different.
// All portraits share a 120 × 140 canvas and are lit by torchlight from the left.

let uid = 0;

function rng(seed) {
  let h = 2166136261;
  for (const ch of String(seed)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = (h + 0x6d2b79f5) | 0;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const hex = (n) => (typeof n === 'number' ? '#' + n.toString(16).padStart(6, '0') : n);

// Darken or lighten a #rrggbb colour by a factor.
function shade(color, k) {
  const n = parseInt(hex(color).slice(1), 16);
  const f = (c) => Math.max(0, Math.min(255, Math.round(c * k)));
  return '#' + [f(n >> 16), f((n >> 8) & 255), f(n & 255)].map((c) => c.toString(16).padStart(2, '0')).join('');
}

// Background, vignette, film grain and glow filter shared by every portrait.
function frame(p, seed, bgInner, body) {
  return `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <radialGradient id="${p}bg" cx="32%" cy="30%" r="85%"><stop offset="0" stop-color="${bgInner}"/><stop offset=".55" stop-color="#1b1611"/><stop offset="1" stop-color="#060504"/></radialGradient>
    <radialGradient id="${p}vig" cx="50%" cy="45%" r="72%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".8"/></radialGradient>
    <filter id="${p}noise" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${seed}"/><feColorMatrix type="saturate" values="0"/></filter>
    <filter id="${p}glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="1.6"/></filter>
  </defs>
  <rect width="120" height="140" fill="url(#${p}bg)"/>
  ${body}
  <rect width="120" height="140" filter="url(#${p}noise)" opacity=".22" style="mix-blend-mode:multiply"/>
  <rect width="120" height="140" fill="url(#${p}vig)"/>
</svg>`;
}

// ---------- the wretch ----------
export function wretchPortrait(pc, { bloodied = false } = {}) {
  const r = rng(pc.name);
  const pick = (a) => a[Math.floor(r() * a.length)];
  const p = `pw${uid++}`;
  const hood = pick(['#2e2923', '#2f3328', '#3a2522', '#272a30', '#3b3226']);
  const [skin, skinShade] = pick([['#c9a582', '#7d5a3e'], ['#b58f6c', '#654631'], ['#a88a74', '#574232'], ['#d1b193', '#83624a']]);
  const beard = r() < 0.45, scar = r() < 0.5, stitched = r() < 0.2;
  const browTilt = (r() - 0.3) * 4;
  const mouthCurve = 87 + r() * 2.5;
  const lostEye = pc.lostEye;
  const faceW = 0.88 + r() * 0.24; // narrow and gaunt to broad
  const wrinkles = r() < 0.6, wart = r() < 0.3, grime = 0.15 + r() * 0.3;

  const eye = (x) => `<ellipse cx="${x}" cy="64" rx="5.5" ry="3.6" fill="#1a0e08" opacity=".8"/>
    <ellipse cx="${x}" cy="64.3" rx="2.7" ry="1.4" fill="#d6c9ae"/>
    <circle cx="${x + 0.3}" cy="64.3" r="1.25" fill="#20160f"/>
    <circle cx="${x - 0.5}" cy="63.8" r=".45" fill="#fff" opacity=".8"/>
    <path d="M${x - 3.4} 63.4 Q${x} 61.6 ${x + 3.4} 63.4" stroke="#241208" stroke-width="1.4" fill="none"/>
    <path d="M${x - 3} 67.4 Q${x} 68.6 ${x + 3} 67.4" stroke="#241208" stroke-width=".7" fill="none" opacity=".6"/>`;
  const rightEye = lostEye
    ? `<ellipse cx="68" cy="64" rx="6" ry="4.6" fill="#0c0806"/><path d="M42 55 L82 70" stroke="#1a120c" stroke-width="1.6"/>`
    : eye(68);

  const body = `
  <path d="M0 140 L0 120 C12 101 32 94 60 94 C88 94 108 101 120 120 L120 140Z" fill="${shade(hood, 0.8)}"/>
  <linearGradient id="${p}hood" x1="0" x2="1"><stop offset="0" stop-color="${shade(hood, 1.7)}"/><stop offset=".45" stop-color="${hood}"/><stop offset="1" stop-color="${shade(hood, 0.55)}"/></linearGradient>
  <path d="M60 13 C29 13 17 44 19 77 C20 97 30 109 38 117 L82 117 C90 109 100 97 101 77 C103 44 91 13 60 13Z" fill="url(#${p}hood)"/>
  <path d="M60 29 C42 29 33 50 34 72 C35 91 46 105 60 107 C74 105 85 91 86 72 C87 50 78 29 60 29Z" fill="#0b0907"/>
  <linearGradient id="${p}skin" x1="0" x2="1"><stop offset="0" stop-color="${skin}"/><stop offset=".55" stop-color="${skinShade}"/><stop offset="1" stop-color="#1c120c"/></linearGradient>
  <g transform="translate(60 0) scale(${faceW} 1) translate(-60 0)">
  <path d="M60 41 C47 41 41 53 41 67 C41 83 49 97 60 99 C71 97 79 83 79 67 C79 53 73 41 60 41Z" fill="url(#${p}skin)"/>
  <ellipse cx="60" cy="43" rx="23" ry="10" fill="#0b0907" opacity=".92"/>
  <ellipse cx="49" cy="79" rx="5" ry="7" fill="#1c120c" opacity=".22"/>
  <ellipse cx="71" cy="79" rx="5" ry="7" fill="#0c0806" opacity=".35"/>
  ${eye(52)}
  ${rightEye}
  <path d="M46 ${58 + browTilt} Q52 ${56 - browTilt / 2} 57 58.5" stroke="#1d130c" stroke-width="2" fill="none" stroke-linecap="round"/>
  ${lostEye ? '' : `<path d="M63 58.5 Q68 ${56 - browTilt / 2} 74 ${58 + browTilt}" stroke="#1d130c" stroke-width="2" fill="none" stroke-linecap="round"/>`}
  <path d="M60 63 L56.5 77.5 Q60 80 63.5 77.5" stroke="${shade(skinShade, 0.7)}" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <path d="M60.5 64 L63.5 77" stroke="#1c120c" stroke-width="2.2" opacity=".35"/>
  ${beard ? `<path d="M43 79 C45 95 53 102 60 102 C67 102 75 95 77 79 C72 90 66 93 60 93 C54 93 48 90 43 79Z" fill="#231a13" opacity=".85"/>` : ''}
  <path d="M53 87 Q60 ${mouthCurve} 67 87" stroke="#3a1f18" stroke-width="1.7" fill="none" stroke-linecap="round"/>
  ${scar ? `<path d="M${44 + r() * 4} ${66 + r() * 4} L${54 + r() * 4} ${84 + r() * 4}" stroke="#8a4a42" stroke-width="1.3"/>` : ''}
  ${stitched ? `<path d="M48 70 l4 1 M49 74 l4 1 M50 78 l4 1" stroke="#2a1a12" stroke-width=".9"/>` : ''}
  ${bloodied ? `<path d="M52 49 C51 58 50 66 51 74 C51.5 78 53 78 53 74 C53 66 54 58 55 50Z" fill="#7a0f0a" opacity=".85"/>
    <path d="M70 83 C70 88 69 93 70 97 C70.5 99 72 99 72 96 C72 92 72 87 71.5 83Z" fill="#7a0f0a" opacity=".8"/>` : ''}
  ${wrinkles ? `<path d="M50 53 Q60 51 70 53 M52 56 Q60 54.5 68 56 M45 70 Q47 74 46 79 M75 70 Q73 74 74 79" stroke="#2a180e" stroke-width=".7" fill="none" opacity=".55"/>` : ''}
  ${wart ? `<circle cx="${48 + r() * 24}" cy="${72 + r() * 14}" r="1.3" fill="${shade(skinShade, 0.8)}"/>` : ''}
  <ellipse cx="${50 + r() * 20}" cy="${72 + r() * 16}" rx="9" ry="6" fill="#2a2016" opacity="${grime}"/>
  </g>
  <path d="M26 50 C21 64 21 82 27 98" stroke="#d69a4a" stroke-width="2" fill="none" opacity=".35"/>`;
  return frame(p, Math.floor(r() * 999), '#4b3f2b', body);
}

// ---------- the Rotting Dead ----------
export function zombiePortrait(seed, skinColor = 0x7f8a66) {
  const r = rng('z' + seed);
  const p = `pz${uid++}`;
  const skin = hex(skinColor);
  const tilt = -10 + r() * 20;
  const tornLeft = r() < 0.5;
  const lesions = Array.from({ length: 5 + Math.floor(r() * 4) }, () =>
    `<ellipse cx="${40 + r() * 40}" cy="${45 + r() * 50}" rx="${1.5 + r() * 4}" ry="${1 + r() * 3}" fill="#3a2230" opacity="${0.35 + r() * 0.35}"/>`).join('');
  const hair = Array.from({ length: 6 }, () => {
    const x = 42 + r() * 36;
    return `<path d="M${x} 32 C${x - 6 + r() * 12} 48 ${x - 8 + r() * 16} 60 ${x - 4 + r() * 8} ${66 + r() * 16}" stroke="#1e1a14" stroke-width="${0.8 + r()}" fill="none"/>`;
  }).join('');
  const tx = tornLeft ? 44 : 64;
  const body = `
  <path d="M0 140 L0 122 C14 104 34 98 60 98 C86 98 106 104 120 122 L120 140Z" fill="#2c2a22"/>
  <path d="M22 140 L30 110 L38 124 L46 106 L54 126 L62 108 L70 125 L80 107 L90 124 L98 140Z" fill="#221f19"/>
  <path d="M50 96 L50 110 L70 110 L70 96Z" fill="${shade(skin, 0.6)}"/>
  <g transform="rotate(${tilt} 60 70)">
    <linearGradient id="${p}skin" x1="0" x2="1"><stop offset="0" stop-color="${shade(skin, 1.25)}"/><stop offset=".55" stop-color="${shade(skin, 0.75)}"/><stop offset="1" stop-color="#12140e"/></linearGradient>
    <path d="M60 28 C42 28 34 44 35 64 C36 84 45 101 60 103 C75 101 84 84 85 64 C86 44 78 28 60 28Z" fill="url(#${p}skin)"/>
    ${lesions}
    <ellipse cx="50" cy="60" rx="8" ry="6.5" fill="#0a0806"/>
    <ellipse cx="70" cy="61" rx="7.5" ry="7" fill="#0a0806"/>
    <circle cx="51" cy="60.5" r="2.4" fill="#f0e060" filter="url(#${p}glow)"/>
    <circle cx="51" cy="60.5" r="1.1" fill="#fff6b0"/>
    <circle cx="69.5" cy="61.5" r="2.2" fill="#f0e060" filter="url(#${p}glow)"/>
    <circle cx="69.5" cy="61.5" r="1" fill="#fff6b0"/>
    <path d="M57 72 L55.5 78 M63 72 L64.5 78" stroke="#0a0806" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="60" cy="90" rx="10" ry="7" fill="#0c0706"/>
    <path d="M51 86 h18 v3 h-18z" fill="#c9bb8e"/>
    <path d="M54 86 v3 M57 86 v3 M60 86 v3 M63 86 v3 M66 86 v3" stroke="#3a2e1e" stroke-width=".6"/>
    <path d="M${tx} 78 C${tx - 3} 86 ${tx} 95 ${tx + 12} 96 C${tx + 10} 90 ${tx + 10} 84 ${tx + 6} 78Z" fill="#4a1414"/>
    <path d="M${tx + 2} 85 v4 M${tx + 5} 86 v4 M${tx + 8} 86 v4" stroke="#d8cca4" stroke-width="1.6"/>
    ${hair}
  </g>
  <rect width="120" height="140" fill="#5a6a30" opacity=".16" style="mix-blend-mode:multiply"/>`;
  return frame(p, Math.floor(r() * 999), '#39402a', body);
}

// ---------- the Rattling Skeleton ----------
export function skeletonPortrait(seed) {
  const r = rng('s' + seed);
  const p = `ps${uid++}`;
  const helm = r() < 0.4;
  const missing = Math.floor(r() * 6);
  const crack = `M${50 + r() * 20} 30 L${48 + r() * 24} 42 L${44 + r() * 30} 50`;
  const teeth = Array.from({ length: 6 }, (_, i) => (i === missing ? '' : `<rect x="${51 + i * 3.1}" y="84" width="2.6" height="5" rx=".6" fill="#e6dcc2"/>`)).join('');
  const lower = Array.from({ length: 6 }, (_, i) => `<rect x="${51.5 + i * 3}" y="92" width="2.5" height="4" rx=".6" fill="#d6cbb0"/>`).join('');
  const body = `
  <path d="M20 140 C24 118 36 110 60 110 C84 110 96 118 100 140Z" fill="#0d0b09"/>
  <path d="M28 118 Q44 110 58 114 M92 118 Q76 110 62 114" stroke="#c8bc9e" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M60 104 V140" stroke="#b9ad8f" stroke-width="4"/>
  <path d="M44 128 Q60 122 76 128 M46 136 Q60 130 74 136" stroke="#b0a486" stroke-width="2.4" fill="none"/>
  <linearGradient id="${p}bone" x1="0" x2="1"><stop offset="0" stop-color="#efe6cd"/><stop offset=".55" stop-color="#b3a88b"/><stop offset="1" stop-color="#3e382b"/></linearGradient>
  <path d="M60 24 C40 24 31 40 32 58 C33 70 38 76 42 80 L44 90 C46 95 52 98 60 98 C68 98 74 95 76 90 L78 80 C82 76 87 70 88 58 C89 40 80 24 60 24Z" fill="url(#${p}bone)"/>
  <path d="M40 78 C44 72 50 70 54 72 M80 78 C76 72 70 70 66 72" stroke="#6e6450" stroke-width="1.4" fill="none"/>
  <path d="M40 54 C40 48 46 45 51 46 C56 47 58 52 57 58 C56 64 51 67 46 66 C41 65 40 60 40 54Z" fill="#070504"/>
  <path d="M80 54 C80 48 74 45 69 46 C64 47 62 52 63 58 C64 64 69 67 74 66 C79 65 80 60 80 54Z" fill="#070504"/>
  <circle cx="49" cy="57" r="2.3" fill="#ffd54a" filter="url(#${p}glow)"/><circle cx="49" cy="57" r="1" fill="#fff3b8"/>
  <circle cx="71" cy="57" r="2.3" fill="#ffd54a" filter="url(#${p}glow)"/><circle cx="71" cy="57" r="1" fill="#fff3b8"/>
  <path d="M60 66 L56 76 Q60 79 64 76Z" fill="#0a0806"/>
  <path d="M47 83 H73" stroke="#6e6450" stroke-width="1"/>
  ${teeth}
  <path d="M46 91 C48 99 54 103 60 103 C66 103 72 99 74 91Z" fill="url(#${p}bone)"/>
  ${lower}
  <path d="${crack}" stroke="#2a241b" stroke-width="1.1" fill="none"/>
  ${helm ? `<linearGradient id="${p}rust" x1="0" x2="1"><stop offset="0" stop-color="#8a6242"/><stop offset=".6" stop-color="#5a3d27"/><stop offset="1" stop-color="#22160d"/></linearGradient>
    <path d="M30 50 C30 30 42 19 60 19 C78 19 90 30 90 50 Z" fill="url(#${p}rust)"/>
    <path d="M22 50 Q60 44 98 50 Q96 56 60 53 Q24 56 22 50Z" fill="#4a3220"/>
    <circle cx="44" cy="36" r="1.2" fill="#2a1a10"/><circle cx="60" cy="31" r="1.2" fill="#2a1a10"/><circle cx="76" cy="36" r="1.2" fill="#2a1a10"/>` : ''}`;
  return frame(p, Math.floor(r() * 999), '#35302a', body);
}
