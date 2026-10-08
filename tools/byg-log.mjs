#!/usr/bin/env node
// Bygger den offentlige ændringslog, site/log.html, ud fra LOG.md.
//
// Brug:  node tools/byg-log.mjs [LOG.md] [site/log.html]
//
// Køres af workflowet lige før udrulningen. Filen site/log.html ligger ikke i repoet.
// LOG.md skrives af de automatiske kørsler ud fra det, de læser på nettet. Derfor slipper
// ingen HTML fra LOG.md igennem: al tekst kodes, og kun https-adresser bliver til links.
// Det, der står før den første post, tages ikke med. Siden har sin egen indledning.

import fs from 'node:fs';

const ind = process.argv[2] || 'LOG.md';
const ud = process.argv[3] || 'site/log.html';

const kod = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// Fed, kode og adresser i en linje. Teksten kodes først, så mønstrene kun rammer ren tekst.
function linje(raa) {
  return raa.split(/(`[^`]*`)/).map((del) => {
    if (del.length > 1 && del.startsWith('`') && del.endsWith('`')) return `<code>${kod(del.slice(1, -1))}</code>`;
    return kod(del)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/https:\/\/[^\s<]+/g, (u) => {
        const hale = (u.match(/[.,;:)]+$/) || [''])[0];
        const adr = hale ? u.slice(0, -hale.length) : u;
        return `<a href="${adr}" rel="noopener">${adr}</a>${hale}`;
      });
  }).join('');
}

const md = fs.readFileSync(ind, 'utf8').replace(/\r\n/g, '\n');
const start = md.search(/^## /m);
if (start < 0) { console.error(`FEJL: ${ind} har ingen poster (ingen linje begynder med "## ")`); process.exit(1); }

const dele = [];
let liste = false, post = false, antal = 0;
const lukListe = () => { if (liste) { dele.push('</ul>'); liste = false; } };
for (const l of md.slice(start).split('\n')) {
  if (l.startsWith('## ')) {
    lukListe();
    if (post) dele.push('</section>');
    dele.push('<section>', `<h2>${linje(l.slice(3).trim())}</h2>`);
    post = true; antal++;
  } else if (/^\s*- /.test(l)) {
    if (!liste) { dele.push('<ul>'); liste = true; }
    dele.push(`<li>${linje(l.replace(/^\s*- /, ''))}</li>`);
  } else if (l.trim() === '') {
    lukListe();
  } else {
    lukListe();
    dele.push(`<p>${linje(l.trim())}</p>`);
  }
}
lukListe();
if (post) dele.push('</section>');

const html = `<!doctype html>
<html lang="da">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<title>Ændringslog · Udbrudsglobus</title>
<style>
@font-face{font-family:'Archivo';font-style:normal;font-weight:400;font-display:swap;src:url('/fonts/archivo-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'Archivo';font-style:normal;font-weight:600;font-display:swap;src:url('/fonts/archivo-latin-600-normal.woff2') format('woff2')}
@font-face{font-family:'Archivo';font-style:normal;font-weight:700;font-display:swap;src:url('/fonts/archivo-latin-700-normal.woff2') format('woff2')}
@font-face{font-family:'IBM Plex Mono';font-style:normal;font-weight:400;font-display:swap;src:url('/fonts/ibm-plex-mono-latin-400-normal.woff2') format('woff2')}
:root{
  --bg:#070d14; --panel:#0d1721; --fg:#e4ecf3; --fg-dim:#8ba0b4; --fg-faint:#5d7a92; --rule:#1d2d3d; --accent:#4fb3c9;
  color-scheme:dark;
  --display:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SFMono-Regular',Consolas,monospace;
}
@media (prefers-color-scheme: light){
  :root{--bg:#e9eff4; --panel:#ffffff; --fg:#13202c; --fg-dim:#4d6276; --fg-faint:#7b8fa1; --rule:#d8e2ea; --accent:#1d7d93; color-scheme:light}
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font-family:var(--display);-webkit-font-smoothing:antialiased;padding:0 16px 48px}
main{width:min(720px,100%);margin:0 auto}
header{padding:18px 0 14px;border-bottom:1px solid var(--rule)}
.tilbage{font-family:var(--mono);font-size:11px;letter-spacing:.02em;color:var(--accent);text-decoration:none}
.tilbage:hover{text-decoration:underline}
h1{font-size:24px;font-weight:700;letter-spacing:-.015em;margin:12px 0 8px}
.ind{font-size:14.5px;line-height:1.55;color:var(--fg-dim);margin:0;max-width:62ch}
section{padding:22px 0 6px;border-bottom:1px solid var(--rule)}
h2{font-family:var(--mono);font-size:11px;font-weight:400;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-faint);margin:0 0 12px}
p{font-size:14px;line-height:1.55;margin:0 0 10px}
ul{margin:0 0 14px;padding-left:18px}
li{font-size:14px;line-height:1.55;margin:0 0 6px;color:var(--fg-dim)}
strong{font-weight:600;color:var(--fg)}
code{font-family:var(--mono);font-size:12px;color:var(--fg);background:var(--panel);border:1px solid var(--rule);border-radius:2px;padding:1px 4px}
a{color:var(--accent);overflow-wrap:anywhere}
a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
</style>
<main>
<header>
<a class="tilbage" href="/">← Udbrudsglobus</a>
<h1>Ændringslog</h1>
<p class="ind">Datasættet på Udbrudsglobus gennemgås automatisk hver dag efter faste regler. Hver gennemgang får en post her, nyeste øverst: hvilke kilder der blev læst, hvad der blev ændret og på hvilken kilde, og hvad der var usikkert. Navnene i kodeskrift er hændelsernes interne navne.</p>
</header>
${dele.join('\n')}
</main>
`;

fs.writeFileSync(ud, html);
console.log(`Ændringslog bygget: ${antal} poster, ${ud}.`);
