---
sidebar_position: 3
description: Informacje o Serwerze Pociągów
---

# Serwer pociągów

Ten serwer jest przeznaczony do wykonywania zadań związanych z koleją. Sekcja pomiędzy Spycakes i Camodo odtwarza blokadę liniową dla ról między sygnalizacją a maszynistami pociągu w realistycznym otoczeniu kolejowym.

:::note Podsumowanie Blokady Liniowej

Linia kolejowa jest podzielona na cztery odcinki kontrolowane przez cztery oddzielne skrzynie rozdzielcze. System ten zapewnia bezpieczną eksploatację pociągów na linii, dopuszczając tylko jeden pociąg do odcinka w danym momencie.

:::

::caution Zastrzeżone Komponenty

- Silniki Odrzutowe
- Reaktory Jądrowe

:::

## Maszyniści pociągów

### Ograniczenia prędkości

Linia kolejowa jest podzielona na odcinki o różnych ograniczeniach prędkości. Wartości te są oznaczane za pomocą znaków na całej linii kolejowej w milach na godzinę (mph).

Proszę zapoznać się z następującymi ogólnymi ograniczeniami prędkości na kolei:
- Place przeładunkowe = 10mph
- Linia między Spycakes i North Donkk = 80mph
- Reszta linii = 100mph

:::caution Przekroczenie Prędkości

Jeśli zostaniesz złapany w ciągu ponad 100mph zostaniesz wyrzucony, jeśli ponownie złamiesz tę regułę, możesz zostać zbanowany z serwera pociągów.

:::

### Sygnały

System ten wykorzystuje tradycyjne semafory kształtowe, co oznacza, że zamiast sygnałów świetlnych, do których możesz być przyzwyczajony, sygnały te wykorzystują ruchome ramiona z odpowiednimi światłami, które informują kierowcę, czy może kontynuować jazdę, czy też się zatrzymać.

Wszystkie sygnały na tej linii kolejowej są semaforami kształtowymi, oznacza to, że ramię poziome zawsze oznacza, że sygnał wyświetla niebezpieczeństwo lub szczególną uwagę. Ramię skierowaną w górę wskazuje, że sygnał jest wyłączony, co oznacza, że tor jest czysty.

<b>Sygnał domowy/startowy</b>

<div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvredsignal.png" width="300px"/>
    Sygnał włączony = Niebezpieczeństwo<br/>
    Powinieneś się zatrzymać, jeśli widzisz ten sygnał
  </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvgreensignal.png" width="300px"/>
    Sygnał wyłączony = Tor czysty<br/>
    Jeśli widzisz ten sygnał, możesz kontynuować do następnego sygnału
  </div>
<b>Odległy Sygnał</b><br/> Przed sygnałami domowymi/początkowymi otrzymasz ostrzeżenie, czy znajdują się one w niebezpieczeństwie czy też są w czystości. Można o nich myśleć jako żółte światła drogowe.
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal1.png" width="300px"/>
    Sygnał włączony = Zachowaj ostrożność<br/>
    Powinieneś przygotować się do zatrzymania, jeden z następujących sygnałów może być niebezpieczny
  </div>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal2.png" width="300px"/>
    Sygnał wyłączony = Tor czysty<br/>
    Możesz kontynuować
  </div>
<b>Stały Odległy Sygnał</b>
  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvyellowsignal3.png" width="300px"/>
    Kiedy zbliżasz się do Camodo z Wysp Sawyer, najpierw natkniesz się na odległy stały sygnał. Jak opisuje nazwa, ten sygnał stale wskazuje ostrożność, że musisz być przygotowany do zatrzymania się na następnym sygnale pokazującym zagrożenie
  </div>

### Komunikacja

  <div class="flex-vcenter mb-1">
    <img src="/img/trainsrv/trainsrvcommbox.png" width="300px"/>
    Jeśli potrzebujesz pomocy, możesz skontaktować się z kontrolerami ruchu na czacie lub przez radio. Każda skrzynia rozdzielcza jest ustawione za pomocą własnego telefonu radiowego, a częstotliwość najbliższej skrzyni rozdzielczej można znaleźć za pomocą etykiet mapy.
  </div>

## Kontrolerzy Ruchu

### Signal Codes

- 3-1 Passenger
- 2-3 Light Engine
- 1-3-1 Freight
- 2 Train Entering section
- 2-1 Train leaving section
- 1 call to attention
- 3-5 Train cancelled

### Aplikowanie do roli Kontrolera Ruchu

Aby zaaplikować jako Kontroler Ruchu, musisz wysłać zgłoszenie do [<a class="discord-text">#submit-a-ticket</a>](discord://discord.com/channels/710922135580835950/846373509470748722) na serwerze Discord, w którym powiesz, że chcesz zostać kontrolerem. Przy składaniu wniosku na kontrolera ruchu, sprawdzane są następujące elementy;
- Historia Banów - Jeżeli byłeś zbanowany na jednym z naszych serwerów w ciągu 12 miesięcy przed zgłoszeniem, wtedy nie możesz się zgłosić, z kilkoma wyjątkami.
- Poważne uwagi - Czy masz jakieś "poważne" notatki na twoim koncie u nas. Kiedy ubiegasz się o jakąkolwiek rolę, którą oferujemy, przyjrzymy się notatkom, które prowadzi administracja. (Nie, nie możesz się zapytać: "Czy mam jakieś notatki u was o moim koncie?"), one są tylko dla personelu.
- Czy jesteś lubiany w naszej społeczności!
- Jak długo jesteś członkiem naszej grupy!



