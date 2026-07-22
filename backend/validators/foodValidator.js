import { body, validationResult } from 'express-validator';

export const validateFoodDiscover = [
  body('destination').optional().isString(),
  body('cuisine').optional().isString(),
  body('diet').optional().isString(),
  body('provider').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

export default { validateFoodDiscover };
