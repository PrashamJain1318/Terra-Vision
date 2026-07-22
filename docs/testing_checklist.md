# LocalLens AI Landing Page Testing Checklist

This checklist outlines the verification test cases executed to confirm landing page stability.

---

## 1. Interaction & Routing Tests
- [x] **Navbar Hide on Scroll Down**: Scrolling down > 100px slides Navbar out of view.
- [x] **Navbar Slide in on Scroll Up**: Scrolling up slides Navbar down smoothly.
- [x] **Auth State Links**: Login/Get Started anchors map to `/login` and `/signup`.

## 2. Animation & Easing Tests
- [x] **Lenis Scroll**: Smooth scroll easing verified on page wheel events.
- [x] **ThreeJS Globe Mockup**: Renders rotating wireframe structure without console errors.
- [x] **Stats Counters Increment**: Counter runs from `0` to end values when scrolled into view.

## 3. Accessibility Checks
- [x] **Outline highlights**: Elements focus state offsets display clearly when tabbed.
- [x] **Contrast targets**: Color checks for high readability on dark canvas surfaces.
