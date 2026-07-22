import FoodRecommendationService from '../services/FoodRecommendationService.js';
import SavedFoodService from '../services/SavedFoodService.js';
import FoodHistoryService from '../services/FoodHistoryService.js';
import RestaurantService from '../services/RestaurantService.js';
import DishService from '../services/DishService.js';

export const foodController = {
  discover: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination = 'Amritsar, Punjab', cuisine = 'street_food', diet = 'vegetarian', provider = 'gemini' } = req.body;
      const recommendations = await FoodRecommendationService.discover(userId, destination, cuisine, diet, provider);
      return res.status(200).json({ success: true, message: 'Local food recommendations discovered', data: recommendations });
    } catch (err) {
      next(err);
    }
  },

  recommend: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { destination = 'Amritsar, Punjab' } = req.body;
      const recommendations = await FoodRecommendationService.discover(userId, destination);
      return res.status(200).json({ success: true, message: 'Personalized food recommendations', data: recommendations });
    } catch (err) {
      next(err);
    }
  },

  getHistory: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const history = await FoodHistoryService.getHistory(userId);
      return res.status(200).json({ success: true, message: 'Food discovery history retrieved', data: history });
    } catch (err) {
      next(err);
    }
  },

  getRestaurants: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const restaurants = await RestaurantService.getRestaurantsByDestination(destination);
      return res.status(200).json({ success: true, message: 'Restaurants retrieved', data: restaurants });
    } catch (err) {
      next(err);
    }
  },

  getDishes: async (req, res, next) => {
    try {
      const { destination = 'Amritsar, Punjab' } = req.query;
      const dishes = await DishService.getDishesByDestination(destination);
      return res.status(200).json({ success: true, message: 'Local dishes retrieved', data: dishes });
    } catch (err) {
      next(err);
    }
  },

  saveFood: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { foodId, dishName, notes } = req.body;
      const saved = await SavedFoodService.saveFood(userId, foodId, dishName, notes);
      return res.status(201).json({ success: true, message: 'Food item saved successfully', data: saved });
    } catch (err) {
      next(err);
    }
  },

  getSavedFoods: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const saved = await SavedFoodService.getSavedFoods(userId);
      return res.status(200).json({ success: true, message: 'Saved food items retrieved', data: saved });
    } catch (err) {
      next(err);
    }
  },

  deleteSavedFood: async (req, res, next) => {
    try {
      const userId = req.user?._id || '6a5fef395c72ccbcfd4405d1';
      const { id } = req.params;
      await SavedFoodService.deleteSavedFood(userId, id);
      return res.status(200).json({ success: true, message: 'Saved food item deleted' });
    } catch (err) {
      next(err);
    }
  },
};

export default foodController;
