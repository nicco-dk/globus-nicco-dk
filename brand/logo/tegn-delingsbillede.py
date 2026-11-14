#!/usr/bin/env python3
"""Delingsbilledet til globus, 1200 × 630, i stedet for site/og.png.

Ordmærket i mørk øverst til venstre, linjen om de fire områder under, og kloden til
højre med kortets mærker i farverne for slags hændelse. Mærkerne er et billede af
udtrykket og viser ikke bestemte hændelser.

Kort: site/kort-50m.txt (Natural Earth 50m). Skrift: site/fonts.
Kør:  python3 brand/logo/tegn-delingsbillede.py
"""
import base64
import math
from pathlib import Path

from playwright.sync_api import sync_playwright

HER = Path(__file__).resolve().parent
SITE = HER.parent.parent / "site"
UD = HER / "globus_delingsbillede-1200x630.png"

W, H = 1200, 630
CX, CY, R = 880, 318, 352          # klodens midte og radius i px
LON0, LAT0 = 24.0, 22.0            # klodens midte i grader

F = {"bg": "#070d14", "ocean": "#0a131c", "land": "#1c2c3a", "landlinje": "#33506a",
     "rule": "#1d2d3d", "fg": "#e4ecf3", "dim": "#8ba0b4", "faint": "#6f8aa1"}
SLAGS = {"krig": "#ef5d5b", "smitte": "#3fcf9e", "hede": "#f2c94c", "flod": "#5b95f6",
         "storm": "#55cbe0", "brand": "#f5893c", "vulkan": "#b691f7", "rejse": "#e98bc4"}

# Mærkerne: længde, bredde, slags, alvor (3 og 4 får ringe som på kortet).
MAERKER = [
    (31.0, 13.5, "krig", 4), (36.5, 48.8, "krig", 3), (34.4, 31.4, "krig", 4),
    (24.5, -2.5, "smitte", 4), (8.5, 9.5, "smitte", 2), (31.5, -13.5, "smitte", 2),
    (-2.5, 15.5, "hede", 3), (68.0, 27.5, "flod", 3), (22.4, 38.6, "brand", 2),
    (-19.0, 64.0, "vulkan", 2), (37.5, -17.5, "storm", 3), (47.5, 15.5, "rejse", 2),
    (2.5, 46.5, "hede", 2), (44.0, 33.5, "krig", 2), (55.0, -21.0, "storm", 2),
]


def proj(lon, lat):
    """Ortografisk projektion. Giver None for punkter på bagsiden."""
    l, p = math.radians(lon - LON0), math.radians(lat)
    p0 = math.radians(LAT0)
    cosc = math.sin(p0) * math.sin(p) + math.cos(p0) * math.cos(p) * math.cos(l)
    x = math.cos(p) * math.sin(l)
    y = math.cos(p0) * math.sin(p) - math.sin(p0) * math.cos(p) * math.cos(l)
    return (CX + R * x, CY - R * y, cosc)


def ringe_til_sti(ringe):
    d = []
    for ring in ringe:
        pts = [proj(lo, la) for lo, la in ring]
        stk, cur = [], []
        for x, y, c in pts:
            if c > 0:
                cur.append((x, y))
            elif cur:
                stk.append(cur); cur = []
        if cur:
            stk.append(cur)
        for s in stk:
            if len(s) > 2:
                d.append("M" + " ".join(f"{x:.1f},{y:.1f}" for x, y in s) + ("Z" if len(stk) == 1 else ""))
    return "".join(d)


def gitter():
    d = []
    for lon in range(-180, 180, 30):
        pts = [proj(lon, la) for la in range(-90, 91, 2)]
        seg = [f"{x:.1f},{y:.1f}" for x, y, c in pts if c > 0]
        if len(seg) > 1:
            d.append("M" + " ".join(seg))
    for lat in range(-60, 61, 30):
        pts = [proj(lo, lat) for lo in range(-180, 181, 2)]
        cur = []
        for x, y, c in pts:
            if c > 0:
                cur.append(f"{x:.1f},{y:.1f}")
            elif cur:
                if len(cur) > 1: d.append("M" + " ".join(cur))
                cur = []
        if len(cur) > 1:
            d.append("M" + " ".join(cur))
    return "".join(d)


def maerker():
    ud = []
    for lon, lat, slags, alvor in MAERKER:
        x, y, c = proj(lon, lat)
        if c <= 0.15:
            continue
        col = SLAGS[slags]
        base = 7.0 if alvor >= 3 else 5.5
        if alvor >= 3:
            ud.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{base + 6}" fill="none" stroke="{col}" stroke-opacity=".5" stroke-width="1.8"/>')
        if alvor >= 4:
            ud.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{base + 12}" fill="none" stroke="{col}" stroke-opacity=".28" stroke-width="1.8"/>')
        ud.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{base}" fill="{col}" stroke="{F["bg"]}" stroke-width="2.1"/>')
    return "".join(ud)


def skrift(navn, fil, vaegt):
    data = base64.b64encode((SITE / "fonts" / fil).read_bytes()).decode()
    return f"@font-face{{font-family:'{navn}';src:url(data:font/woff2;base64,{data}) format('woff2');font-weight:{vaegt}}}"


def main():
    tekst = (SITE / "kort-50m.txt").read_text().strip()
    ringe = [[tuple(map(float, p.split(","))) for p in r.split()] for r in tekst.split("|") if r.strip()]
    ordm = (HER / "ordmaerke-moerk.svg").read_text().replace("<svg ", '<svg height="92" ', 1)
    css = (skrift("Archivo", "archivo-latin-400-normal.woff2", 400)
           + skrift("Archivo", "archivo-latin-ext-400-normal.woff2", 400)
           + skrift("IBM Plex Mono", "ibm-plex-mono-latin-400-normal.woff2", 400))
    globus = f"""<svg width="{W}" height="{H}" viewBox="0 0 {W} {H}" style="position:absolute;inset:0">
<defs><radialGradient id="h" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#101d29"/><stop offset="1" stop-color="{F['ocean']}"/></radialGradient></defs>
<circle cx="{CX}" cy="{CY}" r="{R}" fill="url(#h)" stroke="{F['rule']}" stroke-width="1.5"/>
<path d="{gitter()}" fill="none" stroke="{F['rule']}" stroke-width="1"/>
<path d="{ringe_til_sti(ringe)}" fill="{F['land']}" stroke="{F['landlinje']}" stroke-width=".8" stroke-linejoin="round"/>
{maerker()}
</svg>"""
    html = f"""<!doctype html><html><head><meta charset="utf-8"><style>{css}
html,body{{margin:0;width:{W}px;height:{H}px;background:{F['bg']};overflow:hidden}}
.t{{position:absolute;left:64px;top:64px;width:500px}}
.t svg{{display:block}}
h2{{font:400 34px/1.28 'Archivo';color:{F['fg']};margin:44px 0 0;letter-spacing:-.005em}}
p{{font:400 19px/1.5 'IBM Plex Mono';color:{F['dim']};margin:22px 0 0}}
.adr{{position:absolute;left:64px;bottom:56px;font:400 18px 'IBM Plex Mono';color:{F['faint']}}}
</style></head><body>{globus}
<div class="t">{ordm}<h2>Krig og konflikt, smitteudbrud, naturkatastrofer og rejsevejledninger på én klode</h2>
<p>Hver oplysning med sin navngivne kilde</p></div><div class="adr">globus.nicco.dk</div></body></html>"""
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        s = b.new_page(viewport={"width": W, "height": H})
        s.set_content(html)
        s.wait_for_timeout(300)
        s.screenshot(path=str(UD))
        b.close()
    print("Skrevet", UD.name)


if __name__ == "__main__":
    main()
