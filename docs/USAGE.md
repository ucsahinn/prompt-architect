# Usage

This page shows the main ways to use Codex Enterprise Prompt Architect. English and Turkish examples are included because many real Codex workflows mix both.

Skill entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

## English

### Goal + Full Prompt

Use when you want a short Codex Goal plus a detailed first-message prompt.

```text
Generate a Codex Goal + Full Prompt for improving an existing dashboard. Include browser QA, verification, final report format, and stop conditions.
```

### no-Goal PLAN MODE ONLY

Use when Codex must inspect and plan before any edits.

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for fixing an auth/session bug. Codex must inspect the repository first, produce a plan, and wait for approval before editing files.
```

### PROMPT_ONLY

Use when you want no commentary around the generated prompt.

```text
Only output the final prompt. No commentary. Create a no-Goal PLAN MODE ONLY Codex prompt for dashboard polish, theme consistency, and browser QA.
```

### APPROVED — EXECUTE

Use after a plan has been reviewed.

```text
Create an APPROVED — EXECUTE prompt that follows only the approved plan, preserves existing behavior, runs verification, and reports changed files.
```

### STOP / RECOVER

Use when Codex starts editing too early or leaves scope.

```text
Codex started editing before approval. Create a STOP / RECOVER prompt that stops work, asks for changed files and commands run, avoids automatic revert, and returns to PLAN MODE ONLY.
```

### Prompt Audit

Use to evaluate a Codex prompt before pasting it into a risky repo.

```text
Audit this Codex prompt. Score execution control, scope control, security constraints, browser QA, verification, output format, and stop conditions: [prompt]
```

### Research-Backed Prompt

Use when the prompt depends on current Codex behavior, MCP/tool guidance, security standards, provider docs, or public repository claims.

```text
Create a research-backed Codex prompt for improving a public skill repository. Use official docs first, record source quality, separate facts from interpretation, and include research stop criteria.
```

### Subagent-Aware Prompt

Use when a broad task benefits from bounded specialist work.

```text
Create a Codex prompt for a broad repository upgrade. Include safe subagent routing for code mapping, docs research, release verification, and security review. Do not allow every subagent or tool by default.
```

## Türkçe

### Goal + Full Prompt

Kısa Codex Goal ve detaylı ilk mesaj promptu istediğinizde kullanın.

```text
Codex için goal + full prompt üret. Konu: mevcut dashboard iyileştirme, navbar düzeltme, tema uyumu ve browser QA.
```

### no-Goal PLAN MODE ONLY

Codex'in dosya değiştirmeden önce sadece inceleme ve plan yapmasını istediğinizde kullanın.

```text
Goal kullanmadan plan-only Codex promptu üret. Codex önce repo incelemesi yapsın, plan sunsun ve onay almadan dosya değiştirmesin.
```

### PROMPT_ONLY

Yalnızca prompt çıktısı istediğinizde kullanın.

```text
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: mevcut dashboard premiumlaştırma, tema uyumu ve browser QA.
```

### APPROVED — EXECUTE

Plan onaylandıktan sonra execution talimatı üretmek için kullanın.

```text
Bu plan için APPROVED — EXECUTE promptu üret. Codex sadece onaylanan planı uygulasın, kapsamı genişletmesin, doğrulama yapsın ve değişen dosyaları raporlasın.
```

### STOP / RECOVER

Codex erken execute ettiğinde veya kapsam dışına çıktığında kullanın.

```text
Codex erken execute etti. STOP / RECOVER promptu üret. Değişen dosyaları ve çalıştırılan komutları raporlasın, otomatik revert yapmasın, PLAN MODE ONLY'ye dönsün.
```

### Prompt Audit

Codex promptunu kullanmadan önce kontrol etmek için kullanın.

```text
Bu Codex promptunu test et ve skorla. Scope creep, erken execute, security constraints, browser QA, verification, output format ve stop conditions açısından değerlendir: [prompt]
```

### Research-Backed Prompt

Güncel Codex davranışı, MCP/tool rehberi, güvenlik standardı, provider dokümanı veya public repo iddiası gerekiyorsa kullanın.

```text
Public skill reposu iyileştirmek için kaynak destekli Codex promptu üret. Resmi dokümanları öncele, kaynak kalitesini yaz, gerçeklerle yorumu ayır ve araştırma stop kriteri ekle.
```

## Choosing The Mode

- Use `PROMPT_ONLY` when the user says "only prompt", "sadece prompt ver", "yorum yapma", or similar.
- Use Goal + Full Prompt when a persistent high-level goal is useful.
- Use no-Goal `PLAN MODE ONLY` when strict control matters.
- Use `APPROVED — EXECUTE` only after reviewing a plan.
- Use `STOP / RECOVER` when Codex starts editing too early.
- Use `RESEARCH_BACKED` when current source-backed facts matter.
- Add browser QA for UI work.
- Add security constraints for auth, secrets, password managers, databases, production-adjacent work, and risky tools.
- Add MCP/tool/subagent boundaries for broad or tool-heavy work.
