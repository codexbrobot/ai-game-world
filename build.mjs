// Bundles the game into a single HTML file.
//   dist/wretch.html  page fragment for publishing as a claude.ai artifact
//   dist/index.html   standalone page (open locally or host anywhere, e.g. GitHub Pages)
import * as esbuild from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const result = await esbuild.build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: 'es2020',
  write: false,
});
const script = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const style = readFileSync('src/style.css', 'utf8');
const fragment = readFileSync('src/index.html', 'utf8')
  .replace('/*STYLE*/', () => style)
  .replace('/*SCRIPT*/', () => script);

const standalone = '<!doctype html><html lang="en"><head><meta charset="utf-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  + '</head><body>' + fragment + '</body></html>';

mkdirSync('dist', { recursive: true });
writeFileSync('dist/wretch.html', fragment);
writeFileSync('dist/index.html', standalone);
console.log(`Built dist/wretch.html (${(fragment.length / 1024).toFixed(0)} KB)`);
