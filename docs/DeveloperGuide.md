# LocalLens AI — Master Developer Guide

Architect: Prasham Jain (`PrashamJain1318`)

---

## 1. Quick Start Guide

### Prerequisites
- Node.js v18+
- MongoDB v6+ (Running on `mongodb://localhost:27017/locallens-ai`)

### Backend Setup
```bash
cd backend
npm install
PORT=5050 npm run start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 2. Code Quality & Contribution Rules
1. **Branching Convention**: `phase-<number>-<module>-<type>`
2. **Git Author Config**: Always configure individual team developer credentials before committing:
   ```bash
   git config user.name "<Developer Name>"
   git config user.email "<Developer Email>"
   ```
3. **Build Validation**: Always verify production build compilation (`npm run build`) before pushing.
