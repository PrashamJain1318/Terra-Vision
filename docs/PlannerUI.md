# LocalLens AI — Phase 8 AI Travel Planner UI Specification

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Overview
The **AI Travel Planner UI** features Apple/Linear-inspired glassmorphism, Framer Motion animations, interactive selector widgets, day-wise timeline cards, budget allocation cards, and responsive history views.

---

## 2. Component Hierarchy

```
frontend/
├── pages/planner/
│   ├── PlannerHome.tsx
│   ├── PlannerNew.tsx
│   ├── PlannerResult.tsx
│   ├── PlannerHistory.tsx
│   └── PlannerDetails.tsx
│
└── components/planner/
    ├── DestinationSelector.tsx
    ├── DateSelector.tsx
    ├── TravelerSelector.tsx
    ├── BudgetSelector.tsx
    ├── TravelStyleSelector.tsx
    ├── InterestSelector.tsx
    ├── TransportSelector.tsx
    ├── HotelPreferenceSelector.tsx
    ├── LanguageSelector.tsx
    ├── ReviewPlanner.tsx
    ├── PlannerProgress.tsx
    ├── PlannerLoading.tsx
    ├── PlannerResult.tsx
    ├── DayTimeline.tsx
    ├── DayCard.tsx
    ├── ActivityCard.tsx
    ├── BudgetSummary.tsx
    ├── TravelInsights.tsx
    ├── PackingChecklist.tsx
    ├── SafetyTips.tsx
    ├── LocalTips.tsx
    ├── WeatherPlaceholder.tsx
    ├── PlannerHistory.tsx
    ├── SavedTrips.tsx
    ├── EmptyPlanner.tsx
    └── ErrorPlanner.tsx
```
