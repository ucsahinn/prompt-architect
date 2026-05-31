# Claude Code Prompting Playbook

Last updated: 2026-05-31

## Core Mental Model

Claude Code is an agentic coding environment. It can read files, run commands, edit code, and work autonomously. Strong prompts give it context, verification, and a clean operating lane.

## Durable Claude Code Patterns

- Give Claude a check it can run.
- Explore first, then plan, then code for uncertain or multi-file work.
- Provide specific context: files, symptoms, constraints, examples, and desired fixed behavior.
- Keep `CLAUDE.md` short, broad, and human-readable.
- Use skills for specialized or occasional workflows.
- Use hooks for actions that must be deterministic.
- Manage context aggressively.
- Use subagents for isolated investigation or fresh review.

## CLAUDE.md Design Rules

Include:

- Non-obvious build/test commands.
- Project-specific conventions.
- Workflow rules that apply broadly.
- Common gotchas.
- Repository etiquette.

Avoid:

- Long tutorials.
- File-by-file inventories.
- Information Claude can infer from the repo.
- Narrow procedures better handled by skills.
- Frequently changing details.

## Prompting Claude For Implementation

Use:

```text
Explore the relevant files first. Then make a concise plan. After that, implement the smallest coherent change that satisfies the goal. Run the named checks and iterate on failures. Report changed files, checks run, and any residual risk.
```

## Claude-Specific Notes

- Use system prompts for stable role framing.
- Put task-specific instructions in the user prompt.
- Be explicit about scope when an instruction should apply globally.
- Use examples and XML-style tags when they clarify variables and boundaries.
- Re-check model-specific details before relying on current model names, effort levels, or tool behavior.
