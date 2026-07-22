'use client';

import React from 'react';
import { Mic } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';

export const FloatingMicButton = () => {
  const { startListening } = useVoice();

  return (
    <button
      onClick={startListening}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-2xl shadow-cyan-600/50 flex items-center justify-center transition-all animate-bounce"
    >
      <Mic className="w-6 h-6" />
    </button>
  );
};

export default FloatingMicButton;
