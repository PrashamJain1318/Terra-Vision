# LocalLens AI — Maps & Location Intelligence API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/maps`

---

## Endpoints

### 1. Get Current Location
- **GET** `/api/v1/maps/current-location`
- **Response**: `200 OK`

---

### 2. Search Places
- **GET** `/api/v1/maps/search?q=Shimla&provider=google`
- **Response**: `200 OK`

---

### 3. Fetch Place Details
- **GET** `/api/v1/maps/place/:placeId`
- **Response**: `200 OK`

---

### 4. Fetch Nearby Places
- **GET** `/api/v1/maps/nearby?lat=31.1048&lng=77.1734&category=restaurant`
- **Response**: `200 OK`

---

### 5. Generate Route
- **POST** `/api/v1/maps/route`
- **Body**:
```json
{
  "origin": "Shimla Mall Road",
  "destination": "Kufri Viewpoint",
  "travelMode": "driving",
  "provider": "google"
}
```
- **Response**: `201 Created`

---

### 6. Saved Places APIs
- **POST** `/api/v1/maps/save-place`
- **GET** `/api/v1/maps/saved`
- **PUT** `/api/v1/maps/saved/:id`
- **DELETE** `/api/v1/maps/saved/:id`

---

### 7. Fetch Route History
- **GET** `/api/v1/maps/history`
- **Response**: `200 OK`
