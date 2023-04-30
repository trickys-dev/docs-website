---
sidebar_position: 2
description: ScamWatch Bot Information
---

# Bot ScamWatch

Ta strona wyjaśnia, jak używać i skonfigurować bota ScamWatch.

## Co Bot potrafi zrobić

Krótko mówiąc, bot może zrobić następujące działania;
- Wykrywa linki do oszustw z naszej bazy danych posiadającej 31000+ pozycji i usuwa je z czatu.
- Rejestruje usunięte linki w kanale dla personelu do przeglądania i/lub podejmowania działań na użytkowniku (usunięcie przerwy, wyrzucenie, lub ban).
- Funkcja Auto Timeout (automatycznia przerwa), która może być ustawiona w konfiguracji. (jeśli użytkownik wyśle link do oszustwa, bot automatycznie da tej osobie przerwę na x dni)

## Szybka konfiguracja

1. <a href="">Zaproś</a> bota na swój serwer.
2. użyj komendy <span class="code-text">/quicksetup</span> na kanale administratora, który bot również może zobaczyć.

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqswelcome.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Witamy</span> - Witamy w przewodniku szybkiej konfiguracji.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Krok 1.</span> - Wybierz przyciski, które chcesz zobaczyć pod osadnikami.<br/>
  <span class="statusbot-title">new</span> - wpisz <span class="code-text">new</span> a bot utworzy kanał o nazwie <span class="discord-text">#scam-log</span>.<br/>
  <span class="statusbot-title"># Symbol</span> - wpisz <span class="discord-text">#channelname</span> jeśli masz już kanał.
  </p>
 </div>
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsselectbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Krok 2.</span> - Wybierz przyciski, które chcesz zobaczyć pod osadnikami.<br/>
  <span class="statusbot-title">None Button</span> - Kliknięcie przycisku None nie wyświetli żadnych przycisków pod osadzeniem.<br/>
  <span class="statusbot-title">Select Buttons</span> - Kliknij na rozwijane przyciski i zobaczysz wyskakujące okienko listy, które chcesz pokazać pod osadnikami.
  </p>
 </div>

:::note

Jeśli wybrałeś "None" w kroku 2, możesz pominąć krok 2.1
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqsbuttons.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Krok 2.1</span> - Wybierz rolę, która jest upoważniona do użycia przycisków.<br/>
  <span class="statusbot-title">None</span> - Jeśli wpiszesz <span class="code-text">none</span> wszyscy, którzy mają dostęp do kanału dziennika, mogą użyć przycisków.<br/>
  <span class="statusbot-title">Roles</span> - Podczas dodawania roli tylko @ roli, na przykład @Moderator.
  </p>
 </div>

:::
<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqspingrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Krok 3</span> - Wybierz rolę, która zostanie wciśnięta po wykryciu linku do oszustwa.<br/>
  <span class="statusbot-title">Brak</span> - Jeśli nie wpiszesz <span class="code-text">none</span> nie będzie roli pingu.<br/>
  <span class="statusbot-title">Roles</span> - Podczas dodawania roli tylko @ roli, na przykład @Moderator.
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botqscomplete.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ukończono </span> - Konfiguracja zakończona.
  </p>
 </div>

:::tip Wymagane

Upewnij się, że bot ma rolę wyższą niż użytkownicy na Twoim serwerze!

:::

## Konfigurowanie bota

:::caution Domyślne Uprawnienia

Te polecenia domyślnie będą dostępne tylko dla użytkowników z uprawnieniami administratora.

:::

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configlogchannel.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Channel</span> - Kanał, którego bot będzie używał do logów.<br/>
  Aby ustawić kanał: <span class="code-text">/config logchannel</span> <span class="discord-text">#channel</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configstaffrole.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Staff Role</span> - Ustaw rolę administratora, którą chcesz wpiąć, jeśli wykryje link do oszustwa.<br/>
  Aby ustawić rolę: <span class="code-text">/config staffrole</span> <span class="discord-text">@role</span>

  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configpingstaff.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ping Staff</span> - Włącz lub wyłącz powiadamianie personelu.<br/>
  Aby ustawić rolę: <span class="code-text">/config pingstaff True/False</span>
  </p>
 </div>
 <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configautotimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Auto TimeOut</span> - Ustaw czas, w którym użytkownik będzie wysłany na przerwę w dniach.<br/>
  <span class="statusbot-title">Toggle</span> - Włącz lub wyłącz Auto Timeout.<br/>
  Aby ustawić to: <span class="code-text">/config autotimeout True/False days</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonskick.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Kick Button</span> - Ustaw rolę, która może użyć przycisku wyrzucania.<br/>
  <span class="statusbot-title">Toggle</span> - Włącz lub wyłącz przycisk.<br/>
  Aby ustawić to: <span class="code-text">/config buttons kick True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsban.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Ban Button</span> - Ustaw rolę, która może użyć przycisku banu.<br/>
  <span class="statusbot-title">Toggle</span> - Włącz lub wyłącz przycisk.<br/>
  Aby ustawić to: <span class="code-text">/config buttons ban True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/configbuttonsuntimeout.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">UnTimeout Button</span> - Ustaw rolę, która może użyć przycisku Untimeout.<br/>
  <span class="statusbot-title">Toggle</span> - Włącz lub wyłącz przycisk.<br/>
  Aby ustawić to: <span class="code-text">/config buttons untimeout True/False</span> <span class="discord-text">@role</span>
  </p>
 </div>

## Przykłady

<div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetected.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Strona użytkownika</span> - Pojawi się to na kanale, w którym został zamieszczony link do oszustwa. (osadzenie usunie się po 30 sekundach).
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedlog.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel</span> - Pojawi się to na kanale dziennika dla administratorów/personelu.<br/>
1. Jeśli włączyłeś/aś rolę do powiadamiania, to tam będzie się ona wyświetlać.<br/>
2. To pokazuje użytkownika, który wysłał link do oszustwa<br/>
3. To pokazuje sam link do oszustwa.<br/>
4. Jeśli włączyłeś przycisk "Untimeout" to jest miejsce, w którym się pojawi.<br/>
5. Jeśli włączyłeś przycisk "Wyrzuć", to jest miejsce, w którym się pojawi.<br/>
6. Jeśli włączyłeś przycisk "Ban", to jest miejsce, w którym się pojawi.<br/>
  </p>
 </div>
   <div class="flex-vcenter mb-1">
    <img src="/img/scamwatchbot/botlinkdetectedaction.png" width="300px" />
  <p class="m-0">
  <span class="statusbot-title">Log Channel - Taken Action</span> - Pojawi się to na kanale dziennika, jeśli podejmiesz działanie.<br/>
1. To pokazuje jakie działania zostały podjęte.<br/>
2. Pokazuje to członka personelu, który podjął akcję.<br/>
3. Gdy akcja zostanie podjęta, nie możesz podjąć innej akcji, przyciski zostaną wyłączone.<br/>
  </p>
</div>

## Uprawnienia bota
To są uprawnienia bota:

- Czytanie wiadomości - Potrzebne do odczytu wiadomości na serwerze.
- Wysyłanie wiadomości - Wymagane do wysyłania wiadomości na serwerze.
- Wyrzucanie użytkowników - Konieczne jest wyrzucenie członków, gdy klikniesz przycisk (Przeczytaj konfigurację bota).
- Banowanie użytkowników - Konieczne jest zablokowanie członków, gdy klikniesz przycisk (Przeczytaj konfigurację bota).
- Moderacja użytkowników - Wymaga wysyłania wiadomości na serwerze.
- Zarządzaj wiadomościami - Potrzebne do wysłania i usunięcia własnej wiadomości z określonego kanału.
- Zarządzaj kanałami - Potrzebne do utworzenia nowego kanału dla dziennika (tylko podczas konfiguracji).
- Przeczytaj historię wiadomości - Wymaga odczytu historii wiadomości.
- Przeglądanie Kanałów - Wymagane do wyświetlenia(widzenia) kanałów.