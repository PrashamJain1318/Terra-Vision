# LocalLens AI — Phase 13 Travel Memory Capsule UI Documentation

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Overview Hierarchy

```
frontend/
├── pages/
│   └── memory/
│       ├── MemoryHome.tsx
│       ├── CreateMemory.tsx
│       ├── MemoryTimeline.tsx
│       ├── MemoryStory.tsx
│       ├── MemoryGallery.tsx
│       ├── JourneyReplay.tsx
│       ├── MemoryStatistics.tsx
│       ├── ShareMemory.tsx
│       └── MemorySettings.tsx
│
└── components/
    └── memory/
        ├── TripSelector.tsx
        ├── MemoryImporter.tsx
        ├── TimelineCard.tsx
        ├── TimelineView.tsx
        ├── StoryViewer.tsx
        ├── MemoryBook.tsx
        ├── PhotoGallery.tsx
        ├── VideoGallery.tsx
        ├── JourneyReplayMap.tsx
        ├── MemoryStatisticsCard.tsx
        ├── TravelHighlights.tsx
        ├── VisitedPlacesCard.tsx
        ├── HiddenGemMemoryCard.tsx
        ├── FoodMemoryCard.tsx
        ├── VisionMemoryCard.tsx
        ├── PlannerMemoryCard.tsx
        ├── MediaCarousel.tsx
        ├── MemoryFilters.tsx
        ├── MemorySearch.tsx
        ├── ShareDialog.tsx
        ├── ExportDialog.tsx
        ├── ThemeSelector.tsx
        ├── PrivacySelector.tsx
        ├── LoadingMemory.tsx
        ├── EmptyMemory.tsx
        ├── ErrorMemory.tsx
        ├── RetryMemory.tsx
        └── FloatingMemoryMenu.tsx
```

---

## 2. Design Tokens
- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-pink-500/20 shadow-xl rounded-3xl`
- **Badges**:
  - Memory Accent Badge: `bg-pink-500/10 text-pink-400 border border-pink-500/30`
  - Vision Scan Badge: `bg-pink-500/15 text-pink-400 border border-pink-500/30`
  - Food Memory Pill: `bg-amber-500/10 text-amber-400 border border-amber-500/30`
  - Hidden Gem Pill: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`
