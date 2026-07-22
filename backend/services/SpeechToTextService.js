class SpeechToTextService {
  static async transcribeAudio(audioBuffer, language = 'en-US') {
    return {
      transcript: 'Plan a 5-day trip to Japan',
      confidence: 0.98,
      language,
    };
  }
}

export default SpeechToTextService;
