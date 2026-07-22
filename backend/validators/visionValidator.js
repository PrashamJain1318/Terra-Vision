import { body, validationResult } from 'express-validator';

export const validateVisionAnalysis = [
  body('imageUrl').optional().isString(),
  body('provider').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors: errors.array() });
    }
    next();
  },
];

export const validateMemorySave = [
  body('scanId').notEmpty().withMessage('scanId is required'),
  body('title').notEmpty().withMessage('title is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: 'Validation failed', errors: errors.array() });
    }
    next();
  },
];

export default { validateVisionAnalysis, validateMemorySave };
