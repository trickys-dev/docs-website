---
sidebar_position: 1
---

# Uwierzytelnianie

All API routes require authentication in a form of an API key. Możesz uzyskać jeden klucz API, aplikując tutaj.

Jeśli masz już jakieś klucze, możesz je zobaczyć na stronie swojego konta.

Aby uwierzytelnić swoje żądanie, możesz podać swój klucz przez:


- parametr <span class="code-text">apikey</span> GET, lub
- <span class="code-text">X-API-KEY</span> nagłówek HTTP

## Przykład żądania Ping

<pre>
/api/v1/ping?apikey=<span class="code-text">YOUR_API_KEY</span>
</pre>

Jeżeli wszystko działa i podałeś prawidłowy klucz, powinieneś uzyskać:

```json
{
  "success": true,
  "message": "Pong! Congratulations, you can access the API.",
  "TrickysAPIinfo": {
    "APIversion": "v1.1.0"
  }
}
```