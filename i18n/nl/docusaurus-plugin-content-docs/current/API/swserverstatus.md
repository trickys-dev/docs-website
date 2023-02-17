---
sidebar_position: 3
---

# /swserverstatus

<Highlight color="#25c2a0">GET Request</Highlight>


## Get Stormworks server status


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      fontSize: '20px',
    }}>
    {children}
  </span>
);

You can use the <span class="code-text">status</span> property to get a <span class="code-text">Offline</span>/<span class="code-text">Online</span>  response.

### Parameters

| Parameter name |         Required          | Description                                                 |
| -------------- |:-------------------------:| ----------------------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME of the server that you want to get the status for. |

## Examples

### Online Example

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

### Offline Example

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