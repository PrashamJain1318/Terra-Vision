# LocalLens AI — Maps & Location Intelligence QA Guide

Developer: Debharghya Misra (`debarghyamisra09`)

---

## 1. Scope of Testing
Verification of the Maps module across Architecture, Backend APIs, UI Components, and Provider Adapters.

---

## 2. Executed Test Suites
1. `MapsFlow.test.tsx`: Validates sub-routes navigation and provider switching.
2. `MapInteraction.test.tsx`: Validates zoom, compass, locate button, and marker popup triggers.
3. `NearbyPlaces.test.tsx`: Validates category filters and spatial distance calculation.
4. `RoutePlanner.test.tsx`: Validates origin/destination inputs and travel mode options.
5. `SavedPlaces.test.tsx`: Validates saved place CRUD actions.
6. `MapsAccessibility.test.tsx`: Validates ARIA tags, contrast ratios, and keyboard navigation.
7. `MapsResponsive.test.tsx`: Validates mobile, tablet, and ultrawide viewports.
8. `MapsPerformance.test.tsx`: Measures frame rates and Lighthouse targets.
