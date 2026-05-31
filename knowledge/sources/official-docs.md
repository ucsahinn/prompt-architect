# Official Docs Source Cards

Last checked: 2026-05-31

## OpenAI: Codex Execution Plans

- URL: https://developers.openai.com/cookbook/articles/codex_exec_plans
- Source type: Official OpenAI cookbook.
- Confidence: High.
- Applies to: Codex, AGENTS.md, long-running coding work, plan-based execution.
- Summary: OpenAI describes using `AGENTS.md` to define when Codex should create a thorough, living plan document for multi-hour or complex work. The plan is meant to be self-contained, continuously updated, and tied to demonstrably working behavior.
- Reusable lessons:
  - Put durable agent rules in `AGENTS.md`.
  - Use plan documents for complex, ambiguous, or long-running work.
  - Require plans to be self-contained enough for a fresh agent to resume.
  - Define terms, assumptions, commands, and observable success.
- Facts: `AGENTS.md` can guide Codex behavior; plan documents can be used to verify approach before execution.
- Interpretation: The best Codex prompts should specify when the agent is in plan-only mode and when it may execute.
- Outdated risk: Medium. Codex model names and product behavior change; re-check for current Codex prompting specifics before model-specific claims.

## OpenAI: Prompt Engineering Guide

- URL: https://developers.openai.com/api/docs/guides/prompt-engineering
- Source type: Official OpenAI API documentation.
- Confidence: High.
- Applies to: Prompt engineering, coding agents, frontend prompting, long-running agentic tasks.
- Summary: OpenAI guidance emphasizes explicit role and workflow instructions, structured tool-use guidance, testing and validation, clean Markdown standards, planning, persistence, preambles, and TODO/rubric tracking for agentic rollouts.
- Reusable lessons:
  - Define the agent role and responsibilities.
  - Give explicit tool-use and non-use rules.
  - Require verification through tests, builds, scripts, or screenshots.
  - Use progress tracking for long-running work.
  - Specify output verbosity and Markdown formatting.
- Facts: Coding prompts perform better when they define role, tool use, testing, and Markdown standards.
- Interpretation: Enterprise prompts should make the verification loop non-optional instead of relying on the agent to infer it.
- Outdated risk: Medium. Model-specific examples and recommended model names can drift.

## OpenAI: Prompt Generation

- URL: https://platform.openai.com/docs/guides/prompt-generation
- Source type: Official OpenAI API documentation.
- Confidence: High.
- Applies to: Prompt generators, meta-prompts, structured-output schema generation, prompt improvement.
- Summary: OpenAI describes generating and improving prompts with meta-prompts, using task descriptions as input, and validating structured outputs or generated schemas.
- Reusable lessons:
  - Treat prompt generation as a repeatable meta-prompt workflow.
  - Separate fixed prompt structure from variable task input.
  - Validate generated schemas and strict formats instead of trusting first output.
  - For prompt edits, first identify ambiguity, structure, specificity, and ordering problems.
- Facts: OpenAI's Playground uses meta-prompts for prompt generation and prompt edits.
- Interpretation: This workspace should store prompt-generation templates separately from generated prompt instances.
- Outdated risk: Medium. Implementation details may change.

## OpenAI: Designing Agents To Resist Prompt Injection

- URL: https://openai.com/index/designing-agents-to-resist-prompt-injection/
- Source type: Official OpenAI security article.
- Confidence: High.
- Applies to: Security-aware prompting, agent tool permissions, untrusted content handling.
- Summary: OpenAI frames prompt injection in agentic systems as a social-engineering problem. Defensive design should constrain the impact of manipulation, especially where untrusted content can influence dangerous actions or sensitive data movement.
- Reusable lessons:
  - Do not rely only on filtering malicious inputs.
  - Separate untrusted content from authority-bearing instructions.
  - Identify sources and sinks: what can influence the model and what actions are dangerous.
  - Require consent, blocking, or deterministic safeguards for sensitive transmissions and dangerous actions.
- Facts: External content can contain instructions meant to redirect an agent away from the user's intent.
- Interpretation: Security prompts should restrict tool use, external communications, data exfiltration, and silent sensitive actions.
- Outdated risk: Low to medium. Attack patterns evolve, but the source-sink framing is durable.

## OpenAI Help: Prompt Engineering Best Practices for ChatGPT

- URL: https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices
- Source type: Official OpenAI Help Center article.
- Confidence: High.
- Applies to: General prompt clarity, iterative refinement, tone.
- Summary: The article defines prompt engineering as designing and optimizing inputs to guide model responses and emphasizes clarity, specificity, sufficient context, and iterative refinement.
- Reusable lessons:
  - Replace vague instructions with precise task scope.
  - Provide enough context for the model to understand the request.
  - Iterate based on observed output, not intuition alone.
  - Name desired tone directly when tone matters.
- Facts: OpenAI recommends clear, specific prompts with enough context.
- Interpretation: Every generated prompt should include enough context and concrete acceptance criteria to reduce ambiguity.
- Outdated risk: Low.

## Anthropic: Claude Code Best Practices

- URL: https://code.claude.com/docs/en/best-practices
- Source type: Official Claude Code documentation.
- Confidence: High.
- Applies to: Claude Code, agentic coding, plan mode, verification, CLAUDE.md, context management, skills, subagents.
- Summary: Anthropic recommends giving Claude a way to verify work, exploring first then planning then coding, providing specific context, managing context aggressively, using concise CLAUDE.md files, and using skills/subagents/hooks for scoped or deterministic behavior.
- Reusable lessons:
  - Give the agent a runnable check.
  - Use plan mode when the approach is uncertain, multi-file, or unfamiliar.
  - Include file references, symptoms, constraints, and examples.
  - Keep persistent instruction files short and broadly applicable.
  - Use skills for domain workflows that should not bloat every session.
- Facts: Claude Code can read files, run commands, make changes, and work autonomously; verification criteria improve agent loops.
- Interpretation: Codex and Claude prompts share a durable plan/execute/verify pattern.
- Outdated risk: Medium. Claude Code features and model-specific guidance evolve.

## Anthropic: Claude Code Memory

- URL: https://code.claude.com/docs/en/memory
- Source type: Official Claude Code documentation.
- Confidence: High.
- Applies to: CLAUDE.md, persistent memory, scoped rules, instruction hygiene.
- Summary: Claude Code uses CLAUDE.md files and auto memory to carry knowledge across sessions. CLAUDE.md is context, not deterministic enforcement. Specific, concise instructions are followed more consistently.
- Reusable lessons:
  - Use project instruction files for stable rules and conventions.
  - Move multi-step or narrow procedures into skills or scoped rules.
  - Review instruction files when the agent repeats mistakes.
  - Use hooks when an action must be enforced deterministically.
- Facts: CLAUDE.md files are loaded into sessions as context.
- Interpretation: Prompt systems should distinguish advisory instructions from enforced gates.
- Outdated risk: Medium.

## Anthropic: Prompt Engineering Overview

- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
- Source type: Official Anthropic API documentation.
- Confidence: High.
- Applies to: Prompt improvement, prompt evaluation, success criteria.
- Summary: Anthropic recommends defining success criteria and empirical tests before prompt engineering. Prompt work should focus on failures that prompting can actually control.
- Reusable lessons:
  - Establish success criteria before tuning.
  - Use empirical evaluations instead of subjective impressions.
  - Do not use prompt engineering to solve problems better handled by model choice, data, retrieval, or product design.
- Facts: Anthropic explicitly recommends success criteria and ways to test before prompt improvement.
- Interpretation: Prompt requests should include or infer acceptance criteria.
- Outdated risk: Low.

## Anthropic: Prompting Best Practices

- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Source type: Official Anthropic API documentation.
- Confidence: High.
- Applies to: Claude prompting, role prompting, model-specific steering, output control, agentic systems.
- Summary: Anthropic's current best-practices page covers model-specific tuning, verbosity, effort/thinking depth, tool-use triggering, user-facing progress updates, literal instruction following, subagents, and frontend defaults.
- Reusable lessons:
  - Explicitly state scope when instructions must apply globally.
  - Use positive examples and concrete alternatives where possible.
  - Tune model effort or thinking settings when available; do not prompt around every capability issue.
  - Specify when tools or subagents should be used.
- Facts: Claude can interpret prompts literally, especially at lower effort levels.
- Interpretation: Claude prompts should be explicit about scope and should not depend on implied generalization.
- Outdated risk: High for model-specific details; re-check before naming current models or effort recommendations.

## Anthropic: System Prompts

- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/system-prompts
- Source type: Official Anthropic API documentation.
- Confidence: High.
- Applies to: Role prompting, system-vs-user instruction separation.
- Summary: Anthropic recommends using the `system` parameter to define Claude's role and putting task-specific instructions in the user turn.
- Reusable lessons:
  - Use the system prompt for stable role and behavioral frame.
  - Put task-specific work instructions in the user message.
  - Experiment with role specificity for domain expert behavior.
- Facts: Anthropic identifies role prompting as a powerful use of system prompts.
- Interpretation: Agent templates should separate role, reusable policy, and task variables.
- Outdated risk: Low.

## Anthropic: Console Prompting Tools

- URL: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-tools
- Source type: Official Anthropic API documentation.
- Confidence: High.
- Applies to: Prompt templates, variables, prompt improver workflows.
- Summary: Anthropic explains prompt templates and variables for consistency, testability, scalability, and version control. The prompt improver uses structured sections, XML tags, reasoning instructions, examples, and feedback.
- Reusable lessons:
  - Keep fixed prompt structure separate from variable content.
  - Wrap variables and examples in clear tags when useful.
  - Improve prompts from feedback and ideal outputs.
  - Use simpler prompts for latency/cost-sensitive contexts.
- Facts: Templates and variables help test prompt variants and track prompt structure.
- Interpretation: This workspace should use reusable templates plus a generated prompt ledger.
- Outdated risk: Medium.

## Google: Gemini API Text Generation And System Instructions

- URL: https://ai.google.dev/gemini-api/docs/system-instructions
- Source type: Official Google AI for Developers documentation.
- Confidence: High.
- Applies to: Gemini prompting, system instructions, generation configuration, multimodal inputs.
- Summary: Google documents using system instructions and generation configuration to guide Gemini behavior, plus multimodal input patterns.
- Reusable lessons:
  - Use system instructions for stable behavior.
  - Use configuration parameters deliberately rather than encoding every behavior in prose.
  - Consider multimodal inputs as first-class context when the task requires them.
- Facts: Gemini APIs support system instructions and model configuration objects.
- Interpretation: Gemini prompts should separate role/system instruction, content, and output constraints.
- Outdated risk: Medium.

## Google Cloud: Vertex AI Prompt Design Strategies

- URL: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies
- Source type: Official Google Cloud documentation.
- Confidence: High.
- Applies to: Prompt structure, clear instructions, context, few-shot examples, output format, prompt iteration.
- Summary: Google describes prompt design as an iterative process and provides a structured prompt pattern with constraints, context, output format, examples, recap, and a prompt health checklist.
- Reusable lessons:
  - Structure prompts into task, constraints, context, output format, examples, and recap.
  - Define jargon and remove ambiguity.
  - Replace subjective qualifiers with concrete measurable constraints.
  - Include missing background information explicitly.
- Facts: Google recommends clear instructions, few-shot examples, context, system instructions, prompt structure, reasoning, task decomposition, parameter experiments, and iteration.
- Interpretation: Prompt quality review should include a health checklist.
- Outdated risk: Low.

## Google Cloud: Vertex AI Prompt Management

- URL: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-reference/prompt-classes
- Source type: Official Google Cloud documentation.
- Confidence: High.
- Applies to: Enterprise prompt management, versioning, reusable prompt templates.
- Summary: Vertex AI provides prompt management capabilities to define, save, retrieve, list, version, delete, and restore prompts.
- Reusable lessons:
  - Treat prompts as managed artifacts.
  - Version prompt templates separately from runtime data.
  - For enterprise settings, track prompt ownership, versions, and deployment context.
- Facts: Vertex AI prompt templates can be versioned and used with generative models.
- Interpretation: Local prompt outputs should include date, target agent, assumptions, reuse tags, and version notes.
- Outdated risk: Medium.

## Google Cloud: Vertex AI Prompt Optimizer

- URL: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-optimizer
- Source type: Official Google Cloud documentation.
- Confidence: High.
- Applies to: Prompt optimization, system instruction improvement, data-driven prompt refinement.
- Summary: Google documents automated prompt optimization for improving prompt performance, including system instruction optimization.
- Reusable lessons:
  - Optimize prompts against a dataset or examples where possible.
  - Record the metric or behavior being optimized.
  - Avoid changing prompts without knowing what failure is being fixed.
- Facts: Vertex AI includes prompt optimization capabilities.
- Interpretation: Prompt improvement requests should capture current failure modes and ideal outputs.
- Outdated risk: Medium.

## OpenAI Codex: Custom Instructions With AGENTS.md

- URL: https://developers.openai.com/codex/guides/agents-md
- Source type: Official OpenAI Codex documentation.
- Confidence: High.
- Applies to: Codex, AGENTS.md, instruction precedence, global/project/nested rules.
- Summary: Codex reads AGENTS.md before work, builds an instruction chain from global and project files, applies closer files later, and supports overrides and fallback filenames.
- Reusable lessons:
  - Verify instruction loading directly.
  - Keep global, repo, and directory rules separate.
  - Use closer files for specialized work.
  - Watch instruction size limits.
- Facts: Codex discovers guidance from Codex home and project directories and combines files in precedence order.
- Interpretation: Prompt Lab should generate Codex prompts that mention instruction discovery and current repo rules explicitly.
- Outdated risk: Medium.

## OpenAI Codex: Prompting

- URL: https://developers.openai.com/codex/prompting
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: Codex Goal design, no-goal prompts, context, verification, task splitting, threads.
- Summary: Codex prompts should describe the work, provide relevant context, and include verification. Goal mode gives Codex a persistent objective for longer tasks; when a goal is hard to define, OpenAI recommends starting with planning.
- Reusable lessons:
  - Include goal, context, constraints, and done criteria.
  - Break complex work into smaller focused steps.
  - Use plan-first prompting when success criteria or approach are not clear.
  - Treat Goal mode as persistent completion tracking, not as a substitute for detailed execution gates.
- Facts: Codex can perform file reads, edits, and tool calls in a loop after a prompt.
- Interpretation: Strict plan-only control should use a no-goal first-message prompt or `/plan`, with explicit "do not edit" language.
- Outdated risk: Medium.

## OpenAI Codex: Workflows

- URL: https://developers.openai.com/codex/workflows
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: Codex debugging prompts, UI prompts, refactor prompts, browser QA prompts, final verification.
- Summary: Codex workflow examples emphasize explicit context, constraints, reproducible bugs, verification, UI screenshots, iterative UI work, local planning before larger delegation, and review with `/review`.
- Reusable lessons:
  - Give Codex reproduction steps for bugs.
  - For UI, include visual requirements plus implementation constraints.
  - For refactors, plan locally and include no-behavior-change constraints.
  - Ask Codex to run checks and report commands/results.
- Facts: CLI prompts often need explicit file mentions, while IDE context may include open files automatically.
- Interpretation: Prompt Lab should generate Codex prompts that specify inspection targets and verification evidence rather than relying on implicit context.
- Outdated risk: Medium.

## OpenAI Codex: Best Practices

- URL: https://developers.openai.com/codex/learn/best-practices
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: Codex workflow quality, AGENTS.md design, skills, testing, review, task splitting.
- Summary: OpenAI recommends treating Codex like a teammate configured over time. Strong prompts include goal, context, constraints, and done criteria. Complex work should plan first; durable patterns belong in AGENTS.md or skills.
- Reusable lessons:
  - Use AGENTS.md for durable repository guidance.
  - Keep AGENTS.md practical and concise.
  - Turn repeatable workflows into skills.
  - Ask Codex to create tests, run checks, confirm behavior, and review work.
  - Avoid giving full permissions before the workflow is understood.
- Facts: `/init` scaffolds AGENTS.md; `/review` can review working tree changes.
- Interpretation: Prompt Lab's Codex templates should separate one-off instructions from durable AGENTS.md and reusable skill-style workflows.
- Outdated risk: Medium.

## OpenAI Codex: Agent Skills

- URL: https://developers.openai.com/codex/skills
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: reusable Codex workflow prompts, skill-style prompt patterns, prompt lab command layer.
- Summary: Skills package task-specific instructions, optional scripts, references, and assets. Codex uses progressive disclosure: it sees skill metadata first and loads full instructions only when a skill is selected.
- Reusable lessons:
  - Package repeatable workflows as focused skills.
  - Write skill descriptions with clear triggers and boundaries.
  - Prefer instruction-only skills unless scripts improve reliability.
  - Test prompts against skill descriptions.
- Facts: Skills are available in Codex CLI, IDE extension, and Codex app.
- Interpretation: Prompt Lab should design reusable Codex workflow prompts with skill-like trigger phrases, inputs, outputs, and verification.
- Outdated risk: Medium.

## OpenAI Codex: CLI Slash Commands

- URL: https://developers.openai.com/codex/cli/slash-commands
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: Codex session control, plan mode, goal mode, permissions, diff, review, stop/recover prompts.
- Summary: Codex CLI includes slash commands for `/plan`, `/goal`, `/permissions`, `/diff`, `/review`, `/status`, `/stop`, `/compact`, `/resume`, `/new`, `/mention`, and other session controls.
- Reusable lessons:
  - Recommend `/plan` or no-goal first-message prompts for strict planning.
  - Use `/permissions` or read-only mode when the user needs safety.
  - Use `/diff` and `/review` as review checkpoints.
  - Use `/status` to confirm workspace, model, approval policy, and sandbox state.
  - Use `/stop` to cancel background terminal work when needed.
- Facts: Goal objectives are persistent thread targets; `/plan` switches to plan mode.
- Interpretation: Codex prompt packages should include session-control guidance when strict behavior matters.
- Outdated risk: Medium.

## OpenAI Codex: Agent Approvals And Security

- URL: https://developers.openai.com/codex/agent-approvals-security
- Source type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Confidence: High.
- Applies to: Codex security review prompts, approval-gated execution, no-secret rules, network/tool safety.
- Summary: Codex combines sandbox mode and approval policy to limit what commands can do and when Codex must ask before acting. Network is off by default locally, and risky settings require caution.
- Reusable lessons:
  - Treat shell, network, app, and MCP tools as action surfaces.
  - Use read-only or approval-gated modes for planning and security-sensitive work.
  - Treat web results and external content as untrusted.
  - Stop before network, credential, production, database, destructive, deploy, commit, push, or release actions unless authorized.
- Facts: Codex local defaults include sandboxing, approval policies, and no network access unless enabled.
- Interpretation: Prompt Lab security templates should name what Codex may not inspect or mutate and require exact approval gates.
- Outdated risk: Medium.

## OpenAI: Safety In Building Agents

- URL: https://developers.openai.com/api/docs/guides/agent-builder-safety
- Source type: Official OpenAI API documentation.
- Confidence: High.
- Applies to: Agent safety, prompt injection, tool security.
- Summary: Defines prompt injection as untrusted text attempting to override model instructions, with risks including private data exfiltration, misaligned actions, and unintended behavior through downstream tools.
- Reusable lessons:
  - Treat untrusted content separately from trusted instructions.
  - Identify dangerous downstream tool calls.
  - Add human review or blocking rules around sensitive actions.
- Facts: Prompt injection can target downstream tool calls and private data.
- Interpretation: Security prompts must define input trust boundaries and dangerous sinks.
- Outdated risk: Low to medium.

## OpenAI: Using Tools

- URL: https://developers.openai.com/api/docs/guides/tools
- Source type: Official OpenAI API documentation.
- Confidence: High.
- Applies to: Tool-enabled agents, MCP, function calling, shell, computer use.
- Summary: OpenAI tools extend model capabilities through built-in tools, function calling, tool search, MCP servers, shell, and computer use. The docs distinguish agent tool design, ownership, guardrails, approvals, and observability.
- Reusable lessons:
  - Tool access must be explicitly configured and controlled.
  - Use guardrails and human review when tool calls affect risk.
  - Treat shell/apply-patch/browser tools as action surfaces, not mere context.
- Facts: Tool behavior can be controlled through tool configuration and agent workflow design.
- Interpretation: Prompt templates should name allowed, forbidden, and approval-required tool actions.
- Outdated risk: Medium.

## GitHub Copilot: Repository Custom Instructions

- URL: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
- Source type: Official GitHub documentation.
- Confidence: High.
- Applies to: Copilot custom instructions, AGENTS.md, path-specific rules.
- Summary: GitHub Copilot supports repository-wide `.github/copilot-instructions.md`, path-specific `.github/instructions/*.instructions.md`, AGENTS.md files, and root CLAUDE.md/GEMINI.md.
- Reusable lessons:
  - Use repository-wide instructions for broad context.
  - Use path-specific instructions to avoid context bloat.
  - Use AGENTS.md for cross-agent compatibility.
- Facts: Copilot can use several instruction-file types with varying feature support.
- Interpretation: Prompt Lab should not generate one giant Copilot file when scoped instructions are better.
- Outdated risk: Medium.

## GitHub Copilot: Cloud Agent Concepts

- URL: https://docs.github.com/en/copilot/concepts/agents/cloud-agent
- Source type: Official GitHub documentation.
- Confidence: High.
- Applies to: Agentic coding, planning, branches, review loops.
- Summary: Copilot cloud agent can research a repository, create an implementation plan, make branch changes, then let the user review diffs, iterate, and create a PR.
- Reusable lessons:
  - Separate research, plan, implementation, review, and PR.
  - Keep the human in control of final review and merge.
  - Include branch/diff evidence in coding-agent prompts.
- Facts: Copilot cloud agent is designed around independent research/planning/coding tasks.
- Interpretation: Execute-after-approval prompts should require plan and review before code changes are accepted.
- Outdated risk: Medium.

## Cursor: Rules

- URL: https://docs.cursor.com/en/context
- Source type: Official Cursor documentation.
- Confidence: High.
- Applies to: Cursor rules, `.cursor/rules`, AGENTS.md, persistent context.
- Summary: Cursor rules provide reusable scoped instructions. Project rules live in `.cursor/rules`, user rules are global, AGENTS.md is supported, and `.cursorrules` is legacy.
- Reusable lessons:
  - Store project rules in version control.
  - Scope instructions by path, relevance, or manual invocation.
  - Use AGENTS.md when cross-tool simplicity matters.
- Facts: Cursor rules are included in model context when applied.
- Interpretation: Cursor prompt generation should choose rule scope deliberately.
- Outdated risk: Medium.

## Windsurf: Memories And Rules

- URL: https://docs.windsurf.com/windsurf/cascade/memories
- Source type: Official Windsurf documentation.
- Confidence: High.
- Applies to: Windsurf/Cascade, rules, memories, workflows, skills, AGENTS.md.
- Summary: Windsurf distinguishes memories, rules, workflows, skills, and AGENTS.md. Durable team knowledge should be written as a Rule or AGENTS.md rather than relying on auto memory.
- Reusable lessons:
  - Use rules for stable behavior.
  - Use workflows for manual repeatable tasks.
  - Use skills for complex tasks with supporting files.
  - Avoid relying on memory for governance.
- Facts: Windsurf supports `.windsurf/rules/` and AGENTS.md as rule sources.
- Interpretation: Prompt Lab's command cookbook mirrors Windsurf-style workflow shortcuts.
- Outdated risk: Medium.

## Replit Agent: Build With Agent

- URL: https://docs.replit.com/learn/build-with-agent
- Source type: Official Replit documentation.
- Confidence: High.
- Applies to: Vibe coding, plan-first app building, approval gates.
- Summary: Replit recommends planning when work has uncertainty, multiple steps, tradeoffs, or requires approval before file changes.
- Reusable lessons:
  - Turn product ideas into plans with success criteria and out-of-scope notes.
  - Use approval before build when scope is uncertain.
  - Keep plan and implementation distinct.
- Facts: Replit Agent supports plan workflows before building.
- Interpretation: Vibe-coding prompts should not skip planning for complex builds.
- Outdated risk: Medium.

## Playwright: Best Practices

- URL: https://playwright.dev/docs/best-practices
- Source type: Official Playwright documentation.
- Confidence: High.
- Applies to: Browser QA, UI prompts, E2E tests.
- Summary: Playwright recommends testing user-visible behavior, isolating tests, using locators based on user-facing attributes, and using web-first assertions.
- Reusable lessons:
  - Browser QA prompts should test what users see and do.
  - Prefer role/label/text/test-id locators over brittle CSS/XPath.
  - Use traces and screenshots for evidence.
- Facts: Playwright supports cross-browser E2E testing and rich reports.
- Interpretation: UI/UX prompts should require browser QA evidence when feasible.
- Outdated risk: Low to medium.
