---
kapitel: 3
titel: Farver
---
# Farver

globus er mørk først med en lys udgave. Én accent, cyan, bærer logoet og det valgte. Alle andre farver betyder noget bestemt på kortet: en slags hændelse, et trin eller et lag.

::: farver

## Hovedfarver
Status: Besluttet 14-11-2026
globus beholder cyan (GD-10 A): Cyan `#4fb3c9` i mørk og Cyan lys `#196f84` i lys. Accenten bruges til logoet, links, fokus og det valgte, aldrig til en hændelse.

Logoets ringe har deres egne faste farver, regnet ud af cyan med 75 og 40 procent dækning (kapitel 2, Konstruktion).

::: farvegruppe Logoet i mørk: Cyan = prikken; Ring = inderste ring; Ydre ring = yderste ring; Tekst = ordet
::: farvegruppe Logoet i lys: Cyan lys = prikken; Ring lys = inderste ring; Ydre ring lys = yderste ring; Blæk = ordet

## Signalfarver og deres betydning
Status: Udkast
Farven på et mærke fortæller altid slags hændelse. Trinnet står som tekst og som mærkets form så farven aldrig er alene om at bære det (kapitel 13).

::: farvegruppe Slags hændelse, mørk: Rejse = rejsevejledning; Krig = krig og konflikt; Smitte = smitteudbrud; Hede = hede og klima; Jord = jordskælv; Flod = oversvømmelse; Storm = storm; Brand = naturbrand; Vulkan = vulkan; Data = datacenter
::: farvegruppe Slags hændelse, lys: Rejse lys, Krig lys, Smitte lys, Hede lys, Jord lys, Flod lys, Storm lys, Brand lys, Vulkan lys, Data lys

Smitteudbrud har seks trin i trinstigen, hvert med sin farve:

::: farvegruppe Trinene, mørk: Reservoir = smittestof hos dyr; Mistanke = ubekræftet signal; Bekræftet udbrud = laboratoriebekræftet; Smitte mellem mennesker = person til person; Geografisk spredning = nye områder; Ny variant = ændret smitsomhed eller resistens
::: farvegruppe Trinene, lys: Reservoir lys, Mistanke lys, Bekræftet udbrud lys, Smitte mellem mennesker lys, Geografisk spredning lys, Ny variant lys

Lagene om krig har fem farver mere:

::: farvegruppe Lagene, mørk: Hjælp = nødhjælp; Støtte = militær støtte; Flugt = flygtninge; Humanitær = humanitær situation; Krigstone = landene i konflikt
::: farvegruppe Lagene, lys: Hjælp lys, Støtte lys, Flugt lys, Humanitær lys, Krigstone lys

Spørgsmål: Hede og Støtte har samme gule i mørk, og Bekræftet udbrud og Advarsel har samme. Skal de skilles ad?

## Neutrale og flader
Status: Udkast
::: farvegruppe Mørk: Nat = grund; Panel = paneler og ark; Panel 2 = felter og valgte rækker; Streg = skillestreger; Tekst = tekst; Dæmpet = forklaringer; Svag = metadata og kilder
::: farvegruppe Lys: Lys grund = grund; Hvid = paneler og ark; Lys panel 2 = felter og valgte rækker; Lys streg = skillestreger; Blæk = tekst; Lys dæmpet = forklaringer; Lys svag = metadata og kilder
::: farvegruppe Kloden: Hav, Land, Landlinje, Lyst hav, Lyst land, Lys landlinje

Navnene på sitet er `--bg`, `--panel`, `--panel-2`, `--rule`, `--fg`, `--fg-dim`, `--fg-faint`, `--ocean`, `--land` og `--land-line`.

## Mørk tilstand
Status: Udkast
Mørk er standard. Lys vælges med knappen i toppen og følger ellers browserens indstilling. Hver farve har sin lyse udgave med samme navn og samme betydning, og ingen farve findes kun i den ene.

## Kontrast
Status: Udkast
Målt 12. november 2026 på sitet.

| Par | Mørk | Lys |
| --- | --- | --- |
| Tekst på grund | 16,34 til 1 | 14,26 til 1 |
| Dæmpet på panel | 6,70 til 1 | 6,32 til 1 |
| Svag på panel | 5,02 til 1 | 5,42 til 1 |
| Accent på panel | 7,42 til 1 | 5,76 til 1 |

Al tekst holder 4,5 til 1. Tre trinfarver står under 3 til 1 mod kortet: Reservoir på land i mørk 2,88, Bekræftet udbrud lys på havet 2,16 og Smitte mellem mennesker lys på havet 2,74. Mærkerne har en kant på 1,4 px i grundfarven som hjælper i mørk, men næsten ikke i lys (kapitel 13).

Logoets yderste ring står under 3 til 1 i begge tilstande: 2,18 i mørk og 1,84 i lys. Det er formen, ikke en tekst eller et mærke, og derfor er den undtaget.

## Tryk: CMYK
Status: Udkast
CMYK er regnet ud fra sRGB med profilen Coated FOGRA39 og relativ farvemetrik, den samme profil som gros logopakke. Værdierne står i paletten øverst. De rettes hvis Illustrator giver andre tal når logopakken bygges.

## Tryk: Pantone og prøvetryk
Status: Mangler
Spørgsmål: Skal globus trykkes, og er farverne set på et prøvetryk?

## Farver i grafer og data
Status: Udkast
Grafer og tal bruger samme farver som kortet: slags hændelse til serier og trinene til smitteudbrud. Accenten bruges kun til det valgte. En farve i en graf står altid med sit navn ved siden af.
