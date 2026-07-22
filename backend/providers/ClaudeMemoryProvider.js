export const ClaudeMemoryProvider = {
  generateStory: async (tripTitle, destination, templateId = 'adventurous') => {
    return `[Claude 3.5 Sonnet Story] A deep cultural log exploring hidden architectural baolis, ancestral craftsmanship, and vibrant local communities in ${destination}.`;
  },
};

export default ClaudeMemoryProvider;
