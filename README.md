# Stadt Wien Figma Prototyper

An agent skill for building editable Figma prototypes and layout blueprints of Stadt Wien (wien.gv.at) pages, reproducing the live Wiener Melange theme (v2.10.0): components, layout, sizing and text.

## Install

Requires Node.js 18 or newer.

```bash
npx github:<owner>/stadt-wien-figma-prototyper
```

This copies the skill into `~/.claude/skills/` (Claude Code) and `~/.agents/skills/` (Codex and other agents that read that folder).

Options:

- `--claude` installs only into `~/.claude/skills/`
- `--agents` installs only into `~/.agents/skills/`
- `--dir <path>` installs into any folder you choose
- `--force` overwrites an existing installation (updates it)

Example to update: `npx github:<owner>/stadt-wien-figma-prototyper --force`

## Contents

- `skills/stadt-wien-figma-prototyper/SKILL.md`: workflow, design tokens, component specifications, and verification checklist
- `skills/stadt-wien-figma-prototyper/references/layout-archetypes.md`: verified page sequences and generic layout archetypes

## Scope

Only for Stadt Wien pages. Not for other websites or production code. Text in Figma prototypes uses Wiener Melange, which must be switched on manually in Figma because the plugin API cannot load that font.
