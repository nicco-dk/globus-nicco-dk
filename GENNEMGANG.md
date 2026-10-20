# Til gennemgang

Det, kun ejeren må rette eller afgøre. Kørslerne tilføjer nye punkter nederst under den rette overskrift og nævner dem i dagens post i LOG.md under Til gennemgang. Et punkt fjernes, når ejeren har rettet eller afvist det. Kørslerne retter ikke selv i de punkter, der står her.

Hvert punkt begynder med den hændelse eller fil, det handler om, og slutter med, hvad der skal afgøres.

Alle punkter fra 13. oktober er afgjort af ejeren i svararket samme aften og fjernet. 15 punkter mere er afgjort på beslutningssiden 20. oktober og fjernet. Afgørelserne står i LOG.md.

## Mediesporet

Ingen åbne punkter.

## Datasættet: gamle punkter og tekster

- `difteri-ng` (kørslen 18. oktober kl. 00.20): `cases` og punktet 28. august siger 10.476 bekræftede tilfælde og 406 dødsfald i 2026, men ingen af kilderne i `src` har tallene, og søgningen finder kun "over 10.000 bekræftede tilfælde" fra NCDC 28. august, gengivet af ICIR: https://www.icirnigeria.org/diphtheria-deaths-rise-in-plateau-niger-kano-katsina-amid-nationwide-outbreak/ Hvor kommer tallet fra, og skal det stå?
- `altnv-cn` (kørslen 18. oktober kl. 00.20): kilden AABB er en faglig forening, der gengiver undersøgelsen i New England Journal of Medicine, men står i `src` uden tilføjelsen `, sekundær`. Skal den have tilføjelsen?
- Myiasis i Amerika (kørslen 18. oktober kl. 17.20): PAHO udsendte 16. oktober en epidemiologisk alarm om myiasis med Cochliomyia hominivorax (skruelarve) i Amerika: https://www.paho.org/en/epidemiological-alerts-and-updates Mexicanske medier skriver om 120 humane tilfælde og 2 dødsfald i Mexico i 2026: https://www.unotv.com/salud/no-solo-el-ganado-gusano-barrenador-deja-120-casos-de-miasis-en-humanos-y-2-muertes-en-2026/ Hændelsen er ikke taget med, fordi det er et parasitangreb og ikke smitte mellem mennesker. Skal den slags hændelser med på siden?

## Repoet og driften

- `tools/hent-kilder.mjs`, delen `dghs` (kørslen 17. oktober kl. 17.20): DGHS lagde meddelelserne om mæslinger for 15. og 16. oktober ud sammen med en ekstra meddelelse for 14. oktober, efter at kørslerne havde set på listen, og scriptet viser kun den nyeste. Kørslen fandt dem ved at læse listen https://dghs.gov.bd/pages/press-releases selv. Skal scriptet vise alle meddelelser nyere end den, der står i `maesling-bd`?
- Planlagte kørsler (kørslen 20. oktober kl. 11.20): kørslerne 19. oktober kl. 17.20 og 20. oktober kl. 00.20 og 05.20 efterlod intet commit og ingen post i LOG.md, så `DATA_TID` var omkring 24 timer gammel, da denne kørsel startede. Workflowet kørte imens hver time på det gamle commit. Årsagen kan ikke ses herfra. `gh api` mod repoet svarer nu med en fejl om repositorier med numerisk id, mens GitHub-værktøjerne i sessionen virker. Tjekket af par i mediesporet er ikke kørt siden 19. oktober kl. 05.20. Skal de planlagte opgaver efterses?

## Datacentre

- `tools/datacentre.json` (17. oktober): de 55 kuraterede anlæg er samlet med kilder. Alle 15 danske og 10 tilfældige udenlandske er efterprøvet felt for felt mod kilderne, og 13 fejl er rettet. De øvrige 30 udenlandske er ikke efterprøvet. Ejeren er koblet til den første kilde, og en operatør uden kilde er fjernet. Skal de 30 efterprøves, før fase 3, eller tages de af den ugentlige kørsel?

