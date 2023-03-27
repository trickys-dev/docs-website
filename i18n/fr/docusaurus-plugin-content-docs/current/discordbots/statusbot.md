---
sidebar_position: 1
---

# Status Du Bots Dans Stormworks

Cette page explique comment utiliser et configurer le Stormworks Status Bot.

## Que Peut Faire Le Bot

En bref, le bot peut faire ce qui suit ;

- Obtenir le statut du serveur Stormworks et les différents types de statistiques.
- Obtenez le nombre total de joueurs qui jouent à stormworks.
- Afficher lorsque le serveur n'est plus à jour.
- Afficher lorsque le serveur est hors ligne.
- Permet aux utilisateurs de ping un serveur à partir de plus de 15 emplacements différents dans le monde.
- Envoie un DM lorsqu'un serveur est déconnecté. (quand activé)
- Envoie un DM lorsqu'un serveur n'est plus à jour. (quand activé)

## Pour Commencer
1. Pour commencer, <a href="https://discord.com/oauth2/authorize?client_id=807750726205702176&scope=bot&permissions=388160">invitez</a> le bot sur votre serveur.
2. Créez un canal <code class="discord-text">#server-status</code> ou tout autre canal que vous voulez appeler le canal, c'est là que le bot placera l'embed pour afficher le statut du serveur.
3. Utilisez la commande <span class="code-text">/config servers</span> pour définir les serveurs que vous souhaitez afficher.
4. Une fois que vous avez créé le canal, demander au bot d'utiliser le canal pour afficher le statut en utilisant :<br/><span class="code-text">/config channel <code>channel :&lt;span class="discord-text">#server-status&lt;/span></code></span>

## Configuration du Bot

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Channel</span> - The channel which the status embed will be sent and updated<br/>
  To set the channel: <span class="code-text">/config channel <code>channel:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Serveurs</span> - La liste de serveurs à ajouter ou à supprimer de l'embed<br/>
  Ajouter ou supprimer des serveurs : <span class="code-text">/config serveurs</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfiginfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Info</span> - Quelles informations de serveur afficher dans le statut de chaque serveur.<br/>
  Pour ajouter ou supprimer des infos : <span class="code-text">/config info</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigembed.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - The title of the embed.<br/>
  <span class="statusbot-title">Color</span> - The color of the embed in hex.<br/>
  To set the title or color: <span class="code-text">/config embed</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigadminrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Rôle d'administrateur</span> - Les utilisateurs avec ce rôle peuvent configurer le bot <span class="text-muted">(S'il n'y a pas de valeur, seuls les utilisateurs ayant les droits d'administrateur peuvent modifier le bot).</span><br/>
  Pour définir le rôle admin : <span class="code-text">/config adminrole <code>rôle :<span class="discord-text">@role</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigpinging.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">DM hors-ligne</span> - Rôle d'administration de DM si un serveur listé est détecté pour être hors ligne.<br/>
  <span class="statusbot-title">DM obsolète</span> - Will DM le rôle administrateur si un serveur listé est détecté comme obsolète.<br/>
  Définir les paramètres de DM : <span class="code-text">/config pinging</span>
  </p>
 </div>

## Type d'informations

Les types d'informations sont gérés par la commande <span class="code-text">/config info</span>.
<div class="flex-vcenter mb-1">
  <p>

| No. | Type d'info | Description |
|-----|--------------------------------------------|
| 1 | joueurs | Affiche le nombre de joueurs en ligne.             |
| 2 | version | Affiche la version du serveur.                  |
| 3 | TPS | Montre les serveurs TPS.                     |
| 4 | DLC | Montre Si armes ou DLC aride.              |
| 5 | uptime | Affiche la durée de disponibilité du serveur.            |
| 6 | système d'opération | Affiche le système d'exploitation des serveurs.        |
| 7   | hasPassword     | Shows if the server is password protected. |
| 8   | owner           | Shows the owner of the server.             |
| 9   | serverLocation  | Shows the server location.                 |
| 10  | responseTimeMs  | Shows the response time (Ms).              |
| 11  | globalPlayers   | Shows the number of players on stormworks. |
| 12  | logo            | Shows the server logo in the embed.        |

  </p>
  <span class="ml-1" >
    <img src="/img/statusbot/serverstatusinfotype1.png" />
  </span>
 </div>

## Server Out Of Date

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swoutofdatemsg.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Serveur obsolète</span><br/>
  Si votre serveur est dépassé, le statut intégré ressemblera à ceci, Vous obtiendrez également un DM s'ils sont activés comme indiqué dans l'exemple d'alerte intégrée.
  </p>
 </div>

## Latence

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swglobalping.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">PING</span> - Récupère le ping d'un serveur du monde entier.<br/>
    Tous les utilisateurs peuvent utiliser la commande <span class="code-text">/ping</span>.
  </p>
 </div>

   <img src="/img/statusbot/swglobalpinginfo.png" />

## Permissions du bot
Voici les permissions du bot:

- Lire les messages - Nécessaire pour lire les messages dans le serveur.
- Envoyer les messages - Nécessaire pour Envoyer les messages dans le serveur.
- Gérer les messages - Nécessaire pour envoyer & supprimer son propre message dans le canal spécifié.
- Intégrer des liens (Embed Links) - Nécessaire pour intégrer des liens dans le statut intégré.
- Joindre des fichiers - Nécessaire pour attacher des fichiers au statut intégré.
- Lire les messages - Nécessaire pour lire les messages dans le serveur.
- Utilisez des émojis externes - Nécessaires pour accéder aux émojis utilisés dans le statut intégré (embed).
- Ajouter des réactions - Nécessaire car nous pourrions implémenter quelque chose dans le futur.
- Voir le canal - Nécessaire pour voir (voir) les canaux.
