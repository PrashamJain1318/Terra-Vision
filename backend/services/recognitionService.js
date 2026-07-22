import visionProviderFactory from '../providers/visionProviderFactory.js';

export const recognitionService = {
  recognize: async (imageUrl, providerType = 'gemini') => {
    const provider = visionProviderFactory.getProvider(providerType);
    return await provider.analyzeImage(imageUrl);
  },
};

export default recognitionService;
