# LocalLens AI Dashboard QA & Performance Testing Guide

This document outlines the testing strategy, test cases, accessibility audit, and performance evaluation for the authenticated Dashboard workspace (Phase 7).

---

## 1. Test Cases Suite

### A. Layout & Navigation Tests
- [x] **Sidebar Expand/Collapse**: Clicking sidebar toggle collapses width from 256px (`w-64`) to 80px (`w-20`) with smooth transition.
- [x] **Mobile Drawer Overlay**: Screen widths < 1024px render mobile hamburger button; opening drawer displays backdrop overlay.
- [x] **Breadcrumbs**: Path segments dynamically format active sub-route name (e.g., `LocalLens / Overview`).
- [x] **Right Activity Panel Toggle**: Header user icon toggles contextual activity drawer on desktop screens.

### B. Widget Render Tests
- [x] **WelcomeBanner**: Displays greeting, formatted date badge, and random travel quotes.
- [x] **StatsWidget**: Counts numeric values for Trips, Visited Countries, Visited Cities, and Travel Score with easing animations.
- [x] **QuickActionsWidget**: Links map correctly to `/dashboard/planner`, `/dashboard/maps`, `/dashboard/vision`, and `/dashboard/memories`.
- [x] **RecentTripsWidget**: Renders trip titles, destination badges, and status tags (`upcoming` / `completed`).
- [x] **RecentMemoriesWidget**: Displays memory moments gallery thumbnails.
- [x] **SavedPlacesWidget**: Renders bookmarked place names, addresses, and rating stars.
- [x] **ActivityTimelineWidget**: Displays chronologically sorted activity log entries.

---

## 2. Accessibility (a11y) Audit

- **ARIA Attributes**:
  - `aria-label="Toggle Menu"` and `aria-label="Toggle Sidebar"` added on layout buttons.
  - `aria-label="View notifications"` and `aria-label="Toggle right details panel"` set on header action controls.
- **Keyboard Traversal**: Full `Tab` focus ring indicators visible on all sidebar links and header triggers.
- **Color Contrast**: WCAG AA standards met across dark and light theme background elements.

---

## 3. Performance & Build Metrics

- **Static Generation**: Next.js 15 prerenders `/dashboard` and `/dashboard/overview` routes without layout shifts.
- **Bundle Optimization**: Lazy component loading and smooth animation throttling.
- **Lighthouse Performance Score Target**: `96+`
- **Lighthouse Accessibility Score Target**: `100`
