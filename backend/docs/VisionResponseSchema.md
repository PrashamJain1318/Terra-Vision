# LocalLens AI — Vision Response Schema Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Vision Scan Response Schema

```json
{
  "success": true,
  "message": "AI Vision analysis complete",
  "data": {
    "_id": "6a5fef395c72ccbcfd4405a1",
    "user": "6a5fef395c72ccbcfd4405d1",
    "imageUrl": "https://locallens.ai/sample_landmark.jpg",
    "provider": "gemini",
    "recognitionType": "landmark",
    "recognizedObject": "Viceregal Lodge (Rashtrapati Niwas)",
    "confidence": 0.98,
    "description": "Historical Jacobethan mansion located on Observatory Hill in Shimla.",
    "historicalInfo": {
      "builtYear": 1888,
      "architect": "Henry Irwin",
      "significance": "Former summer residence of the Viceroy of India."
    },
    "location": {
      "name": "Observatory Hill, Shimla",
      "lat": 31.1048,
      "lng": 77.1734
    },
    "nearbyPlaces": [
      { "name": "Bird Sanctuary Viewpoint", "distance": "600 m" }
    ],
    "travelTips": [
      "Visit between 10:00 AM and 5:00 PM."
    ],
    "createdAt": "2026-07-22T11:00:00.000Z"
  },
  "timestamp": "2026-07-22T11:00:00.000Z"
}
```
