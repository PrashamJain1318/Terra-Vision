# LocalLens AI — Travel Memory Capsule API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/memory`

---

## Endpoints

### 1. Create Memory Capsule
- **POST** `/api/v1/memory/create`
- **Body**:
```json
{
  "title": "Amritsar Heritage & Food Escape",
  "destination": "Amritsar, Punjab",
  "description": "3-day spiritual and culinary journey"
}
```
- **Response**: `201 Created`

---

### 2. Generate AI Travel Story
- **POST** `/api/v1/memory/story`
- **Body**:
```json
{
  "memoryId": "6a5fef395c72ccbcfd4405d1",
  "destination": "Amritsar, Punjab",
  "templateId": "poetic",
  "provider": "gemini"
}
```
- **Response**: `200 OK`

---

### 3. Fetch Memory Timeline
- **GET** `/api/v1/memory/timeline`
- **Response**: `200 OK`
