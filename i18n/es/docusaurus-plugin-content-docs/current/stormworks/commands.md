---
sidebar_position: 3
description: Comandos de Stormworks.
---


# Comandos del juego

| Comando           | Breve  | Descripción                                                      | &nbsp;Ejemplo |
| ----------------- | ------ | ---------------------------------------------------------------- | ------------- |
| ?help [command]   | &nbsp; | Mostrar comandos disponibles o mostrar descripción de un comando | ?help auth    |
| ?auth             | &nbsp; | Comprueba si estás autenticado                                   | ?auth         |
| ?staff            | &nbsp; | Muestra los miembros del staff conectados al servidor            | ?staff        |
| ?pos              | &nbsp; | Muestra la posición actual                                       | ?pos          |
| ?die              | &nbsp; | Respawnea                                                        | ?die          |
| ?dm {id} {msg}    | &nbsp; | Envía un mensaje privado a otro usuario                          | ?dm 1 hi      |
| ?reply {msg}      | ?r     | Responde al último mensaje privado                               | ?reply hi     |
| ?user             | ?u     | Muestra la información de usuario                                | ?user         |
| ?clean            | ?c     | Elimina todos los vehículos que has spawneado                    | ?clean        |
| ?despawn {vid}    | ?d     | Elimina el vehículo {identificador de vehículo}                  | ?despawn 1    |
| ?give {id}        | &nbsp; | Da el objeto {id}                                                | ?give 1       |
| ?outfit {id}      | &nbsp; | Da la vestimenta {id}                                            | ?outfit 1     |
| ?travel {id}      | &nbsp; | Viaja al destino                                                 | ?travel 1     |
| ?home {name}      | &nbsp; | Ir a un punto de reaparición                                     | ?home mp      |
| ?homes            | &nbsp; | Lista los puntos de reaparición asignados                        | ?homes        |
| ?sethome {name}   | &nbsp; | Establece un punto de reaparición                                | ?sethome mp   |
| ?delhome {name}   | &nbsp; | Elimina un punto de reaparición                                  | ?delhome mp   |
| ?topup or ?refill | &nbsp; | Rellena un vehículo compatible con la zona topup.                | ?topup        |

## Comandos de HRP Cargo

 | Comando          | Descripción                                            | Ejemplo    |
 | ---------------- | ------------------------------------------------------ | ---------- |
 | ?help            | Muestra los comandos                                   | ?help      |
 | ?claim           | Spawnea un contenedor (si no existe uno anteriormente) | ?claim     |
 | ?claimto {dstID} | Spawnea un contenedor con un destino definido.         | ?claimto 1 |
 | ?claim [ID]      | Reclama un contenedor                                  | ?claim 1   |
 | ?unclaim {ID}    | Quita el contenedor de tu posesión                     | ?unclaim 1 |
 | ?listdst         | Muestra los destinos disponibles                       | ?listdst   |
 | ?deliver {ID}    | Entrega el contenedor                                  | ?deliver 1 |
 | ?myclaims        | Muestra tus contenedores                               | ?myclaims  |


## Comandos de Gestor de Vehículos

| Comando                                                               | Descripción                                  | Ejemplo               |
| --------------------------------------------------------------------- | -------------------------------------------- | --------------------- |
| ?v help                                                               | Muestra los comandos                         | ?v help               |
| ?v info                                                               | Muestra la información del vehículo          | ?v info               |
| ?v list                                                               | Listar todos los vehículos que spawneaste    | ?v list               |
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




