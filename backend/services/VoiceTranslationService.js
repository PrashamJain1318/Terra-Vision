class VoiceTranslationService {
  static async translateSpeech(text, sourceLang = 'en', targetLang = 'ja') {
    return {
      originalText: text,
      translatedText: 'こんにちは、日本への旅行を計画してください。',
      sourceLang,
      targetLang,
    };
  }
}

export default VoiceTranslationService;
