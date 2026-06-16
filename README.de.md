# &#9997; Codex Enterprise Prompt Architect - vollständige deutsche README

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Diese Datei ist eine vollständige deutsche Einstiegseite, kein kurzer Platzhalter. Sie fasst Zweck, Grenzen, Bedienung, Prüfung, Sicherheit und Veröffentlichung in einer Datei zusammen.
>
> Kanonische englische README: [README.md](README.md)

Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.

Beginnen Sie mit der kanonischen README, wenn Sie die aktuellste englische Beschreibung brauchen. Verwenden Sie diese Seite, wenn Sie den gleichen Vertrag auf Deutsch lesen wollen.

## Status und Vertrauensrahmen

|Bereich | Details|
|--- | ---|
|Status | Public repository: ucsahinn/codex-enterprise-prompt-architect|
|Wahrheit | [Kanonische englische README](README.md)|
|Benutzer | Codex users who need implementation-ready prompts.; Maintainers building prompt libraries with clear modes and safety gates.|
|Prüfung | Prompt ledger and examples remain internally consistent.; Generated prompts do not include private local data.|
|Sicherheit | Keeps source notes, distilled guidance, templates and generated outputs separated.; Includes a prompt ledger and validation script.|

## Was dieses Repository ist

- A public prompt architecture repository for high-quality Codex task prompts.
- A knowledge base for prompt reliability, agent workflows, context engineering and safety.
- A template system for building prompts with explicit execution gates.
- A validation-backed lab for generated prompts and examples.

## Was es nicht ist

- Not a private prompt vault.
- Not a benchmark leaderboard.
- Not a tool for storing secrets, customer data or account credentials.
- Not a promise that one prompt can replace repository inspection and real verification.

## Für wen es gedacht ist

- Codex users who need implementation-ready prompts.
- Maintainers building prompt libraries with clear modes and safety gates.
- Teams comparing source-backed prompt patterns.
- Reviewers checking prompt outputs for scope, validation and public safety.

## Schnellstart

1. Repository klonen oder aktualisieren.
2. README, Sicherheitsdateien und Dokumentationskarte lesen.
3. Die passenden Prüfungen ausführen.
4. Nur explizit geänderte Dateien stagen.
5. Vor Push oder Release Remote-Status, Secrets und Links erneut prüfen.

## Entscheidungshilfe

- Need full implementation prompt -> use the goal and full prompt template.
- Need planning only -> use PLAN MODE ONLY.
- Need execute gate -> require APPROVED - EXECUTE.
- Need recovery -> use STOP / RECOVER patterns.
- Need source quality -> check knowledge/distilled and knowledge/sources.

## Repository-Karte

|Pfad | Warum es wichtig ist|
|--- | ---|
|[knowledge/templates/](knowledge/templates/) | prompt and agent templates|
|[knowledge/sources/](knowledge/sources/) | raw source categories and notes|
|[knowledge/distilled/](knowledge/distilled/) | distilled guidance from research|
|[knowledge/outputs/](knowledge/outputs/) | generated prompt examples|
|[knowledge/logs/](knowledge/logs/) | decision and research logs|
|[docs/](docs/) | install, usage, validation, skill and security docs|
|[scripts/validate-prompt-lab.mjs](scripts/validate-prompt-lab.mjs) | repository validator|

## Arbeitsablauf

1. Collect source-backed context first.
2. Choose response mode and approval gate.
3. Write concrete execution instructions with verification requirements.
4. Separate reusable knowledge from generated outputs.
5. Validate the repository and inspect diffs before publishing.

## Befehle und Prüfung

Führen Sie diese Befehle nur aus, wenn Sie das Repository lokal geclont haben und die Wirkung verstehen.

```powershell
node scripts/validate-prompt-lab.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Validierungs-Checkliste

- Prompt ledger and examples remain internally consistent.
- Generated prompts do not include private local data.
- Docs links resolve.
- Research notes separate fact from interpretation.
- Remote HEAD is verified after push.

## Sicherheitsgrenze

- Keeps source notes, distilled guidance, templates and generated outputs separated.
- Includes a prompt ledger and validation script.
- Documents PLAN MODE ONLY, APPROVED - EXECUTE, STOP / RECOVER and output-mode contracts.
- Treats external research as source material, not blind authority.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Release- und Publikationshygiene

- Release only public-safe prompt artifacts and docs.
- Keep prompt outputs reviewable and traceable.
- Do not claim current Codex behavior without checking official docs when version-sensitive.
- Run validator and secret scan before push.

## Wartung

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Beitragspfad

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definition von fertig

Fertig bedeutet: Inhalt ist lokal vollständig, Links funktionieren, Sicherheitsgrenzen sind klar, Validierung ist gelaufen, Git ist sauber und der Remote-Stand ist nach dem Push geprüft.

|Empfehlung | Warum es wichtig ist|
|--- | ---|
|Content | Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Generated prompts do not include private local data.|
|Verification | Prüfen Sie Struktur, Links, Markdown, Secrets, relevante Skripte und Remote-HEAD, bevor Sie eine öffentliche Aussage machen.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Wichtige Links

|Pfad | Warum es wichtig ist|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Usage docs](docs/USAGE.md) | docs/USAGE.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Prompt templates](knowledge/templates/) | knowledge/templates/|
|[Distilled knowledge](knowledge/distilled/) | knowledge/distilled/|
|[Security model](docs/SECURITY_MODEL.md) | docs/SECURITY_MODEL.md|
