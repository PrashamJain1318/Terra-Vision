import express from 'express';
import aiBrainController from '../controllers/aiBrainController.js';

const router = express.Router();

router.post('/chat', aiBrainController.chat);
router.post('/plan-trip', aiBrainController.planTrip);
router.post('/budget-planner', aiBrainController.planBudget);
router.post('/packing-list', aiBrainController.generatePackingList);
router.post('/risk-analyzer', aiBrainController.analyzeRisk);
router.post('/review-summary', aiBrainController.summarizeReviews);
router.post('/journal', aiBrainController.generateJournal);

export default router;
