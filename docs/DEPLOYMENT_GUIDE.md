# LocalLens AI — Production Deployment Guide

---

## 🌐 Production Environment Topography
- **Frontend App**: Deployed live on Vercel (`https://frontend-pi-rouge-13.vercel.app`)
- **Backend API**: Deployed on Render / Railway / AWS (`http://localhost:5050` local)
- **Database**: MongoDB Atlas Cloud Cluster
- **AI Models**: Gemini 1.5 Pro / Flash via Firebase AI Logic

---

## 📦 Vercel Production Deployment Procedure

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Build production bundle locally
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
npm run build

# 3. Deploy live via Vercel CLI
npx -y vercel --prod --yes
```

---

## 🛠️ Environment Variables Configuration

```env
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=https://your-backend.render.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...

# Backend (.env)
PORT=5050
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/locallens
GEMINI_API_KEY=AIzaSy...
```
