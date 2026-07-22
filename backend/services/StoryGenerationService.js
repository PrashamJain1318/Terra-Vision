import MemoryStory from '../models/MemoryStory.js';
import memoryProviderFactory from '../providers/memoryProviderFactory.js';

export const StoryGenerationService = {
  generateStory: async (memoryId, destination = 'Amritsar', templateId = 'poetic', providerType = 'gemini') => {
    const provider = memoryProviderFactory.getProvider(providerType);
    const storyText = await provider.generateStory('Travel Memory', destination, templateId);

    const storyDoc = await MemoryStory.create({
      memory: memoryId,
      provider: providerType,
      templateId,
      storyContent: storyText,
    });

    return storyDoc;
  },
};

export default StoryGenerationService;
