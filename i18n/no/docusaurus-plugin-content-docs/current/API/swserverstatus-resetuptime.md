---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">GET Request</span>


## Tilbakestill Stormworks server oppetid

### Parametere

| Parameter navn |          kreves           | Beskrivelse                                               |
| -------------- |:-------------------------:| --------------------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | KODENAVN fra serveren du vil tilbakestille oppetiden for. |

## Eksempler
### Vellykket eksempel
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```