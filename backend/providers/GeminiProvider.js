/**
 * Gemini Hidden Gems Recommendation Provider Adapter
 */

export const GeminiProvider = {
  getRecommendations: async (destination, interests = []) => {
    return [
      {
        name: 'Potters Hill Pine Sanctuary',
        category: 'Nature & Pine Trails',
        location: 'Near Summer Hill, Shimla',
        description: 'Dense Himalayan pine forest trail untouched by commercial tourism.',
        experienceScore: 9.6,
        crowdLevel: 'very_low',
        bestVisitTime: '7:30 AM - 10:00 AM',
        aiStory: 'Carved through British-era forestry paths, Potters Hill remains untouched.',
      },
      {
        name: 'Annandale Heritage Meadow & Museum',
        category: 'Colonial & Cultural Heritage',
        location: 'Annandale, Shimla',
        description: 'Serene glade and heritage army museum in a lush valley bowl.',
        experienceScore: 9.4,
        crowdLevel: 'low',
        bestVisitTime: '10:00 AM - 1:00 PM',
        aiStory: 'Surrounded by deodar trees, Annandale hosted India\'s first polo matches in 1888.',
      },
    ];
  },
};

export default GeminiProvider;
