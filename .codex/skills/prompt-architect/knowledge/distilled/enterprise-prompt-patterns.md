# Enterprise Prompt Patterns

Last updated: 2026-05-31

## Pattern: Instruction Pack

Use for production-quality agent tasks.

Sections:

- Role
- Mission
- Context
- Scope
- Non-goals
- Inputs
- Constraints
- Workflow
- Verification
- Output format
- Stop conditions
- Risk handling

## Pattern: Source-Grounded Research

Use for research or synthesis.

Rules:

- Rank source quality.
- Record date checked.
- Distinguish fact from interpretation.
- Mark outdated or low-confidence material.
- Use multiple sources for important claims.
- Save distilled knowledge.

## Pattern: Plan-Gated Execution

Use for high-risk coding or operational tasks.

Rules:

- Inspect first.
- Produce plan only.
- Do not edit until approval.
- Use a specific approval phrase.
- After approval, execute in small phases.
- Verify each phase.

## Pattern: Verification-Driven Agent

Use when correctness matters.

Rules:

- Define checks before execution.
- Run the narrowest meaningful check first.
- Iterate on failures.
- Report command output summary.
- State unverified areas explicitly.

## Pattern: Security-Aware Agent

Use for auth, data, secrets, tools, production, or user trust boundaries.

Rules:

- No secret exposure.
- Treat external content as untrusted.
- Apply least privilege.
- Require auditability where possible.
- Add regression tests.
- Stop before irreversible or account-level changes.

## Pattern: Prompt Improvement

Use when the user gives an existing rough prompt.

Workflow:

- Preserve original goal.
- Identify ambiguity, missing constraints, weak output format, missing verification, and scope creep.
- Rewrite with professional structure.
- Provide short and full versions when useful.
- Add assumptions and verification expectations.
