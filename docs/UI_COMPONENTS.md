# LocalLens AI UI Components Composition Reference

This document highlights properties, layouts, and animations configured for the custom reusable UI elements.

---

## 1. Common Components

### `<GlassCard />`
- **Location**: `components/common/GlassCard.tsx`
- **Properties**:
  - `children`: React elements
  - `hoverEffect`: Boolean (lifts card on mouse hover)
- **Style**: Soft transparency layout with border styling and background blur.

### `<AnimatedButton />`
- **Location**: `components/common/AnimatedButton.tsx`
- **Properties**:
  - `variant`: `'primary' | 'secondary'`
  - Accepts standard HTML button element parameters.

### `<SectionTitle />`
- **Location**: `components/common/SectionTitle.tsx`
- **Properties**:
  - `title`: Header string
  - `subtitle`: Description text block

---

## 2. Landing Cards

### `<FeatureCard />`
- **Location**: `components/landing/FeatureCard.tsx`
- Consumes `<GlassCard />` and `<IconBox />` to present features.

### `<TimelineCard />`
- **Location**: `components/landing/TimelineCard.tsx`
- Renders steps with timeline connector flags.
