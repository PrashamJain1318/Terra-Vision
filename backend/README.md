# LocalLens AI — Express.js Production Backend Services

Developer: Pinank Shah (`pinankshah-Ab`)

---

## 🚀 Key Production Features
- **REST APIs**: Auth, Dashboard, Planner, Maps, and AI Vision modules.
- **Provider Adapters**: Dynamically switches AI models (Gemini, GPT-4o, Azure, AWS).
- **Security & Reliability**: Helmet headers, express rate limiters, Winston structured logging, and input schema validation.
- **Docker Ready**: Multi-stage `Dockerfile` and `docker-compose.yml` configuration.

---

## ⚙️ Quick Run
```bash
npm install
PORT=5050 npm run start
```
- Health Check: `GET /health` or `GET /api/v1/health`
