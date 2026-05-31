# Prompt Anti-Patterns

Last updated: 2026-05-31

## Vague Excellence

Bad: "Make this amazing."

Fix: Define audience, use case, constraints, examples, quality bar, and verification.

## Persona Without Task

Bad: "You are an expert."

Fix: Define the role only if it changes decisions, tone, or domain assumptions; then specify mission and output.

## No Non-Goals

Bad: "Improve the app."

Fix: Say what must not change and what is out of scope.

## Hidden Verification

Bad: "Fix the bug."

Fix: Require reproduction, root cause, tests, and command evidence.

## Context Dumping

Bad: Paste everything.

Fix: Provide relevant context and source-of-truth order; let the agent inspect files when available.

## Prompt As Security Boundary

Bad: "Never leak secrets" with broad tool access.

Fix: Remove secret access, redact logs, constrain tools, require approval for sensitive actions, and test data boundaries.

## Over-Research Loop

Bad: Keep browsing after enough evidence exists.

Fix: Define stop criteria before research starts.

## One-Shot Production Trust

Bad: Generate app, deploy immediately.

Fix: Require tests, build, browser QA, security review, and explicit deployment approval.

## Conflicting Instructions

Bad: "Be concise" plus "explain every detail exhaustively."

Fix: Define verbosity target by section or output type.

## Unversioned Prompt Drift

Bad: Keep editing a working prompt without notes.

Fix: Store date, target model/agent, change reason, assumptions, and evaluation result.
