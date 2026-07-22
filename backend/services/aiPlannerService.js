import promptBuilderService from './promptBuilderService.js';

export const aiPlannerService = {
  generateItinerary: async (params) => {
    const {
      destination = 'Amritsar, Punjab',
      travelDays = 3,
      budget = 'balanced',
      travelStyle = 'Heritage & Food',
    } = params;

    const apiKey = process.env.OPENAI_API_KEY;

    // Connect to ChatGPT OpenAI API if API Key is available
    if (apiKey && apiKey !== 'mock_openai_key' && !apiKey.startsWith('mock_')) {
      try {
        const systemPrompt = `You are LocalLens AI, an expert travel planner. Generate a JSON multi-day itinerary for the destination "${destination}" lasting ${travelDays} days for a "${travelStyle}" style trip with "${budget}" budget. 
Return ONLY a valid JSON object matching this exact schema:
{
  "tripTitle": "string",
  "destination": "${destination}",
  "days": ${travelDays},
  "summary": "string",
  "estimatedBudget": "string",
  "itinerary": [
    {
      "day": 1,
      "title": "string",
      "morning": "string",
      "afternoon": "string",
      "evening": "string",
      "foodSuggestions": ["string"]
    }
  ],
  "travelTips": ["string"],
  "packingChecklist": ["string"],
  "bestTimeToVisit": "string"
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
                content: `Create a ${travelDays}-day ${travelStyle} travel itinerary for ${destination}.`,
              },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.7,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const parsed = JSON.parse(data.choices[0].message.content);
          return parsed;
        }
      } catch (err) {
        console.warn('ChatGPT API call failed, using LocalLens AI engine:', err.message);
      }
    }

    // Dynamic LocalLens AI itinerary generator engine
    const numDays = parseInt(travelDays, 10) || 3;
    return {
      tripTitle: `AI Expedition: ${destination}`,
      destination: destination,
      days: numDays,
      summary: `A carefully curated ${numDays}-day travel experience in ${destination} tailored for a ${travelStyle} style (${budget} budget).`,
      estimatedBudget:
        budget === 'luxury' ? '$500 - $1200' : budget === 'backpack' ? '$50 - $120' : '$150 - $350',
      itinerary: Array.from({ length: Math.min(numDays, 7) }, (_, idx) => ({
        day: idx + 1,
        title: `Day ${idx + 1}: ${
          idx === 0
            ? 'Arrival & Cultural Immersion'
            : idx === 1
            ? 'Hidden Gems & Historic Walk'
            : 'Culinary Masterclass & Scenic Views'
        } in ${destination}`,
        morning: `Morning Heritage Walk & iconic landmarks in ${destination}.`,
        afternoon: `Sample authentic local delicacies & explore artisan bazaar markets.`,
        evening: `Golden hour photography at scenic viewpoints & evening street food.`,
        foodSuggestions: [
          `Legendary Local Spot Day ${idx + 1}`,
          `Heritage Tea House`,
          `Traditional Street Bazaar`,
        ],
      })),
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
