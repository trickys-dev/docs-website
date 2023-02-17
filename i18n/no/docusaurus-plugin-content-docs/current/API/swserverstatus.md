---
sidebar_position: 3
---

# /swserverstatus

<Highlight color="#25c2a0">GET Request</Highlight>


## Få Stormworks serverstatus


export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

Du kan bruke <span class="code-text">status</span> egenskapen for å få et <span class="code-text">Offline</span>/<span class="code-text">Online</span>  svar.

### Parametere

| Parameter navn |          kreves           | Beskrivelse                                  |
| -------------- |:-------------------------:| -------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | KODENAVN av serveren du vil ha statusen for. |

## Eksempler

### Nettbasert eksempel

```json
{
    "success": true,
    "status": "Online",
    "responseTimeMs": 109,
    "uptime": {
        "uptimeShort": "5h 58m 39s",
        "uptimeLong": "5 hours 58 minutes 39 seconds",
        "uptimeSeconds": 21519
    },
    "serverName": "[1/7] Tricky's | discord.gg/trickys | Spawn All",
    "onlinePlayers": 0,
    "maxPlayers": 12,
    "operatingSystem": "Windows",
    "hasPassword": "No",
    "serverId": 90164658396136483,
    "version": "v1.6.12",
    "serverTPS": "63",
    "isUpToDate": true,
    "isWeaponsDlc": false,
    "isIndustrialDlc": false,
    "owner": "Tricky",
    "serverLocation": "EU",
    "GblsAccess": true,
    "GblsApi": true,
    "TrickysAPIinfo": {
        "APIversion": "v1.1.0"
    }
}
```

### Frakoblet eksempel

```json
{
    "success": false,
    "status": "Offline",
    "message": "Cannot get response from the server.",
    "TrickysAPIinfo": {
        "APIversion": "v1.1.0"
    }
}
```