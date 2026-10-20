# Stadt Wien Figma Prototyper

An agent skill for editable Stadt Wien (wien.gv.at) Figma prototypes and sourced layout blueprints, using the Wiener Melange theme and reusable component kit. This is an independent project, not an official Stadt Wien release.

## Install with the Skills CLI

Requires Node.js 22.20 or newer for the current [Skills CLI](https://github.com/vercel-labs/skills).

```bash
npx skills add dariob13/Figma-Prototyper --skill stadt-wien-figma-prototyper
```

Choose the agents to install for. Installation is project-local by default; add `-g` for all your projects. To install globally for Claude Code and Codex without prompts:

```bash
npx skills add dariob13/Figma-Prototyper --skill stadt-wien-figma-prototyper -g -a claude-code -a codex -y
```

Preview the available skill without installing:

```bash
npx skills add dariob13/Figma-Prototyper --list
```

Update an installation managed by Skills with `npx skills update`. The public GitHub source is directly installable; [skills.sh search/leaderboard visibility](https://skills.sh/docs/faq) is indexed separately from installation through anonymous install telemetry.

## Start a prototype from the kit

The **primary Figma pattern library** is [Stadt Wien – Wiener Melange Kit](https://www.figma.com/design/IuWrnybtaBps4vOAacErua/Stadt-Wien-%E2%80%93-Wiener-Melange-Kit), file key `IuWrnybtaBps4vOAacErua`. The skill directs the agent to inspect its actual components, variants, properties and foundations before building. HTML captures are supporting layout references.

1. Open the **[Stadt Wien – Wiener Melange Kit](https://www.figma.com/design/IuWrnybtaBps4vOAacErua)** and duplicate it into your own Figma drafts or team. Name the new project file `Stadt Wien Entwurf - [Topic]`, for example `Stadt Wien Entwurf - Fahrradwerkstätte Wien`.
2. Give your agent the duplicate's URL and the page brief. It builds from component instances inside your copy, preserving variables and styles. The shared starter is left intact. If you specify an existing destination, the skill reuses or transfers the required kit assets there.
3. Finish text edits, then switch the `WM Web/…` text styles from **Inter** to **Wiener Melange Regular/Bold** in Figma and recheck wrapping.

Example request:

> Use stadt-wien-figma-prototyper to build a mobile and desktop prototype for [topic] in my kit copy: [Figma URL]. Use the current wien.gv.at page as the content source.

Figma-capable agent tools, access to the working file and the appropriate font are separate prerequisites. The kit link is the original Design file; no Figma Community publication URL is available in this release. If viewing or duplication is restricted, request access from its owner. Installing the public skill does not grant Figma access or install the font. The skill can also produce a sourced blueprint without changing Figma.

## Kit coverage and limitations

The supplied kit handoff covers all 67 handbook pattern pages, based on 470 examples and theme CSS v2.10.0 at 1440/375 px. It reports 57 component sets with 265 variants, 94 standalone components, 79 original icons, German/English logos, 53 variables, 59 text styles and 2 shadow styles.

Pages: Cover, Foundations, Icons & Logo, Actions, Navigation, Content, Media, Cards, Forms and Layout. Full page templates use component instances. See the [inventory and usage notes](skills/stadt-wien-figma-prototyper/references/wiener-melange-kit.md) for the complete handoff, approximations and construction details.

Inter is a font placeholder; images and maps are labelled placeholders; audio/video players are mockups. OTP and open-menu spacing are screenshot-based approximations; fieldset legends sit inside the frame. Fetch has no separate visual. Always compare the prototype against the current live page and handbook.

The Figma components live in the linked file. This repository distributes the agent instructions and references, not a `.fig` export or the Wiener Melange font.

## Alternative standalone installer

The bundled installer requires Node.js 18 or newer:

```bash
npx github:dariob13/Figma-Prototyper
```

It copies the skill into `~/.claude/skills/` and `~/.agents/skills/`, and prints the starter-kit link. Options:

- `--claude`: only `~/.claude/skills/`
- `--agents`: only `~/.agents/skills/`
- `--dir <path>`: a custom skills directory
- `--force`: replace an existing installation

Update with `npx github:dariob13/Figma-Prototyper --force`. Use the update command matching the installer you originally used, then restart your agent or refresh its skills list.

## Repository contents

- [SKILL.md](skills/stadt-wien-figma-prototyper/SKILL.md): kit workflow, cached design specifications, live-source research and verification
- [Wiener Melange kit reference](skills/stadt-wien-figma-prototyper/references/wiener-melange-kit.md): inventory, setup and known limitations
- [Layout archetypes](skills/stadt-wien-figma-prototyper/references/layout-archetypes.md): verified page sequences and editorial starting points

Only for Stadt Wien page prototypes and blueprints; not for other websites or production code.
