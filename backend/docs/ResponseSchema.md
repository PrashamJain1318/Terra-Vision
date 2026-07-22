# LocalLens AI — Response Schema Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Output Response Interface

```json
{
  "success": true,
  "message": "AI Itinerary generated successfully",
  "data": {
    "_id": "6a5fef395c72ccbcfd440599",
    "user": "6a5fef395c72ccbcfd4405d1",
    "destination": "Shimla, HP, India",
    "travelDays": 3,
    "travelers": 2,
    "travelStyle": "balanced",
    "budget": "balanced",
    "interests": ["nature", "foodie"],
    "generatedResponse": {
      "tripTitle": "AI Expedition: Shimla, HP, India",
      "destination": "Shimla, HP, India",
      "days": 3,
      "summary": "A carefully curated 3-day travel experience...",
      "estimatedBudget": "$150 - $350",
      "itinerary": [
        {
          "day": 1,
          "title": "Day 1: Exploring Highlights of Shimla",
          "morning": "Visit top-rated scenic vantage points...",
          "afternoon": "Experience authentic local cuisine...",
          "evening": "Sunset viewpoints and tea house walkthroughs.",
          "foodSuggestions": ["Local Bistro Day 1", "Heritage Tea House"]
        }
      ],
      "travelTips": ["Carry local currency", "Keep digital ID copies"],
      "packingChecklist": ["Comfortable shoes", "Layered jacket"],
      "bestTimeToVisit": "March to June",
      "localEtiquette": "Respect local customs",
      "emergencyNumbers": "Police: 112"
    },
    "status": "generated",
    "createdAt": "2026-07-22T05:25:00.000Z"
  },
  "timestamp": "2026-07-22T05:25:00.000Z"
}
```
