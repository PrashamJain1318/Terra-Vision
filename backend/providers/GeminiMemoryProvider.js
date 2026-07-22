export const GeminiMemoryProvider = {
  generateStory: async (tripTitle, destination, templateId = 'poetic') => {
    return `[Gemini 1.5 Pro AI Story] Under the golden skies of ${destination}, this journey wove through centuries of sacred heritage, clay tandoor aromas, and secret underground stepwells.`;
  },
};

export default GeminiMemoryProvider;
