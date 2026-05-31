# Usage

Use this project by asking Codex to generate, audit, or rewrite Codex prompts through the formal skill:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

## Turkish Examples

```text
Codex icin goal + full prompt uret. Konu: mevcut uygulamada dashboard premiumlastirma, navbar duzeltme, tema uyumu ve browser QA.
```

```text
Goal kullanmadan plan-only Codex promptu uret. Onay almadan dosya degistirmesin.
```

```text
Yorum yapma, sadece prompt ver. Codex icin plan-only prompt uret: mevcut dashboard premiumlastirma, update center sadelestirme, navbar responsive duzeltme, tema token uyumu, browser QA.
```

```text
Codex erken execute etti, STOP / RECOVER promptu uret. Butun dosya degisikliklerini dursun, mevcut durumu raporlasin, onaysiz devam etmesin.
```

```text
Bu Codex promptunu test et ve skorla. Scope creep, premature execution, browser QA, security constraints ve final report eksiklerini bul.
```

## English Examples

```text
Generate a Codex Goal + Full Prompt for improving an existing password manager dashboard. Include security constraints and browser QA.
```

```text
Create a no-Goal PLAN MODE ONLY Codex prompt. Codex must inspect first, produce a plan, and wait for approval before editing files.
```

```text
Only output the final prompt. No commentary. Build a Codex prompt for responsive navbar cleanup, theme token consistency, and browser QA.
```

```text
Create an APPROVED - EXECUTE prompt that continues from the approved plan, preserves existing behavior, runs tests, and reports changed files.
```

```text
Audit this Codex prompt using the rubric and revise it until it meets the enterprise bar.
```

## Response Modes

Use direct mode language when output shape matters:

- `PROMPT_ONLY`: final prompt only, no explanation.
- `GOAL_PLUS_PROMPT`: short Goal plus full prompt.
- `PLAN_ONLY`: inspection and plan only, no edits.
- `EXECUTE_AFTER_APPROVAL`: planning prompt plus explicit approval execution prompt.
- `PROMPT_AUDIT`: score, findings, revision notes.
- `PROMPT_REWRITE`: preserve intent and rewrite stronger.
- `STOP_RECOVER`: halt premature execution and recover control.

## Common Workflows

### Goal + Full Prompt

Use when you want a Codex Goal and a detailed first-message prompt:

```text
Codex icin goal + full prompt uret: [task].
```

### No-Goal PLAN MODE ONLY

Use when strict control matters and you do not want Codex to start editing:

```text
Goal kullanmadan plan-only Codex promptu uret: [task]. Onay almadan execute etmesin.
```

### Execute After Approval

Use for risky implementation tasks:

```text
Plan-only prompt + APPROVED - EXECUTE prompt uret. Codex once plan sunsun, sonra sadece onaydan sonra uygulasin.
```

### STOP / RECOVER

Use when Codex starts editing too early:

```text
Codex erken execute etti. STOP / RECOVER promptu uret.
```

### Prompt Audit

Use to test a Codex prompt:

```text
Bu Codex promptunu test et ve skorla: [prompt].
```
