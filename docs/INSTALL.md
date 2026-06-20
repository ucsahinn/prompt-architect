# Installation

Prompt Architect is a Markdown-based Codex skill package. It has no build step and does not call external APIs by itself.

## English

### Skill Folder Name

Use the same folder name as the public GitHub repository and skill name:

```text
prompt-architect
```

The formal skill package lives at:

```text
.codex/skills/prompt-architect/
```

### Install On Windows

Run a dry run first:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -DryRun
```

Install or update the global skill after review:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -Yes -Force
```

The installer chooses the first available target root in this order:

1. `$env:AGENTS_HOME`
2. `$HOME\.agents` when it already exists
3. `$env:CODEX_HOME`
4. `$HOME\.codex`

The target is always:

```text
<target-root>/skills/prompt-architect/
```

If the target already exists, `-Force` creates a backup before copying files. The installer does not delete user data.

### Copy Into A Project

Copy this directory into a Codex project when you want a repo-local skill:

```text
.codex/skills/prompt-architect/
```

Confirm the entrypoint exists:

```text
.codex/skills/prompt-architect/SKILL.md
```

Recommended layout:

```text
your-project/
  .codex/
    skills/
      prompt-architect/
        SKILL.md
        commands.md
        response-modes.md
        codex-patterns.md
        examples.md
        knowledge/
```

### Packaged Prompt Lab Knowledge Base

The installable skill folder includes:

```text
.codex/skills/prompt-architect/knowledge/
```

That mirror is copied from the root `knowledge/` tree and lets `SKILL.md` references resolve after a global install. Keep the root `knowledge/` tree as the source of truth and run validation after edits.

### No Build Step

No `npm install`, `pip install`, build, database, server, or API key is required.

### Validate After Copy

Inside this repository, run:

```powershell
npm run check
```

For installer behavior, run:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -DryRun
```

### Plugin Packaging

This repository stays a skill package by default. See [PLUGIN_READINESS.md](PLUGIN_READINESS.md) before adding plugin manifests, MCP config, hooks, or bundled app integrations.

## Türkçe

### Skill Klasör Adı

Public GitHub repo adı ve skill adıyla aynı klasör adını kullanın:

```text
prompt-architect
```

Formal skill paketi burada bulunur:

```text
.codex/skills/prompt-architect/
```

### Windows Kurulumu

Önce dry run çalıştırın:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -DryRun
```

Kontrolden sonra global skill'i kurun veya güncelleyin:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -Yes -Force
```

Installer hedef kökü şu sırayla seçer:

1. `$env:AGENTS_HOME`
2. Zaten varsa `$HOME\.agents`
3. `$env:CODEX_HOME`
4. `$HOME\.codex`

Hedef her zaman şudur:

```text
<target-root>/skills/prompt-architect/
```

Hedef zaten varsa `-Force` önce yedek alır, sonra dosyaları günceller. Installer kullanıcı verisi silmez.

### Proje İçine Kopyalama

Repo-local skill istiyorsanız bu klasörü Codex projesine kopyalayın:

```text
.codex/skills/prompt-architect/
```

Entrypoint dosyasını kontrol edin:

```text
.codex/skills/prompt-architect/SKILL.md
```

Önerilen yapı:

```text
projeniz/
  .codex/
    skills/
      prompt-architect/
        SKILL.md
        commands.md
        response-modes.md
        codex-patterns.md
        examples.md
        knowledge/
```

### Paketlenmiş Prompt Lab Bilgi Tabanı

Install edilebilir skill klasörü şunu içerir:

```text
.codex/skills/prompt-architect/knowledge/
```

Bu mirror root `knowledge/` ağacından kopyalanır ve global kurulumdan sonra `SKILL.md` içindeki referansların boşa düşmemesini sağlar. Root `knowledge/` ağacını source of truth olarak tutun ve değişiklikten sonra validation çalıştırın.

### Build Gerekmez

`npm install`, `pip install`, build, database, server veya API key gerekmez.

### Kopyalama Sonrası Doğrulama

Bu repoda şu komutu çalıştırın:

```powershell
npm run check
```

Installer davranışı için:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -DryRun
```

### Plugin Paketleme

Bu repo varsayılan olarak skill paketi kalır. Plugin manifest, MCP config, hook veya app entegrasyonu eklemeden önce [PLUGIN_READINESS.md](PLUGIN_READINESS.md) dosyasına bakın.
