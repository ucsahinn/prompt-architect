# Browser QA Playbook

Last updated: 2026-05-31

## Pattern: User-Visible Behavior First

- When to use it: UI/UX prompts, frontend implementation, login/session flows, dashboard polish.
- Why it works: UI defects are often visible behavior defects, not DOM implementation details.
- Prompt structure:
  - Identify user flows.
  - Test role/text/label-visible behavior.
  - Verify responsive viewports.
  - Check empty/loading/error/disabled states.
  - Capture screenshots or traces for evidence.
- Failure modes:
  - Only running build/typecheck.
  - Testing CSS selectors that users never interact with.
  - Ignoring text overflow and focus states.
- Verification method:
  - Browser run, screenshots, accessibility checks, and test output.
- Source references:
  - Playwright best practices: https://playwright.dev/docs/best-practices
  - Playwright accessibility testing: https://playwright.dev/docs/accessibility-testing
  - Context7 Playwright docs query on 2026-05-31.

## Pattern: Resilient Locator Contract

- When to use it: Browser QA prompts that ask an agent to create or update tests.
- Why it works: Role, label, text, and test-id locators survive UI refactors better than brittle CSS/XPath.
- Prompt structure:
  - Prefer `getByRole`, `getByLabel`, `getByText`, `getByTestId`.
  - Use web-first assertions.
  - Avoid manual sleeps and DOM internals.
- Failure modes:
  - Flaky tests from timing.
  - Tests coupled to class names.
- Verification method:
  - Run tests locally and inspect failures with traces.
- Source references:
  - Playwright best practices.
  - Context7 Playwright docs query on 2026-05-31.

## Codex Browser QA Addendum

- When to use it: any Codex prompt that changes UI, navigation, auth/session flows, dashboard widgets, admin screens, update flows, or secret actions.
- Prompt structure:
  - "If a runnable UI exists, start or attach to the dev server using project scripts."
  - "Verify the changed routes in a real browser or screenshot-capable flow."
  - "Check desktop and mobile viewports, text overflow, focus order, keyboard access, console errors, and empty/loading/error/disabled states."
  - "For password managers or secret UIs, do not expose real secrets in screenshots, logs, or test artifacts."
- Failure modes:
  - Codex reports build success without visual checks.
  - Browser screenshots accidentally reveal sensitive values.
  - UI QA ignores auth/session edge cases.
- Verification method:
  - Final report includes browser route, viewport, states checked, console status, and any screenshots/traces produced.
- Source references:
  - OpenAI Codex Workflows.
  - Playwright best practices.
