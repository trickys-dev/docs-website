---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">GET begäran</span>


## Återställ Stormworks Server Upptid

### Parametrar

| Parameter namn |       Obligatoriskt       | Beskrivning                                              |
| -------------- |:-------------------------:| -------------------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME av servern som du vill återställa upptiden för. |

## Exemplar
### Exempel på ett lyckat försök
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```