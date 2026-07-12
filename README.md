# Chat Control Dossier

A multi-page, multilingual (FR / EN / DE / IT / ES) static site tracking the legal status
of the EU's "Chat Control" files, how the underlying scanning technology works, a tiered
operational-security manual (with a categorized "use / avoid" app directory), an interactive
map of member-state positions, and ways to take action.

## Structure

```
index.html          Landing page — language chooser, shown on first arrival (no JS required)
home.html           Home — status snapshot, 9 July 2026 vote scoreboard, "did you know" facts
status.html         Legal status — Chat Control 1.0 vs 2.0, full timeline, real EU map (D3)
technical.html       Technical dossier — detection methods, false-positive statistics
protection.html      Protection manual — 3 security tiers + a categorized "use / avoid" app sidebar
take-action.html      Take action — petitions, one-click MEP email tool, related projects
404.html             Custom not-found page

assets/css/style.css         Design system (single stylesheet, no build step)
assets/js/i18n.js            Translation engine + cross-page language persistence (URL ?lang= param)
assets/js/render.js          Renders data-driven blocks: facts, timeline, contact tool, blacklists, app directory
assets/js/eumap.js           Real geographic EU map (D3 + topojson), with schematic-hexmap fallback
assets/js/main.js            Scroll-reveal / redaction-reveal animations, mobile nav, active-nav highlighting
assets/js/countries-data.js  ISO numeric codes + Council-position data + fallback grid layout
assets/js/lang/*.js          One file per language, each populating window.I18N.<lang>
```

## Language handling

- **First visit**: `index.html` is a standalone language-picker (plain links, no JS required to
  function) that sends the visitor to `home.html?lang=xx`.
- **Persistence across pages**: the chosen language is written both to `localStorage` and to a
  `?lang=xx` URL parameter, and `i18n.js` automatically rewrites every internal link on the page
  to carry that parameter forward. This makes the language persist when browsing page to page
  even when the site is opened directly from disk (`file://`), where `localStorage` is isolated
  per file in some browsers.

## The EU map

`status.html` renders a real geographic map using **D3** (`d3-geo`) and **topojson-client**,
loading the small, ISC-licensed `world-atlas` TopoJSON dataset (derived from Natural Earth) from
a CDN at runtime — see the `<script>` tags at the bottom of `status.html`. Countries are matched
by ISO-3166-1 numeric code (`assets/js/countries-data.js`) and coloured by their most recently
published Council position. If the CDN or the library fails to load (offline preview, blocked
network), it automatically falls back to the schematic grid map — no broken page either way.

## The app directory (protection.html)

The sidebar lists common apps to use / avoid, grouped into 8 categories (messaging, cloud
storage, browser, mobile OS, VPN, DNS, app store, email), each with its own colour. Badges show
a plain initial letter rather than real brand logos — actual trademarked app icons aren't
reproduced here for IP reasons; recolour `--cat-*` variables in `style.css` or swap in your own
icon set if you have rights to do so.

## Why plain `<script>` tags instead of `fetch()` for translations

Translation dictionaries are loaded as JavaScript files rather than JSON fetched at
runtime, so the site works identically whether it's served by GitHub Pages or opened
directly from disk (`file://`), which would otherwise hit CORS restrictions.

## Updating

- **Language text**: edit the matching key in each `assets/js/lang/xx.js` file — keys
  are the same across all five languages.
- **Timeline / facts / petitions / app directory**: edit the arrays inside each language file
  (`status.timeline.rows`, `facts`, `act.p1`–`p4`, `protection.*.bl`, `apps.use` / `apps.avoid`).
- **Country positions on the map**: edit `assets/js/countries-data.js` (not translated,
  shared across languages) — positions should be re-checked periodically, as Council
  positions shift.

## Deploying to GitHub Pages

No build step. Push this folder to a repository and enable Pages on the `main`
branch (root), or drag-and-drop the contents into any static host. Update `sitemap.xml`
with your real Pages URL once deployed.

## Disclaimer

This is a civic-awareness dossier, not legal advice. Facts were verified as of
10 July 2026; the underlying legislative files are still moving — check the
linked primary sources for anything time-sensitive.
