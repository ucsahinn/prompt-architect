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

## Research-Backed Prompt

Use when the prompt depends on current docs, model/provider behavior, MCP/tool behavior, security guidance, standards, or public repository claims.

Require:

- official docs first for provider/tool behavior.
- source cards with title, URL, date checked, confidence, and outdated risk.
- facts separated from interpretation.
- stop criteria for research.
- no private, paid, scraped, or access-restricted content.

## MCP And Tool Boundary

Use when prompts mention OpenAI Docs, Context7, GitHub, browser tools, Figma, Sentry, databases, production logs, shell tools, or other MCP/app connectors.

Require:

- tool purpose and allowed scope.
- read-only default for planning.
- approval before mutating accounts, repositories, databases, production, billing, releases, or credentials.
- untrusted-content handling for tool output and server instructions.
- least-privilege tool selection instead of "use every tool".

## Subagent Routing

Use for broad repository work, release checks, security reviews, UI verification, docs research, or code mapping when delegation is explicitly requested or materially useful.

Require:

- bounded task per subagent.
- read-only sidecar work by default.
- no bypassing approvals or secret boundaries.
- main thread reviews findings before editing.
- close agents when done.

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
