# Codex Enterprise Prompt Architect

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Package d architecture de prompts pour Codex avec workflows plan-first, gates d approbation, connaissance Prompt Lab et verification orientee release.

## Pourquoi ce depot existe

Package d architecture de prompts pour Codex avec workflows plan-first, gates d approbation, connaissance Prompt Lab et verification orientee release.

Cette page localisee est maintenue pour que le lecteur comprenne le depot sans dependre d un simple badge de langue. La reference canonique complete reste dans README.md; cette page donne assez de contexte pour choisir le bon point d entree, la limite de securite et la verification correcte.

## Pour qui

Equipes et mainteneurs qui veulent transformer des demandes vagues en prompts Codex verifiables avec scope, regles d arret et preuves.

## Demarrage rapide

| Si vous avez besoin de... | Ouvrez |
| --- | --- |
| Usage modes | [docs/USAGE.md](docs/USAGE.md) |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Examples | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Subagents | [docs/SUBAGENTS.md](docs/SUBAGENTS.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Public repo checklist | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |

## Carte du depot

- .codex/skills/ - reusable skill entrypoint
- knowledge/distilled/ - distilled prompt rules
- knowledge/templates/ - prompt templates
- knowledge/sources/ - source notes
- docs/ - install, usage, examples, validation and security model
- scripts/validate-prompt-lab.mjs - validation gate

## Validation et hygiene de release

Avant commit ou publication, verifiez les liens, le Markdown, la validation existante du depot et Gitleaks.

Parcours release/readiness recommande:

1. Relire le README pertinent et les documents lies.
2. Executer la validation du depot lorsqu une commande existe.
3. Verifier les liens Markdown et les assets locaux.
4. Executer Gitleaks ou le secret scan configure.
5. Verifier origin/main apres le push avant d annoncer que la publication est terminee.

## Limite securite et perimetre public

Les prompts ne doivent pas contenir de donnees client privees, tokens ou secrets locaux. L execution risquee reste plan-first et approuvee.

## Contribution et maintenance

Gardez les pages localisees alignees avec le README canonique lorsque le perimetre, les etapes d installation, les regles de release ou les limites de securite changent. N ajoutez pas d affirmations sans preuve dans le depot, les docs live du produit ou les elements publics de release.

## Standard de completude

Ce README localise n est pas une note courte. Il explique le but, l entree rapide, les surfaces du depot, la validation, la limite de securite et les references canoniques.

Reference canonique: [README.md](README.md).
