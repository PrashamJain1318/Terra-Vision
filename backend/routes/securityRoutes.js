import express from 'express';
import {
  getSecurityStatus,
  getHealthDetails,
  getBackupHistory,
  getRateLimits,
  getComplianceLogs,
} from '../controllers/securityController.js';

const router = express.Router();

router.get('/status', getSecurityStatus);
router.get('/health', getHealthDetails);
router.get('/backups', getBackupHistory);
router.get('/rate-limits', getRateLimits);
router.get('/audit-logs', getComplianceLogs);

export default router;
