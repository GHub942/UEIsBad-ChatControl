window.I18N = window.I18N || {};
window.I18N.it = {
  nav: { home: "Home", status: "Stato legale", dossier: "Dossier tecnico", protection: "Manuale di protezione", act: "Passa all'azione" },
  brand: { title: "Dossier Chat Control", stamp: "IN DIRETTA" },
  home: {
    eyebrow: "Aggiornamento — 10 luglio 2026",
    h1: "Chat Control è di nuovo in vigore",
    lead: "Il 9 luglio 2026 sono mancati 47 voti al Parlamento europeo per bloccare il ritorno della scansione di massa e senza sospetto dei messaggi privati. Ecco esattamente cosa è cambiato, cosa no, e cosa potete ancora fare.",
    ctaAct: "Passa all'azione",
    ctaStatus: "Leggi lo stato legale completo",
    score: {
      title: "Voto in plenaria del Parlamento europeo — 9 luglio 2026",
      date: "720 seggi · 607 voti espressi",
      needLabel: "Soglia per bloccare (maggioranza assoluta)",
      rejectLabel: "Hanno votato per respingere il ripristino",
      keepLabel: "Hanno votato contro il respingimento",
      note: "Poiché il ripristino è passato attraverso una procedura di seconda lettura, per bloccarlo serviva una <strong>maggioranza assoluta di 361</strong> eurodeputati. Solo <strong>314</strong> hanno votato per respingerlo — 47 voti in meno. Il regime è ripristinato fino al <strong>3 aprile 2028</strong>."
    },
    summary: {
      title: "Cosa è realmente successo, in tre punti",
      s1t: "1 — «Chat Control 1.0» è tornato",
      s1b: "La deroga volontaria alla direttiva ePrivacy (Regolamento 2021/1232), che consente a piattaforme come Meta, Google, Microsoft e Snap di scansionare i messaggi privati alla ricerca di materiale CSAM già noto, era scaduta il 4 aprile 2026 dopo il rifiuto del Parlamento di prorogarla — per poi essere resuscitata tramite una procedura d'urgenza e ripristinata il 9 luglio 2026, valida fino al 3 aprile 2028.",
      s2t: "2 — «Chat Control 2.0» NON è stato approvato",
      s2b: "Il regolamento permanente sugli abusi sessuali sui minori (CSAR) — il testo che renderebbe obbligatoria la scansione estendendola anche alle app con cifratura end-to-end come Signal o WhatsApp — resta bloccato in trilogo dopo cinque cicli di negoziato. Al 10 luglio 2026 non esiste alcun accordo sulla scansione obbligatoria lato client.",
      s3t: "3 — Perché tante persone dicono che «è passato»",
      s3b: "I due dossier condividono un nome e un tema, e riaccendono la stessa paura: i propri messaggi privati letti da un algoritmo. Ma solo il binario temporaneo e volontario è stato ripristinato questo mese. Il binario permanente e obbligatorio resta bloccato — per ora."
    },
    cards: {
      title: "Esplora il dossier",
      c1tag: "01 · Stato legale", c1title: "Cronologia e i due binari spiegati", c1body: "Ogni voto, stallo e manovra procedurale dal 2021, con una mappa chiara di Chat Control 1.0 contro 2.0.",
      c2tag: "02 · Dossier tecnico", c2title: "Come funziona davvero la scansione", c2body: "Confronto di hash, visione artificiale, rilevamento del grooming — e le statistiche dietro i falsi positivi.",
      c3tag: "03 · Manuale di protezione", c3title: "Tre livelli di sicurezza operativa", c3body: "Dall'igiene di base alla sovranità irrobustita — strumenti concreti per ogni modello di minaccia.",
      c4tag: "04 · Passa all'azione", c4title: "Petizioni e progetti collegati", c4body: "Firma, contatta il tuo eurodeputato ed esplora la battaglia contro l'Euro Digitale su GitHub."
    },
    redact: {
      title: "Alcune cose vengono scansionate. Altre vengono oscurate.",
      l1: "Ogni messaggio che invii.",
      l2: "Ogni foto che condividi.",
      l3: "Ogni file che conservi.",
      caption: "— a meno che tu non agisca."
    },
    finalCta: {
      title: "Il regolamento permanente è ancora in negoziazione.",
      body: "Chat Control 2.0 non è stato approvato. Sarà il prossimo ciclo di trilogo a deciderne le sorti — e la pressione dell'opinione pubblica è l'unico fattore che le delegazioni del Consiglio non possono ignorare del tutto.",
      btn: "Scopri come agire"
    }
  },
  status: {
    eyebrow: "Stato legale — aggiornato al 10 luglio 2026",
    h1: "Due dossier, una sola battaglia: Chat Control 1.0 contro 2.0",
    lead: "L'UE porta avanti due processi «Chat Control» paralleli. Confonderli è esattamente ciò che alimenta l'idea errata che «sia passato». Ecco ciascuno dei due, con precisione.",
    tracks: {
      title: "I due binari spiegati",
      c1tag: "Binario 1 — Regolamento (UE) 2021/1232", c1status: "Ripristinato — in vigore fino al 3 aprile 2028",
      c1body: "Noto come «Chat Control 1.0». Una deroga temporanea alla direttiva ePrivacy che consente ai fornitori (Meta, Google, Microsoft, Snap, ecc.) di scansionare volontariamente messaggi, foto e video non cifrati confrontandoli con banche dati di hash di materiale CSAM già noto. Nessuna possibilità di opt-out per gli utenti, nessuna autorizzazione giudiziaria preventiva. È scaduto il 4 aprile 2026, è stato rilanciato dal Consiglio e ripristinato dal Parlamento il 9 luglio 2026.",
      c2tag: "Binario 2 — Regolamento CSA («CSAR»)", c2status: "Ancora in trilogo — non adottato",
      c2body: "Noto come «Chat Control 2.0». Proposto dalla Commissione l'11 maggio 2022, è il quadro permanente e obbligatorio. Nella versione redatta dal Consiglio, imporrebbe ordini di rilevamento estesi anche ai servizi cifrati end-to-end. Il Parlamento vuole invece limitare la scansione ai soggetti identificati dall'autorità giudiziaria e creare un apposito Centro europeo per la protezione dei minori. Cinque cicli di trilogo non hanno prodotto alcun accordo."
    },
    mech: {
      title: "Come ha funzionato esattamente il ripristino del 9 luglio",
      body: "Il 26 marzo 2026 il Parlamento ha rifiutato di prorogare la deroga di Chat Control 1.0, che è quindi scaduta il 4 aprile. Invece di accettare questo esito, il Consiglio si è accordato il 26 giugno per rilanciare un testo quasi identico con nuove date. Poiché il fascicolo tornava come atto di seconda lettura, per bloccarlo serviva la maggioranza assoluta di tutti i 720 eurodeputati (361 voti) — non semplicemente più «no» che «sì» tra i presenti. Il 7 luglio il Parlamento ha approvato una procedura d'urgenza (331 a 304, 11 astensioni) per forzare un voto finale prima della pausa estiva, quando molti eurodeputati avevano già lasciato Strasburgo. Il 9 luglio solo 314 eurodeputati hanno votato per respingere il ripristino — 47 voti sotto la soglia — mentre 276 hanno votato contro il respingimento e 17 si sono astenuti. Un emendamento separato che limitava la scansione ai soggetti identificati dalla magistratura ha ottenuto 322 voti, anch'esso sotto quota 361. È stata adottata un'esenzione per i servizi cifrati end-to-end, sebbene in pratica i fornitori non li scansionino comunque."
    },
    timeline: {
      title: "Cronologia completa (2021 – 2026)",
      intro: "Tutte le tappe principali della storia legislativa, entrambi i binari combinati.",
      th1: "Data", th2: "Tappa", th3: "Cosa significa", th4: "Stato",
      rows: [
        { date: "2021", title: "Adottata la deroga ePrivacy", detail: "Il regolamento (UE) 2021/1232 consente alle piattaforme di scansionare volontariamente il materiale CSAM già noto. Scadenza prevista nel 2024.", pill: "Adottato", cls: "pill-active" },
        { date: "11 maggio 2022", title: "La Commissione propone il CSAR", detail: "Il quadro permanente «Chat Control 2.0» viene presentato dalla commissaria Ylva Johansson.", pill: "Proposto", cls: "pill-pending" },
        { date: "2023", title: "Avvertimenti legali ed emendamenti del Parlamento", detail: "L'EDPB, l'EDPS e lo stesso servizio giuridico del Parlamento avvertono che il testo è incompatibile con i diritti fondamentali dell'UE; la commissione LIBE vota per escludere i servizi cifrati end-to-end da qualsiasi obbligo di scansione.", pill: "Emendato", cls: "pill-reject" },
        { date: "2024", title: "Stallo al Consiglio, due volte", detail: "Due votazioni del Consiglio non raggiungono una posizione comune; una minoranza di blocco guidata da Germania, Austria, Polonia e Paesi Bassi tiene duro. Nel frattempo la deroga ePrivacy viene prorogata fino al 3 aprile 2026.", pill: "Bloccato", cls: "pill-reject" },
        { date: "Autunno 2025", title: "La presidenza danese abbandona la scansione obbligatoria", detail: "Di fronte a una minoranza di blocco confermata, la presidenza danese del Consiglio ritira la scansione obbligatoria lato client dal tavolo e propone invece un compromesso più leggero basato sulla «mitigazione del rischio».", pill: "Ammorbidito", cls: "pill-pending" },
        { date: "Dic. 2025 – mag. 2026", title: "Quattro cicli di trilogo, nessun accordo", detail: "Parlamento, Consiglio e Commissione si incontrano quattro volte sul testo permanente del CSAR senza accordo sul punto centrale: la scansione obbligatoria dei messaggi cifrati.", pill: "Nessun accordo", cls: "pill-pending" },
        { date: "26 marzo 2026", title: "Il Parlamento rifiuta di prorogare Chat Control 1.0", detail: "Gli eurodeputati votano contro un'ulteriore proroga della deroga volontaria ePrivacy, in un voto in plenaria dall'esito incertissimo.", pill: "Respinto", cls: "pill-reject" },
        { date: "4 aprile 2026", title: "Chat Control 1.0 scade legalmente", detail: "Senza più alcuna base giuridica, Meta, Google, Microsoft e Snap annunciano pubblicamente che continueranno comunque a scansionare i messaggi privati.", pill: "Senza base giuridica", cls: "pill-pending" },
        { date: "29 giugno 2026", title: "Il quinto trilogo sul CSAR si conclude senza accordo", detail: "Il ciclo presentato come potenzialmente decisivo non produce alcun accordo; la scansione dei messaggi cifrati resta il punto di stallo.", pill: "Nessun accordo", cls: "pill-pending" },
        { date: "7–9 luglio 2026", title: "Consiglio e Parlamento resuscitano Chat Control 1.0", detail: "Il Parlamento approva una procedura d'urgenza (331–304) e, due giorni dopo, non riesce a raggiungere la maggioranza assoluta di 361 voti necessaria per bloccare il ripristino — solo 314 votano per il respingimento. Il regime è ripristinato fino al 3 aprile 2028.", pill: "In vigore", cls: "pill-active" },
        { date: "In corso", title: "I negoziati sul CSAR («Chat Control 2.0») continuano", detail: "Al 10 luglio 2026 non è fissata alcuna data di adozione per il regolamento permanente e obbligatorio.", pill: "Indeciso", cls: "pill-pending" }
      ]
    },
    confusion: {
      title: "Quindi… «Chat Control» è stato approvato?",
      body: "In parte, e temporaneamente. Ciò che è stato approvato il 9 luglio 2026 è la scansione volontaria dei messaggi non cifrati da parte delle grandi piattaforme, prorogata fino al 2028. Ciò che NON è stato approvato è il regime permanente e obbligatorio che si estenderebbe alle app cifrate — questa battaglia continua in trilogo, senza una data fissata. Trattate qualsiasi affermazione secondo cui «Chat Control è ormai pienamente legge» con la stessa cautela riservata a un titolo che afferma che una legge è «morta per sempre» — in questo dossier, nessuna delle due affermazioni è rimasta vera per più di pochi mesi alla volta."
    }
  },
  dossier: {
    eyebrow: "Dossier tecnico",
    h1: "Come funziona davvero la scansione dei messaggi",
    lead: "Qualunque sia il binario che finirà per prevalere, il meccanismo di fondo — la scansione lato client — pone lo stesso problema strutturale: ispeziona il contenuto prima che venga applicata la cifratura, o subito dopo la sua rimozione.",
    s1: {
      title: "1 — Ordini di rilevamento e la fine dell'intercettazione mirata",
      body: "A differenza di un'intercettazione giudiziaria, che richiede un sospetto individuale preventivo e l'autorizzazione di un magistrato, entrambi i binari di Chat Control si basano su «ordini di rilevamento» imposti ai fornitori di comunicazioni, applicati a intere popolazioni di utenti non sospetti anziché a individui specifici già sotto indagine."
    },
    tax: {
      title: "2 — Tre metodi di scansione, tre modalità di fallimento",
      t1title: "Confronto di hash (scansione di contenuti noti)",
      t1body: "Confronta l'impronta crittografica di un file locale con un database centralizzato di materiale CSAM noto (gestito da organismi come NCMEC o Europol). Ragionevolmente affidabile per corrispondenze esatte di file già catalogati, ma vulnerabile a collisioni di hash e all'avvelenamento del database di riferimento.",
      t2title: "Visione artificiale (scansione predittiva)",
      t2body: "Reti neurali tentano di segnalare immagini o video sconosciuti, non ancora catalogati. Privi di qualsiasi comprensione del contesto, questi classificatori scambiano regolarmente foto mediche, artistiche o familiari ordinarie per contenuti sospetti.",
      t3title: "Rilevamento del grooming tramite analisi del linguaggio",
      t3body: "Analisi continua delle conversazioni testuali per dedurre intenzioni manipolatorie o predatorie. È il metodo più invasivo per la privacy: richiede di leggere conversazioni ordinarie su vasta scala, non solo di confrontare impronte digitali."
    },
    stats: {
      title: "3 — Cosa mostrano davvero i numeri",
      fpTitle: "Il problema della saturazione dei falsi positivi",
      mathP: "Sia <span class=\"math\">F<sub>p</sub></span> il tasso di falsi positivi di un classificatore automatizzato, applicato ai miliardi di messaggi scambiati ogni giorno nell'UE.",
      fpBody: "Anche un tasso di errore molto piccolo si amplifica su scala europea. I resoconti pubblici e le verifiche della società civile sull'attuale regime volontario rilevano ripetutamente che una larga parte delle segnalazioni automatizzate — spesso citata in una forbice che va da circa la metà a una larga maggioranza, a seconda del metodo di rilevamento e della piattaforma segnalante — risulta priva di rilevanza penale dopo la verifica umana. Un dato ampiamente riportato: la grande maggioranza delle segnalazioni effettuate nell'ambito del regime volontario proveniva da un'unica azienda, e la maggior parte riguardava materiale già catalogato piuttosto che abusi appena scoperti — il che pone la domanda su quanto abuso attivo il sistema catturi davvero rispetto a quante comunicazioni ordinarie espone a un controllo.",
      sourcesNote: "I dati sopra riassumono intervalli riportati da diverse verifiche, studi parlamentari e inchieste giornalistiche del 2025-2026; le percentuali esatte variano a seconda della fonte e sono indicate come intervalli piuttosto che come statistiche precise singole. Vedi la pagina «Passa all'azione» per le fonti primarie."
    }
  },
  protection: {
    eyebrow: "Sicurezza operativa",
    h1: "Un manuale di protezione preciso",
    lead: "Tre livelli, adattati a tre modelli di minaccia — dagli utenti comuni a chi affronta una sorveglianza di livello statale.",
    A: {
      tag: "Livello A — Igiene di base", who: "Per gli utenti comuni che vogliono sottrarsi al tracciamento commerciale di basso livello e alla scansione volontaria.",
      i1title: "Messaggistica cifrata", i1body: "Abbandonate SMS, iMessage e WhatsApp/Telegram standard per le conversazioni sensibili. Usate Signal e attivate i messaggi a scomparsa (Impostazioni → Privacy → Messaggi a scomparsa) con un timer breve predefinito per limitare la cronologia conservata localmente.",
      i2title: "DNS cifrato", i2body: "Il vostro provider Internet può registrare — e talvolta manipolare — ogni dominio visitato. Configurate DNS-over-HTTPS o DNS-over-TLS con un resolver rispettoso della privacy come Quad9 (9.9.9.9 / 149.112.112.112) o i server DNS di Mullvad.",
      blTitle: "Da evitare a questo livello",
      bl: [
        { n: "SMS / RCS predefiniti", r: "Visibili all'operatore, non cifrati end-to-end e completamente fuori dal vostro controllo." },
        { n: "Backup iMessage standard", r: "Il backup iCloud conserva una copia delle chiavi dei messaggi a meno che non venga attivata manualmente la Protezione avanzata dei dati." },
        { n: "WhatsApp / Facebook Messenger", r: "Di proprietà di Meta, attualmente responsabile della grande maggioranza delle segnalazioni CSAM volontarie sotto Chat Control 1.0." },
        { n: "«Chat cloud» di Telegram (predefinite)", r: "Non cifrate end-to-end per impostazione predefinita; solo le «Chat segrete» opzionali lo sono, e mancano della sincronizzazione multi-dispositivo." },
        { n: "Gmail / webmail gratuita senza PGP", r: "Scansionata per progettazione a fini pubblicitari e di rilevamento abusi." }
      ]
    },
    B: {
      tag: "Livello B — Privacy rafforzata", who: "Per professionisti, avvocati e attivisti che necessitano di un isolamento completo dei metadati e nessun legame con l'identità civile.",
      i1title: "Messaggistica decentralizzata e priva di identificativo", i1body: "Session funziona sulla rete decentralizzata di nodi di servizio Oxen senza numero di telefono né e-mail, instradando i messaggi tramite onion routing multi-salto. Matrix (tramite il client Element) è un'alternativa federata — scegliete un homeserver fuori dalle giurisdizioni restrittive.",
      i2title: "Bonifica dell'archiviazione", i2body: "Disattivate i backup cloud automatici non cifrati end-to-end (iCloud, Google Drive) che espongono i file a scansioni remote. Trasferite i documenti su Proton Drive o su un'istanza Nextcloud auto-ospitata con cifratura lato server attivata.",
      i3title: "Tunneling di rete", i3body: "Mantenete una connessione VPN sempre attiva tramite un fornitore verificato in modo indipendente con una rigorosa politica no-log, con sede fuori da giurisdizioni collaborative — ad esempio Mullvad VPN via WireGuard, con un account anonimo che non richiede dati personali.",
      blTitle: "Da evitare a questo livello",
      bl: [
        { n: "Qualsiasi backup cloud non cifrato end-to-end (iCloud predefinito, Google Drive, OneDrive)", r: "Espone la cronologia di messaggi e foto a scansioni remote lato fornitore." },
        { n: "Messaggi diretti su Discord", r: "Non cifrati end-to-end; leggibili dalla piattaforma su richiesta." },
        { n: "Telegram, in qualsiasi modalità, per usi ad alta sensibilità", r: "Utilizza un protocollo di cifratura proprietario e non sottoposto a verifica indipendente anziché uno standard sottoposto a revisione paritaria." },
        { n: "Messaggistica legata a una SIM con nome reale", r: "Un requisito di numero di telefono annulla l'isolamento dei metadati indipendentemente dalla cifratura dell'app." }
      ]
    },
    C: {
      tag: "Livello C — Sovranità estrema", who: "Per giornalisti investigativi, dissidenti politici e whistleblower che affrontano modelli di minaccia statali o una compromissione a livello di sistema operativo.",
      i1title: "Hardware e firmware de-googlizzati", i1body: "Evitate iOS e le versioni commerciali di Android integrate con i Google Play Services, capaci di inserire in background moduli di scansione lato client. Procuratevi un dispositivo Google Pixel e installate GrapheneOS tramite il suo installer web autenticato; blocca la telemetria di rete, irrobustisce il kernel Linux contro gli exploit di memoria e isola rigorosamente le applicazioni.",
      i2title: "Instradamento globale su Tor", i2body: "Instradate il 100% del traffico del dispositivo attraverso la rete Tor usando Orbot in modalità VPN, incapsulando ogni connessione nell'onion routing così che il vostro operatore non possa analizzare i metadati di rete.",
      i3title: "Una catena di approvvigionamento software chiusa", i3body: "Disattivate completamente gli store di app commerciali. Installate e aggiornate il software solo tramite F-Droid, assicurandovi che ogni applicazione sia open source (FOSS) e priva di librerie di tracciamento.",
      blTitle: "Da evitare a questo livello",
      bl: [
        { n: "iOS o Android commerciale con Google Play Services", r: "Entrambi possono ricevere in background moduli di scansione o telemetria a livello di sistema operativo, fuori dal controllo dell'utente." },
        { n: "VPN a codice chiuso di giurisdizione o politica sui log incerta", r: "Una promessa «no-log» non verificabile è un'affermazione di marketing, non una garanzia." },
        { n: "Chrome o qualsiasi browser con sincronizzazione account attiva", r: "La sincronizzazione lega l'attività di navigazione e dei file a un account cloud legato a un'identità." },
        { n: "Store di app commerciali (Play Store / App Store) per strumenti sensibili", r: "La distribuzione può essere monitorata, limitata geograficamente o alterata a seconda della giurisdizione." },
        { n: "Backup non cifrati o ospitati da terzi di qualsiasi tipo", r: "Annulla la protezione offerta da GrapheneOS e Tor a livello di dispositivo e di rete." }
      ]
    }
  },
  act: {
    eyebrow: "Passa all'azione",
    h1: "Petizioni, contatti e progetti alleati",
    lead: "Il regolamento permanente (Chat Control 2.0) è ancora in negoziazione. Questo è esattamente il momento in cui la pressione dell'opinione pubblica conta.",
    featuredFlag: "Campagna più firmata",
    p1: { title: "«NON à la mise sur écoute de votre téléphone avec Chat Control»", meta: "Change.org · riaperta a luglio 2026 · oltre 117.000 firme nella sua prima diffusione (primavera 2026) · versioni in FR / EN / ES / DE / IT / PL", body: "Avviata da un cittadino francese, è a oggi la petizione pubblica più firmata contro Chat Control. Era stata chiusa come una «vittoria» dopo il rigetto del 26 marzo 2026, per poi essere riaperta poche ore dopo il ripristino del 9 luglio.", link: "Firma su Change.org" },
    p2: { title: "Stop Scanning Me", meta: "European Digital Rights (EDRi) · campagna a livello europeo · coalizione di oltre 50 organizzazioni della società civile · sostenuta dall'EFF", body: "La campagna più longeva e meglio collegata a livello istituzionale: le firme sono state consegnate formalmente agli eurodeputati a Bruxelles più volte dal 2023. Disponibile in inglese, tedesco, spagnolo, danese, svedese e portoghese.", link: "Firma su civicrm.edri.org" },
    p3: { title: "Fight Chat Control — contatta il tuo eurodeputato", meta: "Strumento di advocacy guidato dai cittadini · uno strumento di azione diretta, non una petizione", body: "Consulta la posizione ufficiale del tuo Paese (a favore / contrario / indeciso) e invia in pochi clic una lettera già pronta e modificabile ai tuoi eurodeputati e al tuo governo.", link: "Apri fightchatcontrol.eu" },
    p4: { title: "Non à Chat Control, outil de surveillance de masse", meta: "Assemblea nazionale (Francia) · piattaforma ufficiale · richiede 500.000 firme da oltre 30 dipartimenti per far scattare un dibattito in aula", body: "Una petizione ufficiale sulla piattaforma di petizioni dell'Assemblea nazionale francese. Raggiunta la soglia, la Conferenza dei presidenti è obbligata a valutare un dibattito pubblico.", link: "Firma su assemblee-nationale.fr" },
    gh: {
      title: "Battaglia collegata: l'Euro Digitale",
      body: "La scansione di massa delle comunicazioni non è l'unica battaglia per la sovranità digitale in corso a Bruxelles in questo momento. Un progetto open source collegato documenta i rischi dell'Euro Digitale proposto: moneta programmabile, tracciabilità delle transazioni ed erosione del contante come strumento di pagamento anonimo.",
      note: "Repository non ancora pubblicato — il link resta qui in attesa della sua pubblicazione.",
      linkLabel: "Vedi su GitHub: NoKs-Git/UEIsBad-DigitalEuro"
    },
    resources: {
      title: "Fonti primarie e approfondimenti",
      r1: "La Quadrature du Net (LQDN) — associazione francese per la difesa dei diritti digitali.",
      r2: "Patrick Breyer / chatcontrol.eu — portale di riferimento che documenta le fughe di notizie del Consiglio e i risultati delle votazioni.",
      r3: "Electronic Frontier Foundation (EFF) — riferimento internazionale per l'advocacy sulla crittografia.",
      r4: "European Digital Rights (EDRi) — rete di ONG europee per i diritti digitali.",
      r5: "fightchatcontrol.eu — cronologia, posizioni del Consiglio per Paese, strumento di contatto degli eurodeputati.",
      r6: "Wikipedia — «Chat Control» — cronologia aggiornata con citazioni delle fonti primarie."
    }
  },
  facts: {
    title: "Lo sapevi?",
    f1t: "Gli eurodeputati ne sarebbero esentati", f1b: "I resoconti sulle proposte del Consiglio hanno più volte segnalato una deroga per «segreto professionale» che proteggerebbe le comunicazioni delle stesse istituzioni europee dagli obblighi di scansione imposti a cittadini e imprese ordinarie.",
    f2t: "Apple ci aveva già provato — e ha rinunciato", f2b: "Nel 2021 Apple aveva annunciato una scansione lato client dei CSAM per iCloud Photos. Il piano è stato abbandonato nel dicembre 2022 dopo che i ricercatori di sicurezza avevano dimostrato che il sistema di confronto degli hash poteva essere ingannato e riutilizzato per altri scopi.",
    f3t: "I sopravvissuti sono tra i critici più accesi", f3b: "Associazioni come MOGiS e.V. e sopravvissuti agli abusi come Alexander Hanff sostengono che la scansione di massa da parte delle aziende non ferma gli abusi — e che mette a rischio proprio i canali di comunicazione sicuri di cui i sopravvissuti hanno bisogno.",
    f4t: "Approvato in un'aula che si svuotava", f4b: "Il voto decisivo del 9 luglio 2026 è stato programmato per l'ultima seduta del Parlamento prima della pausa estiva, dopo che una procedura d'urgenza lo aveva portato avanti con appena 48 ore di preavviso — mentre molti eurodeputati avevano già lasciato Strasburgo.",
    f5t: "In realtà una maggioranza vi si è opposta", f5b: "276 eurodeputati hanno votato per mantenere il ripristino; 314 hanno votato per respingerlo. Più eurodeputati volevano eliminarlo che mantenerlo — è sopravvissuto solo perché bloccare un atto in seconda lettura richiede la maggioranza assoluta di tutti i 720 seggi, non semplicemente la maggioranza dei voti espressi."
  },
  map: {
    title: "Come si posizionano i governi dell'UE?",
    intro: "Posizioni nei negoziati al Consiglio sul regolamento permanente (Chat Control 2.0) — l'ultima ripartizione pubblicata (maggio 2026, EDRi / Politico Europe). I governi cambiano posizione, e spesso lo fanno — verificate sempre prima di scrivere al vostro.",
    legendAgainst: "Contrario / nega il proprio consenso",
    legendFor: "Sostiene la scansione obbligatoria",
    legendUndecided: "Indeciso / si astiene",
    note: "Questo riflette le posizioni a livello di Consiglio sul testo permanente del CSAR, non il voto del Parlamento del 9 luglio, deciso dai singoli eurodeputati e non dalle delegazioni nazionali.",
    source: "Fonte: ripartizione pubblicata da EDRi e Politico Europe, maggio 2026."
  },
  countries: {
    DE:"Germania", PL:"Polonia", NL:"Paesi Bassi", AT:"Austria", FI:"Finlandia", EE:"Estonia", CZ:"Cechia",
    FR:"Francia", ES:"Spagna", IT:"Italia", IE:"Irlanda", HU:"Ungheria", CY:"Cipro", SE:"Svezia", DK:"Danimarca", HR:"Croazia",
    BE:"Belgio", LU:"Lussemburgo", SI:"Slovenia", SK:"Slovacchia", GR:"Grecia", PT:"Portogallo", RO:"Romania", BG:"Bulgaria", LT:"Lituania", LV:"Lettonia", MT:"Malta"
  },
  contact: {
    title: "Scrivi a un decisore, in un clic",
    intro: "Un messaggio già pronto, nella tua lingua. Cerca prima i tuoi eurodeputati, poi apri direttamente il tuo client di posta oppure copia il testo qui sotto.",
    subject: "Respingere il Chat Control obbligatorio — proteggere la cifratura end-to-end",
    body: "Gentile Membro del Parlamento Europeo,\n\nLe scrivo in quanto Suo elettore/Sua elettrice per chiederLe di respingere qualsiasi regolamento che imponga la scansione obbligatoria e senza sospetto delle comunicazioni private, compresi i messaggi protetti da cifratura end-to-end.\n\nIl regime temporaneo di scansione volontaria («Chat Control 1.0») è stato ripristinato il 9 luglio 2026 nonostante il voto contrario di una maggioranza di eurodeputati. Le chiedo di opporsi a qualsiasi tentativo di rendere questa scansione permanente od obbligatoria nei negoziati in corso sul regolamento CSAR («Chat Control 2.0»), e di sostenere un rilevamento mirato e autorizzato dalla magistratura anziché una sorveglianza di massa dell'intera popolazione.\n\nLa ringrazio per rappresentare le mie istanze.\n\nCordiali saluti,\n[Il Suo nome]",
    copyBtn: "Copia il messaggio", copiedMsg: "Copiato negli appunti",
    mailtoBtn: "Apri nella tua app di posta",
    howToTitle: "Come trovare l'e-mail del tuo eurodeputato",
    howToBody: "Cerca nell'elenco ufficiale, apri la sua scheda: l'indirizzo e-mail segue il formato nome.cognome@europarl.europa.eu.",
    meplookupLabel: "Cerca su europarl.europa.eu/meps",
    haveYourSayTitle: "Preferisci un canale ufficiale?",
    haveYourSayBody: "Have Your Say è la piattaforma della Commissione europea per i riscontri pubblici sulle normative in corso di elaborazione — il canale a cui Europe Direct stessa rimanda i cittadini per far conoscere le proprie posizioni politiche sui temi europei.",
    haveYourSayLabel: "Apri Have Your Say"
  },
  footer: { text: "Dossier di sensibilizzazione tecnica e civica — ultima verifica il 10 luglio 2026. Condiviso con licenza Creative Commons CC BY 4.0. Non costituisce consulenza legale." }
};
