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

## 2026-06-14 - Full Prompt Lab Upgrade Release Pattern

Date: 2026-06-14

User request summary: Execute the approved full Prompt Lab repository upgrade, improve the Codex skill package, add validation gates, refresh source-backed guidance, polish the public README storefront, and prepare the explicit commit/push/release path.

Scenario summary: Broad prompt-skill repository improvement after explicit approval, covering skill routing, knowledge-base updates, source-card discipline, subagent/tool boundaries, dependency-free validation, GitHub Actions validation, bilingual README polish, secret hygiene, release notes, and release-publication readiness.

Target agent: Codex

Prompt type: Approved execution after PLAN MODE ONLY + release verification

Knowledge used:
- `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`
- `knowledge/distilled/response-modes.md`
- `knowledge/distilled/browser-qa-playbook.md`
- `knowledge/distilled/security-prompting-playbook.md`
- `knowledge/templates/output-formats.md`
- `knowledge/sources/official-docs.md`
- `knowledge/sources/security-and-safety.md`
- `knowledge/sources/research-papers.md`
- `docs/PUBLIC_REPO_CHECKLIST.md`
- `docs/VALIDATION.md`
- OpenAI Codex docs: skills, AGENTS.md, MCP, plugins, subagents, approvals/security, prompting
- OpenAI tools docs
- OWASP LLM Top 10 2025
- Playwright MCP documentation

Final prompt: This repository upgrade documents the reusable pattern across the skill package, docs, validator, and release notes.

Verification/quality notes:
- Preserves Codex as the primary target and does not turn the repo into a generic prompt library.
- Adds a real validation command and GitHub Actions workflow instead of fake badges.
- Strengthens source-backed prompt generation, MCP/tool safety, subagent routing, and release gates.
- Keeps `.playwright-mcp/` local browser artifacts out of source control.

Follow-up needed: After the approved push/release completes, watch the first GitHub Actions run and update release notes if the public workflow result reveals a new issue.

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

## 2026-05-31 - GitHub Repository Improvement Codex Prompt

Date: 2026-05-31

User request summary: Generate a Codex prompt that uses a user-provided local repository strategy note and additional best-practice context to audit, organize, improve, and polish the user's existing repositories for public GitHub trust, visual storefront quality, documentation, bilingual presentation, security hygiene, and maintainability.

Scenario summary: Broad existing-repository cleanup and public repo readiness workflow with strict plan-only first phase, approval-gated execution, README storefront and visual asset strategy, no commit/push/deploy without explicit authorization, security/leak-prevention controls, and repo-specific verification.

Target agent: Codex

Prompt type: No-goal PLAN MODE ONLY + optional Goal + ONAYLANDI - UYGULA + STOP / RECOVER

Knowledge used:
- `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`
- `knowledge/distilled/codex-prompting.md`
- `knowledge/distilled/codex-workflow-patterns.md`
- `knowledge/distilled/response-modes.md`
- `knowledge/distilled/evaluation-workflows.md`
- `knowledge/distilled/prompt-quality-rubric.md`
- `knowledge/distilled/public-repo-lessons.md`
- `knowledge/templates/output-formats.md`
- User-provided local repository strategy note
- GitHub Docs: About READMEs, community profiles, repository security settings
- OpenAI Codex Docs: prompting, AGENTS.md, agent approvals and security

Final prompt: Stored at `knowledge/outputs/github-repo-improvement-codex-prompt.md`.

Verification/quality notes:
- Quality score: 55/55 across 11 rubric categories.
- Meets enterprise bar with all categories scored 5/5.
- Uses no-goal plan-only by default because repository-wide improvement is broad and may touch docs, CI, security policy, GitHub workflows, and public release surfaces.
- Includes exact approval phrase `ONAYLANDI - UYGULA`.
- Includes repository inspection rules, source-of-truth order, visual storefront requirements, asset safety rules, in-scope improvement principles, scorecard, phased execution plan, verification, browser QA, secret/leak-prevention rules, and stop/recover prompt.
- Blocks commits, pushes, deployments, releases, dependency installs, destructive commands, secret access, and GitHub settings mutations unless separately approved.

Follow-up needed: None.
