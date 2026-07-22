# LocalLens AI — Phase 15 Voice AI Travel Assistant REST API

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Endpoint Specifications

### 1. Process Voice Interaction
- **POST** `/api/v1/voice/interact`
- **Request Body**:
```json
{
  "prompt": "Plan a 5-day trip to Japan",
  "provider": "gemini-voice",
  "language": "en-US"
}
```
- **Response**: `200 OK`
```json
{
  "success": true,
  "data": {
    "provider": "gemini-voice",
    "intent": "PLANNER_CREATE",
    "targetModule": "Planner",
    "speechResponse": "I can help plan your trip! I am opening the AI Travel Planner with your requested itinerary details.",
    "confidence": 0.98
  }
}
```

### 2. Transcribe Audio (STT)
- **POST** `/api/v1/voice/transcribe`
- **Response**: `200 OK`

### 3. Synthesize Speech (TTS)
- **POST** `/api/v1/voice/synthesize`
- **Response**: `200 OK`

### 4. Classify Intent
- **POST** `/api/v1/voice/intent`
- **Response**: `200 OK`

### 5. Translate Speech
- **POST** `/api/v1/voice/translate`
- **Response**: `200 OK`
