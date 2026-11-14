---
kapitel: 2
titel: Logo
---
# Logo

Logoet er prikken fra kortet med to ringe og ordet globus ved siden af. Besluttet af Mikkel 14. november 2026 (GD-01 til GD-05, GD-11 og GD-12) og tegnet rent af DESIGN samme dag.

::: logo

## Opbygning
Status: Besluttet 14-11-2026
Emblemet er kortets mærke for en hændelse: en fyldt prik med to skarpe ringe om samme midte, i accentfarven. På kortet får en hændelse én ring ved alvor 3 og to ved alvor 4. Emblemet siger derfor det samme som kortet: her sker noget alvorligt.

Ordmærket er globus i Archivo 600 med små bogstaver, lavet om til kurver. Emblemet står til venstre for ordet (GD-03 A). Forslaget om emblemet som o'et blev valgt fra.

Emblemet blev tegnet i fem runder. Stregtegnede kloder, kloden med land, ringen i lagenes farver, klyngens ring med g, kloden der stiger op, tre andre udgaver af prikken og tre udgaver med glød på den yderste ring blev valgt fra. Forløbet står i `claude/globus_designmanual-kortlaegning.md`.

## Konstruktion
Status: Besluttet 14-11-2026
Emblemet er tegnet på et gitter på 64 × 64 med midten i 32, 32:

| Del | Fra midten | I gitterenheder |
| --- | --- | --- |
| Prikken | Fyldt | radius 6,6 |
| Inderste ring | Bredde 4 | 14,5 til 18,5 |
| Yderste ring | Bredde 4 | 22,5 til 26,5 |

- **Prikken uden kant:** skitsen havde en kant på 3,8 i grundfarven om prikken, som på kortet. I den rene tegning er kanten luft så det emblemet står på, ses mellem prik og ring. Kanten følger dermed altid fladen, også på papir og fotos.
- **Faste farver:** ringene havde 75 og 40 procent dækning. De er regnet om til faste farver mod Nat og mod hvidt (kapitel 3) så emblemet står ens på alle flader og kan trykkes.
- **Emblem og ord:** emblemet er lige så højt som ordet fra g'ets bund til l'ets top, og midten ligger midt mellem de to. Luften mellem emblemets yderkant og g'et er 9 gitterenheder.
- **Ingen effekter:** ringene er udskårne flader, ikke streger. Ingen skygge, glød eller gennemsigtighed.

Målene står i `brand/logo/maal.json`, og formen tegnes af `brand/logo/tegn-globus-logo.py`.

## Varianter
Status: Besluttet 14-11-2026
| Variant | Hvad | Bruges til |
| --- | --- | --- |
| Ordmærket | Emblemet og globus | Overalt hvor der er plads |
| Ordmærket til 26 px | Emblemets midte, grundlinjen og x-højden ligger på hele pixels i 26 px højde | Toppen på globus.nicco.dk |
| Emblemet | Prikken med to ringe | Fra 24 px når ordet ikke er plads |
| Emblemet med én ring | Prikken og den inderste ring | Under 24 px. Den yderste ring falder væk småt (GD-01 A) |
| App-ikonet | Emblemet midt på Nat, 64 procent af bredden. Den maskerbare udgave 48 procent | Hjemmeskærm og manifest (GD-05 A) |
| Faneikonet | Emblemet med én ring uden grund. Farverne skifter med browserens lys og mørk. Udgaven i PNG og ICO står på Nat med runde hjørner | Browserens fane |

## Farvepar
Status: Besluttet 14-11-2026
- **Mørk:** prikken i Cyan, ringene i Ring og Ydre ring og ordet i Tekst på Nat. Standard fordi globus er mørk først.
- **Lys:** prikken i Cyan lys, ringene i Ring lys og Ydre ring lys og ordet i Blæk på hvidt eller Lys grund.
- **Én farve:** til tryk i én farve står prikken i fuld farve og ringene som raster på 75 og 40 procent. Udgaven laves med logopakken.

Ingen andre farvepar. Prikken og ringene skifter aldrig til lagenes eller hændelsernes farver.

## Frirum
Status: Udkast
Forslag: mindst emblemets halve diameter hele vejen rundt om ordmærket og om emblemet alene. Mellem emblem og ord gælder luften fra Konstruktion.

## Mindste størrelse på skærm
Status: Udkast
Forslag: ordmærket mindst 24 px højt så emblemet har begge ringe. Emblemet alene mindst 24 px med to ringe. Under 24 px bruges emblemet med én ring som står klart ned til 16 px.

## Mindste størrelse i tryk
Status: Mangler
Spørgsmål: Hvor lille må logoet trykkes? Prøves med et testprint når logopakken er lavet.

## Placering på flader
Status: Udkast
| Flade | Hvor logoet står |
| --- | --- |
| globus.nicco.dk | Øverst til venstre i toppen. På telefonen kun emblemet så toppen har plads til knapperne |
| App-ikonet og faneikonet | I midten |
| Delingsbilledet | Øverst til venstre, kloden til højre |

Logoet står én gang pr. flade.

## Logo på billeder og mønster
Status: Udkast
Logoet står på Nat, Lys grund, hvidt eller havet på kloden. Aldrig oven på landene eller kortets mærker så det ikke kan forveksles med en hændelse.

## Afsender sammen med ejeren
Status: Besluttet 14-11-2026
nicco.dk står kun i familiens fod (`info.nicco.dk/fod.js`). N-mærket forsvinder fra globus' top, fane og app-ikon (GD-04 A).

## Forkert brug
Status: Udkast
- Prikken eller ringene i andre farver end farveparrene.
- Ringene med gennemsigtighed, glød eller skygge.
- Prikken som pulserende eller blinkende i logoet. Om prikken må pulsere i toppen, er ikke spurgt endnu (kapitel 16).
- Ordet sat med en skrift i stedet for filen.
- Emblemet som o'et i globus (GD-03 B blev valgt fra).
- Emblemet med to ringe under 24 px.

## Filer
Status: Udkast
Filerne ligger i `brand/logo/` og bygges af scripts i samme mappe.

| Fil | Brug |
| --- | --- |
| `ordmaerke.svg` · `ordmaerke-moerk.svg` | Ordmærket i lys og mørk |
| `ordmaerke-26px.svg` · `ordmaerke-26px-moerk.svg` | Toppen i 26 px |
| `emblem.svg` · `emblem-moerk.svg` | Emblemet |
| `emblem-en-ring.svg` · `emblem-en-ring-moerk.svg` | Emblemet under 24 px |
| `favicon.svg` · `favicon-32.png` · `favicon.ico` | Faneikonet |
| `ikon-180.png` | Apple touch icon |
| `ikon-192.png` · `ikon-512.png` · `ikon-maskable-512.png` | Manifest og hjemmeskærm |
| `globus_delingsbillede-1200x630.png` | Delingsbilledet, `og.png` på sitet |

Byg: `python3 brand/logo/tegn-globus-logo.py`, så `python3 brand/logo/tegn-png.py` og `python3 brand/logo/tegn-delingsbillede.py`. Filerne følger tjeklisten i `docs/logo-teknik.md` i projekt-nicco-dk: SVG er kilden, ingen mask, store koordinater og lys og mørk som to filer.
