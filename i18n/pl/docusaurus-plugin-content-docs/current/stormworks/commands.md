---
sidebar_position: 3
description: Polecenia Stormworks w grze.
---


# Polecenia Gry

| Polecenie         | Skrót  | Opis                                                                            | &nbsp;Przykład |
| ----------------- | ------ | ------------------------------------------------------------------------------- | -------------- |
| ?help [command]   | &nbsp; | Pokaż wszystkie polecenia lub uzyskaj więcej szczegółów na temat polecenia      | ?help auth     |
| ?auth             | &nbsp; | Sprawdza status autoryzacji                                                     | ?auth          |
| ?staff            | &nbsp; | Pokazuje dostępny personel                                                      | ?staff         |
| ?pos              | &nbsp; | Pokazuje aktualną pozycję                                                       | ?pos           |
| ?die              | &nbsp; | Odgadnij                                                                        | ?die           |
| ?dm {id} {msg}    | &nbsp; | Bezpośrednia wiadomość do innego użytkownika                                    | ?dm 1 hi       |
| ?reply {msg}      | ?r     | Odpowiedz na bezpośrednią wiadomość                                             | ?reply hi      |
| ?user             | ?u     | Podaje informacje o użytkowniku                                                 | ?user          |
| ?clean            | ?c     | Usuwa wszystkie pojazdy stworzone przez Ciebie                                  | ?clean         |
| ?despawn {vid}    | ?d     | Odrzuca pojedynczy pojazd                                                       | ?despawn 1     |
| ?give {id}        | &nbsp; | Dodaj przedmiot                                                                 | ?give 1        |
| ?outfit {id}      | &nbsp; | Ustaw strój                                                                     | ?outfit 1      |
| ?travel {id}      | &nbsp; | Podróż do celu                                                                  | ?travel 1      |
| ?home {name}      | &nbsp; | Teleportacja do domu                                                            | ?home mp       |
| ?homes            | &nbsp; | Lista domów                                                                     | ?homes         |
| ?sethome {name}   | &nbsp; | Ustaw dom                                                                       | ?sethome mp    |
| ?delhome {name}   | &nbsp; | Usuń dom                                                                        | ?delhome mp    |
| ?topup or ?refill | &nbsp; | Uzupełnij kompatybilne surowce lub paliwo w pojeździe w strefie uzupełniającej. | ?topup         |

## Polecenia Ładunkowe HRP

 | Polecenie        | Opis                                                                    | Przykład   |
 | ---------------- | ----------------------------------------------------------------------- | ---------- |
 | ?help            | Pokazuje polecenia                                                      | ?help      |
 | ?claim           | Tworzy kontener, jeśli nie istnieje                                     | ?claim     |
 | ?claimto {dstID} | Złóż wniosek z terminalu, który udaje się do określonej lokalizacji.    | ?claimto 1 |
 | ?claim [ID]      | Deklaruje kontener jako twój                                            | ?claim 1   |
 | ?unclaim {ID}    | Usuwa deklaracje z kontenera                                            | ?unclaim 1 |
 | ?listdst         | Pokazuje wszystkie miejsca docelowe kontenera z obecnego terminalu      | ?listdst   |
 | ?deliver {ID}    | Użyj tego, gdy znajdujesz się w miejscu dostawy, aby dostarczyć ładunek | ?deliver 1 |
 | ?myclaims        | Pokazuje ci twój zadeklarowany ładunek                                  | ?myclaims  |


## Polecenia Menedżera Pojazdów

| Polecenie                                                                           | Opis                                                  | Przykład              |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------- |
| ?v help                                                                             | Pokazuje pod-polecenia                                | ?v help               |
| ?v info                                                                             | Zobacz informacje o swoim pojeździe                   | ?v info               |
| ?v list                                                                             | Lista wszystkich pojazdów, które ty stworzyłeś        | ?v list               |
| ?v {vid} help                                                                       | Zobacz pod-polecenia dla ?v {id}                      | ?v 1 help             |
| ?v {vid} info                                                                       | Zobacz informacje o pojeździe                         | ?v 1 info             |
| ?v {vid} despawn                                                                    | Usuń pojazd                                           | ?v 1 despawn          |
| ?v {vid} owner {id}                                                                 | Zmień właściciela pojazdu                             | ?v 1 owner 2          |
| ?v {vid} tp                                                                         | Teleportacja do siedzenia w pojeździe                 | ?v 1 tp               |
| ?v {vid} kick {id}                                                                  | Wyrzuć użytkownika z pojazdu                          | ?v 1 kick 1           |
| ?v {vid} kickall                                                                    | Wyrzuć wszystkich użytkowników z pojazdu              | ?v 1 kickall          |
| ?v {vid} repair                                                                     | Napraw pojazd (<a href="/supporters#what-perks-are-there">Silver+</a>)             | ?v 1 repair           |
| Polecenie kontroli dostępu. Zmień kto może wchodzić w interakcje z twoimi pojazdami |                                                       |                       |
| ?v accessmode (all/whitelist/blacklist/none)                                        | Zmień kto może wchodzić w interakcje z twoim pojazdem | ?v accessmode all     |
| ?v whitelist/blacklist add {id}                                                     | Dodaj kogoś do białej/czarnej listy                   | ?v whitelist add 1    |
| ?v whitelist/blacklist remove {id}                                                  | Usuń kogoś z białej/czarnej listy                     | ?v whitelist remove 1 |
| ?v whitelist/blacklist list                                                         | Pokazuje twoją aktualną białą/czarną listę            | ?v whitelist list     |
| ?v whitelist/blacklist clear                                                        | Usuwa białą/czarną listę                              | ?v whitelist clear    |




