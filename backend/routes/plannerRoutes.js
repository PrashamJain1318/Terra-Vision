import express from 'express';
import plannerController from '../controllers/plannerController.js';
import { validateGenerateItinerary } from '../validators/plannerValidator.js';
import plannerRateLimiter from '../middleware/plannerRateLimiter.js';

const router = express.Router();

// Generate AI itinerary
router.post('/generate', plannerRateLimiter, validateGenerateItinerary, plannerController.generate);

// Save itinerary
router.post('/save', plannerController.save);

// Regenerate itinerary
router.post('/regenerate', plannerController.regenerate);

// History
router.get('/history', plannerController.getHistory);

// Single itinerary by ID
router.get('/:tripId', plannerController.getById);

// Update itinerary
router.put('/:tripId', plannerController.update);

// Delete itinerary
router.delete('/:tripId', plannerController.delete);

export default router;
