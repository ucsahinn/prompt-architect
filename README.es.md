# &#9997; Prompt Architect - README completa en español

<p align="center">
  &#127760; <strong>Documentaci&#243;n:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Este archivo es una portada completa en español, no un resumen corto. Cubre propósito, límites, uso, validación, seguridad y publicación.
>
> README canónico en inglés: [README.md](README.md)

Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.

Empieza por el README canónico si necesitas la descripción inglesa más actual. Usa esta página cuando quieras el mismo contrato operativo en español.

## Estado y señales de confianza

|Área | Detalle|
|--- | ---|
|Estado | Public repository: ucsahinn/prompt-architect|
|Fuente de verdad | [README canónico en inglés](README.md)|
|Usuarios | Codex users who need implementation-ready prompts.; Maintainers building prompt libraries with clear modes and safety gates.|
|Validación | Prompt ledger and examples remain internally consistent.; Generated prompts do not include private local data.|
|Seguridad | Keeps source notes, distilled guidance, templates and generated outputs separated.; Includes a prompt ledger and validation script.|

## Qué es este repositorio

- A public prompt architecture repository for high-quality Codex task prompts.
- A knowledge base for prompt reliability, agent workflows, context engineering and safety.
- A template system for building prompts with explicit execution gates.
- A validation-backed lab for generated prompts and examples.

## Qué no es

- Not a private prompt vault.
- Not a benchmark leaderboard.
- Not a tool for storing secrets, customer data or account credentials.
- Not a promise that one prompt can replace repository inspection and real verification.

## Para quién es

- Codex users who need implementation-ready prompts.
- Maintainers building prompt libraries with clear modes and safety gates.
- Teams comparing source-backed prompt patterns.
- Reviewers checking prompt outputs for scope, validation and public safety.

## Inicio rápido

1. Clona o actualiza el repositorio.
2. Lee README, seguridad y el mapa de documentación.
3. Ejecuta las validaciones adecuadas.
4. Prepara solo los archivos cambiados de forma explícita.
5. Antes de push o release, revisa remoto, secretos y enlaces otra vez.

## Guía de decisión

- Need full implementation prompt -> use the goal and full prompt template.
- Need planning only -> use PLAN MODE ONLY.
- Need execute gate -> require APPROVED - EXECUTE.
- Need recovery -> use STOP / RECOVER patterns.
- Need source quality -> check knowledge/distilled and knowledge/sources.

## Mapa del repositorio

|Ruta | Por qué importa|
|--- | ---|
|[knowledge/templates/](knowledge/templates/) | prompt and agent templates|
|[knowledge/sources/](knowledge/sources/) | raw source categories and notes|
|[knowledge/distilled/](knowledge/distilled/) | distilled guidance from research|
|[knowledge/outputs/](knowledge/outputs/) | generated prompt examples|
|[knowledge/logs/](knowledge/logs/) | decision and research logs|
|[docs/](docs/) | install, usage, validation, skill and security docs|
|[scripts/validate-prompt-lab.mjs](scripts/validate-prompt-lab.mjs) | repository validator|

## Flujo de trabajo

1. Collect source-backed context first.
2. Choose response mode and approval gate.
3. Write concrete execution instructions with verification requirements.
4. Separate reusable knowledge from generated outputs.
5. Validate the repository and inspect diffs before publishing.

## Comandos y validación

Ejecuta estos comandos solo después de clonar el repositorio y entender qué escriben o verifican.

```powershell
node scripts/validate-prompt-lab.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Lista de verificación

- Prompt ledger and examples remain internally consistent.
- Generated prompts do not include private local data.
- Docs links resolve.
- Research notes separate fact from interpretation.
- Remote HEAD is verified after push.

## Límite de seguridad

- Keeps source notes, distilled guidance, templates and generated outputs separated.
- Includes a prompt ledger and validation script.
- Documents PLAN MODE ONLY, APPROVED - EXECUTE, STOP / RECOVER and output-mode contracts.
- Treats external research as source material, not blind authority.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release y publicación

- Release only public-safe prompt artifacts and docs.
- Keep prompt outputs reviewable and traceable.
- Do not claim current Codex behavior without checking official docs when version-sensitive.
- Run validator and secret scan before push.

## Mantenimiento

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Ruta de contribución

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definición de terminado

Terminado significa: contenido completo, enlaces correctos, límites de seguridad claros, validación ejecutada, Git limpio y remote HEAD verificado después del push.

|Recomendación | Por qué importa|
|--- | ---|
|Content | Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Generated prompts do not include private local data.|
|Verification | Valida estructura, enlaces, Markdown, secretos, scripts relevantes y remote HEAD antes de afirmar que algo está publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Enlaces importantes

|Ruta | Por qué importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Usage docs](docs/USAGE.md) | docs/USAGE.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Prompt templates](knowledge/templates/) | knowledge/templates/|
|[Distilled knowledge](knowledge/distilled/) | knowledge/distilled/|
|[Security model](docs/SECURITY_MODEL.md) | docs/SECURITY_MODEL.md|
