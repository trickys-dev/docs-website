---
sidebar_position: 7
---

# /gblsbans

<span class="request-bubble request-get">GET Begäran</span>


## Få Global Ban List System Data
(bara server ägare kan få tag på Global Ban List Systemet) Observera att <span class="code-text">timecreated</span> kan vara null om profilen är privat.


### Parametrar
Inga

## Exemplar
### Exempel på ett lyckat försök
```json
{
  "success": true,
  "bans": {
    "121": {
      "banid": "121",
      "servername": "trickys",
      "servername_friendly": "Tricky's Server",
      "reason": "Ban Reason",
      "issued": 1591908288,
      "banned_user": {
        "steam_profile": {
          "steamid": "00000000000000000",
          "personaname": "Tricky",
          "profileurl": "https://steamcommunity.com/profiles/00000000000000000/",
          "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/00000000000000000.jpg",
          "timecreated": 1536000516,
          "lastRefresh": 1621123206
        },
        "discord_profile": null
      },
      "executor_steam_profile": {
        "steamid": "00000000000000000",
        "personaname": "Tricky",
        "profileurl": "https://steamcommunity.com/profiles/00000000000000000/",
        "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6b/00000000000000000.jpg",
        "timecreated": 1520790508,
        "lastRefresh": 1620376495
      }
    },
```