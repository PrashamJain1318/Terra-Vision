import express from 'express';
import {
  logBetaEvent,
  submitFeedback,
  getFeatureFlags,
  toggleFeatureFlag,
  getBetaDashboardAnalytics,
} from '../controllers/betaController.js';

const router = express.Router();

router.post('/event', logBetaEvent);
router.post('/feedback', submitFeedback);
router.get('/flags', getFeatureFlags);
router.post('/flags/toggle', toggleFeatureFlag);
router.get('/analytics', getBetaDashboardAnalytics);

export default router;
