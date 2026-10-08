# globus.nicco.dk

Udbrudsglobus. Statisk side, én HTML-fil plus skrifttyper. Ingen build, ingen database.

## Udrulning

Læg hele mappens indhold i roden af en statisk hosting. Det er alt.

- `index.html` er siden, inklusive hele datasættet
- `fonts/` er Archivo og IBM Plex Mono, lagt lokalt så der ikke hentes noget fra Google
- `_headers` sætter cache og sikkerhedsheadere. Bruges af Cloudflare Pages og Netlify. Andre hosts ignorerer den uden fejl

## Opdatering af data

Datasættet ligger i `index.html` i konstanten `EVENTS`. Hver hændelse har felterne: sted, land, koordinater, sygdom, smittestof, eskaleringstrin, forløb med datoer, stedknuder, forbindelser, talserie og kilder.

En planlagt kørsel kan skrive en ny `index.html` og committe den. Siden opdaterer sig selv ved næste deploy.

## Bemærk før offentliggørelse

Datasættet er sammenstillet manuelt 8. oktober 2026 og opdateres ikke automatisk endnu.
