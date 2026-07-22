import { body } from 'express-validator';

export const validateBackupRequest = [
  body('type').optional().isIn(['FULL', 'INCREMENTAL']).withMessage('Invalid backup type'),
];
