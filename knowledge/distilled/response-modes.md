# Response Modes

Last updated: 2026-05-31

Use these modes to keep Prompt Lab outputs predictable.

## PROMPT_ONLY

When to use:
- The user says `sadece prompt ver`, `yorum yapma`, `ekleme yapma`, `only prompt`, or similar.

What to output:
- Only the final prompt.

What not to output:
- No commentary.
- No explanation.
- No extra suggestions.
- No source summary unless explicitly requested.
- No assumptions section unless it is part of the prompt itself.

Required sections:
- Only the sections required by the requested prompt type.

Stop conditions:
- Stop after the prompt.

## GOAL_PLUS_PROMPT

When to use:
- User asks for `goal + prompt`.
- User asks for Codex and does not specify mode, unless plan-only is safer.

What to output:
- Short Goal.
- Full Prompt.
- Approval/Execute prompt if relevant.

What not to output:
- No long explanation before the prompt.
- No unrelated alternatives.

Required sections:
- Short Goal.
- Full Prompt.
- Verification.
- Stop Conditions.

Stop conditions:
- Stop if target scope is too risky without plan-only or approval gates.

## PLAN_ONLY

When to use:
- Broad, risky, ambiguous, multi-file, production-adjacent, security-sensitive, or user-requested planning work.

What to output:
- A prompt instructing the target agent to inspect, plan, and stop.

What not to output:
- No execution authorization.
- No file-edit instruction.

Required sections:
- Goal.
- Inspection rules.
- Planning deliverables.
- Approval phrase.
- Stop conditions.

Stop conditions:
- Target agent must stop before editing, creating, deleting, committing, pushing, deploying, or destructive actions.

## EXECUTE_AFTER_APPROVAL

When to use:
- The work is actionable but needs a human checkpoint before edits.

What to output:
- Phase 1 plan-only prompt.
- Phase 2 approval execute prompt.

What not to output:
- No direct execution instruction before approval.

Required sections:
- Plan phase.
- Approval phrase.
- Execution phase.
- Verification.
- Stop conditions.

Stop conditions:
- Stop before phase 2 unless approval phrase is provided.

## RESEARCH_BACKED

When to use:
- Current, source-grounded, tool-specific, security-sensitive, or high-stakes prompt generation.

What to output:
- The final prompt plus concise source notes if commentary is allowed.

What not to output:
- No raw source dumps.
- No low-confidence claims as facts.
- No endless research.

Required sections:
- Source quality rules.
- Research stop criteria.
- Prompt.
- Verification.

Stop conditions:
- Stop when enough high-confidence evidence exists.

## PROMPT_AUDIT

When to use:
- User asks to score, review, or evaluate a prompt.

What to output:
- Rubric scores.
- Findings.
- Rewrite recommendations.
- Optional revised prompt if requested.

What not to output:
- No unrelated prompt expansion.

Required sections:
- Score table.
- Red flags.
- Minimum fixes.

Stop conditions:
- Stop before rewriting if user asked only for audit.

## PROMPT_REWRITE

When to use:
- User asks to improve a prompt.

What to output:
- Improved prompt, preserving intent.

What not to output:
- No invented goals.
- No unrelated additions.

Required sections:
- Same prompt type as input, with missing professional structure added.

Stop conditions:
- Stop if missing context would materially change the user's intent.

## TEMPLATE_BUILD

When to use:
- User asks for reusable prompt templates, workflows, command packs, or rubric artifacts.

What to output:
- Reusable template with inputs, constraints, output format, verification, and stop rules.

What not to output:
- No single-use task prompt unless requested.

Required sections:
- Purpose.
- Inputs.
- Template.
- Verification.
- Stop conditions.

Stop conditions:
- Stop before turning the template into unrelated software.

## AGENTS_MD_BUILD

When to use:
- User asks for AGENTS.md or coding-agent repository instructions.

What to output:
- Markdown instruction file content.

What not to output:
- No repo-specific facts not supplied or verified.

Required sections:
- Mission.
- Non-goals.
- Source of truth.
- Workflow.
- Safety rules.
- Verification.

Stop conditions:
- Stop before committing, pushing, or editing a real repo unless authorized.

## CLAUDE_MD_BUILD

When to use:
- User asks for Claude Code memory or CLAUDE.md instructions.

What to output:
- Concise CLAUDE.md content.

What not to output:
- No long tutorial or file inventory.

Required sections:
- Project context.
- Commands.
- Workflow.
- Rules.
- Gotchas.

Stop conditions:
- Stop before broad project edits unless authorized.

## GEMINI_SYSTEM_BUILD

When to use:
- User asks for Gemini system instructions.

What to output:
- Gemini-compatible system instruction content.

What not to output:
- No API configuration claims unless current docs support them.

Required sections:
- Role.
- Mission.
- Behavior.
- Context handling.
- Output format.
- Safety.

Stop conditions:
- Stop before model-specific claims if docs are stale or missing.
