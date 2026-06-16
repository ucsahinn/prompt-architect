# FAQ

## English

### Is this official OpenAI?

No. This is an independent community/open-source project. It is not affiliated with, endorsed by, or sponsored by OpenAI.

### Do I need a build step?

No. The project is a Markdown-based Codex skill package and Prompt Lab knowledge base.

### How do I validate it?

Run `node scripts/validate-prompt-lab.mjs`. It checks required docs, skill files, source-card metadata, README assets, response-mode parity, and public-safety guardrails.

### Does it call external APIs?

No. The repository itself does not call external APIs. Future Codex sessions may use tools only if the user and environment allow them.

### Can I use it in any Codex project?

Yes. Copy `.codex/skills/prompt-architect/` into the project and ask Codex to use the skill.

### Should I use Goal or no Goal?

Use Goal when a persistent high-level objective is helpful. Use no-Goal `PLAN MODE ONLY` when Codex must inspect and plan before editing.

### Why plan-only?

Plan-only prompts reduce premature execution. They make Codex inspect the repo, identify affected files, surface risks, and wait for approval.

### Does it store secrets?

No. Do not store real secrets, tokens, credentials, private keys, cookies, customer data, or private prompts in this repository.

### Can I customize the templates?

Yes. Edit the skill files or `knowledge/templates/`. Keep changes scoped, clear, and safe.

### Should this be packaged as a plugin?

Not by default. Keep it as a skill package unless you need bundled MCP config, apps, hooks, assets, or repeatable team installation metadata.

## Türkçe

### Bu resmi bir OpenAI projesi mi?

Hayır. Bağımsız bir topluluk/açık kaynak projesidir. OpenAI ile bağlı, onaylı veya sponsorlu değildir.

### Build gerekir mi?

Hayır. Proje Markdown tabanlı bir Codex skill paketi ve Prompt Lab bilgi tabanıdır.

### Nasıl doğrularım?

`node scripts/validate-prompt-lab.mjs` komutunu çalıştırın. Gerekli docs, skill dosyaları, source-card metadata, README assetleri, response-mode uyumu ve public-safety kurallarını kontrol eder.

### Dış API çağırır mı?

Hayır. Repo kendi başına dış API çağırmaz. Gelecekteki Codex oturumlarında tool kullanımı, kullanıcının iznine ve ortama bağlıdır.

### Her Codex projesinde kullanılabilir mi?

Evet. `.codex/skills/prompt-architect/` klasörünü projeye kopyalayıp Codex'ten bu skill'i kullanmasını isteyin.

### Goal mı, no-Goal mı kullanmalıyım?

Kalıcı üst seviye hedef istiyorsanız Goal kullanın. Codex'in önce sadece inceleme ve plan yapmasını istiyorsanız no-Goal `PLAN MODE ONLY` kullanın.

### Neden plan-only?

Plan-only promptlar erken execute riskini azaltır. Codex önce repo durumunu inceler, ilgili dosyaları ve riskleri çıkarır, sonra onay bekler.

### Secret saklar mı?

Hayır. Bu repoda gerçek secret, token, credential, private key, cookie, müşteri verisi veya private prompt saklamayın.

### Template'leri değiştirebilir miyim?

Evet. Skill dosyalarını veya `knowledge/templates/` altındaki template'leri düzenleyebilirsiniz. Değişiklikleri kapsamlı, açık ve güvenli tutun.

### Plugin olarak paketlenmeli mi?

Varsayılan olarak hayır. MCP config, app, hook, asset veya tekrarlanabilir ekip kurulumu için metadata gerekmedikçe skill paketi olarak kalmalı.
