import { body } from 'express-validator';

export const validateCreatePost = [
  body('title').notEmpty().withMessage('Post title is required'),
  body('content').notEmpty().withMessage('Post content is required'),
  body('type').optional().isIn(['photo', 'story', 'journal', 'trip_plan', 'question', 'checkin', 'review']),
];
