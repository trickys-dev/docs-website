---
sidebar_position: 1
---

# Autorisering

Alla API rutter kräver autorisering i formen av en API nyckel. Du kan få en API nyckel genom att ansöka här.

Om du redan har några nycklar så kan du se de på din kontosida.

För att autorisera din begäran kan du ange din nyckel med:


- en <span class="code-text">apinyckel</span> GET parameter, eller
- en <span class="code-text">X-API-KEY</span> HTTP header

## Exempel På Begäran

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Om allt fungerar och du har angett en fungerande nyckel, borde du få:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```