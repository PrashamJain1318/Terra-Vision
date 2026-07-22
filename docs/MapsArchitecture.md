# LocalLens AI — Phase 9 Maps & Location Intelligence Architecture

Developer: Prasham Jain (`PrashamJain1318`)

---

## 1. Overview
The **Maps & Location Intelligence Architecture** provides a provider-agnostic adapter layer supporting Google Maps, Mapbox, and OpenStreetMap engines.

---

## 2. Architecture Structure

```
frontend/
├── config/
│   ├── mapProviders.ts    # Map engine provider options (Google, Mapbox, OSM)
│   ├── mapRoutes.ts       # Sub-route mapping
│   ├── mapTheme.ts        # Map UI theme tokens
│   ├── mapConstants.ts    # GIS center & zoom constants
│   ├── markerTypes.ts     # Marker type classifications
│   └── routeModes.ts      # Transit & trail mode definitions
│
├── context/
│   └── MapContext.tsx     # GIS State Context interface
│
├── providers/
│   └── MapProvider.tsx    # Context Provider implementation
│
├── hooks/
│   └── useMap.ts          # Custom hook for MapContext
│
└── components/
    └── maps/
        └── layout/
            ├── MapsLayout.tsx    # Combined Layout wrapper
            ├── MapsHeader.tsx    # Sticky header with provider controls
            ├── MapsSidebar.tsx   # Sidebar navigation
            ├── MapContainer.tsx  # Map view container
            └── MapsWorkspace.tsx # Map engine adapter canvas
```

---

## 3. Provider Abstraction Architecture
The system utilizes an Adapter Pattern so that high-level itinerary features do not directly bind to a single mapping vendor. Provider type options:
- `google`: Google Maps Vector Engine
- `mapbox`: Mapbox Dark GL Engine
- `osm`: OpenStreetMap Carto Engine
