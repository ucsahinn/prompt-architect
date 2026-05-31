# Response Modes

## PROMPT_ONLY

When to use:

- User says `sadece prompt ver`, `yorum yapma`, `ekleme yapma`, `only prompt`, or similar.

What to output:

- Only the final prompt.

What not to output:

- No commentary.
- No explanation.
- No source summary.
- No extra suggestions.

Required sections:

- Only the sections required by the requested prompt type.

Stop condition:

- Stop after the prompt.

## GOAL_PLUS_PROMPT

When to use:

- User asks for goal + prompt.
- User asks for a Codex prompt without specifying mode and plan-only is not safer.

What to output:

- Short optional Goal.
- Full Prompt.
- APPROVED - EXECUTE prompt if relevant.

What not to output:

- No unrelated alternatives.
- No long explanation before the prompt.

Required sections:

- Short Goal or no-goal recommendation.
- Full Prompt.
- Verification.
- Stop Conditions.

Stop condition:

- Switch to PLAN_ONLY or EXECUTE_AFTER_APPROVAL if risk is high.

## PLAN_ONLY

When to use:

- User requests planning only.
- Work is risky, broad, ambiguous, multi-file, UI-heavy, security-sensitive, or production-adjacent.

What to output:

- A Codex prompt that inspects, plans, and stops before edits.

What not to output:

- No execution authorization.
- No edit instruction.

Required sections:

- Goal.
- Repository inspection rules.
- Planning deliverables.
- Approval phrase.
- Verification plan.
- Stop conditions.

Stop condition:

- Target Codex session must stop before file edits, destructive actions, commits, pushes, deployments, or releases.

## EXECUTE_AFTER_APPROVAL

When to use:

- The user wants implementation instructions but only after a human approval gate.

What to output:

- Phase 1 plan-only prompt.
- Phase 2 APPROVED - EXECUTE prompt.

What not to output:

- No direct execution before approval.

Required sections:

- Plan phase.
- Approval phrase.
- Execution phase.
- Verification.
- Final report format.
- Stop conditions.

Stop condition:

- Stop before phase 2 unless the exact approval phrase is provided.

## PROMPT_AUDIT

When to use:

- User asks to review, score, test, or evaluate a Codex prompt.

What to output:

- Rubric scores.
- Red flags.
- Required fixes.
- Final decision: ship, revise, or reject.

What not to output:

- No rewrite unless requested.
- No unrelated prompt expansion.

Required sections:

- Score table.
- Findings.
- Minimum fixes.
- Decision.

Stop condition:

- Stop before rewriting if the user asked only for audit.

## PROMPT_REWRITE

When to use:

- User asks to improve, harden, compress, expand, or rewrite a Codex prompt.

What to output:

- Revised prompt preserving the user's intent.

What not to output:

- No invented goals.
- No unrelated features.
- No weakened constraints.

Required sections:

- Same prompt type as requested, with missing professional structure added.

Stop condition:

- Stop if missing context would materially change the user's intent.

## STOP_RECOVER

When to use:

- Codex started editing too early.
- Codex left approved scope.
- Codex ran commands before approval.

What to output:

- STOP / RECOVER prompt.

What not to output:

- No automatic revert instruction.
- No blame or commentary.
- No new implementation scope.

Required sections:

- Stop command.
- Changed files report request.
- Commands run report request.
- Background process check.
- No-revert-without-approval rule.
- Recovery plan request.

Stop condition:

- Target Codex session must stop and wait for approval.
