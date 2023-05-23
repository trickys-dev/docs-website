---
sidebar_position: 1
description: SWStatus Bot Informationen
---

# SW Status Bot

Diese Seite erklärt, wie Sie den Stormworks Status Bot verwenden und einrichten.

## Was der Bot machen kann

Kurz gesagt, der Bot kann folgendes tun;

- Erhalte Stormworks Server Status und verschiedene Arten von Statistiken.
- Erhalte die insgesamte Spieleranzahl der Spieler, die Stormworks spielen.
- Zeigt an, wann der Server veraltet ist.
- Zeigt an, wann der Server offline ist.
- Ermöglicht Benutzern einen Server von mehr als 15 verschiedenen Orten auf der ganzen Welt zu pingen.
- Sendet einen DM, wenn ein Server offline ist. (wenn aktiviert)
- Sendet einen DM, wenn ein Server veraltet ist. (wenn aktiviert)

## Erste Schritte
1. Um loszulegen, lade <a href="https://discord.com/oauth2/authorize?client_id=807750726205702176&scope=bot&permissions=388160">den Bot</a> auf deinen Server ein.
2. Erstelle einen <code class="discord-text">#server-status</code> Kanal oder wie auch immer Sie den Channel nennen möchten, hier platziert der Bot die Einbettung, um den Serverstatus anzuzeigen.
3. Benutzen Sie den <span class="code-text">/config server</span> Befehl, um festzulegen, welche Server Sie anzeigen möchten.
4. Sobald Sie den Kanal erstellt haben, teilen Sie dem Bot mit, dass er den Channel benutzen soll, um den Status anzuzeigen:<br/><span class="code-text">/config channel <code>Channel:&lt;span class="discord-text">#server-status&lt;/span></code></span>

## Den Bot konfigurieren

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Kanal</span> - Der Kanal, in den die Status-Einbettung gesendet und aktualisiert wird<br/>
  Um den Kanal festzulegen: <span class="code-text">/config channel <code>Kanal:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Server</span> - Liste der Server, die hinzugefügt oder entfernt werden sollten<br/>
  Um Server hinzuzufügen oder zu entfernen: <span class="code-text">/config servers</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfiginfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Info</span> - Welche Serverinformationen in der Statusmeldung für jeden Server angezeigt werden sollen.<br/>
  Um Informationen hinzuzufügen oder zu entfernen: <span class="code-text">/config info</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigembed.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Titel</span> - Der Titel der Einbettung.<br/>
  <span class="statusbot-title">Farbe</span> - Die Farbe der Einbettung in Hex.<br/>
  Um den Titel oder die Farbe zu setzen: <span class="code-text">/config embed</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigadminrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Adminrolle</span> - Benutzer mit dieser Rolle können den Bot konfigurieren <span class="text-muted">(wenn kein Wert vorhanden ist, können nur Benutzer mit Administrator-Berechtigung den Bot bearbeiten).</span><br/>
  Um die Adminrolle festzulegen: <span class="code-text">/config adminrole <code>Rolle:<span class="discord-text">@role</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigpinging.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Offline DM</span> - Sendet eine DM an die Admin-Rolle wenn ein gelisteter Server als offline erkannt wird.<br/>
  <span class="statusbot-title">veralteter Server DM</span> - Sendet eine DM an die Admin-Rolle, wenn ein gelisteter Server als veraltet erkannt wurde.<br/>
  Um DM-Einstellungen festzulegen: <span class="code-text">/config pinging</span>
  </p>
 </div>

## Informationstypen

Info-Typen werden vom Befehl <span class="code-text">/config info</span> verwaltet.
<div class="flex-vcenter mb-1">
  <p>

| Nein. | Info-Typ | Beschreibung |
|-----|------------------------------------------------------------|
| 1 | players | Zeigt die Anzahl der Online-Spieler an.             |
| 2 | version | Zeigt die Server-Version.                  |
| 3 | TPS | Zeigt die Server TPS.                     |
| 4 | DLC | Zeigt Waffen oder Arid DLC an.              |
| 5 | uptime | Zeigt die Laufzeit des Servers.            |
| 6 | operatingSystem | Zeigt das Betriebssystem der Server.        |
| 7 | hasPassword | Zeigt an, ob der Server passwortgeschützt ist. |
| 8 | owner | Zeigt den Besitzer des Servers.             |
| 9 | serverLocation | Zeigt den Serverstandort an.                 |
| 10 | responseTimeMs | Zeigt die Antwortzeit (Ms).              |
| 11 | globalPlayers | Zeigt die Anzahl der Spieler in Stormworks. |
| 12 | logo | Zeigt das Server-Logo in der Einbettung.        |

  </p>
  <span class="ml-1" >
    <img src="/img/statusbot/serverstatusinfotype1.png" />
  </span>
 </div>

## Server ist veraltet

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swoutofdatemsg.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Server veraltet</span><br/>
  Wenn Ihr Server veraltet ist, sieht die Statuseinbettung wie folgt aus, Sie erhalten auch eine DM, wenn sie aktiviert sind, wie im Beispiel der Alarmeinbettung gezeigt.
  </p>
 </div>

## Ping

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swglobalping.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">PING</span> - Holen Sie sich den Ping eines Servers aus der ganzen Welt.<br/>
    Alle Benutzer können den Befehl <span class="code-text">/ping</span> verwenden.
  </p>
 </div>

   <img src="/img/statusbot/swglobalpinginfo.png" />

## Bot-Berechtigungen
Dies sind die Berechtigungen des Bots:

- Lesen von Nachrichten - Benötigt um Nachrichten auf dem Server zu lesen.
- Nachrichten senden - Benötigt zum Senden von Nachrichten auf dem Server.
- Nachrichten verwalten - Benötigt zum Senden & Löschen einer eigenen Nachricht im angegebenen Kanal.
- Links einbetten - Benötigt um Links in den Status einzubetten.
- Dateien anhängen - Benötigt um Dateien an den Status einzubinden.
- Nachrichtenverlauf lesen - Benötigt um Nachrichtenverlauf zu lesen.
- Externe Emojis verwenden - Benötigt um auf Emojis zuzugreifen, die in der Statuseinbettung verwendet werden.
- Reaktionen hinzufügen - Benötigt, da wir wahrscheinlich in der Zukunft etwas neue implementieren möchten.
- Kanal anzeigen - Benötigt zum Ansehen von Kanälen.
