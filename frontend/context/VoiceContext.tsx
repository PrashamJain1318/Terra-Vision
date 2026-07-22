'use client';

import { createContext } from 'react';

export interface VoiceMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  intent?: string;
  targetModule?: string;
  audioUrl?: string;
  timestamp: string;
}

export interface VoiceState {
  isListening: boolean;
  isSpeaking: boolean;
  activeLanguage: string;
  audioMode: 'handsfree' | 'push_to_talk' | 'text_fallback';
  messages: VoiceMessage[];
  transcript: string;
  selectedProvider: string;
  volume: number;
  loading: boolean;
  error: string | null;
}

export interface VoiceContextType {
  state: VoiceState;
  startListening: () => void;
  stopListening: () => void;
  sendMessage: (text: string) => Promise<void>;
  setSelectedProvider: (providerId: string) => void;
  setLanguage: (lang: string) => void;
  setAudioMode: (mode: 'handsfree' | 'push_to_talk' | 'text_fallback') => void;
  clearHistory: () => void;
}

export const VoiceContext = createContext<VoiceContextType | undefined>(undefined);
export default VoiceContext;
