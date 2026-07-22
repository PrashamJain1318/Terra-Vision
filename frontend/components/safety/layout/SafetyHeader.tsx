'use client';

import React from 'react';
import { Shield, AlertTriangle, PhoneCall } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const SafetyHeader = () => {
  const { state, triggerSOS, cancelSOS } = useSafety();

  return (
    <header className="w-full h-16 px-6 bg-card/65 backdrop-blur-xl border-b border-border/40 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-2xl bg-red-500/10 text-red-500 border border-red-500/30">
          <Shield className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-extrabold text-foreground tracking-tight flex items-center gap-2">
            LocalLens AI <span className="text-red-500">Travel Safety & Scam Shield</span>
          </h1>
          <p className="text-[11px] text-muted-foreground font-semibold">
            Real-time Threat Monitoring • Scam Detection • Emergency Assistance
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {state.sosActive ? (
          <button
            onClick={cancelSOS}
            className="px-4 py-2 rounded-2xl bg-slate-800 text-white border border-slate-700 text-xs font-extrabold shadow-lg animate-pulse flex items-center gap-1.5"
          >
            Cancel SOS Dispatch
          </button>
        ) : (
          <button
            onClick={triggerSOS}
            className="px-4 py-2 rounded-2xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold shadow-lg shadow-red-600/30 flex items-center gap-1.5 transition-all"
          >
            <AlertTriangle className="w-4 h-4" /> Emergency SOS Dispatch
          </button>
        )}
      </div>
    </header>
  );
};

export default SafetyHeader;
