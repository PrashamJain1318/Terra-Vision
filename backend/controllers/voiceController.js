import VoiceInteractionService from '../services/VoiceInteractionService.js';
import SpeechToTextService from '../services/SpeechToTextService.js';
import TextToSpeechService from '../services/TextToSpeechService.js';
import IntentRoutingService from '../services/IntentRoutingService.js';
import VoiceTranslationService from '../services/VoiceTranslationService.js';

export const processInteraction = async (req, res) => {
  try {
    const { prompt, provider, language } = req.body;
    const data = await VoiceInteractionService.interact(prompt, provider, language);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const transcribeSpeech = async (req, res) => {
  try {
    const data = await SpeechToTextService.transcribeAudio(null, req.body.language);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const synthesizeText = async (req, res) => {
  try {
    const data = await TextToSpeechService.synthesizeText(req.body.text);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const classifyIntent = async (req, res) => {
  try {
    const data = IntentRoutingService.classifyIntent(req.body.utterance || '');
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const translateVoice = async (req, res) => {
  try {
    const { text, sourceLang, targetLang } = req.body;
    const data = await VoiceTranslationService.translateSpeech(text, sourceLang, targetLang);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default {
  processInteraction,
  transcribeSpeech,
  synthesizeText,
  classifyIntent,
  translateVoice,
};
