#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "README.tr.md",
  "SECURITY.md",
  "CONTRIBUTING.md",
  "CHANGELOG.md",
  "RELEASE_NOTES.md",
  ".gitignore",
  "llms.txt",
  "package.json",
  "assets/icon.svg",
  "assets/banner.svg",
  "assets/workflow-overview.svg",
  "assets/social-preview.svg",
  ".github/CODEOWNERS",
  ".github/dependabot.yml",
  ".codex/skills/prompt-architect.md",
  ".codex/skills/prompt-architect-commands.md",
  ".codex/skills/prompt-architect/SKILL.md",
  ".codex/skills/prompt-architect/commands.md",
  ".codex/skills/prompt-architect/response-modes.md",
  ".codex/skills/prompt-architect/codex-patterns.md",
  ".codex/skills/prompt-architect/examples.md",
  "knowledge/distilled/response-modes.md",
  "knowledge/distilled/prompt-quality-rubric.md",
  "knowledge/outputs/generated-prompts.md",
  "docs/USAGE.md",
  "docs/INSTALL.md",
  "docs/EXAMPLES.md",
  "docs/SKILL_STRUCTURE.md",
  "docs/SECURITY_MODEL.md",
  "docs/PUBLIC_REPO_CHECKLIST.md",
  "docs/VALIDATION.md",
  "docs/SOURCE_MAINTENANCE.md",
  "docs/SUBAGENTS.md",
  "docs/PLUGIN_READINESS.md",
  "docs/SEO.md",
  "docs/GITHUB_SETTINGS.md",
];

const coreModes = [
  "PROMPT_ONLY",
  "GOAL_PLUS_PROMPT",
  "PLAN_ONLY",
  "EXECUTE_AFTER_APPROVAL",
  "RESEARCH_BACKED",
  "PROMPT_AUDIT",
  "PROMPT_REWRITE",
  "STOP_RECOVER",
];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), "utf8");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full).replaceAll("\\", "/");
    if (entry.isDirectory()) {
      if ([".git", "node_modules", ".playwright-mcp"].includes(entry.name)) continue;
      walk(full, files);
    } else {
      files.push(rel);
    }
  }
  return files;
}

function checkRequiredFiles() {
  for (const relPath of requiredFiles) {
    if (!exists(relPath)) fail(`Missing required file: ${relPath}`);
  }
}

function checkReadmeAssets() {
  for (const relPath of ["README.md", "README.tr.md"]) {
    if (!exists(relPath)) continue;
    const content = read(relPath);
    const markdownAssets = [...content.matchAll(/!\[[^\]]*]\((assets\/[^)]+)\)/g)].map((match) => match[1]);
    const htmlAssets = [...content.matchAll(/<img\b[^>]*\bsrc="(assets\/[^"]+)"/g)].map((match) => match[1]);
    const matches = [...new Set([...markdownAssets, ...htmlAssets])];
    if (matches.length === 0) fail(`${relPath} should reference at least one asset under assets/`);
    for (const asset of matches) {
      if (!exists(asset)) fail(`${relPath} references missing asset: ${asset}`);
    }
  }
}

function checkSkillPackageIdentity() {
  const skill = read(".codex/skills/prompt-architect/SKILL.md");
  const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) {
    fail("prompt-architect SKILL.md missing YAML frontmatter");
    return;
  }
  const keys = [...frontmatter[1].matchAll(/^([A-Za-z0-9_-]+):/gm)].map((match) => match[1]);
  for (const key of keys) {
    if (key !== "name" && key !== "description") fail(`prompt-architect SKILL.md frontmatter has unsupported key: ${key}`);
  }
  if (!frontmatter[1].includes("name: prompt-architect")) fail("prompt-architect SKILL.md must use name: prompt-architect");
}

function checkMarkdownLinks() {
  const files = walk(root).filter((relPath) => relPath.endsWith(".md"));
  const linkPattern = /!?\[[^\]]*]\(([^)]+)\)/g;
  for (const relPath of files) {
    const content = read(relPath);
    for (const match of content.matchAll(linkPattern)) {
      let target = match[1].trim();
      if (
        target.startsWith("http://") ||
        target.startsWith("https://") ||
        target.startsWith("mailto:") ||
        target.startsWith("#") ||
        target.startsWith("app://")
      ) {
        continue;
      }
      target = target.replace(/^<|>$/g, "").split("#")[0];
      const anchor = match[1].includes("#") ? match[1].split("#").slice(1).join("#") : "";
      if (target.length === 0) continue;
      if (/^[A-Za-z]:/.test(target)) {
        fail(`${relPath} contains a local absolute path link: ${target}`);
        continue;
      }
      const resolved = path.resolve(path.dirname(path.join(root, relPath)), decodeURI(target));
      const relativeToRoot = path.relative(root, resolved);
      if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
        fail(`${relPath} links outside the repository: ${match[1]}`);
        continue;
      }
      if (!fs.existsSync(resolved)) {
        fail(`${relPath} links to missing file: ${match[1]}`);
        continue;
      }
      if (anchor && resolved.endsWith(".md")) {
        const anchors = collectMarkdownAnchors(fs.readFileSync(resolved, "utf8"));
        const normalizedAnchor = decodeURI(anchor).toLowerCase();
        if (!anchors.has(normalizedAnchor)) {
          fail(`${relPath} links to missing heading anchor: ${match[1]}`);
        }
      }
    }
  }
}

function collectMarkdownAnchors(content) {
  const anchors = new Set();
  const seen = new Map();
  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) continue;
    const base = slugifyHeading(match[2]);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    anchors.add(count === 0 ? base : `${base}-${count}`);
  }
  return anchors;
}

function slugifyHeading(heading) {
  return heading
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function checkWorkflowBadgeHonesty() {
  for (const relPath of ["README.md", "README.tr.md"]) {
    if (!exists(relPath)) continue;
    const content = read(relPath);
    const workflowBadges = [...content.matchAll(/actions\/workflows\/([^/)]+)\/badge\.svg/g)];
    for (const workflowBadge of workflowBadges) {
      if (!exists(`.github/workflows/${workflowBadge[1]}`)) {
        fail(`${relPath} has a workflow badge for missing workflow: ${workflowBadge[1]}`);
      }
    }
  }
}

function checkModeParity() {
  const files = [
    ".codex/skills/prompt-architect/response-modes.md",
    "knowledge/distilled/response-modes.md",
  ];
  for (const relPath of files) {
    if (!exists(relPath)) continue;
    const content = read(relPath);
    for (const mode of coreModes) {
      if (!content.includes(mode)) fail(`${relPath} is missing response mode: ${mode}`);
    }
  }
}

function checkSourceCards() {
  const sourceDir = path.join(root, "knowledge", "sources");
  if (!fs.existsSync(sourceDir)) return;
  for (const file of fs.readdirSync(sourceDir).filter((name) => name.endsWith(".md"))) {
    const relPath = `knowledge/sources/${file}`;
    const content = read(relPath);
    if (!/Last checked:|Date checked:/i.test(content)) {
      fail(`${relPath} must include Last checked or Date checked metadata`);
    }
    if (!/Confidence/i.test(content)) {
      warn(`${relPath} has no explicit confidence metadata`);
    }
    if (!/Outdated risk|outdated-risk|Notes \/ limitations/i.test(content)) {
      warn(`${relPath} has no explicit outdated-risk note`);
    }
  }
}

function checkKnownDangerPatterns() {
  const files = walk(root).filter((relPath) => relPath.endsWith(".md") || relPath.endsWith(".mjs") || relPath.endsWith(".yml"));
  const secretPatterns = [
    /sk-(?!example-do-not-use)[A-Za-z0-9_-]{20,}/,
    /BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY/,
    /(?<!placeholder-)(?<!example-)(api[_-]?key|token|password)\s*=\s*["'][^"']{12,}["']/i,
  ];
  for (const relPath of files) {
    const content = read(relPath);
    for (const pattern of secretPatterns) {
      if (pattern.test(content)) fail(`Potential secret-like value in ${relPath}`);
    }
  }
}

function checkGitignore() {
  if (!exists(".gitignore")) return;
  const gitignore = read(".gitignore");
  if (!gitignore.includes(".playwright-mcp/")) {
    fail(".gitignore must exclude local .playwright-mcp/ browser artifacts");
  }
}

function checkGeneratedPromptLedger() {
  if (!exists("knowledge/outputs/generated-prompts.md")) return;
  const ledger = read("knowledge/outputs/generated-prompts.md");
  for (const required of ["Date:", "User request summary:", "Target agent:", "Verification/quality notes:"]) {
    if (!ledger.includes(required)) fail(`generated prompt ledger missing marker: ${required}`);
  }
}

checkRequiredFiles();
checkReadmeAssets();
checkSkillPackageIdentity();
checkMarkdownLinks();
checkWorkflowBadgeHonesty();
checkModeParity();
checkSourceCards();
checkKnownDangerPatterns();
checkGitignore();
checkGeneratedPromptLedger();

if (warnings.length > 0) {
  console.log("Prompt Lab validation warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length > 0) {
  console.error("Prompt Lab validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Prompt Lab validation passed.");
