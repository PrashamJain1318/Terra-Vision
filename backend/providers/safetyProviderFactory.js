import GeminiSafetyProvider from './GeminiSafetyProvider.js';
import OpenAISafetyProvider from './OpenAISafetyProvider.js';
import ClaudeSafetyProvider from './ClaudeSafetyProvider.js';

export const safetyProviderFactory = {
  getProvider: (providerType = 'gemini') => {
    switch (providerType.toLowerCase()) {
      case 'openai':
        return new OpenAISafetyProvider();
      case 'claude':
        return new ClaudeSafetyProvider();
      case 'gemini':
      default:
        return new GeminiSafetyProvider();
    }
  },
};

export default safetyProviderFactory;
