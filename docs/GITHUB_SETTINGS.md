# GitHub Settings

Use this page when updating the public repository after local validation passes.

## Repository

- New repository name: `prompt-architect`
- Legacy name: `codex-enterprise-prompt-architect`
- Visibility: public
- Website: leave blank unless a dedicated documentation site is published.
- Social preview image: `assets/social-preview.svg`

## About Description

Prompt Architect: reusable prompt patterns, approval-gated workflows, and verification checklists for AI-assisted development.

## Topics

`prompt-architect`, `prompt-engineering`, `ai-prompts`, `ai-agents`, `codex`, `developer-tools`, `workflow`, `automation`, `software-engineering`, `security`, `documentation`, `prompt-evaluation`, `agent-instructions`, `approval-gates`

## Checks

Run locally before changing GitHub settings:

```powershell
npm run check
git diff --check
gitleaks detect --redact --no-banner --no-git --verbose
```

GitHub CLI metadata updates require a valid authenticated `gh` session. Do not store tokens in this repository.
