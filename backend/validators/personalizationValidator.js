import { body } from 'express-validator';

export const validateBehaviorEvent = [
  body('eventType').notEmpty().withMessage('Event type is required'),
];
