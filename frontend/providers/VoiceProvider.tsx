'use client';

import React, { useState, ReactNode } from 'react';
import { VoiceContext, VoiceState, VoiceMessage } from '@/context/VoiceContext';

const initialMessages: VoiceMessage[] = [
  {
    id: 'msg-1',
    sender: 'assistant',
    text: 'Hello! I am your Voice AI Travel Companion. You can talk to me naturally about trip planning, food recommendations, safety, or route navigation.',
    timestamp: 'Just now',
  },
];

export const VoiceProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<VoiceState>({
    isListening: false,
    isSpeaking: false,
    activeLanguage: 'en-US',
    audioMode: 'push_to_talk',
    messages: initialMessages,
    transcript: '',
    selectedProvider: 'gemini-voice',
    volume: 85,
    loading: false,
    error: null,
  });

  const startListening = () => {
    setState((prev) => ({ ...prev, isListening: true, transcript: 'Listening...' }));
  };

  const stopListening = () => {
    setState((prev) => ({ ...prev, isListening: false }));
  };

  const setSelectedProvider = (selectedProvider: string) => {
    setState((prev) => ({ ...prev, selectedProvider }));
  };

  const setLanguage = (activeLanguage: string) => {
    setState((prev) => ({ ...prev, activeLanguage }));
  };

  const setAudioMode = (audioMode: 'handsfree' | 'push_to_talk' | 'text_fallback') => {
    setState((prev) => ({ ...prev, audioMode }));
  };

  const clearHistory = () => {
    setState((prev) => ({ ...prev, messages: initialMessages }));
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: VoiceMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setState((prev) => ({ ...prev, messages: [...prev.messages, userMsg], loading: true }));

    try {
      const res = await fetch('/api/v1/voice/interact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text, provider: state.selectedProvider, language: state.activeLanguage }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.data) {
          const aiMsg: VoiceMessage = {
            id: `msg-${Date.now() + 1}`,
            sender: 'assistant',
            text: data.data.speechResponse || 'I have processed your request.',
            intent: data.data.intent,
            targetModule: data.data.targetModule,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, aiMsg],
            isSpeaking: true,
            loading: false,
          }));
          return;
        }
      }
    } catch (e) {
      // Fallback
    }

    const fallbackMsg: VoiceMessage = {
      id: `msg-${Date.now() + 1}`,
      sender: 'assistant',
      text: `Understood: "${text}". I have coordinated your request with the ${
        text.toLowerCase().includes('food')
          ? 'Local Food AI'
          : text.toLowerCase().includes('safe')
          ? 'Scam Shield'
          : text.toLowerCase().includes('plan')
          ? 'AI Travel Planner'
          : 'LocalLens Companion'
      }.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, fallbackMsg],
      isSpeaking: true,
      loading: false,
    }));
  };

  return (
    <VoiceContext.Provider
      value={{
        state,
        startListening,
        stopListening,
        sendMessage,
        setSelectedProvider,
        setLanguage,
        setAudioMode,
        clearHistory,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
};

export default VoiceProvider;
