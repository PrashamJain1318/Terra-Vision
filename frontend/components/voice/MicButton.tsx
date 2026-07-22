'use client';

import React from 'react';
import { Mic } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';

export const MicButton = () => {
  const { state, startListening, stopListening } = useVoice();

  return (
    <button
      onClick={state.isListening ? stopListening : startListening}
      className={`p-5 rounded-full text-white shadow-2xl transition-all ${
        state.isListening
          ? 'bg-cyan-600 shadow-cyan-600/50 animate-pulse'
          : 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/30'
      }`}
    >
      <Mic className="w-8 h-8" />
    </button>
  );
};

export default MicButton;
