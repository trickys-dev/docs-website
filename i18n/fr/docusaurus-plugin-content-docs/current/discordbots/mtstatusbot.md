---
sidebar_position: 3
description: Informations sur le bot SWStatus
---

# Status Du Bots Dans Stormworks

<span class="request-bubble request-get">BETA</span>
<br/>
<br/>
Cette page explique comment utiliser et configurer le Bot ScamWatch.

## Que Peut Faire Le Bot

En bref, le bot peut faire ce qui suit ;
- Obtenir le statut du serveur Stormworks.
- Obtenir le nombre de joueurs pour les serveurs.
- Obtenez le nombre total de joueurs qui jouent à stormworks.
- Synchroniser dans le jeu avec le discord. (chats, rejoint & feuilles) - [ChatLogger](/discordbots/mtstatusbot#chat-logger)

## Configuration Rapide

<span class="statusbot-title">Étape 1.</span> <a href="#">Invitez</a> le bot sur votre serveur.<br/><br/>

<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot1.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 2.</span> - utilisez la commande <span class="code-text">/mt servers add <code>server :<span class="discord-text">server-name</span></code> </span>
et sélectionnez un serveur dans la liste.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot2.png" width="300px" />
  <p class="m-0">
 <span class="statusbot-title">Channel</span> - Le canal que le bot utilisera pour les logs.<br/>
  Pour définir le canal : <span class="code-text">/mt channel <code>channel:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>

## Configuration du Bot

:::caution Permissions par Défaut

Ces commandes par défaut ne seront accessibles que par les utilisateurs ayant la permission d'administrateur.

:::

### Titre
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbottitle.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - Le titre de l’embed.<br/>
  Pour définir le titre : <span class="code-text">/mt embed titre<code>titre :<span class="discord-text">title-ici</span></code></span>
  </p>
 </div>

### Couleur
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotcolour.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - Le titre de l’embed.<br/>
  Pour définir le titre : <span class="code-text">/mt embed titre<code>titre :<span class="discord-text">title-ici</span></code></span>
  </p>
 </div>

### Définir la chaine

 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot2.png" width="300px" />
  <p class="m-0">
 <span class="statusbot-title">Channel</span> - Le canal que le bot utilisera pour les logs.<br/>
  Pour définir le canal : <span class="code-text">/config logchannel<code> <span class="discord-text">#channel</span>
  </p>
 </div>

### Information du Type de Set
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotinfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Set Embed Info</span> - Icône, Joueurs Globaux, Logo du Jeu dans le Titre.<br/>
  Pour afficher les paramètres d'intégration : <span class="code-text">/mt info</span>
  </p>
 </div>

<div class="flex-vcenter mb-1">
  <img src="/img/mtstatusbot/mtstatusbotinfotypes.png" width="300px" />

  <span class="ml-1" >

| Non. | Type d'info | Description |
|-----|--------------------------------------------|
| 1 | joueurs | Affiche le nombre de joueurs en ligne.                |
| 2 | GlobalPlayers | Affiche le nombre de joueurs dans stormworks.  |
| 3 | Logo du jeu dans le titre | Montre le titre en intégré.                      | </span>
 </div>

### Gérer les Serveurs
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotaddserver.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - Le titre de l’embed.<br/>
  Pour définir le titre : <span class="code-text">/mt embed titre<code>titre :<span class="discord-text">title-ici</span></code></span>
 </div>

### Gérer les Serveurs
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotaddserver.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - Le titre de l’embed.<br/>
  Pour définir le titre : <span class="code-text">/mt embed titre<code>titre :<span class="discord-text">title-ici</span></code></span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotremoveserver.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Supprimer le serveur</span> - Supprimer un serveur de l’embed.<br/>
  Pour supprimer une utilisation du serveur : <span class="code-text">/mt serveurs enlèvent <code>displayedserver :<span class="discord-text">nom du serveur</span></code></span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotlistservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Liste des serveurs</span> - Affiche les serveurs actuels sur embed.<br/>
  Pour afficher les serveurs actuels utiliser : <span class="code-text">liste /mt serveurs</span>
  </p>
 </div>

## Journal de chat

:::caution Propriétaires du serveur

Vous devez posséder un serveur MT & être [Vérifié](/discord/verified) pour avoir accès à l'enregistreur de chat. Si vous êtes propriétaire du serveur MT, alors <a href="discord://discord.com/channels/710922135580835950/846373509470748722" class="discord-text">#soumettre un ticket</a> sur discord demandant l'accès à l'enregistreur de chat MT.

:::

### Jeton

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbottoken.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 1. </span> - Obtenir le jeton.<br/>
  Pour obtenir le jeton, utilisez : <span class="code-text">/chatlogger viewtokens</span>, gardez ceci comme vous en aurez besoin plus tard.
  </p>
 </div>

<span class="statusbot-title">Étape 2.</span> Téléchargez l'enregistreur de chat qui sera fourni lorsque vous nous contactez.<br/><br/>
  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotrootfolder.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 3.</span> - Placez le logger de chat à l'intérieur du dossier MT serveur racine<br/>
  </p>
 </div>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotconfigfile.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 4.</span> - Lancer le logger de chat pour générer le fichier <code>config.json</code>.<br/>
  </p>
 </div>

### Fichier de configuration
```json
{
    "_token": "Entrez le jeton du bot discord ci-dessous",
    "token": "",

    "_serverPath": "Entrez le chemin vers le dossier racine du serveur ci-dessous (laissez vide si le exe est dans le dossier racine)",
    "serverPath": "",

    "_createStartBat": "Quand vrai un démarrage. au fichier sera créé qui démarrera ce script et le serveur MT",
    "createStartBat": false
}
```
<span class="statusbot-title">Étape 5.</span> - configurer le <code>config.json</code> fichier.<br/>
1. Placez votre jeton <code></code> dans le champ de jeton.<br/>
2. Laissez le <code>serverPath</code> vide si vous avez placé le chatlogger dans le dossier racine.<br/>
3. (optionnel) Set <code>createStartBat</code> à "true" ce qui va crée un fichier batch et qui va démarrer le serveur MT ainsi que l'enregistreur de chat en même temps.<br/><br/>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotchatloggerconsole1.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 6.</span> - Lancer le logger de chat qui devrait maintenant ouvrir une fenêtre de console et vous devriez voir un <span class="code-text">Succès !</span> , si vous ne voyez pas les <a href="/discordbots/mtstatusbot#errors--warnings">Erreurs & Avertissements</a> ci-dessous.<br/>
  </p>
 </div>

### Webhooks

<span class="statusbot-title">Étape 7.</span> Il est maintenant temps de lier un jeton à un canal. 2 options sont possibles<br/>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotwebhookop1.png" width="450px" />
  <p class="m-0">
  <span class="statusbot-title">Option 1 (<span class="statusbot-title">Recommandée</span>).</span> - Générer automatiquement le webhook par canal.<br/>
  <span class="statusbot-title">jeton</span> - Sélectionnez un jeton.<br/>
  <span class="statusbot-title">Canal</span> - Où envoyer les messages en jeu.<br/>
  <span class="statusbot-title">webhookname</span> - (facultatif) Définit le nom d'affichage du webhook.<br/>
  </p>
 </div>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotwebhookop2.png" width="450px" />
  <p class="m-0">
  <span class="statusbot-title">Option 2.</span> - Donner des URL de webhook existantes.
  </p>
 </div>

### Erreurs & avertissements

| Message                                                                                                | Descriptions                                                                                                                  |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| <span class="update-removed">No token found!</span>                                                    | Le jeton n'est pas spécifié dans le fichier [config.json](/discordbots/mtstatusbot#config-file).                              |
| <span class="update-removed">Invalid token!</span>                                                     | Le jeton n'est pas vaild, copiez le jeton [valide](/discordbots/mtstatusbot#token) depuis le bot.                             |
| <span class="update-removed">Config file is not valid JSON!</span>                                     | [le fichier config.json](/discordbots/mtstatusbot#config-file) est un asdasds invalide                                        |
| <span class="update-removed">No valid motortown server path found!</span>                              | Chatlogger n'est pas dans le dossier racine ou [le dossier spécifié](/discordbots/mtstatusbot#config-file) n'est pas correct. |
| <span class="update-removed">Error connecting to API!</span>                                           | Le script ne peut pas se connecter à notre API. <a href="discord://discord.com/channels/710922135580835950/846373509470748722" class="discord-text">#submit a ticket</a> pour obtenir de l'aide.                              |
| <span class="update-removed">Unable to attach to server!</span>                                        | Le script ne peut pas lire les fichiers.                                                                                      |
| <span class="update-removed">Your version of the logger is too old!</span>                             | La journalisation du chat est obsolète.                                                                                       |
| <span class="update-removed">Asset files not found!</span>                                             | L'enregistreur de chat est corrompu, re-télécharger.                                                                          |
| <span class="update-updated">New version available! </span>                                            | Nouvelle version disponible en téléchargement.                                                                                |
| <span class="update-updated">You didn't use the start.bat file and it is enabled in the config!</span> | <code>createStartBat</code> activé dans [config.json](/discordbots/mtstatusbot#config-file), mais n'a pas été utilisé.          |

## Permissions du bot
Voici les permissions du bot:

- Lire les messages/Voir les canaux - Nécessaire pour lire les messages & voir les canaux sur le serveur.
- Envoyer les messages - Nécessaire pour Envoyer les messages dans le serveur.
- Lire les messages - Nécessaire pour lire les messages dans le serveur.
- Gérer les Webhooks - Nécessaire de créer un webhook pour [ChatLogger](/discordbots/mtstatusbot#chat-logger).