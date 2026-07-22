# LocalLens AI — Maps Provider Architecture

Developer: Pinank Shah (`pinankshah-Ab`)

---

## 1. Adapter Design Pattern
The backend uses a Factory/Adapter pattern to decouple mapping services from specific GIS APIs:

```
                  ┌──────────────────────┐
                  │   ProviderFactory    │
                  └──────────┬───────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ Google Adapter│      │ Mapbox Adapter│      │  OSM Adapter │
└──────────────┘      └──────────────┘      └──────────────┘
```

---

## 2. Dynamic Provider Switching
Switching providers is handled by passing `?provider=mapbox` or `?provider=osm` query string parameters, allowing the application to utilize fallback engines seamlessly.
