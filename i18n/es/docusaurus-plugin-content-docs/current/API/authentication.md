---
sidebar_position: 1
---

# Autentificación

Todas las rutas API requieren autentificación en forma de una clave API. Puedes obtener una clave del API solicitándola aquí.

Si ya tienes algunas claves, puedes verlas en la página de tu cuenta.

Para autenticar tu solicitud, puede proporcionar su clave con:


- un parámetro GET de <span class="code-text">apikey</span>, o
- un encabezado HTTP <span class="code-text">X-API-KEY</span>

## Ejemplo de solicitud Ping

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Si todo funciona y ha proporcionado una clave válida, debería obtener:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```