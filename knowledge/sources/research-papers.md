# Research Paper Source Cards

Last checked: 2026-05-31

## ChainForge: A Visual Toolkit for Prompt Engineering and LLM Hypothesis Testing

- URL: https://arxiv.org/abs/2309.09128
- Source type: Research paper, CHI 2024.
- Confidence: High for evaluation workflow concepts.
- Applies to: Prompt evaluation, prompt comparison, model selection, prompt variants.
- Summary: ChainForge supports prompt template design, model comparison, and hypothesis testing across many LLM responses. The paper identifies three practical modes: opportunistic exploration, limited evaluation, and iterative refinement.
- Reusable lessons:
  - Compare prompt variants systematically.
  - Evaluate across multiple examples rather than one anecdotal output.
  - Treat model choice and prompt choice as separate variables.
  - Use iterative refinement after limited evaluation shows a pattern.
- Facts: The authors built a visual toolkit and studied how users evaluate prompt/model variations.
- Interpretation: This workspace should avoid "one perfect prompt" thinking and prefer versioned variants plus evaluation notes.
- Outdated risk: Low.

## A Comparative Study of DSPy Teleprompter Algorithms for Aligning LLM Evaluation Metrics to Human Evaluation

- URL: https://arxiv.org/abs/2412.15298
- Source type: Research preprint.
- Confidence: Medium. Useful as evidence for automated prompt optimization, but task-specific.
- Applies to: DSPy, prompt optimization, eval alignment, hallucination detection.
- Summary: The paper compares DSPy teleprompter algorithms such as COPRO, MIPRO, BootstrapFewShot, and KNN few-shot for aligning LLM-as-judge metrics to human labels.
- Reusable lessons:
  - Prompt optimization should be anchored to evaluation data.
  - Different optimizers can perform differently by task.
  - Human labels remain important when using LLM-based evaluation.
- Facts: The paper focuses on hallucination detection and a public benchmark dataset.
- Interpretation: Automated prompt optimization is promising but must be validated against the actual task distribution.
- Outdated risk: Medium.

## Automatic Prompt Optimization via Heuristic Search: A Survey

- URL: https://aclanthology.org/2025.findings-acl.1140.pdf
- Source type: ACL Findings 2025 survey.
- Confidence: High for taxonomy-level prompt optimization concepts.
- Applies to: Prompt optimization, evaluation loops, search-based prompt refinement.
- Summary: The survey frames automatic prompt optimization as systematic exploration and improvement of prompts using heuristic search, evaluation criteria, operators, and stopping rules.
- Reusable lessons:
  - Manual prompt changes rely heavily on intuition and trial-and-error.
  - Optimization workflows need initialization, evaluation, selection/update, and termination.
  - Optimization criteria can include task performance, generalizability, safety, ethics, and multi-objective tradeoffs.
  - Treat prompt design as a search problem when outputs matter at scale.
- Facts: The survey covers where optimization happens, what is optimized, criteria, operators, and iterative algorithms.
- Interpretation: Enterprise prompt systems should define metrics before optimization and stop criteria before running experiments.
- Outdated risk: Low to medium.

## Context Engineering: From Prompts to Corporate Multi-Agent Architecture

- URL: https://arxiv.org/abs/2603.09619
- Source type: Research preprint.
- Confidence: Medium. Recent and conceptual; useful but should be corroborated.
- Applies to: Context engineering, enterprise agent design, multi-agent architectures.
- Summary: The paper argues that prompt engineering is necessary but insufficient for autonomous agents and defines context engineering as designing, structuring, and managing the full informational environment in which agents decide.
- Reusable lessons:
  - Context quality should be judged by relevance, sufficiency, isolation, economy, and provenance.
  - Enterprise agent systems need context, intent, and specification layers.
  - Whoever controls context strongly influences behavior.
- Facts: The paper proposes CE as a standalone discipline and a maturity model.
- Interpretation: This workspace should separate prompt wording from context selection, provenance, and instruction hierarchy.
- Outdated risk: High. This is a recent single-author preprint, so treat as a useful conceptual lens rather than settled consensus.

## Chain-of-Thought Prompting Elicits Reasoning in Large Language Models

- URL: https://arxiv.org/abs/2201.11903
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Shows that intermediate reasoning examples can improve performance on multi-step reasoning tasks.
- Reusable lessons:
  - Use worked examples when the task requires decomposition.
  - Avoid exposing hidden reasoning requirements in user-facing outputs; ask for concise rationale or plan when appropriate.
- Applies to: Reasoning prompts, decomposition prompts, evaluation.
- Confidence level: High.
- Notes / limitations: Chain-of-thought behavior varies by model and task; do not force verbose reasoning when a plan or checklist is enough.

## ReAct: Synergizing Reasoning and Acting in Language Models

- URL: https://arxiv.org/abs/2210.03629
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Combines reasoning traces with actions, enabling models to interact with tools/environments while solving tasks.
- Reusable lessons:
  - Separate thought/planning, action/tool use, and observation.
  - Tool-enabled prompts need explicit action boundaries and observation handling.
- Applies to: Agent workflows, tool-use prompts, debugging prompts.
- Confidence level: High.
- Notes / limitations: Modern agents may hide reasoning, but the plan/action/observe loop remains useful.

## Tree of Thoughts

- URL: https://arxiv.org/abs/2305.10601
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Explores multiple reasoning paths and evaluates alternatives before choosing.
- Reusable lessons:
  - Use branch-and-evaluate prompting for ambiguous strategy, architecture, or product decisions.
  - Do not use it for simple tasks where it adds overhead.
- Applies to: Planning prompts, architecture prompts, product prompts.
- Confidence level: High.
- Notes / limitations: More deliberation increases cost and latency.

## Graph of Thoughts

- URL: https://arxiv.org/abs/2308.09687
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Generalizes reasoning structures beyond linear chains or trees into graph-based transformations and aggregation.
- Reusable lessons:
  - Complex synthesis prompts can decompose, transform, compare, and aggregate sub-results.
  - Use graph-like workflows for research synthesis and multi-source comparison.
- Applies to: Research prompts, multi-agent workflows, context engineering.
- Confidence level: High.
- Notes / limitations: Usually too heavy for everyday prompt generation.

## Self-Consistency Improves Chain of Thought Reasoning

- URL: https://arxiv.org/abs/2203.11171
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Samples multiple reasoning paths and selects consistent answers for better reasoning accuracy.
- Reusable lessons:
  - For high-stakes reasoning, compare multiple candidate approaches.
  - Use independent review or repeated evals rather than one answer.
- Applies to: Prompt audit, research synthesis, complex debugging.
- Confidence level: High.
- Notes / limitations: Increases cost; not needed for simple deterministic tasks.

## Reflexion: Language Agents with Verbal Reinforcement Learning

- URL: https://arxiv.org/abs/2303.11366
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Agents improve by reflecting on failures and storing verbal feedback for later attempts.
- Reusable lessons:
  - Capture failure notes and apply them to the next attempt.
  - Reflection should be tied to evidence, not generic self-critique.
- Applies to: Agent loops, debugging prompts, prompt optimization.
- Confidence level: High.
- Notes / limitations: Reflection can reinforce wrong assumptions if failure analysis is poor.

## Large Language Models Are Human-Level Prompt Engineers

- URL: https://arxiv.org/abs/2211.01910
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Introduces Automatic Prompt Engineer (APE), using LLMs to generate and select prompts.
- Reusable lessons:
  - Prompt generation can be treated as search over candidates.
  - Use scoring/evals to select prompts, not model confidence.
- Applies to: Prompt improvement, prompt optimization.
- Confidence level: High.
- Notes / limitations: Generated prompts still need human review and task-specific evals.

## Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

- URL: https://arxiv.org/abs/2005.11401
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Combines parametric generation with retrieved non-parametric knowledge.
- Reusable lessons:
  - Ground prompts with retrieved sources when factual accuracy matters.
  - Record provenance and uncertainty.
- Applies to: RAG prompts, research-backed prompts.
- Confidence level: High.
- Notes / limitations: Retrieval quality and source reliability remain critical.

## Lost in the Middle

- URL: https://arxiv.org/abs/2307.03172
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Shows long-context models can underuse information placed in the middle of context.
- Reusable lessons:
  - Put critical constraints near the beginning and recap them near the end.
  - Avoid burying requirements in large context dumps.
- Applies to: Context engineering, long prompts, instruction files.
- Confidence level: High.
- Notes / limitations: Effects vary by model and context length.

## LLM-as-a-Judge Limitations

- URL: https://arxiv.org/abs/2306.05685
- Type: Research paper.
- Date checked: 2026-05-31.
- Short summary: Work on judging LLM outputs highlights biases such as position, verbosity, and self-preference in automated evaluations.
- Reusable lessons:
  - Calibrate automated judges with human labels.
  - Randomize candidate order where possible.
  - Do not trust one LLM judge blindly.
- Applies to: Prompt evaluation, prompt audit, enterprise evals.
- Confidence level: Medium-high.
- Notes / limitations: Use as evaluation caution, not a complete eval framework.
