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
| ?die              | &nbsp; | Have a guess                                                                    | ?die           |
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

 | Polecenie        | Opis                                                   | Przykład   |
 | ---------------- | ------------------------------------------------------ | ---------- |
 | ?help            | Pokazuje polecenia                                     | ?help      |
 | ?claim           | Tworzy kontener, jeśli nie istnieje                    | ?claim     |
 | ?claimto {dstID} | Claim from a terminal that goes to a specify location. | ?claimto 1 |
 | ?claim [ID]      | Claims a container                                     | ?claim 1   |
 | ?unclaim {ID}    | Unclaims a container                                   | ?unclaim 1 |
 | ?listdst         | Shows all crate destinations from currect terminal     | ?listdst   |
 | ?deliver {ID}    | Use this when at a delivery area to turn in your cargo | ?deliver 1 |
 | ?myclaims        | Show you your claimed cargo                            | ?myclaims  |


## Polecenia Menedżera Pojazdów

| Polecenie                                                             | Opis                                         | Przykład              |
| --------------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| ?v help                                                               | Shows you sub-commands                       | ?v help               |
| ?v info                                                               | View your vehicle info                       | ?v info               |
| ?v list                                                               | List all vehicles you spawned                | ?v list               |
| ?v {vid} help                                                         | View sub-commands for ?v {id}                | ?v 1 help             |
| ?v {vid} info                                                         | View info about vehicle                      | ?v 1 info             |
| ?v {vid} despawn                                                      | Despawn vehicle                              | ?v 1 despawn          |
| ?v {vid} owner {id}                                                   | Transfer ownership of vehicle                | ?v 1 owner 2          |
| ?v {vid} tp                                                           | Teleport to a seat in the vehicle            | ?v 1 tp               |
| ?v {vid} kick {id}                                                    | Kick a user from a vehicle                   | ?v 1 kick 1           |
| ?v {vid} kickall                                                      | Kick all users from vehicle                  | ?v 1 kickall          |
| ?v {vid} repair                                                       | Repair a vehicle (<a href="/docs/supporters#what-perks-are-there">Silver+</a>) | ?v 1 repair           |
| Access control command. Change who can interaction with your vehicles |                                              |                       |
| ?v accessmode (all/whitelist/blacklist/none)                          | Change who can interaction with your vehicle | ?v accessmode all     |
| ?v whitelist/blacklist add {id}                                       | Add someone to your whitelist/blacklist      | ?v whitelist add 1    |
| ?v whitelist/blacklist remove {id}                                    | Remove someone from your whitelist/blacklist | ?v whitelist remove 1 |
| ?v whitelist/blacklist list                                           | Shows your current whitelist/blacklist       | ?v whitelist list     |
| ?v whitelist/blacklist clear                                          | Clears whitelist/blacklist                   | ?v whitelist clear    |




