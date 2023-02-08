---
sidebar_position: 3
description: Stormworks In-Game Commands.
---


# Game Commands

| Command           | Short        | Description                                          | &nbsp;Example |
|-------------------|--------------|------------------------------------------------------|---------------|
| ?help [command]   | &nbsp;       | Show all commands or get more detail about a command | ?help auth    |
| ?auth             | &nbsp;       | Checks your auth status                              | ?auth         |
| ?staff            | &nbsp;       | Show online staff                                    | ?staff        |
| ?pos              | &nbsp;       | Shows current position                               | ?pos          |
| ?die              | &nbsp;       | Have a guess                                         | ?die          |
| ?dm {id} {msg}    | &nbsp;       | Direct message another user                          | ?dm 1 hi      |
| ?reply {msg}      | ?r           | Reply to a DM                                        | ?reply hi     |
| ?user             | ?u           | Gives you your own user information                  | ?user         |
| ?clean            | ?c           | Removes all vehicles spawned by you                  | ?clean        |
| ?despawn {vid}    | ?d           | Despawns a single vehicle                            | ?despawn 1    |
| ?give {id}        | &nbsp;       | Give an item                                         | ?give 1       |
| ?outfit {id}      | &nbsp;       | Set a outfit                                         | ?outfit 1     |
| ?travel {id}      | &nbsp;       | Travel to destination                                | ?travel 1     |
| ?home {name}      | &nbsp;       | Goto a home                                          | ?home mp      |
| ?homes            | &nbsp;       | Lists homes                                          | ?homes        |
| ?sethome {name}   | &nbsp;       | Set a home                                           | ?sethome mp   |
| ?delhome {name}   | &nbsp;       | Delete a home                                        | ?delhome mp   |
| ?topup or ?refill | &nbsp;       | Refill a topup compatibles vehicle in a topup zone.  | ?topup        |

## HRP Cargo Commands

 Command          | Description                                            | Example
------------------|--------------------------------------------------------|------------
 ?help            | Shows you commands                                     | ?help
 ?claim           | Spawns a container if one does not exist               | ?claim
 ?claimto {dstID} | Claim from a terminal that goes to a specify location. | ?claimto 1
 ?claim [ID]      | Claims a container                                     | ?claim 1
 ?unclaim {ID}    | Unclaims a container                                   | ?unclaim 1
 ?listdst         | Shows all crate destinations from currect terminal     | ?listdst
 ?deliver {ID}    | Use this when at a delivery area to turn in your cargo | ?deliver 1
 ?myclaims        | Show you your claimed cargo                            | ?myclaims


## Vehicle Manager Commands

| Command                                                                   | Description                                          | Example                                                                                                           |
|---------------------------------------------------------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| ?v help                                                                   | Shows you sub-commands                               | ?v help                                                                                                           |
| ?v info                                                                   | View your vehicle info                               | ?v info                                                                                                           |
| ?v list                                                                   | List all vehicles you spawned                        | ?v list                                                                                                           |
| ?v {vid} help                                                             | View sub-commands for ?v {id}                        | ?v 1 help                                                                                                         |
| ?v {vid} info                                                             | View info about vehicle                              | ?v 1 info                                                                                                         |
| ?v {vid} despawn                                                          | Despawn vehicle                                      | ?v 1 despawn                                                                                                      |
| ?v {vid} owner {id}                                                       | Transfer ownership of vehicle                        | ?v 1 owner 1                                                                                                      |
| ?v {vid} tp                                                               | Teleport to a seat in the vehicle                    | ?v 1 tp                                                                                                           |
| ?v {vid} kick {id}                                                        | Kick a user from a vehicle                           | ?v 1 kick 1                                                                                                       |
| ?v {vid} kickall                                                          | Kick all users from vehicle                          | ?v 1 kickall                                                                                                      |
| ?v {vid} repair                                                           | Repair vehicle                                       | ?v 1 repair                                                                                                       |
| ?v {vid} accessmode {mode}                                                | Change who can sit in a seat                         | ?v 1 accessmode all<br/>?v 1 accessmode whitelist<br/>?v 1 accessmode blacklist<br/>?v 1 accessmode none                         |
| ?v {vid} whitelist/blacklist add {id}                                     | Add someone to whitelist/blacklist                   | ?v 1 whitelist add 1 <br/>?v 1 blacklist add 1                                                                         |
| ?v {vid} whitelist/blacklist remove {id}                                  | Remove someone from whitelist/blacklist              | ?v 1 whitelist remove 1<br/>?v 1 blacklist remove 1                                                                    |
| ?v {vid} whitelist/blacklist list                                         | Shows current whitelist/blacklist                    | ?v 1 whitelist list<br/>?v 1 blacklist list                                                                            |
| ?v {vid} whitelist/blacklist clear                                        | Clear whitelist/blacklist                            | ?v 1 whitelist clear<br/>?v 1 blacklist clear                                                                          |
| ?v {vid} sync                                                             | Sync settings with default settings                  | &nbsp;?v 1 sync                                                                                                   |
| Any vehicle you spawn will come with your default settings on all servers |
| ?v default help                                                           | View sub-commands for ?v default                     | ?v default help                                                                                                   |
| ?v default info                                                           | View current default settings                        | ?v default info                                                                                                   |
| ?v default accessmode                                                     | Set default accessmode                               | ?v default accessmode all<br/>?v default accessmode whitelist<br/>?v default accessmode blacklist<br/>?v default accessmode none |
| ?v default whitelist/blacklist add {id}                                   | Add someone to your default whitelist/blacklist      | ?v default whitelist add 1 <br/>?v default blacklist add 1                                                             |
| ?v default whitelist/blacklist remove {id}                                | Remove someone from your default whitelist/blacklist | ?v default whitelist remove 1<br/>?v default blacklist remove 1                                                        |
| ?v default whitelist/blacklist list                                       | Shows current default whitelist/blacklist            | ?v default whitelist list<br/>?v default blacklist list                                                                |
| ?v default whitelist/blacklist clear                                      | Clear default whitelist/blacklist                    | ?v default whitelist clear<br/>?v default blacklist clear                                                              |




