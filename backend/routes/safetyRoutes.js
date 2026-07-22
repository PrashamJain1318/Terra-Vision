import express from 'express';
import safetyController from '../controllers/safetyController.js';
import { validateAnalyzeSafety } from '../validators/safetyValidator.js';

const router = express.Router();

router.post('/analyze', validateAnalyzeSafety, safetyController.analyzeSafety);
router.post('/scam-check', safetyController.scamCheck);
router.get('/score', safetyController.getScore);
router.get('/advisories', safetyController.getAdvisories);
router.get('/emergency', safetyController.getEmergency);
router.get('/risk-zones', safetyController.getRiskZones);
router.post('/community-report', safetyController.createCommunityReport);
router.get('/community-reports', safetyController.getCommunityReports);
router.post('/sos', safetyController.triggerSOS);
router.get('/history', safetyController.getHistory);
router.post('/notifications', safetyController.sendNotification);

export default router;
