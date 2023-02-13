---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<Highlight color="#F39C12">Requête POST</Highlight>


## Réinitialiser la Disponibilité du Serveur Stormworks


export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

### Paramètres

| Nom du paramètre |        Obligatoire        | Description                                                                          |
| ---------------- |:-------------------------:| ------------------------------------------------------------------------------------ |
| serveur          | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME du serveur pour lequel vous voulez réinitialiser la durée de disponibilité. |

## Exemples
### Exemple de Succès
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```