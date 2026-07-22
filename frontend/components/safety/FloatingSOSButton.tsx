'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const FloatingSOSButton = () => {
  const { triggerSOS } = useSafety();

  return (
    <button
      onClick={triggerSOS}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-red-600 hover:bg-red-500 text-white shadow-2xl shadow-red-600/50 flex items-center justify-center transition-all animate-bounce"
    >
      <AlertTriangle className="w-6 h-6" />
    </button>
  );
};

export default FloatingSOSButton;
