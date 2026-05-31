# Examples

These examples are request patterns you can give to Codex when using the Codex Enterprise Prompt Architect skill.

## 1. PROMPT_ONLY Codex Prompt Request

```text
Yorum yapma, sadece prompt ver. Codex icin plan-only prompt uret: mevcut dashboard premiumlastirma, navbar duzeltme, tema token uyumu ve browser QA. Codex onay almadan execute etmesin.
```

## 2. Goal + Full Prompt Request

```text
Codex icin Goal + Full Prompt uret. Konu: mevcut SaaS dashboardunda overview widgetlarini iyilestirme, navbar responsive davranisini duzeltme, tema tutarliligini saglama ve browser QA ekleme.
```

## 3. No-Goal Plan-Only Request

```text
Goal kullanmadan plan-only Codex promptu uret. Codex once repository inspect etsin, ilgili dosyalari listeleyip plan sunsun, riskleri belirtsin ve onay almadan dosya degistirmesin.
```

## 4. Execute-After-Approval Request

```text
Codex icin execute-after-approval prompt paketi uret. Once PLAN MODE ONLY promptu, sonra kullanicinin "APPROVED - EXECUTE" yazmasiyla calisacak execution promptu ver. UI degisiklikleri browser QA gerektirsin.
```

## 5. STOP / RECOVER Request

```text
Codex erken execute etti. STOP / RECOVER promptu uret: tum edits dursun, degisen dosyalari raporlasin, geri alma onermeden once kullanicidan onay istesin, yeni plana gecmeden beklesin.
```

## 6. UI/UX Browser QA Request

```text
Codex icin UI/UX implementation promptu uret. Mevcut layout korunacak, dashboard premiumlastirilacak, icon sistemi tutarli olacak, theme token disina cikilmayacak, desktop ve mobile browser QA zorunlu olacak.
```

## 7. Security-Sensitive Auth/Secrets Request

```text
Codex icin security-sensitive prompt uret. Konu: password manager app login refresh bug, secret leak check restorasyonu ve secret action iyilestirmeleri. Zero-knowledge model korunacak, secret plaintext loglanmayacak, auth/session davranisi test edilecek.
```

## 8. Prompt Audit Request

```text
Bu Codex promptunu test et ve skorla. Scope creep, premature execution, verification, browser QA, security constraints, output format ve stop conditions eksiklerini bul. Enterprise barin altindaysa revize et.
```

## Copy-Paste PROMPT_ONLY Output Shape

When the user says "sadece prompt ver", the response should contain only the generated prompt. Do not include source summaries, commentary, or suggestions unless explicitly requested.
