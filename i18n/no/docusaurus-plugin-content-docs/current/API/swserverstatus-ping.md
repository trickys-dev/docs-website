---
sidebar_position: 5
---

# /swserverstatus/ping

<span class="request-bubble request-get">Få forespørsel</span>


## Få ping av en server fra flere land

### Parametere

| Parameter navn |          kreves           | Beskrivelse                       |
| -------------- |:-------------------------:| --------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | KODENAVN av serveren du vil pinge |

## Eksempler
### Dubai (UAE) Eksempel
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