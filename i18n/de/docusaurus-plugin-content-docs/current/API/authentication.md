---
sidebar_position: 1
---

# Authentifizierung

Alle API-Routen erfordern eine Authentifizierung in Form eines API-Schlüssels. Sie können einen API-Schlüssel erhalten, indem Sie sich hier bewerben.

Wenn Sie bereits über Schlüssel verfügen, können Sie diese auf Ihrer Kontoseite ansehen.

Um Ihre Anfrage zu authentifizieren, können Sie Ihren Schlüssel angeben mit:


- einem <span class="code-text">apikey</span> GET Parameter, oder
- einem <span class="code-text">X-API-KEY</span> HTTP Header

## Beispiel für Ping anfordern

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Wenn alles funktioniert und Sie einen gültigen Schlüssel angegeben haben, sollten Sie erhalten:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```