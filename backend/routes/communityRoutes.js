import express from 'express';
import {
  getFeed,
  createPost,
  getProfile,
  getGroups,
  getRecommendations,
} from '../controllers/communityController.js';
import { validateCreatePost } from '../validators/communityValidator.js';

const router = express.Router();

router.get('/feed', getFeed);
router.post('/posts', validateCreatePost, createPost);
router.get('/profiles/:userId', getProfile);
router.get('/groups', getGroups);
router.get('/recommendations', getRecommendations);

export default router;
