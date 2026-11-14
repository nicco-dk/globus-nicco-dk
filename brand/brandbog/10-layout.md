---
kapitel: 10
titel: Layout
---
# Layout

Kloden i midten og det du læser, ved siden af eller nedenunder. På computer står alt på én skærm uden at rulle. På telefonen er kloden hele skærmen, og arkene kommer op nedefra.

## Gitter og spalter
Status: Udkast
- **Computer, over 900 px:** kloden til venstre i den brede spalte og et sidespor på 362 px til højre. Toppen har tre felter: 340 px til logoet og fanerne, midten til retningerne og 362 px til knapperne over sidesporet. Under kloden står tidsskyderen og tickeren i fuld bredde.
- **Telefon og tablet, op til 900 px:** kloden fylder skærmen. Toppen ligger fast øverst over kloden og falder ud i grunden. Bundmenuen ligger fast nederst, og overblik, søgning og ark kommer op over kloden.
- **Smal telefon, op til 600 px:** knapperne i toppen rykker sammen, og adressen ved logoet skjules så kun emblemet står.

## Afstande
Status: Udkast
CSS'en bruger i dag afstande fra 2 til 16 px, mest 6, 8 og 10. Forslag til faste trin på 4 px: 4, 8, 12, 16 og 24, og 2 px kun inde i små mærker. Kanten om siden er 16 px på computer og 12 px på telefon.

## Lagene
Status: Udkast
Fra bunden: kloden, mærkerne og klyngerne, tidsskyderen og tickeren, toppen og bundmenuen, arkene og overblikket, søgningen, og øverst beskeder og velkomsten. Rækkefølgen står som `z-index` i CSS'en og ændres kun her.

## Skærmstørrelser
Status: Udkast
| Bredde | Layout |
| --- | --- |
| Over 1380 px | Computer med fuld top |
| 901 til 1380 px | Computer hvor toppen rykker sammen |
| 601 til 900 px | Tablet: kloden over hele skærmen med bundmenu |
| Op til 600 px | Telefon |

Grove pegeredskaber, fx fingre, får større trykflader uanset bredden.

## Tryk: formater og beskæring
Status: Gælder ikke
globus findes kun på skærm.
