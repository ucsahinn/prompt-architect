# Test Generated Prompt: Password Manager Improvement Plan

Date: 2026-05-31

Target agent: Codex

Prompt type: Goal + plan-only prompt + execute-after-approval prompt

Scenario summary: Existing password manager app. Improve dashboard, fix login refresh asking for the password every time, restore secret leak check, improve secret actions, simplify update center, premiumize server system screen, improve navbar/layout/icons/theme consistency, and preserve critical security and zero-knowledge constraints.

Knowledge used:

- `knowledge/distilled/prompt-quality-rubric.md`
- `knowledge/distilled/response-modes.md`
- `knowledge/distilled/prompt-generation-workflow.md`
- `knowledge/distilled/codex-prompting.md`
- `knowledge/distilled/ai-coding-agent-control.md`
- `knowledge/distilled/security-prompting-playbook.md`
- `knowledge/distilled/browser-qa-playbook.md`
- `knowledge/templates/codex-plan-execute-template.md`
- `knowledge/templates/security-agent-template.md`
- `knowledge/templates/ui-ux-agent-template.md`

## Short Codex Goal

Plan a safe, security-preserving improvement pass for the existing password manager app: dashboard quality, login refresh behavior, secret leak check, secret actions, update center, server system screen, navbar/layout/icons/theme consistency, and browser-verifiable UX. Do not edit files yet. Inspect first, produce a phased plan, and wait for approval before execution.

## Full Plan-Only Prompt

You are Codex operating as a senior product engineer, security-aware frontend engineer, and password-manager systems reviewer.

## Mission

Inspect the existing password manager repository and produce a precise implementation plan for a security-preserving improvement pass. The plan must cover:

- Improve the dashboard experience and information hierarchy.
- Fix the issue where refreshing after login asks for the password every time.
- Restore or repair the secret leak check flow.
- Improve secret actions so they are clear, safe, and ergonomic.
- Simplify the update center without removing necessary safety checks.
- Premiumize the server system screen so it looks and behaves like a polished administrative surface.
- Improve navbar, layout, icons, spacing, and theme consistency.
- Preserve zero-knowledge behavior, encryption boundaries, and secret-handling guarantees.

Do not edit files in this first response. Plan only.

## Repository Inspection Rules

1. Inspect the repository before proposing changes.
2. Read project-level instructions first, including `AGENTS.md`, README files, design docs, security docs, package scripts, and relevant app architecture notes.
3. Use fast search first, preferably `rg` or `rg --files`.
4. Identify the current frontend framework, routing model, auth/session mechanism, storage layer, encryption boundary, and test/build scripts.
5. Locate the existing dashboard, login/session refresh flow, leak check implementation, secret actions, update center, server system screen, navbar/layout shell, icon system, and theme tokens before planning edits.
6. Treat existing code and docs as the source of truth. Do not assume file names or architecture before inspection.

## Source-Of-Truth Rules

Use this priority order:

1. Repository instructions and security docs.
2. Existing auth, crypto, session, storage, and secret-management code.
3. Existing tests and browser smoke flows.
4. Existing design system, theme tokens, component library, and icon conventions.
5. Package scripts and build/test configuration.
6. User requirements in this prompt.

If sources conflict, report the conflict and recommend the safest path. Do not silently choose a risky interpretation.

## Non-Negotiable Requirements

- Do not weaken zero-knowledge security.
- Do not store, log, print, transmit, or expose master passwords, derived keys, plaintext secrets, tokens, private keys, or recovery material.
- Do not move plaintext secret handling outside the existing trusted decrypt/edit/copy/export boundaries.
- Do not add telemetry for sensitive values.
- Do not persist master password material to fix the refresh issue.
- Do not bypass authentication, authorization, CSRF protections, encryption checks, or existing validation.
- Do not hide security errors to make the UI appear successful.
- Do not remove update checks, leak checks, or safety warnings unless the plan replaces them with an equal or stronger approach.
- Do not redesign unrelated areas.
- Do not add dependencies unless the repository lacks a safe existing pattern and the plan explains why a dependency is necessary.
- Do not commit, push, publish, deploy, rotate secrets, or run destructive commands.

## Required Planning Output

Return a plan with these sections, in this exact order:

1. `Repository Findings`
   - Relevant files and components found.
   - Auth/session refresh flow summary.
   - Secret leak check flow summary.
   - Secret action surface summary.
   - Update center summary.
   - Server system screen summary.
   - Layout/navbar/theme/icon system summary.

2. `Security And Zero-Knowledge Boundaries`
   - Where plaintext can exist.
   - Where keys can exist.
   - What must never be persisted or logged.
   - How the refresh fix should avoid storing the master password.
   - Any risky unknowns that require caution.

3. `Proposed Implementation Phases`
   - Phase 1: Session refresh root-cause fix.
   - Phase 2: Secret leak check restoration.
   - Phase 3: Secret actions polish and safety states.
   - Phase 4: Dashboard, navbar, layout, icons, and theme consistency.
   - Phase 5: Update center simplification.
   - Phase 6: Server system screen premiumization.
   - Phase 7: Tests, browser QA, regression checks, and final polish.

4. `File-Level Change Plan`
   - File or directory.
   - Intended change.
   - Risk level.
   - Verification method.

5. `Acceptance Criteria`
   - Dashboard is clearer and responsive.
   - Refresh after login does not unnecessarily ask for the password when an active secure session should remain valid.
   - Refresh behavior still asks for the password when the secure session has expired, been locked, or lost required key material.
   - Leak check works or fails with a clear secure error state.
   - Secret actions are discoverable, guarded where risky, and do not expose plaintext longer than necessary.
   - Update center is simpler while keeping safety, version, and failure information.
   - Server system screen has polished information hierarchy, consistent controls, and no misleading status.
   - Navbar/layout/icons/theme are consistent across desktop and mobile.
   - No secrets appear in logs, screenshots, local storage, test output, or browser console output.

6. `Verification Plan`
   - Static checks.
   - Unit or integration tests.
   - Build/typecheck/lint commands.
   - Browser QA scenarios.
   - Security regression checks.

7. `Questions Or Approval Needed`
   - Ask only questions that block safe implementation.
   - If no questions block implementation, say exactly: `No blocking questions. Ready for approval to execute.`

## Browser QA Checklist To Include In The Plan

Plan browser QA for:

- Login, unlock, refresh, lock, logout, expired session, and restart behavior.
- Dashboard desktop and mobile responsive layout.
- Secret list, search/filter if present, create/edit/view/copy/delete/export actions if present.
- Leak check success, failure, offline, and disabled states.
- Update center idle/checking/update available/error/up-to-date states.
- Server system screen status cards, tables, logs, or controls if present.
- Navbar active states, collapsed/mobile states, keyboard focus, and icons.
- Theme consistency in light/dark modes if both exist.
- Console errors and network failures.

## Security Review Checklist To Include In The Plan

Plan checks for:

- No plaintext secrets in persistent storage.
- No master password persistence.
- No sensitive logs.
- No secret-like values in screenshots, test artifacts, or debug output.
- No weakened auth/session expiration.
- No insecure dependency additions.
- No unreviewed remote calls involving secrets.
- Clear disabled, loading, and error states for security-sensitive actions.

## Final Response Rules

- Do not edit files.
- Do not run broad destructive commands.
- Do not produce implementation code yet.
- Keep the plan concrete and file-grounded.
- If a requested fix conflicts with zero-knowledge security, explain the conflict and propose the safest alternative.
- End with either `No blocking questions. Ready for approval to execute.` or the minimum blocking questions needed for safe execution.

## Approval Execute Prompt

APPROVED - EXECUTE PASSWORD MANAGER IMPROVEMENT PLAN

Use the approved plan from your previous response as the implementation scope.

Execution rules:

1. Re-read the approved plan and current repository state before editing.
2. Implement only the approved phases and file-level changes.
3. Keep changes small, coherent, and reversible.
4. Preserve zero-knowledge guarantees and existing security boundaries.
5. Do not persist master passwords, plaintext secrets, derived keys, private keys, tokens, or recovery material.
6. Do not log sensitive values.
7. Do not remove safety checks unless replacing them with equal or stronger checks.
8. Use existing components, theme tokens, icon libraries, patterns, scripts, and test utilities where available.
9. Do not perform unrelated redesigns or broad rewrites.
10. If implementation reveals a new security risk, stop and report before continuing.
11. If a change requires committing, pushing, deploying, rotating secrets, changing production data, or destructive cleanup, stop and ask for explicit approval.

Required execution workflow:

1. Confirm the approved plan scope.
2. Apply the smallest coherent code changes for each approved phase.
3. Run the narrowest meaningful verification after each risky phase when practical.
4. Run final lint/typecheck/test/build commands available in the repository, choosing the narrowest meaningful set first and broader checks when justified.
5. Run browser QA for the approved user flows if a runnable UI is available.
6. Inspect logs, console output, and storage surfaces for accidental secret exposure where practical.
7. Report changed files, verification results, residual risks, and any follow-up needed.

Final report format:

1. `Summary`
2. `Changed Files`
3. `Verification`
4. `Browser QA`
5. `Security Notes`
6. `Residual Risks`
7. `Follow-Up`

## Verification Checklist

- Repository instructions were read before planning.
- Relevant files were identified before implementation planning.
- Login refresh root cause is investigated before proposing a fix.
- Zero-knowledge boundaries are described explicitly.
- Leak check behavior includes success and failure states.
- Secret actions include safety and visibility constraints.
- Update center simplification keeps necessary status and error data.
- Server system screen changes include accessible, responsive, theme-consistent UI expectations.
- Verification commands are repository-specific, not invented blindly.
- Stop rules cover secrets, destructive commands, production changes, and scope drift.

## Browser QA Checklist

- Login works.
- Refresh after login behaves according to secure session rules.
- Lock/logout/expired-session paths still require authentication.
- Dashboard renders cleanly on desktop and mobile.
- Secret action controls are clear, keyboard reachable, and guarded where destructive.
- Leak check shows secure loading, success, failure, disabled, and offline states as applicable.
- Update center communicates current version, available update, progress, failure, and completion states.
- Server system screen has readable hierarchy, stable layout, and no misleading health claims.
- Navbar active, collapsed, mobile, hover, focus, and disabled states are consistent.
- Light/dark theme surfaces use consistent tokens where available.
- Browser console has no unexpected errors.
- Screenshots and test artifacts do not reveal real secrets.

## Security Notes

- The refresh fix must not store the master password or plaintext key material.
- If the app needs post-refresh decrypted access, prefer the existing secure session or unlock model rather than silent persistence of sensitive material.
- Treat browser storage, app logs, crash reports, screenshots, and test artifacts as possible leak surfaces.
- Any remote leak-check integration must avoid sending plaintext secrets unless the existing design already includes a safe k-anonymity or equivalent privacy-preserving protocol.
- If the repository currently violates zero-knowledge expectations, report the finding and propose a safe remediation before broad UI polish.

## Stop Conditions

Stop and ask for approval if:

- A fix requires storing or transmitting master passwords, plaintext secrets, or derived keys.
- A requested UI improvement would hide or downgrade a security warning.
- A dependency addition is needed for auth, crypto, storage, update, or leak-check behavior.
- A database migration, credential rotation, deployment, commit, push, production action, or destructive cleanup is needed.
- Existing tests reveal security regressions that cannot be resolved within the approved scope.
- The repository behavior conflicts with the scenario assumptions.

## Rubric Score

Enterprise bar: average at least 4.0, no category below 3, and at least 4 on safety/security, scope control, verifiability, and output format precision.

| Category | Score | Notes |
| --- | ---: | --- |
| Clarity | 5 | Goal, phases, and expected output are concrete. |
| Completeness | 5 | Includes role, mission, context, scope, non-goals, workflow, verification, browser QA, security notes, and stop rules. |
| Context quality | 5 | Requires inspection, source-of-truth ordering, and conflict handling. |
| Constraint quality | 5 | Constraints are specific and testable, especially around secrets and session behavior. |
| Scope control | 5 | Plan-only first, approved execution second, no unrelated redesigns or risky actions. |
| Safety/security | 5 | Zero-knowledge, no-secret, logging, remote call, storage, and approval boundaries are explicit. |
| Agent compatibility | 5 | Uses Codex-friendly inspection, planning, execution, verification, and final-report rules. |
| Verifiability | 5 | Includes commands, browser QA, security checks, acceptance criteria, and evidence requirements. |
| Output format precision | 5 | Required plan sections and final report sections are exact and ordered. |
| Resistance to hallucination/scope creep | 5 | Requires repo-grounding, assumptions/conflict reporting, and bounded scope. |
| Practical usability | 5 | Ready to paste as a plan-first Codex instruction pack. |

Final result: Passes enterprise bar. No revision needed.
