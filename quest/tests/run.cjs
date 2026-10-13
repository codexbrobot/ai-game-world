// Runs the browser tests: serves quest/ on a free port, opens each spec in a phone-sized headless Chromium,
// and reports every check. `node quest/tests/run.cjs` runs them all; name some to run just those
// (`node quest/tests/run.cjs hollow broken`); `--shots DIR` saves screenshots there.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { makeT } = require('./lib.cjs');

const ROOT = path.resolve(__dirname, '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2' };

function serve() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.join(ROOT, url === '/' ? 'index.html' : url);
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const args = process.argv.slice(2);
  const shotsAt = args.indexOf('--shots');
  const shots = shotsAt >= 0 ? path.resolve(args.splice(shotsAt, 2)[1]) : null;
  if (shots) fs.mkdirSync(shots, { recursive: true });
  const all = fs.readdirSync(path.join(__dirname, 'specs')).filter((f) => f.endsWith('.cjs')).sort();
  const pick = args.length ? all.filter((f) => args.some((a) => f.replace(/^\d+-/, '').replace('.cjs', '') === a || f === a)) : all;
  if (!pick.length) { console.error('No such test. There are:', all.join(', ')); process.exit(2); }

  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  let failed = 0, passed = 0;
  for (const file of pick) {
    const spec = require(path.join(__dirname, 'specs', file));
    const page = await browser.newPage({ viewport: { width: 420, height: 860 } });
    const fails = [];
    const t = makeT(page, base, (ok, label, seen) => {
      if (ok === null) { console.log(`    ${label}`); return; }
      if (ok) { passed += 1; console.log(`  ✓ ${label}`); } else { failed += 1; fails.push(label); console.log(`  ✗ ${label}${seen !== undefined ? `\n      saw: ${typeof seen === 'string' ? seen : JSON.stringify(seen)}` : ''}`); }
    });
    t.shots = shots;
    const started = Date.now();
    console.log(`\n${spec.name}`);
    try {
      await spec.run(t);
    } catch (e) {
      failed += 1;
      console.log(`  ✗ crashed: ${e.message.split('\n')[0]}`);
    }
    if (t.errors.length) { failed += 1; console.log(`  ✗ errors in the page:\n      ${t.errors.join('\n      ')}`); } else { passed += 1; console.log('  ✓ no errors in the page'); }
    console.log(`  (${Math.round((Date.now() - started) / 1000)}s)`);
    await page.close();
  }
  await browser.close();
  server.close();
  console.log(`\n${passed} passed, ${failed} failed`);
  process.exit(failed ? 1 : 0);
})();
