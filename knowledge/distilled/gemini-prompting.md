# Gemini Prompting Playbook

Last updated: 2026-05-31

## Core Mental Model

Gemini prompts should separate system behavior, user content, configuration, context, examples, and output format. Use API configuration for model behavior where available instead of encoding every control in prose.

## Recommended Structure

```text
<ROLE>
Stable role or operating identity.
</ROLE>

<TASK>
Specific user goal.
</TASK>

<CONSTRAINTS>
Dos, don'ts, safety boundaries, scope limits.
</CONSTRAINTS>

<CONTEXT>
Only the information needed for the task.
</CONTEXT>

<OUTPUT_FORMAT>
Exact structure, fields, length, and formatting.
</OUTPUT_FORMAT>

<EXAMPLES>
Few-shot examples when the task is ambiguous or format-sensitive.
</EXAMPLES>

<RECAP>
Re-emphasize critical constraints and output requirements.
</RECAP>
```

## Prompt Health Checklist

- Are all terms defined?
- Is the scope measurable?
- Are subjective words replaced with concrete criteria?
- Is the required background included?
- Is the output format explicit?
- Are examples representative?
- Are system instructions separated from user data?
- Are generation parameters intentionally set when relevant?

## Gemini-Specific Notes

- Use system instructions for stable behavior.
- Use structured output when the downstream consumer expects strict fields.
- For multimodal tasks, name what the model should inspect in each input.
- For enterprise prompts, track prompt versions and evaluation datasets.
