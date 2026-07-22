import express from 'express';
import {
  getMetrics,
  getUsers,
  getReports,
  getAiOps,
  getAuditLogs,
} from '../controllers/adminController.js';

const router = express.Router();

router.get('/metrics', getMetrics);
router.get('/users', getUsers);
router.get('/reports', getReports);
router.get('/ai-ops', getAiOps);
router.get('/audit-logs', getAuditLogs);

export default router;
