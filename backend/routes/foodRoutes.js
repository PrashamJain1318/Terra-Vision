import express from 'express';
import foodController from '../controllers/foodController.js';
import { validateFoodDiscover } from '../validators/foodValidator.js';

const router = express.Router();

router.post('/discover', validateFoodDiscover, foodController.discover);
router.post('/recommend', foodController.recommend);
router.get('/history', foodController.getHistory);
router.get('/restaurants', foodController.getRestaurants);
router.get('/dishes', foodController.getDishes);
router.post('/save', foodController.saveFood);
router.get('/saved', foodController.getSavedFoods);
router.delete('/save/:id', foodController.deleteSavedFood);

export default router;
