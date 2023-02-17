---
sidebar_position: 7
---

# /gblsbans

<Highlight color="#25c2a0">GET Request</Highlight>

export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );


## Få globale utestengelsesliste systemdata
(bare servereiere har tilgang til Global Ban List System) Merk at <span class="code-text">timecreated</span> kan være null hvis profilen er privat.


### Parametere
Ingen

## Eksempler
### Vellykket eksempel
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