# LocalLens AI Known Issues & Release Notes

This document contains bug logs, release steps, and developer handover guidelines.

---

## 1. Release Notes (Phase 6 Integration)
- Combined Landing Page UI segments, navigation models, and public API contents into the testing container.
- Configured dynamic JSON APIs to feed Hero, Features, Statistics, Testimonials, and Footer layouts.

---

## 2. Issue Tracking Log

| ID | Issue Description | Severity | Status | Fix/Remediation |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-001** | Next.js build type check collisions with PanInfo | Low | SOLVED | Cast props to `any` inside `<AnimatedButton />`. |
| **BUG-002** | Lucide brand icons version discrepancies | Low | SOLVED | Swapped package imports with custom inline SVGs in footer. |

---

## 3. Developer Handover & Deploy Steps
1. **Initialize DB Seed Content**:
   ```bash
   cd backend
   node scripts/seed.js
   ```
2. **Launch Dev Server**:
   ```bash
   npm run dev
   ```
3. **Verify endpoints**: Run Postman collections check.
