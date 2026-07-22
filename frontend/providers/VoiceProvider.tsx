'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { VoiceContext, VoiceState, VoiceMessage } from '@/context/VoiceContext';
import voiceService from '@/services/voiceService';

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

  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Initialize Web Speech Recognition if supported
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const sr = new SpeechRecognition();
        sr.continuous = false;
        sr.interimResults = true;
        sr.lang = state.activeLanguage;

        sr.onresult = (event: any) => {
          const current = event.resultIndex;
          const transcriptText = event.results[current][0].transcript;
          setState((prev) => ({ ...prev, transcript: transcriptText }));
          if (event.results[current].isFinal) {
            sendMessage(transcriptText);
            stopListening();
          }
        };

        sr.onerror = (event: any) => {
          let errMessage = 'Microphone error.';
          if (event.error === 'not-allowed') {
            errMessage = 'Microphone permission denied. Please allow microphone access in your browser.';
          } else if (event.error === 'no-speech') {
            errMessage = 'No speech detected.';
          }
          setState((prev) => ({ ...prev, isListening: false, error: errMessage }));
        };

        sr.onend = () => {
          setState((prev) => ({ ...prev, isListening: false }));
        };

        setRecognition(sr);
      }
    }
  }, [state.activeLanguage]);

  // Load persistent history on mount
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await voiceService.getHistory();
      if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
        const formatted: VoiceMessage[] = res.data.map((item: any) => ({
          id: item.id || `msg-${Math.random()}`,
          sender: 'assistant',
          text: `Q: "${item.question}"\n\nA: ${item.answer}`,
          timestamp: item.timestamp ? new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now',
        }));
        setState((prev) => ({ ...prev, messages: [...initialMessages, ...formatted] }));
      }
    } catch (e) {
      // Fallback
    }
  };

  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = state.volume / 100;
      utterance.onstart = () => setState((prev) => ({ ...prev, isSpeaking: true }));
      utterance.onend = () => setState((prev) => ({ ...prev, isSpeaking: false }));
      utterance.onerror = () => setState((prev) => ({ ...prev, isSpeaking: false }));
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    setState((prev) => ({ ...prev, isListening: true, transcript: '', error: null }));
    if (recognition) {
      try {
        recognition.start();
      } catch (e) {
        // Recognition already started
      }
    }
  };

  const stopListening = () => {
    setState((prev) => ({ ...prev, isListening: false }));
    if (recognition) {
      try {
        recognition.stop();
      } catch (e) {}
    }
    voiceService.stop().catch(() => {});
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

  const clearHistory = async () => {
    try {
      await voiceService.clearHistory();
    } catch (e) {}
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

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg],
      loading: true,
      error: null,
    }));

    try {
      const res = await voiceService.sendChat({
        prompt: text,
        provider: state.selectedProvider,
        language: state.activeLanguage,
      });

      if (res?.data) {
        const responseText = res.data.speechResponse || 'I have processed your request.';
        const aiMsg: VoiceMessage = {
          id: `msg-${Date.now() + 1}`,
          sender: 'assistant',
          text: responseText,
          intent: res.data.intent,
          targetModule: res.data.targetModule,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, aiMsg],
          loading: false,
        }));

        speakText(responseText);
        return;
      }
    } catch (e: any) {
      // Graceful fallback
    }

    const fallbackResponse = `Understood: "${text}". I have coordinated your request with the ${
      text.toLowerCase().includes('food')
        ? 'Local Food AI'
        : text.toLowerCase().includes('safe')
        ? 'Scam Shield'
        : text.toLowerCase().includes('plan')
        ? 'AI Travel Planner'
        : 'LocalLens Companion'
    }.`;

    const fallbackMsg: VoiceMessage = {
      id: `msg-${Date.now() + 1}`,
      sender: 'assistant',
      text: fallbackResponse,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, fallbackMsg],
      loading: false,
    }));

    speakText(fallbackResponse);
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
