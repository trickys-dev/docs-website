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
- Sync in-game to discord. (chats, joins & leaves) - [ChatLogger](/discordbots/mtstatusbot#chat-logger)

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

## Chat Logger

:::caution Server Owners

You must own a MT server & be [Verified](/discord/verified) to gain access to the chat logger. If you are a MT server owner then <a href="discord://discord.com/channels/710922135580835950/846373509470748722" class="discord-text">#submit a ticket</a> on discord requesting access to the MT Chat Logger.

:::

### Token

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbottoken.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 1. </span> - Get Token.<br/>
  To get token use: <span class="code-text">/chatlogger viewtokens</span>, keep this as you will need this later.
  </p>
 </div>

<span class="statusbot-title">Step 2.</span> Download the chat logger which will be provided when you contact us.<br/><br/>
  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotrootfolder.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 3.</span> - Place the chat logger inside the root MT server folder<br/>
  </p>
 </div>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotconfigfile.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 4.</span> - Run the chat logger to generate <code>config.json</code> file.<br/>
  </p>
 </div>

### Config File
```json
{
    "_token": "Enter the token from the discord bot below",
    "token": "",

    "_serverPath": "Enter the path to the root folder of the server below (leave blank if the exe is in the root folder)",
    "serverPath": "",

    "_createStartBat": "When true a start.bat file will be created which will start this script and the MT server",
    "createStartBat": false
}
```
<span class="statusbot-title">Step 5.</span> - Configuring the <code>config.json</code> file.<br/>
1. Place your <code>token</code> inside the token field.<br/>
2. Leave the <code>serverPath</code> blank if you have placed the chatlogger in the root folder.<br/>
3. (optional) Set <code>createStartBat</code> to true which will create a batch file that will start the MT server and the chat logger at the same time.<br/><br/>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotchatloggerconsole1.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Step 6.</span> - Run the chat logger which should now open a console window and you should see a <span class="code-text">Success!</span> message, if not view the <a href="/discordbots/mtstatusbot#errors--warnings">Errors & Warnings</a> below.<br/>
  </p>
 </div>

### Webhooks

<span class="statusbot-title">Step 7.</span> Its now time to link a token to a channel. There are two options<br/>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotwebhookop1.png" width="450px" />
  <p class="m-0">
  <span class="statusbot-title">Option 1 (<span class="statusbot-title">Recommended</span>).</span> - Auto generate webhook by channel.<br/>
  <span class="statusbot-title">token</span> - Select token.<br/>
  <span class="statusbot-title">channel</span> - Where to send the in-game messages.<br/>
  <span class="statusbot-title">webhookname</span> - (optional) Set the display name of the webhook.<br/>
  </p>
 </div>

  <div class="flex-vcenter mb-1">
    <img src="/img/mtstatusbot/mtstatusbotwebhookop2.png" width="450px" />
  <p class="m-0">
  <span class="statusbot-title">Option 2.</span> - Give existing webhook URL.
  </p>
 </div>

### Errors & Warnings

| Message                                                                                                | Description                                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| <span class="update-removed">No token found!</span>                                                    | Token is not specified in the [config.json](/discordbots/mtstatusbot#config-file) file.                          |
| <span class="update-removed">Invalid token!</span>                                                     | Token is not vaild, copy valid [token](/discordbots/mtstatusbot#token) from the bot.                             |
| <span class="update-removed">Config file is not valid JSON!</span>                                     | [config.json](/discordbots/mtstatusbot#config-file) file is invalid asdasds                                      |
| <span class="update-removed">No valid motortown server path found!</span>                              | Chatlogger is not in the root folder or [specified folder](/discordbots/mtstatusbot#config-file) is not correct. |
| <span class="update-removed">Error connecting to API!</span>                                           | Script cannot connect to our API. <a href="discord://discord.com/channels/710922135580835950/846373509470748722" class="discord-text">#submit a ticket</a> for help.                                             |
| <span class="update-removed">Unable to attach to server!</span>                                        | Script cannot read files.                                                                                        |
| <span class="update-removed">Your version of the logger is too old!</span>                             | Chat logger out of date.                                                                                         |
| <span class="update-removed">Asset files not found!</span>                                             | Chat logger is corrupt, re-download.                                                                             |
| <span class="update-updated">New version available! </span>                                            | New version available for download.                                                                              |
| <span class="update-updated">You didn't use the start.bat file and it is enabled in the config!</span> | <code>createStartBat</code> enabled in [config.json](/discordbots/mtstatusbot#config-file), but wasn't used.       |

## Bot Permissions
These are the bot's permissions:

- Read Messages/View Channels - Needed to read messages & view channels in server.
- Send Messages - Needed to send messages in server.
- Read Message History - Needed to read message history.
- Manage Webhooks - Needed to create webhook for [ChatLogger](/discordbots/mtstatusbot#chat-logger).