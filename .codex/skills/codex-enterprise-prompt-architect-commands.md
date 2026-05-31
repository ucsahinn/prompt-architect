# Codex Enterprise Prompt Architect Commands

Compatibility shim: this file is preserved for older references. The formal command reference now lives at `.codex/skills/codex-enterprise-prompt-architect/commands.md`; the formal skill entrypoint is `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`.

Short command-style prompts for invoking the `codex-enterprise-prompt-architect` workflow.

## /codex-prompt goal-plus-full

What it does: Creates a Codex Goal + Full Prompt package, including approval execution when relevant.

Required input:
- Task goal.
- Project context.
- Constraints.
- Verification expectations.

Output format:
- Short Goal.
- Full Prompt.
- APPROVED - EXECUTE prompt if needed.
- Verification and stop conditions.

Example usage in Turkish:

```text
/codex-prompt goal-plus-full
Codex için goal + full prompt üret. Konu: mevcut uygulamada ayarlar ekranını iyileştir, tema uyumunu koru, browser QA ekle, kapsam dışına çıkma.
```

## /codex-prompt plan-only

What it does: Creates a no-goal PLAN MODE ONLY Codex prompt that inspects, plans, and stops before edits.

Required input:
- Task goal.
- Target project or area.
- Must-have requirements.
- Must-not-do constraints.
- Approval phrase.

Output format:
- No-goal usage recommendation.
- PLAN MODE ONLY prompt.
- Verification checklist.
- Stop conditions.

Example usage in Turkish:

```text
/codex-prompt plan-only
Goal kullanmadan plan-only Codex promptu üret. Konu: dashboard premiumlaştırma, navbar düzeltme, tema uyumu. Onay almadan execute etmesin.
```

## /codex-prompt execute-after-approval

What it does: Creates a two-phase Codex prompt: plan first, then execute only after explicit approval.

Required input:
- Task goal.
- Approval phrase.
- Scope.
- Verification requirements.

Output format:
- Phase 1 plan-only prompt.
- Phase 2 APPROVED - EXECUTE prompt.
- Final report format.
- Stop conditions.

Example usage in Turkish:

```text
/codex-prompt execute-after-approval
Codex için execute-after-approval promptu üret. Önce plan yapsın, ben APPROVED - EXECUTE yazmadan dosya değiştirmesin.
```

## /codex-prompt stop-recover

What it does: Creates a STOP / RECOVER prompt for when Codex starts editing too early or leaves scope.

Required input:
- What Codex did.
- Expected mode.
- Whether revert is allowed.

Output format:
- STOP command.
- Changed-files report request.
- Command report request.
- No-revert rule.
- Recovery plan request.

Example usage in Turkish:

```text
/codex-prompt stop-recover
Codex plan-only iken edit yapmaya başladı. Durdurma/recover promptu üret; revert yapmasın, önce ne değiştirdiğini raporlasın.
```

## /codex-prompt ui-ux

What it does: Creates a Codex UI/UX implementation prompt with design-system consistency and browser QA.

Required input:
- Target screen/flow.
- Desired UI outcome.
- Existing design constraints.
- Browser QA expectations.

Output format:
- Codex prompt with inspection rules.
- UI/UX requirements.
- Browser QA checklist.
- Verification and final report format.

Example usage in Turkish:

```text
/codex-prompt ui-ux
Mevcut uygulamada dashboard ve navbar için premium UI promptu üret. Tema tokenları, icon tutarlılığı, responsive davranış ve browser QA zorunlu olsun.
```

## /codex-prompt security

What it does: Creates a Codex security-sensitive prompt for auth, secrets, password managers, encryption, or risky tool use.

Required input:
- Security-sensitive area.
- Assets and risks if known.
- Required checks.
- Forbidden actions.

Output format:
- Codex prompt with security constraints.
- Source/sink and secret-handling rules.
- Verification checklist.
- Stop conditions.

Example usage in Turkish:

```text
/codex-prompt security
Password manager için security promptu üret. Master password, derived key, plaintext secret loglanmasın veya saklanmasın. Önce plan yapsın.
```

## /codex-prompt audit

What it does: Scores and audits a Codex prompt using the Prompt Lab rubric and Codex evaluation workflow.

Required input:
- Prompt to audit.
- Intended Codex mode.
- Task type.

Output format:
- Score table.
- Red flags.
- Required fixes.
- Ship/revise/reject decision.
- Revised prompt only if requested.

Example usage in Turkish:

```text
/codex-prompt audit
Bu Codex promptunu test et ve skorla. Scope creep, erken execute, browser QA ve security constraints açısından değerlendir: [prompt]
```

## /codex-prompt prompt-only

What it does: Returns only the final prompt. No commentary, no explanation, no extra suggestions.

Required input:
- Prompt request.
- Target mode.
- Requirements and constraints.

Output format:
- Final prompt only.

Example usage in Turkish:

```text
/codex-prompt prompt-only
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: mevcut uygulamada dashboard premiumlaştırma, navbar düzeltme, tema uyumu ve browser QA.
```
