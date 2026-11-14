---
kapitel: 12
titel: Bevægelse
---
# Bevægelse

Kloden bevæger sig, resten står stille. Bevægelse bruges til at vise tid og nyt, aldrig som pynt.

## Hvornår noget bevæger sig
Status: Udkast
- **Kloden drejer** langsomt til du rører den, og kan sættes på pause.
- **Afspil forløb** kører tidsskyderen frem så mærkerne skifter trin og alvor over tid.
- **Akut** får en ring der breder sig fra mærket og forsvinder (kapitel 7). Det er det eneste mærke der pulserer.
- **Arkene** glider op nedefra på telefonen, og knapper skifter farve når musen peger på dem.

Om prikken i logoet skal pulsere i toppen som en ny hændelse på kortet, er ikke spurgt endnu (kapitel 16).

## Hastighed og kurver
Status: Udkast
I dag fra 0,15 til 0,25 sekunder. Forslag til faste værdier:

| Hvad | Tid | Kurve |
| --- | --- | --- |
| Farve og baggrund ved peg og valg | 0,15 s | `ease` |
| Knapper der skifter form | 0,2 s | `ease` |
| Ark og bundmenu | 0,25 s | `ease` |
| Akut-ringen | 2,2 s pr. gang | lineær, uden ophold |

## Mindre bevægelse
Status: Udkast
Når browseren beder om mindre bevægelse, drejer kloden ikke af sig selv, akut-ringen pulserer ikke, tickeren står stille og kan rulles med hånden, og arkene kommer frem uden at glide. Det respekteres to steder i CSS'en og i tegningen af kloden. Alle nye bevægelser skal følge samme regel.
