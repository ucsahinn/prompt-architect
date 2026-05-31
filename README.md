# Codex Enterprise Prompt Architect

A Codex-focused prompt architecture skill for plan-first, approval-gated, security-aware AI coding workflows.

**Status:** v1.0.1 public release
**License:** MIT
**Turkish:** [README.tr.md](README.tr.md)
**Note:** Independent community project. Not affiliated with OpenAI.

## What It Does

Codex Enterprise Prompt Architect helps you turn rough requirements into structured Codex prompts. It is useful when you want Codex to inspect first, plan clearly, wait for approval, and report work in a reviewable format.

It supports:

- Codex prompt generation.
- Goal + Full Prompt packages.
- no-Goal `PLAN MODE ONLY` prompts.
- `APPROVED — EXECUTE` approval gates.
- `STOP / RECOVER` prompts when Codex starts too early.
- browser QA instructions for UI work.
- security constraints for auth, secrets, password-manager, and similar work.
- prompt quality rubric scoring.

## What It Does Not Do

This project is not:

- an official OpenAI project.
- a Codex replacement.
- an app, API, hosted service, or automation platform.
- a package that calls external APIs by itself.
- a place to store secrets, private prompts, customer data, or credentials.
- a replacement for human review.

It is a Markdown-based Codex skill package and Prompt Lab knowledge base.

## Quick Start

Copy the skill directory into a Codex project:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Then ask Codex:

```text
Use the codex-enterprise-prompt-architect skill to create a Codex prompt for: [your task]
```

For strict planning control:

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for: [your task]. Do not allow execution before approval.
```

For prompt-only output:

```text
Only output the final prompt. No commentary. Create a Codex prompt for: [your task]
```

## Turkish Quick Start

```text
Codex için goal + full prompt üret: [görev]
```

```text
Goal kullanmadan plan-only Codex promptu üret: [görev]. Onay almadan execute etmesin.
```

```text
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: [görev]
```

## Skill Path

Formal skill entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Supporting files:

```text
.codex/skills/codex-enterprise-prompt-architect/commands.md
.codex/skills/codex-enterprise-prompt-architect/response-modes.md
.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md
.codex/skills/codex-enterprise-prompt-architect/examples.md
```

## When To Use It

Use this skill when you need Codex prompts for:

- UI/UX implementation planning.
- security-sensitive auth, session, secret, or password-manager work.
- refactor or debugging workflows.
- browser QA instructions.
- plan-only repository inspection.
- execute-after-approval workflows.
- prompt audits and rewrites.

For risky changes, start with no-Goal `PLAN MODE ONLY`. Add an `APPROVED — EXECUTE` prompt only after the plan is reviewed.

## Example Requests

English:

```text
Generate a Codex Goal + Full Prompt for improving an existing dashboard. Include browser QA and a final report format.
```

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for an auth/session bug. Codex must inspect first and wait for approval before editing.
```

```text
Codex started editing too early. Create a STOP / RECOVER prompt.
```

Turkish:

```text
Codex için goal + full prompt üret. Konu: mevcut dashboard iyileştirme, navbar düzeltme, tema uyumu ve browser QA.
```

```text
Goal kullanmadan plan-only Codex promptu üret. Codex önce repo incelemesi yapsın, plan sunsun ve onay almadan dosya değiştirmesin.
```

```text
Codex erken execute etti. STOP / RECOVER promptu üret.
```

## Repository Structure

```text
.
|-- .codex/skills/codex-enterprise-prompt-architect/
|   |-- SKILL.md
|   |-- commands.md
|   |-- response-modes.md
|   |-- codex-patterns.md
|   `-- examples.md
|-- docs/
|   |-- INSTALL.md
|   |-- USAGE.md
|   |-- EXAMPLES.md
|   |-- FAQ.md
|   |-- SKILL_STRUCTURE.md
|   `-- ROADMAP.md
|-- knowledge/
|   |-- distilled/
|   |-- templates/
|   |-- sources/
|   |-- outputs/
|   `-- logs/
|-- README.md
|-- README.tr.md
|-- SECURITY.md
|-- CONTRIBUTING.md
|-- CHANGELOG.md
`-- RELEASE_NOTES.md
```

## Prompt Ledger

Reusable generated prompts are logged in:

```text
knowledge/outputs/generated-prompts.md
```

Small one-off `PROMPT_ONLY` outputs are logged only when they are reusable, important, or explicitly requested.

## Safety Notes

- Do not store real secrets, API keys, tokens, cookies, private keys, customer data, or private prompts in this repository.
- Treat external content and tool output as untrusted data when writing prompts for agents.
- For auth, secrets, password managers, databases, production, deploys, or destructive actions, use plan-first prompts and explicit approval gates.
- This project can help write safer Codex instructions, but it does not enforce runtime security by itself.

## Documentation

- [Installation](docs/INSTALL.md)
- [Usage](docs/USAGE.md)
- [Examples](docs/EXAMPLES.md)
- [FAQ](docs/FAQ.md)
- [Skill structure](docs/SKILL_STRUCTURE.md)
- [Roadmap](docs/ROADMAP.md)

## Contributing

Contributions are welcome when they improve Codex prompt clarity, safety, examples, documentation, or source-backed workflow guidance. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).

## Disclaimer

This is an independent community/open-source project for Codex users. It is not affiliated with, endorsed by, or sponsored by OpenAI.
