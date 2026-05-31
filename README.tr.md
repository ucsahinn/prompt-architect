# Codex Enterprise Prompt Architect

> Codex için plan-first, onay kapılı ve güvenlik duyarlı prompt iş akışları hazırlamaya yarayan bir prompt mimarisi skill paketi.

[English](README.md) | [Türkçe](README.tr.md)

- **Durum:** v1.0.2 public release
- **Lisans:** MIT
- **Proje tipi:** Markdown tabanlı Codex skill paketi ve Prompt Lab bilgi tabanı
- **Not:** Bağımsız bir topluluk/açık kaynak projesidir. OpenAI ile bağlı, onaylı veya sponsorlu değildir.

Codex Enterprise Prompt Architect, dağınık istekleri Codex için kapsamlı, kontrol edilebilir ve doğrulanabilir promptlara dönüştürmeye yardım eder. Amacı Codex'in önce repoyu incelemesi, net plan sunması, riskli işlerde onay beklemesi ve "bitti" demek yerine kanıtlı final raporu vermesidir.

## Neden Var?

AI coding agent'ları güçlü, ama belirsiz promptlar belirsiz sonuç üretir. İyi bir Codex iş akışı; hedefi, bağlamı, kısıtları, kapsam dışı alanları, doğrulama adımlarını, çıktı formatını ve durma koşullarını baştan yazmalıdır.

Bu repo bu kalıpları şu şekilde paketler:

- tekrar kullanılabilir Codex skill'i,
- prompt şablonları,
- workflow playbook'ları,
- güvenlik ve browser QA yönlendirmeleri,
- prompt kalite rubriği,
- AI coding-agent iş akışları için kaynaklı notlar.

## Kimler İçin?

- Codex'i gerçek repo işlerinde kullanan geliştiriciler.
- Tekrar kullanılabilir agent talimatları hazırlayan prompt engineer'lar.
- Public dokümantasyon ve prompt örneklerini daha güvenli tutmak isteyen maintainer'lar.
- Onay kapılı AI coding workflow'ları isteyen ürün, UI, güvenlik ve platform ekipleri.
- Türkçe ve İngilizce Codex workflow örnekleri arayan kullanıcılar.

## Ne Sunar?

- Goal + Full Prompt paketleri.
- Sıkı kontrol için no-Goal `PLAN MODE ONLY` promptları.
- Onaylanmış uygulama için `APPROVED - EXECUTE` promptları.
- Codex erken başladığında veya kapsam dışına çıktığında `STOP / RECOVER` promptları.
- UI işleri için browser QA talimatları.
- Auth, session, secret, password manager, database, shell tool, MCP/app tool ve production-adjacent işler için güvenlik kısıtları.
- Prompt kalite rubriği ve değerlendirme workflow'u.

## Hızlı Başlangıç

Skill klasörünü Codex projenize kopyalayın:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Sonra Codex'e şunu yazın:

```text
codex-enterprise-prompt-architect skillini kullanarak şunun için Codex promptu üret: [görev]
```

Sıkı kontrol istiyorsanız no-Goal plan-only isteyin:

```text
Goal kullanmadan PLAN MODE ONLY Codex promptu üret: [görev]. Onay almadan execute etmesin.
```

Sadece prompt çıktı istiyorsanız:

```text
Yorum yapma, sadece prompt ver. Codex için prompt üret: [görev]
```

## Nereden Başlamalı?

| Hedef | Dosya |
| --- | --- |
| Skill'i kurmak veya kopyalamak | [docs/INSTALL.md](docs/INSTALL.md) |
| Ana kullanım modlarını öğrenmek | [docs/USAGE.md](docs/USAGE.md) |
| Pratik örnekleri kopyalamak | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Skill yapısını anlamak | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Public repo güvenlik kontrolü yapmak | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |
| Prompt/güvenlik sınırlarını incelemek | [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md) |
| Planlanan işleri görmek | [docs/ROADMAP.md](docs/ROADMAP.md) |

## Ne Değildir?

Bu proje:

- resmi bir OpenAI projesi değildir,
- Codex yerine geçen bir araç değildir,
- app, API, hosted servis veya otomasyon platformu değildir,
- kendi başına dış API çağrısı yapmaz,
- secret, private prompt, müşteri verisi veya credential saklama yeri değildir,
- code review, security review veya mühendislik kararının yerine geçmez.

Codex iş akışları daha net, güvenli ve incelenebilir olsun diye hazırlanmış pratik bir talimat sistemidir.

## Temel Workflow Modları

### Goal + Full Prompt

Codex'e kalıcı ve üst seviye bir hedef vermek istediğinizde kullanılır.

### no-Goal PLAN MODE ONLY

Codex'in dosya düzenlemeden önce repoyu incelemesini ve plan sunmasını istediğinizde kullanılır. Geniş, riskli, güvenlik duyarlı, production-adjacent veya çok dosyalı işlerde daha güvenli varsayılandır.

### APPROVED - EXECUTE

Plan incelendikten sonra kullanılır. Execution promptu Codex'e sadece onaylanan planı uygulamasını, alakasız değişiklik yapmamasını, küçük fazlarla ilerlemesini, doğrulama çalıştırmasını ve kapsam genişlerse durmasını söylemelidir.

### STOP / RECOVER

Codex erken execute etmeye başlarsa veya kapsam dışına çıkarsa kullanılır. Recovery promptu işi durdurmalı, değişen dosyaları ve komutları raporlamalı, otomatik revert yapmamalı ve plan-only moda dönmelidir.

## Repo Yapısı

```text
.
|-- .codex/skills/codex-enterprise-prompt-architect/
|   |-- SKILL.md
|   |-- commands.md
|   |-- response-modes.md
|   |-- codex-patterns.md
|   `-- examples.md
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   `-- pull_request_template.md
|-- docs/
|   |-- INSTALL.md
|   |-- USAGE.md
|   |-- EXAMPLES.md
|   |-- FAQ.md
|   |-- SKILL_STRUCTURE.md
|   |-- PUBLIC_REPO_CHECKLIST.md
|   |-- SECURITY_MODEL.md
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

Tekrar kullanılabilir üretilmiş promptlar burada tutulur:

```text
knowledge/outputs/generated-prompts.md
```

Küçük ve tek seferlik `PROMPT_ONLY` çıktılar sadece tekrar kullanılabilir, önemli veya özellikle istenmiş ise kaydedilir.

## Public Güvenlik Kuralları

Bu repo public, tekrar kullanılabilir prompt ve workflow kalıpları için tasarlanmıştır. Şunları içermemelidir:

- API key, token, credential, cookie, private key veya private URL,
- müşteri verisi veya şirket içi bilgi,
- private system prompt,
- proprietary uygulama detayı,
- maskelenmemiş log, ekran görüntüsü, local path veya kişisel not.

Değişiklik yayınlamadan önce [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) ve [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md) dosyalarını kullanın.

## Katkı

Katkılar Codex prompt netliğini, güvenliğini, örneklerini, dokümantasyonunu veya kaynaklı workflow bilgisini iyileştirdiğinde değerlidir. Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md).

## Güvenlik

Güvenlik açığı, sızmış credential, private prompt veya yanlışlıkla ifşa için public issue açmayın. [SECURITY.md](SECURITY.md) dosyasına bakın.

## Lisans

MIT. Detaylar için [LICENSE](LICENSE).
