# Codex Enterprise Prompt Architect

**Enterprise-grade Codex prompt architecture for plan-only control, approval-gated execution, browser QA, security constraints, and prompt evaluation.**

Status: **v1.0.0 public release**

License: MIT

Independent community project. Not affiliated with OpenAI.

## What This Project Is

Codex Enterprise Prompt Architect is a formal Codex skill package and prompt-engineering knowledge system for generating structured, implementation-ready Codex prompts.

It helps Codex users turn messy requirements into professional prompt packs with:

- Goal vs no-Goal guidance.
- `PLAN MODE ONLY` prompts.
- Execute-after-approval prompts.
- `STOP / RECOVER` prompts.
- Browser QA instructions.
- Security-sensitive app constraints.
- Scope-control rules.
- Prompt quality rubric scoring.
- Reusable workflow patterns and examples.

## What This Project Is Not

This is not:

- An official OpenAI project.
- A Codex replacement.
- A runtime app or SaaS product.
- A package manager installable library.
- A prompt marketplace.
- A system for storing secrets, credentials, customer data, or private prompts.

No build step is required. The repository is documentation, skill instructions, reusable templates, and source-backed prompt knowledge.

## Who It Is For

- Codex users.
- AI coding-agent users.
- Prompt engineers.
- Developers and product builders.
- UI/UX builders.
- Security-sensitive app builders.
- Teams that want repeatable prompt workflows for coding agents.

## Why It Exists

AI coding agents are powerful, but broad prompts often lead to scope creep, premature execution, weak verification, missing browser QA, or unsafe security assumptions. This project packages practical Codex prompt patterns into a reusable skill and knowledge base so future sessions can generate safer, clearer, more reviewable prompts.

## Key Features

- Formal Codex skill package.
- Codex-specific response modes.
- Goal and no-Goal guidance.
- Strict no-edit plan-only prompts.
- Approval-gated execution prompts.
- STOP / RECOVER prompts for premature execution.
- Browser QA checklists for UI work.
- Security constraints for auth, secrets, password managers, encryption, and risky tools.
- Prompt audit and rubric scoring.
- Generated prompt ledger.
- Reusable templates, distilled playbooks, and examples.

## Formal Codex Skill Path

Formal skill package:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Skill entrypoint:

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

The older root-level workflow files are compatibility shims:

```text
.codex/skills/codex-enterprise-prompt-architect.md
.codex/skills/codex-enterprise-prompt-architect-commands.md
```

## Quick Start

1. Copy this repository or the `.codex/skills/codex-enterprise-prompt-architect/` directory into a Codex project.
2. Ask Codex to use the skill:

```text
Use the codex-enterprise-prompt-architect skill to create a Codex prompt for: [task]
```

3. If you need strict planning control, ask for a no-Goal plan-only prompt:

```text
Goal kullanmadan plan-only Codex promptu uret: [task]. Onay almadan execute etmesin.
```

4. If you need output only:

```text
Yorum yapma, sadece prompt ver: [Codex prompt request]
```

## Installation / Copy Instructions

No build or dependency installation is required.

Recommended project-local install:

```text
your-project/
  .codex/
    skills/
      codex-enterprise-prompt-architect/
        SKILL.md
        commands.md
        response-modes.md
        codex-patterns.md
        examples.md
```

Optional full Prompt Lab install:

```text
your-project/
  .codex/skills/codex-enterprise-prompt-architect/
  knowledge/
  AGENTS.md
```

The full knowledge base gives Codex more context for prompt generation, evaluation, examples, and reusable templates.

## How To Use In Codex

Natural request:

```text
Use the codex-enterprise-prompt-architect skill to generate an enterprise Codex prompt for improving my dashboard.
```

Turkish request:

```text
Codex icin goal + full prompt uret. Konu: mevcut uygulamada dashboard premiumlastirma, navbar duzeltme, tema uyumu ve browser QA.
```

## Example Commands

PROMPT_ONLY:

```text
Yorum yapma, sadece prompt ver: Codex icin plan-only prompt uret. Konu: dashboard premiumlastirma ve browser QA.
```

Goal + Full Prompt:

```text
Codex icin goal + full prompt uret: mevcut uygulamada update center sadelestirme ve navbar responsive duzeltme.
```

No-Goal PLAN MODE ONLY:

```text
Goal kullanmadan plan-only Codex promptu uret: auth ve dashboard akisini incele. Onay almadan execute etmesin.
```

Execute-after-approval:

```text
Codex once plan yapsin, ben APPROVED - EXECUTE yazmadan dosya degistirmesin: [task]
```

STOP / RECOVER:

```text
Codex erken execute etti. STOP / RECOVER promptu uret; revert yapmasin, once ne degistirdigini raporlasin.
```

Browser QA prompt:

```text
Bu Codex promptuna browser QA ekle: [prompt]
```

Security-sensitive prompt:

```text
Password manager icin security-sensitive Codex promptu uret. Secret, token, master password veya derived key loglanmasin ya da saklanmasin.
```

Prompt audit:

```text
Bu Codex promptunu test et ve skorla: [prompt]
```

## Repository Structure

```text
.
|-- .codex/
|   `-- skills/
|       |-- codex-enterprise-prompt-architect/
|       |   |-- SKILL.md
|       |   |-- commands.md
|       |   |-- response-modes.md
|       |   |-- codex-patterns.md
|       |   `-- examples.md
|       |-- codex-enterprise-prompt-architect.md
|       `-- codex-enterprise-prompt-architect-commands.md
|-- docs/
|   |-- INSTALL.md
|   |-- USAGE.md
|   |-- SKILL_STRUCTURE.md
|   |-- EXAMPLES.md
|   |-- FAQ.md
|   `-- ROADMAP.md
|-- knowledge/
|   |-- distilled/
|   |-- logs/
|   |-- outputs/
|   |-- sources/
|   `-- templates/
|-- AGENTS.md
|-- CHANGELOG.md
|-- CONTRIBUTING.md
|-- RELEASE_NOTES.md
|-- SECURITY.md
`-- README.md
```

## Generated Prompt Logging

Important generated prompts are logged in:

```text
knowledge/outputs/generated-prompts.md
```

Each ledger entry should include:

- Date.
- User request summary.
- Target agent.
- Prompt type.
- Knowledge used.
- Final prompt path or prompt body.
- Verification and quality notes.
- Follow-up needed.

Small one-off `PROMPT_ONLY` outputs are saved only when reusable, important, or explicitly requested.

## Prompt Quality Scoring

Prompt quality is scored with:

```text
knowledge/distilled/prompt-quality-rubric.md
```

Enterprise prompts should meet this bar:

- Average score at least 4.0.
- No category below 3.
- Safety/security at least 4.
- Scope control at least 4.
- Verifiability at least 4.
- Output format precision at least 4.

## Safety And Privacy Notes

- Do not store secrets, credentials, API keys, tokens, cookies, private customer data, private prompts, or paid/private content in this repository.
- Treat prompt injection, unsafe tool use, secret exposure, and excessive agent autonomy as security concerns.
- This project can generate prompts that tell Codex how to handle secrets safely, but it does not enforce runtime security by itself.
- Review generated prompts before using them in sensitive repositories.

## Release Checklist

- Required public docs exist.
- Formal skill entrypoint exists.
- Skill references are included.
- README has install and usage instructions.
- Security and contribution docs exist.
- Prompt examples are copy-pasteable.
- No real secrets, tokens, private local paths, or credentials are committed.
- GitHub release notes are ready.

## Contributing

Contributions are welcome for prompt patterns, safer workflow guidance, documentation improvements, examples, and source-backed research. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).

## Disclaimer

This is an independent community/open-source project for Codex users. It is not affiliated with, endorsed by, or sponsored by OpenAI.
