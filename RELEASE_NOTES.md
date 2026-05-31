# Release Notes: v1.0.0

Codex Enterprise Prompt Architect v1.0.0 is the first public release of this Codex-focused prompt-generation skill and Prompt Lab knowledge system.

## Highlights

- Formal Codex skill package with `SKILL.md` entrypoint.
- Reusable command, response-mode, pattern, and example references.
- Goal vs no-Goal guidance for Codex work.
- Strict PLAN MODE ONLY patterns.
- Execute-after-approval prompts.
- STOP / RECOVER prompts for premature execution.
- Browser QA prompt rules for UI work.
- Security-sensitive prompt rules for auth, secrets, password managers, and risky tool use.
- Prompt quality rubric and Codex prompt evaluation workflow.
- Generated prompt ledger.

## Included Files

- `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`
- `.codex/skills/codex-enterprise-prompt-architect/commands.md`
- `.codex/skills/codex-enterprise-prompt-architect/response-modes.md`
- `.codex/skills/codex-enterprise-prompt-architect/codex-patterns.md`
- `.codex/skills/codex-enterprise-prompt-architect/examples.md`
- `knowledge/distilled/`
- `knowledge/templates/`
- `knowledge/sources/`
- `knowledge/outputs/`
- `docs/`

## Usage

Ask Codex:

```text
Use the codex-enterprise-prompt-architect skill to create a Codex prompt for: [task]
```

For prompt-only output:

```text
Yorum yapma, sadece prompt ver: [Codex prompt request]
```

For strict planning:

```text
Goal kullanmadan plan-only Codex promptu uret: [task]
```

## Known Limitations

- This project is independent and not affiliated with OpenAI.
- It does not enforce runtime security; it generates safer prompt instructions.
- It does not install through npm, pip, or a package manager.
- Prompt quality still depends on the user's project context and review.
- Examples should be adapted before use in high-risk repositories.
