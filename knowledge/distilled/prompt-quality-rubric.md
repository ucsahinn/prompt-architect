# Prompt Quality Rubric

Last updated: 2026-05-31

Score each category from 1 to 5. Enterprise prompts must average at least 4.0, have no category below 3, and score at least 4 on safety/security, scope control, verifiability, and output format precision.

## Scoring Scale

| Score | Meaning |
| --- | --- |
| 1 | Vague, unsafe, incomplete, or likely to produce unusable output. |
| 2 | Partially usable but missing important constraints, context, or verification. |
| 3 | Adequate for low-risk work, but still needs stronger specificity or checks. |
| 4 | Professional and reliable for most real tasks. |
| 5 | Enterprise-grade: clear, scoped, safe, verifiable, agent-aware, and ready to paste. |

## Categories

### Clarity

- 1: The goal is vague or ambiguous.
- 3: The goal is understandable but leaves room for misinterpretation.
- 5: The goal is precise, concrete, and immediately actionable.

### Completeness

- 1: Missing key sections such as role, task, constraints, or output.
- 3: Covers the main task but misses edge cases or acceptance criteria.
- 5: Includes role, mission, context, inputs, scope, non-goals, workflow, verification, output, and stop rules.

### Context Quality

- 1: Provides little or irrelevant context.
- 3: Provides useful context but no source-of-truth order or provenance.
- 5: Provides only relevant context, names authoritative sources, and handles missing or conflicting context.

### Constraint Quality

- 1: Constraints are absent or only negative and generic.
- 3: Some constraints exist but are not measurable.
- 5: Constraints are specific, testable, and tied to the goal.

### Scope Control

- 1: Encourages broad rewrites or unrelated expansion.
- 3: Names some scope limits but leaves room for drift.
- 5: Defines in-scope work, out-of-scope work, approval gates, and stop conditions.

### Safety/Security

- 1: No secret, privacy, destructive-action, production, or untrusted-content handling.
- 3: Mentions safety generally but lacks concrete gates.
- 5: Includes no-secret rules, least privilege, untrusted-content handling, safe failure, logging limits, and approval gates for risky actions.

### Agent Compatibility

- 1: Generic prompt ignores target tool capabilities and constraints.
- 3: Names the agent but only lightly adapts the workflow.
- 5: Uses target-agent conventions, tools, instruction hierarchy, verification style, and output norms.

### Verifiability

- 1: No way to know if the output succeeded.
- 3: Includes basic checks but not tied to acceptance criteria.
- 5: Defines concrete tests, commands, browser QA, citations, rubrics, or review evidence.

### Output Format Precision

- 1: Output format is absent or vague.
- 3: Output sections are named but not detailed.
- 5: Output format is exact, ordered, and easy to validate.

### Resistance To Hallucination/Scope Creep

- 1: Encourages guessing, invented facts, or unbounded exploration.
- 3: Includes some source rules but no clear uncertainty handling.
- 5: Requires source grounding, marks assumptions, limits research, and rejects unsupported expansion.

### Practical Usability

- 1: Not ready to paste or execute.
- 3: Usable after manual cleanup.
- 5: Ready to paste with clear inputs, workflow, constraints, and result format.

## Red Flags That Require Rewriting

- No target agent or default target.
- No explicit goal.
- No non-goals for broad tasks.
- No verification for coding, research, UI, security, or production-adjacent work.
- No stop conditions for risky agent actions.
- Secret handling is missing where secrets or private data may exist.
- External content can become instructions.
- "Make it better" style language without measurable criteria.
- Broad research request with no stop rule.
- Prompt asks the agent to deploy, commit, push, rotate secrets, or mutate production without explicit approval.
- Output format is not specified.
- Current facts are stale or unsourced.

## Minimum Bar For Enterprise Prompts

An enterprise prompt must:

- Preserve the user's intent.
- Name the target agent or default to Codex.
- Define role, mission, context, scope, non-goals, constraints, workflow, verification, output format, and stop conditions.
- Include source quality and uncertainty rules when research is involved.
- Include security/privacy constraints when data, tools, accounts, production, or external content is involved.
- Be directly usable without requiring the recipient agent to infer missing structure.
