import FoodHistory from '../models/FoodHistory.js';

export const FoodHistoryService = {
  addHistory: async (userId, destination, cuisine, diet) => {
    return await FoodHistory.create({ user: userId, destination, cuisine, diet });
  },

  getHistory: async (userId, limit = 10) => {
    return await FoodHistory.find({ user: userId }).sort({ createdAt: -1 }).limit(limit);
  },
};

export default FoodHistoryService;
