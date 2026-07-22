'use client';

import React, { useState } from 'react';
import { Mic, Send, Bot, Sparkles, Volume2 } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';
import VOICE_PROVIDERS from '@/config/voiceProviders';
import VOICE_INTENTS from '@/config/voiceIntents';

export const VoiceWorkspace = () => {
  const { state, sendMessage, setSelectedProvider, startListening, stopListening } = useVoice();
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      sendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-cyan-500/20 shadow-xl">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400">Natural Language Travel Companion</span>
          <h2 className="text-2xl font-extrabold text-foreground">Speak to LocalLens AI</h2>
          <p className="text-xs text-muted-foreground">
            Multi-modal speech reasoning engine coordinating Planner, Maps, Vision, Food, Safety, and Memory.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {state.isListening ? (
            <button
              onClick={stopListening}
              className="p-4 rounded-full bg-cyan-600 text-white shadow-xl shadow-cyan-600/40 animate-pulse flex items-center justify-center"
            >
              <Mic className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={startListening}
              className="p-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-600/40 flex items-center justify-center transition-all"
            >
              <Mic className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
              <Bot className="w-4 h-4 text-cyan-400" /> Conversational Audio Stream
            </h3>
            <span className="text-[10px] text-cyan-400 font-bold uppercase">{state.selectedProvider}</span>
          </div>

          <div className="space-y-3 min-h-[220px] max-h-[360px] overflow-y-auto p-2">
            {state.messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'assistant' ? 'bg-muted/30 border border-border/30 text-foreground' : 'bg-cyan-600 text-white font-semibold'
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.targetModule && (
                    <span className="mt-1 inline-block text-[9px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                      Module: {msg.targetModule}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask naturally: 'Find vegetarian ramen' or 'Plan 3 days in Amritsar'..."
              className="w-full pl-4 pr-12 py-3 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
            />
            <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-cyan-600 text-white">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
            <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Voice Commands & Intents
            </h3>
            <div className="space-y-2">
              {VOICE_INTENTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(item.sampleUtterance)}
                  className="w-full p-2.5 rounded-2xl bg-muted/20 border border-border/20 text-left text-xs font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-all flex items-center justify-between"
                >
                  <span>"{item.sampleUtterance}"</span>
                  <span className="text-[9px] uppercase font-bold text-cyan-400">{item.targetModule}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
            <h3 className="text-sm font-extrabold text-foreground flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-cyan-400" /> Voice AI Engine Provider
            </h3>
            <div className="space-y-2">
              {VOICE_PROVIDERS.map((prov) => (
                <button
                  key={prov.id}
                  onClick={() => setSelectedProvider(prov.id)}
                  className={`w-full p-3 rounded-2xl border text-left text-xs transition-all ${
                    state.selectedProvider === prov.id
                      ? 'bg-cyan-500/15 border-cyan-500 text-cyan-400 font-extrabold'
                      : 'bg-muted/20 border-border/20 text-muted-foreground hover:bg-muted/30'
                  }`}
                >
                  {prov.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceWorkspace;
