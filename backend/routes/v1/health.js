import express from 'express';
import { sendResponse } from '../../utils/responseHandler.js';
import { HTTP_STATUS } from '../../utils/constants.js';

const router = express.Router();

router.get('/', (req, res) => {
  sendResponse(res, HTTP_STATUS.OK, 'System is healthy', {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;
