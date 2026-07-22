import FoodRecommendationCache from '../models/FoodRecommendationCache.js';

export const FoodRecommendationCacheService = {
  getCache: async (key) => {
    return await FoodRecommendationCache.findOne({ cacheKey: key, expiresAt: { $gt: new Date() } });
  },

  setCache: async (key, destination, recommendations, ttlMinutes = 60) => {
    const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);
    return await FoodRecommendationCache.findOneAndUpdate(
      { cacheKey: key },
      { destination, recommendations, expiresAt },
      { upsert: true, new: true }
    );
  },
};

export default FoodRecommendationCacheService;
