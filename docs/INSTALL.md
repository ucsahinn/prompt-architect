# Installation

Codex Enterprise Prompt Architect is a documentation-first Codex skill package. It does not require a build step, package manager, runtime service, or external API.

## Install Into A Codex Project

1. Copy the formal skill directory into your Codex project:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

2. Confirm the skill entrypoint exists:

```text
.codex/skills/codex-enterprise-prompt-architect/SKILL.md
```

3. Optionally copy the Prompt Lab knowledge base if you want the full source-backed workflow system:

```text
knowledge/
```

The skill can operate from its compact package files, but the knowledge base provides deeper rubrics, templates, examples, source notes, and workflow patterns.

## Recommended Project Layout

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
  knowledge/
    distilled/
    templates/
    outputs/
    sources/
```

## No Build Step

No build step is required for v1.0.0. This repository contains Markdown instructions, examples, prompt templates, source notes, and generated prompt ledgers.

## Optional Knowledge Base Usage

Use `knowledge/` when you want:

- More detailed Codex workflow patterns.
- Prompt quality scoring.
- Prompt evaluation templates.
- Output format templates.
- Command cookbook examples.
- Source-backed prompt-engineering notes.

If you only need the skill, copy the formal skill directory. If you want the full Prompt Lab, copy both `.codex/skills/codex-enterprise-prompt-architect/` and `knowledge/`.
