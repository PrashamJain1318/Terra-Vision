# LocalLens AI — AI Travel Planner API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/planner`

---

## Endpoints

### 1. Generate Itinerary
- **POST** `/api/v1/planner/generate`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "destination": "Shimla, HP, India",
  "travelDays": 3,
  "travelers": 2,
  "travelStyle": "balanced",
  "budget": "balanced",
  "interests": ["nature", "foodie"]
}
```
- **Response**: `201 Created`

---

### 2. Fetch User Planner History
- **GET** `/api/v1/planner/history?page=1&limit=10`
- **Response**: `200 OK`

---

### 3. Fetch Single Itinerary
- **GET** `/api/v1/planner/:tripId`
- **Response**: `200 OK`

---

### 4. Update Itinerary
- **PUT** `/api/v1/planner/:tripId`
- **Response**: `200 OK`

---

### 5. Delete Itinerary
- **DELETE** `/api/v1/planner/:tripId`
- **Response**: `200 OK`

---

### 6. Save Itinerary
- **POST** `/api/v1/planner/save`
- **Body**: `{ "tripId": "<ID>" }`
- **Response**: `200 OK`

---

### 7. Regenerate Itinerary
- **POST** `/api/v1/planner/regenerate`
- **Body**: `{ "tripId": "<ID>" }`
- **Response**: `200 OK`
