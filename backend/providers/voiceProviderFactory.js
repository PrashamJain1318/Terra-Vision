import GeminiVoiceProvider from './GeminiVoiceProvider.js';
import OpenAIVoiceProvider from './OpenAIVoiceProvider.js';
import ClaudeVoiceProvider from './ClaudeVoiceProvider.js';

class VoiceProviderFactory {
  static getProvider(providerId = 'gemini-voice') {
    switch (providerId) {
      case 'openai-realtime':
        return new OpenAIVoiceProvider();
      case 'elevenlabs-claude':
        return new ClaudeVoiceProvider();
      case 'gemini-voice':
      default:
        return new GeminiVoiceProvider();
    }
  }
}

export default VoiceProviderFactory;
