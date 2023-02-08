---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<Highlight color="#F39C12">POST Request</Highlight>


## Reset Stormworks Server Uptime


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

### Parameters

| Parameter name    | Required     | Description                                                   |
|-------------------|:--------------:|---------------------------------------------------------------|
| server            | <i class="fas fa-fw fa-check-circle text-success"></i>           | CODENAME of the server that you want to reset the uptime for. |

## Examples
### Success Example
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```