---
sidebar_position: 2
description: Information du Bot ScamWatch
---

# Bot ScamWatch

Cette page explique comment utiliser et configurer le Bot ScamWatch.

## Que Peut Faire le Bot

En bref, le bot peut faire ce qui suit ;
- Détecte les liens d'escroquerie de notre base de données de plus de 31 000 et les supprime du chat.
- Enregistre les liens supprimés dans un canal pour que le personnel puisse voir et/ou prendre des mesures sur l'utilisateur (boutons pour retirer le délai, expulser, bannir).
- Délai d'expiration automatique, qui peut être défini dans la configuration. (si un utilisateur publie un lien d'escroquerie le bot mettra ce dernier hors service pour x nombre de jours)

## Configuration Rapide

1. <a href="">Invitez</a> le bot sur votre serveur.
2. Utilisez la commande <span class="code-text">/quicksetup</span> dans un canal d'administration que le bot peut également voir.

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqswelcome.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Welcome</span> - Bienvenue dans le guide de configuration rapide.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 1.</span> - Sélectionnez les boutons que vous voulez voir sous les embeds<br/>
  <span class="statusbot-title">new</span> - tapez <span class="code-text">new</span> et le bot va créer un canal appelé <span class="discord-text">#scam-log</span>.<br/>
  <span class="statusbot-title"># Symbole</span> - tapez <span class="discord-text">#channelname</span> si vous avez déjà un canal.
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 2.</span> - Sélectionnez les boutons que vous voulez voir sous les embeds.<br/>
  <span class="statusbot-title">None Button</span> - Si vous appuyez sur le bouton "None" il n'y aura pas de bouton sous les embeds.<br/>
  <span class="statusbot-title">Select Buttons</span> - Appuyer sur le menu des boutons va vous montrer une liste, choisit les boutons que vous voulez voir sous les embeds.
  </p>
 </div>

:::note

Si vous aviez choisi "None" dans l'étape 2, vous pouviez sauter l'étape 2.1
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 2.1</span> - Choisissez un rôle qui sera nécessaire pour utiliser les boutons.<br/>
  <span class="statusbot-title">None</span> - Si vous appuyez sur <span class="code-text">none</span> tous qui ont accès au canal journal peuvent utiliser les boutons.<br/>
  <span class="statusbot-title">Roles</span> - Quand vous ajoutez un rôle juste @ le rôle, example @Moderator.
  </p>
 </div>

:::
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqspingrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Étape 3</span> - Choisissez les rôles qui seront notifiés quand un lien d'arnaque est détecté.
<br/>
  <span class="statusbot-title">None</span> - Si vous appuyez sur le bouton <span class="code-text">none</span> il n'aura pas de rôle notifié des liens d'arnaque.<br/>
  <span class="statusbot-title">Rôles</span> - Quand vous ajoutez un rôle juste @ le rôle, exemple @Moderator.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqscomplete.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Complete </span> - Complète la configuration.
  </p>
 </div>

:::tip Nécessaire

Assurez-vous que le Bot a un rôle plus élevé que les autres membres de votre serveur!

:::

## Configuration du Bot

:::caution Permissions par Défaut

Ces commandes par défaut ne seront accessibles que par les utilisateurs ayant la permission d'administrateur.

:::

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configlogchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Channel</span> - Le canal que le bot utilisera pour les logs.<br/>
  Pour définir le canal : <span class="code-text">/config logchannel</span> <span class="discord-text">#channel</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configstaffrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Rôle du personnel</span> - Définit le rôle du personnel que vous voulez être pointé si le détecte un lien d'arnaque.<br/>
  Pour définir le rôle : <span class="code-text">/config staffrole</span> <span class="discord-text">@role</span>

  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configpingstaff.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Personnel de ping</span> - Activer ou désactiver le ping du personnel.<br/>
  Pour définir le rôle : <span class="code-text">/config pingstaff True/False</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configautotimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Définit l'heure à laquelle un utilisateur sera expiré en jours.<br/>
  <span class="statusbot-title">Activer</span> - Activer ou désactiver le délai d'expiration automatique.<br/>
  Pour définir ceci: <span class="code-text">/config autotimeout Vrai / Faux jours</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonskick.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Définit l'heure à laquelle un utilisateur sera expiré en jours.<br/>
  <span class="statusbot-title">Activer</span> - Activer ou désactiver le délai d'expiration automatique.<br/>
  Pour définir ceci: <span class="code-text">/config autotimeout Vrai / Faux jours</span>  <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsban.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Définit l'heure à laquelle un utilisateur sera expiré en jours.<br/>
  <span class="statusbot-title">Activer</span> - Activer ou désactiver le délai d'expiration automatique.<br/>
  Pour définir ceci: <span class="code-text">/config autotimeout Vrai / Faux jours</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsuntimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Définit l'heure à laquelle un utilisateur sera expiré en jours.<br/>
  <span class="statusbot-title">Activer</span> - Activer ou désactiver le délai d'expiration automatique.<br/>
  Pour définir ceci: <span class="code-text">/config autotimeout Vrai / Faux jours</span>
  </p>
 </div>

## Exemples

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetected.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Côté utilisateur</span> - Ceci affichera dans le canal où un lien d'arnaque est affiché. (l'embed se retirera dans 30 secondes).
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedlog.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Logs Channel</span> - Ceci sera affiché dans le salon de log pour les administrateurs/employés.<br/>
1. Si vous avez activé le ''ping'' d'un rôle, c'est là qu'il s'affichera.<br/>
2. Ceci montre l'utilisateur qui a envoyé le lien d'arnaque<br/>
3. Ceci montre le lien de l'arnaque lui-même.<br/>
4. Si vous avez activé le ''ping'' d'un rôle, c'est là qu'il s'affichera.<br/>
5. Si vous avez activé le ''ping'' d'un rôle, c'est là qu'il s'affichera.<br/>
6. Si vous avez activé le ''ping'' d'un rôle, c'est là qu'il s'affichera.<br/>
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedaction.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Logs Channel</span> - Ceci sera affiché dans le salon de log pour les administrateurs/employés.<br/>
1. Ceci montre quelles mesures ont été prises.<br/>
2. Ceci montre le membre du staff qui a pris les mesures.<br/>
3. Une fois une action effectuée, vous ne pouvez pas faire une autre action, les boutons seront désactivés.<br/>
  </p>
</div>

## Permissions du bot
Voici les permissions du bot:

- Lire les messages - Nécessaire pour lire les messages dans le serveur.
- Envoyer les messages - Nécessaire pour Envoyer les messages dans le serveur.
- Expulser les membres - Nécessaire d'expulser les membres lorsque vous cliquez sur un bouton (Lire la configuration du bot).
- Expulser les membres - Nécessaire d'expulser les membres lorsque vous cliquez sur un bouton (Lire la configuration du bot).
- Membres modérés - Nécessaire pour envoyer des messages sur le serveur.
- Gérer les messages - Nécessaire pour envoyer & supprimer son propre message dans le canal spécifié.
- Gérer les canaux - Nécessaire pour créer un nouveau canal pour les journaux (uniquement à l'installation).
- Lire les messages - Nécessaire pour lire les messages dans le serveur.
- Voir le canal - Nécessaire pour voir (voir) les canaux.