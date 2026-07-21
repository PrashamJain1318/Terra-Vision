# LocalLens AI — Phase 7 Dashboard UI Components Specification

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Directory Structure

```
frontend/components/dashboard/
├── widgets/
│   ├── StatisticsCard.tsx
│   ├── QuickActionCard.tsx
│   ├── TripCard.tsx
│   ├── MemoryCard.tsx
│   ├── SavedPlaceCard.tsx
│   ├── NotificationCard.tsx
│   ├── ActivityCard.tsx
│   └── ProfileCard.tsx
│
├── WelcomeBanner.tsx
├── RecentTrips.tsx
├── RecentMemories.tsx
├── SavedPlaces.tsx
├── NotificationsPanel.tsx
├── ActivityTimeline.tsx
└── QuickActions.tsx
```

---

## 2. Reusable UI Components Overview

- **`WelcomeBanner.tsx`**: Dynamic hero section with personal greeting, date badge, travel quote, and weather indicator.
- **`StatisticsCard.tsx`**: Displays numeric stats cards with growth trends and animated styling.
- **`QuickActionCard.tsx`**: Action card with icon badge, title, subtitle, and hover scale animations.
- **`TripCard.tsx`**: Renders trip name, destination badge, date ranges, and status tags.
- **`MemoryCard.tsx`**: Travel memory card with photo icon, location tags, and dates.
- **`SavedPlaceCard.tsx`**: Bookmarked place item with category tag and star ratings.
- **`NotificationCard.tsx`**: Notification item with unread badge and type icons.
- **`ActivityCard.tsx`**: Log timeline card with timestamps and module labels.
- **`ProfileCard.tsx`**: User avatar badge showing name, email, travel score, and level.
