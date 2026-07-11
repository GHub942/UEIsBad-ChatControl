/* ============================================================
   countries-data.js — schematic EU hexmap layout + Council positions
   Position grid is a stylised approximation of relative geography
   (not a precise geographic projection), used purely for legibility.
   Status reflects the most recent published breakdown (EDRi / Politico
   Europe, May 2026) of member-state positions on the permanent
   CSA Regulation ("Chat Control 2.0") in Council negotiations.
   ============================================================ */

window.CC_COUNTRIES = [
  { code: "IE", col: 1, row: 2, status: "for" },
  { code: "PT", col: 1, row: 6, status: "undecided" },
  { code: "ES", col: 2, row: 6, status: "for" },
  { code: "FR", col: 3, row: 4, status: "for" },
  { code: "BE", col: 3, row: 3, status: "undecided" },
  { code: "NL", col: 3, row: 2, status: "against" },
  { code: "LU", col: 4, row: 4, status: "undecided" },
  { code: "DE", col: 4, row: 3, status: "against" },
  { code: "DK", col: 4, row: 1, status: "for" },
  { code: "IT", col: 4, row: 6, status: "for" },
  { code: "MT", col: 4, row: 7, status: "undecided" },
  { code: "SE", col: 5, row: 1, status: "for" },
  { code: "PL", col: 5, row: 3, status: "against" },
  { code: "CZ", col: 5, row: 4, status: "against" },
  { code: "AT", col: 5, row: 5, status: "against" },
  { code: "SI", col: 5, row: 6, status: "undecided" },
  { code: "HR", col: 6, row: 6, status: "for" },
  { code: "FI", col: 6, row: 1, status: "against" },
  { code: "LT", col: 6, row: 3, status: "undecided" },
  { code: "SK", col: 6, row: 4, status: "undecided" },
  { code: "HU", col: 6, row: 5, status: "for" },
  { code: "EE", col: 7, row: 1, status: "against" },
  { code: "LV", col: 7, row: 2, status: "undecided" },
  { code: "RO", col: 7, row: 5, status: "undecided" },
  { code: "BG", col: 7, row: 6, status: "undecided" },
  { code: "GR", col: 7, row: 7, status: "undecided" },
  { code: "CY", col: 9, row: 8, status: "for" }
];
