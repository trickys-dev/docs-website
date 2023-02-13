---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<Highlight color="#F39C12">POST forespørsel</Highlight>


## Tilbakestill Stormworks server oppetid


export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

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