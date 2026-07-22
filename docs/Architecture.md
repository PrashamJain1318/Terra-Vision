# LocalLens AI — System Architecture Specification

---

## 🏗️ High-Level System Architecture

```
                                    ┌──────────────────────────────────────────────┐
                                    │    LocalLens AI Web & PWA Client             │
                                    │  Next.js 16 • React 19 • Tailwind CSS        │
                                    └──────────────────────┬───────────────────────┘
                                                           │
                                                           ▼
                                    ┌──────────────────────────────────────────────┐
                                    │       Express.js REST API Gateway           │
                                    │         Port 5050 • CORS • Helmet            │
                                    └──────┬───────────────┬───────────────┬───────┘
                                           │               │               │
                     ┌─────────────────────┘               │               └────────────────────┐
                     ▼                                     ▼                                    ▼
       ┌───────────────────────────┐         ┌───────────────────────────┐        ┌───────────────────────────┐
       │   Google Maps Platform    │         │     Gemini AI Engine      │        │    MongoDB Atlas Database │
       │  Places • Geocoding • Map │         │  Enrichment • Ratings • AI│        │  PlaceCache • Analytics   │
       └───────────────────────────┘         └───────────────────────────┘        └───────────────────────────┘
```

---

## 🤖 Multi-Agent AI System Architecture (`LocalLens OS`)

LocalLens AI employs an orchestrated multi-agent network:
- **PlannerAgent**: Generates dynamic multi-day itineraries with time allocations.
- **DiscoveryAgent**: Identifies secret hidden gems and uncrowded travel spots.
- **SafetyAgent**: Monitors regional security advisories, scam shield databases, and emergency helplines.
- **FoodAgent**: Matches authentic regional cuisines with dietary restrictions.
- **MemoryAgent**: Compiles photo memories into interactive journey replays.
- **CommunityAgent**: Integrates verified traveler ratings and social journals.
- **EnterpriseAgent**: Bridges hotel & restaurant booking APIs.
- **PersonalizationAgent**: Computes custom traveler HSL style vectors.
