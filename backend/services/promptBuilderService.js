/**
 * Prompt Builder Service
 * Converts user parameters into structured system and user prompts for LLM providers.
 */

export const promptBuilderService = {
  buildItineraryPrompt: (params) => {
    const {
      destination = 'Shimla',
      travelDays = 3,
      travelers = 1,
      travelStyle = 'balanced',
      budget = 'balanced',
      interests = ['nature', 'foodie'],
      accommodationPreference = 'comfort',
      transportPreference = 'mixed',
      language = 'English',
    } = params;

    const systemPrompt = `You are LocalLens AI, an expert travel architect. Output ONLY valid JSON matching this exact schema:
{
  "tripTitle": "string",
  "destination": "string",
  "days": number,
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
  "bestTimeToVisit": "string",
  "localEtiquette": "string",
  "emergencyNumbers": "string"
}`;

    const userPrompt = `Create a ${travelDays}-day travel itinerary for ${destination} for ${travelers} traveler(s).
Travel Style: ${travelStyle}
Budget Level: ${budget}
Interests: ${interests.join(', ')}
Accommodation Preference: ${accommodationPreference}
Transport Preference: ${transportPreference}
Language: ${language}`;

    return { systemPrompt, userPrompt };
  },
};

export default promptBuilderService;
