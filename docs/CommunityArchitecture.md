# LocalLens AI / Terra Vision — Phase 16 Community & Social Platform Architecture

Architect Lead: Prasham Jain (`PrashamJain1318`)

---

## Technical Overview & Social Graph Architecture
The **Community & Social Platform** expands Terra Vision into an AI-powered global traveler network:
- **Social Graph Engine**: Connects users, travel groups, followers, collaborative trip planning, and reviews.
- **AI Recommendation Engine**: Recommends travelers to follow, hidden gems, authentic food spots, and destination communities.
- **Gamification Engine**: Calculates AI Travel Scores and assigns Explorer, Foodie, Photographer, Local Guide, Top Reviewer, Safety Champion, and Community Leader badges.

---

## High-Level Module Structure
```
frontend/
├── config/
│   ├── communityConfig.ts
│   ├── communityRoutes.ts
│   ├── communityTheme.ts
│   ├── communityBadges.ts
│   └── communityCategories.ts
├── context/
│   └── CommunityContext.tsx
├── providers/
│   └── CommunityProvider.tsx
├── hooks/
│   └── useCommunity.ts
├── components/community/layout/
│   ├── CommunityLayout.tsx
│   ├── CommunityHeader.tsx
│   ├── CommunitySidebar.tsx
│   ├── CommunityContainer.tsx
│   └── CommunityWorkspace.tsx
```
