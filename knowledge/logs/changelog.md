# Changelog

## 2026-05-31

- Created local `AGENTS.md` for prompt-lab operating rules.
- Created `knowledge/sources/` source-card files.
- Created `knowledge/distilled/` playbooks and principles.
- Created `knowledge/templates/` reusable prompt templates.
- Created `knowledge/outputs/generated-prompts.md` ledger.
- Created `knowledge/logs/research-log.md`, `decisions.md`, and `changelog.md`.
- Completed initial bounded source pass across OpenAI, Anthropic, Google, OWASP, and selected research papers.
- Tightened template stop/approval rules for goal, refactor, debugging, and product prompts.
- Added `README.md` as the main usage guide.
- Added prompt request intake, prompt output formats, prompt quality rubric, and prompt generation workflow.
- Updated `AGENTS.md` to require knowledge-base-first prompt generation, Codex default targeting, prompt saving, rubric checks, and bounded research.
- Updated generated prompt ledger format.
- Added `knowledge/templates/command-cookbook.md` with short, copy-pasteable prompt-lab commands.
- Added `knowledge/distilled/response-modes.md` with strict output modes, including `PROMPT_ONLY`, `GOAL_PLUS_PROMPT`, and approval-gated execution modes.
- Expanded source coverage with public repositories, instruction-file examples, official agent docs, research papers, prompt libraries, security guidance, and practitioner signals.
- Added distilled operating playbooks for source quality, public-repo lessons, instruction-file patterns, prompt-library lessons, agent control, browser QA, and security prompting.
- Added `knowledge/outputs/test-generated-prompt.md` as a real enterprise Codex prompt test for a security-sensitive password manager improvement scenario.
- Logged the test prompt in `knowledge/outputs/generated-prompts.md` with rubric score and knowledge references.
- Added `knowledge/distilled/codex-workflow-patterns.md` for Codex-only Goal/no-goal, plan-only, approval-gated execution, stop/recover, browser QA, security, and large-app workflow patterns.
- Added `knowledge/distilled/evaluation-workflows.md` for Codex prompt evaluation.
- Added `knowledge/templates/prompt-eval-template.md` for testing Codex prompts before use.
- Strengthened Codex templates for no-goal strict planning, optional Goal warnings, STOP / RECOVER prompts, browser QA, security constraints, refactor/debug execution gates, and final reports.
- Updated `AGENTS.md` to keep future sessions Codex-focused by default and to avoid broadening to other tools unless asked.
- Added `knowledge/outputs/codex-premium-app-prompt-test.md` and ledger entry with 55/55 rubric score.
- Added `.codex/skills/codex-enterprise-prompt-architect.md` as a reusable Codex-focused prompt-generation skill/workflow.
- Added `.codex/skills/codex-enterprise-prompt-architect-commands.md` with slash-command style workflow shortcuts.
- Updated `README.md` with "Using this as a Codex Skill / Workflow" instructions.
- Updated `AGENTS.md` to route Codex prompt creation through the reusable skill/workflow.
- Added `knowledge/outputs/sample-skill-output.md` as a PROMPT_ONLY sample and logged it in `generated-prompts.md`.
- Added formal Codex skill package directory `.codex/skills/codex-enterprise-prompt-architect/` with `SKILL.md`, `commands.md`, `response-modes.md`, `codex-patterns.md`, and `examples.md`.
- Updated the previous skill-style `.md` files as compatibility shims that point to the formal skill entrypoint.
- Updated `README.md` and `AGENTS.md` to reference `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`.
- Added `knowledge/outputs/formal-skill-package-test.md` and logged it in `generated-prompts.md`.
