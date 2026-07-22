# LocalLens AI — Phase 11 Hidden Gems AI Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Executive Architecture Summary
The Hidden Gems AI module discovers uncrowded, authentic travel spots, secret panoramic viewpoints, and cultural heritage experiences using dynamic AI model provider adapters (`gemini`, `openai`, `claude`).

---

## 2. Component Layout Hierarchy

```
frontend/
├── app/
│   └── dashboard/
│       └── hidden-gems/
│           └── page.tsx                 # App Router page rendering <HiddenGemsLayout />
│
├── components/
│   └── hidden-gems/
│       └── layout/
│           ├── HiddenGemsLayout.tsx     # Master Provider & Layout Wrapper
│           ├── HiddenGemsHeader.tsx     # Header Toolbar & AI Model Selector
│           ├── HiddenGemsSidebar.tsx    # Sub-Route Navigation Sidebar
│           ├── HiddenGemsContainer.tsx  # Responsive Container Wrapper
│           └── HiddenGemsWorkspace.tsx  # Recommendation Workspace Canvas
│
├── config/
│   ├── hiddenGemProviders.ts            # AI Model Provider Adapters
│   ├── hiddenGemRoutes.ts               # Sub-Routes Mappings
│   ├── hiddenGemTheme.ts                # Visual Glassmorphism Theme Tokens
│   ├── hiddenGemConstants.ts            # Experience & Crowd Constants
│   ├── experienceScore.ts               # Experience Score Tiers
│   ├── crowdLevels.ts                   # Crowd Prediction Levels
│   └── travelCategories.ts              # Interest Categories Configuration
│
├── context/
│   └── HiddenGemsContext.tsx            # Hidden Gems State Interface
│
├── providers/
│   └── HiddenGemsProvider.tsx           # Hidden Gems State Context Provider
│
└── hooks/
    └── useHiddenGems.ts                 # Custom React Hook for State Access
```
