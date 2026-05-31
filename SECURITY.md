# Security Policy

## Reporting Vulnerabilities

Please do not open public issues for sensitive security reports.

If you find a vulnerability, unsafe prompt pattern, secret exposure risk, prompt injection concern, or risky Codex workflow rule, report it privately to the maintainer through a non-public channel available on the project owner profile or repository settings.

Do not include real secrets, API keys, tokens, credentials, private customer data, cookies, private keys, or production data in the report.

## Scope

Security concerns include:

- Prompt patterns that could expose secrets or private data.
- Instructions that allow unsafe tool use.
- Prompt injection or indirect prompt injection weaknesses.
- Unsafe guidance for auth, sessions, password managers, encryption, or secret handling.
- Overly broad agent autonomy without approval gates.
- Documentation that could encourage unsafe production, account, database, deployment, commit, push, release, or destructive actions.

## Secret-Handling Policy

This repository must not contain real secrets, credentials, tokens, cookies, private keys, customer data, private prompts, `.env` files, or paid/private content.

If a secret is accidentally committed or published, treat it as compromised. Rotate or revoke the credential first, then address repository cleanup separately.

## Prompt Injection And Unsafe Instruction Concerns

Prompt injection concerns are in scope when project instructions could cause Codex or another agent to:

- Treat untrusted content as trusted instructions.
- Exfiltrate secrets or private data.
- Run unsafe shell, network, MCP, browser, or app tool actions.
- Mutate production, accounts, databases, billing, deployments, releases, or credentials without explicit approval.

## Response Expectations

This project is maintained on a best-effort basis. Reports will be reviewed when possible, prioritized by severity and reproducibility, and addressed through documentation, prompt pattern, or workflow updates where appropriate.

No guaranteed response timeline is promised.
