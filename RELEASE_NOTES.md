# Release Notes: v1.1.1

Prompt Architect v1.1.1 is a packaging and install-hardening release. It keeps the public repository name, folder name, and install target aligned as `prompt-architect`, and makes the installable skill carry the Prompt Lab knowledge base it references.

## Highlights

- Packaged the Prompt Lab KB under `.codex/skills/prompt-architect/knowledge/` so `SKILL.md` references resolve after copying or installing the skill folder.
- Added `scripts/install-prompt-architect.ps1` for Windows-first global installation with dry-run, explicit `-Yes`, backup-before-update, and no delete step.
- Strengthened `scripts/validate-prompt-lab.mjs` so it verifies root `knowledge/` and packaged skill `knowledge/` stay byte-for-byte aligned.
- Updated install, validation, skill-structure, README, changelog, and release notes for the packaged KB layout.
- Kept the legacy `codex-enterprise-prompt-architect` name only as compatibility/history wording; the active repo and skill package name are `prompt-architect`.

## Validation

Run locally:

```powershell
npm run check
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install-prompt-architect.ps1 -DryRun
git diff --check
gitleaks detect --redact --no-banner --no-git --verbose
```

The validator now checks required public files, skill package shape, README assets, local Markdown links, workflow badge honesty, response-mode parity, source-note metadata, generated prompt ledger markers, obvious secret-like values, and packaged KB parity.

## Turkish Summary

v1.1.1, Prompt Architect skill kurulumunu sağlamlaştırır. Skill klasörü artık kullandığı Prompt Lab bilgi tabanını da kendi içinde taşır; bu yüzden global kurulumdan sonra `knowledge/...` referansları boşa düşmez.

Öne çıkanlar:

- `.codex/skills/prompt-architect/knowledge/` eklendi.
- Windows için yedekli ve açık onaylı install script'i eklendi.
- Validator, root `knowledge/` ile paket içi `knowledge/` arasında eksik/fazla/drift dosya kontrolü yapacak şekilde güçlendirildi.
- GitHub repo adı, klasör adı ve skill adı `prompt-architect` olarak hizalandı.

## Known Limitations

- This project is independent and not affiliated with OpenAI.
- It does not enforce runtime security by itself; it provides safer prompt instructions and validation checks.
- It does not publish to npm because the package is intentionally private.
- GitHub repository settings still require manual review in the GitHub UI.

## Previous Release

v1.1.0 turned the repository into a validation-backed Prompt Lab package with CI, source discipline, and expanded response modes.
