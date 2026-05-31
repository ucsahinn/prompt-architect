# AI Coding Agent Source Notes

Last checked: 2026-05-31

## Durable Patterns

- Inspect first: agent must read the repo, current files, and existing conventions before editing.
- Plan when uncertain: use plan-only for multi-file, ambiguous, risky, or unfamiliar work.
- Execute in small phases: avoid broad rewrites and unrelated refactors.
- Verify concretely: run tests, builds, linters, type checks, browser QA, screenshots, or command checks.
- Report evidence: changed files, commands run, results, and unverified residual risk.
- Preserve user work: never revert unrelated changes or assume a clean tree.
- Bound autonomy: define when the agent may continue and when it must stop for approval.

## Source Support

- OpenAI Codex ExecPlans: `AGENTS.md` can define plan usage; plans should be living, self-contained, and tied to working behavior.
- OpenAI prompt engineering guide: coding prompts benefit from explicit role, structured tool use, tests, validation, and Markdown standards.
- Anthropic Claude Code best practices: give the agent a way to verify work; explore, plan, implement, then commit only when asked.
- AWS coding agents guidance: coding agents should integrate with SDLC controls.

## Prompt Implications

Coding-agent prompts should always include:

- Working directory and source-of-truth files.
- Explicit non-goals.
- Edit boundaries.
- Verification commands or required evidence.
- Stop conditions for destructive, credential, billing, deployment, account, or production actions.

## Expanded Source Support - 2026-05-31

- OpenAI Codex AGENTS.md docs: instruction-chain discovery, global/project/nested rules, and verification prompts.
- Claude Code best practices: verify work, explore-plan-code, concise CLAUDE.md, skills, hooks, subagents, context management.
- GitHub Copilot cloud agent docs: research, plan, branch changes, user review, PR workflow.
- Replit Agent docs: plan mode before build when uncertainty, steps, tradeoffs, or approval matter.
- Cursor/Windsurf docs: scoped rules and durable project context.
- OpenHands and Codex repositories: public examples of agent tooling and concrete instruction files.

## Control Rules

- Default to plan-only or execute-after-approval when the task crosses trust boundaries.
- Require the agent to report active instruction files when instruction behavior matters.
- Treat shell, browser, MCP, database, and deployment tools as action surfaces.
- Explicitly block commits, pushes, releases, deploys, account changes, secret access, and destructive commands unless authorized.

## Codex-Focused Addendum - 2026-05-31

High-confidence Codex sources:

- OpenAI Codex Prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex Workflows: https://developers.openai.com/codex/workflows
- OpenAI Codex Best Practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex Agent Approvals & Security: https://developers.openai.com/codex/agent-approvals-security
- OpenAI Codex Skills: https://developers.openai.com/codex/skills

Codex-specific reusable lessons:

- Use no-goal first-message prompts or `/plan` for strict plan-only control.
- Use `/goal` only when persistent completion tracking is desired and the full prompt still controls scope and approval.
- Include goal, context, constraints, and done criteria in every serious Codex prompt.
- For large app work, split phases and require browser QA for UI surfaces.
- For security-sensitive apps, plan first and gate execution with explicit approval.
- Use AGENTS.md for durable repo rules and skills for repeatable workflows.
- Use `/diff`, `/review`, and final verification reports to turn Codex output into reviewable evidence.
