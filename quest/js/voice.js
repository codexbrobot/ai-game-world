// The DM's voice: every paragraph of narration the game can show was recorded once (quest/voice/, made with
// ElevenLabs). When a box opens, its paragraphs are matched to their recordings and played in order.
//
// A paragraph is matched by its words alone: tags, quote marks and case don't count, the wretches' names
// count as one stand-in (⟪n⟫), and so does every number, unless a pattern in quest/voice/spoken.json asks
// for it. The recordings come in small bundles (assets/voice/*.webm), fetched the first time one is needed.
//
// Q.Voice.speak(el, names)  play the narration for the paragraphs in el (the modal body); names are the
//                           wretches' names, full and first, that stand in as ⟪n⟫
// Q.Voice.stop()            stop talking (the box closed)
// Q.Voice.find(text, names) which recording a paragraph gets (an index into Q.VOICE.clips), or -1
// Q.Voice.enabled / volume  remembered in the browser; Q.Voice.set({ enabled, volume })
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  // ---------- matching (shared with quest/tools/voice/, which loads this file to build the script) ----------
  function plain(html) {
    return String(html)
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
      .replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[—–−]/g, '-').replace(/…/g, '...')
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // names as ⟪n⟫, longest first so "Hagar the Cruel" goes before "Hagar"
  function unname(text, names) {
    let t = text;
    for (const n of names.slice().sort((a, b) => b.length - a.length)) {
      if (!n) continue;
      t = t.replace(new RegExp(`(?<![\\p{L}\\p{N}])${escRe(n.toLowerCase())}(?![\\p{L}\\p{N}])`, 'gu'), '⟪n⟫');
    }
    return t;
  }
  // the key of a paragraph: its plain words, with every number the same
  const keyOf = (text) => text.replace(/\d+/g, '#');

  const api = { plain, unname, keyOf };
  Q.Voice = api;
  if (typeof document === 'undefined') return; // the build tools stop here

  // ---------- finding a paragraph's recording ----------
  let names = [];
  let compiled = null;
  function find(text, who = names) {
    const data = Q.VOICE;
    if (!data) return -1;
    if (!compiled) compiled = data.patterns.map(([re, ix]) => [new RegExp(re, 'u'), ix]);
    const p = plain(text);
    // with the wretches' names as ⟪n⟫, then as they stand (a name can be a word the story uses too)
    for (const t of who.length ? [unname(p, who), p] : [p]) {
      const k = keyOf(t);
      if (Object.prototype.hasOwnProperty.call(data.keys, k)) return data.keys[k];
      // the patterns from spoken.json read the numbers; the ones from the script have them as #
      for (const [re, ix] of compiled) if (re.test(t) || re.test(k)) return ix;
    }
    return -1;
  }
  // the narration in a box: its paragraphs, not the small print
  const paragraphs = (el) => [...el.querySelectorAll('p')].filter((p) => !p.closest('.small, .dim, small')).map((p) => p.textContent);

  // ---------- playing ----------
  const PREF = 'quest-voice';
  const GAP = 350; // ms between paragraphs
  let enabled = true, volume = 1;
  try {
    const saved = JSON.parse(localStorage.getItem(PREF) || '{}');
    if (saved.enabled === false) enabled = false;
    if (typeof saved.volume === 'number') volume = Math.max(0, Math.min(1, saved.volume));
  } catch (e) { /* storage may be unavailable */ }
  let canPlay = false;
  try { canPlay = !!new Audio().canPlayType('audio/webm; codecs="opus"'); } catch (e) { /* no audio here */ }

  const bundles = new Map(); // bundle name -> Promise<ArrayBuffer | null>
  function bundle(name) {
    if (!bundles.has(name)) {
      const p = fetch(`assets/voice/${name}.webm`).then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null);
      bundles.set(name, p);
      p.then((buf) => { if (!buf) bundles.delete(name); }); // try again next time
    }
    return bundles.get(name);
  }

  let turn = 0; // each speak() has its own; anything older stops at its next step
  let audio = null, url = null, finish = null;
  const hush = (on) => { if (Q.Sound && Q.Sound.hush) Q.Sound.hush(on); };

  function stop() {
    turn += 1;
    if (audio) { audio.onended = audio.onerror = null; audio.pause(); audio = null; }
    if (url) { URL.revokeObjectURL(url); url = null; }
    if (finish) { finish(); finish = null; }
    hush(false);
  }

  async function play(ix, mine) {
    const [b, off, len] = Q.VOICE.clips[ix];
    const buf = await bundle(Q.VOICE.bundles[b]);
    if (mine !== turn || !buf) return;
    url = URL.createObjectURL(new Blob([buf.slice(off, off + len)], { type: 'audio/webm' }));
    audio = new Audio(url);
    audio.volume = volume;
    await new Promise((resolve) => {
      finish = resolve;
      audio.onended = audio.onerror = resolve;
      audio.play().catch(resolve); // no gesture yet, or no audio: carry on quietly
    });
    finish = null;
    if (mine !== turn) return;
    URL.revokeObjectURL(url);
    url = null;
    audio = null;
  }

  async function speak(el, who) {
    stop();
    if (who) names = [...new Set(who.filter(Boolean))];
    if (!enabled || !canPlay || !Q.VOICE || !el || (Q.Sound && !Q.Sound.on)) return;
    const clips = paragraphs(el).map((t) => find(t)).filter((ix) => ix >= 0);
    if (!clips.length) return;
    const mine = turn;
    hush(true);
    for (let n = 0; n < clips.length; n++) {
      if (n) await new Promise((r) => setTimeout(r, GAP));
      if (mine !== turn) return;
      await play(clips[n], mine);
      if (mine !== turn) return;
    }
    hush(false);
  }

  function set(o) {
    if ('enabled' in o) { enabled = !!o.enabled; if (!enabled) stop(); }
    if ('volume' in o) { volume = Math.max(0, Math.min(1, +o.volume || 0)); if (audio) audio.volume = volume; }
    try { localStorage.setItem(PREF, JSON.stringify({ enabled, volume })); } catch (e) { /* ignore */ }
  }

  Object.defineProperties(api, Object.getOwnPropertyDescriptors({
    find, speak, stop, set,
    get enabled() { return enabled; },
    get volume() { return volume; },
    get speaking() { return !!audio && !audio.paused; },
    get supported() { return canPlay; },
  }));
})();
