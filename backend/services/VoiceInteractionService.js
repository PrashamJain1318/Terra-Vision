import VoiceProviderFactory from '../providers/voiceProviderFactory.js';

class VoiceInteractionService {
  static async interact(prompt, providerId = 'gemini-voice', language = 'en-US') {
    const provider = VoiceProviderFactory.getProvider(providerId);
    return await provider.processVoiceInteraction(prompt, language);
  }
}

export default VoiceInteractionService;
