# Installation

Codex Enterprise Prompt Architect is a Markdown-based Codex skill package. It has no build step and does not call external APIs by itself.

## English

### Install The Skill

Copy this directory into your Codex project:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Confirm the entrypoint exists:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Recommended layout:

```text
your-project/
  .codex/
    skills/
      codex-enterprise-prompt-architect/
        SKILL.md
        commands.md
        response-modes.md
        codex-patterns.md
        examples.md
```

### Optional Prompt Lab Knowledge Base

For deeper templates, source notes, generated prompt examples, and rubrics, also copy:

```text
knowledge/
```

The skill works as a compact package. The `knowledge/` folder gives future Codex sessions more context.

### No Build Step

No `npm install`, `pip install`, build, database, server, or API key is required.

## Türkçe

### Skill'i Kurma

Bu klasörü Codex projenize kopyalayın:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Entrypoint dosyasını kontrol edin:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Önerilen yapı:

```text
projeniz/
  .codex/
    skills/
      codex-enterprise-prompt-architect/
        SKILL.md
        commands.md
        response-modes.md
        codex-patterns.md
        examples.md
```

### Opsiyonel Prompt Lab Bilgi Tabanı

Daha kapsamlı template, kaynak notu, örnek prompt ve rubrik istiyorsanız şunu da kopyalayın:

```text
knowledge/
```

Skill tek başına kullanılabilir. `knowledge/` klasörü daha zengin bağlam sağlar.

### Build Gerekmez

`npm install`, `pip install`, build, database, server veya API key gerekmez.
