# Codex Enterprise Prompt Architect

> Structured Codex prompt patterns, approval-gated workflows, and safety checklists for reviewable AI-assisted development.

[English](README.md) | [Türkçe](README.tr.md)

- **Status:** v1.0.2 public release
- **License:** MIT
- **Project type:** Markdown-based Codex skill package and Prompt Lab knowledge base
- **Note:** Independent community project. Not affiliated with, endorsed by, or sponsored by OpenAI.

Codex Enterprise Prompt Architect helps turn vague AI coding requests into scoped, safer, and verifiable Codex prompts. It is built for teams and maintainers who want Codex to inspect first, plan clearly, wait for approval on risky work, and report evidence instead of just saying "done".

## Why This Exists

AI coding agents are useful, but loose prompts create loose outcomes. A good Codex workflow should state the goal, context, constraints, non-goals, verification, output format, and stop conditions before the agent starts changing files.

This repository packages those patterns as:

- a reusable Codex skill,
- prompt templates,
- workflow playbooks,
- security and browser-QA guidance,
- prompt evaluation rubrics,
- source-backed notes for AI coding-agent workflows.

## Who This Is For

- Developers using Codex for real repository work.
- Prompt engineers building reusable agent instructions.
- Maintainers who want safer public documentation and prompt examples.
- Product, UI, security, and platform teams that need approval-gated AI coding workflows.
- Turkish and English users who want clear Codex workflow examples.

## What You Get

- Goal + Full Prompt packages.
- no-Goal `PLAN MODE ONLY` prompts for strict control.
- `APPROVED - EXECUTE` prompts for approved implementation.
- `STOP / RECOVER` prompts when an agent starts too early or leaves scope.
- Browser QA instructions for UI work.
- Security constraints for auth, sessions, secrets, password managers, databases, shell tools, MCP/app tools, and production-adjacent work.
- A prompt quality rubric and evaluation workflow.

## Quick Start

Copy the skill directory into your Codex project:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Then ask Codex:

```text
Use the codex-enterprise-prompt-architect skill to create a Codex prompt for: [your task]
```

For strict control, ask for a no-Goal plan-only prompt:

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for: [your task]. Do not allow execution before approval.
```

For prompt-only output:

```text
Only output the final prompt. No commentary. Create a Codex prompt for: [your task]
```

## Start Here

| Goal | Go to |
| --- | --- |
| Install or copy the skill | [docs/INSTALL.md](docs/INSTALL.md) |
| Learn the main usage modes | [docs/USAGE.md](docs/USAGE.md) |
| Copy practical examples | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Understand the skill layout | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Check public repo safety rules | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |
| Review prompt/security boundaries | [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md) |
| See planned improvements | [docs/ROADMAP.md](docs/ROADMAP.md) |

## What This Is Not

This is not:

- an official OpenAI project,
- a Codex replacement,
- an app, API, hosted service, or automation platform,
- a package that calls external APIs by itself,
- a place to store secrets, private prompts, customer data, or credentials,
- a replacement for code review, security review, or engineering judgment.

It is a practical instruction system for designing, running, and reviewing Codex workflows with less ambiguity.

## Core Workflow Modes

### Goal + Full Prompt

Use when a persistent high-level objective helps Codex keep the definition of done in view.

### no-Goal PLAN MODE ONLY

Use when Codex must inspect the repository and produce a plan before any edits. This is the safer default for broad, risky, security-sensitive, production-adjacent, or multi-file work.

### APPROVED - EXECUTE

Use only after reviewing a plan. The execution prompt should tell Codex to follow the approved plan, preserve unrelated work, implement in small phases, verify, and stop if new facts expand scope.

### STOP / RECOVER

Use when Codex starts editing too early or leaves scope. The recovery prompt should stop work, list changed files and commands run, avoid automatic revert, and return to plan-only mode.

## Repository Structure

```text
.
|-- .codex/skills/codex-enterprise-prompt-architect/
|   |-- SKILL.md
|   |-- commands.md
|   |-- response-modes.md
|   |-- codex-patterns.md
|   `-- examples.md
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   `-- pull_request_template.md
|-- docs/
|   |-- INSTALL.md
|   |-- USAGE.md
|   |-- EXAMPLES.md
|   |-- FAQ.md
|   |-- SKILL_STRUCTURE.md
|   |-- PUBLIC_REPO_CHECKLIST.md
|   |-- SECURITY_MODEL.md
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

Small one-off `PROMPT_ONLY` outputs are logged only when reusable, important, or explicitly requested.

## Public Safety Rules

This repository is designed for public, reusable prompt and workflow patterns. It must not contain:

- API keys, tokens, credentials, cookies, private keys, or private URLs,
- customer data or internal company information,
- private system prompts,
- proprietary implementation details,
- unredacted logs, screenshots, local paths, or personal notes.

Before publishing changes, use [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) and [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md).

## Contributing

Contributions are welcome when they improve Codex prompt clarity, safety, examples, documentation, or source-backed workflow guidance. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

Do not open public issues for vulnerabilities, leaked credentials, private prompts, or accidental disclosure. See [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
