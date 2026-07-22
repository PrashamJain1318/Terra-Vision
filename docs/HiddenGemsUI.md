# LocalLens AI — Phase 11 Hidden Gems AI UI Documentation

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Overview Hierarchy

```
frontend/
├── pages/
│   └── hidden-gems/
│       ├── HiddenGemsHome.tsx
│       ├── DiscoverHiddenGems.tsx
│       ├── RecommendationResults.tsx
│       ├── HiddenGemDetails.tsx
│       ├── SavedHiddenGems.tsx
│       └── HiddenGemHistory.tsx
│
└── components/
    └── hidden-gems/
        ├── DestinationSearch.tsx
        ├── InterestSelector.tsx
        ├── BudgetSelector.tsx
        ├── TravelStyleSelector.tsx
        ├── RecommendationCard.tsx
        ├── RecommendationGrid.tsx
        ├── ExperienceScoreCard.tsx
        ├── CrowdPredictionCard.tsx
        ├── BestVisitTimeCard.tsx
        ├── AIStoryCard.tsx
        ├── RecommendationFilters.tsx
        ├── CategoryChips.tsx
        ├── ImageGallery.tsx
        ├── MapPreviewCard.tsx
        ├── NearbyPlacesCard.tsx
        ├── SaveHiddenGemDialog.tsx
        ├── ShareRecommendationDialog.tsx
        ├── RecommendationToolbar.tsx
        ├── SearchHistoryPanel.tsx
        ├── SavedGemCard.tsx
        ├── RecommendationTimeline.tsx
        ├── RecommendationStatistics.tsx
        ├── FloatingRecommendationMenu.tsx
        ├── LoadingRecommendations.tsx
        ├── EmptyRecommendations.tsx
        ├── ErrorRecommendations.tsx
        └── RetryRecommendation.tsx
```

---

## 2. Design System Tokens
- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-border/40 shadow-xl rounded-3xl`
- **Badges**:
  - Score Badge: `bg-amber-400/10 text-amber-400 border border-amber-400/30`
  - Crowd Level Pill: `bg-blue-500/10 text-blue-400 border border-blue-500/30`
  - Visiting Time Badge: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`
