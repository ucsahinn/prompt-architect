# Instruction File Patterns

Last updated: 2026-05-31

## Pattern: Root Rules Plus Scoped Overrides

- When to use it: Monorepos, apps with security-sensitive modules, multi-team projects.
- Why it works: General guidance stays small while specialized rules live near the work.
- Prompt structure:
  - Root file: mission, global commands, broad safety.
  - Nested file: local commands, local invariants, local risks.
  - Conflict rule: closer file wins, user prompt wins over files.
- Failure modes:
  - Duplicating rules across many files.
  - Conflicting root and nested instructions.
  - Overrunning context limits with giant files.
- Verification method:
  - Ask the agent to identify loaded instruction files and precedence.
- Source references:
  - OpenAI Codex AGENTS.md docs.
  - AGENTS.md open format.
  - GitHub Copilot repository instructions.

## Pattern: Advisory Instructions Versus Deterministic Gates

- When to use it: Security, linting, formatting, migrations, release checks.
- Why it works: Markdown instructions influence model behavior but do not enforce outcomes.
- Prompt structure:
  - "Instruction file says what to do."
  - "Verification command proves it happened."
  - "Hook/CI/script blocks if mandatory."
- Failure modes:
  - Treating "never leak secrets" as sufficient.
  - Assuming the agent will always remember long rules.
- Verification method:
  - Add tests, hooks, CI, secret scans, or explicit command evidence.
- Source references:
  - Claude Code best practices.
  - GitHub Copilot cloud agent docs.
  - OWASP LLM/MCP guidance.

## Pattern: Short Durable Memory, Long On-Demand Skills

- When to use it: Claude Code, Windsurf, Cursor, Codex skills/plugins.
- Why it works: Always-on context should stay lean; complex procedures should be invoked when relevant.
- Prompt structure:
  - Always-on file: broad rules.
  - Skill/workflow file: narrow multi-step process.
  - Command cookbook: human shortcut to invoke the right mode.
- Failure modes:
  - Bloated CLAUDE.md or AGENTS.md.
  - Skills with vague descriptions that never trigger.
- Verification method:
  - Check whether the target agent invokes the skill/workflow on representative requests.
- Source references:
  - Claude Code skills docs.
  - Windsurf rules/workflows/skills docs.

## Pattern: Codex AGENTS.md As A Routing Layer

- When to use it: Codex repositories, Prompt Lab workspaces, monorepos, security-sensitive apps.
- Why it works: Codex reads AGENTS.md before work and layers global, repo, and closer directory guidance.
- Prompt structure:
  - Mission and non-goals.
  - Default execution mode rules.
  - Repository inspection order.
  - Verification commands.
  - Browser QA requirements for UI.
  - Security constraints for auth/secrets.
  - Stop conditions for risky actions.
- Failure modes:
  - AGENTS.md becomes a long prompt dump instead of durable rules.
  - Critical rules are pushed past instruction-size limits.
  - Vague rules do not name commands, files, or decision points.
- Verification method:
  - Ask Codex to summarize active instruction files and precedence.
  - Keep root guidance concise and push specialized rules closer to the relevant directory.
- Source references:
  - OpenAI Codex AGENTS.md docs.
  - OpenAI Codex Best Practices.
  - openai/codex root AGENTS.md.

## Pattern: Codex Skill-Style Workflow Extraction

- When to use it: repeated prompt-generation workflows, recurring reviews, browser QA, migration planning, security review, debugging.
- Why it works: OpenAI recommends turning repeatable Codex workflows into skills with focused descriptions and progressive disclosure.
- Prompt structure:
  - Skill/job name.
  - Clear trigger phrases.
  - Inputs and outputs.
  - Workflow steps.
  - Verification and stop conditions.
- Failure modes:
  - Skill tries to cover every edge case.
  - Description is vague, so Codex does not trigger it.
  - Scripts are added when instructions would be enough.
- Verification method:
  - Test representative prompts against the skill description.
- Source references:
  - OpenAI Codex Skills.
  - OpenAI Codex Best Practices.
