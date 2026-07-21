# Environment & Infrastructure Checklists

Use the following step-by-step checklists to verify that all systems are operational before pushing to the staging or production environments.

---

## 1. MongoDB Database Checklist
- [ ] Connect URI variables parsed correctly from environment keys.
- [ ] Connection timeout configured to prevent server thread hang-ups.
- [ ] Database client pooling ranges checked (default 5 connections, scale as needed).
- [ ] Automated schema indexes verified inside models.

## 2. Express Gateway Checklist
- [ ] CORS domains restricted only to verified client origins.
- [ ] JSON response limits configured (max payload bounds to prevent DDoS).
- [ ] Morgan output stream correctly redirected to Winston transports.
- [ ] Custom AppError subclasses properly mapping status codes.

## 3. Environment Variables Verification Checklist
- [ ] `MONGO_URI` is a valid connection string.
- [ ] `JWT_SECRET` is at least 32 characters long.
- [ ] `GEMINI_API_KEY` and `GOOGLE_MAPS_API_KEY` are defined and valid.
- [ ] `NODE_ENV` is set to `production` in production hosting environments.
