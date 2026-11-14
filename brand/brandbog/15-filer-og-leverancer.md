---
kapitel: 15
titel: Filer og leverancer
---
# Filer og leverancer

Hvor globus' filer ligger, hvem der ejer dem, og hvordan de bygges.

## Pakken og mapperne
Status: Udkast
| Mappe | Indhold |
| --- | --- |
| `brand/brandbog/` | Kapitlerne og `brandbog.json` |
| `brand/logo/` | Logoet, ikonerne til hjemmeskærm og fane, delingsbilledet og scripts |
| `brand/ikoner/` | Ikonerne og `ikoner.json` |
| `brand/globus_manualer.html` | Brandbogen og designmanualen i faner |
| Creative Cloud `nicco.dk/globus/brand/` | Logopakken til skærm og tryk. Laves når Mikkel kan starte scriptet i Illustrator (`docs/logo-teknik.md`, punkt 2) |

## Filnavne
Status: Udkast
Filerne på sitet hedder det samme som i `brand/logo/` så det altid er til at se hvor de kommer fra. Det der bygges til mennesker, har projektet først: `globus_manualer.html` og `globus_delingsbillede-1200x630.png`.

## Hvem ejer hvad
Status: Besluttet 14-11-2026
DESIGN fører globus' brandbog og ejer `brand/` (GD-06 A, efter TB-13.3 A). globus-chatten ejer `site/` og sætter filerne fra `brand/` ind. Den planlagte kørsel henter `site/` fire gange i døgnet og rører kun sine egne filer. Repoet er offentligt, og intet committes uden Mikkels ja.

## Sådan bygges pakken
Status: Udkast
1. Logoet: `python3 brand/logo/tegn-globus-logo.py`, så `python3 brand/logo/tegn-png.py` og `python3 brand/logo/tegn-delingsbillede.py`.
2. Manualerne: `python3 workdisk-nicco-dk/brand/skabelon/projekt_byg-manualer.py globus-nicco-dk/brand`.
3. Sprogtjekket med reglerne i `workdisk-nicco-dk/brand/sprog/`.
4. globus-chatten kopierer logoet til `site/` og tæller `?v=N` op på adresserne.

## Hvem man spørger
Status: Udkast
DESIGN om udtrykket og bogen, globus-chatten om sitet og data. Mikkel afgør, og chatsene foreslår (W-15).
