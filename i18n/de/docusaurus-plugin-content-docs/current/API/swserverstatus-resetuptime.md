---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">GET-Anfrage</span>


## Stormworks Server Uptime zurücksetzen

### Parameter

| Name des Parameters |       Erforderlich        | Beschreibung                                  |
| ------------------- |:-------------------------:| --------------------------------------------- |
| server              | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME des Servers, den Sie pingen möchten. |

## Beispiele
### Beispiel erfolgreich
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```