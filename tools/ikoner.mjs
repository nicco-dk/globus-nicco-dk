// Sætter kartoteket brand/ikoner ind i sitet (brandbogens kapitel 6).
//   node tools/ikoner.mjs          skriver ikonerne ind i siderne
//   node tools/ikoner.mjs --tjek   ændrer intet og melder fejl, hvis en side ikke svarer til kartoteket
// To steder i en side bliver fyldt ud:
//   1. <svg data-ikon="navn" ...></svg> i HTML får tegningen fra brand/ikoner/navn.svg.
//   2. Blokken mellem // IKONER START og // IKONER SLUT bliver til const IKON = { navn:'stien', ... }.
//      Cirkler bliver til buer i stien, så den kan bruges både i <path d> og i Path2D på kloden.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROD = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAPPE = join(ROD, 'brand', 'ikoner');
const SIDER = ['site/index.html', 'pause/konspirationer/index.html'];
const tjek = process.argv.includes('--tjek');

const tal = n => String(+(+n).toFixed(3));
const attr = (s, n) => (s.match(new RegExp(`\\b${n}="([^"]*)"`)) || [])[1];

const ikoner = {};
for (const f of readdirSync(MAPPE).filter(f => f.endsWith('.svg')).sort()) {
  const navn = f.slice(0, -4);
  const svg = readFileSync(join(MAPPE, f), 'utf8');
  const indre = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '').replace(/\s*\n\s*/g, '').trim();
  const d = [];
  for (const m of indre.matchAll(/<(path|circle)\b([^>]*)\/?>/g)) {
    if (m[1] === 'path') d.push(attr(m[2], 'd'));
    else {
      const cx = +attr(m[2], 'cx'), cy = +attr(m[2], 'cy'), r = +attr(m[2], 'r');
      d.push(`M${tal(cx - r)} ${tal(cy)}a${tal(r)} ${tal(r)} 0 1 0 ${tal(2 * r)} 0a${tal(r)} ${tal(r)} 0 1 0 ${tal(-2 * r)} 0`);
    }
  }
  if (/<(?!path|circle|\/)/.test(indre)) throw new Error(`${f}: kun <path> og <circle> kan sættes ind`);
  ikoner[navn] = { indre, d: d.join('') };
}

const blok = [
  '// IKONER START',
  `// Kartoteket med globus' ${Object.keys(ikoner).length} ikoner fra brand/ikoner (brandbogens kapitel 6). Bygget af tools/ikoner.mjs: ret i kartoteket, ikke her.`,
  'const IKON = {',
  Object.entries(ikoner).map(([k, v]) => `  ${/^[a-z]+$/.test(k) ? k : `'${k}'`}:'${v.d}'`).join(',\n'),
  '};',
  '// IKONER SLUT',
].join('\n');

let fejl = 0;
for (const side of SIDER) {
  const sti = join(ROD, side);
  const foer = readFileSync(sti, 'utf8');
  let efter = foer.replace(/(<svg\b[^>]*\sdata-ikon="([a-z-]+)"[^>]*>)([\s\S]*?)(<\/svg>)/g, (hel, start, navn, _gl, slut) => {
    if (!ikoner[navn]) { console.error(`${side}: data-ikon="${navn}" findes ikke i kartoteket`); fejl++; return hel; }
    return start + ikoner[navn].indre + slut;
  });
  efter = efter.replace(/\/\/ IKONER START[\s\S]*?\/\/ IKONER SLUT/, blok);
  const brugt = [...efter.matchAll(/data-ikon="([a-z-]+)"/g)].length;
  if (efter === foer) { console.log(`${side}: svarer til kartoteket (${brugt} ikoner i HTML)`); continue; }
  if (tjek) { console.error(`${side}: svarer ikke til kartoteket. Kør node tools/ikoner.mjs`); fejl++; continue; }
  writeFileSync(sti, efter);
  console.log(`${side}: opdateret (${brugt} ikoner i HTML)`);
}
process.exit(fejl ? 1 : 0);
