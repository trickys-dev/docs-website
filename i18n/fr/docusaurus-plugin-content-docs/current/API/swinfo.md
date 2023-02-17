---
sidebar_position: 6
---

# /swinfo

<Highlight color="#25c2a0">Requête GET</Highlight>


## Obtenir le Nombre Global de Joueurs sur Stormworks

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      fontSize: '20px',
    }}>
    {children}
  </span>
);

### Paramètres
Aucun

## Exemples
### Exemple de Succès
```json
{
  "success": true,
  "globalPlayerCount": 1420
  "TrickysAPIinfo": {
     "APIversion": "v1.1.0",
  }
}
```