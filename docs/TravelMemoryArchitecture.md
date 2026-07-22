# LocalLens AI — Phase 13 Travel Memory Capsule Architecture

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Executive System Overview
The **Travel Memory Capsule Module (Phase 13)** auto-organizes travel photos, landmark vision scans, hidden gems visits, local food experiences, and GPS routes into an interactive digital scrapbook and AI-generated travel journal.

---

## 2. Directory Structure & File Manifest

```
frontend/
├── app/
│   └── dashboard/
│       └── memory/
│           └── page.tsx
│
├── components/
│   └── memory/
│       └── layout/
│           ├── MemoryLayout.tsx
│           ├── MemoryHeader.tsx
│           ├── MemorySidebar.tsx
│           ├── MemoryContainer.tsx
│           └── MemoryWorkspace.tsx
│
├── context/
│   └── MemoryContext.tsx
│
├── providers/
│   └── MemoryProvider.tsx
│
├── hooks/
│   └── useMemory.ts
│
└── config/
    ├── memoryProviders.ts
    ├── memoryRoutes.ts
    ├── memoryTheme.ts
    ├── memoryConstants.ts
    ├── storyTemplates.ts
    ├── shareOptions.ts
    └── timelineTypes.ts
```

---

## 3. Provider Abstraction
- `GeminiMemoryAdapter`: Google Gemini 1.5 Pro multimodal layout & narration.
- `OpenAIMemoryAdapter`: OpenAI GPT-4o emotional travel story generation.
- `ClaudeMemoryAdapter`: Anthropic Claude 3.5 Sonnet cultural insights log.

---

## 4. State Management Contract
- `selectedTrip`: Currently selected active trip ID or name.
- `selectedProvider`: Active AI provider adapter (`gemini`, `openai`, `claude`).
- `timelineEvents`: Chronological list of normalized travel events.
- `statistics`: Aggregated metrics (photos, scans, foods, gems, distance).
- `mapReplayActive`: Boolean flag controlling interactive GIS route replay.
- `exportingPdf`: Boolean flag tracking PDF scrapbook generation.
