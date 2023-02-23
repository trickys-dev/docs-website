---
sidebar_position: 2
---

# ScamWatch Bot

Diese Seite erklärt, wie Sie den ScamWatch Bot verwenden und einrichten.

## Was der Bot machen kann

Kurz gesagt, kann der Bot folgendes machen;
- Erkennt Betrugslinks aus unserer 31.000+ Datenbank und entfernt sie aus dem Chat.
- Protokolliert entfernte Links in einem Kanal, damit Mitarbeiter sie sehen können und/oder Maßnahmen gegen den Nutzer ergreifen können (Knöpfe für: Timeout entfernen, Kicken, Bannen).
- Auto Timeout Funktion, die in der Konfiguration eingestellt werden kann. (Wenn ein Benutzer einen Betrugslink veröffentlicht, wird der Bot den Benutzer für x Anzahl von Tagen ins Timeout schicken)

## Schnelleinrichtung

1. <a href="">lade den Bot zu deinem Server ein</a>.
2. verwenden Sie den <span class="code-text">/quicksetup</span> Befehl in einem Adminkanal, den der Bot auch sehen kann.

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqswelcome.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Willkommen</span> - Willkommen in der Schnelleinrichtungsanleitung.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Schritt 1.</span> - Wählen Sie die Schaltflächen, die Sie unter den Einbettungen sehen möchten.<br/>
  <span class="statusbot-title">neu</span> - Typ <span class="code-text">neu</span> und der Bot wird einen Kanal namens <span class="discord-text">#scam-log</span>erstellen.<br/>
  <span class="statusbot-title"># Symbol</span> - Tippen Sie <span class="discord-text">#kanalname</span>, wenn Sie bereits einen Kanal haben.
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Schritt 2.</span> - Wählen Sie die Schaltflächen, die Sie unter den Einbettungen sehen möchten.<br/>
  <span class="statusbot-title">Keine Schaltfläche</span> - Wenn Sie auf die Schaltfläche Keine klicken, werden keine Schaltflächen unterhalb der Einbettung angezeigt.<br/>
  <span class="statusbot-title">Schaltflächen auswählen</span> - Klicken Sie auf die Schaltflächen-Dropdown-Schaltfläche, und Sie werden eine Liste sehen, die Sie unter der Einbettungen anzeigen möchten.
  </p>
 </div>

:::note

If you selected "None" in step 2, you can skip step 2.1
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 2.1</span> - Pick a role that is requried to use the buttons.<br/>
  <span class="statusbot-title">None</span> - If you type <span class="code-text">none</span> everyone that has access to the log channel can use the buttons.<br/>
  <span class="statusbot-title">Roles</span> - When adding a role just @ the role, example @Moderator.
  </p>
 </div>

:::
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqspingrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 3</span> -  Pick a role that will be pinged when a scam link is detected.<br/>
  <span class="statusbot-title">None</span> -  If you type <span class="code-text">none</span> there wont be a ping role.<br/>
  <span class="statusbot-title">Roles</span> - When adding a role just @ the role, example @Moderator.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqscomplete.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Complete </span> -  Setup Complete.
  </p>
 </div>

:::tip Required

Please make sure the bot has a role that is higher then your members on your server!

:::

## Configuring The Bot

:::caution Default Permissions

These commands by default will only be accessible by users with the administrator permission.

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