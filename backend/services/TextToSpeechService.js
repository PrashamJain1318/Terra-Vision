class TextToSpeechService {
  static async synthesizeText(text, voice = 'en-US-Neural') {
    return {
      audioUrl: '/audio/synthesized_response.mp3',
      durationMs: 2500,
      mimeType: 'audio/mp3',
    };
  }
}

export default TextToSpeechService;
