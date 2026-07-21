# LocalLens AI Dashboard Architecture & Handover Guide

This guide details the layout orchestration, routing configurations, and widget blueprints implemented for the authenticated Dashboard workspace area.

---

## 1. Dashboard Layout Structure
The dashboard is wrapped globally by `<DashboardLayout />` inside `frontend/components/dashboard/layout/DashboardLayout.tsx`. It arranges the viewport grid dynamically:

```
+-------------------------------------------------------------+
|               |  DashboardNavbar (Header Toolbar)          |
|               +---------------------------------------------+
|               |                                     |       |
|  Dashboard-   |  DashboardContainer                 | Right |
|  Sidebar      |  (Scrolling main content)           | Side- |
|  (Left nav)   |                                     | bar   |
|               |                                     |       |
|               |                                     |       |
+---------------+-------------------------------------+-------+
```

### Components Location
- **Navbar**: [DashboardNavbar.tsx](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/layout/DashboardNavbar.tsx)
- **Sidebar**: [DashboardSidebar.tsx](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/layout/DashboardSidebar.tsx)
- **Main Viewport Wrapper**: [DashboardContainer.tsx](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/layout/DashboardContainer.tsx)
- **Right Details Panel**: [RightSidebar.tsx](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/layout/RightSidebar.tsx)
- **Dashboard Grid**: [DashboardGrid.tsx](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/layout/DashboardGrid.tsx)

---

## 2. Layout State Provider & Context
The layout collapses and expands dynamically governed by variables in `<DashboardProvider />` (`frontend/providers/DashboardProvider.tsx`):
- `sidebarCollapsed`: Boolean toggling sidebar expanded/collapsed state width class names (`w-64` vs `w-20`).
- `rightPanelOpen`: Toggles the visibility of the contextual user updates right panel.
- `mobileMenuOpen`: Controls screen overlays for compact viewports drawer toggles.

---

## 3. Workspaces & Widgets Config Mappings
- **Navigation Routes Config**: Linked inside [navigation.ts](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/config/navigation.ts) and [dashboardRoutes.ts](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/config/dashboardRoutes.ts).
- **Widgets Outlines**: Blueprint objects configured in [dashboardWidgets.ts](file:///Users/prashamjain/Desktop/PROJECTS/TerraVision/frontend/components/dashboard/config/dashboardWidgets.ts).

---

## 4. Handover Instructions for Backend & UI Developers
- **Pinank (Backend Services)**: Setup dashboard stats endpoints mapping trip counts and active users querying Mongoose collections.
- **Vinay (UI Components)**: Map grid cards using standard `<GridCard />` items under the dynamic layout sections.
- **Debarghya (Testing & QA)**: Validate layout breakpoints, mobile drawers, and focus transitions.
