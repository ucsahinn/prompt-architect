# Codex Prompting Playbook

Last updated: 2026-05-31

## Best Use Cases

Codex is strongest when the prompt gives it a concrete repository task, clear boundaries, inspection rules, and verification gates.

## Default Codex Prompt Shape

1. Goal
2. Operating role
3. Repository inspection rules
4. Source-of-truth rules
5. Non-negotiable requirements
6. Implementation scope
7. Plan mode rules
8. Execution rules
9. Verification rules
10. Browser QA rules, if UI is involved
11. Final report format
12. Stop conditions

## Plan-Only Prompting

Use plan-only when:

- The task is ambiguous.
- The work touches many files.
- The user wants approval before edits.
- The agent must research first.
- The blast radius is high.

Plan-only prompts must include "do not edit files yet" and a required approval phrase if execution should be gated.

## Execute-Immediately Prompting

Use execute-immediately when:

- The task is bounded and low-risk.
- Current repo inspection can identify the right edit.
- The user expects the agent to finish end to end.

Execution prompts should still require inspection, minimal changes, preservation of user work, and verification.

## Codex Verification Rules

Include the narrowest meaningful checks first:

- `npm run test`, `npm run lint`, `npm run typecheck`, `npm run build`, or project equivalents.
- Targeted unit tests when available.
- Browser or screenshot QA for UI.
- Secret scan for security or release work.
- Explicit "unable to verify" reporting when checks cannot run.

## Codex Stop Conditions

Codex should stop before:

- Commits, pushes, deploys, releases, package publication.
- Secret rotation or credential access.
- Production, billing, account, database, or destructive changes.
- Broad rewrites not required by scope.
- Conflicting user instructions or missing source-of-truth files.

## Prompt Smell Checklist

- Missing cwd or repo context.
- No non-goals.
- No verification command.
- No instruction about preserving user work.
- No browser QA for UI.
- No stop conditions for risky actions.
- Vague adjectives without concrete criteria.

## Codex Goal Versus No-Goal Guidance

Use a short Codex Goal when the user wants a persistent objective that Codex can keep checking across a longer run. The Goal should be concise, measurable, and should not carry detailed risky permissions.

Prefer no-goal first-message prompts when strict execution control matters:

- The user wants PLAN MODE ONLY.
- The work is security-sensitive.
- The work touches auth, sessions, secrets, encryption, password managers, billing, production, releases, deployments, databases, or destructive actions.
- The user explicitly says Codex should not execute before planning.

Why: OpenAI describes Goal mode as both a starting prompt and completion criteria. That is useful for continuity, but a strict plan-only task should not rely on Goal mode alone because the goal may encourage Codex to start work toward completion.

## PLAN MODE ONLY Pattern

Use this exact control language in Codex prompts when no edits are allowed:

```text
Work in PLAN MODE ONLY.
Do not edit, create, delete, rename, move, format, commit, push, deploy, publish, or run destructive commands.
Inspect only. Produce the requested plan and stop.
Wait for the exact approval phrase before execution: [APPROVAL PHRASE].
```

## Approval Execute Pattern

Approval prompts should say:

- Use the approved plan only.
- Re-read current repository state before editing.
- Implement in small phases.
- Run verification after risky phases when practical.
- Stop if a new risk requires expanded scope.
- Report changed files, checks, browser QA, security notes, residual risks, and follow-up.

## Stop / Recover Pattern

If Codex starts editing too early, generate a recovery prompt:

```text
STOP. Do not continue editing or running commands.
Report exactly what files you changed, what commands you ran, and what remains pending.
Do not revert anything unless I explicitly approve it.
Switch back to PLAN MODE ONLY and produce a recovery plan.
```

## Large UI / Premium App Prompting

For app cleanup or premiumization prompts, require Codex to inspect design docs, component patterns, theme tokens, icon usage, route shell, and current browser behavior before proposing changes. Split work into safe phases:

1. Discovery and UI map.
2. Security/session bug fixes.
3. Secret/action flows.
4. Dashboard and overview widgets.
5. Navigation/layout/theme/icon consistency.
6. Update/admin/system screens.
7. Browser QA and final verification.

Never let "premiumize" mean unrelated redesign. Define concrete UI criteria: hierarchy, spacing, state coverage, responsive behavior, accessibility, interaction states, and token consistency.

## Codex Source References

- OpenAI Codex Prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex Workflows: https://developers.openai.com/codex/workflows
- OpenAI Codex Best Practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex Agent Approvals & Security: https://developers.openai.com/codex/agent-approvals-security
