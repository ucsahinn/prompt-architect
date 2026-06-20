# Public Repository Source Cards

Last checked: 2026-05-31

## agentsmd/agents.md

- Title: AGENTS.md
- URL: https://github.com/agentsmd/agents.md
- Type: Public repository and open instruction-file format.
- Popularity signal: About 21.8k GitHub stars observed during this pass.
- Relevant files: `AGENTS.md`, README/site examples.
- Short summary: Defines AGENTS.md as a simple Markdown format for coding-agent instructions, with examples for setup commands, testing, style, and PR rules.
- Reusable lessons:
  - Treat AGENTS.md as an agent-facing README.
  - Include commands and checks that an agent cannot infer.
  - Use nested files for directory-specific conventions.
  - Keep instructions living and version-controlled.
- Applies to: Codex, Cursor, Windsurf, Copilot, Gemini CLI, repository instruction design.
- Confidence level: High.
- Notes / limitations: The format is permissive; quality depends on concrete project-specific content.

## openai/codex

- Title: OpenAI Codex repository.
- URL: https://github.com/openai/codex
- Type: Public repository for the Codex CLI.
- Popularity signal: About 87.2k GitHub stars observed during this pass.
- Relevant files: Root `AGENTS.md`.
- Short summary: The repository's AGENTS.md demonstrates highly specific engineering guidance, including crate conventions, sandbox rules, tests, snapshot workflows, linting, large-file limits, and dependency handling.
- Reusable lessons:
  - Effective agent instructions are concrete and command-oriented.
  - Use negative constraints for dangerous or brittle internal areas.
  - Put verification commands close to the code they govern.
  - Include monorepo-specific navigation and ownership rules.
- Applies to: Codex prompts, AGENTS.md generation, repo-specific coding-agent control.
- Confidence level: High.
- Notes / limitations: Repo-specific Rust guidance should not be generalized directly; use the structure, not the exact rules.

Codex-specific reusable lessons:

- Put exact verification commands and known platform constraints in AGENTS.md.
- Include "do not" rules for common agent mistakes, such as broad rewrites, unsafe dependency changes, or touching generated files.
- Prefer concrete repository conventions over generic engineering advice.
- Keep instructions close to the relevant code when specialized rules apply.
- Use public repo examples as structure inspiration only; do not copy long instruction files verbatim.

## openai/skills

- Title: OpenAI Skills examples.
- URL: https://github.com/openai/skills
- Type: Public OpenAI repository.
- Date checked: 2026-05-31.
- Popularity signal: Official OpenAI examples repository referenced by Codex Skills docs.
- Relevant files: Skill directories with `SKILL.md`, scripts, references, assets.
- Short summary: Demonstrates the agent-skill pattern for packaging repeatable workflows into focused instruction bundles.
- Reusable lessons:
  - Write skill metadata as a trigger contract.
  - Keep each skill focused on one job.
  - Use references/assets only when they improve task reliability.
  - Treat reusable Codex prompt patterns as candidates for future skills.
- Applies to: Codex reusable workflow prompts, prompt-lab command layer, skill-style prompt design.
- Confidence level: High.
- Notes / limitations: Use as a workflow design model; do not install or copy skills unless the user asks.

## anthropics/claude-code

- Title: Claude Code.
- URL: https://github.com/anthropics/claude-code
- Type: Public repository for Claude Code docs/examples and command assets.
- Popularity signal: About 127k GitHub stars observed during this pass.
- Relevant files: `.claude/commands/`, `examples/`, `README.md`, `SECURITY.md`.
- Short summary: The repo is a high-signal example of command-based agent workflows, plugin/skill organization, and operational packaging for an agentic coding tool.
- Reusable lessons:
  - Slash commands are useful for repeatable prompt workflows.
  - Keep reusable workflows separate from project memory.
  - Security and support files are part of agent-operational quality.
- Applies to: Claude Code prompts, command layers, workflow prompts.
- Confidence level: High.
- Notes / limitations: The repository is product-owned; use official docs for exact current behavior.

## promptfoo/promptfoo

- Title: promptfoo.
- URL: https://github.com/promptfoo/promptfoo
- Type: Public prompt/agent/RAG evaluation and red-team tooling repository.
- Popularity signal: About 21k GitHub stars observed in organization repository listing.
- Relevant files: `README.md`, docs, examples, GitHub Action, red-team plugins.
- Short summary: Promptfoo tests prompts, agents, RAG systems, and security risks with local evals, provider comparison, assertions, and red-team plugins.
- Reusable lessons:
  - Treat prompt changes as testable changes.
  - Store eval cases and assertions near the prompt system.
  - Add red-team cases for injection, leakage, hallucination, and tool misuse.
- Applies to: Prompt evaluation, security prompts, regression suites.
- Confidence level: High.
- Notes / limitations: Tool-specific implementation should be researched before creating config.

## stanfordnlp/dspy

- Title: DSPy.
- URL: https://github.com/stanfordnlp/dspy
- Type: Public framework for programming and optimizing LM systems.
- Popularity signal: About 34.7k GitHub stars observed during this pass.
- Relevant files: README, docs, examples, papers.
- Short summary: DSPy frames prompts as optimizable components inside modular LM programs.
- Reusable lessons:
  - Use signatures/modules rather than only hand-written prompt blobs for repeatable systems.
  - Optimize prompts against data, not taste.
  - Separate task declaration, retrieval, and scoring.
- Applies to: Prompt optimization, eval-backed prompts, RAG workflows.
- Confidence level: High.
- Notes / limitations: DSPy is a framework, not a replacement for strong task definition.

## microsoft/promptbench

- Title: PromptBench.
- URL: https://github.com/microsoft/promptbench
- Type: Public evaluation framework repository.
- Popularity signal: GitHub repository visible in search; exact star count not captured in this pass.
- Relevant files: README, benchmark components, adversarial attack descriptions.
- Short summary: Supports evaluation of prompt engineering methods, datasets, models, adversarial attacks, and robustness.
- Reusable lessons:
  - Evaluate prompts under perturbations and adversarial variants.
  - Track models, tasks, datasets, and prompt methods separately.
  - Robustness is a prompt quality dimension.
- Applies to: Prompt evaluation, prompt audit, red-team prompt tests.
- Confidence level: Medium-high.
- Notes / limitations: Benchmark tasks may not match product-specific workflows.

## dottxt-ai/outlines

- Title: Outlines.
- URL: https://github.com/dottxt-ai/outlines
- Type: Public structured generation repository.
- Popularity signal: About 13.9k GitHub stars observed during this pass.
- Relevant files: README, docs, examples.
- Short summary: Focuses on structured output and constrained generation.
- Reusable lessons:
  - Use schemas or constrained formats when downstream systems need exact outputs.
  - Output format precision is often better enforced structurally than by prose alone.
- Applies to: Output-format design, structured prompts, schema generation.
- Confidence level: High.
- Notes / limitations: Applies most directly to implementation environments that support constrained decoding.

## microsoft/playwright

- Title: Playwright.
- URL: https://github.com/microsoft/playwright
- Type: Public browser automation and testing repository.
- Popularity signal: Widely used; search snippets cite major star/download adoption. Exact current star count not captured from GitHub in this pass.
- Relevant files: README, docs, examples.
- Short summary: Playwright is a modern web testing and automation framework for Chromium, Firefox, and WebKit.
- Reusable lessons:
  - Browser QA prompts should ask agents to test user-visible behavior.
  - Prefer resilient role/text/label locators and web-first assertions.
  - Capture screenshots, traces, and failure evidence where possible.
- Applies to: Browser QA prompts, UI/UX implementation prompts.
- Confidence level: High.
- Notes / limitations: Do not add Playwright to a repo unless dependency addition is in scope.

## All-Hands-AI/OpenHands

- Title: OpenHands.
- URL: https://github.com/All-Hands-AI/OpenHands
- Type: Public AI software agent platform repository.
- Popularity signal: Search results and papers report 64k+ to 68k+ stars.
- Relevant files: README, agent SDK docs, examples.
- Short summary: OpenHands demonstrates sandboxed software-agent execution, lifecycle control, and tool-rich development agents.
- Reusable lessons:
  - Strong coding agents need sandboxing, state, tool control, and review loops.
  - Agent prompts should define what the agent may read/write/run.
- Applies to: AI coding-agent control, enterprise agent safety.
- Confidence level: Medium-high.
- Notes / limitations: Star counts came from search snippets, not direct GitHub page in this pass.

## microsoft/PyRIT

- Title: PyRIT.
- URL: https://github.com/microsoft/PyRIT
- Type: Public AI red-team and risk-identification framework repository.
- Popularity signal: About 3.9k stars observed in search result.
- Relevant files: README, examples, red-team workflows.
- Short summary: PyRIT supports proactive risk identification and red teaming for generative AI systems.
- Reusable lessons:
  - Security prompts should include adversarial testing, not just static review.
  - Track attack objective, target behavior, evidence, and remediation.
- Applies to: Security prompting, red-team prompt generation, AI safety evaluations.
- Confidence level: High.
- Notes / limitations: Use official docs for exact API/configuration before implementation.
