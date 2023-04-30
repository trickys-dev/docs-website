---
sidebar_position: 2
description: ScamWatch Bot Information
---

# ScamWatch Bot

Esta página explica cómo utilizar y configurar el ScamWatch Bot.

## Que puede hacer el bot

De manera resumida, el bot puede hacer lo siguiente;
- Detecta enlaces de estafa de nuestra base de datos con más de 31.000+ enlaces maliciosos y los elimina del chat.
- Registros eliminados en un canal para que el personal pueda ver y/o tomar medidas sobre el usuario (eliminar el tiempo de espera, kick, ban).
- Función de tiempo de espera automático, que puede ser establecida en la configuración. (si un usuario publica un enlace de estafa el bot dejará a ese usuario fuera durante x cantidad de días)

## Configuración Rápida

1. <a href="">Invita</a> al bot a tu servidor.
2. usar el comando <span class="code-text">/quicksetup</span> en un canal de administración que el bot también puede ver.

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqswelcome.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Bienvenido</span> - Bienvenido a la guía de configuración rápida.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Paso 1.</span> - Seleccione los botones que desea ver debajo de las inserciones.<br/>
  <span class="statusbot-title">new</span> - escribe <span class="code-text">new</span> y el bot creará un canal llamado <span class="discord-text">#scam-log</span>.<br/>
  <span class="statusbot-title"># Símbolo</span> - escribe <span class="discord-text">#nombre de canal</span> si ya tienes un canal.
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Paso 2.</span> - Seleccione los botones que desea ver debajo de las inserciones.<br/>
  <span class="statusbot-title">Botón ninguno</span> - Al hacer clic en el botón Ninguno no se mostrará ningún botón debajo del incrustado.<br/>
  <span class="statusbot-title">Botones de selección</span> - Haga clic en el menú desplegable de botones y verá una lista emergente seleccionar los que desea mostrar debajo de las incrustaciones.
  </p>
 </div>

:::note

Si seleccionó "Ninguno" en el paso 2, puede omitir el paso 2.1
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Paso 2.1</span> - Elige un rol que se requiera para usar los botones.<br/>
  <span class="statusbot-title">Ninguno</span> - Si no escribes <span class="code-text">ninguno</span> que tenga acceso al canal de registro puede usar los botones.<br/>
  <span class="statusbot-title">Rol</span> - Al añadir un rol sólo @ el rol, ejemplo @Moderator.
  </p>
 </div>

:::
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqspingrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Paso 3</span> - Elige un rol que será pingado cuando se detecte un enlace de estafa.<br/>
  <span class="statusbot-title">Ninguno</span> - Si escribes <span class="code-text">ninguno</span> no habrá un rol de ping .<br/>
  <span class="statusbot-title">Rol</span> - Al añadir un rol sólo @ el rol, ejemplo @Moderator.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqscomplete.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Completa </span> - Configuración Completada.
  </p>
 </div>

:::tip Requerido

¡Por favor, asegúrate de que el bot tiene un rol más alto que tus miembros en tu servidor!

:::

## Configurando el bot

:::caution Permisos por Defecto

Estos comandos por defecto sólo serán accesibles por usuarios con el permiso de administrador.

:::

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configlogchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Channel</span> - The channel which the bot will use for logs.<br/>
  To set the channel: <span class="code-text">/config logchannel</span> <span class="discord-text">#channel</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configstaffrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Staff Role</span> - Set the staff role that you want to be pinged if the detects a scam link.<br/>
  To set the role: <span class="code-text">/config staffrole</span> <span class="discord-text">@role</span>

  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configpingstaff.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ping Staff</span> - Enable or Disable staff pinging.<br/>
  To set the role: <span class="code-text">/config pingstaff True/False</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configautotimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Set the time a user will be timed out for in days.<br/>
  <span class="statusbot-title">Toggle</span> - Enable or Disable Auto Timeout.<br/>
  To set this: <span class="code-text">/config autotimeout True/False days</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonskick.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Kick Button</span> - Set the role that can use the kick button.<br/>
  <span class="statusbot-title">Toggle</span> - Enable or Disable the button.<br/>
  To set this: <span class="code-text">/config buttons kick True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsban.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ban Button</span> - Set the role that can use the ban button.<br/>
  <span class="statusbot-title">Toggle</span> - Enable or Disable the button.<br/>
  To set this: <span class="code-text">/config buttons ban True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsuntimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">UnTimeout Button</span> - Set the role that can use the Untimeout button.<br/>
  <span class="statusbot-title">Toggle</span> - Enable or Disable the button.<br/>
  To set this: <span class="code-text">/config buttons untimeout True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>

## Examples

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetected.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">User Side</span> - This will show in the channel where a scam link is posted. (the embed will remove after 30 seconds).
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedlog.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel</span> - This will show in the log channel for admins/staff.<br/>
1. If you have enabled a role to be pinged this is where it will show.<br/>
2. This shows the user who sent the scam link<br/>
3. This shows the scam link itself.<br/>
4. If you have enabled to Untimeout button this is where it will show.<br/>
5. If you have enabled to Kick button this is where it will show.<br/>
6. If you have enabled to Ban button this is where it will show.<br/>
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedaction.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel - Taken Action</span> - This will show in the log channel if you take action.<br/>
1. This shows what action has been taken.<br/>
2. This show the staff member that took the actio.<br/>
3. Once a action has been taken you cannot take another action, the buttons will be disabled.<br/>
  </p>
</div>

## Bot Permissions
These are the bot's permissions:

- Read Messages - Needed to read messages in server.
- Send Messages - Needed to send messages in server.
- Kick Members - Needed to kick members when you click a button (Read Configuring the bot).
- Ban Members - Needed to ban members when you click a button (Read Configuring the bot).
- Moderate Members - Needed to send messages in server.
- Manage Messages - Needed to send & delete its own message in the channel specified.
- Manage Channels - Needed to create a new channel for logs(only on setup).
- Read Message History - Needed to read message history.
- View Channel - Needed to view(see) channels.