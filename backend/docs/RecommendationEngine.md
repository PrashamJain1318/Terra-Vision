# LocalLens AI — Recommendation Engine Specification

Developer: Pinank Shah (`pinankshah-Ab`)

---

## Workflow Engine Architecture
1. Request Normalization & Cache Lookups (`RecommendationCacheService`).
2. Multi-model AI Provider Adapter Execution (`gemini`, `openai`, `claude`).
3. Experience Scoring (`ExperienceScoreService`) & Crowd Prediction (`CrowdPredictionService`).
4. Story Generation (`StoryGenerationService`).
