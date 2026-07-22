# LocalLens AI — Phase 14 Travel Safety & Scam Shield UI Documentation

Developer: Vinay Kumar (`vinay3089790`)

---

## 1. Component Overview Hierarchy

```
frontend/
├── pages/
│   └── safety/
│       ├── SafetyHome.tsx
│       ├── SafetyOverview.tsx
│       ├── SafetyAnalysis.tsx
│       ├── ScamShield.tsx
│       ├── RiskZones.tsx
│       ├── EmergencyCenter.tsx
│       ├── TravelAdvisories.tsx
│       ├── CommunityReports.tsx
│       ├── SafetyAdvisor.tsx
│       ├── SafetyHistory.tsx
│       └── SafetySettings.tsx
│
└── components/
    └── safety/
        ├── DestinationSelector.tsx
        ├── SafetyScoreCard.tsx
        ├── RiskLevelBadge.tsx
        ├── SafetySummaryCard.tsx
        ├── ScamAlertCard.tsx
        ├── RiskZoneMap.tsx
        ├── SafeZoneCard.tsx
        ├── UnsafeZoneCard.tsx
        ├── EmergencyContactsCard.tsx
        ├── HospitalCard.tsx
        ├── PoliceStationCard.tsx
        ├── EmbassyCard.tsx
        ├── TravelAdvisoryCard.tsx
        ├── SafetyTipsCard.tsx
        ├── CommunityReportCard.tsx
        ├── CommunityFilter.tsx
        ├── AdvisorChat.tsx
        ├── AdvisorMessage.tsx
        ├── SOSButton.tsx
        ├── EmergencyDialog.tsx
        ├── SafetyTimeline.tsx
        ├── NotificationCard.tsx
        ├── AlertBanner.tsx
        ├── NearbyEmergencyMap.tsx
        ├── LoadingSafety.tsx
        ├── EmptySafety.tsx
        ├── ErrorSafety.tsx
        ├── RetrySafety.tsx
        └── FloatingSOSButton.tsx
```

---

## 2. Design Tokens
- **Glassmorphism Panels**: `bg-card/45 backdrop-blur-xl border border-red-500/20 shadow-xl rounded-3xl`
- **SOS Button**: `bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 rounded-3xl`
- **Badges**:
  - Safe Zone Pill: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/30`
  - Unsafe Zone Pill: `bg-red-500/10 text-red-400 border border-red-500/30`
  - Scam Alert Badge: `bg-orange-500/10 text-orange-400 border border-orange-500/30`
