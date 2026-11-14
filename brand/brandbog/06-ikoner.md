---
kapitel: 6
titel: Ikoner
---
# Ikoner

Tynde streger i tekstens farve, ét sæt i hele globus. Ikonerne herunder er udkastet efter GD-08 A: Tabler Icons i fast version og én streg.

::: ikoner

## Kartoteket
Status: Udkast
Forslag efter GD-08 A: Tabler Icons 3.51.0 under MIT-licensen, hentet én gang og lagt i `brand/ikoner/` med globus' egne navne. Versionen skiftes kun når DESIGN beslutter det, og ikonerne hentes aldrig fra en pakke på sitet.

I dag har globus 21 ikoner tegnet direkte i koden og fire lister med flere, i alt 38 forskellige. Nogle betydninger har to tegninger, fx Del, Sammenlign, Søg, Krig og Filtre, og samme klokke bruges både til beskeder og til Nyt. Kartoteket giver hver betydning ét ikon.

Spørgsmål: GD-08 A blev valgt »som gro og WORKDISK«, men GRO har ikke brugt Tabler siden 18. oktober 2026 og tegner sine ikoner selv, og WORKDISK tegner også sine egne. Skal globus bruge Tabler, eller tegne sine egne ikoner som de to andre?

## Streg, gitter og størrelser
Status: Udkast
- **Streg:** 1,75 px med runde ender og hjørner, tæt på de 1,8 px, de fleste ikoner har i dag. Stregerne fra 1 til 2,4 px samles i den ene.
- **Gitter:** 24 × 24 med 2 px luft til kanten.
- **Størrelser:** 20 px i toppen og bundmenuen, 16 px i lister og piller, 24 px i velkomsten.
- **Trykflade:** mindst 44 × 44 px, også når ikonet er mindre (kapitel 13).

## Farver
Status: Udkast
Ikonerne arver tekstens farve: Dæmpet når knappen ikke er valgt, og Cyan når den er. Ikonerne for slags hændelse står i hændelsens farve når de står ved et mærke eller i en liste over hændelser, og ellers i tekstens farve.

## Ikoner i brug
Status: Udkast
Eget navn: Ikoner i brug, med betydning
Listen øverst er alle 38. Ét ikon har én betydning, og samme betydning har altid samme ikon. Navnet er filnavnet, og Tablers navn står i `brand/ikoner/ikoner.json`.

| Gruppe | Ikoner |
| --- | --- |
| Toppen | `teoriarkivet`, `hent-app`, `lys`, `moerk`, `nyt` |
| Kloden | `pause`, `afspil`, `lag`, `zoom`, `tid`, `udvid` |
| Bundmenu og søgning | `overblik`, `udforsk`, `soeg`, `filtre`, `foelger` |
| Arket og listerne | `besked`, `del`, `sammenlign`, `rss`, `land`, `akut`, `trin`, `siden-sidst` |
| Sådan virker siden og Nyt | `klik`, `mus`, `billede`, `app` |
| Slags hændelse | `rejse`, `krig`, `smitte`, `hede`, `jord`, `flod`, `storm`, `brand`, `vulkan`, `data` |

## Sådan tilføjes et nyt ikon
Status: Udkast
globus-chatten skriver et punkt i `claude/globus_til-design.md` med betydningen og stedet. DESIGN vælger eller tegner ikonet, lægger det i `brand/ikoner/` og skriver det i listen. Først derefter bruges det på sitet.

## Forkert brug
Status: Udkast
- Et ikon tegnet direkte i koden i stedet for filen i kartoteket.
- To ikoner for samme betydning, eller samme ikon for to betydninger.
- En anden streg end 1,75 px.
- Fyldte ikoner. Fyldte former er kortets mærker og logoet.

## Filer
Status: Udkast
`brand/ikoner/` med én SVG pr. ikon, `ikoner.json` med navn, betydning og Tablers navn, og `LICENSE-tabler.txt`. globus-chatten kopierer filerne til sitet.
