import AppError from '../utils/AppError.js';
import { HTTP_STATUS, ERROR_CODES } from '../utils/constants.js';

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

export default restrictTo;
