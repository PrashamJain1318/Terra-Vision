import hiddenGemsProviderFactory from '../providers/hiddenGemsProviderFactory.js';
import RecommendationCacheService from './RecommendationCacheService.js';
import HistoryService from './HistoryService.js';

export const RecommendationService = {
  discover: async (userId, destination, interests = [], providerType = 'gemini') => {
    const cacheKey = `gem_${destination}_${providerType}`;
    const cached = await RecommendationCacheService.getCache(cacheKey);
    if (cached) {
      return cached.recommendations;
    }

    const provider = hiddenGemsProviderFactory.getProvider(providerType);
    const recommendations = await provider.getRecommendations(destination, interests);

    await RecommendationCacheService.setCache(cacheKey, destination, recommendations);
    if (userId) {
      await HistoryService.addHistory(userId, destination, interests, providerType);
    }

    return recommendations;
  },
};

export default RecommendationService;
