import logger from '../config/logger.js';
import env from '../config/env.js';

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);
  const errorCode = err.errorCode || 'INTERNAL_SERVER_ERROR';

  // Log error with levels dynamically
  if (statusCode >= 500) {
    logger.error(`${err.message} \nStack: ${err.stack}`);
  } else {
    logger.warn(`${err.message} [Code: ${errorCode}]`);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected error occurred',
    errorCode,
    details: err.details || null,
    timestamp: new Date().toISOString(),
    // Stack trace hidden in production environments
    stack: env.NODE_ENV === 'production' ? null : err.stack,
  });
};
