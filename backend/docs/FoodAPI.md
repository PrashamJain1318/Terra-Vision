# LocalLens AI — Local Food AI API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/food`

---

## Endpoints

### 1. Discover Local Food & Delicacies
- **POST** `/api/v1/food/discover`
- **Body**:
```json
{
  "destination": "Amritsar, Punjab",
  "cuisine": "street_food",
  "diet": "vegetarian",
  "provider": "gemini"
}
```
- **Response**: `200 OK`

---

### 2. Fetch Discovery History
- **GET** `/api/v1/food/history`
- **Response**: `200 OK`

---

### 3. Fetch Saved Foods
- **GET** `/api/v1/food/saved`
- **Response**: `200 OK`
