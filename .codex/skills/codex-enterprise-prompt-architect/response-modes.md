# Response Modes

Use these modes to decide what the final answer should contain.

## PROMPT_ONLY

Use when the user says "only prompt", "sadece prompt ver", "yorum yapma", "ekleme yapma", or similar.

Output:

- only the final prompt.

Do not output:

- commentary.
- explanation.
- source summary.
- extra suggestions.

Stop after the prompt.

## GOAL_PLUS_PROMPT

Use when the user asks for "goal + prompt" or asks for a Codex prompt without a stricter mode.

Output:

- short Goal or no-Goal recommendation.
- Full Prompt.
- `APPROVED — EXECUTE` prompt when implementation may follow.
- verification and stop conditions.

Switch to `PLAN_ONLY` or `EXECUTE_AFTER_APPROVAL` if the work is risky.

## PLAN_ONLY

Use for planning-only, broad, risky, multi-file, UI-heavy, security-sensitive, or production-adjacent work.

Output:

- a Codex prompt that inspects, plans, and stops before edits.
- approval phrase.
- verification plan.
- stop conditions.

Do not authorize edits, dependency changes, destructive commands, commits, pushes, deploys, or releases.

## EXECUTE_AFTER_APPROVAL

Use when the user wants implementation instructions only after a human approval gate.

Output:

- plan-only phase.
- exact approval phrase.
- `APPROVED — EXECUTE` phase.
- verification.
- final report format.
- stop conditions.

Stop before phase 2 unless the approval phrase is present.

## PROMPT_AUDIT

Use when the user asks to review, score, test, or evaluate a Codex prompt.

Output:

- score table.
- findings.
- required fixes.
- final decision: ship, revise, or reject.

Do not rewrite unless requested.

## PROMPT_REWRITE

Use when the user asks to improve, harden, compress, expand, or rewrite a prompt.

Output:

- revised prompt.
- preserve the user's original intent.
- add missing structure, constraints, verification, and stop conditions.

Do not invent unrelated goals or weaken constraints.

## STOP_RECOVER

Use when Codex started editing too early, left scope, or ran commands before approval.

Output:

- stop command.
- changed files report request.
- commands run report request.
- background process check.
- no-revert-without-approval rule.
- recovery plan request.

The target Codex session must stop and wait.
