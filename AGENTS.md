# Prompt Lab Operating Rules

## Mission

This workspace exists only to research, collect, organize, distill, and generate professional prompts and instruction systems for AI agents and reasoning models.

Primary domains:

- Prompt engineering and prompt optimization.
- Context engineering and RAG-style instruction design.
- Codex prompt generation is the default and primary focus.
- Claude Code, Gemini, Cursor, Windsurf, Lovable, Replit Agent, and similar tools are secondary and should be addressed only when the user asks or when a direct Codex lesson is being compared.
- AGENTS.md, CLAUDE.md, rules, skills, subagents, and reusable instruction-file design.
- AI coding workflows, plan/execute/verify loops, browser QA loops, prompt evaluation, security-aware prompting, and enterprise AI instruction design.

This project's only purpose is prompt engineering and prompt generation. Do not perform unrelated user tasks inside this repository.

## Hard Boundaries

- Do not build unrelated software.
- Do not implement unrelated app features.
- Do not generate code unless it supports this prompt-engineering knowledge workspace.
- Do not store secrets, tokens, private keys, cookies, credentials, customer data, private prompts, paid content, or scraped private material.
- Do not treat low-quality blog posts, social posts, or hype content as authoritative.
- Do not keep researching indefinitely. Research only until there is enough reliable context to generate or improve the requested prompt.
- Do not invent unrelated features or expand the user's scope.
- Preserve user requirements exactly. Add missing professional structure only when it supports the user's stated goal.

## Operating Modes

### Research Mode

Use current web research when the topic is version-sensitive, model-specific, high-stakes, or source-dependent. Prioritize official docs, model-provider guides, research papers, credible engineering blogs, public prompt libraries, and public agent workflow examples.

For every useful source, record:

- Title
- URL
- Date checked
- Source type
- Confidence level
- Applies to
- Short summary
- Reusable lessons
- Facts vs interpretation
- Outdated-risk notes

### Knowledge Base Mode

Maintain the `knowledge/` directory as the source of truth. Update existing files instead of duplicating content. Keep files concise, reusable, and directly useful for prompt generation.

Use the knowledge base before researching:

1. `knowledge/distilled/`
2. `knowledge/templates/`
3. `knowledge/sources/`
4. `knowledge/outputs/generated-prompts.md`
5. `knowledge/logs/`

### Prompt Generation Mode

When asked for a prompt, infer the target agent if unspecified and default to Codex. If the user says "biz Codex'de çalışıyoruz", "Codex için", or similar, keep the output Codex-specific and do not broaden to other tools unless asked. Produce ready-to-paste prompts with clear role, mission, context, scope, non-goals, inputs, constraints, workflow, quality bar, verification, output format, stop conditions, and failure handling.

For Codex prompt creation, use the formal skill entrypoint at `.codex/skills/codex-enterprise-prompt-architect/SKILL.md`. Use this skill whenever the user asks for Codex prompt generation, Codex prompt improvement, Codex prompt audit, or Codex workflow prompt creation. The older `.codex/skills/codex-enterprise-prompt-architect.md` and `.codex/skills/codex-enterprise-prompt-architect-commands.md` files are compatibility shims.

Use `knowledge/distilled/response-modes.md` to route output mode.

Strict routing:

- If the user says `sadece prompt ver`, `yorum yapma`, `ekleme yapma`, `only prompt`, or similar, use `PROMPT_ONLY`.
- If the user asks for `goal + prompt`, use `GOAL_PLUS_PROMPT`.
- If the user asks for Codex and does not specify mode, default to `GOAL_PLUS_PROMPT` unless plan-only is safer.
- If implementation could be risky, broad, security-sensitive, production-adjacent, or destructive, default to `PLAN_ONLY` or `EXECUTE_AFTER_APPROVAL`.
- If the user asks to audit or score a prompt, use `PROMPT_AUDIT`.
- If the user asks to improve or rewrite a prompt, use `PROMPT_REWRITE`.
- If the user asks for reusable instructions, use `TEMPLATE_BUILD`, `AGENTS_MD_BUILD`, `CLAUDE_MD_BUILD`, or `GEMINI_SYSTEM_BUILD` as appropriate.

When `PROMPT_ONLY` is active:

- No commentary.
- No explanation.
- No extra suggestions.
- No source summary unless explicitly requested.
- Only the final prompt.

For Codex prompt requests, usually provide:

1. Short Goal
2. Full Prompt
3. Approval/Execute prompt, if relevant

Codex-specific routing:

- Prefer no-goal first-message prompts when the user wants strict PLAN MODE ONLY control.
- Explain that `/goal` creates a persistent objective and may encourage Codex to start working toward completion; do not recommend Goal when the user needs a hard planning stop.
- Always include an approval-gated execution prompt for risky app changes, broad UI cleanup, auth/session work, password managers, secret-handling changes, database changes, production-adjacent changes, or multi-file refactors.
- Always include browser QA for UI work.
- Always include security constraints for auth, sessions, secrets, password managers, encryption, leak checks, update systems, shell tools, MCP/app tools, and external content.
- Generate STOP / RECOVER prompts when Codex starts executing too early or leaves approved scope.
- Save important Codex prompt packages to `knowledge/outputs/generated-prompts.md`.
- If the user says `sadece prompt ver`, `yorum yapma`, `ekleme yapma`, `only prompt`, or similar, return `PROMPT_ONLY` with no explanation.
- If the user asks for strict control, recommend no Goal plus first-message `PLAN MODE ONLY`.
- If the user asks for risky app changes, include approval-gated execution.

For Codex prompts, prefer:

- Goal
- Operating Role
- Repository Inspection Rules
- Source-of-Truth Rules
- Non-Negotiable Requirements
- Implementation Scope
- Plan Mode Rules
- Execution Rules
- Verification Rules
- Browser QA Rules
- Final Report Format
- Stop Conditions

Before finalizing any generated prompt, apply `knowledge/distilled/prompt-quality-rubric.md`. Rewrite the prompt if it misses core rubric requirements.

For Codex-specific prompt audits, also use `knowledge/distilled/evaluation-workflows.md` and `knowledge/templates/prompt-eval-template.md`.

Save generated prompts to `knowledge/outputs/generated-prompts.md` unless the user explicitly says not to save.

Use `knowledge/templates/command-cookbook.md` to understand short user commands. Use `knowledge/templates/output-formats.md` to shape final output.

### Self-Improvement Mode

If the knowledge base is insufficient for a requested prompt, state the missing area, research only that area, update the knowledge base, then generate the prompt.

## Source Quality Rules

- Tier 1: Official provider docs, standards bodies, security guidance, peer-reviewed or well-cited research.
- Tier 2: Credible company engineering blogs and mature open-source workflow docs.
- Tier 3: Practitioner writeups with concrete, reproducible examples.
- Tier 4: Social posts, newsletters, videos, and hype articles. Use only as leads unless corroborated.

## Stop Rules

Stop researching when:

- The target agent and workflow are known.
- The prompt can be made specific, safe, testable, and execution-ready.
- At least one authoritative source supports important tool-specific behavior.
- Remaining uncertainty can be marked as an assumption or limitation.

Research only when existing knowledge is missing, stale, shallow, or low-confidence. Keep research bounded and source-quality driven. Do not attempt exhaustive internet scans. For broad requests such as "scan everything" or "make sources complete," turn the request into a bounded research pass with source-quality rules and stop criteria.

Ask clarification only when the missing information is necessary to avoid a materially wrong or risky prompt. Otherwise make a safe best effort and state assumptions when commentary is allowed.

## Verification

Before reporting workspace updates, verify file structure with `rg --files` or equivalent. For prompt outputs, verify that the prompt includes constraints, non-goals, output format, and success checks.
