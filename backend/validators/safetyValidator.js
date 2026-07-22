import { body, validationResult } from 'express-validator';

export const validateAnalyzeSafety = [
  body('destination').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

export default { validateAnalyzeSafety };
