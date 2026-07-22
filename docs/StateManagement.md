# LocalLens AI — State Management Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Domain Context Isolation
Application state is divided into clean, decoupled React Context Providers:

1. **`DashboardContext`**: Manages global sidebar, navigation active tabs, mobile menu state, and user profile metadata.
2. **`PlannerContext`**: Manages current trip parameters, generated itineraries, day-by-day activity timelines, and custom notes.
3. **`MapContext`**: Manages map viewports, active GIS provider (`mapbox`, `google`, `osm`), search queries, route origins/destinations, and saved places.
4. **`VisionContext`**: Manages computer vision camera states, file upload dropzone previews, AI model engine selection (`gemini`, `openai`, `azure`, `aws`), recognition results, and travel memories.

---

## 2. Custom Hook Consumption
Components never access Context directly; they consume custom hooks that enforce null checks and provide clear, type-safe API methods:
- `useDashboard()`
- `usePlanner()`
- `useMaps()`
- `useVision()`
