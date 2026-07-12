/* ============================================================
   countries-data.js
   - iso: ISO-3166-1 numeric code, used to match features in the
     topojson/world-atlas dataset (loaded at runtime from a CDN)
     to render a real geographic map with D3.
   - col/row: a stylised schematic grid position, kept as an
     automatic fallback if the map library or CDN data can't be
     loaded (e.g. no network, GitHub raw preview, CSP restrictions).
   Status reflects the most recent published breakdown (EDRi /
   Politico Europe, May 2026) of member-state positions on the
   permanent CSA Regulation ("Chat Control 2.0") in Council talks.
   ============================================================ */

window.CC_COUNTRIES = [
  { code: "IE", iso: 372, col: 1, row: 2, status: "for" },
  { code: "PT", iso: 620, col: 1, row: 6, status: "undecided" },
  { code: "ES", iso: 724, col: 2, row: 6, status: "for" },
  { code: "FR", iso: 250, col: 3, row: 4, status: "for" },
  { code: "BE", iso: 56,  col: 3, row: 3, status: "undecided" },
  { code: "NL", iso: 528, col: 3, row: 2, status: "against" },
  { code: "LU", iso: 442, col: 4, row: 4, status: "undecided" },
  { code: "DE", iso: 276, col: 4, row: 3, status: "against" },
  { code: "DK", iso: 208, col: 4, row: 1, status: "for" },
  { code: "IT", iso: 380, col: 4, row: 6, status: "for" },
  { code: "MT", iso: 470, col: 4, row: 7, status: "undecided" },
  { code: "SE", iso: 752, col: 5, row: 1, status: "for" },
  { code: "PL", iso: 616, col: 5, row: 3, status: "against" },
  { code: "CZ", iso: 203, col: 5, row: 4, status: "against" },
  { code: "AT", iso: 40,  col: 5, row: 5, status: "against" },
  { code: "SI", iso: 705, col: 5, row: 6, status: "undecided" },
  { code: "HR", iso: 191, col: 6, row: 6, status: "for" },
  { code: "FI", iso: 246, col: 6, row: 1, status: "against" },
  { code: "LT", iso: 440, col: 6, row: 3, status: "undecided" },
  { code: "SK", iso: 703, col: 6, row: 4, status: "undecided" },
  { code: "HU", iso: 348, col: 6, row: 5, status: "for" },
  { code: "EE", iso: 233, col: 7, row: 1, status: "against" },
  { code: "LV", iso: 428, col: 7, row: 2, status: "undecided" },
  { code: "RO", iso: 642, col: 7, row: 5, status: "undecided" },
  { code: "BG", iso: 100, col: 7, row: 6, status: "undecided" },
  { code: "GR", iso: 300, col: 7, row: 7, status: "undecided" },
  { code: "CY", iso: 196, col: 9, row: 8, status: "for" }
];
