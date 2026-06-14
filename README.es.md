# Codex Enterprise Prompt Architect

<p align="center">
  <a href="README.de.md">&#127465;&#127466; Deutsch</a> ? <a href="README.es.md">&#127466;&#127480; Espa&ntilde;ol</a> ? <a href="README.md">&#127468;&#127463; English</a> ? <a href="README.pt-BR.md">&#127463;&#127479; Portugu&ecirc;s (Brasil)</a> ? <a href="README.tr.md">&#127481;&#127479; T&uuml;rk&ccedil;e</a> ? <a href="README.fr.md">&#127467;&#127479; French</a>
</p>

Paquete de arquitectura de prompts para Codex con workflows plan-first, gates de aprobacion, conocimiento Prompt Lab y verificacion orientada a release.

## Por que existe este repositorio

Paquete de arquitectura de prompts para Codex con workflows plan-first, gates de aprobacion, conocimiento Prompt Lab y verificacion orientada a release.

Esta portada localizada se mantiene para que el lector entienda el repositorio sin depender de una etiqueta de idioma corta. La referencia canonica profunda sigue en README.md; esta pagina contiene suficiente contexto para elegir el punto de entrada, el limite de seguridad y la verificacion correcta.

## Para quien es

Equipos y maintainers que quieren convertir solicitudes vagas en prompts Codex verificables con scope, reglas de parada y evidencia.

## Inicio rapido

| Si necesitas... | Abre |
| --- | --- |
| Usage modes | [docs/USAGE.md](docs/USAGE.md) |
| Install guide | [docs/INSTALL.md](docs/INSTALL.md) |
| Examples | [docs/EXAMPLES.md](docs/EXAMPLES.md) |
| Subagents | [docs/SUBAGENTS.md](docs/SUBAGENTS.md) |
| Validation | [docs/VALIDATION.md](docs/VALIDATION.md) |
| Public repo checklist | [docs/PUBLIC_REPO_CHECKLIST.md](docs/PUBLIC_REPO_CHECKLIST.md) |

## Mapa del repositorio

- .codex/skills/ - reusable skill entrypoint
- knowledge/distilled/ - distilled prompt rules
- knowledge/templates/ - prompt templates
- knowledge/sources/ - source notes
- docs/ - install, usage, examples, validation and security model
- scripts/validate-prompt-lab.mjs - validation gate

## Validacion e higiene de release

Antes de commit o publicacion, revisa links, Markdown, validacion existente del repo y Gitleaks.

Ruta recomendada de release/readiness:

1. Revisar el README relevante y los documentos enlazados.
2. Ejecutar la validacion del repositorio cuando exista un comando.
3. Comprobar links Markdown y assets locales.
4. Ejecutar Gitleaks o el secret scan configurado.
5. Verificar origin/main despues del push antes de afirmar que la publicacion termino.

## Limite de seguridad y alcance publico

Los prompts no deben contener datos privados de clientes, tokens ni secretos locales. La ejecucion riesgosa queda plan-first y con aprobacion.

## Contribucion y mantenimiento

Mant?n las paginas localizadas alineadas con el README canonico cuando cambien el alcance, los pasos de instalacion, las reglas de release o los limites de seguridad. No agregues afirmaciones que no esten respaldadas por el repositorio, docs live del producto o evidencia publica de release.

## Estandar de completitud

Este README localizado no es una nota corta. Explica proposito, entrada, superficies del repositorio, validacion, limite de seguridad y referencias canonicas.

Referencia canonica: [README.md](README.md).
