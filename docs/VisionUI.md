# LocalLens AI — Phase 10 AI Vision Landmark Scanner UI

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Hierarchy Overview

```
frontend/
├── pages/
│   └── vision/
│       ├── VisionHome.tsx
│       ├── CameraScanner.tsx
│       ├── ImageUpload.tsx
│       ├── RecognitionResultPage.tsx
│       ├── ScanHistoryPage.tsx
│       └── SavedMemoriesPage.tsx
│
└── components/
    └── vision/
        ├── CameraView.tsx
        ├── CameraControls.tsx
        ├── CameraPermission.tsx
        ├── CameraOverlay.tsx
        ├── ImageUploader.tsx
        ├── DragDropUploader.tsx
        ├── ImagePreview.tsx
        ├── VisionLoading.tsx
        ├── RecognitionResult.tsx
        ├── RecognitionCard.tsx
        ├── ConfidenceScore.tsx
        ├── HistoricalInformation.tsx
        ├── TravelTips.tsx
        ├── NearbyPlacesPanel.tsx
        ├── NearbyPlaceCard.tsx
        ├── MemorySaveDialog.tsx
        ├── SavedMemoryCard.tsx
        ├── ScanHistoryPanel.tsx
        ├── HistoryCard.tsx
        ├── ImageMetadata.tsx
        ├── RetryAnalysis.tsx
        ├── EmptyVisionState.tsx
        ├── ErrorVisionState.tsx
        ├── VisionToolbar.tsx
        └── FloatingScannerMenu.tsx
```

---

## 2. Design System Tokens
- **Backdrop Blur**: `backdrop-blur-xl` / `backdrop-blur-2xl`
- **Glass Panel Surface**: `bg-card/45 border border-border/40 shadow-xl rounded-3xl`
- **Scanner Pulse Active**: `animate-pulse text-primary`
