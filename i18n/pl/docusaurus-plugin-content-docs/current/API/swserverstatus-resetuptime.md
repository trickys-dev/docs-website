---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">GET Request</span>


## Resetuj czas pracy serwera Stormworks

### Parametry

| Nazwa parametru |         Wymagane          | Opis                                                        |
| --------------- |:-------------------------:| ----------------------------------------------------------- |
| server          | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME serwera, dla którego chcesz zresetować czas pracy. |

## Przykłady
### Przykładowy sukces
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```