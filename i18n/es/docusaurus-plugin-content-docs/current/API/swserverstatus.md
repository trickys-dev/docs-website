---
sidebar_position: 3
---

# /swserverstatus

<span class="request-bubble request-get">Solicitud GET</span>


## Obtener el estado del servidor de Stormworks

Puedes usar la propiedad <span class="code-text">status</span> para obtener una respuesta <span class="code-text">sin conexión</span>/<span class="code-text">en línea</span>.

### Parámetros

| Nombre del parámetro |         Requerido         | Descripción                                              |
| -------------------- |:-------------------------:| -------------------------------------------------------- |
| server               | <i class="fas fa-fw fa-check-circle text-success"></i> | NOMBRE del servidor para el que desea obtener el estado. |

## Ejemplos

### Ejemplo en línea

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

### Ejemplo sin conexión

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