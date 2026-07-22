export const OpenAIMemoryProvider = {
  generateStory: async (tripTitle, destination, templateId = 'culinary') => {
    return `[GPT-4o Gourmet Story] An unforgettable culinary odyssey in ${destination}, celebrating century-old clay ovens, secret spice markets, and rich regional flavors.`;
  },
};

export default OpenAIMemoryProvider;
