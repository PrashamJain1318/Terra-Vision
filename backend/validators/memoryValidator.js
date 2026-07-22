import { body, validationResult } from 'express-validator';

export const validateCreateMemory = [
  body('title').isString().notEmpty(),
  body('destination').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

export default { validateCreateMemory };
