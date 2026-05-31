# Codex Patterns

Reusable patterns for Codex prompt packages.

## no-Goal Strict Control

Use when Codex must not start implementation before planning.

```text
Do not use /goal for this first step.
You are Codex. Work in PLAN MODE ONLY.
Do not edit, create, delete, rename, move, format, commit, push, deploy, publish, install dependencies, run destructive commands, or start implementation.
Inspect only. Produce the plan and stop.
```

## Goal Usage

Use when a persistent objective is helpful and execution is either allowed or separately gated.

```text
Warning: /goal gives Codex a persistent objective. If strict planning control is needed, do not use the Goal. Paste the PLAN MODE ONLY prompt instead.
```

## PLAN MODE ONLY

Use for broad, risky, ambiguous, multi-file, UI-heavy, or security-sensitive work.

Include:

- role and mission.
- repository inspection rules.
- source-of-truth order.
- scope and non-goals.
- planning deliverables.
- verification plan.
- exact approval phrase.
- stop conditions.

## APPROVED — EXECUTE

Use after a plan is approved.

```text
APPROVED — EXECUTE
Use only the approved plan.
Re-read current repository state before editing.
Implement in small phases.
Run verification.
Stop if new facts require expanded scope.
```

## STOP / RECOVER

Use when Codex starts editing too early.

```text
STOP. Do not continue editing, running commands, or expanding scope.
Report changed files, commands run, background processes, and pending work.
Do not revert anything unless explicitly approved.
Switch back to PLAN MODE ONLY and wait.
```

## browser QA

Use for UI, layout, navigation, dashboard, admin, auth/session, update, or visual consistency work.

Require:

- desktop and mobile viewports.
- responsive behavior.
- text overflow and layout overlap checks.
- keyboard/focus behavior.
- empty/loading/error/disabled/hover/active states.
- console error check.
- screenshots or traces when feasible.

## security-sensitive app

Use for auth, sessions, secrets, password managers, encryption, leak checks, update systems, shell tools, MCP/app tools, databases, or production-adjacent work.

Require:

- no secret printing, persistence, logs, screenshots, telemetry, or unsafe storage.
- preserved auth/session/encryption/authorization boundaries.
- untrusted-content handling.
- approval before credentials, network, dependencies, databases, production, deploys, commits, pushes, releases, destructive commands, or secret rotation.

## UI polish / premiumization

Use for dashboard, navbar, layout, theme, icon, or app polish prompts.

Require:

- inspect existing design system, components, theme tokens, typography, spacing, icon library, and routes.
- preserve existing functionality.
- define concrete visual criteria.
- avoid unrelated redesigns.
- include browser QA.

## Large App Safe Phases

1. Discovery and file map.
2. Risk-first fixes.
3. Primary surface.
4. Navbar, layout, theme, and icons.
5. Secondary surfaces.
6. browser QA.
7. Final verification and report.

## Final Report

```text
## Summary
## Changed Files
## Verification
## Browser QA
## Security Notes
## Residual Risks
## Follow-Up
```
