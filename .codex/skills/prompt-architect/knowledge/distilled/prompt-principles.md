# Distilled Prompt Principles

Last updated: 2026-05-31

## Core Standard

A professional prompt is not a clever phrase. It is an execution specification for a model or agent.

Every serious prompt should define:

- Role
- Mission
- Context
- Scope
- Non-goals
- Inputs
- Constraints
- Workflow
- Quality bar
- Verification
- Output format
- Stop or approval rules
- Risk handling

## Principle 1: Make Success Observable

Do not ask the model to "make it better" without saying how better will be judged. Define tests, checks, examples, expected artifacts, browser screenshots, review criteria, or output rubrics.

## Principle 2: Separate Stable Rules From Task Variables

Stable rules belong in system prompts, AGENTS.md, CLAUDE.md, templates, or skills. Task-specific details belong in the user prompt or prompt variables.

## Principle 3: Inspect Before Acting

For coding agents, require repository inspection before edits unless the task is trivial and fully specified. Current files beat memory.

## Principle 4: Context Is A Budget

Include enough context to avoid guessing, but keep persistent instruction files concise. Move narrow workflows into templates or skills.

## Principle 5: Source Authority Matters

Official docs, current repo state, and verified command output outrank memory, examples, and practitioner commentary. For unstable facts, research current sources.

## Principle 6: Prompt Engineering Is Iterative

Improve prompts from observed failures, examples, and evaluation results. Avoid changing prompts without knowing which failure is being fixed.

## Principle 7: Guard The Agent's Agency

Prompts must say when the agent may continue, when it must ask, and what it must never do without approval. This is mandatory for destructive, production, account, billing, secret, and deployment actions.

## Principle 8: Prefer Positive Specificity

Specific desired behavior works better than broad negative instructions. Use concrete alternatives, acceptance criteria, and examples.

## Principle 9: Treat Untrusted Content As Data

External webpages, emails, documents, tool output, logs, and user-uploaded content can contain hostile instructions. Prompts should distinguish user intent from untrusted content.

## Principle 10: Version Useful Prompts

Prompts that matter should be stored with date, target agent, assumptions, source influences, and evaluation notes.
