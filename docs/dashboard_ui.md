# LocalLens AI Dashboard UI Components Reference

This document describes the reusable UI widget components developed for the authenticated Dashboard workspace (Phase 7).

---

## 1. Implemented Widget Components

### `<WelcomeBanner />`
- **Path**: `frontend/components/dashboard/widgets/WelcomeBanner.tsx`
- **Features**: Displays personalized greeting, current formatted date, random travel quotes, and a glowing aurora backdrop.

### `<StatsWidget />`
- **Path**: `frontend/components/dashboard/widgets/StatsWidget.tsx`
- **Features**: Renders animated counter cards tracking Trips Planned, Visited Countries, Visited Cities, and Travel Score.

### `<QuickActionsWidget />`
- **Path**: `frontend/components/dashboard/widgets/QuickActionsWidget.tsx`
- **Features**: Hoverable quick action tiles for Plan Trip, Explore Nearby, Scan Landmark, and View Memories.

### `<RecentTripsWidget />`
- **Path**: `frontend/components/dashboard/widgets/RecentTripsWidget.tsx`
- **Features**: Displays recent upcoming and completed trip itineraries.

### `<RecentMemoriesWidget />`
- **Path**: `frontend/components/dashboard/widgets/RecentMemoriesWidget.tsx`
- **Features**: Displays recent memory moments.

### `<SavedPlacesWidget />`
- **Path**: `frontend/components/dashboard/widgets/SavedPlacesWidget.tsx`
- **Features**: Renders bookmarked dining and exploration spots with star ratings.

### `<ActivityTimelineWidget />`
- **Path**: `frontend/components/dashboard/widgets/ActivityTimelineWidget.tsx`
- **Features**: Vertical timeline tracking recent user activity logs.

---

## 2. Dashboard Pages
- `/dashboard/overview`: Primary overview dashboard grid view.
- `/dashboard`: Automatic redirect handler to `/dashboard/overview`.
