# Codex Prompt Evaluation Workflows

Last updated: 2026-05-31

Purpose: evaluate whether a Codex prompt will produce controlled, scoped, verifiable work before it is pasted into Codex.

## Workflow: Codex Execution Mode Audit

- Question: Does the prompt control whether Codex may plan, inspect, edit, or execute?
- Pass:
  - Names one mode: Goal, no Goal, plan-only, execute-after-approval, or direct execute.
  - Says whether file edits are allowed.
  - Uses exact approval wording when execution is gated.
- Fail:
  - Says "plan first" but also asks Codex to implement immediately.
  - Uses `/goal` for strict plan-only work without warning.
  - Missing stop condition after planning.

## Workflow: Scope Creep Audit

- Question: Does the prompt prevent unrelated work?
- Pass:
  - Lists in-scope surfaces.
  - Lists out-of-scope changes.
  - Blocks unrelated rewrites, redesigns, dependency changes, commits, pushes, deploys, releases, and destructive commands unless authorized.
- Fail:
  - "Improve everything" with no boundaries.
  - UI polish prompt allows broad product redesign.

## Workflow: Repository Inspection Audit

- Question: Does the prompt tell Codex what files or areas to inspect?
- Pass:
  - Requires reading local instructions first.
  - Names likely target areas, routes, components, tests, logs, config, or docs.
  - Requires `rg` / `rg --files` or equivalent search before assumptions.
- Fail:
  - Gives a task with no source-of-truth order.
  - Lets Codex invent architecture or file paths.

## Workflow: Behavior Preservation Audit

- Question: Does the prompt preserve existing behavior?
- Pass:
  - States existing working functionality must remain intact.
  - Requires behavior-preserving refactors where relevant.
  - Requires regression tests or manual checks around changed behavior.
- Fail:
  - Allows unrelated cleanup during bug fixes.
  - Mixes refactor, feature, and design changes without phases.

## Workflow: Verification Audit

- Question: Does the prompt define proof of success?
- Pass:
  - Names expected test/build/lint/typecheck commands or says Codex must discover project scripts.
  - Requires exact command results in final report.
  - Requires "unable to verify" details when checks cannot run.
- Fail:
  - "Make sure it works" with no checks.
  - No final evidence section.

## Workflow: Browser QA Audit

- Question: Does the prompt include browser QA when UI is involved?
- Pass:
  - Requires real browser or screenshot-capable verification when feasible.
  - Covers desktop/mobile, text overflow, focus, loading/error/empty/disabled states, and console errors.
  - Covers user flows, not only component snapshots.
- Fail:
  - UI task only asks for build/typecheck.
  - No responsive or interaction-state checks.

## Workflow: Security/Auth/Secrets Audit

- Question: Does the prompt include security constraints when secrets, auth, sessions, passwords, or tools are involved?
- Pass:
  - Blocks secret printing, persistence, screenshots, logs, telemetry, and unsafe storage.
  - Requires preserving auth/session/authorization/encryption boundaries.
  - Requires approval for credential, account, production, database, or destructive actions.
- Fail:
  - Suggests storing master passwords or tokens as a convenience fix.
  - No stop condition for secrets.

## Workflow: Final Report Audit

- Question: Does the prompt tell Codex how to report completion?
- Pass:
  - Requires Summary, Changed Files, Verification, Browser QA if UI, Security Notes if sensitive, Residual Risks, Follow-Up.
  - Requires concise but evidence-backed reporting.
- Fail:
  - No output format.
  - No changed-file list.

## Workflow: Missing Information Safety Audit

- Question: Does the prompt handle unknowns safely?
- Pass:
  - Codex can make low-risk assumptions only after inspection.
  - Codex must ask only when a missing answer blocks safe work.
  - Codex must stop on conflicting instructions or missing source-of-truth files.
- Fail:
  - Codex is encouraged to guess.
  - Prompt requires execution despite missing critical context.

## Final Codex Prompt Decision

Use this decision rule:

- Ship: all must-pass checks pass, no high-risk red flags, enterprise rubric average is at least 4.0, and security/scope/verifiability/output format are each at least 4.
- Revise: one or more sections are weak but the prompt goal is sound.
- Reject: prompt asks Codex to perform unsafe, destructive, secret-exposing, production, account, or broad unrelated work without explicit approval.
