# LOCAL LENS AI
> See Beyond the Destination.

LocalLens AI is a premium, enterprise-grade travel exploration and itinerary system powered by AI. This repository contains the Phase 1 Foundation architecture, enabling seamless integration of features by the development team.

## Project Structure

```
LocalLens-AI/
├── frontend/                     # Next.js 15, TS, Tailwind v4, Zustand, React Query
│   ├── app/                      # Page routing, layouts, and global styles
│   ├── components/               # Sub-divided by common, layout, ui, three
│   │   ├── common/               # Loading screens, Error boundaries, global fallbacks
│   │   ├── layout/               # Navbar & Footer
│   │   ├── ui/                   # Reusable premium styled elements
│   │   └── three/                # ThreeJS Scene verification & canvas setup
│   ├── features/                 # Modular domain features placeholders
│   ├── hooks/                    # Reusable React hooks
│   ├── providers/                # Theme, Lenis, and React Query Providers
│   ├── store/                    # Zustand Store definitions
│   ├── services/                 # REST API & external fetching handlers
│   ├── styles/                   # Style definitions
│   ├── types/                    # Common interface types
│   ├── utils/                    # Global helper utilities
│   └── public/                   # Public assets
│
├── backend/                      # Express, Node, Mongoose, JWT & Middlewares
│   ├── config/                   # Configuration (db.js)
│   ├── controllers/              # Controller logic placeholders
│   ├── middleware/               # Error handling, Auth, Logging middlewares
│   ├── models/                   # Mongoose models architecture
│   ├── routes/                   # Router definitions
│   ├── services/                 # Business logic components
│   ├── utils/                    # Shared helper functions
│   ├── uploads/                  # Upload folder placeholder
│   └── server.js                 # Server entryway
│
└── docs/                         # Team workflow and design documentation
```

---

## Getting Started

### Prerequisites
- Node.js `v20.x` or higher is recommended.
- MongoDB database connection URI.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PrashamJain1318/TerraVision.git
   cd TerraVision
   ```

2. Install **Frontend** dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install **Backend** dependencies:
   ```bash
   cd ../backend
   npm install
   ```

### Running Locally

- **Start Backend server** (on port `5000` by default):
  ```bash
  cd backend
  npm run dev
  ```
- **Start Frontend development build** (on port `3000` by default):
  ```bash
  cd frontend
  npm run dev
  ```

---

## Configuration Variables (.env)

### Frontend (`frontend/.env.local`)
Create a file at `frontend/.env.local` containing:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-maps-api-key
```

### Backend (`backend/.env`)
Create a file at `backend/.env` containing:
```env
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=supersecretkey
GEMINI_API_KEY=your-gemini-key
GOOGLE_MAPS_API_KEY=your-maps-key
CLOUDINARY_NAME=cloud-name
CLOUDINARY_KEY=cloud-key
CLOUDINARY_SECRET=cloud-secret
```

---

## Team & Contribution Breakdown

The repository foundation has been designed to allow the 4 developers to work independently without merge conflicts:

1. **Prasham Jain** (Project Lead, Architecture, Git):
   - Scope: Workspace structure, Tailwind/Theme systems, layout, page router structures.
2. **Pinank Shah** (Backend Lead, Database & APIs):
   - Scope: Expand folders under `backend/controllers`, `backend/models`, `backend/routes`, `backend/services`.
3. **Vinay Kumar** (Frontend Lead, Components & Animations):
   - Scope: Build components inside `frontend/components/ui/`, customize global layout styles.
4. **Debarghya Misra** (Maps, Testing & State management):
   - Scope: Expand state management stores under `frontend/store/`, API services in `frontend/services/`.

---

## Git Workflow Strategy

Suggest feature branch guidelines:
- Frontend layout/animations: `feature/frontend` or `feature/ui`
- Backend databases/models/routes: `feature/backend`
- Configurations, testing & stores: `feature/config`

Suggested commit tags for the team:
- `feat(frontend): <message>`
- `feat(backend): <message>`
- `chore(config): <message>`
- `docs(readme): <message>`
