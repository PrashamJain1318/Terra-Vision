# LocalLens AI — Phase 15 Voice AI Travel Assistant Architecture

Developer: Prasham Jain (`PrashamJain1318`)

---

## 1. Architectural System Overview

The **Voice AI Travel Assistant Engine** acts as the natural conversational orchestration hub for LocalLens AI. It coordinates user voice queries across all underlying modules (*Planner*, *Maps*, *Vision*, *Food*, *Safety*, *Memory*).

```
Dashboard Voice Workspace
          │
          ├── VoiceProvider & VoiceContext
          │        ├── Acoustic Perception Engine (STT -> Audio Input Stream)
          │        ├── Natural Language Intent Classifier (ROUTER)
          │        └── Neural Text-to-Speech Engine (TTS -> Audio Output)
          │
          ├── Modular Layout
          │        ├── VoiceLayout
          │        ├── VoiceHeader (STT Listening Control)
          │        ├── VoiceSidebar (Voice navigation & preferences)
          │        ├── VoiceContainer
          │        └── VoiceWorkspace
          │
          └── Provider Abstraction
                   ├── Gemini Multimodal Live Voice Adapter
                   ├── OpenAI Realtime Voice API Adapter
                   └── ElevenLabs + Anthropic Claude Voice Adapter
```

---

## 2. Intent Routing Schema

| Intent Code | Sample Utterance | Target Module |
|---|---|---|
| `PLANNER_CREATE` | "Plan a 5-day trip to Japan" | AI Travel Planner |
| `FOOD_DISCOVER` | "Find the nearest vegetarian restaurant" | Local Food AI |
| `VISION_TRANSLATE` | "Translate this menu" | AI Vision Scanner |
| `SAFETY_CHECK` | "Is this place safe?" | Travel Safety & Scam Shield |
| `MAPS_NAVIGATE` | "Navigate me to my hotel" | Interactive Maps |
| `MEMORY_SAVE` | "Remember this place" | Travel Memory Capsule |
| `PLANNER_READ` | "Read today's itinerary" | AI Travel Planner |

---

## 3. Design Tokens
- **Primary Color**: `Voice Cyan (#06b6d4)`
- **Glass Panel**: `bg-card/45 backdrop-blur-xl border border-cyan-500/20 shadow-xl rounded-3xl`
- **Listening Pulse Glow**: `shadow-cyan-600/40 animate-pulse`
