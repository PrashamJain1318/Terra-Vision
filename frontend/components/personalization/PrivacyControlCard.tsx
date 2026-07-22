'use client';

import React from 'react';
import { Lock, RefreshCw, EyeOff } from 'lucide-react';
import { usePersonalization } from '@/hooks/usePersonalization';

export const PrivacyControlCard = () => {
  const { personalizationEnabled, setPersonalizationEnabled, resetAiProfile } = usePersonalization();

  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Lock className="w-5 h-5 text-indigo-400" />
        <h3 className="font-extrabold text-base text-foreground font-sans">AI Personalization & Privacy Controls</h3>
      </div>

      <div className="space-y-3 font-sans text-xs">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-border/30">
          <div>
            <h4 className="font-extrabold text-foreground">Continuous AI Behavioral Learning</h4>
            <p className="text-muted-foreground text-[10px]">Allow system to adapt your Travel DNA from interactions.</p>
          </div>
          <button
            onClick={() => setPersonalizationEnabled(!personalizationEnabled)}
            className={`px-4 py-2 rounded-full font-bold uppercase text-[10px] tracking-wider transition-all ${
              personalizationEnabled ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'
            }`}
          >
            {personalizationEnabled ? 'ENABLED' : 'PAUSED'}
          </button>
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-border/30">
          <div>
            <h4 className="font-extrabold text-foreground">Reset Stored AI Profile</h4>
            <p className="text-muted-foreground text-[10px]">Clear learned travel vector weights and restore defaults.</p>
          </div>
          <button
            onClick={resetAiProfile}
            className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold uppercase text-[10px] tracking-wider transition-all flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyControlCard;
