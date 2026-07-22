# LocalLens AI — Travel Safety & Scam Shield API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/safety`

---

## Endpoints

### 1. Calculate Safety Score
- **GET** `/api/v1/safety/score?destination=Amritsar,%20Punjab`
- **Response**: `200 OK`
```json
{
  "success": true,
  "data": {
    "destination": "Amritsar, Punjab",
    "safetyScore": 92,
    "riskLevel": "low"
  }
}
```

---

### 2. Fetch Emergency Directory
- **GET** `/api/v1/safety/emergency`
- **Response**: `200 OK`
