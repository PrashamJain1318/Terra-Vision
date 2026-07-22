import { body, validationResult } from 'express-validator';

export const validateGenerateItinerary = [
  body('destination').notEmpty().withMessage('Destination is required'),
  body('travelDays').optional().isInt({ min: 1, max: 30 }).withMessage('Travel days must be between 1 and 30'),
  body('travelers').optional().isInt({ min: 1, max: 20 }).withMessage('Travelers must be at least 1'),
  body('budget').optional().isString(),
  body('travelStyle').optional().isString(),
  body('interests').optional().isArray(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }
    next();
  },
];

export default { validateGenerateItinerary };
