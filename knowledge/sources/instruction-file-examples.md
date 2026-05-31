# Instruction File Example Source Cards

Last checked: 2026-05-31

## OpenAI Codex AGENTS.md Discovery Rules

- Title: Custom instructions with AGENTS.md.
- URL: https://developers.openai.com/codex/guides/agents-md
- Type: Official Codex documentation.
- Date checked: 2026-05-31.
- Short summary: Codex reads AGENTS.md files before work, chains global and project files, applies closer files later, and supports overrides/fallback filenames.
- Reusable lessons:
  - Put global preferences in Codex home.
  - Put repo-wide rules at root.
  - Put specialized rules near the relevant directory.
  - Verify instruction loading with a prompt that asks which sources were loaded.
- Applies to: AGENTS.md generation, Codex prompts, instruction hierarchy.
- Confidence level: High.
- Notes / limitations: Current behavior can drift; re-check before making version-specific claims.

## Codex AGENTS.md Quality Lessons

- Title: Codex AGENTS.md quality lessons from official docs and OpenAI Codex repository.
- URL: https://developers.openai.com/codex/guides/agents-md and https://github.com/openai/codex
- Type: Official Codex documentation plus public OpenAI repository example.
- Date checked: 2026-05-31.
- Short summary: Strong Codex instruction files are concise but specific. They define repository expectations, commands, verification, local overrides, and safety rules in a way Codex can apply during repository work.
- Reusable lessons:
  - Put personal style/defaults in global AGENTS.md and repo rules in project AGENTS.md.
  - Use nested AGENTS.md or AGENTS.override.md for specialized directories.
  - Include exact commands, not only intentions.
  - Include stop rules for dependency changes, secrets, generated files, large rewrites, and release actions.
  - Verify instruction loading when behavior matters.
- Applies to: Codex AGENTS.md generation, Codex prompt packages, repository inspection prompts.
- Confidence level: High.
- Notes / limitations: Repo-specific rules should be adapted, not copied.

## AGENTS.md Open Format

- Title: AGENTS.md open format.
- URL: https://agents.md/
- Type: Public open-format site.
- Date checked: 2026-05-31.
- Short summary: Presents AGENTS.md as a simple, agent-facing README used across many coding agents.
- Reusable lessons:
  - Recommended sections include project overview, build/test commands, code style, testing, and security considerations.
  - Explicit user chat prompts override instruction files.
  - Closest AGENTS.md wins when instructions conflict.
- Applies to: Cross-agent instruction-file design.
- Confidence level: High.
- Notes / limitations: It is a format guide, not a task-specific quality rubric.

## Claude Code CLAUDE.md Guidance

- Title: Best practices for Claude Code.
- URL: https://code.claude.com/docs/en/best-practices
- Type: Official Claude Code documentation.
- Date checked: 2026-05-31.
- Short summary: Claude Code reads CLAUDE.md for persistent context and recommends keeping it short, broad, and focused on commands/style/workflow rules the model cannot infer.
- Reusable lessons:
  - Include runnable checks.
  - Use plan mode for uncertainty and multi-file work.
  - Move occasional workflows into skills instead of bloating CLAUDE.md.
  - Review and prune instruction files when behavior degrades.
- Applies to: CLAUDE.md generation, Claude Code prompts.
- Confidence level: High.
- Notes / limitations: Product features such as hooks, skills, and subagents evolve quickly.

## Cursor Project Rules

- Title: Cursor rules.
- URL: https://docs.cursor.com/en/context
- Type: Official Cursor documentation.
- Date checked: 2026-05-31.
- Short summary: Cursor uses reusable scoped instructions in `.cursor/rules`, user rules, AGENTS.md, and legacy `.cursorrules`.
- Reusable lessons:
  - Prefer version-controlled project rules over ad hoc prompts.
  - Scope rules by path/glob or invocation type.
  - Avoid overloading always-on context.
- Applies to: Cursor rules, AI coding workflow docs, instruction scoping.
- Confidence level: High.
- Notes / limitations: Exact MDC metadata should be verified before generating a concrete Cursor rule file.

## Windsurf Memories, Rules, Workflows, Skills

- Title: Windsurf Cascade Memories & Rules.
- URL: https://docs.windsurf.com/windsurf/cascade/memories
- Type: Official Windsurf documentation.
- Date checked: 2026-05-31.
- Short summary: Windsurf separates memories, rules, AGENTS.md, workflows, and skills. It recommends durable team knowledge as Rules or AGENTS.md rather than auto-generated memories.
- Reusable lessons:
  - Use rules for coding conventions and constraints.
  - Use workflows for manual repeatable procedures.
  - Use skills for complex tasks with supporting references.
  - Treat memory as convenience, not governance.
- Applies to: Windsurf prompts, instruction layering, durable context design.
- Confidence level: High.
- Notes / limitations: Character limits and activation modes can change.

## GitHub Copilot Repository Instructions

- Title: Adding repository custom instructions for GitHub Copilot.
- URL: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
- Type: Official GitHub documentation.
- Date checked: 2026-05-31.
- Short summary: GitHub Copilot supports repository-wide `.github/copilot-instructions.md`, path-specific `.github/instructions/*.instructions.md`, and agent instructions such as AGENTS.md. It also recognizes root `CLAUDE.md` or `GEMINI.md`.
- Reusable lessons:
  - Separate global repository rules from path-specific rules.
  - Use AGENTS.md for agent instructions when cross-tool compatibility matters.
  - Use path-specific instructions to avoid bloating always-on rules.
- Applies to: Copilot custom instructions, AGENTS.md interoperability.
- Confidence level: High.
- Notes / limitations: GitHub notes feature support differs across Copilot surfaces.
