# Codex Workflow Patterns

Last updated: 2026-05-31

Purpose: reusable Codex-only workflow patterns for prompt generation, approval control, repository inspection, browser QA, security-sensitive app work, and final reporting.

Primary sources:

- OpenAI Codex Prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex Workflows: https://developers.openai.com/codex/workflows
- OpenAI Codex Best Practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex Agent Approvals & Security: https://developers.openai.com/codex/agent-approvals-security
- OpenAI Codex Skills: https://developers.openai.com/codex/skills
- OpenAI Codex CLI Slash Commands: https://developers.openai.com/codex/cli/slash-commands

## Pattern: Goal-Only Vs No-Goal Usage

- When to use Goal: long, coherent work where Codex should keep a persistent definition of done across many turns.
- When to avoid Goal: strict plan-only work, risky app changes, security-sensitive work, or any task where the first message must stop before edits.
- Why it works: OpenAI describes Goal mode as both the starting prompt and completion criteria. That is useful for continuity but can encourage Codex to begin work unless the user also constrains execution.
- Prompt structure:
  - No-goal strict control: "Do not use Goal mode. Work in PLAN MODE ONLY. Do not edit files."
  - Optional Goal: short objective plus "planning only until explicit approval" in the full prompt.
- Failure modes:
  - Goal text is treated as enough authorization to start.
  - Goal contains too much detail and hides approval gates.
  - Goal lacks measurable done criteria.
- Verification method:
  - Check that the full prompt explicitly controls execution mode and approval phrase.

## Pattern: When NOT To Use A Goal

- Use no-goal first-message prompts when the user needs a hard stop after planning.
- Avoid Goal when:
  - The user says plan-only, yorum yapma, or do not execute.
  - The task touches auth, secrets, password managers, billing, production, release, or destructive actions.
  - The task is exploratory and success criteria are not yet stable.
  - The user wants a reusable prompt package rather than active execution.
- Prompt structure:
  - "Recommended usage: paste this as the first Codex message without `/goal`."
  - "Use `/plan` if available, or include `PLAN MODE ONLY` at the top."
- Failure modes:
  - Goal mode is used for a task that should have been a plan interview.
- Verification method:
  - Prompt audit answers: "Can Codex edit files before approval?" must be no.

## Pattern: Prevent Premature Execution

- When to use it: any plan-only, execute-after-approval, security, UI cleanup, or multi-file change prompt.
- Why it works: Codex operates by model/tool loop after a prompt; execution control must be explicit.
- Prompt structure:
  - "PLAN MODE ONLY."
  - "Do not edit, create, delete, rename, move, format, commit, push, deploy, publish, or run destructive commands."
  - "Read and inspect only."
  - "Stop after the plan and wait for this exact phrase: `APPROVED - EXECUTE`."
- Failure modes:
  - The prompt says "plan first" but also says "implement" in the same uncontrolled instruction.
  - The approval phrase is missing or vague.
- Verification method:
  - Inspect the generated prompt for forbidden actions and exact approval phrase.

## Pattern: PLAN MODE ONLY

- When to use it: complex, ambiguous, risky, broad, UI-heavy, or security-sensitive Codex work.
- Why it works: OpenAI recommends planning before complex or ambiguous work.
- Prompt structure:
  1. Operating role.
  2. Mission.
  3. Repository inspection rules.
  4. Source-of-truth order.
  5. Non-negotiable requirements.
  6. Plan output sections.
  7. Verification plan.
  8. Stop condition.
- Failure modes:
  - Plan is generic because the prompt did not require file-grounded inspection.
  - Plan skips risks and verification.
- Verification method:
  - Plan names likely files/areas only after inspection and lists risks per phase.

## Pattern: Approval-Gated Execution

- When to use it: multi-file implementation after a plan has been approved.
- Why it works: separates design from patching and lets the user constrain scope before tools mutate files.
- Prompt structure:
  - "Use the approved plan only."
  - "Re-read current state before editing."
  - "Implement in small phases."
  - "Run verification after risky phases."
  - "Stop if new risk requires changed scope."
- Failure modes:
  - Execution prompt reopens the entire problem and expands scope.
  - Codex ignores the approved plan and invents extra work.
- Verification method:
  - Final report maps changed files back to approved phases.

## Pattern: Stop / Pause / Recover

- When to use it: Codex starts editing during a plan-only request or starts broadening scope.
- Why it works: it interrupts the current trajectory and re-establishes instruction priority.
- Prompt structure:
  - "STOP. Do not continue editing."
  - "Report what you already changed."
  - "Do not revert unless I approve."
  - "Switch back to PLAN MODE ONLY."
  - "Produce a recovery plan and wait."
- Failure modes:
  - Asking Codex to "undo" without knowing what changed can revert user work.
- Verification method:
  - Codex reports modified files and pending commands before further edits.

## Pattern: Large UI Cleanup Workflow

- When to use it: dashboard cleanup, app premiumization, navigation/layout/theme/icon consistency.
- Why it works: large UI tasks need phased slices and browser evidence.
- Prompt structure:
  - Inspect design docs, component library, theme tokens, routes, and existing UI patterns.
  - Phase by surface: shell/nav, dashboard widgets, forms/actions, status screens, polish.
  - Require responsive, empty/loading/error/disabled/focus/hover states.
  - Require browser QA and screenshots when practical.
- Failure modes:
  - Marketing-style redesign unrelated to existing product.
  - Theme drift and inconsistent icons.
  - Typecheck passes but UI is broken.
- Verification method:
  - Browser QA across routes/viewports plus lint/typecheck/build.

## Pattern: Security-Sensitive App Workflow

- When to use it: auth, sessions, secrets, password managers, encryption, permissions.
- Why it works: Codex has tool access, so prompts must preserve trust boundaries before implementation.
- Prompt structure:
  - Identify assets, trust boundaries, secrets, dangerous sinks.
  - Inspect existing security docs and code paths.
  - Require plan-first for auth or secret-handling changes.
  - Include no-secret logging/storage/output rules.
  - Require regression tests or explicit manual checks.
- Failure modes:
  - UX fix weakens security.
  - Secret material appears in logs or screenshots.
  - Session persistence stores unsafe key material.
- Verification method:
  - Auth/session tests, storage review, log review, browser QA, secret scan when available.

## Pattern: Browser QA Workflow

- When to use it: UI implementation, login/session flows, dashboards, secret actions, update center, admin screens.
- Why it works: browser behavior is the user-visible truth.
- Prompt structure:
  - Start server only if needed and allowed.
  - Test flows, responsive sizes, keyboard/focus behavior, console errors, empty/loading/error states.
  - Prefer user-visible locators and web-first assertions when creating tests.
  - Capture screenshots or summarize visual evidence.
- Failure modes:
  - Only running `npm run build`.
  - Checking one viewport.
  - Ignoring console errors or text overflow.
- Verification method:
  - Browser walkthrough evidence and failed-state coverage.

## Pattern: Theme Consistency Workflow

- When to use it: premiumization, UI cleanup, design-system consistency.
- Why it works: theme drift is common when agents patch isolated screens.
- Prompt structure:
  - Inspect theme tokens, Tailwind config, CSS variables, component variants, icon package.
  - Reuse existing tokens and components before adding new styles.
  - Avoid unrelated palette changes.
  - Verify light/dark modes if supported.
- Failure modes:
  - Hardcoded colors.
  - Mixing icon sets.
  - New components bypass design system.
- Verification method:
  - Search changed files for hardcoded colors and mismatched icon imports.

## Pattern: Secret-Handling Workflow

- When to use it: password managers, API keys, auth tokens, logs, screenshots, telemetry.
- Why it works: preventing exposure must be explicit before Codex reads or runs commands.
- Prompt structure:
  - "Do not print, persist, infer, or expose secrets."
  - "Do not inspect env vars or auth stores unless explicitly authorized."
  - "Redact secret-like values from reports."
  - "Treat screenshots/test artifacts as leak surfaces."
- Failure modes:
  - Commands dump env, config, database, or logs.
  - Tests or screenshots include real secrets.
- Verification method:
  - Review final report and artifacts for secret-like values; run secret scan when available.

## Pattern: Session/Auth Debugging Workflow

- When to use it: login refresh issues, lock/unlock bugs, token/session persistence, password prompts.
- Why it works: session bugs are often boundary/invariant problems, not just UI state.
- Prompt structure:
  - Reproduce or trace login, refresh, lock, logout, expiry, restart.
  - Locate auth/session storage, key derivation, decrypt boundary, timers, route guards.
  - Fix root cause without persisting unsafe secrets.
  - Verify positive and negative paths.
- Failure modes:
  - Storing master password to avoid prompts.
  - Making sessions never expire.
  - Hiding auth errors.
- Verification method:
  - Browser QA plus targeted tests for refresh, expiry, lock, logout.

## Pattern: Final Verification / Report

- When to use it: every Codex implementation prompt.
- Why it works: completion is evidence, not assertion.
- Prompt structure:
  - Summary.
  - Changed files.
  - Verification commands and results.
  - Browser QA evidence if UI.
  - Security notes if auth/secrets.
  - Residual risks and unverified items.
- Failure modes:
  - "Done" with no checks.
  - Missing failed command details.
- Verification method:
  - Final report names exact checks, outcomes, and skipped items.

## Pattern: Split Large Codex Work Into Safe Phases

- When to use it: large app cleanup, premiumization, refactor, migration, auth/security work.
- Why it works: smaller tasks are easier for Codex to test and easier for users to review.
- Prompt structure:
  1. Discovery and file map.
  2. Risk-first fixes.
  3. Low-risk UI consistency pass.
  4. Focused feature restoration.
  5. Browser QA and regression checks.
  6. Final review and report.
- Failure modes:
  - One massive patch.
  - UI polish mixed with auth/security changes in a way that hides regressions.
- Verification method:
  - Each phase has acceptance criteria and a narrow check.
