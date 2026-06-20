# Vibe Coding Playbook

Last updated: 2026-05-31

## Useful Definition

Vibe coding is natural-language-driven building with an AI agent. The professional version is spec-first, verification-heavy, and scope-controlled.

## Professional Workflow

1. Convert the idea into a product outcome.
2. Define target user, core workflow, and non-goals.
3. Specify design and interaction constraints.
4. Require the agent to inspect existing files.
5. Build the smallest coherent usable version.
6. Verify in a browser or runtime.
7. Fix visible, functional, accessibility, and responsive issues.
8. Report changed files and remaining risks.

## Prompt Requirements

Every serious vibe-coding prompt should include:

- Product goal.
- Target audience.
- User flows.
- Design direction.
- Existing project constraints.
- Non-goals.
- Responsive states.
- Empty/loading/error states.
- Accessibility expectations.
- Browser QA.
- Security and data handling notes.
- Stop conditions before deployment or destructive work.

## Anti-Hype Rules

- Do not ship based on appearance alone.
- Do not trust generated auth, payments, cryptography, or data access without review.
- Do not accept placeholders as completed features.
- Do not expand scope because the agent can generate more.
