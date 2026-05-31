# Changelog

All notable changes to this project are documented here.

The format follows Keep a Changelog where practical.

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

- Formal Codex skill package at `.codex/skills/codex-enterprise-prompt-architect/`.
- `SKILL.md` entrypoint for Codex Enterprise Prompt Architect.
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
