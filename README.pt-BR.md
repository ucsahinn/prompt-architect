# &#9997; Prompt Architect - README completa em português do Brasil

<p align="center">
  &#127760; <strong>Documenta&#231;&#227;o:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Este arquivo é uma porta de entrada completa em português do Brasil, não um resumo curto. Ele cobre objetivo, limites, uso, validação, segurança e publicação.
>
> README canônico em inglês: [README.md](README.md)

Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.

Comece pelo README canônico quando precisar da descrição em inglês mais atual. Use esta página para ler o mesmo contrato operacional em português do Brasil.

## Estado e sinais de confiança

|Área | Detalhe|
|--- | ---|
|Status | Public repository: vaultekbilisim/prompt-architect|
|Fonte da verdade | [README canônico em inglês](README.md)|
|Usuários | Codex users who need implementation-ready prompts.; Maintainers building prompt libraries with clear modes and safety gates.|
|Validação | Prompt ledger and examples remain internally consistent.; Generated prompts do not include private local data.|
|Segurança | Keeps source notes, distilled guidance, templates and generated outputs separated.; Includes a prompt ledger and validation script.|

## O que este repositório é

- A public prompt architecture repository for high-quality Codex task prompts.
- A knowledge base for prompt reliability, agent workflows, context engineering and safety.
- A template system for building prompts with explicit execution gates.
- A validation-backed lab for generated prompts and examples.

## O que ele não é

- Not a private prompt vault.
- Not a benchmark leaderboard.
- Not a tool for storing secrets, customer data or account credentials.
- Not a promise that one prompt can replace repository inspection and real verification.

## Para quem é

- Codex users who need implementation-ready prompts.
- Maintainers building prompt libraries with clear modes and safety gates.
- Teams comparing source-backed prompt patterns.
- Reviewers checking prompt outputs for scope, validation and public safety.

## Início rápido

1. Clone ou atualize o repositório.
2. Leia README, segurança e mapa de documentação.
3. Execute as validações adequadas.
4. Stage somente os arquivos alterados de forma explícita.
5. Antes de push ou release, revise remoto, segredos e links novamente.

## Guia de decisão

- Need full implementation prompt -> use the goal and full prompt template.
- Need planning only -> use PLAN MODE ONLY.
- Need execute gate -> require APPROVED - EXECUTE.
- Need recovery -> use STOP / RECOVER patterns.
- Need source quality -> check knowledge/distilled and knowledge/sources.

## Mapa do repositório

|Caminho | Por que importa|
|--- | ---|
|[knowledge/templates/](knowledge/templates/) | prompt and agent templates|
|[knowledge/sources/](knowledge/sources/) | raw source categories and notes|
|[knowledge/distilled/](knowledge/distilled/) | distilled guidance from research|
|[knowledge/outputs/](knowledge/outputs/) | generated prompt examples|
|[knowledge/logs/](knowledge/logs/) | decision and research logs|
|[docs/](docs/) | install, usage, validation, skill and security docs|
|[scripts/validate-prompt-lab.mjs](scripts/validate-prompt-lab.mjs) | repository validator|

## Fluxo de trabalho

1. Collect source-backed context first.
2. Choose response mode and approval gate.
3. Write concrete execution instructions with verification requirements.
4. Separate reusable knowledge from generated outputs.
5. Validate the repository and inspect diffs before publishing.

## Comandos e validação

Execute estes comandos somente depois de clonar o repositório e entender o que eles verificam ou escrevem.

```powershell
node scripts/validate-prompt-lab.mjs
git diff --check
gitleaks dir . --no-banner --redact
```

## Lista de verificação

- Prompt ledger and examples remain internally consistent.
- Generated prompts do not include private local data.
- Docs links resolve.
- Research notes separate fact from interpretation.
- Remote HEAD is verified after push.

## Limite de segurança

- Keeps source notes, distilled guidance, templates and generated outputs separated.
- Includes a prompt ledger and validation script.
- Documents PLAN MODE ONLY, APPROVED - EXECUTE, STOP / RECOVER and output-mode contracts.
- Treats external research as source material, not blind authority.

Public-safe rule: do not add secrets, tokens, cookies, private keys, private prompts, customer data, local-only auth files, generated logs, archives or build outputs unless the canonical README explicitly says they belong in the public repo.

## Higiene de release e publicação

- Release only public-safe prompt artifacts and docs.
- Keep prompt outputs reviewable and traceable.
- Do not claim current Codex behavior without checking official docs when version-sensitive.
- Run validator and secret scan before push.

## Manutenção

- Keep this localized README aligned with README.md when the repo contract changes.
- Prefer factual repo links over marketing claims.
- Do not invent install commands, metrics, users, releases or support promises.
- If a command is version-sensitive, re-check it before documenting it.
- When a localized file cannot be updated fully, leave a clear note instead of a partial translation.

## Caminho de contribuição

- Open a focused change against the smallest set of files.
- Read AGENTS.md or CONTRIBUTING.md when present before editing.
- Run the repo validation commands listed above.
- Review staged diffs explicitly before commit.
- Use security disclosure paths instead of public issues for sensitive reports.

## Definição de concluído

Concluído significa: conteúdo completo, links corretos, limites de segurança claros, validação executada, Git limpo e remote HEAD verificado depois do push.

|Recomendação | Por que importa|
|--- | ---|
|Content | Research-backed prompt architecture lab for Codex, agents, response modes and enterprise prompt evaluation.|
|Links | All referenced local files must exist and resolve from the repository root.|
|Security | Generated prompts do not include private local data.|
|Verification | Valide estrutura, links, Markdown, segredos, scripts relevantes e remote HEAD antes de afirmar que algo foi publicado.|
|Remote | After push, compare local HEAD with origin/main and GitHub remote HEAD.|

## Links importantes

|Caminho | Por que importa|
|--- | ---|
|[Canonical README](README.md) | README.md|
|[Usage docs](docs/USAGE.md) | docs/USAGE.md|
|[Validation docs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Prompt templates](knowledge/templates/) | knowledge/templates/|
|[Distilled knowledge](knowledge/distilled/) | knowledge/distilled/|
|[Security model](docs/SECURITY_MODEL.md) | docs/SECURITY_MODEL.md|
