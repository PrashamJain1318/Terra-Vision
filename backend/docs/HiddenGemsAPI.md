# LocalLens AI — Hidden Gems AI API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/hidden-gems`

---

## Endpoints

### 1. Discover Hidden Gems
- **POST** `/api/v1/hidden-gems/discover`
- **Body**:
```json
{
  "destination": "Shimla, Himachal Pradesh",
  "interests": ["heritage", "nature"],
  "provider": "gemini"
}
```
- **Response**: `200 OK`

---

### 2. Fetch Discovery History
- **GET** `/api/v1/hidden-gems/history`
- **Response**: `200 OK`

---

### 3. Fetch Saved Gems
- **GET** `/api/v1/hidden-gems/saved`
- **Response**: `200 OK`
