import { body } from 'express-validator';

export const validateBroadcastNotification = [
  body('title').notEmpty().withMessage('Announcement title is required'),
  body('message').notEmpty().withMessage('Announcement message is required'),
];
