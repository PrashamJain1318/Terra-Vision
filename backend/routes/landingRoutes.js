import express from 'express';
import * as landingController from '../controllers/landingController.js';

const router = express.Router();

router.get('/hero', landingController.getHero);
router.get('/features', landingController.getFeatures);
router.get('/statistics', landingController.getStatistics);
router.get('/testimonials', landingController.getTestimonials);
router.get('/footer', landingController.getFooter);

export default router;
