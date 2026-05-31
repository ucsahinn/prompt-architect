# Source Quality Ranking

Last updated: 2026-05-31

## Ranking

1. Official product documentation, security advisories, standards bodies, and primary project docs.
2. Peer-reviewed papers, well-cited preprints, and research from reputable institutions.
3. Mature public repositories with active maintenance, clear docs, tests, and visible adoption.
4. Credible company engineering blogs and practitioner guides with concrete workflows.
5. Community comments, social posts, newsletters, and videos.

## Pattern: Authority Ladder

- When to use it: Research-backed prompts, tool-specific instructions, security or enterprise workflows.
- Why it works: It prevents a persuasive blog or social post from overruling current official behavior.
- Prompt structure:
  - "Use source authority in this order: official docs, primary repo/docs, research papers, credible engineering writeups, community signals."
  - "Mark community signals as low-confidence unless corroborated."
- Failure modes:
  - Treating star counts as quality.
  - Copying repo-specific rules into unrelated projects.
  - Using stale docs for fast-moving tools.
- Verification method:
  - Record title, URL, date checked, type, confidence, applies to, and limitations.
- Source references:
  - `knowledge/sources/official-docs.md`
  - `knowledge/sources/public-repositories.md`
  - `knowledge/sources/instruction-file-examples.md`

## Pattern: Bounded Deep Research

- When to use it: User asks for broad research or "complete source base."
- Why it works: It improves coverage without turning research into an infinite task.
- Prompt structure:
  - "Research broadly enough to cover official docs, primary repos, papers, security, and practitioner examples."
  - "Stop when coverage is strong enough to generate reusable prompt patterns."
  - "Do not scrape private, paid, copyrighted, or access-restricted content."
- Failure modes:
  - Endless source collection.
  - Raw dumps instead of distilled lessons.
  - Low-quality content imported because it is popular.
- Verification method:
  - Count categories covered and confirm each saved source has reusable lessons.
- Source references:
  - `knowledge/logs/research-log.md`
