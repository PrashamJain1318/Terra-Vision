import promptBuilderService from './promptBuilderService.js';

export const aiPlannerService = {
  generateItinerary: async (params) => {
    const { userPrompt } = promptBuilderService.buildItineraryPrompt(params);
    const { destination = 'Shimla, India', travelDays = 3, budget = 'balanced' } = params;

    // Structured JSON response generation engine
    const mockResponse = {
      tripTitle: `AI Expedition: ${destination}`,
      destination: destination,
      days: travelDays,
      summary: `A carefully curated ${travelDays}-day travel experience in ${destination} tailored for a ${budget} style travel experience.`,
      estimatedBudget: budget === 'luxury' ? '$500 - $1200' : budget === 'backpack' ? '$50 - $120' : '$150 - $350',
      itinerary: Array.from({ length: Math.min(travelDays, 7) }, (_, idx) => ({
        day: idx + 1,
        title: `Day ${idx + 1}: Exploring Highlights of ${destination}`,
        morning: `Visit top-rated scenic vantage points & historic heritage sites in ${destination}.`,
        afternoon: `Experience authentic local cuisine and artisanal markets around town.`,
        evening: `Sunset viewpoints, relaxing cafes, and cultural street walkthroughs.`,
        foodSuggestions: [`Local Bistro Day ${idx + 1}`, `Heritage Tea House`, `Street Food Bazaar`],
      })),
      travelTips: [
        'Carry local currency for small street vendors.',
        'Keep digital copies of identification documents stored offline.',
        'Download offline navigation maps prior to traveling into valley regions.',
      ],
      packingChecklist: ['Comfortable walking shoes', 'Layered jackets', 'Universal adapter', 'First aid kit'],
      bestTimeToVisit: 'March to June & September to December',
      localEtiquette: 'Respect local customs, ask permission before photography at sacred sites.',
      emergencyNumbers: 'Police: 112, Tourist Helpline: 1364',
    };

    return mockResponse;
  },
};

export default aiPlannerService;
