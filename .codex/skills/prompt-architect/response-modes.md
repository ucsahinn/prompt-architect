# Response Modes

Use these modes to decide what the final answer should contain.

## PROMPT_ONLY

Use when the user says "only prompt", "sadece prompt ver", "yorum yapma", "ekleme yapma", or similar.

Output:

- only the final prompt.

Do not output:

- commentary.
- explanation.
- source summary.
- extra suggestions.

Stop after the prompt.

## GOAL_PLUS_PROMPT

Use when the user asks for "goal + prompt" or asks for a Codex prompt without a stricter mode.

Output:

- short Goal or no-Goal recommendation.
- Full Prompt.
- `APPROVED — EXECUTE` prompt when implementation may follow.
- verification and stop conditions.

Switch to `PLAN_ONLY` or `EXECUTE_AFTER_APPROVAL` if the work is risky.

## PLAN_ONLY

Use for planning-only, broad, risky, multi-file, UI-heavy, security-sensitive, or production-adjacent work.

Output:

- a Codex prompt that inspects, plans, and stops before edits.
- approval phrase.
- verification plan.
- stop conditions.

Do not authorize edits, dependency changes, destructive commands, commits, pushes, deploys, or releases.

## EXECUTE_AFTER_APPROVAL

Use when the user wants implementation instructions only after a human approval gate.

Output:

- plan-only phase.
- exact approval phrase.
- `APPROVED — EXECUTE` phase.
- verification.
- final report format.
- stop conditions.

Stop before phase 2 unless the approval phrase is present.

## RESEARCH_BACKED

Use when the prompt depends on current docs, version-sensitive behavior, source-backed claims, security guidance, MCP/tool behavior, or public repository positioning.

Output:

- concise source notes when commentary is allowed.
- final prompt with source-quality rules and research stop criteria.
- facts separated from interpretation.
- outdated-risk notes for unstable facts.

Do not output:

- raw source dumps.
- low-confidence claims as facts.
- endless research instructions.

Stop when enough high-confidence evidence exists to generate a safe prompt.

## PROMPT_AUDIT

Use when the user asks to review, score, test, or evaluate a Codex prompt.

Output:

- score table.
- findings.
- required fixes.
- final decision: ship, revise, or reject.

Do not rewrite unless requested.

## PROMPT_REWRITE

Use when the user asks to improve, harden, compress, expand, or rewrite a prompt.

Output:

- revised prompt.
- preserve the user's original intent.
- add missing structure, constraints, verification, and stop conditions.

Do not invent unrelated goals or weaken constraints.

## TEMPLATE_BUILD

Use when the user asks for reusable prompt templates, workflow packs, command recipes, rubric artifacts, or repeatable prompt systems.

Output:

- purpose.
- inputs.
- template.
- verification.
- stop conditions.

Do not turn the template into unrelated software.

## AGENTS_MD_BUILD

Use when the user asks for AGENTS.md or coding-agent repository instructions.

Output:

- mission.
- non-goals.
- source of truth.
- workflow.
- safety rules.
- verification.

Do not invent repo facts that were not supplied or verified.

## CLAUDE_MD_BUILD

Use when the user asks for Claude Code memory or CLAUDE.md instructions.

Output:

- concise project context.
- important commands.
- workflow.
- rules.
- gotchas.

Do not produce a long tutorial when a compact instruction file is requested.

## GEMINI_SYSTEM_BUILD

Use when the user asks for Gemini-compatible system instructions.

Output:

- role.
- mission.
- behavior.
- context handling.
- output format.
- safety.

Do not make model-specific claims unless current docs support them.

## STOP_RECOVER

Use when Codex started editing too early, left scope, or ran commands before approval.

Output:

- stop command.
- changed files report request.
- commands run report request.
- background process check.
- no-revert-without-approval rule.
- recovery plan request.

The target Codex session must stop and wait.
