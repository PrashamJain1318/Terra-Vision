import GeminiProvider from './GeminiProvider.js';
import OpenAIProvider from './OpenAIProvider.js';
import ClaudeProvider from './ClaudeProvider.js';

export const hiddenGemsProviderFactory = {
  getProvider: (providerType = 'gemini') => {
    switch (providerType.toLowerCase()) {
      case 'openai':
        return OpenAIProvider;
      case 'claude':
      case 'anthropic':
        return ClaudeProvider;
      case 'gemini':
      default:
        return GeminiProvider;
    }
  },
};

export default hiddenGemsProviderFactory;
