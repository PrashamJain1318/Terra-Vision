import express from 'express';
import hiddenGemsController from '../controllers/hiddenGemsController.js';
import { validateDiscover } from '../validators/hiddenGemsValidator.js';

const router = express.Router();

router.post('/discover', validateDiscover, hiddenGemsController.discover);
router.post('/recommend', hiddenGemsController.recommend);
router.get('/history', hiddenGemsController.getHistory);
router.post('/save', hiddenGemsController.saveGem);
router.get('/saved', hiddenGemsController.getSavedGems);
router.delete('/save/:id', hiddenGemsController.deleteSavedGem);

export default router;
