# Skill Structure

The formal Codex skill package lives at:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

## Entrypoint

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

`SKILL.md` is the compact operating entrypoint. It explains when to use the skill, when not to use it, default Codex behavior, response modes, Goal vs no-Goal guidance, PLAN MODE ONLY, approval-gated execution, STOP / RECOVER, security rules, UI/UX rules, browser QA, prompt scoring, ledger behavior, and stop conditions.

## Supporting Files

```text
.codex/skills/codex-enterprise-prompt-architect/commands.md
.codex/skills/codex-enterprise-prompt-architect/response-modes.md
.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md
.codex/skills/codex-enterprise-prompt-architect/examples.md
```

- `commands.md`: short natural-language and slash-style commands, including Turkish examples.
- `response-modes.md`: strict output modes such as `PROMPT_ONLY`, `GOAL_PLUS_PROMPT`, `PLAN_ONLY`, and `STOP_RECOVER`.
- `codex-patterns.md`: reusable Codex workflows for plan-only control, approval-gated execution, browser QA, security-sensitive apps, and final reporting.
- `examples.md`: complete reusable prompt examples.

## Compatibility Shims

Older flat skill-style files are kept for compatibility:

```text
.codex/skills/codex-enterprise-prompt-architect.md
.codex/skills/codex-enterprise-prompt-architect-commands.md
```

They point users and future Codex sessions to the formal skill directory.

## Knowledge Base Relationship

The `knowledge/` folder is the deeper Prompt Lab source of truth:

```text
knowledge/
  distilled/
  templates/
  sources/
  outputs/
  logs/
```

- `knowledge/distilled/`: reusable playbooks, rubrics, workflow rules, and Codex patterns.
- `knowledge/templates/`: prompt templates, command cookbook, output formats, and evaluation templates.
- `knowledge/sources/`: source-backed notes from official docs, papers, repositories, and practitioner guidance.
- `knowledge/outputs/`: generated prompts and test prompt packages.
- `knowledge/logs/`: research, decision, and changelog notes.

## Prompt Ledger

Generated prompts should be logged in:

```text
knowledge/outputs/generated-prompts.md
```

The ledger records the date, request summary, target agent, prompt type, knowledge used, final prompt location, quality notes, and follow-up needs.
