import express from 'express';
import * as dashboardController from '../controllers/dashboardController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply authentication middleware on all dashboard routes
router.use(protect);

router.get('/overview', dashboardController.getOverview);
router.get('/quick-actions', dashboardController.getQuickActions);
router.get('/statistics', dashboardController.getStatistics);
router.get('/recent-trips', dashboardController.getRecentTrips);
router.get('/recent-memories', dashboardController.getRecentMemories);
router.get('/saved-places', dashboardController.getSavedPlaces);
router.get('/notifications', dashboardController.getNotifications);
router.get('/activity', dashboardController.getActivity);

export default router;
