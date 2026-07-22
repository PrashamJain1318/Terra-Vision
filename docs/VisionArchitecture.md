# LocalLens AI — Phase 10 AI Vision Landmark Scanner Architecture

Developer: Prasham Jain (`PrashamJain1318`)

---

## 1. Overview
The **AI Vision Landmark Scanner Architecture** provides a provider-agnostic Computer Vision pipeline supporting Gemini Vision, OpenAI GPT-4o Vision, Azure AI Vision, and AWS Rekognition.

---

## 2. Architecture Structure

```
frontend/
├── config/
│   ├── visionProviders.ts    # AI Vision models (Gemini, OpenAI, Azure, AWS)
│   ├── visionRoutes.ts       # Sub-route mapping
│   ├── visionTheme.ts        # Scanner visual tokens
│   ├── visionConstants.ts    # File size & confidence thresholds
│   ├── recognitionTypes.ts   # Category options
│   └── supportedFormats.ts   # Image MIME formats (.jpg, .png, .webp)
│
├── context/
│   └── VisionContext.tsx     # Computer Vision State Context interface
│
├── providers/
│   └── VisionProvider.tsx    # Context Provider implementation
│
├── hooks/
│   └── useVision.ts          # Custom hook for VisionContext
│
└── components/
    └── vision/
        └── layout/
            ├── VisionLayout.tsx    # Combined Layout wrapper
            ├── VisionHeader.tsx    # Sticky header with AI model switcher
            ├── VisionSidebar.tsx   # Sidebar navigation
            ├── VisionContainer.tsx # Viewport container
            └── VisionWorkspace.tsx # Scanner canvas adapter
```

---

## 3. AI Provider Abstraction
The system utilizes an Adapter Pattern decoupling frontend camera/upload interfaces from specific AI Vision APIs. Models supported:
- `gemini`: Google Gemini 1.5 Flash Vision Engine
- `openai`: OpenAI GPT-4o Vision Engine
- `azure`: Azure AI Spatial Vision
- `aws`: AWS Rekognition Landmark Engine
