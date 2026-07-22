import SavedFood from '../models/SavedFood.js';

export const SavedFoodService = {
  saveFood: async (userId, foodId, dishName, notes = '') => {
    return await SavedFood.create({ user: userId, foodId, dishName, notes });
  },

  getSavedFoods: async (userId) => {
    return await SavedFood.find({ user: userId });
  },

  deleteSavedFood: async (userId, savedId) => {
    return await SavedFood.deleteOne({ _id: savedId, user: userId });
  },
};

export default SavedFoodService;
