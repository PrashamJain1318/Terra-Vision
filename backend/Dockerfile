# Multi-stage Dockerfile for Production Node.js Backend

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5050

COPY --from=builder /app ./

EXPOSE 5050
CMD ["npm", "run", "start"]
