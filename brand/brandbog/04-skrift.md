---
kapitel: 4
titel: Skrift
---
# Skrift

To skrifter: Archivo til alt der skal læses, og IBM Plex Mono til tal, tider og kilder. Begge ligger på sitet, og ingen skrift hentes fra Google.

::: skrift

## Skriften
Status: Udkast
- **Archivo** i 400, 600 og 700 til tekst, overskrifter og knapper.
- **Archivo Smal** i 800, Archivo i smal bredde, til adressen GLOBUS.NICCO.DK i toppen i dag. Den forsvinder når ordmærket kommer i toppen (GD-02 A).
- **IBM Plex Mono** i 400 og 600 til klokkeslæt, tal i tabeller, kilder og etiketter med versaler.

Filerne ligger i `site/fonts` som WOFF2 med latin og latin-ext, og udrulningen afviser Google Fonts.

## Ordmærkets skrift
Status: Besluttet 14-11-2026
Ordmærket er globus i Archivo 600 med små bogstaver (GD-02 A), lavet om til kurver i `brand/logo/`. Archivo må bruges i tekst, men ordmærket sættes aldrig med skriften. globus skrives med lille i tekst som bogen for WORKDISK siger i kapitel 1.

## Hierarki og størrelser
Status: Udkast
Forslag efter GD-09 A: de 20 størrelser fra 9 til 24 px som CSS'en bruger 14. november 2026, samles i en fast skala på syv trin.

| Trin | Størrelse | Linjehøjde | Bruges til | Afløser |
| --- | --- | --- | --- | --- |
| Titel | 24 px | 1,15 | Titlen i et ark, fx sygdommens eller landets navn | 24 |
| Overskrift | 20 px | 1,2 | Overskrifter i paneler og velkomsten | 18, 20, 21, 22 |
| Stor | 16 px | 1,3 | Navne i lister, knapper i ark | 15, 16, 17 |
| Mellem | 14,5 px | 1,4 | Undertitler og fremhævet tekst | 13,5, 14, 14,5 |
| Tekst | 13 px | 1,45 | Brødtekst i paneler og ark | 12, 12,5, 13 |
| Lille | 11,5 px | 1,4 | Forklaringer, piller og chips | 11, 11,5 |
| Mikro | 10,5 px | 1,3 | Tidsaksen, etiketter med versaler og mærker på kortet | 9, 9,5, 10, 10,5 |

- **Regel:** en størrelse der ikke står i skalaen, rundes til det trin den står i under Afløser. Ingen tekst under 10,5 px.
- **I CSS:** trinene lægges som variabler, fx `--fs-titel` til `--fs-mikro`, og alle `font-size` peger på dem.
- **Plex Mono** bruger de samme trin. Etiketter med versaler får `letter-spacing: .06em`.

## Vægte
Status: Udkast
| Vægt | Bruges til |
| --- | --- |
| Archivo 400 | Brødtekst og forklaringer |
| Archivo 600 | Overskrifter, navne, knapper og ordmærket |
| Archivo 700 | Titler og tal der skal ses først |
| Plex Mono 400 | Tider, kilder og tal i tabeller |
| Plex Mono 600 | Etiketter med versaler og tal i mærker |

Ingen kursiv. Fremhævning sker med vægt, ikke med farve alene.

## Tal, datoer og enheder
Status: Udkast
Som GRO og regel 6 for hele nicco.dk:

| Hvad | Sådan |
| --- | --- |
| Dato | 12. november. Året kun når det ikke er i år |
| Dato hvor der er trangt | 12. nov. 2026 |
| Klokken | kl. 11.20 |
| Store tal | 158.883 tilfælde. Punktum i tusinder, komma som decimaltegn |
| Procent | 65 % |
| Interval | »3 til 5 dage« i sætninger, »3-5« i tabeller og fliser (W-03) |
| Kilde og dato | »WHO, 12. nov.« med kildens navn først |

Tal og ord der hører sammen, holdes samlet med hårde mellemrum, fx »12. nov. 2026« og »158.883 tilfælde«.

## Skrift i tryk
Status: Gælder ikke
globus findes kun på skærm. Kapitlet skrives hvis der kommer tryk.

## Licenser
Status: Udkast
Archivo, Archivo Smal og IBM Plex Mono er under SIL Open Font License 1.1 og må bruges, lægges på sitet og indlejres i PDF. Licensteksten lægges i `site/fonts/` sammen med filerne så den følger med.
