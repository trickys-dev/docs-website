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
2. Create a <code class="discord-text">#server-status</code> channel or whatever you want to call the channel, this is where the bot will place the embed to show the server status.
3. Utilisez la commande <span class="code-text">/config servers</span> pour définir les serveurs que vous souhaitez afficher.
4. Une fois que vous avez créé le canal, demander au bot d'utiliser le canal pour afficher le statut en utilisant :<br/><span class="code-text">/config channel <code>channel :&lt;span class="discord-text">#server-status&lt;/span></code></span>

## Configuring The Bot

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
  <span class="statusbot-title">Servers</span> - The list of servers to add or remove from the embed<br/>
  To add or remove servers: <span class="code-text">/config servers</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfiginfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Info</span> - What server info to show in the status embed for each server.<br/>
  To add or remove info: <span class="code-text">/config info</span>
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
  <span class="statusbot-title">Admin Role</span> - Users with this role can configure the bot <span class="text-muted">(If there is no value, only users with the administrator permission can edit the bot).</span><br/>
  To set the admin role: <span class="code-text">/config adminrole <code>role:<span class="discord-text">@role</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigpinging.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Offline DM</span> - Will DM admin role if any listed server is detected to be offline.<br/>
  <span class="statusbot-title">Outdated DM</span> - Will DM the admin role if any listed server is detected to be out of date.<br/>
  To set DM settings: <span class="code-text">/config pinging</span>
  </p>
 </div>

## Info Types

Info types are managed by the <span class="code-text">/config info</span> command.
<div class="flex-vcenter mb-1">
  <p>

| No. | Info Type       | Description                                |
|-----|-----------------|--------------------------------------------|
| 1   | players         | Shows the online player count.             |
| 2   | version         | Shows the server version.                  |
| 3   | TPS             | Shows the servers TPS.                     |
| 4   | DLC             | Shows If Weapons or Arid DLC.              |
| 5   | uptime          | Shows the uptime of the server.            |
| 6   | operatingSystem | Shows the servers operating system.        |
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
  <span class="statusbot-title">Server Out Of Date</span><br/>
  If your server is out of date the status embed will look like this, You will also get a DM if they are enabled as shown in the alert embed example.
  </p>
 </div>

## Ping

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swglobalping.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">PING</span> - Get the ping of a server from all over the world.<br/>
    All users can use the <span class="code-text">/ping</span> command.
  </p>
 </div>

   <img src="/img/statusbot/swglobalpinginfo.png" />

## Bots Permissions
These are the bot's permissions:

- Read Messages - Needed to read messages in server.
- Send Messages - Needed to send messages in server.
- Manage Messages - Needed to send & delete its own message in the channel specified.
- Embed Links - Needed to embed links within the status embed.
- Attach Files - Needed to attach files to status embed.
- Read Message History - Needed to read message history.
- Use External Emojis - Needed to access emojis used in the status embed.
- Add Reactions - Needed as we might implement something in the future.
- View Channel - Needed to view(see) channels.
