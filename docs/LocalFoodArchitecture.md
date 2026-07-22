# LocalLens AI — Phase 12 Local Food AI Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Executive Architecture Summary
The Local Food AI module discovers authentic regional delicacies, street food spots, and dietary-friendly food experiences using dynamic AI model provider adapters (`gemini`, `openai`, `claude`).

---

## 2. Component Layout Hierarchy

```
frontend/
├── app/
│   └── dashboard/
│       └── local-food/
│           └── page.tsx                 # App Router page rendering <LocalFoodLayout />
│
├── components/
│   └── local-food/
│       └── layout/
│           ├── LocalFoodLayout.tsx      # Master Provider & Layout Wrapper
│           ├── LocalFoodHeader.tsx      # Header Toolbar & AI Model Selector
│           ├── LocalFoodSidebar.tsx     # Sub-Route Navigation Sidebar
│           ├── LocalFoodContainer.tsx   # Responsive Container Wrapper
│           └── LocalFoodWorkspace.tsx   # Culinary Discovery Workspace Canvas
│
├── config/
│   ├── foodProviders.ts                 # AI Model Provider Adapters
│   ├── foodRoutes.ts                    # Sub-Routes Mappings
│   ├── foodTheme.ts                     # Visual Glassmorphism Theme Tokens
│   ├── foodConstants.ts                 # Culinary Discovery Constants
│   ├── dietCategories.ts                # Dietary Requirement Options
│   ├── nutritionLevels.ts               # Calorie & Macro Classifications
│   └── cuisineTypes.ts                  # Cuisine Category Types
│
├── context/
│   └── LocalFoodContext.tsx             # Local Food State Interface
│
├── providers/
│   └── LocalFoodProvider.tsx            # Local Food State Context Provider
│
└── hooks/
    └── useLocalFood.ts                  # Custom React Hook for State Access
```
