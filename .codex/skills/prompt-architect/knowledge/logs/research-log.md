# Research Log

## 2026-05-31 - Initial Bounded Source Pass

Scope:
- Build the first source-grounded foundation for the prompt-engineering workspace.
- Do not run large-scale research or download private/paid material.

Sources checked:

- OpenAI Codex ExecPlans: https://developers.openai.com/cookbook/articles/codex_exec_plans
- OpenAI Prompt Engineering: https://developers.openai.com/api/docs/guides/prompt-engineering
- OpenAI Prompt Generation: https://platform.openai.com/docs/guides/prompt-generation
- OpenAI Prompt Injection Defense: https://openai.com/index/designing-agents-to-resist-prompt-injection/
- OpenAI Help Prompt Best Practices: https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices
- Anthropic Claude Code Best Practices: https://code.claude.com/docs/en/best-practices
- Anthropic Claude Code Memory: https://code.claude.com/docs/en/memory
- Anthropic Prompt Engineering Overview: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview
- Anthropic Prompting Best Practices: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
- Anthropic System Prompts: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/system-prompts
- Anthropic Prompting Tools: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-tools
- Google Gemini Text Generation/System Instructions: https://ai.google.dev/gemini-api/docs/system-instructions
- Google Vertex AI Prompt Design Strategies: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies
- Google Vertex AI Prompt Management: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-reference/prompt-classes
- Google Vertex AI Prompt Optimizer: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-optimizer
- OWASP LLM Top 10: https://owasp.org/www-project-top-10-for-large-language-model-applications
- OWASP MCP Top 10: https://owasp.org/www-project-mcp-top-10/
- ChainForge paper: https://arxiv.org/abs/2309.09128
- DSPy teleprompter comparison: https://arxiv.org/abs/2412.15298
- Automatic Prompt Optimization survey: https://aclanthology.org/2025.findings-acl.1140.pdf
- Context Engineering preprint: https://arxiv.org/abs/2603.09619

Key findings:
- Strong prompts behave like executable specifications: role, task, scope, constraints, workflow, verification, and stop rules.
- Agent prompts need explicit plan/execute/verify loops.
- Prompt generation should be template-based and versioned.
- Context engineering is distinct from wording: source quality, authority, relevance, isolation, and provenance matter.
- Security-aware prompts must treat untrusted content as data and constrain dangerous sinks.

Research stop reason:
- Enough authoritative material exists to scaffold the workspace and generate first-generation templates.
- Further research should be topic-specific rather than broad.

## 2026-05-31 - Bounded Deep Research Expansion

Scope:
- Improve practical prompt-generation coverage without an endless research loop.
- Cover official docs, public repositories, instruction-file examples, research papers, browser QA, security, and practitioner/community signals.

High-confidence sources added:
- OpenAI Codex AGENTS.md docs: https://developers.openai.com/codex/guides/agents-md
- OpenAI agent safety docs: https://developers.openai.com/api/docs/guides/agent-builder-safety
- OpenAI tool docs: https://developers.openai.com/api/docs/guides/tools
- Anthropic Claude Code best practices: https://code.claude.com/docs/en/best-practices
- Cursor rules docs: https://docs.cursor.com/en/context
- Windsurf memories/rules docs: https://docs.windsurf.com/windsurf/cascade/memories
- Replit Agent docs: https://docs.replit.com/learn/build-with-agent
- GitHub Copilot repository instructions: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
- GitHub Copilot cloud agent concepts: https://docs.github.com/en/copilot/concepts/agents/cloud-agent
- Playwright best practices: https://playwright.dev/docs/best-practices
- AGENTS.md open format: https://agents.md/

Public repositories reviewed:
- agentsmd/agents.md
- openai/codex
- anthropics/claude-code
- promptfoo/promptfoo
- stanfordnlp/dspy
- microsoft/promptbench
- dottxt-ai/outlines
- microsoft/playwright
- All-Hands-AI/OpenHands
- microsoft/PyRIT

Research papers added:
- Chain-of-Thought
- ReAct
- Tree of Thoughts
- Graph of Thoughts
- Self-consistency
- Reflexion
- Automatic Prompt Engineer
- RAG
- Lost in the Middle
- LLM-as-a-judge limitations

Community/practitioner signals:
- Used only as low-confidence field signals for recurring pain points: ignored instructions, bloated rules, unsafe public repos, prompt injection, and missing verification.

Research stop reason:
- Coverage is strong enough to support practical prompt generation and evaluation across Codex, Claude Code, Gemini, Cursor, Windsurf, Replit Agent, Copilot, browser QA, prompt eval, and security prompting.
- Further work should be bounded by a target agent, source family, or prompt type.

## 2026-05-31 - Final Codex-Focused Deepening Pass

Scope:
- Improve only Codex prompt engineering and Codex workflow quality.
- Use the existing knowledge base first.
- Research only Codex-relevant gaps.
- Do not broaden into other tools except where a source gives a direct Codex lesson.

High-confidence Codex sources checked:
- OpenAI Codex Prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex Workflows: https://developers.openai.com/codex/workflows
- OpenAI Codex Best Practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex Agent Skills: https://developers.openai.com/codex/skills
- OpenAI Codex CLI Slash Commands: https://developers.openai.com/codex/cli/slash-commands
- OpenAI Codex Agent Approvals & Security: https://developers.openai.com/codex/agent-approvals-security
- Public OpenAI Codex repository: https://github.com/openai/codex
- Public OpenAI skills examples: https://github.com/openai/skills

Reusable lessons added:
- Use no-goal first-message prompts or `/plan` for strict no-execution planning.
- Use `/goal` only when persistent task tracking is useful and the full prompt still gates execution.
- Include goal, context, constraints, and done criteria in Codex prompts.
- Split large app cleanup into safe phases.
- Require browser QA for UI work and security constraints for auth/secrets/password managers.
- Use AGENTS.md for durable repo rules and skills for repeatable workflows.
- Add STOP / RECOVER prompts for premature execution.
- Evaluate Codex prompts for execution mode, scope creep, inspection targets, verification, browser QA, security constraints, final report, stop conditions, and missing-information handling.

Research stop reason:
- Codex coverage is now strong enough for goal design, no-goal plan-only prompts, approval-gated execution, AGENTS.md design, browser QA, security-sensitive workflows, evaluation, recovery prompts, and large app cleanup prompt packages.
- Further work should be based on real Codex session failures or a specific repository prompt need.

## 2026-06-14 - Prompt Lab v1.1.0 Source Refresh

Scope:
- Refresh current source-backed guidance for the public Prompt Architect repository.
- Keep Codex as the primary target.
- Use non-Codex sources only when they improve agent-control, prompt evaluation, context engineering, browser QA, public repo quality, or security boundaries.

High-confidence sources checked:
- OpenAI Codex Best Practices: https://developers.openai.com/codex/learn/best-practices
- OpenAI Codex Prompting: https://developers.openai.com/codex/prompting
- OpenAI Codex Agent Skills: https://developers.openai.com/codex/skills
- OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
- OpenAI Codex MCP: https://developers.openai.com/codex/mcp
- OpenAI Codex Plugins: https://developers.openai.com/codex/plugins
- OpenAI Codex Subagents: https://developers.openai.com/codex/subagents
- OpenAI Agent Approvals And Security: https://developers.openai.com/codex/agent-approvals-security
- OpenAI API Tools: https://developers.openai.com/api/docs/guides/tools
- OWASP LLM Top 10 2025: https://genai.owasp.org/llm-top-10/
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Prompt Report: https://arxiv.org/abs/2406.06608
- Lost in the Middle: https://arxiv.org/abs/2307.03172

Reusable lessons added:
- Treat AGENTS.md, skills, config, MCP, plugins, subagents, hooks, and rules as separate surfaces.
- Keep skill entrypoints concise and put deeper theory in `knowledge/` and `docs/`.
- Use source cards for unstable or public-facing claims.
- Prefer least-privilege MCP/tool routing over "use every tool."
- Use subagents for bounded specialist work, not indiscriminate parallelism.
- Add local validation and CI gates for public prompt-skill repositories.

Research stop reason:
- Coverage is sufficient to update the skill package, knowledge base, docs, validator, README storefront, and release notes without drifting into generic AI content.
