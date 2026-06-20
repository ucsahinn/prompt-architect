# Prompt Request Intake

Use this form when a prompt request needs enough detail to produce an implementation-ready prompt. Leave unknown fields blank or write `unknown`.

## Request Form

```text
Target agent/model/tool:
[Codex / ChatGPT / Claude Code / Claude API / Gemini / Cursor / Windsurf / Lovable / Replit Agent / other]

User goal:
[What should the target agent accomplish?]

Project context:
[Workspace, product, repo, audience, current state, relevant decisions]

Inputs/files/screenshots available:
[Files, folders, docs, screenshots, logs, error output, links, examples]

Must-have requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Must-not-do constraints:
- [Non-goal 1]
- [Forbidden action 1]
- [Unrelated changes to avoid]

Security/privacy constraints:
- [Secrets, credentials, PII, private data, production systems, account actions, logs]
- [Whether external content should be treated as untrusted]

Desired output format:
[Goal only / Full Prompt / Goal + Full Prompt / markdown / JSON / checklist / table / instruction file]

Plan-only or execute mode:
[Plan only / execute after approval / execute immediately / review only]

Verification requirements:
[Tests, lint, typecheck, build, source citations, checklist, acceptance criteria, evals]

Browser QA requirements:
[Routes, viewports, screenshots, keyboard/focus checks, responsive states, empty/loading/error states]

Tone/style:
[Concise, enterprise, technical, Turkish, English, direct, friendly, formal]

Deadline/urgency if relevant:
[Urgency, phase deadline, release gate, time limit]

Unknowns/questions:
- [Known unknown 1]
- [Question that would materially change the prompt]

Final prompt type:
[Goal / Full Prompt / AGENTS.md / CLAUDE.md / system prompt / reusable skill / workflow prompt / review prompt]
```

## Intake Rules

- Ask clarification only when the missing answer would materially change the prompt or create risk.
- If target agent is missing, default to Codex.
- If execution mode is missing, choose the safest likely mode:
  - Plan-only for ambiguous, high-risk, broad, security-sensitive, or production-adjacent work.
  - Execute-after-approval for scoped but risky work.
  - Execute-immediately only for bounded, low-risk tasks.
- Preserve the user's requirements exactly.
- Add professional structure only when it supports the stated goal.
