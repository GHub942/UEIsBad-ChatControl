# 🛡️ Protection de la Vie Privée & Contre Chat Control

Bienvenue sur ce dépôt ! L'objectif de ce projet est de centraliser les informations essentielles sur le projet de règlement européen **Chat Control**, de suivre son évolution politique, et surtout de fournir des solutions concrètes pour protéger votre vie privée et vos correspondances numériques.

---

## 🧐 Qu'est-ce que "Chat Control" ?

**Chat Control** (officiellement proposé sous le nom de règlement visant à prévenir et à combattre les abus sexuels sur les enfants - CSAM) est un projet de législation de la Commission européenne. 

Sous couvert d'une intention louable (la protection des mineurs), ce texte propose de contraindre les fournisseurs de services de messagerie (Signal, WhatsApp, Proton, etc.) à **analyser massivement et de manière automatisée** les messages, images et conversations de *tous* les citoyens, avant même qu'ils ne soient chiffrés.

### Pourquoi est-ce dangereux ?
* **Fin du chiffrement de bout en bout :** Introduire une méthode de scan avant envoi (Client-Side Scanning) brise l'essence même de la confidentialité.
* **Surveillance de masse :** Cela transforme chaque smartphone en un outil de surveillance étatique.
* **Faux positifs :** Les algorithmes d'IA ne sont pas infaillibles. Des photos de famille légitimes ou des discussions privées peuvent être signalées par erreur à des autorités.

---

## 📊 Statut Actuel & Historique des Refus

Le texte fait face à une résistance historique et n'est toujours pas adopté grâce à la mobilisation des citoyens, des ONG (comme la Quadrature du Net ou d'Europe v. Censorship) et de certains États membres.

| Date | Événement / Statut | Résultat |
| :--- | :--- | :--- |
| **2022** | Proposition initiale de la Commission européenne. | Levée de boucliers immédiate des experts en cybersécurité. |
| **2023 - 2024** | Multiples tentatives de vote au Conseil de l'UE. | **Bloqué.** Une minorité de blocage (menée notamment par l'Allemagne, l'Autriche, la Pologne) refuse de céder sur le chiffrement. |
| **Fin 2024 - 2025** | Tentative de compromis ("Modération de détection"). | **Refusé.** Les parlements et les citoyens dénoncent un simple changement de nom pour une technologie tout aussi intrusive. |
| **Actuel (2026)** | **En suspens / Négociations bloquées** | Le texte est régulièrement remis sur la table avec de légères modifications cosmétiques, mais l'absence de majorité qualifiée au Conseil maintient le projet dans l'impasse. |

> ⚠️ **Restons vigilants :** Même si le texte est repoussé à de nombreuses reprises, il n'est pas définitivement enterré. Les gouvernements pro-Chat Control tentent régulièrement de le faire passer en douce lors des réunions du Conseil.

---

## 💡 Astuces pour Protéger sa Vie Privée

Face aux menaces de surveillance globale, voici les bonnes pratiques et outils à adopter dès aujourd'hui.

### 1. Choisir les bonnes messageries
Évitez les applications centralisées qui collaborent facilement ou qui ne chiffrent pas par défaut (comme les SMS classiques ou Messenger).
* **[Signal](https://signal.org/) :** La référence absolue. Open-source, chiffrée de bout en bout, et l'organisation ne stocke aucune métadonnée. Ses dirigeants ont affirmé qu'ils quitteraient l'UE plutôt que d'appliquer Chat Control.
* **[Session](https://getsession.org/) :** Une messagerie décentralisée qui ne nécessite ni numéro de téléphone ni adresse email pour s'inscrire. Idéal pour l'anonymat.
* **[Matrix](https://matrix.org/) (via l'application Element) :** Un protocole open-source et décentralisé, parfait pour créer vos propres serveurs de communication.

### 2. Protéger son système d'exploitation
Le chiffrement de vos messages ne sert à rien si le système d'exploitation de votre téléphone est compromis ou s'il intègre des outils de scan natifs.
* **GrapheneOS / CalyxOS :** Si vous utilisez un smartphone Android (notamment les Google Pixel), installez un système d'exploitation libre, axé sur la sécurité et débarrassé des trackers de Google.
* **Désactiver les sauvegardes Cloud non chiffrées :** Sur iOS (iCloud) et Android (Google Drive), assurez-vous d'activer le chiffrement de bout en bout pour vos sauvegardes (comme la *Protection avancée des données* sur iOS), sinon vos historiques de messages y seront lisibles.

### 3. Utiliser un DNS sécurisé et un VPN
* Chiffrez vos requêtes DNS pour éviter que votre fournisseur d'accès à Internet (FAI) ne voie quels sites vous visitez. Utilisez des résolveurs comme **Quad9** (9.9.9.9) ou **Mullvad DNS**.
* Utilisez un VPN de confiance (comme **Mullvad** ou **ProtonVPN**) qui applique une politique stricte de non-conservation des journaux (*No-Log*).

---

## 🤝 Comment contribuer ?

Vous souhaitez ajouter une astuce, mettre à jour le statut législatif ou corriger une information ? Les contributions sont les bienvenues !
1. Forkez le projet.
2. Créez une branche (`git checkout -b feature/AjoutAstuce`).
3. Ouvrez une Pull Request.

---

## 🌍 Ressources utiles
* [La Quadrature du Net](https://www.laquadrature.net/) (France)
* [EFF (Electronic Frontier Foundation)](https://www.eff.org/) (International)
* [ChatControl.eu](https://chatcontrol.eu/) (Suivi de la législation)
