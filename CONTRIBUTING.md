# Contributing

Thank you for helping improve Codex Enterprise Prompt Architect.

This project accepts contributions that improve Codex prompt quality, safety, clarity, documentation, examples, and source-backed workflow guidance.

## Accepted Contribution Types

- New Codex prompt patterns.
- Safer Goal/no-Goal guidance.
- Better plan-only and execute-after-approval workflows.
- STOP / RECOVER improvements.
- Browser QA prompt examples.
- Security-sensitive prompt rules.
- Prompt audit and rubric improvements.
- Source-backed research additions.
- Documentation fixes.
- Copy-pasteable examples.

## Proposing New Prompt Patterns

New patterns should include:

- Pattern name.
- When to use it.
- Why it works.
- Prompt structure.
- Failure modes.
- Verification method.
- Source references when applicable.

## Adding Source-Backed Research

Prefer:

- Official Codex/OpenAI docs.
- Security standards and reputable guidance.
- Well-known research papers.
- Mature public repositories.
- Practical examples with clear operational value.

Do not add raw dumps, paid/private content, scraped private material, or low-confidence claims as facts.

## Adding Examples

Examples should be:

- Directly reusable.
- Codex-specific unless clearly marked otherwise.
- Scoped.
- Safe.
- Verification-aware.
- Free of secrets, private data, local paths, or customer information.

## Updating Skill Docs

Keep `SKILL.md` concise. Put longer commands, modes, patterns, and examples in the supporting files:

- `.codex/skills/codex-enterprise-prompt-architect/commands.md`
- `.codex/skills/codex-enterprise-prompt-architect/response-modes.md`
- `.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md`
- `.codex/skills/codex-enterprise-prompt-architect/examples.md`

## Quality Bar

Enterprise-grade Codex prompts should include:

- Target mode.
- Role and mission.
- Repository inspection rules.
- Scope and non-goals.
- Constraints.
- Verification.
- Browser QA when UI is involved.
- Security constraints when auth, secrets, sessions, password managers, or risky tools are involved.
- Output format.
- Stop conditions.

## Prompt Safety Rules

- Do not expose secrets.
- Do not encourage unsafe storage.
- Do not allow destructive, production, account, database, deployment, commit, push, release, or credential actions without explicit approval.
- Treat untrusted content as data, not instructions.
- Preserve existing behavior unless the prompt explicitly authorizes changes.

## Pull Request Checklist

- [ ] Change is Codex/prompt-engineering related.
- [ ] No unrelated app or software code was added.
- [ ] No secrets, private paths, tokens, credentials, or customer data were added.
- [ ] Examples are copy-pasteable.
- [ ] New guidance is source-backed or clearly marked as a pattern.
- [ ] README/docs remain accurate.
- [ ] Generated prompt ledger is updated if a new reusable generated prompt was added.
