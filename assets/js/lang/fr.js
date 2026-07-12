window.I18N = window.I18N || {};
window.I18N.fr = {
  nav: { home: "Accueil", status: "Statut légal", dossier: "Dossier technique", protection: "Manuel de protection", act: "Passer à l'action" },
  brand: { title: "Dossier Chat Control", stamp: "EN DIRECT" },
  home: {
    eyebrow: "Mise à jour — 10 juillet 2026",
    h1: "Chat Control est de retour en vigueur",
    lead: "Le 9 juillet 2026, il a manqué 47 voix au Parlement européen pour bloquer la résurrection du scan de masse, sans soupçon, des messages privés. Voici précisément ce qui a changé, ce qui n'a pas changé, et ce que vous pouvez encore faire.",
    ctaAct: "Passer à l'action",
    ctaStatus: "Lire le statut légal complet",
    score: {
      title: "Vote en plénière du Parlement européen — 9 juillet 2026",
      date: "720 sièges · 607 votes exprimés",
      needLabel: "Seuil pour bloquer (majorité absolue)",
      rejectLabel: "Ont voté pour rejeter la résurrection",
      keepLabel: "Ont voté contre le rejet",
      note: "Comme la résurrection est passée par une procédure de seconde lecture, la bloquer exigeait une <strong>majorité absolue de 361</strong> eurodéputés. Seuls <strong>314</strong> ont voté pour la rejeter — 47 voix manquantes. Le régime est réactivé jusqu'au <strong>3 avril 2028</strong>."
    },
    summary: {
      title: "Ce qui s'est réellement passé, en trois points",
      s1t: "1 — « Chat Control 1.0 » est de retour",
      s1b: "La dérogation volontaire au règlement ePrivacy (Règlement 2021/1232), qui permet à des plateformes comme Meta, Google, Microsoft et Snap de scanner les messages privés à la recherche de contenus CSAM déjà répertoriés, avait expiré le 4 avril 2026 après le refus du Parlement de la prolonger — avant d'être ressuscitée via une procédure d'urgence et réactivée le 9 juillet 2026, valable jusqu'au 3 avril 2028.",
      s2t: "2 — « Chat Control 2.0 » n'est PAS passé",
      s2b: "Le règlement permanent sur les abus sexuels sur mineurs (CSAR) — le texte qui rendrait le scan obligatoire et l'étendrait aux messageries chiffrées de bout en bout comme Signal ou WhatsApp — reste bloqué en trilogue après cinq cycles de négociation. Aucun accord n'existe sur le scan obligatoire côté client au 10 juillet 2026.",
      s3t: "3 — Pourquoi tant de gens disent que « c'est passé »",
      s3b: "Les deux dossiers partagent un nom et un sujet, et ravivent la même peur : vos messages privés lus par un algorithme. Mais seul le volet temporaire et volontaire a été réactivé ce mois-ci. Le volet permanent et obligatoire reste bloqué — pour l'instant."
    },
    cards: {
      title: "Explorer le dossier",
      c1tag: "01 · Statut légal", c1title: "Chronologie & double dossier expliqué", c1body: "Chaque vote, blocage et manœuvre de procédure depuis 2021, et une carte claire de Chat Control 1.0 vs 2.0.",
      c2tag: "02 · Dossier technique", c2title: "Comment le scan fonctionne réellement", c2body: "Comparaison de hash, vision par IA, détection du grooming — et les statistiques derrière les faux positifs.",
      c3tag: "03 · Manuel de protection", c3title: "Trois niveaux de sécurité opérationnelle", c3body: "De l'hygiène de base à la souveraineté durcie — des outils concrets pour chaque modèle de menace.",
      c4tag: "04 · Passer à l'action", c4title: "Pétitions & projets liés", c4body: "Signez, contactez votre eurodéputé, et découvrez le combat contre l'Euro Numérique sur GitHub."
    },
    redact: {
      title: "Certaines choses sont scannées. D'autres sont caviardées.",
      l1: "Chaque message que vous envoyez.",
      l2: "Chaque photo que vous partagez.",
      l3: "Chaque fichier que vous stockez.",
      caption: "— sauf si vous agissez."
    },
    finalCta: {
      title: "Le règlement permanent est toujours en négociation.",
      body: "Chat Control 2.0 n'est pas passé. C'est au prochain cycle de trilogue que tout se décidera — et la pression citoyenne est le seul facteur que les délégations du Conseil ne peuvent pas totalement ignorer.",
      btn: "Voir comment agir"
    }
  },
  status: {
    eyebrow: "Statut légal — mis à jour le 10 juillet 2026",
    h1: "Deux dossiers, un seul combat : Chat Control 1.0 vs 2.0",
    lead: "L'UE fait avancer deux processus « Chat Control » en parallèle. Les confondre est précisément ce qui alimente la confusion sur « c'est passé ». Voici chacun d'eux, avec précision.",
    tracks: {
      title: "Le double dossier expliqué",
      c1tag: "Dossier 1 — Règlement (UE) 2021/1232", c1status: "Réactivé — en vigueur jusqu'au 3 avril 2028",
      c1body: "Connu sous le nom de « Chat Control 1.0 ». Une dérogation temporaire à la directive ePrivacy qui permet aux fournisseurs (Meta, Google, Microsoft, Snap, etc.) de scanner volontairement les messages, photos et vidéos non chiffrés à la recherche de CSAM déjà répertoriés dans des bases de hash. Aucune option de retrait pour les utilisateurs, aucune autorisation judiciaire préalable. Il a expiré le 4 avril 2026, a été relancé par le Conseil, puis réactivé par le Parlement le 9 juillet 2026.",
      c2tag: "Dossier 2 — Règlement CSAR", c2status: "Toujours en trilogue — non adopté",
      c2body: "Connu sous le nom de « Chat Control 2.0 ». Proposé par la Commission le 11 mai 2022, c'est le cadre permanent et obligatoire. Tel que rédigé par le Conseil, il imposerait des injonctions de détection s'étendant aux services chiffrés de bout en bout. Le Parlement veut au contraire limiter le scan aux suspects identifiés par la justice et créer un Centre européen de protection de l'enfance dédié. Cinq cycles de trilogue n'ont produit aucun accord."
    },
    mech: {
      title: "Comment la résurrection du 9 juillet a fonctionné, précisément",
      body: "Le 26 mars 2026, le Parlement a refusé de prolonger la dérogation Chat Control 1.0, qui a ensuite expiré le 4 avril. Plutôt que d'accepter ce résultat, le Conseil s'est accordé le 26 juin pour relancer un texte quasi identique avec de nouvelles dates. Le dossier revenant en seconde lecture, le bloquer exigeait une majorité absolue de l'ensemble des 720 eurodéputés (361 voix) — et non simplement plus de « non » que de « oui » parmi les présents. Le 7 juillet, le Parlement a approuvé une procédure d'urgence (331 voix pour, 304 contre, 11 abstentions) pour forcer un vote final avant la trêve estivale, alors que de nombreux eurodéputés avaient déjà quitté Strasbourg. Le 9 juillet, seuls 314 eurodéputés ont voté pour rejeter la résurrection — 47 voix sous le seuil — tandis que 276 ont voté contre le rejet et 17 se sont abstenus. Un amendement distinct limitant le scan aux suspects identifiés par la justice a obtenu 322 voix, également sous le seuil de 361. Une exemption pour les services chiffrés de bout en bout a été adoptée, bien qu'en pratique les fournisseurs ne les scannent de toute façon pas."
    },
    timeline: {
      title: "Chronologie complète (2021 – 2026)",
      intro: "Toutes les étapes majeures de l'historique législatif, les deux dossiers combinés.",
      th1: "Date", th2: "Étape", th3: "Ce que cela signifie", th4: "Statut",
      rows: [
        { date: "2021", title: "Dérogation ePrivacy adoptée", detail: "Le règlement (UE) 2021/1232 permet aux plateformes de scanner volontairement les CSAM déjà répertoriés. Expiration prévue en 2024.", pill: "Adopté", cls: "pill-active" },
        { date: "11 mai 2022", title: "La Commission propose le CSAR", detail: "Le cadre permanent « Chat Control 2.0 » est dévoilé par la commissaire Ylva Johansson.", pill: "Proposé", cls: "pill-pending" },
        { date: "2023", title: "Avertissements juridiques & amendements du Parlement", detail: "Le CEPD, le CEPD-Contrôleur et le service juridique du Parlement lui-même jugent le texte incompatible avec les droits fondamentaux de l'UE ; la commission LIBE vote l'exclusion des services chiffrés de bout en bout de toute obligation de scan.", pill: "Amendé", cls: "pill-reject" },
        { date: "2024", title: "Blocage du Conseil, à deux reprises", detail: "Deux votes du Conseil échouent à dégager une position commune ; une minorité de blocage menée par l'Allemagne, l'Autriche, la Pologne et les Pays-Bas tient bon. La dérogation ePrivacy est prolongée entre-temps, jusqu'au 3 avril 2026.", pill: "Bloqué", cls: "pill-reject" },
        { date: "Automne 2025", title: "La présidence danoise abandonne le scan obligatoire", detail: "Face à une minorité de blocage confirmée, la présidence danoise du Conseil retire le scan côté client obligatoire et propose à la place un compromis allégé de « gestion des risques ».", pill: "Assoupli", cls: "pill-pending" },
        { date: "Déc. 2025 – mai 2026", title: "Quatre cycles de trilogue, aucun accord", detail: "Parlement, Conseil et Commission se réunissent quatre fois sur le texte permanent du CSAR sans accord sur le point central : le scan obligatoire des messages chiffrés.", pill: "Aucun accord", cls: "pill-pending" },
        { date: "26 mars 2026", title: "Le Parlement refuse de prolonger Chat Control 1.0", detail: "Les eurodéputés votent contre une nouvelle prolongation de la dérogation volontaire ePrivacy, lors d'un vote en plénière à l'issue incertaine.", pill: "Rejeté", cls: "pill-reject" },
        { date: "4 avril 2026", title: "Chat Control 1.0 expire légalement", detail: "Sans base légale restante, Meta, Google, Microsoft et Snap annoncent publiquement qu'ils continueront à scanner les messages privés malgré tout.", pill: "Sans base légale", cls: "pill-pending" },
        { date: "29 juin 2026", title: "Le cinquième trilogue sur le CSAR se termine sans accord", detail: "Le cycle présenté comme potentiellement décisif n'aboutit à aucun accord ; le scan des messages chiffrés reste le point de blocage.", pill: "Aucun accord", cls: "pill-pending" },
        { date: "7–9 juillet 2026", title: "Le Conseil et le Parlement ressuscitent Chat Control 1.0", detail: "Le Parlement approuve une procédure d'urgence (331–304) puis, deux jours plus tard, échoue à réunir la majorité absolue de 361 voix nécessaire pour bloquer la résurrection — seuls 314 votent pour le rejet. Le régime est réactivé jusqu'au 3 avril 2028.", pill: "En vigueur", cls: "pill-active" },
        { date: "En cours", title: "Les négociations sur le CSAR (« Chat Control 2.0 ») continuent", detail: "Aucune date d'adoption n'est fixée pour le règlement permanent et obligatoire au 10 juillet 2026.", pill: "Indécis", cls: "pill-pending" }
      ]
    },
    confusion: {
      title: "Alors… « Chat Control » est-il passé ?",
      body: "En partie, et temporairement. Ce qui est passé le 9 juillet 2026, c'est le scan volontaire des messages non chiffrés par les grandes plateformes, prolongé jusqu'en 2028. Ce qui n'est PAS passé, c'est le régime permanent et obligatoire qui s'étendrait aux applications chiffrées — ce combat continue en trilogue, sans date fixée. Traitez toute affirmation selon laquelle « Chat Control est désormais pleinement en vigueur » avec la même prudence qu'un titre affirmant qu'une loi est « définitivement morte » — dans ce dossier, aucune des deux affirmations n'est restée vraie plus de quelques mois d'affilée."
    }
  },
  dossier: {
    eyebrow: "Dossier technique",
    h1: "Comment le scan des messages fonctionne réellement",
    lead: "Quel que soit le dossier qui finira par s'appliquer, le mécanisme sous-jacent — le scan côté client (Client-Side Scanning) — pose le même problème structurel : il inspecte le contenu avant l'application du chiffrement, ou immédiatement après sa suppression.",
    s1: {
      title: "1 — Injonctions de détection & la fin de l'interception ciblée",
      body: "Contrairement à une interception judiciaire, qui exige une suspicion préalable individualisée et l'autorisation d'un magistrat, les deux dossiers Chat Control reposent sur des « injonctions de détection » imposées aux fournisseurs de communication, s'appliquant à des populations entières d'utilisateurs non suspects plutôt qu'à des individus précis déjà sous enquête."
    },
    tax: {
      title: "2 — Trois méthodes de scan, trois modes de défaillance",
      t1title: "Comparaison de hash (scan de contenu déjà connu)",
      t1body: "Compare l'empreinte cryptographique d'un fichier local à une base de données centralisée de CSAM connus (tenue par des organismes comme NCMEC ou Europol). Raisonnablement fiable pour les correspondances exactes de fichiers déjà répertoriés, mais vulnérable aux collisions de hash et à l'empoisonnement de la base de référence.",
      t2title: "Vision par ordinateur (IA prédictive)",
      t2body: "Des réseaux de neurones tentent de signaler des images ou vidéos inédites, non répertoriées. Dépourvus de toute compréhension contextuelle, ces classificateurs confondent régulièrement des photos médicales, artistiques ou familiales ordinaires avec du contenu suspect.",
      t3title: "Détection du grooming par analyse du langage",
      t3body: "Analyse continue des conversations textuelles pour déduire une intention manipulatrice ou prédatrice. C'est la méthode la plus intrusive : elle nécessite de lire des conversations ordinaires à grande échelle, et non plus seulement de comparer des empreintes."
    },
    stats: {
      title: "3 — Ce que montrent réellement les chiffres",
      fpTitle: "Le problème de saturation des faux positifs",
      mathP: "Soit <span class=\"math\">F<sub>p</sub></span> le taux de faux positifs d'un classificateur automatisé, appliqué aux milliards de messages échangés chaque jour dans l'UE.",
      fpBody: "Même un taux d'erreur très faible s'amplifie à l'échelle de l'UE. Les rapports publics et les audits de la société civile sur le régime volontaire existant relèvent régulièrement qu'une large part des signalements automatisés — souvent citée dans une fourchette allant d'environ la moitié à une large majorité, selon la méthode de détection et la plateforme — s'avère sans pertinence pénale après examen humain. Un chiffre largement rapporté : la grande majorité des signalements effectués sous le régime volontaire provenaient d'une seule entreprise, et la plupart concernaient du contenu déjà répertorié plutôt que des abus nouvellement découverts — ce qui interroge sur la part réelle d'abus actifs détectés par rapport à la part de communications ordinaires exposées à un examen.",
      rangeCaption: "Fourchette illustrative des signalements automatisés jugés, après examen humain, sans pertinence pénale — telle que rapportée par les audits, et non un chiffre officiel unique.",
      sourcesNote: "Les chiffres ci-dessus résument des fourchettes rapportées par plusieurs audits, études parlementaires et enquêtes journalistiques de 2025-2026 ; les pourcentages exacts varient selon les sources et sont donnés sous forme de fourchettes plutôt que de statistiques uniques précises. Voir la page « Passer à l'action » pour les sources primaires."
    }
  },
  protection: {
    eyebrow: "Sécurité opérationnelle",
    h1: "Un manuel de protection précis",
    lead: "Trois niveaux, adaptés à trois modèles de menace — des utilisateurs ordinaires aux personnes confrontées à une surveillance étatique.",
    A: {
      tag: "Niveau A — Hygiène de base", who: "Pour les utilisateurs ordinaires souhaitant s'extraire du pistage commercial de bas niveau et du scan volontaire.",
      i1title: "Messagerie chiffrée", i1body: "Abandonnez les SMS, iMessage et WhatsApp/Telegram standards pour les conversations sensibles. Utilisez Signal, et activez les messages éphémères (Paramètres → Confidentialité → Messages éphémères) avec un délai court par défaut pour limiter l'historique stocké localement.",
      i2title: "DNS chiffré", i2body: "Votre fournisseur d'accès peut journaliser — et parfois manipuler — chaque domaine que vous visitez. Configurez le DNS-over-HTTPS ou DNS-over-TLS avec un résolveur respectueux de la vie privée comme Quad9 (9.9.9.9 / 149.112.112.112) ou les serveurs DNS de Mullvad.",
      blTitle: "À éviter à ce niveau",
      bl: [
        { n: "SMS / RCS par défaut", r: "Visibles par l'opérateur, non chiffrés de bout en bout, et entièrement hors de votre contrôle." },
        { n: "Sauvegardes iMessage standard", r: "La sauvegarde iCloud conserve une copie des clés de message sauf si la Protection avancée des données est activée manuellement." },
        { n: "WhatsApp / Facebook Messenger", r: "Propriété de Meta, actuellement responsable de la grande majorité des signalements CSAM volontaires sous Chat Control 1.0." },
        { n: "« Discussions cloud » de Telegram (par défaut)", r: "Non chiffrées de bout en bout par défaut ; seules les « Discussions secrètes » optionnelles le sont, sans synchronisation multi-appareils." },
        { n: "Gmail / webmail gratuit sans PGP", r: "Scanné par conception à des fins publicitaires et de détection d'abus." }
      ]
    },
    B: {
      tag: "Niveau B — Confidentialité renforcée", who: "Pour les professionnels, juristes et militants ayant besoin d'une isolation complète des métadonnées et d'aucun lien avec une identité civile.",
      i1title: "Messagerie décentralisée et sans identifiant", i1body: "Session fonctionne sur le réseau décentralisé de nœuds de service Oxen sans numéro de téléphone ni e-mail, en acheminant les messages via un routage en oignon multi-sauts. Matrix (via le client Element) est une alternative fédérée — choisissez un serveur d'accueil hors des juridictions restrictives.",
      i2title: "Assainissement du stockage", i2body: "Désactivez les sauvegardes cloud automatiques non chiffrées de bout en bout (iCloud, Google Drive) qui exposent vos fichiers à un scan distant. Migrez vos documents vers Proton Drive ou une instance Nextcloud auto-hébergée avec chiffrement côté serveur activé.",
      i3title: "Tunnelisation réseau", i3body: "Maintenez une connexion VPN permanente via un fournisseur audité de façon indépendante et appliquant une politique stricte d'absence de journaux, situé hors des juridictions coopératives — par exemple Mullvad VPN via WireGuard, avec un compte anonyme ne nécessitant aucune donnée personnelle.",
      blTitle: "À éviter à ce niveau",
      bl: [
        { n: "Toute sauvegarde cloud non chiffrée de bout en bout (iCloud par défaut, Google Drive, OneDrive)", r: "Expose l'historique de messages et de photos à un scan distant côté fournisseur." },
        { n: "Messages privés Discord", r: "Non chiffrés de bout en bout ; lisibles par la plateforme sur demande." },
        { n: "Telegram, quel que soit le mode, pour un usage sensible", r: "Utilise un protocole de chiffrement propriétaire et non audité plutôt qu'un standard évalué par des pairs." },
        { n: "Messagerie liée à une carte SIM à identité réelle", r: "Une exigence de numéro de téléphone annule l'isolation des métadonnées, quel que soit le chiffrement de l'application." }
      ]
    },
    C: {
      tag: "Niveau C — Souveraineté extrême", who: "Pour les journalistes d'investigation, dissidents politiques et lanceurs d'alerte confrontés à des modèles de menace étatiques ou à une compromission au niveau du système d'exploitation.",
      i1title: "Matériel et firmware dé-googlisés", i1body: "Évitez iOS et les versions commerciales d'Android intégrant les Google Play Services, capables de pousser en arrière-plan des modules de scan côté client. Procurez-vous un appareil Google Pixel et installez GrapheneOS via son installateur web authentifié ; il bloque la télémétrie réseau, durcit le noyau Linux contre les exploits mémoire et isole strictement les applications.",
      i2title: "Routage Tor global", i2body: "Acheminez 100 % du trafic de l'appareil via le réseau Tor grâce à Orbot en mode VPN, encapsulant chaque connexion dans un routage en oignon afin que votre opérateur ne puisse analyser vos métadonnées réseau.",
      i3title: "Une chaîne d'approvisionnement logicielle fermée", i3body: "Désactivez entièrement les magasins d'applications commerciaux. Installez et mettez à jour vos logiciels uniquement via F-Droid, en vous assurant que chaque application est open-source (FOSS) et exempte de bibliothèques de pistage.",
      blTitle: "À éviter à ce niveau",
      bl: [
        { n: "iOS ou Android commercial avec Google Play Services", r: "Les deux peuvent recevoir silencieusement des modules de scan ou de télémétrie au niveau du système, hors du contrôle de l'utilisateur." },
        { n: "VPN à code fermé, de juridiction ou de politique de journaux incertaine", r: "Une promesse « sans journaux » invérifiable est un argument marketing, pas une garantie." },
        { n: "Chrome ou tout navigateur avec synchronisation de compte activée", r: "La synchronisation lie l'activité de navigation et de fichiers à un compte cloud identifié." },
        { n: "Magasins d'applications commerciaux (Play Store / App Store) pour des outils sensibles", r: "La distribution peut être surveillée, restreinte géographiquement ou modifiée selon la juridiction." },
        { n: "Toute sauvegarde non chiffrée ou hébergée par un fournisseur tiers", r: "Annule la protection offerte par GrapheneOS et Tor au niveau de l'appareil et du réseau." }
      ]
    }
  },
  act: {
    eyebrow: "Passer à l'action",
    h1: "Pétitions, contacts & projets alliés",
    lead: "Le règlement permanent (Chat Control 2.0) est toujours en négociation. C'est précisément le moment où la pression citoyenne compte.",
    featuredFlag: "Pétition la plus signée",
    p1: { title: "« NON à la mise sur écoute de votre téléphone avec Chat Control »", meta: "Change.org · rouverte en juillet 2026 · plus de 117 000 signatures lors de sa première mise en ligne (printemps 2026) · versions en FR / EN / ES / DE / IT / PL", body: "Lancée par un citoyen français, c'est à ce jour la pétition publique la plus signée contre Chat Control. Elle avait été close comme une « victoire » après le rejet du 26 mars 2026, puis rouverte quelques heures après la résurrection du 9 juillet.", link: "Signer sur Change.org" },
    p2: { title: "Stop Scanning Me", meta: "European Digital Rights (EDRi) · campagne à l'échelle de l'UE · coalition de plus de 50 organisations de la société civile · soutenue par l'EFF", body: "La campagne la plus ancienne et la mieux connectée institutionnellement : les signatures ont été remises formellement à des eurodéputés à Bruxelles à plusieurs reprises depuis 2023. Disponible en anglais, allemand, espagnol, danois, suédois et portugais.", link: "Signer sur civicrm.edri.org" },
    p3: { title: "Fight Chat Control — contactez votre eurodéputé", meta: "Outil citoyen de plaidoyer · un outil d'action directe, pas une pétition", body: "Consultez la position officielle de votre pays (pour / contre / indécis) et envoyez en quelques clics une lettre prête à l'emploi et modifiable à vos eurodéputés et à votre gouvernement.", link: "Ouvrir fightchatcontrol.eu" },
    p4: { title: "Non à Chat Control, outil de surveillance de masse", meta: "Assemblée nationale (France) · plateforme officielle · nécessite 500 000 signatures issues d'au moins 30 départements pour déclencher un débat en séance", body: "Une pétition officielle sur la plateforme de pétitions de l'Assemblée nationale. Atteindre ce seuil oblige la Conférence des présidents à envisager un débat public.", link: "Signer sur assemblee-nationale.fr" },
    gh: {
      title: "Combat lié : l'Euro Numérique",
      body: "Le scan de masse des communications n'est pas le seul combat pour la souveraineté numérique en cours à Bruxelles. Un projet open-source connexe documente les dangers de l'Euro Numérique proposé : monnaie programmable, traçabilité des transactions, et érosion de l'espèce comme moyen de paiement anonyme.",
      note: "Projet indépendant, non affilié à l'auteur de ce dossier.",
      linkLabel: "Voir sur GitHub : GHub942/UEIsBad-DigitalEuro"
    },
    resources: {
      title: "Sources primaires & lectures complémentaires",
      r1: "La Quadrature du Net (LQDN) — association française de défense des libertés numériques.",
      r2: "Patrick Breyer / chatcontrol.eu — portail de référence documentant les fuites du Conseil et les résultats de vote.",
      r3: "Electronic Frontier Foundation (EFF) — référence internationale pour la défense de la cryptographie.",
      r4: "European Digital Rights (EDRi) — réseau d'ONG européennes de défense des droits numériques.",
      r5: "fightchatcontrol.eu — chronologie, positions du Conseil par pays, outil de contact des eurodéputés.",
      r6: "Wikipédia — « Chat Control » — chronologie tenue à jour avec citations des sources primaires."
    }
  },
  facts: {
    title: "Le saviez-vous ?",
    f1t: "Les eurodéputés en seraient exemptés", f1b: "Plusieurs enquêtes sur les propositions du Conseil ont pointé une clause de « secret professionnel » qui protégerait les communications des institutions européennes elles-mêmes des obligations de scan imposées aux citoyens et entreprises ordinaires.",
    f2t: "Apple avait déjà essayé — et a abandonné", f2b: "En 2021, Apple avait annoncé un scan côté client des CSAM pour iCloud Photos. Le projet a été abandonné en décembre 2022 après que des chercheurs en sécurité ont démontré que le système de comparaison de hash pouvait être trompé et détourné.",
    f3t: "Les survivant·es figurent parmi les critiques les plus virulentes", f3b: "Des associations comme MOGiS e.V. et des survivants d'abus comme Alexander Hanff affirment que le scan de masse par des entreprises n'arrête pas les abus — et qu'il met en danger les canaux de communication sécurisés dont les survivant·es ont eux-mêmes besoin.",
    f4t: "Adopté dans un hémicycle qui se vidait", f4b: "Le vote décisif du 9 juillet 2026 a été programmé lors de la dernière session du Parlement avant la trêve estivale, après qu'une procédure d'urgence l'a fait avancer avec à peine 48 heures de préavis — alors que de nombreux eurodéputés avaient déjà quitté Strasbourg.",
    f5t: "Une majorité s'y est en réalité opposée", f5b: "276 eurodéputés ont voté pour maintenir la résurrection ; 314 ont voté pour la rejeter. Plus d'eurodéputés voulaient s'en débarrasser que la conserver — le texte n'a survécu que parce que bloquer un texte en seconde lecture exige une majorité absolue des 720 sièges, et non une simple majorité des votes exprimés.",
    f6t: "Signal a menacé de quitter entièrement l'UE", f6b: "La présidente de Signal, Meredith Whittaker, a répété à plusieurs reprises que l'entreprise préférerait se retirer du marché européen plutôt que d'intégrer un scan dans son chiffrement : « une porte dérobée dans une partie d'un réseau est un vecteur d'attaque vers toutes les autres. »",
    f7t: "Les propres données de la police allemande montrent l'ampleur du problème des faux positifs", f7b: "Les chiffres de la police fédérale allemande pour 2024 recensaient environ 99 000 discussions privées et photos de personnes innocentes signalées à tort sous le régime de scan volontaire actuel — une hausse par rapport à l'année précédente. En Irlande, seule une petite fraction des signalements automatisés déposés en 2022 concernait réellement du contenu illégal.",
    f8t: "Plus de 500 scientifiques l'ont qualifié de « techniquement irréalisable »", f8b: "Dans une lettre ouverte, plus de 500 cryptographes et chercheurs en sécurité de dizaines de pays ont averti qu'aucun système d'apprentissage automatique ne peut détecter du CSAM inconnu à grande échelle sans produire un grand nombre d'erreurs — et que toute porte dérobée créée dans un but devient une vulnérabilité pour tous."
  },
  map: {
    title: "Où en sont les gouvernements de l'UE ?",
    intro: "Positions dans les négociations au Conseil sur le règlement permanent (Chat Control 2.0) — dernière répartition publiée (mai 2026, EDRi / Politico Europe). Les gouvernements changent de position, parfois souvent — vérifiez toujours avant d'écrire au vôtre.",
    legendAgainst: "Opposé / refuse son accord",
    legendFor: "Soutient le scan obligatoire",
    legendUndecided: "Indécis / abstentionniste",
    note: "Ceci reflète les positions au niveau du Conseil sur le texte permanent du CSAR, et non le vote du Parlement du 9 juillet, qui est décidé par des eurodéputés individuels et non par des délégations nationales.",
    source: "Source : répartition publiée par EDRi et Politico Europe, mai 2026."
  },
  countries: {
    DE:"Allemagne", PL:"Pologne", NL:"Pays-Bas", AT:"Autriche", FI:"Finlande", EE:"Estonie", CZ:"Tchéquie",
    FR:"France", ES:"Espagne", IT:"Italie", IE:"Irlande", HU:"Hongrie", CY:"Chypre", SE:"Suède", DK:"Danemark", HR:"Croatie",
    BE:"Belgique", LU:"Luxembourg", SI:"Slovénie", SK:"Slovaquie", GR:"Grèce", PT:"Portugal", RO:"Roumanie", BG:"Bulgarie", LT:"Lituanie", LV:"Lettonie", MT:"Malte"
  },
  contact: {
    title: "Écrire à un décideur, en un clic",
    intro: "Un message prêt à l'emploi, dans votre langue. Recherchez d'abord votre propre eurodéputé, puis ouvrez directement votre client mail ou copiez le texte ci-dessous.",
    subject: "Rejeter le Chat Control obligatoire — protéger le chiffrement de bout en bout",
    body: "Madame/Monsieur la/le Députée européenne,\n\nJe vous écris en tant que citoyen·ne de votre circonscription pour vous demander de rejeter tout règlement qui imposerait le scan obligatoire et sans soupçon des communications privées, y compris les messages protégés par un chiffrement de bout en bout.\n\nLe régime temporaire de scan volontaire (« Chat Control 1.0 ») a été réactivé le 9 juillet 2026 malgré le vote d'une majorité d'eurodéputés contre son maintien. Je vous demande de vous opposer à toute tentative de rendre ce scan permanent ou obligatoire dans les négociations en cours sur le règlement CSAR (« Chat Control 2.0 »), et de soutenir une détection ciblée et autorisée par la justice plutôt qu'une surveillance de masse de toute la population.\n\nJe vous remercie de représenter mes préoccupations.\n\nCordialement,\n[Votre nom]",
    copyBtn: "Copier le message", copiedMsg: "Copié dans le presse-papiers",
    mailtoBtn: "Ouvrir dans votre messagerie",
    howToTitle: "Comment trouver l'e-mail de votre eurodéputé",
    howToBody: "Cherchez dans l'annuaire officiel, ouvrez sa fiche, et son adresse suit le format prenom.nom@europarl.europa.eu.",
    meplookupLabel: "Rechercher sur europarl.europa.eu/meps",
    haveYourSayTitle: "Vous préférez un canal officiel ?",
    haveYourSayBody: "Have Your Say est la plateforme de la Commission européenne pour les retours du public sur les textes en cours d'élaboration — le canal que Europe Direct recommande lui-même aux citoyens pour faire connaître leurs positions politiques sur les sujets européens.",
    haveYourSayLabel: "Ouvrir Have Your Say"
  },
  apps: {
    useTitle: "Applications recommandées",
    avoidTitle: "Applications à éviter",
    intro: "Un annuaire de référence rapide, classé par catégorie. Voir les niveaux à gauche pour le raisonnement détaillé derrière chaque choix.",
    categories: { messaging: "Messagerie", cloud: "Stockage cloud", browser: "Navigateur", mobileos: "Système mobile", vpn: "VPN", dns: "DNS", appstore: "Magasin d'applications", email: "E-mail" },
    use: [
      { cat: "messaging", name: "Signal", note: "Choix par défaut : open-source, chiffré de bout en bout, métadonnées minimales." },
      { cat: "messaging", name: "Session", note: "Aucun numéro de téléphone requis, routage décentralisé." },
      { cat: "messaging", name: "Element / Matrix", note: "Fédéré, auto-hébergeable, chiffré via Olm/Megolm." },
      { cat: "cloud", name: "Proton Drive", note: "Chiffrement de bout en bout « zero-knowledge », juridiction suisse." },
      { cat: "cloud", name: "Nextcloud (auto-hébergé)", note: "Vous contrôlez le serveur et les clés de chiffrement." },
      { cat: "browser", name: "Mullvad Browser", note: "Développé avec le Projet Tor ; résiste au fingerprinting." },
      { cat: "browser", name: "Firefox (durci)", note: "Open-source, configurable, sans lien de compte forcé." },
      { cat: "mobileos", name: "GrapheneOS", note: "Dé-googlisé, fork AOSP durci, appareils Pixel uniquement." },
      { cat: "mobileos", name: "CalyxOS", note: "Alternative dé-googlisée avec un support d'appareils plus large." },
      { cat: "vpn", name: "Mullvad VPN", note: "Comptes anonymes, audité de façon indépendante, WireGuard." },
      { cat: "vpn", name: "IVPN", note: "Aucun e-mail requis à l'inscription, politique stricte sans journaux, audité." },
      { cat: "dns", name: "Quad9", note: "Bloque les domaines malveillants connus, sans journalisation des requêtes." },
      { cat: "dns", name: "NextDNS (auto-configuré)", note: "Filtrage personnalisé avec des journaux que vous seul contrôlez." },
      { cat: "appstore", name: "F-Droid", note: "Catalogue exclusivement FOSS, builds reproductibles." },
      { cat: "appstore", name: "Accrescent", note: "Magasin axé sécurité, permissions minimales par défaut." },
      { cat: "email", name: "Proton Mail", note: "Chiffré de bout en bout par défaut, juridiction suisse." },
      { cat: "email", name: "Tuta (Tutanota)", note: "Chiffré de bout en bout par défaut, clients entièrement open-source." }
    ],
    avoid: [
      { cat: "messaging", name: "WhatsApp", note: "Propriété de Meta ; concerné par le scan volontaire de Chat Control 1.0." },
      { cat: "messaging", name: "Facebook Messenger", note: "Même exposition au scan volontaire que WhatsApp." },
      { cat: "messaging", name: "SMS / RCS (par défaut)", note: "Visible par l'opérateur, sans chiffrement de bout en bout." },
      { cat: "messaging", name: "Telegram (discussions cloud)", note: "Non chiffré de bout en bout par défaut ; les discussions secrètes manquent de synchronisation." },
      { cat: "cloud", name: "iCloud (sauvegarde par défaut)", note: "Conserve une copie des clés de message sauf si la Protection avancée des données est activée." },
      { cat: "cloud", name: "Google Drive (par défaut)", note: "Scanné côté serveur ; non chiffré de bout en bout." },
      { cat: "cloud", name: "OneDrive (grand public, par défaut)", note: "Même exposition au scan côté serveur." },
      { cat: "browser", name: "Chrome (connecté)", note: "Lie l'activité de navigation à un compte identifié." },
      { cat: "browser", name: "Edge (par défaut)", note: "Télémétrie importante liée à un compte Microsoft." },
      { cat: "mobileos", name: "Android grand public + Play Services", note: "Peut recevoir silencieusement des modules de scan ou de télémétrie." },
      { cat: "mobileos", name: "iOS (pour un usage à haut risque)", note: "Couche système à code fermé, contrôle utilisateur limité." },
      { cat: "vpn", name: "VPN gratuits / non audités", note: "Promesses « sans journaux » invérifiables ; certains monétisent les données à la place." },
      { cat: "dns", name: "DNS par défaut du FAI", note: "Historique des requêtes visible par votre FAI, parfois revendu." },
      { cat: "appstore", name: "Play Store / App Store (outils sensibles)", note: "La distribution peut être surveillée, restreinte ou modifiée." },
      { cat: "email", name: "Gmail", note: "Scanné par conception à des fins publicitaires et de détection d'abus." },
      { cat: "email", name: "Outlook.com (offre gratuite)", note: "Exposition au scan côté serveur similaire à Gmail." }
    ]
  },
  footer: { text: "Dossier de sensibilisation technique et civique — dernière vérification le 10 juillet 2026. Diffusé sous licence Creative Commons CC BY 4.0. Ceci ne constitue pas un conseil juridique." }
};
