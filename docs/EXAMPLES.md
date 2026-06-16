# Examples

These are copy-pasteable requests for Prompt Architect. Replace bracketed text with your project context.

## English Examples

### 1. PROMPT_ONLY

```text
Only output the final prompt. No commentary. Create a no-Goal PLAN MODE ONLY Codex prompt for dashboard polish, responsive navbar fixes, theme consistency, and browser QA.
```

### 2. Goal + Full Prompt

```text
Generate a Codex Goal + Full Prompt for improving an existing SaaS dashboard. Include scope limits, browser QA, verification, final report format, and stop conditions.
```

### 3. no-Goal PLAN MODE ONLY

```text
Create a no-Goal PLAN MODE ONLY Codex prompt. Codex must inspect the repository, list relevant files, produce a phased plan, identify risks, and wait for approval before editing.
```

### 4. APPROVED — EXECUTE

```text
Create an APPROVED — EXECUTE prompt for this approved plan: [plan]. Codex must follow only the approved plan, preserve current behavior, run verification, and stop if new facts expand scope.
```

### 5. STOP / RECOVER

```text
Codex started editing before approval. Create a STOP / RECOVER prompt. It must stop work, report changed files and commands run, avoid automatic revert, switch back to PLAN MODE ONLY, and wait.
```

### 6. UI/UX + browser QA

```text
Create a Codex UI/UX implementation prompt for an existing app. Scope: dashboard polish, navbar layout, icon consistency, theme tokens, responsive behavior, accessibility, and browser QA. No unrelated redesigns.
```

### 7. Security-sensitive auth/secrets

```text
Create a security-sensitive Codex prompt for an existing password manager. Scope: session refresh bug, secret action UX, and leak-check flow. Do not allow plaintext secrets, master passwords, derived keys, cookies, or credentials in logs, screenshots, storage, or final reports.
```

### 8. Prompt audit

```text
Audit this Codex prompt. Score execution control, scope control, security constraints, browser QA, verification, output format, and stop conditions. Revise only if needed: [prompt]
```

### 9. Research-backed repo upgrade

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for upgrading a public prompt-skill repository. Require repository inspection first, official docs for current Codex/MCP/skill behavior, source cards with confidence and outdated-risk notes, safe subagent routing, validation commands, secret scans, and an approval phrase before edits.
```

## Türkçe Örnekler

### 1. PROMPT_ONLY

```text
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: mevcut dashboard premiumlaştırma, navbar düzeltme, tema uyumu ve browser QA. Codex onay almadan execute etmesin.
```

### 2. Goal + Full Prompt

```text
Codex için goal + full prompt üret. Konu: mevcut SaaS dashboardunda overview widget'larını iyileştirme, navbar responsive davranışını düzeltme, tema tutarlılığını sağlama ve browser QA ekleme.
```

### 3. no-Goal PLAN MODE ONLY

```text
Goal kullanmadan plan-only Codex promptu üret. Codex önce repository inspect etsin, ilgili dosyaları listeleyip plan sunsun, riskleri belirtsin ve onay almadan dosya değiştirmesin.
```

### 4. APPROVED — EXECUTE

```text
Bu onaylanan plan için APPROVED — EXECUTE promptu üret: [plan]. Codex sadece onaylanan planı uygulasın, mevcut davranışı korusun, doğrulama çalıştırsın ve kapsam genişlerse dursun.
```

### 5. STOP / RECOVER

```text
Codex erken execute etti. STOP / RECOVER promptu üret: tüm işleri durdursun, değişen dosyaları ve çalıştırılan komutları raporlasın, otomatik revert yapmasın, PLAN MODE ONLY'ye dönüp onay beklesin.
```

### 6. UI/UX + browser QA

```text
Mevcut uygulama için UI/UX Codex promptu üret. Kapsam: dashboard iyileştirme, navbar layout, icon tutarlılığı, tema tokenları, responsive davranış, erişilebilirlik ve browser QA. Alakasız redesign yapmasın.
```

### 7. Güvenlik duyarlı auth/secrets

```text
Mevcut password manager için security-sensitive Codex promptu üret. Kapsam: session refresh bug, secret action UX ve leak-check flow. Plaintext secret, master password, derived key, cookie veya credential loglara, screenshotlara, storage'a veya final rapora girmesin.
```

### 8. Prompt audit

```text
Bu Codex promptunu test et ve skorla. Execution control, scope control, security constraints, browser QA, verification, output format ve stop conditions açısından değerlendir. Gerekirse revize et: [prompt]
```

### 9. Kaynak destekli repo upgrade

```text
Public prompt-skill reposu için no-Goal PLAN MODE ONLY Codex promptu üret. Önce repo incelemesi, güncel Codex/MCP/skill davranışı için resmi dokümanlar, confidence ve outdated-risk içeren source card'lar, güvenli subagent routing, validation komutları, secret scan ve edit öncesi approval phrase zorunlu olsun.
```
