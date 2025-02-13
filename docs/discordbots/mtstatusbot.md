---
sidebar_position: 3
description: MT Status Bot Information
---

# MT Status Bot

<span class="request-bubble request-get">BETA</span>
<br/>
<br/>
This page explains how to use and setup the MT Status Bot.

## What Can The Bot Do

In brief the bot can do the following;
- Get MotorTown server status.
- Get player count for servers.
- Get total players playing MotorTown.

## Quick Setup

<span class="statusbot-title">Step 1.</span> <a href="#">Invite</a> the bot to your server.<br/><br/>

<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot1.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 2.</span> - use the <span class="code-text">/mt servers add <code>server:<span class="discord-text">server-name</span></code> </span>
command and select a server from the list.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot2.png" width="300px" />
  <p class="m-0">
 <span class="statusbot-title">Step 3.</span> - Set the channel which the status embed will be sent and updated<br/>
  To set the channel: <span class="code-text">/mt channel <code>channel:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>

## Configuring The Bot

:::caution Default Permissions

These commands by default will only be accessible by users with the administrator permission.

:::

### Title
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbottitle.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - The title of the embed.<br/>
  To set the title: <span class="code-text">/mt embed title<code>title:<span class="discord-text">title-here</span></code></span>
  </p>
 </div>

### Colour
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotcolour.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Colour</span> - The color of the embed.<br/>
  To set the color: <span class="code-text">/mt embed colour<code>colour:<span class="discord-text">Hex-colour</span></code></span>
  </p>
 </div>

### Set Channel
 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbot2.png" width="300px" />
  <p class="m-0">
 <span class="statusbot-title">Channel</span> - Set the channel where you want the embed to be<br/>
  To set the channel: <span class="code-text">/mt channel <code>channel:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>

### Set Embed Info
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotinfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Set Embed Info</span> - Icon, Global Players, Game Logo In Title.<br/>
  To show the embed settings: <span class="code-text">/mt info</span>
  </p>
 </div>

<div class="flex-vcenter mb-1">
  <img src="/img/mtstatusbot/mtstatusbotinfotypes.png" width="300px" />

  <span class="ml-1" >

| No. | Info Type          | Description                                |
|-----|--------------------|--------------------------------------------|
| 1   | Icon               | Shows server icon in embed.                |
| 2   | Global Players     | Shows the number of players on MotorTown.  |
| 3   | Game Logo In Title | Shows title in embed.                      |

  </span>
 </div>

### Manage Servers
<div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotaddserver.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Add Server</span> - Add a server to the embed.<br/>
  To add a server use: <span class="code-text">/mt servers add <code>server:<span class="discord-text">server-name</span></code></span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotremoveserver.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Remove Server</span> - Remove a server from the embed.<br/>
  To remove a server use: <span class="code-text">/mt servers remove <code>displayedserver:<span class="discord-text">server-name</span></code></span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotlistservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">List Servers</span> - Shows current servers on embed.<br/>
  To show current servers use: <span class="code-text">/mt servers list</span>
  </p>
 </div>


## Bot Permissions
These are the bot's permissions:

- Read Messages/View Channels - Needed to read messages & view channels in server.
- Send Messages - Needed to send messages in server.
- Read Message History - Needed to read message history.