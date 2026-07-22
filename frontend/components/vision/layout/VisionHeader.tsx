'use client';

import React from 'react';
import { useVision } from '@/hooks/useVision';
import { visionProvidersConfig } from '@/config/visionProviders';
import { Eye, Camera, Upload, Sparkles } from 'lucide-react';

export const VisionHeader = () => {
  const { state, setProvider, setCameraMode } = useVision();

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-border/20 bg-background/40 backdrop-blur-md sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
          <Eye className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <span>AI Landmark Scanner</span>
            <span>•</span>
            <span className="text-primary font-bold">{state.provider.toUpperCase()} ENGINE</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
            Visual Landmark Intelligence
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        {/* Provider Switcher */}
        <select
          value={state.provider}
          onChange={(e) => setProvider(e.target.value as any)}
          className="px-3 py-1.5 rounded-2xl text-xs font-bold bg-muted/30 border border-border/40 text-foreground focus:outline-none"
        >
          {visionProvidersConfig.map((p) => (
            <option key={p.id} value={p.type}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => setCameraMode(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:opacity-90 transition-opacity"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Open Camera</span>
        </button>
      </div>
    </header>
  );
};

export default VisionHeader;
