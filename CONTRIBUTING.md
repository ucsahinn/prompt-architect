# Contributing

Contributions are welcome when they improve Codex prompt clarity, safety, examples, documentation, or source-backed workflow guidance.

## English

### Good Contributions

- Clearer Codex prompt patterns.
- Safer Goal/no-Goal guidance.
- Better `PLAN MODE ONLY` and `APPROVED — EXECUTE` workflows.
- `STOP / RECOVER` improvements.
- browser QA examples.
- security-sensitive prompt rules.
- prompt audit and rubric improvements.
- source-backed research additions.
- documentation fixes.

### Prompt Pattern Quality

A new pattern should include:

- name.
- when to use it.
- why it works.
- prompt structure.
- failure modes.
- verification method.
- source references when applicable.

### Source-Backed Research

Prefer official docs, reputable security guidance, well-known research papers, mature public repositories, and practical examples with clear operational value.

Do not add raw dumps, paid/private content, scraped private material, private notes, or low-confidence claims as facts.

### Examples

Examples should be:

- directly reusable.
- Codex-specific unless clearly marked otherwise.
- scoped.
- safe.
- verification-aware.
- free of real secrets, private data, local paths, credentials, or customer information.

Use obvious placeholders when needed:

```text
YOUR_API_KEY_HERE
example-token-placeholder
sk-example-do-not-use
```

### PR Checklist

- [ ] Change is Codex/prompt-engineering related.
- [ ] No unrelated app or software code was added.
- [ ] No real secrets, private paths, tokens, credentials, or customer data were added.
- [ ] Examples are copy-pasteable.
- [ ] Guidance is source-backed or clearly marked as a pattern.
- [ ] README/docs remain accurate.
- [ ] Generated prompt ledger is updated if a reusable generated prompt was added.

## Türkçe

Katkılar Codex prompt kalitesini, güvenliği, örnekleri, dokümantasyonu veya kaynaklı workflow bilgisini iyileştirmelidir.

### İyi Katkı Örnekleri

- Daha net Codex prompt pattern'leri.
- Daha güvenli Goal/no-Goal yönlendirmesi.
- Daha iyi `PLAN MODE ONLY` ve `APPROVED — EXECUTE` akışları.
- `STOP / RECOVER` iyileştirmeleri.
- browser QA örnekleri.
- security-sensitive prompt kuralları.
- prompt audit ve rubrik geliştirmeleri.
- kaynaklı araştırma notları.
- dokümantasyon düzeltmeleri.

### Prompt Pattern Kalitesi

Yeni pattern şunları içermelidir:

- isim.
- ne zaman kullanılacağı.
- neden işe yaradığı.
- prompt yapısı.
- hata modları.
- doğrulama yöntemi.
- varsa kaynak referansları.

### Kaynaklı Araştırma

Öncelik resmi dokümanlara, güvenilir güvenlik kaynaklarına, iyi bilinen araştırmalara, olgun public repolara ve pratik değeri açık örneklere verilmelidir.

Raw dump, paid/private içerik, private not veya düşük güvenli iddia eklemeyin.

### Örnekler

Örnekler:

- doğrudan kullanılabilir olmalı.
- aksi belirtilmedikçe Codex odaklı olmalı.
- kapsamı net olmalı.
- güvenli olmalı.
- doğrulama içermeli.
- gerçek secret, private data, local path, credential veya müşteri bilgisi içermemeli.

Gerektiğinde açık placeholder kullanın:

```text
YOUR_API_KEY_HERE
example-token-placeholder
sk-example-do-not-use
```
