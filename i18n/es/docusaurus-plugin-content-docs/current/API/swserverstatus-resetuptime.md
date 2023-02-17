---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">POST Request</span>


## Restablecer el tiempo de actualización del servidor Stormworks

### Parámetros

| Nombre del parámetro |         Requerido         | Descripción                                                              |
| -------------------- |:-------------------------:| ------------------------------------------------------------------------ |
| server               | <i class="fas fa-fw fa-check-circle text-success"></i> | NOMBRE DEL servidor al que desea restablecer el tiempo de actualización. |

## Ejemplos
### Ejemplo de Éxito
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```