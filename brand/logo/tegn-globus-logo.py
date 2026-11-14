#!/usr/bin/env python3
"""globus' logo: emblemet, ordmærket og ikonerne som SVG.

Emblemet er prikken fra kortet med to skarpe ringe om samme midte (GD-01 A, GD-11 A1,
GD-12 A1). Det er tegnet på et gitter på 64 × 64 med midten i 32, 32:

  prikken          radius 6,6   (skitsens r 8,5 minus den halve kant på 3,8)
  inderste ring    14,5 til 18,5
  yderste ring     22,5 til 26,5

Kanten i grundfarven om prikken i skitsen er gjort til luft: prikken står alene, og det,
der ligger bag emblemet, ses mellem prik og ring. Så følger kanten altid den flade,
emblemet står på. Ringenes dækning på 75 og 40 procent er regnet om til faste farver
mod sidens mørke grund #070d14 og mod hvidt.

Ordmærket er globus i Archivo 600 med små bogstaver (GD-02 A), sat med HarfBuzz fra
sidens egen skriftfil og lavet om til kurver. Emblemet står til venstre (GD-03 A) og er
lige så højt som ordet fra g'ets bund til l'ets top.

Ingen <mask>, <clipPath>, <filter> eller transform på grupper (docs/logo-teknik.md i
projekt-nicco-dk). Ringene er udskårne flader med fill-rule evenodd.

Kør:  python3 brand/logo/tegn-globus-logo.py
Bagefter:  node brand/logo/tegn-png.mjs
"""
import io
import json
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

HER = Path(__file__).resolve().parent
REPO = HER.parent.parent
SKRIFT = REPO / "site" / "fonts" / "archivo-latin-600-normal.woff2"

# Farverne. Ringene er accenten med 75 og 40 procent dækning, regnet om til faste farver.
FARVER = {
    "moerk": {"prik": "#4fb3c9", "ring": "#3d8a9c", "ydre": "#244f5c", "ord": "#e4ecf3", "grund": "#070d14"},
    "lys":   {"prik": "#196f84", "ring": "#5293a3", "ydre": "#a3c5ce", "ord": "#13202c", "grund": "#ffffff"},
}

# Emblemet på gitteret 64 × 64, målt fra midten.
PRIK = 6.6
RING = (14.5, 18.5)
YDRE = (22.5, 26.5)
KANT = YDRE[1]          # emblemets yderkant


def r(v):
    s = f"{v:.2f}".rstrip("0").rstrip(".")
    return "0" if s == "-0" else s


def cirkel(cx, cy, rad):
    """En cirkel som to buer, med uret."""
    return (f"M{r(cx + rad)} {r(cy)}A{r(rad)} {r(rad)} 0 1 1 {r(cx - rad)} {r(cy)}"
            f"A{r(rad)} {r(rad)} 0 1 1 {r(cx + rad)} {r(cy)}Z")


def emblem(cx, cy, skala, f, ringe=2):
    """Emblemets stier med midten i cx, cy. skala er enheder pr. gitterenhed."""
    d = [f'<path fill="{f["prik"]}" d="{cirkel(cx, cy, PRIK * skala)}"/>']
    d.append(f'<path fill="{f["ring"]}" fill-rule="evenodd" d="{cirkel(cx, cy, RING[1] * skala)}{cirkel(cx, cy, RING[0] * skala)}"/>')
    if ringe == 2:
        d.append(f'<path fill="{f["ydre"]}" fill-rule="evenodd" d="{cirkel(cx, cy, YDRE[1] * skala)}{cirkel(cx, cy, YDRE[0] * skala)}"/>')
    return "".join(d)


def svg(vb, indhold, label="globus"):
    x, y, w, h = vb
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{r(x)} {r(y)} {r(w)} {r(h)}" '
            f'role="img" aria-label="{label}">{indhold}</svg>\n')


# ---------- ordet ----------

def ordets_stier():
    """Bogstaverne i globus som stier i skriftens enheder, y nedad, grundlinjen i 0."""
    font = TTFont(SKRIFT)
    font.flavor = None
    buf = io.BytesIO()
    font.save(buf)
    data = buf.getvalue()
    face = hb.Face(data)
    hbfont = hb.Font(face)
    b = hb.Buffer()
    b.add_str("globus")
    b.guess_segment_properties()
    hb.shape(hbfont, b, {"kern": True, "liga": True})
    gs = font.getGlyphSet()
    order = font.getGlyphOrder()
    x = 0
    stier = []
    for info, pos in zip(b.glyph_infos, b.glyph_positions):
        navn = order[info.codepoint]
        pen = SVGPathPen(gs)
        gs[navn].draw(TransformPen(pen, (1, 0, 0, -1, x + pos.x_offset, -pos.y_offset)))
        stier.append(pen.getCommands())
        x += pos.x_advance
    bredde = x
    # Den synlige bredde: fra g'ets venstre kant til s'ets højre kant.
    from fontTools.pens.boundsPen import BoundsPen
    bp = BoundsPen(gs)
    x = 0
    for info, pos in zip(b.glyph_infos, b.glyph_positions):
        gs[order[info.codepoint]].draw(TransformPen(bp, (1, 0, 0, 1, x + pos.x_offset, pos.y_offset)))
        x += pos.x_advance
    xmin, ymin, xmax, ymax = bp.bounds
    return stier, bredde, (xmin, -ymax, xmax, -ymin), font["OS/2"].sxHeight


STIER, AVANCE, (OX0, OY0, OX1, OY1), XHOEJDE = ordets_stier()
ORD_HOEJDE = OY1 - OY0                 # fra l'ets top til g'ets bund
DIAMETER = ORD_HOEJDE                  # emblemet er lige så højt som ordet
SKALA = DIAMETER / (2 * KANT)          # skriftenheder pr. gitterenhed
MIDTE_Y = (OY0 + OY1) / 2
MELLEM = 9 * SKALA                     # luft mellem emblem og ord: 9 gitterenheder
EX = OX0 - MELLEM - KANT * SKALA       # emblemets midte


def ordmaerke(f, pad=0):
    x0 = EX - KANT * SKALA - pad
    y0 = OY0 - pad
    w = OX1 + pad - x0
    h = ORD_HOEJDE + 2 * pad
    ind = emblem(EX, MIDTE_Y, SKALA, f) + f'<path fill="{f["ord"]}" d="{"".join(STIER)}"/>'
    return svg((x0, y0, w, h), ind)


# ---------- ordmærket til 26 px ----------

def ordmaerke_px(f, hoejde=26):
    """Ordmærket tilpasset præcis `hoejde` px: emblemets midte, grundlinjen og x-højden
    falder på hele pixels. Koordinaterne er 100 enheder pr. pixel."""
    E = 100
    D = hoejde * E
    sk = D / (2 * KANT)
    # Ordet skaleres, så x-højden bliver et helt antal pixels tæt på det naturlige.
    naturlig = XHOEJDE * (D / ORD_HOEJDE)
    xh_px = round(naturlig / E)
    s_ord = xh_px * E / XHOEJDE
    # Grundlinjen: emblemets midte (hoejde/2) plus ordets midte under midten, rundet til hel pixel.
    grund = round((hoejde / 2) - (MIDTE_Y * s_ord) / E) * E
    cx = KANT * sk
    cy = hoejde / 2 * E
    ox = cx + KANT * sk + MELLEM / SKALA * sk - OX0 * s_ord
    ox = round(ox / E) * E
    ord_sti = "".join(STIER)
    # Ordet skaleres direkte i koordinaterne, ikke med transform.
    from fontTools.svgLib.path import parse_path
    from fontTools.pens.recordingPen import RecordingPen
    rp = RecordingPen()
    parse_path(ord_sti, rp)
    pen = SVGPathPen(None, ntos=lambda v: r(v))
    rp.replay(TransformPen(pen, (s_ord, 0, 0, s_ord, ox, grund)))
    bredde = ox + OX1 * s_ord
    bredde_px = -(-bredde // E)
    ind = emblem(cx, cy, sk, f) + f'<path fill="{f["ord"]}" d="{pen.getCommands()}"/>'
    return svg((0, 0, bredde_px * E, D), ind), {"xhoejde_px": xh_px, "grundlinje_px": grund / E, "bredde_px": int(bredde_px)}


# ---------- ikonerne ----------

def ikon(andel, ringe=2, grund="#070d14", afrund=0):
    """Emblemet midt på sidens mørke grund, 512 × 512. andel er emblemets bredde."""
    S = 512
    sk = andel * S / (2 * KANT)
    rect = f'<rect width="{S}" height="{S}"{f" rx={chr(34)}{afrund}{chr(34)}" if afrund else ""} fill="{grund}"/>'
    return svg((0, 0, S, S), rect + emblem(S / 2, S / 2, sk, FARVER["moerk"], ringe))


def faneikon():
    """Prikken med én ring, uden grund. Farverne skifter med browserens tilstand."""
    S = 512
    sk = (S / 2 - 8) / RING[1]          # den inderste ring fylder ikonet med 8 enheder luft
    m, l = FARVER["moerk"], FARVER["lys"]
    stil = (f'<style>.p{{fill:{l["prik"]}}}.r{{fill:{l["ring"]}}}'
            f'@media (prefers-color-scheme:dark){{.p{{fill:{m["prik"]}}}.r{{fill:{m["ring"]}}}}}</style>')
    c = S / 2
    ind = (stil + f'<path class="p" d="{cirkel(c, c, PRIK * sk)}"/>'
           f'<path class="r" fill-rule="evenodd" d="{cirkel(c, c, RING[1] * sk)}{cirkel(c, c, RING[0] * sk)}"/>')
    return svg((0, 0, S, S), ind)


def main():
    maal = {"bygget": None}
    for navn, f in FARVER.items():
        endelse = "" if navn == "lys" else "-moerk"
        (HER / f"emblem{endelse}.svg").write_text(svg((-KANT * 16, -KANT * 16, 2 * KANT * 16, 2 * KANT * 16), emblem(0, 0, 16, f)))
        (HER / f"emblem-en-ring{endelse}.svg").write_text(svg((-RING[1] * 16, -RING[1] * 16, 2 * RING[1] * 16, 2 * RING[1] * 16), emblem(0, 0, 16, f, ringe=1)))
        (HER / f"ordmaerke{endelse}.svg").write_text(ordmaerke(f))
        s, m = ordmaerke_px(f)
        (HER / f"ordmaerke-26px{endelse}.svg").write_text(s)
        maal["ordmaerke_26px"] = m
    (HER / "ikon.svg").write_text(ikon(0.64))
    (HER / "ikon-maskable.svg").write_text(ikon(0.48))
    (HER / "favicon.svg").write_text(faneikon())
    (HER / "favicon-png.svg").write_text(ikon(0.78, ringe=1, afrund=96))
    import datetime, zoneinfo
    maal["bygget"] = datetime.datetime.now(zoneinfo.ZoneInfo("Europe/Copenhagen")).strftime("%d-%m-%Y %H.%M")
    maal.update({
        "gitter": "64 × 64 med midten i 32, 32",
        "prik": PRIK, "inderste_ring": RING, "yderste_ring": YDRE,
        "farver": FARVER,
        "ord": {"skrift": "Archivo 600 (archivo-latin-600-normal.woff2)", "xhoejde": XHOEJDE,
                "hoejde_top_til_bund": ORD_HOEJDE, "bredde": round(OX1 - OX0, 1)},
        "emblem_i_ordmaerket": {"diameter": round(DIAMETER, 1), "luft_til_ordet": round(MELLEM, 1),
                                "luft_i_gitterenheder": 9},
        "ikon": {"emblemets_bredde": 0.64}, "ikon_maskable": {"emblemets_bredde": 0.48},
    })
    (HER / "maal.json").write_text(json.dumps(maal, ensure_ascii=False, indent=1) + "\n")
    print("Skrevet i", HER)


if __name__ == "__main__":
    main()
