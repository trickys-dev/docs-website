---
sidebar_position: 3
description: Stormworks In-Game Commands
---


# Commandes du jeu

| Commandes         | Commandes courts | Descriptions                                                                    | &nbsp;Exemples |
| ----------------- | ---------------- | ------------------------------------------------------------------------------- | -------------- |
| ?help [command]   | &nbsp;           | Afficher toutes les commandes ou obtenir plus de détails sur une commande       | ?help auth     |
| ?auth             | &nbsp;           | Vérifiez votre statut d'autorisation                                            | ?auth          |
| ?staff            | &nbsp;           | Afficher le status du personnel en ligne                                        | ?staff         |
| ?pos              | &nbsp;           | Utiliser la position actuel                                                     | ?pos           |
| ?die              | &nbsp;           | Mourir                                                                          | ?die           |
| ?dm {id} {msg}    | &nbsp;           | Message direct à un autre utilisateur                                           | ?dm 1 hi       |
| ?reply {msg}      | ?r               | Répondre à un message privé                                                     | ?reply hi      |
| ?user             | ?u               | Vous donnent vos propres informations d'utilisateur                             | ?user          |
| ?clean            | ?c               | Supprime tous les véhicules que vous avez fait apparaitre                       | ?clean         |
| ?despawn {vid}    | ?d               | Fait disparaître un seul véhicule                                               | ?despawn 1     |
| ?give {id}        | &nbsp;           | Donner un objet                                                                 | ?give 1        |
| ?outfit {id}      | &nbsp;           | Définir une tenue                                                               | ?outfit 1      |
| ?travel {id}      | &nbsp;           | Se téléporter jusqu'à la destination                                            | ?travel 1      |
| ?home {name}      | &nbsp;           | Aller à une maison                                                              | ?home mp       |
| ?homes            | &nbsp;           | Liste des maisons                                                               | ?homes         |
| ?sethome {name}   | &nbsp;           | Définir une maison                                                              | ?sethome mp    |
| ?delhome {name}   | &nbsp;           | Supprimer une maison                                                            | ?delhome mp    |
| ?topup or ?refill | &nbsp;           | Remplissez un véhicule compatible avec les recharges dans une zone de recharge. | ?topup         |

## Commandes de Matériel HRP

 | Commandes        | Descriptions                                                                                           | Exemples   |
 | ---------------- | ------------------------------------------------------------------------------------------------------ | ---------- |
 | ?help            | Montrer toutes les commandes                                                                           | ?help      |
 | ?claim           | Fait apparaître un conteneur s'il n'existe pas                                                         | ?claim     |
 | ?claimto {dstID} | Réclamer à partir d'un terminal qui va à un emplacement précis.                                        | ?claimto 1 |
 | ?claim [ID]      | Réclamer un conteneur                                                                                  | ?claim 1   |
 | ?unclaim {ID}    | Ne pas revendiquer un conteneur                                                                        | ?unclaim 1 |
 | ?listdst         | Montre toutes les destinations de caisse depuis le terminal en cours de lecture                        | ?listdst   |
 | ?deliver {ID}    | Utilisez ceci lorsque vous vous trouvez dans une zone de livraison pour retourner dans votre cargaison | ?deliver 1 |
 | ?myclaims        | Montre vos cargaisons réclamées                                                                        | ?myclaims  |


## Commandes du gestionnaire de véhicule

| Commandes                                                               | Descriptions                                              | Exemples              |
| ----------------------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| ?v help                                                                 | Montre les sous-commandes                                 | ?v help               |
| ?v info                                                                 | Voir les informations de votre véhicule                   | ?v info               |
| ?v list                                                                 | Liste de tous les véhicules que vous avez fait apparaitre | ?v list               |
| ?v {vid} help                                                           | Voir les sous-commandes pour ?v {id}                      | ?v 1 help             |
| ?v {vid} info                                                           | Voir les informations sur le véhicule                     | ?v 1 info             |
| ?v {vid} despawn                                                        | Faire disparaître un véhicule                             | ?v 1 despawn          |
| ?v {vid} owner {id}                                                     | Transférer de propriétaire sur le véhicule                | ?v 1 owner 2          |
| ?v {vid} tp                                                             | Téléporter à un siège dans le véhicule                    | ?v 1 tp               |
| ?v {vid} kick {id}                                                      | Expulser un utilisateur d'un véhicule                     | ?v 1 kick 1           |
| ?v {vid} kickall                                                        | Expulser tous les utilisateurs du véhicule                | ?v 1 kickall          |
| ?v {vid} repair                                                         | Réparez un véhicule (<a href="/supporters#what-perks-are-there">Silver+</a>)           | ?v 1 repair           |
| Mode de contrôle d'accès. Changer qui peut interagir avec vos véhicules |                                                           |                       |
| ?v accessmode (all/whitelist/blacklist/none)                            | Changer qui peut interagir avec votre véhicule            | ?v accessmode all     |
| ?v whitelist/blacklist add {id}                                         | Ajouter quelqu'un à votre liste blanche/noire             | ?v whitelist add 1    |
| ?v whitelist/blacklist remove {id}                                      | Retirer quelqu'un de votre liste blanche/noire            | ?v whitelist remove 1 |
| ?v whitelist/blacklist list                                             | Affiche votre liste blanche/noire actuelle                | ?v whitelist list     |
| ?v whitelist/blacklist clear                                            | Efface la liste blanche/noire                             | ?v whitelist clear    |




