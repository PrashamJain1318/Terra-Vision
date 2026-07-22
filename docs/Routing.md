# LocalLens AI — Routing & Navigation Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Next.js App Router Structure
The application utilizes Next.js 16 App Router for dashboard layout wrapping:

```
frontend/app/
├── layout.tsx                # Root layout with font definitions & global CSS
├── page.tsx                  # Landing page
├── login/                    # Auth authentication routes
├── signup/
└── dashboard/
    ├── layout.tsx            # Dashboard Layout wrapper
    ├── overview/page.tsx     # Dashboard Overview
    ├── planner/page.tsx      # AI Travel Planner
    ├── maps/page.tsx         # Interactive Maps
    └── vision/page.tsx       # AI Vision Scanner
```

---

## 2. API v1 Endpoint Mappings

| Subsystem | Base Path | Description |
|---|---|---|
| Health | `/api/v1/health` | System health & status checks |
| Auth | `/api/v1/auth` | User login, signup, JWT verification |
| Dashboard | `/api/v1/dashboard` | Activity feed, stats, and notification feeds |
| Planner | `/api/v1/planner` | AI itinerary generation & itinerary CRUD |
| Maps | `/api/v1/maps` | Location search, route directions, saved places |
| Vision | `/api/v1/vision` | Image upload, landmark analysis, memory saves |
