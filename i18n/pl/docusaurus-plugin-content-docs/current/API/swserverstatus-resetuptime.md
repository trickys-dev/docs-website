---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<Highlight color="#F39C12">Żądanie POST</Highlight>


## Resetuj czas pracy serwera Stormworks


export const Highlight = ({children, color}) => ( <span style={{ backgroundColor: color, borderRadius: '20px', color: '#fff', padding: '10px', fontSize: }}>
    {children}
  </span> );

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