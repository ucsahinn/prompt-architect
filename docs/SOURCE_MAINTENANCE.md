# Source Maintenance

Prompt Lab source notes must stay useful for prompt generation. They are not a bibliography dump.

## Source Card Format

For every important source, record:

- Title
- URL
- Date checked
- Source type
- Confidence
- Applies to
- Short summary
- Reusable lessons
- Facts vs interpretation
- Outdated-risk notes

## Source Priority

1. Official provider docs, standards bodies, security guidance, and well-cited research.
2. Credible engineering blogs and mature open-source repository docs.
3. Practitioner guides with concrete examples.
4. Social posts, newsletters, videos, and forum comments only as pattern signals.

## Refresh Rules

- Refresh Codex, OpenAI API, MCP, plugin, subagent, browser, and model-specific sources before any release that changes product-surface guidance.
- Mark rapidly changing sources as medium or high outdated risk.
- Separate source facts from Prompt Lab interpretation.
- Do not cite private, paid, access-restricted, or scraped content.
- Do not claim benchmarks, stars, downloads, or model behavior unless the source directly supports it.

## What Belongs In `knowledge/sources/`

- Source cards.
- Short reusable lessons.
- Outdated-risk notes.
- Links to official docs, papers, standards, and credible repositories.

## What Belongs In `knowledge/distilled/`

- Prompt rules that are already synthesized.
- Playbooks.
- Rubrics.
- Mode contracts.
- Workflow patterns.

Do not duplicate full articles or long copied excerpts. Keep source cards concise and useful.
