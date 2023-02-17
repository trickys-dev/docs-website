---
sidebar_position: 4
---

# /swserverstatus/resetuptime

<span class="request-bubble request-post">GET Request</span>


## Reset Stormworks Server Uptime

### Parameters

| Parameter name |         Required          | Description                                                   |
| -------------- |:-------------------------:| ------------------------------------------------------------- |
| server         | <i class="fas fa-fw fa-check-circle text-success"></i> | CODENAME of the server that you want to reset the uptime for. |

## Examples
### Success Example
```json
{
  "success": true,
  "status": "reset",
  "message": "server uptime has been reset"
}
```