import { body, validationResult } from 'express-validator';

export const validateInteract = [
  body('prompt').notEmpty().withMessage('Prompt string is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
];

export default { validateInteract };
