window.I18N = window.I18N || {};
window.I18N.en = {
  nav: { home: "Home", status: "Legal status", dossier: "Technical dossier", protection: "Protection manual", act: "Take action" },
  brand: { title: "Chat Control Dossier", stamp: "LIVE" },
  home: {
    eyebrow: "Status update — 10 July 2026",
    h1: "Chat Control Is Back In Force",
    lead: "On 9 July 2026, the European Parliament came 47 votes short of blocking the revival of mass, suspicionless scanning of private messages. Here is exactly what changed, what didn't, and what you can still do about it.",
    ctaAct: "Take action",
    ctaStatus: "Read the full legal status",
    score: {
      title: "European Parliament plenary vote — 9 July 2026",
      date: "720 seats · 607 votes cast",
      needLabel: "Threshold to block (absolute majority)",
      rejectLabel: "Voted to reject the revival",
      keepLabel: "Voted against rejection",
      note: "Because the revival used a second-reading procedure, blocking it required an <strong>absolute majority of 361</strong> MEPs. Only <strong>314</strong> voted to reject it — 47 votes short. The regime is reinstated until <strong>3 April 2028</strong>."
    },
    summary: {
      title: "What actually happened, in three points",
      s1t: "1 — “Chat Control 1.0” is back",
      s1b: "The voluntary ePrivacy scanning derogation (Regulation 2021/1232), which lets platforms like Meta, Google, Microsoft and Snap scan private messages for known CSAM, lapsed on 4 April 2026 after Parliament refused to extend it — then was revived through an emergency procedure and reinstated on 9 July 2026, valid until 3 April 2028.",
      s2t: "2 — “Chat Control 2.0” has not passed",
      s2b: "The permanent Child Sexual Abuse Regulation (CSAR) — the text that would make scanning mandatory and reach into end-to-end encrypted apps like Signal or WhatsApp — is still stuck in trilogue after five negotiation rounds. No agreement exists on mandatory client-side scanning as of 10 July 2026.",
      s3t: "3 — Why so many people say “it passed”",
      s3b: "The two files share a name and a subject, and both revive the same fear: private messages read by an algorithm. But only the temporary, voluntary track was reinstated this month. The permanent, mandatory track remains blocked — for now."
    },
    cards: {
      title: "Explore the dossier",
      c1tag: "01 · Legal status", c1title: "Timeline & two-track breakdown", c1body: "Every vote, deadlock and procedural manoeuvre since 2021, and a clear map of Chat Control 1.0 vs 2.0.",
      c2tag: "02 · Technical dossier", c2title: "How the scanning actually works", c2body: "Hash-matching, AI computer vision, grooming detection — and the statistics behind the false positives.",
      c3tag: "03 · Protection manual", c3title: "Three tiers of operational security", c3body: "From basic hygiene to hardened sovereignty — concrete tools for every threat model.",
      c4tag: "04 · Take action", c4title: "Petitions & related projects", c4body: "Sign, contact your MEP, and explore the fight against the Digital Euro on GitHub."
    },
    redact: {
      title: "Some things get scanned. Others get redacted.",
      l1: "Every message you send.",
      l2: "Every photo you share.",
      l3: "Every file you store.",
      caption: "— unless you act."
    },
    finalCta: {
      title: "The permanent regulation is still being negotiated.",
      body: "Chat Control 2.0 hasn't passed. The next trilogue round is where it gets decided — and public pressure is the one input Council delegations can't fully ignore.",
      btn: "See how to act"
    }
  },
  status: {
    eyebrow: "Legal status — updated 10 July 2026",
    h1: "Two Files, One Fight: Chat Control 1.0 vs 2.0",
    lead: "The EU is running two parallel “Chat Control” processes at once. Confusing them is exactly how the “it passed” confusion spreads. Here is each one, precisely.",
    tracks: {
      title: "The two-track breakdown",
      c1tag: "Track 1 — Regulation (EU) 2021/1232", c1status: "Reinstated — in force until 3 April 2028",
      c1body: "Known as “Chat Control 1.0.” A temporary derogation from the ePrivacy Directive that lets providers (Meta, Google, Microsoft, Snap, etc.) voluntarily scan unencrypted private messages, photos and videos against hash databases of known CSAM. No opt-out for users, no judicial pre-authorisation. It lapsed on 4 April 2026, was revived by the Council, and reinstated by Parliament on 9 July 2026.",
      c2tag: "Track 2 — CSA Regulation (“CSAR”)", c2status: "Still in trilogue — not adopted",
      c2body: "Known as “Chat Control 2.0.” Proposed by the Commission on 11 May 2022, this is the permanent, mandatory framework. As drafted by the Council, it would require detection orders reaching into end-to-end encrypted services. Parliament wants scanning limited to judiciary-identified suspects and a dedicated EU Child Protection Centre instead. Five trilogue rounds have produced no deal."
    },
    mech: {
      title: "How the 9 July revival actually worked",
      body: "On 26 March 2026, Parliament refused to extend the Chat Control 1.0 derogation, which then lapsed on 4 April. Rather than accept that outcome, the Council agreed on 26 June to relaunch an almost identical text with new dates. Because the file returned as a second-reading item, blocking it required an absolute majority of all 720 MEPs (361 votes) — not simply more “no” than “yes” votes among those present. On 7 July, Parliament approved an urgency procedure (331–304, 11 abstentions) to force a final vote before the summer recess, when many MEPs had already left Strasbourg. On 9 July, only 314 MEPs voted to reject the revival — 47 short of the threshold — while 276 voted to keep it and 17 abstained. A separate amendment restricting scanning to judiciary-identified suspects won 322 votes, also short of 361. An exemption for end-to-end encrypted services was adopted, though in practice providers do not scan those anyway."
    },
    timeline: {
      title: "Full timeline (2021 – 2026)",
      intro: "Every major milestone in the legislative history, both tracks combined.",
      th1: "Date", th2: "Milestone", th3: "What it means", th4: "Status",
      rows: [
        { date: "2021", title: "ePrivacy derogation adopted", detail: "Regulation (EU) 2021/1232 lets platforms voluntarily scan for known CSAM. Due to expire in 2024.", pill: "Adopted", cls: "pill-active" },
        { date: "11 May 2022", title: "Commission proposes the CSAR", detail: "The permanent “Chat Control 2.0” framework is unveiled by Commissioner Ylva Johansson.", pill: "Proposed", cls: "pill-pending" },
        { date: "2023", title: "Legal warnings & Parliament amendments", detail: "The EDPB, EDPS and Parliament's own legal service warn the draft is incompatible with EU fundamental rights; the LIBE committee votes to exclude end-to-end encrypted services from any scanning obligation.", pill: "Amended", cls: "pill-reject" },
        { date: "2024", title: "Council deadlock, twice", detail: "Two Council votes fail to reach a common position; a blocking minority led by Germany, Austria, Poland and the Netherlands holds firm. The ePrivacy derogation is extended in the meantime, to 3 April 2026.", pill: "Blocked", cls: "pill-reject" },
        { date: "Autumn 2025", title: "Danish presidency drops mandatory scanning", detail: "Facing a confirmed blocking minority, the Danish Council presidency withdraws mandatory client-side scanning from the table and proposes a lighter “risk mitigation” compromise instead.", pill: "Softened", cls: "pill-pending" },
        { date: "Dec 2025 – May 2026", title: "Four trilogue rounds, no deal", detail: "Parliament, Council and Commission meet four times on the permanent CSAR text without agreement on the core issue: mandatory scanning of encrypted messages.", pill: "No deal", cls: "pill-pending" },
        { date: "26 March 2026", title: "Parliament refuses to extend Chat Control 1.0", detail: "MEPs vote against a further extension of the voluntary ePrivacy derogation, in a knife-edge plenary vote.", pill: "Rejected", cls: "pill-reject" },
        { date: "4 April 2026", title: "Chat Control 1.0 legally lapses", detail: "With no legal basis remaining, Meta, Google, Microsoft and Snap publicly announce they will continue scanning private messages regardless.", pill: "No legal basis", cls: "pill-pending" },
        { date: "29 June 2026", title: "Fifth CSAR trilogue ends without a deal", detail: "The round billed as potentially final produces no agreement; encrypted-message scanning remains the sticking point.", pill: "No deal", cls: "pill-pending" },
        { date: "7–9 July 2026", title: "Council & Parliament revive Chat Control 1.0", detail: "Parliament approves an urgency procedure (331–304) and, two days later, fails to reach the 361-vote absolute majority needed to block the revival — only 314 vote to reject. The regime is reinstated until 3 April 2028.", pill: "In force", cls: "pill-active" },
        { date: "Ongoing", title: "CSAR (“Chat Control 2.0”) negotiations continue", detail: "No adoption date is set for the permanent, mandatory regulation as of 10 July 2026.", pill: "Undecided", cls: "pill-pending" }
      ]
    },
    confusion: {
      title: "So… has “Chat Control” passed?",
      body: "Partly, and temporarily. What passed on 9 July 2026 is the voluntary scanning of unencrypted messages by Big Tech platforms, extended to 2028. What has not passed is the mandatory, permanent regime that would reach into encrypted apps — that fight continues in trilogue, with no date set. Treat any claim that “Chat Control is fully law now” with the same caution you would give a headline claiming a law is “dead forever” — in this dossier, neither statement has stayed true for more than a few months at a time."
    }
  },
  dossier: {
    eyebrow: "Technical dossier",
    h1: "How Message Scanning Actually Works",
    lead: "Whichever track eventually governs it, the underlying mechanism — client-side scanning — raises the same structural problem: it inspects content before encryption is applied, or immediately after it is removed.",
    s1: {
      title: "1 — Detection orders & the end of targeted interception",
      body: "Unlike a judicial wiretap, which requires individualised prior suspicion and a magistrate's authorisation, both Chat Control tracks rely on “detection orders” issued to communication providers, applying to entire, non-suspect user populations rather than to specific individuals already under investigation."
    },
    tax: {
      title: "2 — Three scanning methods, three failure modes",
      t1title: "Hash matching (known-content scanning)",
      t1body: "Compares a cryptographic fingerprint of a local file against a centralised database of known CSAM (maintained by bodies such as NCMEC or Europol). Reasonably accurate for exact matches of catalogued files, but vulnerable to hash collisions and to poisoning of the reference database.",
      t2title: "AI computer vision (predictive scanning)",
      t2body: "Neural networks attempt to flag unknown, previously uncatalogued images or videos. Lacking contextual understanding, these classifiers routinely misidentify medical, artistic or ordinary family photographs as suspicious.",
      t3title: "Natural-language grooming detection",
      t3body: "Continuous analysis of text conversations to infer manipulative or predatory intent. This is the most privacy-invasive method: it requires reading ordinary conversational text at scale, not just comparing fingerprints."
    },
    stats: {
      title: "3 — What the numbers actually show",
      fpTitle: "The false-positive saturation problem",
      mathP: "Let <span class=\"math\">F<sub>p</sub></span> be the false-positive rate of an automated classifier, applied across the billions of daily messages exchanged in the EU.",
      fpBody: "Even a very small error rate compounds at EU scale. Public reporting and civil-society audits of the existing voluntary regime have repeatedly found a large share of automated flags — commonly cited in the range of roughly half to a large majority, depending on the detection method and reporting platform — to lack any criminal relevance on human review. One widely reported data point: the large majority of reports filed under the voluntary regime came from a single company, and most concerned previously catalogued material rather than newly discovered abuse — raising the question of how much active abuse the system actually catches versus how much ordinary communication it exposes to review.",
      rangeCaption: "Illustrative range of automated flags found, on human review, to lack criminal relevance — shown as reported across audits, not a single official figure.",
      sourcesNote: "Figures above summarise ranges reported across multiple 2025–2026 audits, parliamentary studies and investigative reporting; exact percentages vary by source and are given as ranges rather than single precise statistics. See the Take Action page for primary sources."
    }
  },
  protection: {
    eyebrow: "Operational security",
    h1: "A Precise Protection Manual",
    lead: "Three tiers, matched to three threat models — from ordinary users to people facing state-level surveillance.",
    A: {
      tag: "Tier A — Baseline hygiene", who: "For ordinary users who want to opt out of low-level commercial tracking and voluntary scanning.",
      i1title: "Encrypted messaging", i1body: "Move sensitive conversations off SMS, iMessage and standard WhatsApp/Telegram. Use Signal, and enable disappearing messages (Settings → Privacy → Disappearing messages) with a short default timer to limit locally-stored history.",
      i2title: "Encrypted DNS", i2body: "Your ISP can log — and sometimes manipulate — every domain you visit. Configure DNS-over-HTTPS or DNS-over-TLS with a privacy-respecting resolver such as Quad9 (9.9.9.9 / 149.112.112.112) or Mullvad's DNS servers.",
      blTitle: "Avoid for this tier",
      bl: [
        { n: "SMS / RCS by default", r: "Carrier-visible, not end-to-end encrypted, and entirely outside your control." },
        { n: "Standard iMessage backups", r: "iCloud backup stores a copy of message keys unless Advanced Data Protection is manually enabled." },
        { n: "WhatsApp / Facebook Messenger", r: "Owned by Meta, currently responsible for the large majority of voluntary CSAM reports under Chat Control 1.0." },
        { n: "Telegram “Cloud Chats” (default)", r: "Not end-to-end encrypted by default; only the optional Secret Chats are, and they lack multi-device sync." },
        { n: "Gmail / free webmail without PGP", r: "Scanned for advertising and abuse-detection purposes by design." }
      ]
    },
    B: {
      tag: "Tier B — Hardened privacy", who: "For professionals, lawyers and activists who need full metadata isolation and no link to a civil identity.",
      i1title: "Decentralised, identity-free messaging", i1body: "Session runs on the decentralised Oxen service-node network without a phone number or email, routing messages through multi-hop onion routing. Matrix (via the Element client) is a federated alternative — pick a homeserver outside restrictive jurisdictions.",
      i2title: "Storage sanitisation", i2body: "Disable automatic, non end-to-end-encrypted cloud backups (iCloud, Google Drive) that expose files to remote scanning. Move documents to Proton Drive or a self-hosted Nextcloud instance with server-side encryption enabled.",
      i3title: "Network tunnelling", i3body: "Keep an always-on VPN connection through an independently audited, strict no-logs provider outside cooperative jurisdictions — e.g. Mullvad VPN over WireGuard, with an anonymous account requiring no personal data.",
      blTitle: "Avoid for this tier",
      bl: [
        { n: "Any non-E2EE cloud backup (default iCloud, Google Drive, OneDrive)", r: "Exposes message and photo history to remote, provider-side scanning." },
        { n: "Discord direct messages", r: "Not end-to-end encrypted; readable by the platform on request." },
        { n: "Telegram, in any mode, for high-sensitivity use", r: "Uses a proprietary, unaudited encryption protocol rather than a peer-reviewed standard." },
        { n: "Messaging tied to a real-name SIM", r: "A phone-number requirement defeats metadata isolation regardless of the app's encryption." }
      ]
    },
    C: {
      tag: "Tier C — Extreme sovereignty", who: "For investigative journalists, political dissidents and whistleblowers facing state-level threat models or OS-level compromise.",
      i1title: "De-Googled hardware and firmware", i1body: "Avoid iOS and commercial Android builds bundled with Google Play Services, which can push client-side scanning modules in the background. Use a Google Pixel device and flash GrapheneOS via its authenticated web installer; it blocks network telemetry, hardens the Linux kernel against memory exploits and strictly sandboxes applications.",
      i2title: "Global Tor routing", i2body: "Route 100% of device traffic through the Tor network using Orbot in VPN mode, encapsulating every connection in onion routing so your carrier cannot analyse network metadata.",
      i3title: "A closed software supply chain", i3body: "Disable commercial app stores entirely. Install and update software only via F-Droid, ensuring every application is open-source (FOSS) and free of tracking libraries.",
      blTitle: "Avoid for this tier",
      bl: [
        { n: "iOS or commercial Android with Google Play Services", r: "Both can receive silently-pushed scanning or telemetry modules at the OS level, outside user control." },
        { n: "Closed-source VPNs of unclear jurisdiction or logging policy", r: "An unauditable “no-logs” claim is a marketing claim, not a guarantee." },
        { n: "Chrome or any browser with account-linked sync enabled", r: "Sync ties browsing and file activity to an identity-linked cloud account." },
        { n: "Commercial app stores (Play Store / App Store) for sensitive tools", r: "Distribution can be monitored, geofenced, or altered per jurisdiction." },
        { n: "Unencrypted or provider-hosted backups of any kind", r: "Removes the protection GrapheneOS and Tor provide at the device and network layer." }
      ]
    }
  },
  act: {
    eyebrow: "Take action",
    h1: "Petitions, Contacts & Allied Projects",
    lead: "The permanent regulation (Chat Control 2.0) is still being negotiated. This is exactly the moment public pressure matters.",
    featuredFlag: "Most-signed campaign",
    p1: { title: "“NON à la mise sur écoute de votre téléphone avec Chat Control”", meta: "Change.org · reopened July 2026 · 117,000+ signatures in its first run (spring 2026) · versions in FR / EN / ES / DE / IT / PL", body: "Started by a French citizen, this is the most-signed public petition against Chat Control to date. It was closed as a “victory” after the 26 March 2026 rejection, then reopened within hours of the 9 July revival.", link: "Sign on Change.org" },
    p2: { title: "Stop Scanning Me", meta: "European Digital Rights (EDRi) · EU-wide campaign · coalition of 50+ civil-society organisations · backed by EFF", body: "The longest-running, most institutionally connected campaign: signatures have been formally delivered to MEPs in Brussels multiple times since 2023. Available in English, German, Spanish, Danish, Swedish and Portuguese.", link: "Sign at civicrm.edri.org" },
    p3: { title: "Fight Chat Control — contact your MEP", meta: "Citizen-led advocacy tool · a direct-action tool, not a petition", body: "Look up your country's official position (support / oppose / undecided) and send a ready-made, editable letter to your MEPs and government in a few clicks.", link: "Open fightchatcontrol.eu" },
    p4: { title: "Non à Chat Control, outil de surveillance de masse", meta: "Assemblée nationale (France) · official platform · needs 500,000 signatures from 30+ départements to trigger a floor debate", body: "A formal petition on France's National Assembly petition platform. Reaching the threshold obliges the Conference of Presidents to consider a public debate.", link: "Sign on assemblee-nationale.fr" },
    gh: {
      title: "Related fight: the Digital Euro",
      body: "Mass communication scanning isn't the only digital-sovereignty fight in Brussels right now. A companion open-source project documents the risks of the proposed Digital Euro — programmable money, transaction traceability, and the erosion of cash as an anonymous payment option.",
      note: "Independent project, not affiliated with this dossier's author.",
      linkLabel: "View on GitHub: GHub942/UEIsBad-DigitalEuro"
    },
    resources: {
      title: "Primary sources & further reading",
      r1: "La Quadrature du Net (LQDN) — French digital-rights advocacy group.",
      r2: "Patrick Breyer / chatcontrol.eu — reference portal documenting Council leaks and voting records.",
      r3: "Electronic Frontier Foundation (EFF) — international reference on cryptography advocacy.",
      r4: "European Digital Rights (EDRi) — network of European digital-rights NGOs.",
      r5: "fightchatcontrol.eu — timeline, per-country Council positions, MEP contact tool.",
      r6: "Wikipedia — “Chat Control” — maintained timeline with primary-source citations."
    }
  },
  facts: {
    title: "Did you know?",
    f1t: "MEPs would be exempt", f1b: "Reporting on the Council's proposals has repeatedly flagged a “professional secrecy” carve-out that would shield EU institutions' own communications from the scanning obligations imposed on ordinary citizens and businesses.",
    f2t: "Apple already tried this — and gave up", f2b: "In 2021, Apple announced client-side CSAM scanning for iCloud Photos. It abandoned the plan in December 2022 after security researchers demonstrated the hash-matching system could be tricked and repurposed.",
    f3t: "Survivors are among the loudest critics", f3b: "Groups like MOGiS e.V. and abuse survivors such as Alexander Hanff argue that mass scanning by corporations doesn't stop abuse — and that it puts survivors' own safe communication channels at risk.",
    f4t: "Passed in an emptying chamber", f4b: "The decisive 9 July 2026 vote was scheduled for Parliament's last session before the summer recess, after an emergency procedure pushed it through with barely 48 hours' notice — while many MEPs had already left Strasbourg.",
    f5t: "A majority actually opposed it", f5b: "276 MEPs voted to keep the revival; 314 voted to reject it. More MEPs wanted it gone than wanted it kept — it survived only because blocking a second-reading item needs an absolute majority of all 720 seats, not just a majority of votes cast.",
    f6t: "Signal has threatened to leave the EU entirely", f6b: "Signal's president, Meredith Whittaker, has repeatedly said the company would rather withdraw from the European market than build scanning into its encryption: \"a backdoor in one part of a network is a vector into every other part.\"",
    f7t: "Germany's own police data shows the scale of the false-positive problem", f7b: "German federal police figures for 2024 recorded roughly 99,000 private chats and photos from innocent people wrongly flagged under the existing voluntary scanning regime — a year-on-year increase. In Ireland, only a small fraction of automated reports filed in 2022 turned out to involve illegal content.",
    f8t: "Over 500 scientists called it \"technically infeasible\"", f8b: "In an open letter, more than 500 cryptographers and security researchers from dozens of countries warned that no machine-learning system can detect unknown CSAM at scale without producing large numbers of errors — and that any backdoor built for one purpose becomes a vulnerability for all."
  },
  map: {
    title: "Where do EU governments stand?",
    intro: "Positions in Council negotiations on the permanent regulation (Chat Control 2.0) — the most recent published breakdown (May 2026, EDRi / Politico Europe). Governments can and do change position — always check before writing to yours.",
    legendAgainst: "Opposing / withholding consent",
    legendFor: "Backing mandatory scanning",
    legendUndecided: "Undecided / abstaining",
    note: "This reflects Council-level positions on the permanent CSAR text, not the 9 July Parliament vote, which is decided by individual MEPs rather than national delegations.",
    source: "Source: position breakdown published by EDRi and Politico Europe, May 2026."
  },
  countries: {
    DE:"Germany", PL:"Poland", NL:"Netherlands", AT:"Austria", FI:"Finland", EE:"Estonia", CZ:"Czechia",
    FR:"France", ES:"Spain", IT:"Italy", IE:"Ireland", HU:"Hungary", CY:"Cyprus", SE:"Sweden", DK:"Denmark", HR:"Croatia",
    BE:"Belgium", LU:"Luxembourg", SI:"Slovenia", SK:"Slovakia", GR:"Greece", PT:"Portugal", RO:"Romania", BG:"Bulgaria", LT:"Lithuania", LV:"Latvia", MT:"Malta"
  },
  contact: {
    title: "Write to a decision-maker, in one click",
    intro: "A ready-made message, in your language. Look up your own MEPs first, then either open your email client directly or copy the text below.",
    subject: "Reject mandatory Chat Control — protect end-to-end encryption",
    body: "Dear Member of the European Parliament,\n\nI am writing as one of your constituents to ask you to reject any regulation that would require the mandatory, suspicionless scanning of private communications, including messages protected by end-to-end encryption.\n\nThe temporary voluntary-scanning regime (\"Chat Control 1.0\") was reinstated on 9 July 2026 despite a majority of MEPs voting against it. I ask you to oppose any attempt to make this scanning permanent or mandatory in the ongoing CSA Regulation (\"Chat Control 2.0\") negotiations, and to support targeted, judicially-authorised detection instead of mass surveillance of the entire population.\n\nThank you for representing my concerns.\n\nSincerely,\n[Your name]",
    copyBtn: "Copy message", copiedMsg: "Copied to clipboard",
    mailtoBtn: "Open in your email app",
    howToTitle: "How to find your MEP's email",
    howToBody: "Search the official directory, open their profile page, and their email follows the format firstname.lastname@europarl.europa.eu.",
    meplookupLabel: "Search europarl.europa.eu/meps",
    haveYourSayTitle: "Prefer an official channel?",
    haveYourSayBody: "Have Your Say is the European Commission's own platform for public feedback on legislation in progress — the channel Europe Direct itself points citizens to for making political views on EU matters known.",
    haveYourSayLabel: "Open Have Your Say"
  },
  apps: {
    useTitle: "Recommended apps",
    avoidTitle: "Apps to avoid",
    intro: "A quick-reference directory, grouped by category. See the tiers on the left for the reasoning behind each choice.",
    categories: { messaging: "Messaging", cloud: "Cloud storage", browser: "Browser", mobileos: "Mobile OS", vpn: "VPN", dns: "DNS", appstore: "App store", email: "Email" },
    use: [
      { cat: "messaging", name: "Signal", note: "Default choice: open-source, E2EE, minimal metadata." },
      { cat: "messaging", name: "Session", note: "No phone number required, decentralised routing." },
      { cat: "messaging", name: "Element / Matrix", note: "Federated, self-hostable, E2EE via Olm/Megolm." },
      { cat: "cloud", name: "Proton Drive", note: "Zero-knowledge E2EE, Swiss jurisdiction." },
      { cat: "cloud", name: "Nextcloud (self-hosted)", note: "You control the server and the encryption keys." },
      { cat: "browser", name: "Mullvad Browser", note: "Built with the Tor Project; resists fingerprinting." },
      { cat: "browser", name: "Firefox (hardened)", note: "Open-source, configurable, no forced account link." },
      { cat: "mobileos", name: "GrapheneOS", note: "De-Googled, hardened AOSP fork, Pixel devices only." },
      { cat: "mobileos", name: "CalyxOS", note: "De-Googled alternative with broader device support." },
      { cat: "vpn", name: "Mullvad VPN", note: "Anonymous accounts, independently audited, WireGuard." },
      { cat: "vpn", name: "IVPN", note: "No email required to sign up, strict no-logs, audited." },
      { cat: "dns", name: "Quad9", note: "Blocks known-malicious domains, no query logging." },
      { cat: "dns", name: "NextDNS (self-configured)", note: "Custom filtering with logs only you control." },
      { cat: "appstore", name: "F-Droid", note: "FOSS-only catalogue, reproducible builds." },
      { cat: "appstore", name: "Accrescent", note: "Security-focused store, minimal permissions by default." },
      { cat: "email", name: "Proton Mail", note: "E2EE by default, Swiss jurisdiction." },
      { cat: "email", name: "Tuta (Tutanota)", note: "E2EE by default, fully open-source clients." }
    ],
    avoid: [
      { cat: "messaging", name: "WhatsApp", note: "Meta-owned; in scope for Chat Control 1.0 voluntary scanning." },
      { cat: "messaging", name: "Facebook Messenger", note: "Same voluntary-scanning exposure as WhatsApp." },
      { cat: "messaging", name: "SMS / RCS (default)", note: "Carrier-visible, no end-to-end encryption." },
      { cat: "messaging", name: "Telegram (Cloud Chats)", note: "Not E2EE by default; Secret Chats lack device sync." },
      { cat: "cloud", name: "iCloud (default backup)", note: "Stores message-key copies unless Advanced Data Protection is on." },
      { cat: "cloud", name: "Google Drive (default)", note: "Scanned server-side; not end-to-end encrypted." },
      { cat: "cloud", name: "OneDrive (consumer, default)", note: "Same server-side scanning exposure." },
      { cat: "browser", name: "Chrome (signed in)", note: "Ties browsing activity to an identity-linked account." },
      { cat: "browser", name: "Edge (default)", note: "Heavy telemetry tied to a Microsoft account." },
      { cat: "mobileos", name: "Stock Android + Play Services", note: "Can receive silently-pushed scanning or telemetry modules." },
      { cat: "mobileos", name: "iOS (for high-threat use)", note: "Closed-source OS layer, limited low-level user control." },
      { cat: "vpn", name: "Free / unaudited VPN apps", note: "Unverifiable no-logs claims; some monetise user data instead." },
      { cat: "dns", name: "Default ISP DNS", note: "Query history visible to, and sometimes sold by, your ISP." },
      { cat: "appstore", name: "Play Store / App Store (sensitive tools)", note: "Distribution can be monitored, geofenced or altered." },
      { cat: "email", name: "Gmail", note: "Scanned for advertising and abuse-detection by design." },
      { cat: "email", name: "Outlook.com (free tier)", note: "Similar server-side scanning exposure as Gmail." }
    ]
  },
  footer: { text: "Technical & civic awareness dossier — last verified 10 July 2026. Shared under Creative Commons CC BY 4.0. Not legal advice." }
};
