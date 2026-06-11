# Codex Enterprise Prompt Architect

> Codex için plan-first, onay kapılı ve güvenlik duyarlı prompt iş akışları hazırlamaya yarayan bir prompt mimarisi skill paketi.

[English](README.md) | [Türkçe](README.tr.md)

[![Release](https://img.shields.io/github/v/release/ucsahinn/codex-enterprise-prompt-architect?label=release&color=0f766e)](https://github.com/ucsahinn/codex-enterprise-prompt-architect/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-111827)](LICENSE)
[![Security Policy](https://img.shields.io/badge/security-policy-b91c1c)](SECURITY.md)
[![Docs](https://img.shields.io/badge/docs-ready-2563eb)](docs/USAGE.md)
[![Public Safe](https://img.shields.io/badge/public--safe-checklist-7c3aed)](docs/PUBLIC_REPO_CHECKLIST.md)

![Codex Enterprise Prompt Architect workflow banner](assets/banner.svg)

- **Durum:** v1.0.2 public release
- **Lisans:** MIT
- **Proje tipi:** Markdown tabanlı Codex skill paketi ve Prompt Lab bilgi tabanı
- **Not:** Bağımsız bir topluluk/açık kaynak projesidir. OpenAI ile bağlı, onaylı veya sponsorlu değildir.

Codex Enterprise Prompt Architect, dağınık istekleri Codex için kapsamlı, kontrol edilebilir ve doğrulanabilir promptlara dönüştürmeye yardım eder. Amacı Codex'in önce repoyu incelemesi, net plan sunması, riskli işlerde onay beklemesi ve "bitti" demek yerine kanıtlı final raporu vermesidir.

## 🧭 Enterprise Değerlendirme Yolu

| Kanıtlamak istediğiniz şey | Başlangıç | Alacağınız kanıt |
| --- | --- | --- |
| Reponun public-safe olduğunu | [Public repo checklist](docs/PUBLIC_REPO_CHECKLIST.md) | Secret, local path, private prompt ve generated artifact sınırları. |
| Prompt akışında insan kontrolü olduğunu | [Kullanım modları](docs/USAGE.md) | `PLAN MODE ONLY`, `APPROVED - EXECUTE`, `STOP / RECOVER` ve `PROMPT_ONLY` yolları. |
| Skill'in Codex workspace'e taşınabildiğini | [Kurulum rehberi](docs/INSTALL.md) | Dosya yapısı, kopyalama yolu ve kurulum beklentisi. |
| Güvenlik sınırının net olduğunu | [Security model](docs/SECURITY_MODEL.md) | No-secret, disclosure, prompt privacy ve doğrulama kuralları. |
| Örneklerin doğrudan kullanılabilir olduğunu | [Örnekler](docs/EXAMPLES.md) | Kapsam, doğrulama ve durma koşulu içeren kopyalanabilir promptlar. |

## ✅ Operasyon Güvenceleri

| Sinyal | Standart |
| --- | --- |
| Skill-first routing | Promptlar tek seferlik gevşek chat yerine tekrar kullanılabilir skill talimatlarına göre şekillenir. |
| Onay kapıları | Riskli execution planlamadan ayrılır ve açık onay adımı ister. |
| Doğrulama baskısı | Üretilen promptlar test, scan, browser QA veya dürüst "doğrulanamadı" raporu ister. |
| Public-safe bilgi tabanı | Araştırma notları, şablonlar ve çıktılar secret, private prompt, müşteri verisi ve local operator path içermez. |

## 🎯 Neden Var?

AI coding agent'ları güçlü, ama belirsiz promptlar belirsiz sonuç üretir. İyi bir Codex iş akışı; hedefi, bağlamı, kısıtları, kapsam dışı alanları, doğrulama adımlarını, çıktı formatını ve durma koşullarını baştan yazmalıdır.

Bu repo bu kalıpları şu şekilde paketler:

- tekrar kullanılabilir Codex skill'i,
- prompt şablonları,
- workflow playbook'ları,
- güvenlik ve browser QA yönlendirmeleri,
- prompt kalite rubriği,
- AI coding-agent iş akışları için kaynaklı notlar.

## ⚡ Hızlı Başla

| Şunu istiyorum... | Kullan |
| --- | --- |
| Güvenli Codex promptu üretmek | [Skill entrypoint](.codex/skills/codex-enterprise-prompt-architect/SKILL.md) |
| Codex'in erken dosya düzenlemesini engellemek | [no-Goal PLAN MODE ONLY](docs/USAGE.md#no-goal-plan-mode-only) |
| Onaylanmış planı uygulatmak | [APPROVED - EXECUTE](docs/USAGE.md#approved--execute) |
| Kapsam dışına çıkan agent'ı durdurmak | [STOP / RECOVER](docs/USAGE.md#stop--recover) |
| Public repo güvenliğini kontrol etmek | [Public repo checklist](docs/PUBLIC_REPO_CHECKLIST.md) |
| Sızıntı önleme kurallarını incelemek | [Security model](docs/SECURITY_MODEL.md) |

![Codex workflow overview](assets/workflow-overview.svg)

## 🧩 Ne Sunar?

| Yetenek | Sağladığı değer |
| --- | --- |
| Goal + Full Prompt | Kısa hedef ve tam ilk mesaj promptu. |
| no-Goal `PLAN MODE ONLY` | Dosya düzenlemeden önce sıkı plan kontrolü. |
| `APPROVED - EXECUTE` | İnsan onayından sonra sınırlı execution promptu. |
| `STOP / RECOVER` | Erken execution veya kapsam kayması için toparlama promptu. |
| Browser QA | Gerçek kullanıcı akışları için UI doğrulama talimatları. |
| Güvenlik kısıtları | Hassas işlerde no-secret ve onay kapılı kurallar. |
| Prompt rubriği | Promptu kullanmadan önce kalite skoru verme yöntemi. |

## 👥 Kimler İçin?

- Codex'i gerçek repo işlerinde kullanan geliştiriciler.
- Tekrar kullanılabilir agent talimatları hazırlayan prompt engineer'lar.
- Public dokümantasyon ve prompt örneklerini daha güvenli tutmak isteyen maintainer'lar.
- Onay kapılı AI coding workflow'ları isteyen ürün, UI, güvenlik ve platform ekipleri.
- Türkçe ve İngilizce Codex workflow örnekleri arayan kullanıcılar.

## 🚀 Hızlı Başlangıç

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

## 🧭 Navigasyon

| Hedef | Dosya |
| --- | --- |
| Skill'i kurmak veya kopyalamak | [docs/INSTALL.md](docs/INSTALL.md) |
| Ana kullanım modlarını öğrenmek | [docs/USAGE.md](docs/USAGE.md) |
| Pratik örnekleri kopyalamak | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Skill yapısını anlamak | [docs/SKILL_STRUCTURE.md](docs/SKILL_STRUCTURE.md) |
| Public repo güvenlik kontrolü yapmak | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |
| Prompt/güvenlik sınırlarını incelemek | [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md) |
| Planlanan işleri görmek | [docs/ROADMAP.md](docs/ROADMAP.md) |

## ✅ Güven Sinyalleri

| Alan | Standart |
| --- | --- |
| Public safety | Secret, private prompt, müşteri verisi, local path veya private URL yok. |
| İnsan kontrolü | Riskli işler `PLAN MODE ONLY` ile başlar ve açık onay bekler. |
| Doğrulama | Promptlar test, QA, scan veya net "doğrulanamadı" raporu ister. |
| Dokümantasyon | README kısa kalır; detaylar `docs/` ve `knowledge/` içinde yaşar. |
| Bakım | Changelog, release notes, security policy, contribution guide, issue template'leri. |

## 🚫 Ne Değildir?

Bu proje:

- resmi bir OpenAI projesi değildir,
- Codex yerine geçen bir araç değildir,
- app, API, hosted servis veya otomasyon platformu değildir,
- kendi başına dış API çağrısı yapmaz,
- secret, private prompt, müşteri verisi veya credential saklama yeri değildir,
- code review, security review veya mühendislik kararının yerine geçmez.

Codex iş akışları daha net, güvenli ve incelenebilir olsun diye hazırlanmış pratik bir talimat sistemidir.

## ⚙️ Temel Workflow Modları

### 🎯 Goal + Full Prompt

Codex'e kalıcı ve üst seviye bir hedef vermek istediğinizde kullanılır.

### 🧭 no-Goal PLAN MODE ONLY

Codex'in dosya düzenlemeden önce repoyu incelemesini ve plan sunmasını istediğinizde kullanılır. Geniş, riskli, güvenlik duyarlı, production-adjacent veya çok dosyalı işlerde daha güvenli varsayılandır.

### ✅ APPROVED - EXECUTE

Plan incelendikten sonra kullanılır. Execution promptu Codex'e sadece onaylanan planı uygulamasını, alakasız değişiklik yapmamasını, küçük fazlarla ilerlemesini, doğrulama çalıştırmasını ve kapsam genişlerse durmasını söylemelidir.

### 🧯 STOP / RECOVER

Codex erken execute etmeye başlarsa veya kapsam dışına çıkarsa kullanılır. Recovery promptu işi durdurmalı, değişen dosyaları ve komutları raporlamalı, otomatik revert yapmamalı ve plan-only moda dönmelidir.

## 📁 Repo Yapısı

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

## 🧾 Prompt Ledger

Tekrar kullanılabilir üretilmiş promptlar burada tutulur:

```text
knowledge/outputs/generated-prompts.md
```

Küçük ve tek seferlik `PROMPT_ONLY` çıktılar sadece tekrar kullanılabilir, önemli veya özellikle istenmiş ise kaydedilir.

## 🛡️ Public Güvenlik Kuralları

Bu repo public, tekrar kullanılabilir prompt ve workflow kalıpları için tasarlanmıştır. Şunları içermemelidir:

- API key, token, credential, cookie, private key veya private URL,
- müşteri verisi veya şirket içi bilgi,
- private system prompt,
- proprietary uygulama detayı,
- maskelenmemiş log, ekran görüntüsü, local path veya kişisel not.

Değişiklik yayınlamadan önce [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) ve [docs/SECURITY_MODEL.md](docs/SECURITY_MODEL.md) dosyalarını kullanın.

## 🤝 Katkı

Katkılar Codex prompt netliğini, güvenliğini, örneklerini, dokümantasyonunu veya kaynaklı workflow bilgisini iyileştirdiğinde değerlidir. Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md).

## 🔐 Güvenlik

Güvenlik açığı, sızmış credential, private prompt veya yanlışlıkla ifşa için public issue açmayın. [SECURITY.md](SECURITY.md) dosyasına bakın.

## ⚖️ Lisans

MIT. Detaylar için [LICENSE](LICENSE).
