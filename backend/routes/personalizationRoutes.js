import express from 'express';
import {
  getProfile,
  getRecommendations,
  getDna,
} from '../controllers/personalizationController.js';

const router = express.Router();

router.get('/profile', getProfile);
router.get('/recommendations', getRecommendations);
router.get('/dna', getDna);

export default router;
