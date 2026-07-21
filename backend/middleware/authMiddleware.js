import { verifyToken } from '../utils/token.js';
import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS, ERROR_CODES } from '../utils/constants.js';

/**
 * Middleware to protect routes by validating JWT access tokens.
 */
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Try to read token from cookies or Authorization header
  if (req.cookies?.accessToken) {
    token = req.cookies.accessToken;
  } else if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError(
        'Authentication required. Please log in to proceed.',
        HTTP_STATUS.UNAUTHORIZED,
        ERROR_CODES.UNAUTHORIZED
      )
    );
  }

  try {
    // 2. Verify token signature and expiration
    const decoded = verifyToken(token);

    // 3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError(
          'The user belonging to this token no longer exists.',
          HTTP_STATUS.UNAUTHORIZED,
          ERROR_CODES.UNAUTHORIZED
        )
      );
    }

    // 4. Attach user object to request context
    req.user = currentUser;
    next();
  } catch (error) {
    return next(
      new AppError(
        'Invalid or expired token. Please log in again.',
        HTTP_STATUS.UNAUTHORIZED,
        ERROR_CODES.UNAUTHORIZED
      )
    );
  }
});

/**
 * Middleware to restrict access based on user roles (RBAC).
 * @param {...string} roles - Permitted roles (e.g. 'admin', 'user')
 */
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(
        new AppError(
          'Access forbidden. You do not have permission to perform this action.',
          HTTP_STATUS.FORBIDDEN,
          ERROR_CODES.FORBIDDEN
        )
      );
    }
    next();
  };
};
