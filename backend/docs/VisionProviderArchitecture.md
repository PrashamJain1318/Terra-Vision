# LocalLens AI — AI Vision Provider Architecture

Developer: Pinank Shah (`pinankshah-Ab`)

---

## 1. Adapter Design Pattern
The backend uses a Factory/Adapter pattern to decouple landmark recognition logic from specific AI providers:

```
               ┌───────────────────────────┐
               │   visionProviderFactory   │
               └─────────────┬─────────────┘
                             │
     ┌───────────────────────┼───────────────────────┐
     ▼                       ▼                       ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│Gemini Vision │      │OpenAI Vision │      │ Azure Vision │
└──────────────┘      └──────────────┘      └──────────────┘
```

---

## 2. Supported AI Providers
- `gemini`: Google Gemini 1.5 Pro Flash Vision Engine
- `openai`: OpenAI GPT-4o Vision Engine
- `azure`: Azure AI Spatial Vision
- `aws`: AWS Rekognition Landmark Engine
