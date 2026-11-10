# UEIsBad-ChatControl

> **This repository is frozen.** The site is complete and will not receive
> further modifications. Facts were last verified in November 2026.

A single self-contained HTML page — the **Chat Control Dossier** — a civic
and technical awareness dossier on the EU's "Chat Control" files. Available
in English, French, German, Italian and Spanish via an in-page language
switcher. Everything is in one file, with no build step.

## What's inside

- **Overview** — what actually happened on 9 July 2026, the plenary vote
  scoreboard, and eight "did you know" fact cards.
- **Legal status** — the two-track breakdown (Chat Control 1.0 in force as
  Regulation (EU) 2026/1881 until 3 April 2028 vs Chat Control 2.0 still in
  trilogue), the full 2021–2026 timeline, and a geographic map of
  member-state positions in Council negotiations.
- **Technical dossier** — how client-side scanning works (hash matching, AI
  computer vision, grooming detection) and the false-positive statistics.
- **Protection manual** — three tiers of operational security with a
  categorized "use / avoid" app directory.
- **Take action** — a ready-made MEP contact message, petitions, and links
  to primary sources and allied projects.

## Usage

This is a static, single-file site: open `index.html` directly in a browser,
or host it on any static file host (GitHub Pages, Netlify, a plain web
server). There is no server-side component and no build process. Append
`?lang=fr` (or `de`, `it`, `es`) to the URL to force a language; the choice
is also remembered via `localStorage`.

The EU positions map is a self-contained schematic grid rendered
purely with HTML/CSS — the whole site works fully offline with zero
external dependencies.

## Data & accuracy

Vote counts, dates, petition signatures, and Council positions are editorial
and were accurate as of November 2026, the date noted in the page itself.
Legislative files are still moving — always check the linked primary sources
for anything time-sensitive. This is a civic-awareness dossier, not legal
advice.

## License

MIT — see [LICENSE.md](LICENSE.md).
