#!/usr/bin/env node
// Installs the stadt-wien-figma-prototyper skill into local agent skill folders.
// Usage:
//   npx github:dariob13/Figma-Prototyper           # Claude Code + Codex/agents folders
//   npx github:dariob13/Figma-Prototyper --claude  # only ~/.claude/skills
//   npx github:dariob13/Figma-Prototyper --agents  # only ~/.agents/skills
//   npx github:dariob13/Figma-Prototyper --dir <path>  # custom skills folder
//   Add --force to overwrite an existing installation.

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "stadt-wien-figma-prototyper";
const KIT_URL = "https://www.figma.com/design/IuWrnybtaBps4vOAacErua";
const SRC = path.join(__dirname, "..", "skills", SKILL_NAME);

const args = process.argv.slice(2);
const force = args.includes("--force");
const help = args.includes("--help") || args.includes("-h");

if (help) {
  console.log("Install the Stadt Wien Figma prototyper skill.\n");
  console.log("Options: --claude | --agents | --dir <path> | --force");
  console.log(`\nFigma starter kit: ${KIT_URL}`);
  console.log("Duplicate the kit into your own Figma workspace, then give your agent the copy URL.");
  process.exit(0);
}

if (!fs.existsSync(path.join(SRC, "SKILL.md"))) {
  console.error("Skill files not found in package:", SRC);
  process.exit(1);
}

let targets = [];
const dirIndex = args.indexOf("--dir");
if (dirIndex !== -1) {
  const dir = args[dirIndex + 1];
  if (!dir) {
    console.error("--dir needs a path");
    process.exit(1);
  }
  targets.push(path.resolve(dir));
} else {
  const home = os.homedir();
  if (args.includes("--claude")) targets.push(path.join(home, ".claude", "skills"));
  if (args.includes("--agents")) targets.push(path.join(home, ".agents", "skills"));
  if (targets.length === 0) {
    targets = [path.join(home, ".claude", "skills"), path.join(home, ".agents", "skills")];
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

let failed = false;
for (const base of targets) {
  const dest = path.join(base, SKILL_NAME);
  if (fs.existsSync(dest)) {
    if (!force) {
      console.log(`Skipped (already installed, use --force to update): ${dest}`);
      continue;
    }
    fs.rmSync(dest, { recursive: true, force: true });
  }
  try {
    copyDir(SRC, dest);
    console.log(`Installed: ${dest}`);
  } catch (err) {
    failed = true;
    console.error(`Could not install into ${dest}: ${err.message}`);
  }
}

if (!failed) {
  console.log("\nDone. Restart your agent or refresh its skills list to load the skill.");
  console.log(`Figma starter kit: ${KIT_URL}`);
  console.log("Duplicate it into your own workspace; build in the copy, not the shared source.");
  console.log("The kit uses Inter placeholders. Switch WM Web/… styles to Wiener Melange after text editing.");
  console.log("Figma access is separate from skill installation; request access if duplication is unavailable.");
}
process.exit(failed ? 1 : 0);
