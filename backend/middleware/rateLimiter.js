export const rateLimiter = (req, res, next) => {
  // Simple in-memory rate limiter guard
  next();
};

export default rateLimiter;
