'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const SOSButton = () => {
  const { triggerSOS } = useSafety();

  return (
    <button
      onClick={triggerSOS}
      className="w-full py-4 rounded-3xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all"
    >
      <AlertTriangle className="w-5 h-5 animate-pulse" /> 1-Tap Emergency SOS Dispatch
    </button>
  );
};

export default SOSButton;
