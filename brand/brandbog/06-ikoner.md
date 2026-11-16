---
kapitel: 6
titel: Ikoner
---
# Ikoner

Tynde streger i tekstens farve, tegnet i hånden i globus' egen stil. Ét sæt i hele globus, og ét ikon pr. betydning.

::: ikoner

## Kartoteket
Status: Besluttet 16-11-2026
globus tegner sine egne ikoner som GRO og WORKDISK. Besluttet af Mikkel 14. november 2026 i DESIGN-chatten, da det kom frem at GRO og WORKDISK begge tegner deres egne. Det afløser GD-08 A om Tabler Icons. Ikoner hentes aldrig fra en pakke.

Kartoteket er bygget af sitets egne tegninger fra koden 14. november 2026. I koden havde nogle betydninger to tegninger, fx Del, Sammenlign, Søg, Krig og Filtre, og samme klokke blev brugt både til beskeder og til Nyt. Kartoteket har én tegning pr. betydning: 38 ikoner, hvoraf 34 er sitets egne. Trin, siden-sidst og sprog er tegnet af DESIGN, og smitte har fået knopper på stregerne så det ikke ligner solen i knappen lys. De fire står som udkast indtil Mikkel har set dem på sitet.

**Teoriarkivet** er taget ud 16. november 2026 da Mikkel lukkede Teoriarkivet for globus (globus-nicco-dk 5d751b8). Et ikon der ikke bruges mere, slettes fra kartoteket og findes i git-historikken. Kloden tegnes heller ikke, for fanen hørte til Teoriarkivet. **Sprog** er en taleboble med et A til knappen English. Før lånte den land, men land er kortet over et land og betyder kun det (GT-02).

## Streg, gitter og størrelser
Status: Besluttet 16-11-2026
- **Streg:** 1,8 px med runde ender og hjørner som de fleste ikoner på sitet har i dag. Stregerne fra 1,4 til 2,4 px samles i den ene.
- **Gitter:** 24 × 24 med 2 px luft til kanten.
- **Former:** streger og åbne former. Fyldte former er kortets mærker og logoet.
- **I kortets mærker:** tæt på står slagsens ikon i mærket i 11 til 14 px, og der er stregen 2,1 på gitteret. Så står den omkring 1 px på skærmen som mærkets kant. Tegningen er den samme som i kartoteket, kun stregen er en anden (kapitel 7). Afgjort af DESIGN 16. november 2026 efter GT-02.
- **Størrelser ved tekst:** 14 px ved de små tekster i velkomsten og i retningernes chips på telefonen, 16 px på knapperne på kloden og i lister, 18 px i toppen og i Nyt og 24 px i bundmenuen. Andre størrelser bruges ikke: 15 px i niveauets knapper på telefonen bliver 16 px.
- **Størrelser i en ring:** ikonet fylder 55 til 60 procent af ringen, 12 px i boblens ring på 20 px og 22 px i ringen på 40 px i Sådan virker siden.
- **Trykflade:** mindst 44 × 44 px, også når ikonet er mindre (kapitel 13).

## Farver
Status: Udkast
Ikonerne arver tekstens farve: Dæmpet når knappen ikke er valgt, og Cyan når den er. Ikonerne for slags hændelse står i hændelsens farve når de står ved et mærke eller i en liste over hændelser, og ellers i tekstens farve.

## Ikoner i brug
Status: Besluttet 16-11-2026
Eget navn: Ikoner i brug, med betydning
Listen øverst er alle 38. Ét ikon har én betydning, og samme betydning har altid samme ikon. Navnet er filnavnet så ikonet kan findes igen.

| Gruppe | Ikoner |
| --- | --- |
| Toppen | `hent-app`, `lys`, `moerk`, `nyt` |
| Kloden | `pause`, `afspil`, `lag`, `zoom`, `tid`, `udvid` |
| Bundmenu og søgning | `overblik`, `udforsk`, `soeg`, `filtre`, `foelger` |
| Arket og listerne | `besked`, `del`, `sammenlign`, `rss`, `land`, `akut`, `trin`, `siden-sidst` |
| Sådan virker siden og Nyt | `klik`, `mus`, `billede`, `app`, `sprog` |
| Slags hændelse | `rejse`, `krig`, `smitte`, `hede`, `jord`, `flod`, `storm`, `brand`, `vulkan`, `data` |

Valgt mellem to tegninger i koden: `filtre` er tragten, ikke de tre streger som lignede trinstigen. `sammenlign` er de to søjler side om side. `del` er de tre prikker med streger. `besked` er klokken, og `nyt` er stjernerne.

Sådan virker siden bruger de ikoner der har samme betydning andre steder: Hent som app har `hent-app`, Få besked har `besked`, og Trin for trin på mobilen har `overblik` fordi trinnet forklarer overblikket. `trin` er trinstigen og bruges kun om hændelsens trin. English har `sprog`, også i Nyt (GT-02).

## Sådan tilføjes et nyt ikon
Status: Besluttet 14-11-2026
globus-chatten skriver et punkt i `claude/globus_til-design.md` med betydningen og stedet. DESIGN tegner ikonet efter reglerne her, lægger det i `brand/ikoner/` og skriver det i `ikoner.json`. Først derefter bruges det på sitet.

## Forkert brug
Status: Besluttet 14-11-2026
- Et ikon hentet fra en pakke eller tegnet direkte i koden i stedet for filen i kartoteket.
- To ikoner for samme betydning, eller samme ikon for to betydninger.
- En anden streg end 1,8 px, undtagen i kortets mærker.
- Fyldte ikoner.

## Filer
Status: Besluttet 14-11-2026
`brand/ikoner/` med én SVG pr. ikon og `ikoner.json` med navn, betydning og status. globus-chatten sætter ikonerne ind i sitet så de 21 tegninger og fire lister i koden afløses af kartoteket.
