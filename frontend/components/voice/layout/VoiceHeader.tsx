'use client';

import React from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';

export const VoiceHeader = () => {
  const { state, startListening, stopListening } = useVoice();

  return (
    <header className="w-full h-16 px-6 bg-card/65 backdrop-blur-xl border-b border-border/40 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <Mic className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-2">
            LocalLens AI <span className="text-cyan-400">Voice AI Travel Assistant</span>
          </h1>
          <p className="text-[11px] text-muted-foreground font-semibold">
            Conversational Context Engine • Multi-Modal Speech Reasoning
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {state.isListening ? (
          <button
            onClick={stopListening}
            className="px-4 py-2 rounded-2xl bg-cyan-600 text-white text-xs font-extrabold shadow-lg shadow-cyan-600/30 animate-pulse flex items-center gap-1.5"
          >
            <Mic className="w-4 h-4" /> Stop Listening
          </button>
        ) : (
          <button
            onClick={startListening}
            className="px-4 py-2 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-extrabold shadow-lg shadow-cyan-600/30 flex items-center gap-1.5 transition-all"
          >
            <Mic className="w-4 h-4" /> Start Voice Chat
          </button>
        )}
      </div>
    </header>
  );
};

export default VoiceHeader;
