# Security Policy

## English

### Reporting

Please do not open public issues for sensitive security reports.

If you find a vulnerability, unsafe prompt pattern, secret exposure risk, prompt injection concern, or risky Codex workflow rule, report it privately through a non-public maintainer channel available from the project owner profile or repository settings.

Do not include real secrets, API keys, tokens, credentials, cookies, private keys, customer data, production data, or private prompts in reports.

### Scope

Security concerns include:

- prompt patterns that could expose secrets or private data.
- instructions that allow unsafe tool use.
- prompt injection or indirect prompt injection weaknesses.
- unsafe guidance for auth, sessions, password managers, encryption, or secret handling.
- broad agent autonomy without approval gates.
- documentation that encourages production, account, database, deploy, commit, push, release, or destructive actions without explicit approval.

### Secret Handling

This repository must not contain real secrets, credentials, tokens, cookies, private keys, customer data, private prompts, `.env` files, or paid/private content.

If a real secret is committed or published, treat it as compromised. Rotate or revoke it first, then handle repository cleanup.

### Response Expectations

This project is maintained on a best-effort basis. Reports are reviewed when possible and prioritized by severity, reproducibility, and impact. No guaranteed response timeline is promised.

## Türkçe

### Bildirim

Hassas güvenlik bildirimleri için lütfen public issue açmayın.

Bir açık, güvensiz prompt pattern'i, secret sızıntısı riski, prompt injection problemi veya riskli Codex workflow kuralı bulursanız, proje sahibi profilinde veya repo ayarlarında bulunan public olmayan bir kanaldan bildirin.

Rapora gerçek secret, API key, token, credential, cookie, private key, müşteri verisi, production verisi veya private prompt eklemeyin.

### Kapsam

Güvenlik kapsamına giren konular:

- secret veya private data sızdırabilecek prompt pattern'leri.
- güvensiz tool kullanımına izin veren talimatlar.
- prompt injection veya indirect prompt injection zafiyetleri.
- auth, session, password manager, encryption veya secret handling için güvensiz yönlendirmeler.
- approval gate olmadan fazla geniş agent yetkisi.
- production, account, database, deploy, commit, push, release veya destructive action gibi işleri açık onay olmadan teşvik eden dokümantasyon.

### Secret Politikası

Bu repo gerçek secret, credential, token, cookie, private key, müşteri verisi, private prompt, `.env` dosyası veya paid/private içerik içermemelidir.

Gerçek bir secret commitlenir veya yayınlanırsa önce o credential rotate/revoke edilmelidir. Repo temizliği bundan sonra ele alınmalıdır.

### Beklenti

Bu proje best-effort şekilde sürdürülür. Bildirimler mümkün olduğunda incelenir; öncelik şiddet, tekrar üretilebilirlik ve etkiye göre belirlenir. Garanti edilmiş yanıt süresi verilmez.
