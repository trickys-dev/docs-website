---
sidebar_position: 5
---

# /swserverstatus/ping

<Highlight color="#25c2a0">Żądanie GET</Highlight>


## Uzyskaj ping serwera z wielu krajów

export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

### Parametry

| Nazwa parametru |         Wymagane          | Opis                                    |
| --------------- |:-------------------------:| --------------------------------------- |
| server          | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME serwera, który chcesz pingować |

## Przykłady
### Przykład Dubaju (UAE)
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