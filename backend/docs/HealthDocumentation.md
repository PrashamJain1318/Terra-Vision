# LocalLens AI — Health Check Endpoint Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Endpoint
`GET /health` or `GET /api/v1/health`

## Response Schema (`200 OK`)
```json
{
  "status": "healthy",
  "timestamp": "2026-07-22T11:20:00.000Z",
  "uptime": 142.8,
  "database": "connected",
  "environment": "development"
}
```
