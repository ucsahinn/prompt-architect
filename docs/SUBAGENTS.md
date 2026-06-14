# Subagent Routing

Subagents are useful when they reduce context pressure or parallelize read-heavy work. They are not a reason to split every task.

## Default Rule

Use subagents only when the user explicitly asks for delegation, parallel agent work, or the task is large enough that a specialist result materially improves the outcome.

Do not spawn subagents for trivial single-file edits or when the next local step depends directly on the answer.

## Recommended Roles

| Role | Use for | Output expected |
| --- | --- | --- |
| `code_mapper` | unfamiliar repository, broad refactor, architecture mapping | file map, ownership boundaries, risks |
| `docs_researcher` | current docs, Codex behavior, MCP, libraries, standards | source-backed facts and implications |
| `security_auditor` | secrets, auth, permissions, MCP/tool risk | findings by severity with evidence |
| `frontend_verifier` | UI/browser behavior and screenshots | route/viewport/console/visual evidence |
| `test_verifier` | lint, tests, build, smoke checks | commands, pass/fail evidence, blockers |
| `release_verifier` | push, tag, release, publish readiness | git hygiene, version, artifact, scan status |
| `code_reviewer` | risky diffs and PR-quality review | correctness/security/regression findings |

## Prompt Pattern

```text
Use subagents only for bounded read-only sidecar work.
Keep implementation in the main thread unless write scopes are explicitly split.
Do not use subagents to bypass approvals, credentials, destructive commands, or external-state changes.
Summarize subagent findings before editing.
```

## Safety Rules

- Subagents inherit the same security and approval constraints.
- Treat subagent output as evidence to review, not as authority to blindly apply.
- Keep write-heavy changes in the main thread unless file ownership is disjoint.
- Close subagents when their result is no longer needed.
- If a subagent discovers a new risk that changes scope, stop and surface it.

## Good Use

For a broad repo upgrade:

1. Main thread inspects the repository and forms the execution plan.
2. `docs_researcher` checks current official docs.
3. `code_mapper` maps repo surfaces and drift risks.
4. `release_verifier` checks public handoff blockers.
5. Main thread implements and verifies.

## Bad Use

- Spawning every available role just because it exists.
- Asking multiple agents to edit the same files.
- Delegating secret inspection or destructive operations.
- Treating subagents as a way to skip local verification.
