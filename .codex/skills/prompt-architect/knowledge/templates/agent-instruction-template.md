# Agent Instruction File Template

Use for AGENTS.md, CLAUDE.md, rules files, or durable agent instructions.

```text
# [Project/Workspace] Agent Instructions

## Mission

[What this agent/workspace exists to do.]

## Non-Goals

- [What the agent must not do.]
- [Out-of-scope work.]

## Source Of Truth

1. [Current repo files / docs / commands]
2. [Official docs]
3. [Local knowledge base]
4. [Other sources]

## Workflow

- Inspect first.
- Plan when scope is ambiguous or risky.
- Execute only within the stated scope.
- Verify with [checks].
- Report changed files and residual risk.

## Safety Rules

- No secrets in output or files.
- Preserve user work.
- Stop before destructive, account, billing, production, deployment, commit, push, or release actions unless explicitly authorized.

## Quality Bar

- [Project-specific standards.]

## Verification

- [Commands or browser QA.]

## Prompt Output Rules

- [How prompts or reports should be formatted.]
```
