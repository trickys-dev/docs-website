---
sidebar_position: 1
description: Información del bot SWStatus
---

# SW Status Bot

Esta página explica como usar y configurar el bot de Stormworks Status.

## Lo que puede hacer el bot

De manera resumida, el bot puede hacer lo siguiente;

- Obtener el estado del servidor Stormworks y diferentes tipos de estadísticas.
- Consigue el total de jugadores jugando Stormworks.
- Mostrar cuando el servidor está desactualizado.
- Mostrar cuando el servidor está desconectado.
- Permite a los usuarios hacer ping a un servidor desde más de 15 lugares diferentes en todo el mundo.
- Envía un MD cuando un servidor está desconectado. (cuando está activado)
- Envía un MD cuando un servidor está desactualizado. (cuando está activado)

## Primeros pasos
1. Para comenzar <a href="https://discord.com/oauth2/authorize?client_id=807750726205702176&scope=bot&permissions=388160">invita</a> al bot a tu servidor.
2. Crea un canal <code class="discord-text">#server-status</code> o como lo quieras llamar al canal, aquí es donde el bot colocará el mensaje (embed) para mostrar el estado del servidor.
3. Utilice el comando <span class="code-text">/config servers</span> para establecer qué servidores desea mostrar.
4. Una vez que haya creado el canal, diga al bot que use el canal para mostrar el estado usando:<br/><span class="code-text">/config canal <code>canal:&lt;span class="discord-text">#server-status&lt;/span></code></span>

## Configurando el bot

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Canal</span> - El canal donde el mensaje de estado será enviado y actualizado<br/>
  Para configurar el canal: <span class="code-text">/config canal <code>canal:<span class="discord-text">#canal</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Servidores</span> - La lista de servidores a añadir o eliminar en el mensaje<br/>
  Para añadir o eliminar servidores: <span class="code-text">/config servers</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfiginfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Información</span> - Qué información del servidor se muestra en el mensaje para cada servidor.<br/>
  Para añadir o eliminar información: <span class="code-text">/config info</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigembed.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Título</span> - El título del mensaje.<br/>
  <span class="statusbot-title">Color</span> - El color del mensaje en hexadecimal.<br/>
  Para establecer el título o color: <span class="code-text">/config embed</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigadminrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Rol de administrador</span> - Los usuarios con este rol pueden configurar el bot <span class="text-muted">(Si no hay valor, sólo los usuarios con el permiso de administrador pueden editar el bot).</span><br/>
  Para establecer el rol de administrador: <span class="code-text">/config adminrole <code>role:<span class="discord-text">@role</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigpinging.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">MD sin conexión</span> - Enviará un mensaje privado a un administrador si algún servidor de la lista se encuentra desconectado.<br/>
  <span class="statusbot-title">MD desactualizado</span> -Enviará un mensaje privado a un administrador si se detecta que algún servidor listado está desactualizado.<br/>
  Para configurar los ajustes de mensaje directo: <span class="code-text">/config pinging</span>
  </p>
 </div>

## Tipos de información

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
