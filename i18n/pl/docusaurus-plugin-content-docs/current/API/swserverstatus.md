---
sidebar_position: 3
---

# /swserverstatus

<Highlight color="#25c2a0">GET Request</Highlight>


## Uzyskaj status serwera Stormworks


export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

Możesz użyć właściwości <span class="code-text">status</span> aby uzyskać odpowiedź <span class="code-text">Offline</span>/<span class="code-text">Online</span>.

### Parametry

| Nazwa parametru |         Wymagane          | Opis                                                 |
| --------------- |:-------------------------:| ---------------------------------------------------- |
| server          | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME serwera, dla którego chcesz uzyskać status. |

## Przykłady

### Przykładowy Online

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

### Przykładowy Offline

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