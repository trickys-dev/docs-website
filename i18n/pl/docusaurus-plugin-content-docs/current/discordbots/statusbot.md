---
sidebar_position: 1
description: Informacje o Bocie SWStatus
---

# Bot Statusu SW

Ta strona wyjaśnia, jak używać i skonfigurować Stormworks Status Bot.

## Co Bot potrafi zrobić

Krótko mówiąc, bot może zrobić następujące działania;

- Uzyskać status serwera Stormworks i różne typy statystyk.
- Otrzymać łączną liczbę graczy grających w Stormworks.
- Pokazać, kiedy serwer jest nieaktualny.
- Pokazać, kiedy serwer jest offline.
- Pozwala użytkownikom na ping serwera z 15+ różnych lokalizacji na całym świecie.
- Wysyła DM, kiedy serwer jest offline. (jeżeli włączone)
- Wysyła DM gdy serwer jest nieaktualny. (jeżeli włączone)

## Pierwsze kroki
1. Aby rozpocząć <a href="https://discord.com/oauth2/authorize?client_id=807750726205702176&scope=bot&permissions=388160">zaproś</a> bota do twojego serwera.
2. Utwórz kanał <code class="discord-text">#server-status</code> lub jakkolwiek chcesz wywołać kanał, to jest miejsce, w którym bot umieści osadzoną wiadomość, aby pokazać status serwera.
3. Użyj komendy <span class="code-text">/config server</span> aby ustawić jakie serwery chcesz wyświetlić.
4. Po utworzeniu kanału powiedz botowi, aby użył kanału do pokazania statusu:<br/><span class="code-text">/config channel <code>channel:&lt;span class="discord-text">#server-status&lt;/span></code></span>

## Konfiguracja bota

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Channel</span> - Kanał, który zostanie wysłany i zaktualizowany<br/>
  Aby ustawić kanał <span class="code-text">/config channel <code>channel:<span class="discord-text">#channel</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigservers.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Servers</span> - Lista serwerów do dodania lub usunięcia z osadzonego<br/>
  Aby dodać lub usunąć serwery: <span class="code-text">/config servers</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfiginfo.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Info</span> - Jakie informacje o serwerze pokazywać w statusie osadzonym dla każdego serwera.<br/>
  Aby dodać lub usunąć informacje: <span class="code-text">/config info</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigembed.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Title</span> - Tytuł osadzenia.<br/>
  <span class="statusbot-title">Kolor</span> - Kolor osadzonego w liczbie heksadecymalnej.<br/>
  Aby ustawić tytuł lub kolor: <span class="code-text">/config embed</span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigadminrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Admin Role</span> - Użytkownicy z tą rolą mogą skonfigurować bota <span class="text-muted">(jeśli nie ma wartości, tylko użytkownicy z uprawnieniami administratora mogą edytować bota).</span><br/>
  Aby ustawić rolę administratora: <span class="code-text">/config adminrole <code>role:<span class="discord-text">@role</span></code></span>
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swconfigpinging.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Offline DM</span> - wyśle DM do roli administratora, jeśli jakikolwiek serwer listy zostanie wykryty jako offline.<br/>
  <span class="statusbot-title">Outdated DM</span> - wyśle DM do roli administratora, jeśli jakikolwiek serwer z listy zostanie wykryty jako nieaktualny.<br/>
  Aby ustawić ustawienia DM: <span class="code-text">/config pinging</span>
  </p>
 </div>

## Rodzaje informacji

Rodzaje informacji są zarządzanie przez polecenie <span class="code-text">/config info</span>.
<div class="flex-vcenter mb-1">
  <p>

| Nr | Typ informacji | Opis |
|-----|-----------------|----------------------------|
| 1  | players         | Pokazuje liczbę graczy online.             |
| 2   | version         | Pokazuje wersję gry serwera.                  |
| 3 | TPS | Pokazuje TPS serwera.                     |
| 4 | DLC | Pokazuje DLC serwera.              |
| 5 | uptime | Pokazuje dyspozycyjność serwera.            |
| 6 | operatingSystem | Pokazuje system operacyjny serwera.        |
| 7 | hasPassword | Pokazuje czy serwer jest chroniony hasłem. |
| 8   | owner           | Pokazuje właściciela serwera.             |
| 9   | serverLocation  | Pokazuje lokalizację serwera.                 |
| 10  | responseTimeMs  | Pokazuje czas odpowiedzi (Ms).              |
| 11  | globalPlayers   | Pokazuje ogólną liczbę graczy Stormworks. |
| 12  | logo            | Pokazuje logo serwera w osadzeniu.        |

  </p>
  <span class="ml-1" >
    <img src="/img/statusbot/serverstatusinfotype1.png" />
  </span>
 </div>

## Serwer nieaktualny

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swoutofdatemsg.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Server Out Of Date</span><br/>
  Jeśli Twój serwer jest nieaktualny, jego status będzie wyglądał tak: Otrzymasz również pamięć DM, jeśli są włączone, jak pokazano w przykładzie alertu.
  </p>
 </div>

## Ping

<div class="flex-vcenter mb-1">
    <img src="/img/statusbot/swglobalping.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">PING</span> - Uzyskaj ping serwera z całego świata.<br/>
    Wszyscy użytkownicy mogą użyć komendy <span class="code-text">/ping</span>.
  </p>
 </div>

   <img src="/img/statusbot/swglobalpinginfo.png" />

## Uprawnienia bota
To są uprawnienia bota:

- Czytanie wiadomości - Potrzebne do odczytu wiadomości na serwerze.
- Wysyłanie wiadomości - Wymagane do wysyłania wiadomości na serwerze.
- Zarządzaj wiadomościami - Potrzebne do wysłania i usunięcia własnej wiadomości z określonego kanału.
- Osadzanie linków - Wymagane jest osadzanie linków w osadzonej wiadomości statusu.
- Dołączanie plików - Wymagane jest załączenie plików do osadzenia statusu.
- Przeczytaj historię wiadomości - Wymaga odczytu historii wiadomości.
- Użyj zewnętrznych emotikonów - Potrzebny dostęp do emotikonów używanych w osadzonym statusie.
- Dodaj reakcje - Potrzebne, ponieważ możemy coś wdrożyć w przyszłości.
- Przeglądanie Kanałów - Wymagane do wyświetlenia(widzenia) kanałów.
