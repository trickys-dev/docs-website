---
sidebar_position: 1
---

# Autentisering

Alle API rutene krever autentesering i en form av en API nøkkel. Du kan få en API nøkkel ved å søke her.

Hvis du allerede har noen nøkler kan du se dem på profilen din.

For å godkjenne forespørselen din kan du angi nøkkelen din med:


- En <span class="code-text">apikey</span> GET parameter, Eller
- En <span class="code-text">X-API-KEY</span> HTTP-Topp

## Ping Forespørsell Exempel

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Hvist alt funker & du har angit nøkkelen din, bør du få:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```