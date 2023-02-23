---
sidebar_position: 5
---

# /swserverstatus/ping

<span class="request-bubble request-get">GET-Anfrage</span>


## Holen Sie sich den Ping eines Servers aus mehreren Ländern

### Parameter

| Name des Parameters |       Erforderlich        | Beschreibung                                 |
| ------------------- |:-------------------------:| -------------------------------------------- |
| server              | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME des Servers, den Sie pingen möchten |

## Beispiele
### Dubai (UAE) Beispiel
```json
{
  "success": true,
  "updated": 1675274414,
  "data": {
    "Dubai": {
      "Info": {
        "countryCode": "ae",
        "countryName": "UAE",
        "cityName": "Dubai"
      },
      "pingResults": {
        "success": true,
        "requestsSent": 4,
        "requestsReceived": 4,
        "rttMinMs": 117.752075195312,
        "rttAvgMs": 117.898344993591,
        "rttMaxMs": 118.050098419189
      }
    },
  },
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```