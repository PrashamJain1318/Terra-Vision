# LocalLens AI — AI Vision Landmark Scanner API Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Base Path
`/api/v1/vision`

---

## Endpoints

### 1. Analyze Image
- **POST** `/api/v1/vision/analyze`
- **Body**:
```json
{
  "imageUrl": "https://locallens.ai/sample_landmark.jpg",
  "provider": "gemini"
}
```
- **Response**: `200 OK`

---

### 2. Upload File Metadata
- **POST** `/api/v1/vision/upload`
- **Headers**: `Content-Type: multipart/form-data`
- **Response**: `200 OK`

---

### 3. Fetch Scan History
- **GET** `/api/v1/vision/history`
- **Response**: `200 OK`

---

### 4. Fetch Scan Detail
- **GET** `/api/v1/vision/history/:scanId`
- **Response**: `200 OK`

---

### 5. Delete Scan
- **DELETE** `/api/v1/vision/history/:scanId`
- **Response**: `200 OK`

---

### 6. Save Memory
- **POST** `/api/v1/vision/save-memory`
- **Body**:
```json
{
  "scanId": "6a5fef395c72ccbcfd4405a1",
  "title": "Viceregal Lodge Tour Memory",
  "notes": "Visited during morning hours."
}
```
- **Response**: `201 Created`
