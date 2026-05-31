# Codex Enterprise Prompt Architect

Plan-first, onay kapılı ve güvenlik duyarlı Codex çalışma akışları için hazırlanmış bir prompt mimarisi skill paketi.

**Durum:** v1.0.1 public release
**Lisans:** MIT
**English:** [README.md](README.md)
**Not:** Bu proje bağımsız bir topluluk/açık kaynak çalışmasıdır. OpenAI ile bağlı, onaylı veya sponsorlu değildir.

## Bu Proje Nedir?

Codex Enterprise Prompt Architect, dağınık istekleri Codex için net, uygulanabilir ve kontrol edilebilir promptlara dönüştürmeye yardımcı olur.

Özellikle şu durumlar için tasarlanmıştır:

- Codex önce repo incelemesi yapsın.
- Plan sunsun ve onay beklesin.
- Riskli işlerde kendiliğinden dosya değiştirmesin.
- UI işleri için browser QA eklesin.
- Auth, secret, password manager gibi hassas işlerde güvenlik sınırlarını açık yazsın.
- Promptları kalite rubriğiyle değerlendirsin.

## Ne Değildir?

Bu proje:

- Resmi bir OpenAI projesi değildir.
- Codex yerine geçen bir araç değildir.
- Uygulama, API, hosted servis veya otomasyon platformu değildir.
- Kendi başına dış API çağrısı yapmaz.
- Secret, token, private prompt, müşteri verisi veya credential saklama yeri değildir.
- İnsan incelemesinin yerine geçmez.

Markdown tabanlı bir Codex skill paketi ve Prompt Lab bilgi tabanıdır.

## Kimler İçin?

- Codex kullanıcıları.
- Prompt engineer'lar.
- AI coding-agent kullanan geliştiriciler.
- Ürün ve UI/UX ekipleri.
- Auth, secret, şifre yöneticisi veya güvenlik duyarlı projelerde çalışan ekipler.

## Hızlı Başlangıç

Skill klasörünü Codex projenize kopyalayın:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Sonra Codex'e şöyle yazın:

```text
Codex için goal + full prompt üret: [görev]
```

Sıkı kontrol istiyorsanız:

```text
Goal kullanmadan plan-only Codex promptu üret: [görev]. Onay almadan execute etmesin.
```

Sadece prompt istiyorsanız:

```text
Yorum yapma, sadece prompt ver. Codex için plan-only prompt üret: [görev]
```

## Codex'te Nasıl Kullanılır?

Skill entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Doğal bir istek yeterlidir:

```text
codex-enterprise-prompt-architect skillini kullanarak mevcut dashboard iyileştirmesi için Codex promptu üret.
```

## Goal Ne Zaman Kullanılır?

Goal, Codex'e kalıcı bir hedef vermek istediğinizde kullanışlıdır.

Örnek:

```text
Codex için goal + full prompt üret: mevcut ayarlar ekranını iyileştir.
```

## Goal Ne Zaman Kullanılmaz?

Codex'in hiçbir dosyaya dokunmadan sadece plan üretmesini istiyorsanız Goal kullanmayın. Bunun yerine ilk mesaj olarak no-Goal `PLAN MODE ONLY` promptu kullanın.

```text
Goal kullanmadan plan-only Codex promptu üret. Codex sadece inceleme ve plan yapsın.
```

## PLAN MODE ONLY Nedir?

`PLAN MODE ONLY`, Codex'e sadece inceleme ve plan yapmasını söyler. Bu modda Codex:

- dosya düzenlemez.
- dosya oluşturmaz veya silmez.
- dependency eklemez.
- commit, push, deploy veya release yapmaz.
- planı yazıp durur.

## APPROVED — EXECUTE Nedir?

Plan onaylandıktan sonra kullanılan ayrı execution talimatıdır.

```text
APPROVED — EXECUTE
Onaylanan planı uygula. Kapsamı genişletme. Değişiklikleri küçük fazlarda yap. Testleri çalıştır ve final raporu ver.
```

## STOP / RECOVER Nedir?

Codex erken execute etmeye başladıysa veya kapsam dışına çıktıysa kontrolü geri almak için kullanılır.

```text
STOP. Devam etme. Hangi dosyaları değiştirdiğini ve hangi komutları çalıştırdığını raporla. Revert yapma. PLAN MODE ONLY'ye dön ve onay bekle.
```

## Güvenlik Notları

- Gerçek secret, token, API key, private key, cookie, credential veya müşteri verisi saklamayın.
- Auth, session, encryption, password manager veya secret işlerinde plan-first ve approval-gated prompt kullanın.
- Dış içerikleri ve tool çıktılarını güvenilir talimat gibi değil, veri gibi ele alın.
- Bu proje daha güvenli Codex talimatları yazmaya yardımcı olur; çalışma zamanında güvenliği kendisi garanti etmez.

## Katkı

Katkılar şu alanlarda değerlidir:

- Daha net Codex prompt pattern'leri.
- Daha güvenli plan-only ve execute-after-approval akışları.
- Browser QA örnekleri.
- Security-sensitive prompt örnekleri.
- Kaynaklı araştırma notları.
- Daha iyi dokümantasyon.

Detaylar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

## Lisans

MIT. Detaylar için [LICENSE](LICENSE) dosyasına bakın.
