# Decisions

## 2026-05-31 - Workspace Is A Prompt Lab, Not A Software App

Decision:
- This repository will not be used for unrelated software features.
- It will store knowledge, source cards, distilled playbooks, prompt templates, generated prompt outputs, and research logs.

Reason:
- The user explicitly defined the workspace as a prompt-engineering research and prompt-generation system.

## 2026-05-31 - Default Target Agent Is Codex

Decision:
- If the user asks for a prompt without specifying target agent/model, default to Codex.

Reason:
- The user explicitly requested this behavior.

## 2026-05-31 - Use Source Cards Instead Of Raw Dumps

Decision:
- Save concise source cards rather than large copied source content.

Reason:
- Keeps the knowledge base reusable, avoids copyright issues, and prevents context bloat.

## 2026-05-31 - Treat Vibe Coding As Workflow Pattern, Not Authority

Decision:
- Vibe coding content will be handled cautiously and only promoted when supported by credible sources or verification patterns.

Reason:
- Much public vibe-coding material is hype-driven or tool-marketing content.

## 2026-05-31 - Templates Must Include Stop Conditions

Decision:
- Every implementation-ready prompt template should include stop or approval rules.

Reason:
- Agentic workflows can otherwise cross into commits, deployments, secrets, production changes, or destructive actions without explicit authorization.

## 2026-05-31 - Strict Response Modes Control User-Facing Output

Decision:
- Route prompt-generation requests through explicit response modes such as `PROMPT_ONLY`, `GOAL_PLUS_PROMPT`, `PLAN_ONLY`, and `EXECUTE_AFTER_APPROVAL`.
- If the user asks for "sadece prompt ver", "yorum yapma", "ekleme yapma", "only prompt", or similar, output only the final prompt.

Reason:
- The Prompt Lab must be directly usable for fast prompt generation, including strict no-commentary workflows.

## 2026-05-31 - Deep Research Is Bounded By Source Quality And Reuse

Decision:
- Broad research requests are handled as bounded passes across official docs, research papers, mature public repositories, prompt libraries, security guidance, and high-signal practitioner examples.
- Stop when source-backed reusable lessons are sufficient for prompt generation.

Reason:
- The user wants high-quality coverage without endless research loops or raw content dumping.

## 2026-05-31 - Codex Is The Default And Primary Prompt Target

Decision:
- Default to Codex for prompt-generation requests unless the user names another target.
- If the user says "biz Codex'de çalışıyoruz", keep the prompt and research Codex-specific.
- Do not broaden into other agent tools unless the user asks or the comparison gives a direct Codex lesson.

Reason:
- The workspace's highest-value output is review-ready Codex prompts and Codex workflow control.

## 2026-05-31 - Strict Plan Control Prefers No-Goal First Message

Decision:
- Recommend no-goal first-message prompts, or `/plan`, when the user needs strict PLAN MODE ONLY behavior.
- Include optional Goals only with a warning that Goal mode may encourage Codex to work toward completion.

Reason:
- OpenAI Codex docs define Goal mode as a persistent objective and completion criterion. That is valuable for continuity, but risky when the first turn must not edit files.

## 2026-05-31 - Recovery Prompts Are Required For Premature Execution

Decision:
- Codex prompt packages for plan-only or approval-gated work should include STOP / RECOVER prompts.

Reason:
- Recovery instructions reduce damage when Codex starts editing too early and prevent automatic reverts that could overwrite user work.
