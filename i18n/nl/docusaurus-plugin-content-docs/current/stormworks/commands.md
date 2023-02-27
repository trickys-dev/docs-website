---
sidebar_position: 3
description: Stormworks In-Game Commands.
---


# Game Commando's

| Opdracht          | Kort   | Beschrijving                                                        | &nbsp;Voorbeeld |
| ----------------- | ------ | ------------------------------------------------------------------- | --------------- |
| ?help [command]   | &nbsp; | Toon alle commando's of krijg meer details over een commando        | ?help auth      |
| ?auth             | &nbsp; | Controleert je authenticatiestatus                                  | ?auth           |
| ?staff            | &nbsp; | Toon Online Staff                                                   | ?staff          |
| ?pos              | &nbsp; | Je huidige positie                                                  | ?pos            |
| ?die              | &nbsp; | Lijkt mij logies wat daar de uitkomst van is                        | ?die            |
| ?dm {id} {msg}    | &nbsp; | Direct bericht naar een andere gebruiker                            | ?dm 1 hi        |
| ?reply {msg}      | ?r     | Reageer op een DM                                                   | ?reply hi       |
| ?user             | ?u     | Geeft je je eigen gebruikersinformatie                              | ?user           |
| ?clean            | ?c     | Verwijdert alle voertuigen die door jou in de wereld geplaatst zijn | ?clean          |
| ?despawn {vid}    | ?d     | Verwijder één voertuig                                              | ?despawn 1      |
| ?give {id}        | &nbsp; | Geef een item                                                       | ?give 1         |
| ?outfit {id}      | &nbsp; | Kies een outfit                                                     | ?outfit 1       |
| ?travel {id}      | &nbsp; | Rijs naar bestemming                                                | ?travel 1       |
| ?home {name}      | &nbsp; | Ga naar een huis                                                    | ?home mp        |
| ?homes            | &nbsp; | Weergeeft huizen                                                    | ?homes          |
| ?sethome {name}   | &nbsp; | Claim een huis                                                      | ?sethome mp     |
| ?delhome {name}   | &nbsp; | Verwijder een huis                                                  | ?delhome mp     |
| ?topup or ?refill | &nbsp; | Vul een aanvullen compatibele voertuig in een topup zone.           | ?topup          |

## HRP Vracht Commando's

 | Opdracht         | Beschrijving                                                 | Voorbeeld  |
 | ---------------- | ------------------------------------------------------------ | ---------- |
 | ?help            | Toon alle commando's                                         | ?help      |
 | ?claim           | Spawn een container als deze niet bestaat                    | ?claim     |
 | ?claimto {dstID} | Claim van een terminal die naar een specifieke locatie gaat. | ?claimto 1 |
 | ?claim [ID]      | Claim een container                                          | ?claim 1   |
 | ?unclaim {ID}    | Unclaim een container                                        | ?unclaim 1 |
 | ?listdst         | Toont alle vracht bestemmingen van de terminal               | ?listdst   |
 | ?deliver {ID}    | Gebruik dit bij een afleverplaats om je vracht te leveren    | ?deliver 1 |
 | ?myclaims        | Toon je geclaimde lading                                     | ?myclaims  |


## Voertuig Manager Commando's

| Opdracht                                                              | Beschrijving                                 | Voorbeeld             |
| --------------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| ?v help                                                               | Toont je sub-commando's                      | ?v help               |
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




