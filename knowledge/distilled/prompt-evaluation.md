# Prompt Evaluation Playbook

Last updated: 2026-05-31

## Evaluation Levels

### Level 1: Structural Review

Check whether the prompt includes role, task, context, constraints, non-goals, output format, verification, and stop conditions.

### Level 2: Example-Based Review

Run the prompt against representative examples. Compare outputs to ideal outputs.

### Level 3: Variant Comparison

Compare multiple prompt variants across the same inputs. Track model, settings, and scoring criteria.

### Level 4: Regression Suite

Use a stable set of prompts, edge cases, adversarial examples, and expected outputs.

### Level 5: Production Monitoring

Track failures, user corrections, safety events, refusal quality, latency, cost, and human review outcomes.

## Evaluation Criteria

- Correctness
- Completeness
- Instruction adherence
- Output format adherence
- Source grounding
- Safety
- Robustness to ambiguity
- Robustness to prompt injection
- Cost and latency
- Human usefulness

## Stop Criteria For Prompt Optimization

Stop when:

- The prompt meets the defined threshold.
- Additional variants do not improve the metric materially.
- Failures are caused by missing data, model limits, or product constraints rather than prompt wording.
- Further optimization risks overfitting to a small test set.

## Prompt Review Rubric

Use this checklist before calling a prompt final:

- Target agent/model is named or defaulted.
- User goal is explicit.
- Non-goals are explicit.
- Inputs are listed.
- Source authority is defined.
- Workflow is staged.
- Verification is concrete.
- Output format is exact.
- Failure handling is included.
- Stop conditions are present.

## Codex Prompt Evaluation Addendum

Before shipping a Codex prompt, answer these questions:

- Does the prompt explicitly choose Goal, no Goal, PLAN MODE ONLY, execute-after-approval, or direct execution?
- If strict control is required, does it recommend no-goal first-message usage instead of `/goal`?
- Does it prevent premature edits by forbidding create/edit/delete/rename/move/format actions until approval?
- Does it tell Codex what files, directories, docs, commands, flows, or errors to inspect?
- Does it preserve current behavior and user work?
- Does it block scope creep and unrelated redesigns/refactors?
- Does it require verification through repository scripts or discovered checks?
- Does it require browser QA for UI changes?
- Does it include security constraints for auth, secrets, password managers, tools, or external content?
- Does it include a final report format with changed files, checks, risks, and follow-up?
- Does it include stop/recover rules for early execution or risky discoveries?

Decision:

- Ship: every question above has a concrete answer and the enterprise rubric passes.
- Revise: the prompt is directionally correct but missing execution control, verification, browser QA, security, or report sections.
- Reject: the prompt allows unsafe, destructive, secret-exposing, production, or broad unrelated action without explicit approval.
