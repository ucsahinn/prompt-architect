# Skill Structure

## English

The formal Codex skill package lives here:

```text
.codex/skills/prompt-architect/
```

Entrypoint:

```text
.codex/skills/prompt-architect/SKILL.md
```

Supporting files:

- `commands.md` - short slash-style and natural-language commands.
- `response-modes.md` - `PROMPT_ONLY`, Goal + Full Prompt, `PLAN MODE ONLY`, `APPROVED — EXECUTE`, research-backed, template, audit, rewrite, instruction-file, and `STOP / RECOVER` modes.
- `codex-patterns.md` - reusable Codex workflow patterns.
- `examples.md` - complete examples.
- `knowledge/` - packaged Prompt Lab KB mirror used by installed global skills.

Compatibility shims are kept at:

```text
.codex/skills/prompt-architect.md
.codex/skills/prompt-architect-commands.md
```

The root Prompt Lab knowledge base lives under `knowledge/` and is mirrored into `.codex/skills/prompt-architect/knowledge/` for installation:

- `knowledge/distilled/` - playbooks, rubrics, workflow rules.
- `knowledge/templates/` - prompt templates and output formats.
- `knowledge/sources/` - source-backed research notes.
- `knowledge/outputs/` - generated prompts and prompt tests.
- `knowledge/logs/` - research, decisions, and changelog notes.

Reusable generated prompts are logged in:

```text
knowledge/outputs/generated-prompts.md
```

Validation and packaging references:

- [VALIDATION.md](VALIDATION.md) - local validator and release checks.
- [SOURCE_MAINTENANCE.md](SOURCE_MAINTENANCE.md) - source-card refresh rules.
- [SUBAGENTS.md](SUBAGENTS.md) - safe specialist routing.
- [PLUGIN_READINESS.md](PLUGIN_READINESS.md) - when to keep this as a skill vs package as a plugin.

## Türkçe

Formal Codex skill paketi burada bulunur:

```text
.codex/skills/prompt-architect/
```

Entrypoint:

```text
.codex/skills/prompt-architect/SKILL.md
```

Destek dosyaları:

- `commands.md` - kısa slash-style ve doğal dil komutları.
- `response-modes.md` - `PROMPT_ONLY`, Goal + Full Prompt, `PLAN MODE ONLY`, `APPROVED — EXECUTE`, research-backed, template, audit, rewrite, instruction-file ve `STOP / RECOVER` modları.
- `codex-patterns.md` - tekrar kullanılabilir Codex workflow pattern'leri.
- `examples.md` - tam örnekler.
- `knowledge/` - global kurulumda kullanılan paketlenmiş Prompt Lab KB mirror ağacı.

Geriye dönük uyumluluk için eski shim dosyaları korunur:

```text
.codex/skills/prompt-architect.md
.codex/skills/prompt-architect-commands.md
```

Root Prompt Lab bilgi tabanı `knowledge/` altındadır ve kurulum için `.codex/skills/prompt-architect/knowledge/` içine mirror edilir:

- `knowledge/distilled/` - playbook, rubrik ve workflow kuralları.
- `knowledge/templates/` - prompt template'leri ve output formatları.
- `knowledge/sources/` - kaynaklı araştırma notları.
- `knowledge/outputs/` - üretilmiş promptlar ve prompt testleri.
- `knowledge/logs/` - araştırma, karar ve changelog notları.

Tekrar kullanılabilir promptlar şu ledgere eklenir:

```text
knowledge/outputs/generated-prompts.md
```

Doğrulama ve paketleme referansları:

- [VALIDATION.md](VALIDATION.md) - lokal validator ve release kontrolleri.
- [SOURCE_MAINTENANCE.md](SOURCE_MAINTENANCE.md) - source-card yenileme kuralları.
- [SUBAGENTS.md](SUBAGENTS.md) - güvenli specialist routing.
- [PLUGIN_READINESS.md](PLUGIN_READINESS.md) - skill olarak kalma veya plugin paketleme kararı.
