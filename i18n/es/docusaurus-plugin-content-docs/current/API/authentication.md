---
sidebar_position: 1
---

# Autentificación

Todas las rutas API requieren autentificación en forma de una clave API. Puedes obtener una clave del API solicitándola aquí.

If you already have some keys, you can view them on your account page.

To authenticate your request, you can provide your key with:


- an <span class="code-text">apikey</span> GET parameter, or
- an <span class="code-text">X-API-KEY</span> HTTP header

## Request Ping Example

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

If everything works and you have provided a valid key, you should get:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```