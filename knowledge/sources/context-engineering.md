# Context Engineering Source Notes

Last checked: 2026-05-31

## Working Definition

Context engineering is the design and maintenance of the information environment an AI agent uses to decide and act. It includes source selection, instruction hierarchy, retrieval, memory, examples, constraints, tool results, provenance, and context compaction.

## Source Support

- Context Engineering preprint: proposes relevance, sufficiency, isolation, economy, and provenance as context quality criteria.
- Claude Code docs: context window pressure degrades performance; instruction files should stay concise and scoped.
- Google prompt design docs: prompts should include context, constraints, output format, examples, and recaps when useful.
- OpenAI prompt-injection guidance: untrusted external content should not be allowed to silently drive dangerous actions.

## Reusable Criteria

- Relevance: Include what directly helps the task.
- Sufficiency: Include enough to avoid guessing.
- Isolation: Keep untrusted input and authority-bearing instructions distinct.
- Economy: Avoid context bloat and stale instructions.
- Provenance: Track where important facts came from.
- Recency: Re-check unstable or version-sensitive facts.
- Authority: Prefer official docs and current repo state over memory or blogs.

## Prompt Implications

A context-engineered prompt should say:

- What context to inspect first.
- Which sources are authoritative.
- What to ignore.
- How to handle conflicting sources.
- How to report uncertainty.
- When additional research is allowed.

## Expanded Lessons - 2026-05-31

- OpenAI Agents SDK session-memory guidance distinguishes context trimming from summarization. Trimming is deterministic but forgets older constraints; summarization preserves continuity but can drift or poison future context.
- Claude Code best practices warns that context windows fill quickly and performance can degrade as context grows.
- Cursor and Windsurf rules show practical context activation patterns: always-on, scoped/path-based, model-decided, and manual workflows.
- Lost in the Middle research supports placing critical instructions where models are more likely to use them and avoiding large undifferentiated context dumps.

## Prompt Implications Added

- Put critical constraints at the top and recap them near the bottom.
- Keep always-on instruction files short.
- Use scoped rules or skills for specialized workflows.
- Record summary provenance and review summaries for drift when compressing context.
