export const PersonalizedRecommendationService = {
  async getRecommendations(userId) {
    return [
      {
        id: 'rec-1',
        type: 'hidden_gem',
        title: 'Otagi Nenbutsu-ji Temple',
        location: 'Kyoto, Japan',
        confidenceScore: 96,
        explanation: 'Matches your 95% Adventure + 81% History DNA profile. 1,200 unique mossy rakan statues away from tourist crowds.',
      },
      {
        id: 'rec-2',
        type: 'restaurant',
        title: 'Gion Duck Noodles',
        location: 'Kyoto, Japan',
        confidenceScore: 94,
        explanation: 'Matches your 92% Foodie score. Hidden subterranean ramen shop with emoji menu.',
      },
    ];
  },
};

export default PersonalizedRecommendationService;
