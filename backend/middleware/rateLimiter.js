// Rate Limiting Protection Middleware for LocalLens AI 3.0
const requestCounts = new Map();

export const rateLimiter = (options = { windowMs: 15 * 60 * 1000, max: 100 }) => {
  return (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
    const now = Date.now();

    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, { count: 1, startTime: now });
      return next();
    }

    const clientData = requestCounts.get(ip);
    if (now - clientData.startTime > options.windowMs) {
      clientData.count = 1;
      clientData.startTime = now;
      return next();
    }

    clientData.count += 1;

    if (clientData.count > options.max) {
      return res.status(429).json({
        success: false,
        error: 'Too Many Requests',
        message: 'Rate limit exceeded. Please try again after 15 minutes.'
      });
    }

    next();
  };
};

export default rateLimiter;
