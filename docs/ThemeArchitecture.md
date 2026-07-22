# LocalLens AI — Theme & Visual Design Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Unified Theme Tokens
The design system is constructed with Tailwind CSS CSS custom variables and theme configurations (`frontend/config/*Theme.ts`):

- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-border/40 shadow-xl rounded-3xl`
- **Primary Color Accents**: `#10B981` (Emerald Green) & `#3B82F6` (Electric Blue)
- **Typography Hierarchy**: Inter / Outfit sans-serif variable fonts

---

## 2. Shared Subsystem Theme Tokens
- `dashboardTheme.ts`: Header height, sidebar collapse widths, active nav link styling.
- `plannerTheme.ts`: Itinerary day card headers and activity timeline badges.
- `mapTheme.ts`: Map controls background blur and route line colors.
- `visionTheme.ts`: Scanner laser beam animations and confidence score pill badges.
