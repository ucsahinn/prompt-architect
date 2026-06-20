# Codex Goal Template

Use when the user asks for a concise `/goal`.

## Short Goal

```text
/goal [Build/fix/refactor/research/improve] [specific target] in [workspace/path], preserving existing behavior and user work, with concrete verification before reporting completion.
```

## Required Decisions

- Plan only, execute after approval, or execute immediately.
- Whether file edits are allowed.
- Whether browser QA is required.
- Whether tests/build/lint/typecheck are required.
- Whether AGENTS.md or reusable skills should be created/updated.
- Whether commits, pushes, deploys, releases, destructive commands, or secret/account actions are explicitly allowed.

## Stop Conditions

- A short `/goal` should not authorize risky actions by implication.
- If risky actions are needed, name them explicitly in the full prompt, not only in the goal.
- Do not use `/goal` when the user needs strict PLAN MODE ONLY control and does not want Codex to start executing. In that case, generate a no-goal first-message prompt instead.

## No-Goal Recommendation For Strict Control

```text
Recommended usage: do not use `/goal` for this task. Paste the full PLAN MODE ONLY prompt as the first Codex message, or start with `/plan` if available. Use the optional Goal only after the plan is approved or when persistent completion tracking is more important than strict no-execution control.
```

## Optional Goal Warning

Use this warning whenever a prompt package includes both a no-goal plan prompt and an optional Goal:

```text
Warning: `/goal` gives Codex a persistent objective and may encourage it to start working toward completion. If you need strict planning control, do not use the Goal. Paste the PLAN MODE ONLY prompt instead.
```

## Example

```text
/goal Improve the Codex prompt templates in knowledge/templates, using current knowledge-base rules, preserving existing structure, and verifying that every template includes scope, non-goals, verification, output format, and stop conditions.
```
