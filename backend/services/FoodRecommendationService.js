import foodProviderFactory from '../providers/foodProviderFactory.js';
import FoodRecommendationCacheService from './FoodRecommendationCacheService.js';
import FoodHistoryService from './FoodHistoryService.js';

export const FoodRecommendationService = {
  discover: async (userId, destination, cuisine = 'street_food', diet = 'vegetarian', providerType = 'gemini') => {
    const cacheKey = `food_${destination}_${cuisine}_${diet}_${providerType}`;
    const cached = await FoodRecommendationCacheService.getCache(cacheKey);
    if (cached) {
      return cached.recommendations;
    }

    const provider = foodProviderFactory.getProvider(providerType);
    const recommendations = await provider.getFoodRecommendations(destination, cuisine, diet);

    await FoodRecommendationCacheService.setCache(cacheKey, destination, recommendations);
    if (userId) {
      await FoodHistoryService.addHistory(userId, destination, cuisine, diet);
    }

    return recommendations;
  },
};

export default FoodRecommendationService;
