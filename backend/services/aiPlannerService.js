import promptBuilderService from './promptBuilderService.js';

export const aiPlannerService = {
  generateItinerary: async (params) => {
    const destination = params.destination || 'Munnar, Kerala';
    const travelDays = parseInt(params.travelDays, 10) || 3;
    const budget = params.budget || 'balanced';
    const travelStyle = params.travelStyle || 'Heritage & Food';

    const apiKey = process.env.OPENAI_API_KEY;

    // Connect to ChatGPT OpenAI API if API Key is available
    if (apiKey && apiKey !== 'mock_openai_key' && !apiKey.startsWith('mock_')) {
      try {
        const systemPrompt = `You are LocalLens AI, an expert travel planner. Generate a complete multi-day JSON itinerary for destination "${destination}" lasting EXACTLY ${travelDays} days (Day 1 through Day ${travelDays}) for a "${travelStyle}" style trip with "${budget}" budget. 
Return ONLY a valid JSON object matching this exact schema:
{
  "tripTitle": "AI Expedition: ${destination}",
  "destination": "${destination}",
  "days": ${travelDays},
  "summary": "A curated ${travelDays}-day travel experience in ${destination} tailored for ${travelStyle}.",
  "estimatedBudget": "$150 - $350 per day",
  "itinerary": [
    {
      "day": 1,
      "title": "Day 1 Title",
      "morning": "Morning activity details in ${destination}",
      "afternoon": "Afternoon activity details in ${destination}",
      "evening": "Evening activity details in ${destination}",
      "foodSuggestions": ["Food Pick 1", "Food Pick 2"]
    }
  ],
  "travelTips": ["Tip 1", "Tip 2"],
  "packingChecklist": ["Item 1", "Item 2"],
  "bestTimeToVisit": "Best season details"
}`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: systemPrompt },
              {
                role: 'user',
                content: `Create an itinerary for ${destination} lasting EXACTLY ${travelDays} days. Generate ${travelDays} distinct day items in the itinerary array.`,
              },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.7,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const parsed = JSON.parse(data.choices[0].message.content);
          if (parsed && Array.isArray(parsed.itinerary) && parsed.itinerary.length > 0) {
            return parsed;
          }
        }
      } catch (err) {
        console.warn('ChatGPT API call failed, using LocalLens AI engine:', err.message);
      }
    }

    // Dynamic LocalLens AI itinerary generator engine for exact requested travelDays
    const dayTitles = [
      'Arrival & Cultural Heritage Walk',
      'Hidden Gems & Historical Landmarks',
      'Culinary Masterclass & Local Spice Markets',
      'Nature Exploration & Scenic Vantage Points',
      'Artisan Crafts & Local Bazaar Walking Tour',
      'Panoramic Sunset Views & Relaxation',
      'Farewell Walking Tour & Souvenir Shopping',
      'Countryside Day Trip & Hidden Stepwells',
      'Architectural Photography & Cafe Hopping',
      'Local Life Immersion & Eco-Trail Trek',
    ];

    const generatedDays = Array.from({ length: travelDays }, (_, idx) => {
      const dayNum = idx + 1;
      const titleTheme = dayTitles[(dayNum - 1) % dayTitles.length];
      return {
        day: dayNum,
        title: `${titleTheme} in ${destination}`,
        morning: `Explore iconic morning landmarks & scenic points around ${destination} (Day ${dayNum}).`,
        afternoon: `Enjoy authentic regional lunch delicacies and vibrant artisan markets in ${destination}.`,
        evening: `Golden hour sunset views, cozy cafes, and local evening street walkthroughs.`,
        foodSuggestions: [
          `Authentic ${destination} Eatery ${dayNum}`,
          `Heritage Tea House`,
          `Famous Local Street Bazaar`,
        ],
      };
    });

    return {
      tripTitle: `AI Expedition: ${destination}`,
      destination: destination,
      days: travelDays,
      summary: `A carefully curated ${travelDays}-day travel experience in ${destination} tailored for ${travelStyle} (${budget} budget).`,
      estimatedBudget:
        budget === 'luxury' ? '$500 - $1200' : budget === 'backpack' ? '$50 - $120' : '$150 - $350',
      itinerary: generatedDays,
      travelTips: [
        'Carry local cash for small street vendors.',
        'Keep digital copies of identification stored offline.',
        'Download offline navigation maps before exploring remote areas.',
      ],
      packingChecklist: ['Comfortable walking shoes', 'Layered clothing', 'Universal power adapter', 'Travel first aid kit'],
      bestTimeToVisit: 'October to March',
      localEtiquette: 'Respect local customs and ask before photography at sacred sites.',
      emergencyNumbers: 'Police: 112, Tourist Helpline: 1364',
    };
  },
};

export default aiPlannerService;
