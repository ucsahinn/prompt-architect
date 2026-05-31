# AI Coding Agent Control

Last updated: 2026-05-31

## Pattern: Plan, Permission, Patch, Proof

- When to use it: Codex, Claude Code, Copilot cloud agent, Cursor, Windsurf, Replit Agent.
- Why it works: It separates exploration from irreversible work and ties completion to evidence.
- Prompt structure:
  1. Inspect current state.
  2. Produce plan and risks.
  3. Wait for approval when risky.
  4. Patch narrowly.
  5. Run verification.
  6. Report evidence.
- Failure modes:
  - Agent edits before understanding the repo.
  - Agent claims success without running checks.
  - Agent commits, deploys, or rotates secrets without authorization.
- Verification method:
  - Check command outputs, diffs, screenshots, tests, and explicit unresolved risks.
- Source references:
  - OpenAI Codex AGENTS.md docs.
  - Claude Code best practices.
  - Replit Agent planning docs.
  - GitHub Copilot cloud agent docs.

## Pattern: Tool Authority Boundaries

- When to use it: Agents with shell, browser, MCP, database, issue tracker, or deployment tools.
- Why it works: Tools turn text into actions; prompts must define what the agent may do.
- Prompt structure:
  - Allowed tools.
  - Forbidden tools/actions.
  - Approval-required actions.
  - Untrusted content handling.
  - Logging and evidence rules.
- Failure modes:
  - Tool poisoning.
  - Shell command injection.
  - Silent data exfiltration.
  - Dependency or deployment side effects.
- Verification method:
  - Review tool calls, command outputs, audit logs, and changed files.
- Source references:
  - OpenAI tool docs.
  - OpenAI agent safety docs.
  - OWASP MCP Top 10.
  - Microsoft agent safety guidance.

## Pattern: Fresh Review Loop

- When to use it: Security reviews, large refactors, UI changes, generated code.
- Why it works: The same agent that wrote a change can miss its own assumptions.
- Prompt structure:
  - Implementer produces evidence.
  - Reviewer checks diff against requirements.
  - Browser/security/test checks validate externally.
- Failure modes:
  - Self-graded output.
  - Missing edge cases.
  - Overconfidence in green but narrow checks.
- Verification method:
  - Run independent review or targeted adversarial checks.
- Source references:
  - Claude Code verification subagent guidance.
  - OpenAI agent improvement/evals guidance.

## Codex-Specific Control Addendum

Use these controls when generating Codex prompts:

- Default target: Codex.
- Default for risky work: no-goal PLAN MODE ONLY, then approval-gated execution.
- Goal mode: use only when persistent completion tracking is desired and the full prompt still controls execution.
- Session controls: recommend `/plan` for planning, `/goal` for persistent objective, `/permissions` or read-only mode for strict safety, `/diff` for review, `/review` for second-pass review, `/status` for active policy/workspace confirmation, and `/stop` if background terminals must be canceled.
- Repository control: require reading `AGENTS.md` and relevant nested instructions before work.
- Tool control: block commits, pushes, deploys, destructive commands, credential access, production changes, database mutations, package publication, and secret rotation unless explicitly authorized.
- Recovery control: when Codex starts too early, instruct it to stop, report changes, avoid reverting without approval, and return to PLAN MODE ONLY.

Source references:

- OpenAI Codex Prompting.
- OpenAI Codex CLI Slash Commands.
- OpenAI Codex Agent Approvals & Security.
