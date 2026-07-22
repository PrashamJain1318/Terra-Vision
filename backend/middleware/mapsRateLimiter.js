const requestStore = new Map();

export const mapsRateLimiter = (req, res, next) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 30;

  if (!requestStore.has(ip)) {
    requestStore.set(ip, []);
  }

  const timestamps = requestStore.get(ip).filter(t => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many maps requests from this IP, please try again in a minute.',
    });
  }

  timestamps.push(now);
  requestStore.set(ip, timestamps);
  next();
};

export default mapsRateLimiter;
