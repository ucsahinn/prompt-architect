# Prompt Library Source Cards

Last checked: 2026-05-31

## Anthropic Claude Code Prompt Library

- URL: https://code.claude.com/docs/en/best-practices
- Source type: Official product documentation linking to prompt library.
- Confidence: High for Claude Code patterns.
- Applies to: Claude Code task prompts, examples, workflow shaping.
- Summary: Anthropic's Claude Code docs include prompt-library and workflow references for common coding-agent use cases.
- Reusable lessons:
  - Prompt libraries should be organized by workflow shape, not only by persona.
  - Examples should show the before/after difference in task specificity.
  - Prompt libraries are most useful when paired with verification instructions.
- Outdated risk: Medium.

## Google Vertex AI Prompt Gallery

- URL: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/prompt-gallery
- Source type: Official Google Cloud prompt examples.
- Confidence: High for Google-provided examples.
- Applies to: Prompt examples, use-case categorization, prompt testing.
- Summary: Google provides prompt samples for generative AI use cases and points users to prompt testing in the Google Cloud console.
- Reusable lessons:
  - Keep examples grouped by use case.
  - Store sample prompt plus expected response pattern.
  - Prompt galleries are reference material, not direct enterprise-ready instructions.
- Outdated risk: Medium.

## OpenAI Prompt Generation

- URL: https://platform.openai.com/docs/guides/prompt-generation
- Source type: Official OpenAI documentation.
- Confidence: High.
- Applies to: Meta-prompts, generated prompts, prompt-improvement tooling.
- Summary: OpenAI describes meta-prompts that generate or improve prompts from a user task description.
- Reusable lessons:
  - Prompt-generation systems should ask for task, goal, or current prompt.
  - Prompt edits should identify issues before rewriting.
  - Separate generated prompts from templates.
- Outdated risk: Medium.

## GitHub Copilot Cookbook

- URL: https://docs.github.com/en/copilot/tutorials/copilot-cookbook
- Source type: Official GitHub prompt/task library.
- Confidence: High.
- Applies to: Debugging, implementation, refactor, documentation, testing, security prompts.
- Summary: Organizes prompts around concrete developer workflows rather than generic personas.
- Reusable lessons:
  - Command cookbooks should mirror user task language.
  - Include security/testing categories as first-class entries.
  - Prompts should guide context and expected output.
- Outdated risk: Medium.

## promptfoo Examples And Docs

- URL: https://www.promptfoo.dev/docs/
- Source type: Public/open-source prompt evaluation docs.
- Confidence: High.
- Applies to: Prompt testing, regression suites, red teaming.
- Summary: Provides practical patterns for testing prompts, comparing providers, assertions, and red-team checks.
- Reusable lessons:
  - Maintain prompt test cases.
  - Add adversarial checks for tool misuse and leakage.
  - Track model/prompt/version as eval dimensions.
- Outdated risk: Medium.

## Awesome Claude Code Lists

- URL: https://github.com/subinium/awesome-claude-code
- Source type: Public curated repository.
- Confidence: Medium.
- Applies to: Claude Code command libraries, skills, plugins, subagents.
- Summary: Curates public Claude Code resources, including skills, slash commands, hooks, and workflow materials.
- Reusable lessons:
  - Curated lists are useful for discovery, not authority.
  - Validate any command/skill before adopting it.
  - Prefer small reusable patterns over wholesale import.
- Outdated risk: High.
