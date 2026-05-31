# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project uses semantic versioning where practical.

## [1.0.0] - 2026-05-31

### Added

- Formal Codex skill package at `.codex/skills/codex-enterprise-prompt-architect/`.
- `SKILL.md` entrypoint for Codex Enterprise Prompt Architect.
- Skill reference files for commands, response modes, Codex patterns, and examples.
- Prompt Lab knowledge base under `knowledge/`.
- Codex prompt playbooks for Goal/no-Goal, PLAN MODE ONLY, approval-gated execution, STOP / RECOVER, browser QA, security constraints, and prompt evaluation.
- Prompt quality rubric and Codex evaluation workflows.
- Generated prompt ledger.
- Public documentation set under `docs/`.
- GitHub issue and pull request templates.

### Changed

- Preserved older skill-style workflow files as compatibility shims.
- Updated README and AGENTS instructions for formal skill usage.

### Security

- Added public security policy and secret-handling guidance.
- Added repository ignore rules for secrets, tokens, local caches, build output, and local agent state outside the public skill package.
