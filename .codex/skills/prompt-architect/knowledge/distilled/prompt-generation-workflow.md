# Prompt Generation Workflow

Last updated: 2026-05-31

Follow this workflow whenever the user asks for a prompt, prompt improvement, instruction file, workflow prompt, or prompt-generation artifact.

## Step 1: Classify Request Type

Classify the request as one or more of:

- Codex Goal
- Full Prompt
- Goal + Full Prompt
- Plan-only prompt
- Execute-after-approval prompt
- Direct execution prompt
- Prompt improvement
- AGENTS.md instruction file
- CLAUDE.md instruction file
- Gemini system instruction
- UI/UX implementation prompt
- Security review prompt
- Refactor prompt
- Debugging prompt
- Product prompt
- Research prompt
- Review prompt
- Reusable skill/workflow prompt

## Step 2: Identify Target Agent

- Use the user's named target agent/model/tool.
- If missing, default to Codex.
- If the target changes the structure, use the target-specific template.
- Do not invent model-specific facts; research current docs if the prompt depends on them.

## Step 3: Check Whether Existing Knowledge Is Enough

Use local knowledge first:

1. `AGENTS.md`
2. `knowledge/distilled/`
3. `knowledge/templates/`
4. `knowledge/sources/`
5. `knowledge/outputs/generated-prompts.md` for prior reusable examples

Existing knowledge is enough when the prompt can be made clear, scoped, safe, testable, and agent-compatible without new facts.

## Step 4: Research Only If Needed

Research only when:

- The target tool/model behavior may have changed.
- Official documentation is needed.
- The request is security-sensitive, high-stakes, or source-dependent.
- The knowledge base lacks the needed workflow or domain pattern.
- The user explicitly asks for current research.

Research rules:

- Prefer official docs, standards, research papers, credible engineering blogs, and mature public examples.
- Use blogs, comments, and social posts only as low-confidence signals unless corroborated.
- Save useful source cards.
- Stop when enough reliable information exists to generate the prompt.
- Do not attempt an exhaustive internet scan.

## Step 5: Select Template

Choose the closest template from `knowledge/templates/`:

- `codex-goal-template.md`
- `codex-plan-execute-template.md`
- `ui-ux-agent-template.md`
- `security-agent-template.md`
- `refactor-agent-template.md`
- `debugging-agent-template.md`
- `product-agent-template.md`
- `research-agent-template.md`
- `agent-instruction-template.md`
- `prompt-request-intake.md`
- `output-formats.md`

Combine templates only when the user's task genuinely spans multiple prompt types.

## Step 6: Build Structured Prompt

Preserve the user's requirements exactly. Add professional structure only to make the prompt safer, clearer, more testable, or more agent-compatible.

Include:

- Role
- Mission
- Context
- Inputs
- Scope
- Non-goals
- Constraints
- Workflow
- Verification
- Output format
- Stop conditions
- Failure handling

## Step 7: Apply Quality Rubric

Check the prompt against `knowledge/distilled/prompt-quality-rubric.md`.

Enterprise prompts must:

- Average at least 4.0.
- Have no category below 3.
- Score at least 4 for safety/security, scope control, verifiability, and output format precision.

Rewrite before finalizing if red flags remain.

## Step 8: Add Verification And Stop Conditions

Always include verification suited to the prompt type:

- Coding: tests, lint, typecheck, build, changed files.
- UI/UX: browser QA, responsive states, accessibility, interaction states.
- Security: no secrets, least privilege, regression tests, auditability.
- Research: citations/source cards, date checked, confidence, outdated-risk notes.
- Product: acceptance criteria and non-goals.
- Prompt improvement: preserved intent and changes made.

Always include stop conditions for risky actions.

## Step 9: Save Output To Generated Prompts Ledger

Append the final prompt to `knowledge/outputs/generated-prompts.md` unless the user explicitly says not to save it.

Use the ledger format:

- Date
- User request summary
- Target agent
- Prompt type
- Knowledge used
- Final prompt
- Verification/quality notes
- Follow-up needed

## Step 10: Return Ready-To-Paste Response

Return the final prompt in the requested format.

If the user says `yorum yapma`, `ekleme yapma`, or `sadece prompt ver`, return only the prompt and no extra commentary.

If there are important assumptions, include them only when the user did not forbid commentary.
