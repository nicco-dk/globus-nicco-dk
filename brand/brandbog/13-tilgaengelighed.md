---
kapitel: 13
titel: Tilgængelighed
---
# Tilgængelighed

globus skal kunne læses uden farver, med skærmlæser og med tastatur. Kortet er det svære sted fordi farven bærer slags hændelse.

## Kontrast
Status: Udkast
Al tekst holder mindst 4,56 til 1 i begge tilstande og op til 16,5 til 1 (kapitel 3). Tre trinfarver står under 3 til 1 mod kortet:

| Farve | Mod | Kontrast |
| --- | --- | --- |
| Reservoir i mørk | Land | 2,88 til 1 |
| Bekræftet udbrud lys | Havet | 2,16 til 1 |
| Smitte mellem mennesker lys | Havet | 2,74 til 1 |

Mærkernes kant på 1,4 px i grundfarven hjælper i mørk, men næsten ikke i lys. Forslag: kanten i lys tilstand bliver 1,4 px i Blæk med 60 procent dækning så mærket står mod det lyse hav. Prøves før det bygges.

## Farve alene bærer aldrig betydning
Status: Udkast
- **Slags hændelse** står med ikon og navn i lister og ark, og ikonet står i mærket når der er zoomet ind.
- **Trinnet** står med ord og som mærkets form: stiplet for mistanke, tom ring for reservoir.
- **Alvoren** står med ord og som ringene om mærket.
- **Evidensen i Teoriarkivet** vises med form og ord.

Gråtoneprøven (W-16) er ikke lavet for forsiden. Spørgsmål: hvornår laves den, og hvem gør det?

## Trykflader og fokus
Status: Udkast
Trykflader mindst 44 × 44 px på telefon, også når ikonet er mindre. Fokus vises med en ring på 2 px i Cyan med 2 px luft, i begge tilstande. Sådan er det bygget i dag for links, knapper, felter og kloden.

## Tekststørrelse
Status: Udkast
Ingen tekst under 10,5 px (kapitel 4). Siden skal kunne zoomes til 200 procent uden at tekst forsvinder. Kloden og mærkerne skalerer med.

## Alt-tekst til billeder
Status: Udkast
Kloden har i dag ingen tekst til skærmlæsere. Forslag: den får en `aria-label` der siger hvor mange hændelser der vises, og henviser til hændelseslisten som kan bruges i stedet for kortet. Detaljebilleder får en alt-tekst der siger hvad billedet viser, og kilden står under billedet (kapitel 8). Logoet har `aria-label` globus.
