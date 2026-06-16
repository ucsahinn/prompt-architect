# Changelog

All notable changes to this project are documented here.

The format follows Keep a Changelog where practical.

## [Unreleased]

## [1.1.0] - 2026-06-14

### Added

- Added a dependency-free Prompt Lab validator at `scripts/validate-prompt-lab.mjs`.
- Added GitHub Actions validation workflow for the skill package, docs, source cards, and public-safety checks.
- Added validation, source-maintenance, subagent-routing, and plugin-readiness documentation.
- Added README command-center sections with clearer icon-led navigation.
- Added source-backed refresh notes for current Codex, MCP, plugins, subagents, OpenAI tools, OWASP LLM risks, and prompt/context research.

### Changed

- Expanded skill routing for research-backed prompts, reusable templates, AGENTS.md, CLAUDE.md, and Gemini system-instruction outputs.
- Strengthened MCP, browser, account-tool, and subagent safety guidance.
- Updated public checklist, install guide, usage docs, roadmap, PR template, and knowledge playbooks for validation-first release readiness.
- Updated `README.md` and `README.tr.md` to advertise v1.1.0 and the real Prompt Lab validation workflow.
- Added README visual assets and a more polished public storefront layout.

### Security

- Added `.playwright-mcp/` to `.gitignore` so local browser artifacts are not accidentally staged.
- Added validator checks for missing assets, response-mode drift, source-card metadata, and obvious secret-like values.

## [1.0.2] - 2026-05-31

### Changed

- Reworked `README.md` into an English-first public repository storefront.
- Updated `README.tr.md` as the natural Turkish counterpart.
- Added public repository readiness and security model documentation.
- Added documentation and security-report issue templates.
- Replaced local strategy-note paths in generated prompt outputs with public-safe wording.

## [1.0.1] - 2026-05-31

### Changed

- Rewrote the public README for a clearer first read.
- Added full Turkish README at `README.tr.md`.
- Polished usage, install, examples, FAQ, security, and contributing docs with English and Turkish sections.
- Tightened naming consistency around `PLAN MODE ONLY`, `APPROVED — EXECUTE`, `STOP / RECOVER`, `PROMPT_ONLY`, Goal + Full Prompt, no-Goal plan-only prompt, browser QA, security constraints, and prompt quality rubric.
- Cleaned skill package wording and examples for public use.
- Updated release notes for the bilingual documentation pass.

### Security

- Re-ran public safety scans for local paths, personal data, realistic tokens, private keys, and secret-like assignments.
- Rechecked examples for unsafe or realistic secret placeholders.

## [1.0.0] - 2026-05-31

### Added

- Formal Codex skill package at `.codex/skills/prompt-architect/`.
- `SKILL.md` entrypoint for Prompt Architect.
- Skill reference files for commands, response modes, Codex patterns, and examples.
- Prompt Lab knowledge base under `knowledge/`.
- Codex prompt playbooks for Goal/no-Goal, `PLAN MODE ONLY`, approval-gated execution, `STOP / RECOVER`, browser QA, security constraints, and prompt evaluation.
- Prompt quality rubric and Codex evaluation workflows.
- Generated prompt ledger.
- Public documentation set under `docs/`.
- GitHub issue and pull request templates.

### Security

- Added public security policy and secret-handling guidance.
- Added repository ignore rules for secrets, local caches, build output, and local agent state outside the public skill package.
