/**
 * OpenAI GPT-4o Recommendation Provider Adapter
 */

export const OpenAIProvider = {
  getRecommendations: async (destination, interests = []) => {
    return [
      {
        name: 'Chadwick Falls Pine Gorge',
        category: 'Nature',
        location: 'Glen Valley, Shimla',
        description: 'Waterfall cascading down a deep pine ravine.',
        experienceScore: 9.1,
        crowdLevel: 'low',
        bestVisitTime: '8:00 AM - 11:00 AM',
        aiStory: 'GPT-4o recommendation for tranquil water streams.',
      },
    ];
  },
};

export default OpenAIProvider;
