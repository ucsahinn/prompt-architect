# Practitioner Guide Source Cards

Last checked: 2026-05-31

## Coder: AI Coder Best Practices

- URL: https://coder.com/docs/ai-coder/best-practices
- Source type: Product documentation from a credible developer tooling company.
- Confidence: Medium.
- Applies to: Enterprise AI coding agent rollout, workspace setup, agent context.
- Summary: Coder emphasizes organizational and technical best practices for introducing AI coding agents, including persistent agent context and team workflows.
- Reusable lessons:
  - Standardize agent context files for teams.
  - Treat AI coding agents as part of the developer workflow, not a replacement for verification.
  - Prefer tool-specific context patterns over generic instructions.
- Facts: Coder documents agent workflows and persistent context conventions.
- Interpretation: Useful for enterprise workflow framing, but not a universal standard.
- Outdated risk: Medium.

## AWS Prescriptive Guidance: Coding Agents

- URL: https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/coding-agents.html
- Source type: AWS prescriptive guidance.
- Confidence: High for enterprise architecture framing.
- Applies to: Coding agents, SDLC integration, enterprise agent patterns.
- Summary: AWS describes coding agents as tools that interpret natural language, analyze context, generate multi-step code changes, and integrate with software delivery workflows.
- Reusable lessons:
  - Enterprise prompts should name SDLC integration points.
  - Agent autonomy must be paired with review, testing, and deployment controls.
  - Context gathering and multi-step changes should be explicit workflow stages.
- Facts: AWS frames coding agents as an agentic AI pattern.
- Interpretation: Useful for enterprise prompt boundaries and acceptance criteria.
- Outdated risk: Medium.

## Codegen: Agentic Coding Workflows

- URL: https://codegen.com/how-to-build-agentic-coding-workflows/
- Source type: Practitioner engineering blog.
- Confidence: Medium.
- Applies to: AI coding workflows, pre-execution context, production agent adoption.
- Summary: The article argues that agentic coding quality depends heavily on what enters the agent before execution starts.
- Reusable lessons:
  - Strong prompts begin before the prompt: issue quality, source context, acceptance criteria, and verification matter.
  - Put the agent into a narrow working lane before execution.
- Facts: Practitioner source; claims come from product/team experience.
- Interpretation: Use as a corroborating workflow lens, not a primary authority.
- Outdated risk: Medium.

## Claude Code Community Signals

- URL: https://www.reddit.com/r/ClaudeCode/
- Type: Community discussion signals.
- Date checked: 2026-05-31.
- Short summary: Community discussions repeatedly emphasize practical issues around CLAUDE.md quality, skills, subagents, security reviews, and repo-specific workflow templates.
- Reusable lessons:
  - Treat community reports as failure-mode discovery, not authority.
  - Common pain points include bloated instructions, ignored rules, unsafe repos, and unclear skill routing.
- Applies to: Prompt anti-patterns, Claude Code workflows.
- Confidence level: Low.
- Notes / limitations: Anecdotal, noisy, and not a substitute for official docs.

## Cursor/Copilot Community Signals

- URL: https://www.reddit.com/r/cursor/ and https://www.reddit.com/r/GithubCopilot/
- Type: Community discussion signals.
- Date checked: 2026-05-31.
- Short summary: User discussions frequently focus on instruction adherence, path-specific rules, context bloat, and whether agents read the expected instruction files.
- Reusable lessons:
  - Prompts should ask the agent to confirm active instruction sources when debugging behavior.
  - Rule files should be specific, short, and scoped.
  - Verification beats assuming instructions were loaded.
- Applies to: Instruction-file debugging, response modes, prompt audit.
- Confidence level: Low.
- Notes / limitations: Use only as corroborating field signal.

## GitHub Copilot Cookbook

- URL: https://docs.github.com/en/copilot/tutorials/copilot-cookbook
- Type: Official/practitioner recipe library.
- Date checked: 2026-05-31.
- Short summary: GitHub organizes Copilot prompts by practical tasks: debugging, generating code, refactoring, documenting, testing, and security.
- Reusable lessons:
  - Prompt libraries should be workflow-oriented.
  - Keep prompts tied to observable developer tasks.
  - Include testing and security categories explicitly.
- Applies to: Command cookbook, output formats, prompt library organization.
- Confidence level: High.
- Notes / limitations: Exact prompts should be checked at use time for current GitHub wording.
