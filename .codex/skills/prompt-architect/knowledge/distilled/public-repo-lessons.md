# Public Repository Lessons

Last updated: 2026-05-31

## Pattern: Concrete Repo Instructions Beat Generic Principles

- When to use it: AGENTS.md, CLAUDE.md, Copilot, Cursor, Windsurf rules.
- Why it works: Agents need project-specific commands, conventions, and risky areas more than generic "write clean code" advice.
- Prompt structure:
  - Project purpose.
  - Important commands.
  - File ownership or sensitive directories.
  - Testing and review expectations.
  - Safety and stop rules.
- Failure modes:
  - Long philosophical instructions.
  - No runnable checks.
  - No security or secret boundaries.
- Verification method:
  - Ask the target agent to list loaded instruction sources and summarize concrete commands.
- Source references:
  - `agentsmd/agents.md`
  - `openai/codex`
  - `anthropics/claude-code`

## Pattern: Prompt Changes Need Evals

- When to use it: Prompt libraries, prompt improvement, production agent prompts.
- Why it works: Prompt quality cannot be judged reliably from one happy-path sample.
- Prompt structure:
  - Define representative cases.
  - Define assertions or scoring criteria.
  - Compare baseline and candidate prompt.
  - Add regression cases for known failures.
- Failure modes:
  - Overfitting to one example.
  - Scoring by vibes.
  - Ignoring adversarial or edge cases.
- Verification method:
  - Run a prompt evaluation tool or manually score against a stable rubric.
- Source references:
  - `promptfoo/promptfoo`
  - `microsoft/promptbench`
  - `stanfordnlp/dspy`

## Pattern: Structured Output Is A Contract

- When to use it: Any prompt whose output feeds another process.
- Why it works: Precise schemas reduce ambiguity and make validation possible.
- Prompt structure:
  - State fields.
  - State allowed values.
  - State missing-data behavior.
  - Require exact format.
- Failure modes:
  - Free-form outputs passed into automation.
  - Optional fields that downstream code assumes are present.
- Verification method:
  - Validate output with schema, parser, or checklist.
- Source references:
  - `dottxt-ai/outlines`
  - OpenAI structured outputs and prompt generation docs.
