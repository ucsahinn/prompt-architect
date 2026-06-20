# Validation

Use this page before commits, pushes, tags, releases, or public handoffs.

## Local Command

```powershell
node scripts/validate-prompt-lab.mjs
```

The validator is dependency-free. It checks the repository as a prompt-system package rather than as an app.

## What It Checks

- Required public trust files exist.
- The Codex skill package entrypoint, support files, packaged KB mirror, and installer script exist.
- `README.md` and `README.tr.md` reference existing assets.
- Local Markdown file links point to existing files and heading anchors.
- Workflow badges in both README files point to real workflow files.
- Core response modes stay aligned between the skill package and the knowledge base.
- The root `knowledge/` tree and `.codex/skills/prompt-architect/knowledge/` stay byte-for-byte aligned.
- Source note files include date/confidence/outdated-risk style metadata.
- Obvious secret-like values are not present.
- `.playwright-mcp/` local browser artifacts are excluded from source control.
- The generated prompt ledger keeps its required markers.

## Release Gate

Before a release, run:

```powershell
rg --files -uu -g "!.git/**"
git status --short --branch
git diff --check
node scripts/validate-prompt-lab.mjs
gitleaks detect --redact --no-banner --no-git --verbose --source .
```

If Gitleaks is not installed, say that explicitly in the final report and run the built-in validator plus the documented `rg` scan in [PUBLIC_REPO_CHECKLIST.md](PUBLIC_REPO_CHECKLIST.md).

## What The Validator Does Not Guarantee

- It does not prove model behavior.
- It does not verify GitHub repository settings.
- It does not replace human review.
- It does not rotate or revoke secrets if a real secret was already published.

Use it as a release-quality gate, not as the only safety boundary.
