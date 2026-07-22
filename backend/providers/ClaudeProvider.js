/**
 * Anthropic Claude Recommendation Provider Adapter
 */

export const ClaudeProvider = {
  getRecommendations: async (destination, interests = []) => {
    return [
      {
        name: 'Himalayan Bird Park Vista',
        category: 'Heritage & Wildlife',
        location: 'Observatory Hill, Shimla',
        description: 'Quiet sanctuary showcasing rare Himalayan monals.',
        experienceScore: 9.3,
        crowdLevel: 'very_low',
        bestVisitTime: '9:00 AM - 12:00 PM',
        aiStory: 'Claude recommendation highlighting biodiversity preservation.',
      },
    ];
  },
};

export default ClaudeProvider;
