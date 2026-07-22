# LocalLens AI — Provider Abstraction Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Provider Pattern Overview
External third-party AI services and GIS Map APIs are isolated behind provider factory interfaces. This allows switching or fallback to secondary providers without altering core application logic.

---

## 2. Implemented Provider Factories

### A. Maps Provider Factory (`backend/providers/providerFactory.js`)
- `google`: Google Maps JavaScript & Places API
- `mapbox`: Mapbox Vector Tiles & Directions API
- `osm`: OpenStreetMap Nominatim & Leaflet engine

### B. Vision Provider Factory (`backend/providers/visionProviderFactory.js`)
- `gemini`: Google Gemini 1.5 Pro Flash Vision Engine
- `openai`: OpenAI GPT-4o Vision Engine
- `azure`: Azure AI Spatial Vision Engine
- `aws`: AWS Rekognition Landmark Engine
