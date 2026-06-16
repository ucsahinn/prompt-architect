# &#9997; Prompt Architect - README français complet

[🇬🇧](README.md) | [🇩🇪](README.de.md) | [🇪🇸](README.es.md) | [🇧🇷](README.pt-BR.md) | [🇹🇷](README.tr.md) | [🇫🇷](README.fr.md)

> Ce fichier est une page d’entrée française complète, pas un court résumé. Il couvre objectif, limites, usage, validation, sécurité et publication.
>
> README canonique en anglais: [README.md](README.md)

Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.

Commencez par le README canonique si vous voulez la description anglaise la plus actuelle. Utilisez cette page pour lire le même contrat opérationnel en français.

## Statut et signaux de confiance

|Zone | Détail|
|--- | ---|
|Statut | Public repository: ucsahinn/prompt-architect|
|Source de vérité | [README canonique en anglais](README.md)|
|Utilisateurs | Codex users who need implementation-ready prompts.; Maintainers building prompt libraries with clear modes and safety gates.|
|Validation | Prompt ledger and examples remain internally consistent.; Generated prompts do not include private local data.|
|Sécurité | Keeps source notes, distilled guidance, templates and generated outputs separated.; Includes a prompt ledger and validation script.|

## Ce que contient ce dépôt

- A public prompt architecture repository for high-quality Codex task prompts.
- A knowledge base for prompt reliability, agent workflows, context engineering and safety.
- A template system for building prompts with explicit execution gates.
- A validation-backed lab for generated prompts and examples.

## Ce que ce dépôt n’est pas

- Not a private prompt vault.
- Not a benchmark leaderboard.
- Not a tool for storing secrets, customer data or account credentials.
- Not a promise that one prompt can replace repository inspection and real verification.

## Public visé

- Codex users who need implementation-ready prompts.
- Maintainers building prompt libraries with clear modes and safety gates.
- Teams comparing source-backed prompt patterns.
- Reviewers checking prompt outputs for scope, validation and public safety.

## Démarrage rapide

1. Clonez ou mettez à jour le dépôt.
2. Lisez README, sécurité et carte documentaire.
3. Lancez les validations adaptées.
4. Stagez uniquement les fichiers explicitement modifiés.
5. Avant push ou release, revérifiez remote, secrets et liens.

## Guide de décision

- Need full implementation prompt -> use the goal and full prompt template.
- Need planning only -> use PLAN MODE ONLY.
- Need execute gate -> require APPROVED - EXECUTE.
- Need recovery -> use STOP / RECOVER patterns.
- Need source quality -> check knowledge/distilled and knowledge/sources.

## Carte du dépôt

|Chemin | Pourquoi c’est important|
|--- | ---|
|[knowledge/templates/](knowledge/templates/) | prompt and agent templates|
|[knowledge/sources/](knowledge/sources/) | raw source categories and notes|
|[knowledge/distilled/](knowledge/distilled/) | distilled guidance from research|
|[knowledge/outputs/](knowledge/outputs/) | generated prompt examples|
|[knowledge/logs/](knowledge/logs/) | decision and research logs|
|[docs/](docs/) | install, usage, validation, skill and security docs|
|[scripts/validate-prompt-lab.mjs](scripts/validate-prompt-lab.mjs) | repository validator|

## Flux de travail

1. Collect source-backed context first.
2. Choose response mode and approval gate.
3. Write concrete execution instructions with verification requirements.
4. Separate reusable knowledge from generated outputs.
5. Validate the repository and inspect diffs before publishing.

## Commandes et validation

Exécutez ces commandes seulement après avoir cloné le dépôt et compris ce qu’elles vérifient ou modifient.

```powershell
node scripts/validate-prompt-lab.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Liste de vérification

- Prompt ledger and examples remain internally consistent.
- Generated prompts do not include private local data.
- Docs links resolve.
- Research notes separate fact from interpretation.
- Remote HEAD is verified after push.

## Limite de sécurité

- Keeps source notes, distilled guidance, templates and generated outputs separated.
- Includes a prompt ledger and validation script.
- Documents PLAN MODE ONLY, APPROVED - EXECUTE, STOP / RECOVER and output-mode contracts.
- Treats external research as source material, not blind authority.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Hygiène de release et publication

- Release only public-safe prompt artifacts and docs.
- Keep prompt outputs reviewable and traceable.
- Do not claim current Codex behavior without checking official docs when version-sensitive.
- Run validator and secret scan before push.

## Maintenance

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Chemin de contribution

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Définition de terminé

Terminé signifie: contenu complet, liens corrects, limites de sécurité claires, validation exécutée, Git propre et remote HEAD vérifié après le push.

|Recommandation | Pourquoi c’est important|
|--- | ---|
|Content | Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Generated prompts do not include private local data.|
|Verification | Validez structure, liens, Markdown, secrets, scripts pertinents et remote HEAD avant toute annonce publique.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Liens importants

|Chemin | Pourquoi c’est important|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Usage docs](docs/USAGE.md) | docs/USAGE.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Prompt templates](knowledge/templates/) | knowledge/templates/|
|[Distilled knowledge](knowledge/distilled/) | knowledge/distilled/|
|[Security model](docs/SECURITY_MODEL.md) | docs/SECURITY_MODEL.md|
