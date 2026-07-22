import GeminiFoodProvider from './GeminiFoodProvider.js';
import OpenAIFoodProvider from './OpenAIFoodProvider.js';
import ClaudeFoodProvider from './ClaudeFoodProvider.js';

export const foodProviderFactory = {
  getProvider: (providerType = 'gemini') => {
    switch (providerType.toLowerCase()) {
      case 'openai':
        return OpenAIFoodProvider;
      case 'claude':
      case 'anthropic':
        return ClaudeFoodProvider;
      case 'gemini':
      default:
        return GeminiFoodProvider;
    }
  },
};

export default foodProviderFactory;
