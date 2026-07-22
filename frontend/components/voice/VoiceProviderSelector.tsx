'use client';

import React from 'react';
import { useVoice } from '@/hooks/useVoice';
import VOICE_PROVIDERS from '@/config/voiceProviders';

export const VoiceProviderSelector = () => {
  const { state, setSelectedProvider } = useVoice();

  return (
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
  );
};

export default VoiceProviderSelector;
