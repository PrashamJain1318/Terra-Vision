# LocalLens AI — Phase 15 Voice AI UI Documentation

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Overview Hierarchy

```
frontend/
├── pages/
│   └── voice/
│       ├── VoiceHome.tsx
│       ├── VoiceOverview.tsx
│       ├── VoiceAssistantPage.tsx
│       ├── VoiceTranslatorPage.tsx
│       ├── VoiceCommandsPage.tsx
│       ├── VoiceLogsPage.tsx
│       └── VoiceSettingsPage.tsx
│
└── components/
    └── voice/
        ├── VoiceVisualizer.tsx
        ├── AudioWaveform.tsx
        ├── MicButton.tsx
        ├── FloatingMicButton.tsx
        ├── VoiceMessageBubble.tsx
        ├── VoiceIntentBadge.tsx
        ├── ModuleRouteCard.tsx
        ├── VoiceCommandCard.tsx
        ├── LanguageSelector.tsx
        ├── AudioModeSelector.tsx
        ├── VoiceProviderSelector.tsx
        ├── SpeechTranscriptCard.tsx
        ├── VoiceTranslationCard.tsx
        ├── LoadingVoice.tsx
        ├── EmptyVoice.tsx
        ├── ErrorVoice.tsx
        └── RetryVoice.tsx
```

---

## 2. Design Tokens
- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-cyan-500/20 shadow-xl rounded-3xl`
- **Mic Pulsing Active**: `bg-cyan-600 shadow-cyan-600/50 animate-pulse rounded-full`
- **Speech Bubble Assistant**: `bg-muted/30 border border-border/30 text-foreground`
- **Speech Bubble User**: `bg-cyan-600 text-white font-semibold`
