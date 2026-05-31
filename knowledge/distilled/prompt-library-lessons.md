# Prompt Library Lessons

Last updated: 2026-05-31

## Pattern: Library By Workflow, Not Persona

- When to use it: Prompt libraries and command cookbooks.
- Why it works: Users ask for outcomes such as debug, refactor, review, browser QA, or plan-only, not abstract personas.
- Prompt structure:
  - Command.
  - Use case.
  - Required inputs.
  - Output format.
  - Verification.
- Failure modes:
  - Hundreds of "expert" personas with no workflow.
  - Missing stop conditions.
- Verification method:
  - Each library entry should be copy-pasteable and map to a response mode.
- Source references:
  - Claude Code prompt library.
  - GitHub Copilot Cookbook.
  - Prompt Lab command cookbook.

## Pattern: Prompt Ledger

- When to use it: Any reusable or high-value generated prompt.
- Why it works: Prevents prompt drift and creates examples for future generation.
- Prompt structure:
  - Date.
  - Request summary.
  - Target agent.
  - Prompt type.
  - Knowledge used.
  - Final prompt.
  - Quality notes.
  - Follow-up.
- Failure modes:
  - Saving only final prompts without context.
  - No quality score.
- Verification method:
  - Ledger entries must reference the file or template used.
- Source references:
  - Prompt Lab generated prompt ledger.
  - Google prompt management docs.
