# Skill Structure

## English

The formal Codex skill package lives here:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Supporting files:

- `commands.md` - short slash-style and natural-language commands.
- `response-modes.md` - `PROMPT_ONLY`, Goal + Full Prompt, `PLAN MODE ONLY`, `APPROVED — EXECUTE`, audit, rewrite, and `STOP / RECOVER` modes.
- `codex-patterns.md` - reusable Codex workflow patterns.
- `examples.md` - complete examples.

Compatibility shims are kept at:

```text
.codex/skills/codex-enterprise-prompt-architect.md
.codex/skills/codex-enterprise-prompt-architect-commands.md
```

The deeper Prompt Lab knowledge base lives under `knowledge/`:

- `knowledge/distilled/` - playbooks, rubrics, workflow rules.
- `knowledge/templates/` - prompt templates and output formats.
- `knowledge/sources/` - source-backed research notes.
- `knowledge/outputs/` - generated prompts and prompt tests.
- `knowledge/logs/` - research, decisions, and changelog notes.

Reusable generated prompts are logged in:

```text
knowledge/outputs/generated-prompts.md
```

## Türkçe

Formal Codex skill paketi burada bulunur:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Entrypoint:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

Destek dosyaları:

- `commands.md` - kısa slash-style ve doğal dil komutları.
- `response-modes.md` - `PROMPT_ONLY`, Goal + Full Prompt, `PLAN MODE ONLY`, `APPROVED — EXECUTE`, audit, rewrite ve `STOP / RECOVER` modları.
- `codex-patterns.md` - tekrar kullanılabilir Codex workflow pattern'leri.
- `examples.md` - tam örnekler.

Geriye dönük uyumluluk için eski shim dosyaları korunur:

```text
.codex/skills/codex-enterprise-prompt-architect.md
.codex/skills/codex-enterprise-prompt-architect-commands.md
```

Daha derin Prompt Lab bilgi tabanı `knowledge/` altındadır:

- `knowledge/distilled/` - playbook, rubrik ve workflow kuralları.
- `knowledge/templates/` - prompt template'leri ve output formatları.
- `knowledge/sources/` - kaynaklı araştırma notları.
- `knowledge/outputs/` - üretilmiş promptlar ve prompt testleri.
- `knowledge/logs/` - araştırma, karar ve changelog notları.

Tekrar kullanılabilir promptlar şu ledgere eklenir:

```text
knowledge/outputs/generated-prompts.md
```
