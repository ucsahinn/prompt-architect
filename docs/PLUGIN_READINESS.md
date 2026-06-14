# Plugin Readiness

This repository is first a Codex skill and Prompt Lab knowledge base. It should become a plugin only if distribution needs justify the extra packaging layer.

## Stay As A Skill When

- The repository is used as a source package.
- Users copy the skill directory into their own Codex setup.
- There is no bundled MCP server, app, lifecycle hook, or external integration.
- The project is mostly Markdown instructions, templates, and examples.

## Consider Plugin Packaging When

- The skill should install as a versioned package.
- The package needs bundled MCP configuration, apps, hooks, assets, or scripts.
- Multiple users or teams need repeatable installation with metadata.
- The repository has a stable release process and validation workflow.

## Plugin-Ready Checklist

- `SKILL.md` has a concise `name` and `description`.
- The description names concrete trigger cases.
- Supporting files are referenced by the entrypoint.
- Validation passes locally and in CI.
- Release notes explain compatibility and migration.
- Public safety checks pass.
- No private paths, logs, screenshots, local state, or credentials are packaged.

## Current Recommendation

Keep the default distribution as the public skill package:

```text
.codex/skills/codex-enterprise-prompt-architect/
```

Document plugin readiness, but do not add plugin manifests until the repository needs bundled installation behavior.
