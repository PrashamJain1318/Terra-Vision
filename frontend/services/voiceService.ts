import api from '@/utils/api';

export interface VoiceChatPayload {
  prompt: string;
  provider?: string;
  language?: string;
}

export interface VoiceTranslatePayload {
  text: string;
  sourceLang?: string;
  targetLang?: string;
}

export const voiceService = {
  checkHealth: async () => {
    const res = await api.get('/v1/voice/health');
    return res.data;
  },
  sendChat: async (payload: VoiceChatPayload) => {
    const res = await api.post('/v1/voice/chat', payload);
    return res.data;
  },
  transcribe: async (audioBase64?: string, language?: string) => {
    const res = await api.post('/v1/voice/transcribe', { audioBase64, language });
    return res.data;
  },
  speak: async (text: string, voice?: string, speed?: number) => {
    const res = await api.post('/v1/voice/speak', { text, voice, speed });
    return res.data;
  },
  translate: async (payload: VoiceTranslatePayload) => {
    const res = await api.post('/v1/voice/translate', payload);
    return res.data;
  },
  detectLanguage: async (text: string) => {
    const res = await api.post('/v1/voice/detect-language', { text });
    return res.data;
  },
  stop: async () => {
    const res = await api.post('/v1/voice/stop');
    return res.data;
  },
  reset: async () => {
    const res = await api.post('/v1/voice/reset');
    return res.data;
  },
  getHistory: async () => {
    const res = await api.get('/v1/voice/history');
    return res.data;
  },
  clearHistory: async () => {
    const res = await api.delete('/v1/voice/history');
    return res.data;
  },
};

export default voiceService;
