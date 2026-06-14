# Release Notes: v1.1.0

Codex Enterprise Prompt Architect v1.1.0 turns the repository from a polished prompt-skill showcase into a validation-backed Prompt Lab package. The release keeps the Codex-first mission intact while adding stronger source discipline, safer tool/subagent routing, and a real local/CI quality gate.

## Highlights

- Added dependency-free validation at `scripts/validate-prompt-lab.mjs`.
- Added GitHub Actions workflow at `.github/workflows/docs-validate.yml`.
- Added `docs/VALIDATION.md`, `docs/SOURCE_MAINTENANCE.md`, `docs/SUBAGENTS.md`, and `docs/PLUGIN_READINESS.md`.
- Upgraded `README.md` and `README.tr.md` with icon-led command-center navigation and the real validation badge.
- Expanded the skill package with research-backed, template, AGENTS.md, CLAUDE.md, and Gemini system-instruction routes.
- Strengthened MCP, browser, account-tool, and subagent safety guidance.
- Refreshed source notes for current OpenAI/Codex docs, OpenAI tools, OWASP LLM risks, Playwright MCP usage, prompt research, and context-engineering lessons.
- Added `.playwright-mcp/` to `.gitignore` so local browser artifacts do not become public release noise.

## Validation

Run locally:

```powershell
node scripts/validate-prompt-lab.mjs
git diff --check
gitleaks detect --redact --no-banner --no-git --verbose --source .
```

The validator checks required public files, skill package shape, README assets, local Markdown links, workflow badge honesty, response-mode parity, source-note metadata, generated prompt ledger markers, and obvious secret-like values.

## Turkish Summary

v1.1.0, repoyu sadece iyi görünen bir prompt-skill vitrini olmaktan çıkarıp doğrulama kapısı olan bir Prompt Lab paketine taşır.

Öne çıkanlar:

- Lokal validator eklendi.
- GitHub Actions validation workflow eklendi.
- Validation, source maintenance, subagent routing ve plugin-readiness dokümanları eklendi.
- README ve Türkçe README ikonlu komuta merkeziyle daha net hale getirildi.
- Skill routing; research-backed prompt, template, AGENTS.md, CLAUDE.md ve Gemini system instruction üretimini kapsayacak şekilde genişletildi.
- MCP, browser tool, account tool ve subagent güvenlik sınırları güçlendirildi.
- `.playwright-mcp/` local artifact klasörü yanlışlıkla stage edilmesin diye ignore edildi.

## Known Limitations

- This project is independent and not affiliated with OpenAI.
- It does not enforce runtime security by itself; it provides safer prompt instructions and validation checks.
- It does not install through npm, pip, or a package manager.
- GitHub repository settings still require manual review in the GitHub UI.
- Prompt quality still depends on the user's project context and engineering review.

## Previous Release

v1.0.2 improved public repository readiness, bilingual README structure, security documentation, and GitHub contribution routes.
