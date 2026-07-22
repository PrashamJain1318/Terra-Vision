import express from 'express';
import enterpriseController from '../controllers/enterpriseController.js';

const router = express.Router();

// Partner Management Routes
router.get('/partners', enterpriseController.getPartners);
router.post('/partners/register', enterpriseController.registerPartner);

// Partner Portals Data Routes
router.get('/hotels', enterpriseController.getHotelListings);
router.get('/restaurants', enterpriseController.getRestaurantListings);

// Campaigns & Analytics Routes
router.get('/campaigns', enterpriseController.getCampaigns);
router.post('/campaigns', enterpriseController.createCampaign);
router.get('/analytics', enterpriseController.getAnalytics);

export default router;
