# LocalLens AI — Phase 12 Local Food AI UI Documentation

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Overview Hierarchy

```
frontend/
├── pages/
│   └── local-food/
│       ├── LocalFoodHome.tsx
│       ├── DiscoverFood.tsx
│       ├── FoodResults.tsx
│       ├── RestaurantDetails.tsx
│       ├── DishDetails.tsx
│       ├── SavedFoods.tsx
│       └── FoodHistory.tsx
│
└── components/
    └── local-food/
        ├── DestinationSearch.tsx
        ├── CuisineSelector.tsx
        ├── DietSelector.tsx
        ├── BudgetSelector.tsx
        ├── FoodPreferenceSelector.tsx
        ├── RestaurantCard.tsx
        ├── DishCard.tsx
        ├── FoodRecommendationGrid.tsx
        ├── NutritionCard.tsx
        ├── FoodStoryCard.tsx
        ├── DietaryBadge.tsx
        ├── SpiceLevelIndicator.tsx
        ├── RestaurantGallery.tsx
        ├── FoodGallery.tsx
        ├── RecommendationFilters.tsx
        ├── SearchHistoryPanel.tsx
        ├── SavedFoodCard.tsx
        ├── RecommendationToolbar.tsx
        ├── NearbyRestaurants.tsx
        ├── RestaurantMapPreview.tsx
        ├── ShareFoodDialog.tsx
        ├── SaveFoodDialog.tsx
        ├── LoadingRecommendations.tsx
        ├── EmptyRecommendations.tsx
        ├── ErrorRecommendations.tsx
        ├── RetryRecommendation.tsx
        ├── RecommendationStatistics.tsx
        └── FloatingFoodMenu.tsx
```

---

## 2. Design Tokens
- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-border/40 shadow-xl rounded-3xl`
- **Badges**:
  - Vegetarian Badge: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`
  - Spice Level Badge: `bg-red-500/10 text-red-400 border border-red-500/30`
  - Budget Pill: `bg-amber-500/10 text-amber-400 border border-amber-500/30`
