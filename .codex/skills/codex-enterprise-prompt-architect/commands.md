# Commands

Use these commands as natural shortcuts for this skill.

## Goal + Full Prompt

```text
/codex-prompt goal-plus-full
Codex icin goal + full prompt uret: [gorev]. Context: [context]. Must not: [constraints].
```

Outputs:

- Short Goal.
- Full Prompt.
- APPROVED - EXECUTE prompt if relevant.
- Verification and stop conditions.

## Plan-Only

```text
/codex-prompt plan-only
Goal kullanmadan plan-only Codex promptu uret: [gorev]. Onay almadan execute etmesin.
```

Outputs:

- No-goal recommendation.
- PLAN MODE ONLY prompt.
- Approval phrase.
- Verification checklist.
- Stop conditions.

## Execute After Approval

```text
/codex-prompt execute-after-approval
Codex once plan yapsin, ben APPROVED - EXECUTE yazmadan dosya degistirmesin: [gorev].
```

Outputs:

- Plan-only phase.
- APPROVED - EXECUTE phase.
- Final report format.
- Stop conditions.

## Stop / Recover

```text
/codex-prompt stop-recover
Codex plan-only iken edit yapmaya basladi. Durdurma/recover promptu uret; revert yapmasin, once ne degistirdigini raporlasin.
```

Outputs:

- STOP command.
- Changed-file report request.
- Command report request.
- No-revert rule.
- Recovery plan request.

## UI/UX

```text
/codex-prompt ui-ux
Mevcut dashboard icin premium UI promptu uret. Tema tokenlari, responsive navbar, icon tutarliligi ve browser QA zorunlu olsun.
```

Outputs:

- Codex UI/UX prompt.
- Browser QA checklist.
- Verification plan.
- Stop conditions.

## Security

```text
/codex-prompt security
Password manager icin security-sensitive Codex promptu uret. Master password, derived key ve plaintext secret loglanmasin veya saklanmasin.
```

Outputs:

- Security-sensitive Codex prompt.
- Secret-handling rules.
- Verification plan.
- Stop conditions.

## Audit

```text
/codex-prompt audit
Bu Codex promptunu test et ve skorla: [prompt]
```

Outputs:

- Rubric score.
- Red flags.
- Required fixes.
- Ship/revise/reject decision.

## PROMPT_ONLY

```text
/codex-prompt prompt-only
Yorum yapma, sadece prompt ver. Codex icin plan-only prompt uret: [gorev].
```

Outputs:

- Final prompt only.
- No commentary.
- No explanation.
- No suggestions.

## Natural-Language Triggers

```text
Codex icin goal + full prompt uret: [gorev]
```

```text
Goal kullanmadan plan-only Codex promptu uret: [gorev]
```

```text
Bu Codex promptunu scope creep'e karsi guclendir: [prompt]
```

```text
Bu Codex promptuna browser QA ekle: [prompt]
```

```text
Bu Codex promptuna security constraints ekle: [prompt]
```

```text
Bu daginik talimatlari Codex enterprise promptuna cevir, yorum yapma: [talimatlar]
```
