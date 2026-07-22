'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Send, Bot, Sparkles, Volume2, VolumeX, Trash2, RotateCcw, AlertTriangle, Radio } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';
import AppCard from '@/components/ui/AppCard';
import AppButton from '@/components/ui/AppButton';
import AppBadge from '@/components/ui/AppBadge';
import AppHeader from '@/components/ui/AppHeader';

const VOICE_INTENTS = [
  { sampleUtterance: 'Plan a 3-day weekend trip to Munnar', targetModule: 'Planner' },
  { sampleUtterance: 'Where can I find vegetarian street food nearby?', targetModule: 'Food' },
  { sampleUtterance: 'Is it safe to walk at night near Sunset Point?', targetModule: 'Safety' },
  { sampleUtterance: 'Scan landmark in front of me', targetModule: 'Vision' },
];

const VOICE_PROVIDERS = [
  { id: 'gemini-voice', name: 'Google Gemini 1.5 Voice (Recommended)' },
  { id: 'web-speech', name: 'Browser Native Web Speech API' },
];

export const VoiceWorkspace = () => {
  const { state, sendMessage, setSelectedProvider, startListening, stopListening, clearHistory } = useVoice();
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  const handleReplayAudio = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <AppHeader
        title="Voice AI Travel Companion"
        subtitle="Multi-modal speech reasoning engine coordinating Planner, Maps, Vision, Food, Safety, and Memory."
        badgeText="Gemini 1.5 Voice Engine"
        icon={Radio}
      >
        <div className="flex items-center gap-2">
          <AppButton variant="secondary" size="sm" icon={Trash2} onClick={clearHistory}>
            Clear History
          </AppButton>
          {state.isSpeaking && (
            <AppButton variant="danger" size="sm" icon={VolumeX} onClick={handleStopAudio}>
              Stop Audio
            </AppButton>
          )}
        </div>
      </AppHeader>

      {/* Error Alert Toast */}
      {state.error && (
        <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-black flex items-center justify-between shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>{state.error}</span>
          </div>
          <button onClick={startListening} className="underline text-xs font-bold hover:text-white">
            Retry Mic
          </button>
        </div>
      )}

      {/* Hero Control Bar & State Indicators */}
      <AppCard hoverEffect={false} className="border-emerald-500/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {state.isListening ? (
                <AppBadge variant="red" icon={Radio}>
                  Recording & Listening...
                </AppBadge>
              ) : state.loading ? (
                <AppBadge variant="amber" icon={Sparkles}>
                  Gemini Thinking...
                </AppBadge>
              ) : state.isSpeaking ? (
                <AppBadge variant="emerald" icon={Volume2}>
                  Speaking Response...
                </AppBadge>
              ) : (
                <AppBadge variant="emerald" icon={Bot}>
                  Voice Engine Ready
                </AppBadge>
              )}
            </div>

            <h2 className="text-xl font-black text-white">
              {state.transcript ? `"${state.transcript}"` : 'Press Microphone or Type to Speak'}
            </h2>
            <p className="text-xs text-zinc-400 font-semibold">
              Speak naturally in any language. Gemini will analyze intent, query travel intelligence, and respond out loud.
            </p>
          </div>

          {/* Large Animated Microphone Action Button */}
          <div className="flex items-center gap-4 shrink-0">
            {state.isListening ? (
              <button
                onClick={stopListening}
                className="w-20 h-20 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-2xl shadow-rose-600/50 animate-pulse flex items-center justify-center transition-all cursor-pointer ring-8 ring-rose-600/30"
                title="Stop Recording"
              >
                <MicOff className="w-8 h-8" />
              </button>
            ) : (
              <button
                onClick={startListening}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 flex items-center justify-center transition-all cursor-pointer ring-8 ring-emerald-500/20"
                title="Start Voice Recording"
              >
                <Mic className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>

        {/* Audio Waveform Visualization Bar */}
        {(state.isListening || state.isSpeaking) && (
          <div className="flex items-center justify-center gap-1.5 pt-6">
            {[40, 70, 30, 90, 50, 80, 100, 60, 95, 45, 75, 35, 85, 55, 90, 65].map((height, idx) => (
              <div
                key={idx}
                className={`w-1.5 rounded-full animate-pulse ${state.isListening ? 'bg-rose-500' : 'bg-emerald-400'}`}
                style={{
                  height: `${Math.max(12, Math.round(height * Math.random()))}px`,
                  animationDuration: `${0.3 + idx * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}
      </AppCard>

      {/* Main Conversation & Config Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Conversation Log Stream (2 Columns) */}
        <div className="md:col-span-2 space-y-4">
          <AppCard hoverEffect={false} className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <Bot className="w-4 h-4 text-emerald-400" /> Conversational Audio Stream
              </h3>
              <AppBadge variant="emerald">{state.selectedProvider}</AppBadge>
            </div>

            <div className="space-y-3 min-h-[260px] max-h-[420px] overflow-y-auto p-1 scrollbar-thin">
              {state.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed space-y-2 ${
                      msg.sender === 'assistant'
                        ? 'bg-zinc-900 border border-zinc-800 text-zinc-100'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold shadow-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                    <div className="flex items-center justify-between gap-2 pt-1 text-[10px] text-zinc-400 font-mono">
                      <span>{msg.timestamp}</span>
                      {msg.sender === 'assistant' && (
                        <button
                          onClick={() => handleReplayAudio(msg.text)}
                          className="hover:text-emerald-400 flex items-center gap-1 font-bold transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" /> Replay Audio
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {state.loading && (
                <div className="flex items-center gap-2.5 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 w-44">
                  <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
                  <span>Gemini Reasoning...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="relative flex items-center pt-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask naturally: 'Find vegetarian ramen' or 'Plan 3 days in Tokyo'..."
                className="w-full pl-4 pr-14 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || state.loading}
                className="absolute right-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white disabled:opacity-50 hover:scale-105 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </AppCard>
        </div>

        {/* Right Voice Controls & Intent Shortcuts (1 Column) */}
        <div className="space-y-6">
          <AppCard hoverEffect={false} className="space-y-4">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Voice Commands & Shortcuts
            </h3>
            <div className="space-y-2">
              {VOICE_INTENTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(item.sampleUtterance)}
                  className="w-full p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-left text-xs font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span className="group-hover:text-emerald-300 truncate">"{item.sampleUtterance}"</span>
                  <AppBadge variant="teal" className="shrink-0">{item.targetModule}</AppBadge>
                </button>
              ))}
            </div>
          </AppCard>

          <AppCard hoverEffect={false} className="space-y-4">
            <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-emerald-400" /> Voice AI Engine Provider
            </h3>
            <div className="space-y-2">
              {VOICE_PROVIDERS.map((prov) => (
                <button
                  key={prov.id}
                  onClick={() => setSelectedProvider(prov.id)}
                  className={`w-full p-3 rounded-2xl border text-left text-xs font-bold transition-all cursor-pointer ${
                    state.selectedProvider === prov.id
                      ? 'bg-emerald-500/15 border-emerald-500 text-emerald-400'
                      : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                  }`}
                >
                  {prov.name}
                </button>
              ))}
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  );
};

export default VoiceWorkspace;
