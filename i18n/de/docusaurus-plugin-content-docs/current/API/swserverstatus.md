---
sidebar_position: 3
---

# /swserverstatus

<span class="request-bubble request-get">GET-Anfrage</span>


## Stormworks Serverstatus erhalten

Sie können die Eigenschaft <span class="code-text">Status</span> verwenden, um eine <span class="code-text">Offline</span>/<span class="code-text">Online</span>  Antwort zu erhalten.

### Parameter

| Name des Parameters |       Erforderlich        | Beschreibung                                                   |
| ------------------- |:-------------------------:| -------------------------------------------------------------- |
| server              | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME des Servers, für den Sie den Status erhalten möchten. |

## Beispiele

### Online Beispiel

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

### Offline Beispiel

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