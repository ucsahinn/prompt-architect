# Security And Safety Source Notes

Last checked: 2026-06-14

## 2026-06-14 Refresh: OWASP Top 10 For LLM Applications 2025

- URL: https://genai.owasp.org/llm-top-10/
- Source type: OWASP Gen AI Security Project.
- Date checked: 2026-06-14.
- Confidence: High.
- Applies to: prompt injection, sensitive information disclosure, supply chain, improper output handling, excessive agency, system prompt leakage, misinformation, unbounded consumption.
- Short summary: OWASP's 2025 LLM risk set maps directly to agentic coding prompts because prompts can grant tools, read files, publish outputs, or expose sensitive information.
- Reusable lessons:
  - Keep prompt injection and excessive agency as first-class risks.
  - Require output validation, source provenance, and human approval for dangerous actions.
  - Include loop/budget limits for broad research or automation.
- Facts vs interpretation:
  - Fact: OWASP lists prompt injection, sensitive information disclosure, supply chain, improper output handling, excessive agency, and related LLM risks.
  - Interpretation: Prompt Lab templates should include explicit untrusted-content handling and least-privilege tool guidance.
- Outdated risk: Medium. OWASP guidance versions change, but the risk categories are durable.

## 2026-06-14 Refresh: OpenAI Agent Security

- URL: https://openai.com/index/designing-agents-to-resist-prompt-injection/
- Source type: Official OpenAI security guidance.
- Date checked: 2026-06-14.
- Confidence: High.
- Applies to: agent prompt injection, tool permissions, source/sink analysis.
- Short summary: Defensive agent design should constrain the impact of successful manipulation, separate untrusted content from trusted instructions, and guard dangerous sinks.
- Reusable lessons:
  - Do not rely only on malicious-input filtering.
  - Identify sources that can influence the agent and sinks that can cause harm.
  - Require consent or blocking rules before sensitive transmissions or dangerous tool actions.
- Facts vs interpretation:
  - Fact: external content can steer agents toward unintended actions.
  - Interpretation: Prompt Lab security prompts should make source/sink review mandatory for MCP, browser, web, and repository-content workflows.
- Outdated risk: Medium.

## OpenAI Prompt Injection Guidance

- URL: https://openai.com/index/designing-agents-to-resist-prompt-injection/
- Source type: Official OpenAI security article.
- Confidence: High.
- Key lessons:
  - Treat prompt injection as social engineering against agents.
  - Do not rely only on malicious-input detection.
  - Constrain the impact of successful manipulation.
  - Analyze sources and sinks: untrusted content plus dangerous capabilities.
  - Require safeguards before sensitive data transmission or dangerous actions.

## OWASP Top 10 For LLM Applications

- URL: https://owasp.org/www-project-top-10-for-large-language-model-applications
- Source type: OWASP security project.
- Confidence: High.
- Key lessons:
  - Prompt injection and sensitive information disclosure are core LLM application risks.
  - Excessive agency, insecure output handling, and overreliance are relevant to autonomous coding agents.
  - Security prompts must include least privilege, output handling, review gates, and auditability.

## OWASP MCP Top 10

- URL: https://owasp.org/www-project-mcp-top-10/
- Source type: OWASP security project.
- Confidence: High.
- Key lessons:
  - MCP systems can introduce context spoofing, prompt-state manipulation, insecure memory references, and covert channel risks.
  - Do not store secrets in model memory, logs, or protocol traces.
  - Scope tools and context windows carefully.

## Prompt Requirements For Security-Sensitive Work

Security prompts should include:

- No secret exposure.
- No unsafe storage of credentials or private data.
- No logs containing sensitive values.
- Least-privilege tool and permission rules.
- Explicit treatment of untrusted input.
- Disabled/error states that fail safe.
- Audit logs if available.
- Regression tests for auth, authorization, validation, and data boundaries.
- Stop conditions before account, billing, production, database, credential, or destructive changes.

## OpenAI Codex Agent Approvals And Security

- URL: https://developers.openai.com/codex/agent-approvals-security
- Type: Official OpenAI Codex documentation.
- Date checked: 2026-05-31.
- Short summary: Codex uses sandboxing and approval policies to control what the agent can technically do and when it must ask before acting. Network is off by default locally; web search and network access require caution because prompt injection can steer tool use.
- Reusable lessons:
  - Security-sensitive Codex prompts should specify read-only or plan-only behavior first.
  - Treat shell, network, web search, MCP, app connectors, file edits, and browser automation as action surfaces.
  - Stop before enabling network access, reading credentials, touching production, mutating databases, committing, pushing, deploying, releasing, or running destructive commands.
  - Treat web results and external content as untrusted data.
- Applies to: Codex security prompts, password-manager prompts, auth/session prompts, secret-handling prompts.
- Confidence level: High.
- Notes / limitations: Exact sandbox/approval defaults can vary by Codex surface and configuration.

## OWASP Prompt Injection

- URL: https://owasp.org/www-community/attacks/PromptInjection
- Type: OWASP security guidance.
- Date checked: 2026-05-31.
- Short summary: Describes prompt injection as input that manipulates LLM behavior against intended instructions.
- Reusable lessons:
  - Treat user and retrieved content as untrusted until validated.
  - Do not let untrusted text override developer/system rules.
- Applies to: Security prompts, RAG prompts, tool-use prompts.
- Confidence level: High.
- Notes / limitations: OWASP pages are guidance, not product-specific implementation docs.

## Microsoft Indirect Prompt Injection Guidance

- URL: https://learn.microsoft.com/en-us/security/zero-trust/sfi/defend-indirect-prompt-injection
- Type: Official Microsoft security guidance.
- Date checked: 2026-05-31.
- Short summary: Covers defenses against indirect prompt injection where retrieved data or tool context tries to steer the model.
- Reusable lessons:
  - Add critic/review layers for inputs and outputs in multi-agent systems.
  - Isolate untrusted content from tool/action authority.
  - Continuously test for prompt injection and leakage.
- Applies to: Enterprise agent prompts, MCP/tool prompts, RAG security.
- Confidence level: High.
- Notes / limitations: Product-specific controls should be checked for target platform.

## Microsoft Agent Safety

- URL: https://learn.microsoft.com/en-us/agent-framework/agents/safety
- Type: Official Microsoft agent safety guidance.
- Date checked: 2026-05-31.
- Short summary: Frames safe agents as a shared responsibility and identifies indirect prompt injection risks from tool/context providers and chat history.
- Reusable lessons:
  - Safety prompts need runtime/tool safeguards.
  - Agent state, history, and context providers are attack surfaces.
- Applies to: Agent safety, context engineering, tool governance.
- Confidence level: High.
- Notes / limitations: Tied to Microsoft Agent Framework but broadly reusable as a safety lens.

## PyRIT

- URL: https://github.com/microsoft/PyRIT
- Type: Public Microsoft red-team framework.
- Date checked: 2026-05-31.
- Short summary: Open-source framework for identifying risks in generative AI systems through red-team workflows.
- Reusable lessons:
  - Security prompts should include adversarial testing plans.
  - Record target behavior, attack objective, evidence, and remediation.
- Applies to: Prompt audits, red-team prompt generation, AI safety verification.
- Confidence level: High.
- Notes / limitations: Do not add as a dependency without explicit implementation scope.
