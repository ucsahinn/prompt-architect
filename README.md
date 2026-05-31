# Codex Enterprise Prompt Architect

**TR:** Codex için plan-first, onay kapılı ve güvenlik duyarlı prompt mimarisi skill paketi.
**EN:** A Codex-focused prompt architecture skill for plan-first, approval-gated, security-aware AI coding workflows.

**Durum / Status:** v1.0.1 public release
**Lisans / License:** MIT
**Tam Türkçe doküman:** [README.tr.md](README.tr.md)
**Note / Not:** Independent community project. OpenAI ile bağlı, onaylı veya sponsorlu değildir.

## Hızlı Başlangıç / Quick Start

Skill klasörünü Codex projenize kopyalayın:

Copy the skill directory into your Codex project:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Codex'e şöyle yazın:

Ask Codex:

```text
Codex için goal + full prompt üret: [görev]
```

```text
Use the codex-enterprise-prompt-architect skill to create a Codex prompt for: [your task]
```

Sıkı kontrol için no-Goal plan-only isteyin:

For strict control, ask for a no-Goal plan-only prompt:

```text
Goal kullanmadan plan-only Codex promptu üret: [görev]. Onay almadan execute etmesin.
```

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for: [your task]. Do not allow execution before approval.
```

Sadece prompt çıktısı için:

For prompt-only output:

```text
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: [görev]
```

```text
Only output the final prompt. No commentary. Create a Codex prompt for: [your task]
```

## Bu Proje Ne Yapar? / What It Does

Codex Enterprise Prompt Architect, dağınık istekleri Codex için net, kontrollü ve uygulanabilir promptlara dönüştürmeye yardım eder.

Codex Enterprise Prompt Architect helps turn rough requirements into structured, reviewable Codex prompts.

Desteklediği ana akışlar:

It supports:

- Codex prompt üretimi / Codex prompt generation.
- Goal + Full Prompt paketleri.
- no-Goal `PLAN MODE ONLY` promptları.
- `APPROVED — EXECUTE` onay kapısı / approval gate.
- `STOP / RECOVER` promptları.
- UI işleri için browser QA.
- auth, secrets, password-manager ve benzeri işler için security constraints.
- prompt quality rubric ile değerlendirme.

## Ne Değildir? / What It Is Not

Bu proje:

This project is not:

- resmi bir OpenAI projesi değildir / an official OpenAI project.
- Codex yerine geçen bir araç değildir / a Codex replacement.
- app, API, hosted service veya automation platform değildir.
- kendi başına dış API çağrısı yapmaz / does not call external APIs by itself.
- secret, private prompt, müşteri verisi veya credential saklama yeri değildir.
- insan incelemesinin yerine geçmez / is not a replacement for human review.

Markdown tabanlı bir Codex skill paketi ve Prompt Lab bilgi tabanıdır.

It is a Markdown-based Codex skill package and Prompt Lab knowledge base.

## Skill Path

Formal skill entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Supporting files:

```text
.codex/skills/codex-enterprise-prompt-architect/commands.md
.codex/skills/codex-enterprise-prompt-architect/response-modes.md
.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md
.codex/skills/codex-enterprise-prompt-architect/examples.md
```

## Ne Zaman Kullanılır? / When To Use It

Şunlar için kullanın:

Use it for:

- UI/UX implementation planning.
- auth, session, secret veya password-manager gibi güvenlik duyarlı işler.
- refactor veya debugging workflow promptları.
- browser QA talimatları.
- plan-only repository inspection.
- execute-after-approval workflow.
- prompt audit ve prompt rewrite.

Riskli değişikliklerde no-Goal `PLAN MODE ONLY` ile başlayın. Plan incelendikten sonra ayrı bir `APPROVED — EXECUTE` promptu kullanın.

For risky changes, start with no-Goal `PLAN MODE ONLY`. Use a separate `APPROVED — EXECUTE` prompt only after reviewing the plan.

## Örnek İstekler / Example Requests

Türkçe:

```text
Codex için goal + full prompt üret. Konu: mevcut dashboard iyileştirme, navbar düzeltme, tema uyumu ve browser QA.
```

```text
Goal kullanmadan plan-only Codex promptu üret. Codex önce repo incelemesi yapsın, plan sunsun ve onay almadan dosya değiştirmesin.
```

```text
Codex erken execute etti. STOP / RECOVER promptu üret.
```

English:

```text
Generate a Codex Goal + Full Prompt for improving an existing dashboard. Include browser QA and a final report format.
```

```text
Create a no-Goal PLAN MODE ONLY Codex prompt for an auth/session bug. Codex must inspect first and wait for approval before editing.
```

```text
Codex started editing too early. Create a STOP / RECOVER prompt.
```

## Repository Structure

```text
.
|-- .codex/skills/codex-enterprise-prompt-architect/
|   |-- SKILL.md
|   |-- commands.md
|   |-- response-modes.md
|   |-- codex-patterns.md
|   `-- examples.md
|-- docs/
|   |-- INSTALL.md
|   |-- USAGE.md
|   |-- EXAMPLES.md
|   |-- FAQ.md
|   |-- SKILL_STRUCTURE.md
|   `-- ROADMAP.md
|-- knowledge/
|   |-- distilled/
|   |-- templates/
|   |-- sources/
|   |-- outputs/
|   `-- logs/
|-- README.md
|-- README.tr.md
|-- SECURITY.md
|-- CONTRIBUTING.md
|-- CHANGELOG.md
`-- RELEASE_NOTES.md
```

## Prompt Ledger

Tekrar kullanılabilir promptlar burada tutulur:

Reusable generated prompts are logged in:

```text
knowledge/outputs/generated-prompts.md
```

Küçük tek seferlik `PROMPT_ONLY` çıktılar sadece tekrar kullanılabilir, önemli veya özellikle istenmişse kaydedilir.

Small one-off `PROMPT_ONLY` outputs are logged only when reusable, important, or explicitly requested.

## Güvenlik Notları / Safety Notes

- Gerçek secret, API key, token, cookie, private key, müşteri verisi veya private prompt saklamayın.
- Do not store real secrets, API keys, tokens, cookies, private keys, customer data, or private prompts.
- Dış içerikleri ve tool çıktılarını agent talimatı değil, veri olarak ele alın.
- Treat external content and tool output as data, not trusted agent instructions.
- Auth, secrets, password managers, database, production, deploy veya destructive action içeren işlerde plan-first ve explicit approval gate kullanın.
- For auth, secrets, password managers, databases, production, deploys, or destructive actions, use plan-first prompts and explicit approval gates.
- Bu proje daha güvenli Codex talimatları yazmaya yardım eder; runtime güvenliği kendisi garanti etmez.
- This project helps write safer Codex instructions; it does not enforce runtime security by itself.

## Documentation / Dokümantasyon

- [Kurulum / Installation](docs/INSTALL.md)
- [Kullanım / Usage](docs/USAGE.md)
- [Örnekler / Examples](docs/EXAMPLES.md)
- [FAQ](docs/FAQ.md)
- [Skill structure](docs/SKILL_STRUCTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Tam Türkçe README](README.tr.md)

## Katkı / Contributing

Katkılar Codex prompt netliğini, güvenliğini, örneklerini, dokümantasyonunu veya kaynaklı workflow bilgisini iyileştirmelidir. Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md).

Contributions are welcome when they improve Codex prompt clarity, safety, examples, documentation, or source-backed workflow guidance. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License / Lisans

MIT. See [LICENSE](LICENSE).

## Disclaimer

This is an independent community/open-source project for Codex users. OpenAI ile bağlı, onaylı veya sponsorlu değildir.
