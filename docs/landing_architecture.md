# LocalLens AI Landing Page Architecture

This document describes the visual structures, animation configurations, layout compositions, responsive design standards, and theme variables implemented for the LocalLens AI Landing Page (Phase 6).

---

## 1. Landing Page Section Sequence
The landing page flows through the following 10 structured sections to provide a premium user experience:

1. **Floating Glass Navbar**: Sticky layout blurring backing details, dynamically fading out on scroll down, sliding in on scroll up.
2. **Hero Background**: Displays deep Aurora gradient mesh elements and slow animated floating blurs.
3. **Hero Content**: Typography headers, animated badges, and subheadings.
4. **Hero Buttons**: Primary and secondary call-to-action triggers mapping to user registration steps.
5. **Hero Globe**: Standard OrbitControls 3D Sphere mockup using React Three Fiber.
6. **Features Section**: 4-column responsive grid displaying core product features.
7. **How It Works (Timeline)**: Vertical connector timelines showing simple onboarding walkthrough steps.
8. **Stats Counters**: Grid elements tracking covered countries, active users, and generated itineraries.
9. **Testimonials**: Glassmorphism cards presenting traveller feedback reviews.
10. **CTA Glow Banner**: Large call-to-action glow card mapping to account setups.

---

## 2. Animation & Interaction Frameworks

- **Framer Motion**:
  - Entrance fades: used to transition text blocks and CTA buttons.
  - Hover triggers: cards lift slightly on hover.
- **Lenis**: Connected globally in `providers/LenisProvider.tsx` to handle smooth scroll easing.

---

## 3. Responsive Breakpoints

| Device | Width Range | Layout Rules |
| :--- | :--- | :--- |
| **Mobile** | `< 640px` | Single column grid systems, reduced font sizing, hidden header navigation links. |
| **Tablet** | `640px - 1024px` | 2-column feature grids, scrollable timelines. |
| **Desktop** | `> 1024px` | Full 4-column cards grid layout, active ThreeJS rotating globe display. |
