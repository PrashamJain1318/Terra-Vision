'use client';

import { useContext } from 'react';
import { VoiceContext, VoiceContextType } from '@/context/VoiceContext';

const defaultFallbackContext: VoiceContextType = {
  state: {
    isListening: false,
    isSpeaking: false,
    activeLanguage: 'en-US',
    audioMode: 'push_to_talk',
    messages: [
      {
        id: 'msg-1',
        sender: 'assistant',
        text: 'Hello! I am your Voice AI Travel Companion. You can talk to me naturally about trip planning, food recommendations, safety, or route navigation.',
        timestamp: 'Just now',
      },
    ],
    transcript: '',
    selectedProvider: 'gemini-voice',
    volume: 85,
    loading: false,
    error: null,
  },
  startListening: () => {},
  stopListening: () => {},
  sendMessage: async () => {},
  setSelectedProvider: () => {},
  setLanguage: () => {},
  setAudioMode: () => {},
  clearHistory: () => {},
};

export const useVoice = (): VoiceContextType => {
  const context = useContext(VoiceContext);
  return context || defaultFallbackContext;
};

export default useVoice;
