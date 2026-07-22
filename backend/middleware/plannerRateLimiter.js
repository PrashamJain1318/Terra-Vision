// In-memory rate limiter middleware for AI Planner generation
const requestStore = new Map();

export const plannerRateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 20;

  if (!requestStore.has(ip)) {
    requestStore.set(ip, []);
  }

  const timestamps = requestStore.get(ip).filter(t => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many planner requests from this IP, please try again in a minute.',
    });
  }

  timestamps.push(now);
  requestStore.set(ip, timestamps);
  next();
};

export default plannerRateLimiter;
