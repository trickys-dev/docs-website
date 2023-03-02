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

Wenn Sie in Schritt 2 "Keine" ausgewählt haben, können Sie Schritt 2.1 überspringen
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Schritt 2.1</span> - Wählen Sie eine Rolle, die benötigt wird, um die Knöpfe zu nutzen.<br/>
  <span class="statusbot-title">Keine</span> - Wenn Sie <span class="code-text">none</span> eingeben, kann jeder, der Zugriff auf den Log-Kanal hat die Knöpfe nutzen.<br/>
  <span class="statusbot-title">Rollen</span> -Wenn Sie eine Rolle hinzufügen, erwähnen Sie diese einfach mit '@', Beispielsweise @Moderator.
  </p>
 </div>

:::
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqspingrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Schritt 3</span> - Wählen Sie eine Rolle, die erwähnt wird, wenn ein Betrugslink erkannt wird.<br/>
  <span class="statusbot-title">Keine</span> - Wenn Sie <span class="code-text">none</span> eingeben, gibt es keine Rolle, die erwähnt wird.<br/>
  <span class="statusbot-title">Rollen</span> - Wenn Sie eine Rolle hinzufügen, erwähnen Sie diese einfach mit '@', Beispielsweise @Moderator.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqscomplete.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Abgeschlossen </span> - Setup abgeschlossen.
  </p>
 </div>

:::tip Erforderlich

Bitte stellen Sie sicher, dass der Bot eine Rolle hat, die höher ist als die der Mitglieder auf Ihrem Server!

:::

## Den Bot konfigurieren

:::caution Standardberechtigungen

Diese Befehle sind standardmäßig nur für Benutzer mit Administratorberechtigung zugänglich.

:::

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configlogchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Kanal</span> - Der Kanal, den der Bot für Logs verwenden wird.<br/>
  Um den Kanal zu setzen: <span class="code-text">/config logchannel</span> <span class="discord-text">#channel</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configstaffrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Staff Role</span> - Legen Sie die Mitarbeiterrolle fest, de gepingt werden soll, wenn der Bot einen Betrugslink erkennt.<br/>
  Um die Rolle zu setzen: <span class="code-text">/config staffrole</span> <span class="discord-text">@Rolle</span>

  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configpingstaff.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ping Staff</span> - Ping für Mitarbeiter ein-/ausschalten.<br/>
  Um die Rolle zu setzen: <span class="code-text">/config Pingstaff True/False</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configautotimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Legen Sie fest, wie viele Tage ein Benutzer ein Timeout erhalten soll.<br/>
  <span class="statusbot-title">Toggle</span> - Auto-Timeout ein-/ausschalten.<br/>
  Um dies festzulegen: <span class="code-text">/config autotimeout True/False days</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonskick.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Kick-Button</span> - Legen Sie die Rolle fest, die den Kick-Knopf verwenden kann.<br/>
  <span class="statusbot-title">Toggle</span> - Aktivieren oder Deaktivieren Sie die Schaltfläche.<br/>
  Um dies festzulegen: <span class="code-text">/config buttons kicken True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsban.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ban Button</span> - Legen Sie die Rolle fest, die den Ban-Knopf verwenden kann.<br/>
  <span class="statusbot-title">Toggle</span> - Aktivieren oder Deaktivieren Sie die Schaltfläche.<br/>
  Um dies festzulegen: <span class="code-text">/config buttons ban True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsuntimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">UnTimeout button</span> - Legen Sie die Rolle fest, die den Untimeout-Knopf verwenden kann.<br/>
  <span class="statusbot-title">Toggle</span> - Aktivieren oder Deaktivieren Sie die Schaltfläche.<br/>
  Um dies festzulegen: <span class="code-text">/config buttons untimeout True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>

## Beispiele

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetected.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Benutzerseite</span> - Dies wird im Kanal angezeigt, in dem ein Betrugslink veröffentlicht wird. (die Einbettung wird nach 30 Sekunden entfernt).
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedlog.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel</span> - Dies wird im Log-Kanal für Administratoren/Mitarbeiter angezeigt.<br/>
1. Wenn Sie eine Rolle, die erwähnt werden soll festgelegt haben, wird sie hier angezeigt.<br/>
2. Dies zeigt den Benutzer, der den Betrugslink gesendet hat<br/>
3. Dies zeigt den Link selbst an.<br/>
4. Wenn Sie den Untimeout-Knopf aktiviert haben, wird er hier angezeigt.<br/>
5. Wenn Sie den Kick-Knopf aktiviert haben, wird er hier angezeigt.<br/>
6. Wenn Sie den Bann-Knopf aktiviert haben, wird er hier angezeigt.<br/>
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedaction.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel - Taken Action</span> - Dies wird im Log-Kanal angezeigt, wenn Sie etwas unternehmen.<br/>
1. Dies zeigt, welche Aktion ausgeführt wurde.<br/>
2. Dies zeigt den Mitarbeiter, der die Aktion ausgeführt hat.<br/>
3. Sobald eine Aktion durchgeführt wurde, können Sie keine andere Aktion durchführen, die Tasten werden deaktiviert.<br/>
  </p>
</div>

## Bot-Berechtigungen
Dies sind die Berechtigungen des Bots:

- Lesen von Nachrichten - Benötigt um Nachrichten auf dem Server zu lesen.
- Nachrichten senden - Benötigt zum Senden von Nachrichten auf dem Server.
- Kick-Mitglieder - Benötigt, um Mitglieder zu kicken, wenn Sie auf einen Knopf klicken (Lesen Sie die Bot-Konfiguration).
- Mitglieder bannen - Benötigt um Mitglieder zu bannen, wenn Sie auf einen Knopf klicken (Lesen Sie die Bot-Konfiguration).
- Mitglieder moderieren - Benötigt zum Senden von Nachrichten auf dem Server.
- Nachrichten verwalten - Benötigt zum Senden & Löschen einer eigenen Nachricht im angegebenen Kanal.
- Kanäle verwalten - Benötigt um einen neuen Kanal für Logs zu erstellen (nur beim Setup).
- Nachrichtenverlauf lesen - Benötigt um Nachrichtenverlauf zu lesen.
- Kanal anzeigen - Benötigt zum Ansehen von Kanälen.