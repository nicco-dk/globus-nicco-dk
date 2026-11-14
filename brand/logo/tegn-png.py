#!/usr/bin/env python3
"""PNG-ikonerne og favicon.ico ud fra SVG-filerne i brand/logo/, tegnet i Chromium.

Kør efter tegn-globus-logo.py:  python3 brand/logo/tegn-png.py
"""
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

HER = Path(__file__).resolve().parent
OPGAVER = [
    ("ikon.svg", "ikon-180.png", 180),
    ("ikon.svg", "ikon-192.png", 192),
    ("ikon.svg", "ikon-512.png", 512),
    ("ikon-maskable.svg", "ikon-maskable-512.png", 512),
    ("favicon-png.svg", "favicon-32.png", 32),
    ("favicon-png.svg", "favicon-16.png", 16),
]

with sync_playwright() as p:
    b = p.chromium.launch()
    for kilde, ud, s in OPGAVER:
        side = b.new_page(viewport={"width": s, "height": s})
        svg = (HER / kilde).read_text().replace("<svg ", f'<svg width="{s}" height="{s}" ', 1)
        side.set_content(f'<html><body style="margin:0;background:transparent">{svg}</body></html>')
        side.screenshot(path=str(HER / ud), omit_background=True, clip={"x": 0, "y": 0, "width": s, "height": s})
        side.close()
        print("Skrevet", ud)
    b.close()

# favicon.ico med 16 og 32 px til browsere, der ikke læser SVG.
ico = Image.open(HER / "favicon-32.png")
ico.save(HER / "favicon.ico", sizes=[(16, 16), (32, 32)], append_images=[Image.open(HER / "favicon-16.png")])
(HER / "favicon-16.png").unlink()
print("Skrevet favicon.ico")
