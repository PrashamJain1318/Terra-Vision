# Testing Setup & Dependency Verification Checklist

This guide provides the testing plan and verification rules for the Phase 1 Foundation of LocalLens AI.

## 1. Automated Verification Checks

Before pushing code to branches (`feature/frontend`, `feature/backend`, etc.), perform the following checks:

### Frontend
1. Check TypeScript compilation:
   ```bash
   cd frontend
   npx tsc --noEmit
   ```
2. Build validation:
   ```bash
   cd frontend
   npm run build
   ```
3. Lint rules verification:
   ```bash
   cd frontend
   npm run lint
   ```

### Backend
1. Check syntax and start:
   ```bash
   cd backend
   npm run dev
   ```
2. Make a request to the health-check route:
   ```bash
   curl http://localhost:5000/api/health
   ```

## 2. Testing Checklist (Self-Verification)

Ensure the following criteria are met during architecture setup:
- [x] Package.json files have all required dependencies.
- [x] Next.js 15 app router starts cleanly without runtime warning/crashes.
- [x] ThreeJS canvas displays basic scene.
- [x] GSAP module imports without throwing errors.
- [x] Lenis smooth scroll initialization runs on scroll events.
- [x] Mongoose connection attempts database connection at startup.
- [x] Global layout features dark mode default.
- [x] Global error boundaries catch fallback states correctly.
