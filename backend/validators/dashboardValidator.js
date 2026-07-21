import { validationResult } from 'express-validator';
import AppError from '../utils/AppError.js';
import { HTTP_STATUS } from '../utils/constants.js';

export const validateDashboardParams = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError('Invalid query parameters', HTTP_STATUS.BAD_REQUEST, errors.array()));
  }
  next();
};
