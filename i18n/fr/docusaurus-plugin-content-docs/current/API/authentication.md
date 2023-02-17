---
sidebar_position: 1
---

# Authentification

Toutes les routes de l'API nécessitent une authentification sous la forme d'une clé API. Vous pouvez obtenir une clé API en appliquant ici.

Si vous avez déjà des clés, vous pouvez les consulter sur la page de votre compte.

Pour authentifier votre demande, vous pouvez fournir votre clé avec :


- un paramètre GET <span class="code-text">apikey</span> ou
- un en-tête HTTP <span class="code-text">X-API-KEY</span>

## Exemple de Requête Ping

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Si tout fonctionne et que vous avez fourni une clé valide, vous devriez obtenir:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```