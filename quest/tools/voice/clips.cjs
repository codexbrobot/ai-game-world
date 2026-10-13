// Recording the script, a batch at a time, through the ElevenLabs connector in a Claude Code session.
//
//   node quest/tools/voice/clips.cjs todo [n]   the next n lines nobody has recorded yet (id, then the words)
//   node quest/tools/voice/clips.cjs fetch      find the finished recordings in this session's transcript,
//                                               download them and squeeze them into quest/voice/clips/<id>.webm
//   node quest/tools/voice/clips.cjs status     how far along the script is
//
// The connector hands back each recording as a signed link (good for two hours) in the result of
// creative_get_flow_run_status, and the session's transcript keeps those results, so fetch reads them from
// there instead of anyone copying links by hand. A recording is matched to its line by its words.
//
// quest/voice/clips/ is a cache; the recordings that ship are the bundles in assets/voice/ (bundle.cjs).
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const QUEST = path.join(__dirname, '..', '..');
const SCRIPT = path.join(QUEST, 'voice', 'script.json');
const CLIPS = path.join(QUEST, 'voice', 'clips');
const GENERATED = path.join(QUEST, 'voice', 'generated.json'); // id -> ElevenLabs generation id
const BUNDLES = path.join(QUEST, 'voice', 'bundled.json'); // id -> [bundle, offset, length], from bundle.cjs

const flat = (s) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
const script = JSON.parse(fs.readFileSync(SCRIPT, 'utf8'));
const byWords = new Map(script.map((l) => [flat(l.say), l.id]));
const lines = [...new Map(script.map((l) => [l.id, l])).values()];
const generated = fs.existsSync(GENERATED) ? JSON.parse(fs.readFileSync(GENERATED, 'utf8')) : {};
const bundled = fs.existsSync(BUNDLES) ? JSON.parse(fs.readFileSync(BUNDLES, 'utf8')) : {};
const have = (id) => fs.existsSync(path.join(CLIPS, `${id}.webm`)) || id in bundled;

function transcripts() {
  const dir = path.join(os.homedir(), '.claude', 'projects');
  const out = [];
  const visit = (d) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) visit(p); else if (e.name.endsWith('.jsonl')) out.push(p); } };
  visit(dir);
  return out;
}

// every audio the connector reported, oldest first: { generation_id, url, prompt }
function recordings() {
  const found = [];
  const dig = (v) => {
    if (typeof v === 'string') {
      if (v.includes('"media"') && v.includes('content_generation')) { try { dig(JSON.parse(v)); } catch (e) { /* not JSON */ } }
      return;
    }
    if (Array.isArray(v)) { v.forEach(dig); return; }
    if (v && typeof v === 'object') {
      if (Array.isArray(v.media)) for (const m of v.media) if (m.kind === 'audio' && m.url && m.prompt) found.push(m);
      for (const k of Object.keys(v)) if (k !== 'media') dig(v[k]);
    }
  };
  for (const f of transcripts()) {
    for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
      if (!line.includes('content_generation') || !line.includes('media')) continue;
      try { dig(JSON.parse(line)); } catch (e) { /* a partial line */ }
    }
  }
  return found;
}

function squeeze(mp3, webm) {
  // trim the silence at both ends (the player puts its own pause between paragraphs), then Opus for speech
  const trim = 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.08,areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.12,areverse';
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', mp3, '-af', trim, '-ac', '1', '-c:a', 'libopus', '-b:a', '16k', '-application', 'voip', '-vbr', 'on', webm]);
}

function fetchAll() {
  fs.mkdirSync(CLIPS, { recursive: true });
  const latest = new Map();
  let strangers = 0;
  for (const m of recordings()) {
    const id = byWords.get(flat(m.prompt));
    if (!id) { strangers += 1; continue; }
    latest.set(id, m);
    generated[id] = m.generation_id;
  }
  fs.writeFileSync(GENERATED, JSON.stringify(generated, null, 1) + '\n');
  let got = 0, expired = [];
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'voice-'));
  for (const [id, m] of latest) {
    if (have(id)) continue;
    const mp3 = path.join(tmp, `${id}.mp3`);
    try {
      execFileSync('curl', ['-sSf', '-o', mp3, m.url]);
      squeeze(mp3, path.join(CLIPS, `${id}.webm`));
      got += 1;
    } catch (e) { expired.push(id); }
  }
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`fetched ${got}; ${expired.length ? `link expired or failed for ${expired.join(' ')} (poll its run again)` : 'nothing failed'}${strangers ? `; ${strangers} recordings match no line (old samples, or the script changed)` : ''}`);
  status();
}

function status() {
  const done = lines.filter((l) => have(l.id)).length;
  const waiting = lines.filter((l) => !have(l.id) && generated[l.id]).length;
  const chars = lines.filter((l) => !have(l.id) && !generated[l.id]).reduce((n, l) => n + l.say.length, 0);
  console.log(`${done} of ${lines.length} recorded, ${waiting} generated but not downloaded, ${lines.length - done - waiting} to go (${chars} characters)`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === 'todo') {
  const next = lines.filter((l) => !have(l.id) && !generated[l.id]).slice(0, +arg || 10);
  for (const l of next) console.log(`${l.id}\t${l.say}`);
} else if (cmd === 'fetch') fetchAll();
else status();
