// The DM's voice: every paragraph of narration the game can show was recorded once (quest/voice/, made with
// ElevenLabs). When a box opens, its paragraphs are matched to their recordings and played in order.
//
// A paragraph is matched by its words alone: tags, quote marks and case don't count, the wretches' names
// count as one stand-in (⟪n⟫), and so does every number, unless a pattern in quest/voice/spoken.json asks
// for it. The recordings come in small bundles (assets/voice/*.webm), fetched the first time one is needed.
//
// Q.Voice.speak(el)        play the narration for the paragraphs in el (the modal body)
// Q.Voice.stop()           stop talking (the box closed)
// Q.Voice.setNames(list)   the names to stand in as ⟪n⟫: the party's, full and first
// Q.Voice.enabled / volume remembered in the browser; Q.Voice.set({ enabled, volume })
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
})();
