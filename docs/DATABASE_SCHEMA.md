# LocalLens AI — MongoDB Database Schema Specification

---

## 1. `PlaceCache` Collection
Caches Google Places API search results and Gemini AI insights per city to minimize API quotas and ensure sub-3s response times.

```typescript
interface IPlaceCache {
  cityKey: string;             // Index key (e.g. "goa_all")
  cityName: string;            // "Goa"
  category: string;            // "Beaches"
  places: Array<{
    id: string;
    name: string;
    category: string;
    subCategory?: string;
    badge?: string;
    isHiddenGem: boolean;
    isMustVisit: boolean;
    rating: number;
    reviewsCount: number;
    priceLevel: string;
    openNow: boolean;
    openingHours?: string;
    distance: string;
    description: string;
    imageUrl: string;
    photos: string[];
    googleMapsUrl: string;
    phone?: string;
    website?: string;
    aiScore: number;
    aiInsights: {
      summary: string;
      crowdLevel: string;
      photographyScore: string;
      familyFriendly: string;
      adventureScore: string;
      nightlifeScore?: string;
      safetyScore?: string;
      budgetScore?: string;
      suggestedDuration?: string;
    };
    city: string;
    lat: number;
    lng: number;
  }>;
  weather: {
    cityName: string;
    temp: string;
    condition: string;
    aqi: number;
    aqiLabel: string;
    sunrise: string;
    sunset: string;
    uvIndex: string;
    localTime: string;
    currency: string;
  };
  lastUpdated: Date;
}
```

---

## 2. `BetaAnalytics` Collection
Tracks user events, feedback submissions, and A/B feature flags.

```typescript
interface IBetaAnalytics {
  events: Array<{
    eventType: string;
    userId: string;
    city: string;
    placeName: string;
    deviceInfo: { browser: string; os: string; screenSize: string };
    latencyMs: number;
    timestamp: Date;
  }>;
  feedbacks: Array<{
    type: 'bug' | 'feature' | 'ui_rating' | 'ai_quality' | 'general';
    message: string;
    rating: number;
    screenshotUrl?: string;
    browserInfo?: string;
    osInfo?: string;
    status: 'open' | 'in_review' | 'resolved';
    createdAt: Date;
  }>;
  featureFlags: Array<{
    flagKey: string;
    name: string;
    description: string;
    enabled: boolean;
    rolloutPercentage: number;
  }>;
}
```
