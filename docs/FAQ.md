# FAQ

## Is this official OpenAI?

No. This is an independent community/open-source Codex skill and prompt-engineering workflow package. It is not affiliated with, endorsed by, or sponsored by OpenAI.

## Do I need a build step?

No. v1.0.0 is a Markdown-based skill and knowledge system. There is no build step, package manager install, server, database, or runtime service.

## Does it call external APIs?

No. The repository itself does not call external APIs. It contains prompt templates, skill instructions, examples, rubrics, source notes, and workflow documents. Any external research or API use depends on how a future Codex session is configured and what the user authorizes.

## Can I use it in any Codex project?

Yes. Copy `.codex/skills/codex-enterprise-prompt-architect/` into a Codex project and ask Codex to use the skill for prompt generation, prompt rewrites, prompt audits, or Codex workflow design.

## Should I use Goal or no Goal?

Use a Goal when you want a concise high-level objective plus a full first-message prompt. Use no Goal when strict control matters, especially for PLAN MODE ONLY prompts where Codex must inspect and plan before editing.

## Why plan-only?

Plan-only prompts reduce premature execution and help Codex inspect the repository, identify affected files, surface risks, and wait for approval before making changes.

## Does it store secrets?

No secrets should be stored in this repository. Generated prompts should describe security constraints without including real credentials, private keys, tokens, cookies, or private user data.

## Can I customize the templates?

Yes. You can edit the skill files under `.codex/skills/codex-enterprise-prompt-architect/` and the deeper templates under `knowledge/templates/`. Keep changes source-backed, scoped, and clear.

## How do I contribute?

See `CONTRIBUTING.md`. Useful contributions include stronger Codex prompt patterns, better evaluation examples, real failure-derived revisions, clearer docs, and source-backed improvements to the knowledge base.
