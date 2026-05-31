# Public Repository Checklist

Use this checklist before publishing, tagging, releasing, or sharing this repository publicly.

## First-Screen Clarity

- [ ] `README.md` explains the project in the first 10 seconds.
- [ ] The value proposition is concrete and low-hype.
- [ ] The language switch links to `README.tr.md`.
- [ ] Quick start is visible without requiring a long search.
- [ ] Documentation links point to real files.
- [ ] The disclaimer does not imply OpenAI affiliation.

## Repository Trust

- [ ] `LICENSE` exists.
- [ ] `SECURITY.md` exists and discourages public disclosure reports.
- [ ] `CONTRIBUTING.md` exists.
- [ ] `CODE_OF_CONDUCT.md` exists.
- [ ] Pull request template includes safety and verification checks.
- [ ] Issue templates route bugs, features, prompt requests, documentation, and security reports appropriately.

## Documentation Architecture

- [ ] README stays concise and acts as the storefront.
- [ ] Deep usage details live in `docs/`.
- [ ] Reusable prompt knowledge lives in `knowledge/`.
- [ ] Generated reusable prompts are logged in `knowledge/outputs/generated-prompts.md`.
- [ ] Examples are copy-pasteable and use placeholders.
- [ ] Turkish docs are natural Turkish, not mechanical translation.

## Public Safety

- [ ] No API keys, tokens, cookies, private keys, credentials, or connection strings.
- [ ] No customer data, production data, private prompts, or proprietary implementation details.
- [ ] No unredacted logs, screenshots, local paths, personal notes, or private URLs.
- [ ] Placeholders are obvious and cannot be mistaken for real credentials.
- [ ] External source claims are either cited or clearly marked as interpretation.

## Suggested Local Checks

Run the checks that apply to the current change:

```powershell
rg --files --hidden -g "!.git/**"
rg -n "C:\\Users\\|/Users/|/home/|sk-|api[_-]?key|token|password|secret|private key|BEGIN .*PRIVATE KEY" --hidden -g "!.git/**"
git diff --check
git status --short
```

If a dedicated secret scanner such as Gitleaks is available, run it before a release or public push.

## Manual GitHub Settings

These are repository settings, not local file changes:

- Enable secret scanning where available.
- Enable push protection where available.
- Enable Dependabot alerts if the repository has dependency manifests.
- Enable code scanning if the repository contains executable code.
- Keep the About description short and specific.
- Use focused topics such as `codex`, `prompt-engineering`, `ai-coding`, `ai-agents`, `documentation`, and `security`.

## Release Readiness

- [ ] `CHANGELOG.md` has an entry for the change.
- [ ] `RELEASE_NOTES.md` matches the intended release.
- [ ] No generated archives, installers, build output, logs, or temporary files are tracked.
- [ ] Git status is understood before any commit.
- [ ] Commit, push, tag, release, or publish actions are explicitly approved.
