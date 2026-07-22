import express from 'express';
import visionController from '../controllers/visionController.js';
import { validateVisionAnalysis, validateMemorySave } from '../validators/visionValidator.js';
import visionRateLimiter from '../middleware/visionRateLimiter.js';
import uploadMiddleware from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Analyze image
router.post('/analyze', visionRateLimiter, validateVisionAnalysis, visionController.analyze);

// Upload image file
router.post('/upload', uploadMiddleware.single('image'), visionController.upload);

// Scan history
router.get('/history', visionController.getHistory);
router.get('/history/:scanId', visionController.getScanById);
router.delete('/history/:scanId', visionController.deleteScan);

// Save memory
router.post('/save-memory', validateMemorySave, visionController.saveMemory);

export default router;
