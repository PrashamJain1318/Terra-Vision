import RecommendationCache from '../models/RecommendationCache.js';

export const RecommendationCacheService = {
  getCache: async (key) => {
    return await RecommendationCache.findOne({ cacheKey: key, expiresAt: { $gt: new Date() } });
  },

  setCache: async (key, destination, recommendations, ttlMinutes = 60) => {
    const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000);
    return await RecommendationCache.findOneAndUpdate(
      { cacheKey: key },
      { destination, recommendations, expiresAt },
      { upsert: true, new: true }
    );
  },
};

export default RecommendationCacheService;
