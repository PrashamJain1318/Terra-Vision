import GeminiMemoryProvider from './GeminiMemoryProvider.js';
import OpenAIMemoryProvider from './OpenAIMemoryProvider.js';
import ClaudeMemoryProvider from './ClaudeMemoryProvider.js';

export const memoryProviderFactory = {
  getProvider: (providerType = 'gemini') => {
    switch (providerType.toLowerCase()) {
      case 'openai':
        return OpenAIMemoryProvider;
      case 'claude':
      case 'anthropic':
        return ClaudeMemoryProvider;
      case 'gemini':
      default:
        return GeminiMemoryProvider;
    }
  },
};

export default memoryProviderFactory;
