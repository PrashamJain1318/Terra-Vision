# LocalLens AI — AI Vision Landmark Scanner QA Guide

Developer: Debharghya Misra (`debarghyamisra09`)

---

## 1. Scope of Testing
Verification of the AI Vision module across Architecture, Backend APIs, UI Components, and AI Model Adapters.

---

## 2. Executed Test Suites
1. `VisionFlow.test.tsx`: Validates sub-routes navigation and vision provider switching.
2. `CameraFlow.test.tsx`: Validates WebRTC camera permission and overlay framing.
3. `ImageUpload.test.tsx`: Validates drag & drop upload formats (.jpg, .png, .webp) and 10MB size limits.
4. `RecognitionResult.test.tsx`: Validates landmark detection, confidence score, and historical context.
5. `ScanHistory.test.tsx`: Validates scan history fetching and travel memory saving.
6. `VisionAccessibility.test.tsx`: Validates ARIA tags, contrast ratios, and keyboard navigation.
7. `VisionResponsive.test.tsx`: Validates mobile, tablet, and ultrawide viewports.
8. `VisionPerformance.test.tsx`: Measures AI inference latency and Lighthouse targets.
