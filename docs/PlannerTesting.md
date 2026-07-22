# LocalLens AI — AI Travel Planner QA Testing Guide

Developer: Debharghya Misra (`debarghyamisra09`)

---

## 1. Scope of Testing
Verification of the AI Planner module across Architecture, Backend APIs, UI Components, and Integration Workflows.

---

## 2. Test Suites Overview
1. `PlannerFlow.test.tsx`: Validates 9-step workflow step transitions.
2. `PlannerForm.test.tsx`: Validates destination, date, and traveler input constraints.
3. `PlannerHistory.test.tsx`: Validates history fetching, itinerary saving, and deletion.
4. `PlannerAccessibility.test.tsx`: Validates ARIA attributes, semantic HTML, and focus indicators.
5. `PlannerResponsive.test.tsx`: Validates layout boundaries across Mobile, Tablet, Desktop, and Ultrawide viewports.
6. `PlannerPerformance.test.tsx`: Measures Lighthouse targets and render frame rates.
