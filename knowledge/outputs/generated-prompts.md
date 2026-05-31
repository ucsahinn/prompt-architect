# Generated Prompts Ledger

This file stores prompt outputs generated for the user. Keep reusable templates in `knowledge/templates/`; store actual generated prompts here.

## Entry Format

```text
Date:
User request summary:
Target agent:
Prompt type:
Knowledge used:
Final prompt:
Verification/quality notes:
Follow-up needed:
```

## Ledger Rules

- Append generated prompts unless the user explicitly says not to save them.
- Preserve the user's intent and the final prompt text.
- Keep knowledge references short: name the source files or templates used.
- Include quality notes from `knowledge/distilled/prompt-quality-rubric.md`.
- Mark follow-up as `None` when no follow-up is needed.

## 2026-05-31 - Workspace Bootstrap Prompt

Date: 2026-05-31

User request summary: Build a prompt-engineering research and prompt-generation workspace focused on prompt engineering, context engineering, AI agent workflows, Codex/Claude/Gemini prompting, and enterprise AI instruction design.

Target agent: Codex

Prompt type: Plan-gated workspace build prompt.

Knowledge used: User-provided operating model plus first-pass official and research sources.

Final prompt: Stored in the conversation, not duplicated here to avoid bloating the ledger.

Verification/quality notes:
- This workspace is not a general software project.
- Research should be bounded and source-grounded.
- Generated prompts should default to Codex when target agent is unspecified.
- Workspace scaffold exists.
- Source cards include title, URL, date checked, summary, reusable lessons, confidence, and applicability.
- Templates include scope, non-goals, verification, output format, and stop conditions.

Follow-up needed: Continue adding source cards and generated prompts through bounded, task-specific passes.

## 2026-05-31 - Password Manager Improvement Plan Prompt

Date: 2026-05-31

User request summary: Generate a real enterprise Codex prompt for an existing password manager app that needs dashboard improvements, login refresh fix, restored secret leak check, improved secret actions, simplified update center, premium server system screen, navbar/layout/icon/theme consistency, and strict zero-knowledge security constraints.

Scenario summary: Existing password manager app improvement pass with plan-first execution, approval gate, browser QA, and security regression checks.

Target agent: Codex

Prompt type: Goal + Plan-only + Execute-after-approval

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

Final prompt: Stored at `knowledge/outputs/test-generated-prompt.md`.

Verification/quality notes:
- Quality score: 55/55 across 11 rubric categories.
- Meets enterprise bar with all categories scored 5/5.
- Includes short Codex goal, full plan-only prompt, approval execute prompt, verification checklist, browser QA checklist, security notes, and stop conditions.
- Plan-only prompt blocks file edits until explicit approval.
- Security constraints prohibit master password persistence, plaintext secret logging/storage, weakened auth/session behavior, and unsafe remote leak-check behavior.

Follow-up needed: None for this test prompt.

## 2026-05-31 - Sample Skill Output

Date: 2026-05-31

User request summary: Create a sample PROMPT_ONLY output from the reusable Codex Enterprise Prompt Architect workflow for a no-goal plan-only dashboard/navbar/theme/browser-QA prompt.

Target agent: Codex

Prompt type: PROMPT_ONLY, no-goal PLAN MODE ONLY

Knowledge used:
- `.codex/skills/codex-enterprise-prompt-architect.md`
- `knowledge/distilled/response-modes.md`
- `knowledge/distilled/codex-prompting.md`
- `knowledge/distilled/codex-workflow-patterns.md`
- `knowledge/templates/output-formats.md`

Final prompt: Stored at `knowledge/outputs/sample-skill-output.md`.

Verification/quality notes:
- Sample output contains only the final prompt content.
- Prompt blocks execution before approval.
- Prompt includes UI/UX requirements, browser QA, verification plan, and stop conditions.

Follow-up needed: None.

## 2026-05-31 - Formal Skill Package Test

Date: 2026-05-31

User request summary: Use the formal Codex Enterprise Prompt Architect skill package to generate a PROMPT_ONLY no-goal plan-only Codex prompt for dashboard premiumization, update center simplification, responsive navbar fixes, theme token consistency, and browser QA.

Target agent: Codex

Prompt type: PROMPT_ONLY + PLAN_ONLY + no Goal

Knowledge used:
- `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`
- `.codex/skills/codex-enterprise-prompt-architect/response-modes.md`
- `.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md`
- `knowledge/distilled/codex-prompting.md`
- `knowledge/distilled/codex-workflow-patterns.md`
- `knowledge/distilled/prompt-quality-rubric.md`

Final prompt: Stored at `knowledge/outputs/formal-skill-package-test.md`.

Verification/quality notes:
- Output is prompt-only with no explanatory wrapper.
- Prompt uses no Goal and explicitly blocks edits before approval.
- Prompt includes repository inspection rules, UI/UX scope, browser QA, verification plan, approval phrase, and stop conditions.
- Meets enterprise bar for clarity, scope control, Codex compatibility, verifiability, and output precision.

Follow-up needed: None.

## 2026-05-31 - Codex Premium App Prompt Test

Date: 2026-05-31

User request summary: Generate a Codex-specific enterprise prompt package for an existing password manager app that needs overview widgets, 15-minute login refresh fix, secret leak checking, secret actions, update center simplification, server system premiumization, navbar/layout/icons/theme consistency, strict no-execution-before-planning control, and zero-knowledge security constraints.

Scenario summary: Existing password manager premium app cleanup and security-sensitive workflow, using no-goal PLAN MODE ONLY first, optional Goal warning, approval-gated execution, browser QA, and stop/recover control.

Target agent: Codex

Prompt type: No-goal PLAN MODE ONLY + optional Goal + APPROVED - EXECUTE + STOP / RECOVER

Knowledge used:
- `knowledge/distilled/codex-prompting.md`
- `knowledge/distilled/codex-workflow-patterns.md`
- `knowledge/distilled/evaluation-workflows.md`
- `knowledge/distilled/ai-coding-agent-control.md`
- `knowledge/distilled/browser-qa-playbook.md`
- `knowledge/distilled/security-prompting-playbook.md`
- `knowledge/distilled/prompt-quality-rubric.md`
- `knowledge/templates/codex-goal-template.md`
- `knowledge/templates/codex-plan-execute-template.md`
- `knowledge/templates/prompt-eval-template.md`

Final prompt: Stored at `knowledge/outputs/codex-premium-app-prompt-test.md`.

Verification/quality notes:
- Quality score: 55/55 across 11 rubric categories.
- Meets enterprise bar with all categories scored 5/5.
- Recommends no Goal for strict plan-only control and includes an optional Goal warning.
- Includes PLAN MODE ONLY prompt, approval execution prompt, STOP / RECOVER prompt, verification checklist, browser QA checklist, security constraints, and final report format.

Follow-up needed: None for this test prompt.
