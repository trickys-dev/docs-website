---
sidebar_position: 5
---

# /swserverstatus/ping

<Highlight color="#25c2a0">GET Request</Highlight>


## Get the ping of a server from multiple countries

export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

### Parameters

| Parameter name |         Required          | Description                                  |
| -------------- |:-------------------------:| -------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME of the server that you want to ping |

## Examples
### Dubai (UAE) Example
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