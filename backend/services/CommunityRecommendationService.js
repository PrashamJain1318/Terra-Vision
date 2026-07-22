export const CommunityRecommendationService = {
  async getRecommendations(userId) {
    return {
      suggestedTravelers: [
        { userId: 'u2', name: 'Marcus Vance', handle: '@marcus_v', reason: 'Matches your food & photography interests' },
        { userId: 'u3', name: 'Aria Thorne', handle: '@aria_aurora', reason: 'Active in Reykjavik & Scandinavia' },
      ],
      trendingGroups: ['Backpackers India', 'Food Explorers Kyoto'],
    };
  },
};

export default CommunityRecommendationService;
