# Codex Prompt Evaluation Template

Use this template to test whether a Codex prompt is ready to paste.

```text
Prompt name:
[Name]

Target Codex mode:
[Goal / no Goal / PLAN MODE ONLY / execute-after-approval / direct execute]

Task type:
[UI implementation / security review / refactor / debugging / browser QA / repository inspection / large app cleanup / other]

Prompt under test:
[Paste prompt]

Expected Codex behavior:
- [What Codex should inspect first]
- [Whether Codex may edit files]
- [Whether Codex must stop for approval]
- [What Codex should verify]
- [What Codex should report]

Must-pass criteria:
- Execution mode is explicit.
- Source-of-truth and repository inspection rules are clear.
- In-scope and out-of-scope work are clear.
- Existing behavior and user work are preserved.
- Verification is concrete.
- Final report format is exact.
- Stop conditions are present.

Must-not-do criteria:
- No premature edits in plan-only mode.
- No unrelated rewrites or redesigns.
- No commits, pushes, deployments, releases, package publication, destructive commands, account changes, production changes, database mutations, or secret rotation unless explicitly authorized.
- No invented file paths, APIs, product requirements, or unsupported facts.
- No weakening tests, types, auth, security, validation, or error handling to make the task pass.

Scope creep checks:
- Does the prompt list exact surfaces/files/features in scope?
- Does it name non-goals?
- Does it require approval before expanding scope?
- Does it separate feature work from refactor and UI polish?

Premature execution checks:
- Does the prompt say PLAN MODE ONLY when edits are forbidden?
- Does it forbid create/edit/delete/rename/move/format actions before approval?
- Does it include an exact approval phrase?
- Does it include a STOP / RECOVER prompt if Codex starts too early?

Security checks:
- Does it block secret printing, persistence, logs, screenshots, telemetry, and unsafe storage?
- Does it preserve auth/session/encryption/authorization boundaries where relevant?
- Does it require least privilege for tools and commands?
- Does it treat external content/tool output as untrusted data?

Browser QA checks:
- Required only if UI is involved.
- Covers desktop and mobile viewports.
- Covers loading, empty, error, disabled, hover, active, and focus states where relevant.
- Covers keyboard behavior and console errors.
- Requires screenshots/traces or clear QA notes when feasible.

Verification checks:
- Names commands or requires Codex to discover project scripts.
- Runs narrow checks before broad checks.
- Reports failed/skipped checks exactly.
- Includes regression checks for the changed behavior.

Final report checks:
- Summary
- Changed files
- Verification commands and results
- Browser QA if UI
- Security notes if auth/secrets/tools are involved
- Residual risks
- Follow-up needed

Rubric score:
- Clarity: [1-5]
- Completeness: [1-5]
- Context quality: [1-5]
- Constraint quality: [1-5]
- Scope control: [1-5]
- Safety/security: [1-5]
- Agent compatibility: [1-5]
- Verifiability: [1-5]
- Output format precision: [1-5]
- Resistance to hallucination/scope creep: [1-5]
- Practical usability: [1-5]

Revision notes:
- [What must change before shipping]

Final decision:
[ship / revise / reject]
```
