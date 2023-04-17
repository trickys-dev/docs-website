---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">Requête GET</span>


## Réinitialiser la Disponibilité du Serveur Stormworks

### Paramètres

| Nom du paramètre |        Obligatoire        | Description                                                                          |
| ---------------- |:-------------------------:| ------------------------------------------------------------------------------------ |
| server           | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME du serveur pour lequel vous voulez réinitialiser la durée de disponibilité. |

## Exemples
### Exemple de Succès
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```