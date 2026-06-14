# Codex Enterprise Prompt Architect

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Prompt-Architekturpaket fuer Codex mit plan-first Workflows, Approval Gates, Prompt Lab Wissen und release-orientierter Verifikation.

## Warum dieses Repository existiert

Prompt-Architekturpaket fuer Codex mit plan-first Workflows, Approval Gates, Prompt Lab Wissen und release-orientierter Verifikation.

Diese lokalisierte Startseite wird gepflegt, damit Leser das Repository nicht nur ueber ein kurzes Sprach-Badge verstehen muessen. Die tiefe kanonische Referenz bleibt in README.md; diese Seite enthaelt genug Kontext, um den richtigen Einstieg, die Sicherheitsgrenze und die Verifikation zu waehlen.

## Fuer wen es gedacht ist

Teams und Maintainer, die aus vagen Coding-Wuenschen pruefbare Codex-Prompts mit Scope, Stop-Regeln und Nachweisen machen wollen.

## Schnellstart

| Wenn du brauchst... | Oeffne |
| --- | --- |
| Usage modes | [docs/USAGE.md](docs/USAGE.md) |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Examples | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Subagents | [docs/SUBAGENTS.md](docs/SUBAGENTS.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Public repo checklist | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |

## Repository-Karte

- .codex/skills/ - reusable skill entrypoint
- knowledge/distilled/ - distilled prompt rules
- knowledge/templates/ - prompt templates
- knowledge/sources/ - source notes
- docs/ - install, usage, examples, validation and security model
- scripts/validate-prompt-lab.mjs - validation gate

## Validierung und Release-Hygiene

Vor Commit oder Veroeffentlichung sollten Links, Markdown, vorhandene Repo-Validierung und Gitleaks geprueft werden.

Empfohlener Release-/Readiness-Pfad:

1. Relevante README und verlinkte Dokumente pruefen.
2. Die Validierung des Repositories ausfuehren, wenn ein Befehl vorhanden ist.
3. Markdown-Links und lokale Assets kontrollieren.
4. Gitleaks oder den konfigurierten Secret Scan ausfuehren.
5. Nach dem Push origin/main pruefen, bevor Veroeffentlichung als erledigt gemeldet wird.

## Sicherheits- und Public-Scope-Grenze

Prompts duerfen keine privaten Kundendaten, Tokens oder lokalen Secrets enthalten. Riskante Ausfuehrung bleibt plan-first und approval-gated.

## Mitwirken und Pflege

Halten Sie lokalisierte Seiten synchron mit der kanonischen README, wenn sich Scope, Installationsschritte, Release-Regeln oder Sicherheitsgrenzen aendern. Fuegen Sie keine Aussagen hinzu, die nicht durch Repository, Live-Produktdokumentation oder oeffentliche Release-Nachweise gedeckt sind.

## Vollstaendigkeitsstandard

Diese lokalisierte README ist keine Kurznotiz. Sie erklaert Zweck, Einstieg, Repository-Flaechen, Validierung, Sicherheitsgrenze und kanonische Referenzen.

Kanonische Referenz: [README.md](README.md).
