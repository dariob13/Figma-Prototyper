# Wiener Melange kit

Primary Figma pattern library: [Stadt Wien – Wiener Melange Kit](https://www.figma.com/design/IuWrnybtaBps4vOAacErua/Stadt-Wien-%E2%80%93-Wiener-Melange-Kit). File key: `IuWrnybtaBps4vOAacErua`. Use this stable file link; session parameters such as `m` and `t` are not needed.

For each task, inspect the relevant pattern pages here (or in a verified duplicate), identify the actual component variants/properties and their token/style bindings, and reuse them in the working file. Record the library and chosen component references in the handoff. The older “Stadt Wien HTML” capture is supporting evidence for layouts, not a substitute component library. The live site and official handbook still govern current styling and pattern usage.

This reusable Figma kit covers the Stadt Wien handbook patterns. It is not an official Stadt Wien release. The inventory below records the supplied build handoff: theme CSS v2.10.0, 67 handbook pattern pages, 470 rendered examples captured at desktop/mobile widths of 1440 and 375 px, and original icon/logo SVGs. Recheck the target live page and current handbook when using the kit; the counts describe the delivered snapshot, not a guarantee about future versions.

## Access and project setup

The link above is a Figma Design file link, not a Figma Community publication or a published component-library key. Public installation of this skill does not grant access to the file, permission to duplicate it, or access to a team library. If Figma requires permission, request access from the file owner. A Community URL has not been supplied; do not invent one or claim the kit is publicly duplicable without checking.

For a new prototype, open the file and duplicate it into the user's drafts or team. Name the project copy `Stadt Wien Entwurf - [Topic]`, replacing `[Topic]` with the topic (for example `Stadt Wien Entwurf - Fahrradwerkstätte Wien`). Apply the same naming rule to a newly created fallback file. Ask for the copy's URL, inspect it, and build there using local component instances. Keep the kit pages and add project-specific pages. Never modify the shared starter during ordinary page work. For an existing destination, preserve its name and reuse its kit assets or transfer the required components and foundations from the user's copy, preserving bindings; do not assume remote imports are possible from a file URL.

## Delivered inventory

| Page | Contents |
| --- | --- |
| Cover | Overview, sources, usage and font instructions |
| Foundations | 53 variables for colors, spacing, sizes and radii; 59 text styles; 2 shadow styles; bound swatches, type ramp and spacing scale |
| Icons & Logo | 79 original SVG icons; German and English “City of Vienna” logos |
| Actions | Button (24 variants), round button, Hervorgehobener Link, Link, Tag, Chip (21), Anker, WienBot and Skip-Link |
| Navigation | Header (7 variants for wien.gv.at and microsites, desktop/mobile), open menu, Footer, Pager, Pagination, Progress indicator, Tabs, In-Page Navigation, microsite submenu and Sidebar |
| Content | Stage (8), Vorspann, Zeitstempel, Divider, lists/rows, Quicklinks, Section, Table, Quote, Highlight (13), Notification (8), Breaking News, Accordion, Details/Copyright and Status |
| Media | Image, Audio, Video, Map, Gallery and Lightbox |
| Cards | Card (13), Carousel, Infobox, Visitenkarte, Contact, Newsletter, Exposé, Flip-Card and social media |
| Forms | Input field (12 types/states), Checkbox/Radio, fieldsets, Switch, Upload, OTP, Filter, error summary, form block, search, address and login layouts |
| Layout | Grid S/M/L/Full and full desktop/mobile page templates assembled from instances |

The handoff reports **57 component sets with 265 variants, plus 94 standalone components**, with colors and spacing bound to variables. Inspect the copy to discover actual names, IDs and properties before using them. Variant defaults are examples: Figma text properties hold one default label per set, so override each instance's content.

## Fonts and placeholders

- All text styles currently use **Inter** because the plugin context could not load Wiener Melange. Keep a loadable font while editing, then have the user switch `WM Web/…` styles to Wiener Melange Regular/Bold in Figma. Preserve style assignments and role metrics. Font substitution can change wrapping; recheck desktop/mobile layouts afterwards. This repository does not distribute the font.
- Images are grey Nebelgrau placeholders. Replace them with relevant, permitted image fills and provide the actual credits.
- The Map is a labelled placeholder. Do not invent locations or imply a live integration.
- Audio and Video are visual mockups of the native/embedded players, not functioning media controls.
- Fetch has no separate visual component; use Button and Pagination to represent its visible controls and annotate loading/error behavior where needed.

## Known approximations and construction details

- OTP fields and open-menu spacing were measured from screenshots rather than CSS. Fieldset legends sit inside the frame instead of interrupting its border. Record these deviations if relevant to the prototype.
- The handbook mobile Stage example measured 5:4; the earlier live-page reference measured 1:1. Inspect the selected variant and target live page instead of applying a single universal crop.
- Original social/contact SVGs contain their own colors. Preserve original fills and even-odd winding rules; indiscriminate recoloring or losing `fill-rule="evenodd"` produced solid shapes during the build. Test both original-size and scaled instances after any icon change.
- Use text properties for labels and boolean properties for optional icons. Enable optional layers before looking them up or recoloring them in an instance.
- Use content-hugging heights for multiline quicklinks, lists and sections. Keep notification close buttons absolutely positioned, and recheck neighboring variant positions after changing a component's height. Keep table/divider strokes and mobile Stage titles visible.
- Validate actual focus/error/disabled fills and borders; a state in the variant name alone does not apply its styling.

Sources: [handbook](https://handbuch.wien.gv.at/), [pattern library](https://handbuch.wien.gv.at/pattern-library/patterns/), [theme CSS v2.10.0](https://assets.wien.gv.at/theme/v2.10.0/css/wiener-melange.bundle.min.css), and the kit build handoff supplied for this release. The kit is a starting point; live sources govern corrections.
