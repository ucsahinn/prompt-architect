# Vibe Coding Source Notes

Last checked: 2026-05-31

## Working Definition

Vibe coding is AI-assisted software creation where the human describes desired behavior in natural language and iteratively steers the generated product. For this workspace, the useful part is not the hype; it is the prompt-to-build workflow pattern.

## Source Quality Position

The term is widely used in practitioner and media sources, but source quality varies. Treat vibe-coding content as Tier 3 or Tier 4 unless it comes from official tool docs, credible engineering reports, or reproducible case studies.

## Durable Patterns

- Start with a concrete product outcome, not a vague aesthetic.
- Use a spec-first prompt when the build is more than a toy.
- Ask the agent to inspect current code before changes.
- Force visible verification: browser QA, screenshots, interaction testing, empty/loading/error states.
- Require security and data-handling checks before production use.
- Keep scope tight and prohibit unrelated redesigns or feature creep.

## Risk Notes

- Vibe-coded outputs can appear complete while missing security, accessibility, edge cases, error handling, or maintainability.
- Prompts should explicitly require verification and acceptance criteria.
- For sensitive or production systems, "generate and ship" is not enough; require review, tests, and hardening.

## Expanded Source Support - 2026-05-31

- Replit Agent docs support plan-first workflows for uncertain or multi-step app building.
- Claude Code docs recommend explore, plan, implement, verify for uncertain coding work.
- Cursor and Windsurf docs show durable rule/context systems that can tame repeated "vibe" iteration.
- Community discussions are useful mostly as warning signals: security gaps, brittle generated apps, instruction bloat, and overtrust in visual completeness.

## Professional Vibe Coding Rule

Vibe coding becomes usable for serious work only when natural-language iteration is paired with:

- A product brief.
- Non-goals.
- Acceptance criteria.
- Security/privacy constraints.
- Browser QA.
- Regression checks.
- Approval gates before deployment or destructive actions.
