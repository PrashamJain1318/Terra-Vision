'use client';

import React from 'react';
import { BookOpen, Sparkles, Share2, Download } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';
import MEMORY_AI_PROVIDERS from '@/config/memoryProviders';

export const MemoryHeader = () => {
  const { state, setSelectedProvider, exportPdfCapsule } = useMemory();

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/30">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-foreground tracking-tight">Travel Memory Capsule</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-400 text-[10px] font-extrabold border border-pink-500/30">
              v13.0
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Preserve, organize, and relive trips with AI travel stories & digital scrapbook layout
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <select
          value={state.selectedProvider}
          onChange={(e) => setSelectedProvider(e.target.value)}
          className="px-3 py-1.5 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
        >
          {MEMORY_AI_PROVIDERS.map((p) => (
            <option key={p.id} value={p.id} className="bg-card text-foreground">
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={exportPdfCapsule}
          disabled={state.exportingPdf}
          className="px-4 py-2 rounded-2xl bg-pink-600 text-white font-extrabold text-xs shadow-lg shadow-pink-600/20 hover:bg-pink-500 transition-all flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          {state.exportingPdf ? 'Exporting PDF...' : 'Export PDF'}
        </button>
      </div>
    </header>
  );
};

export default MemoryHeader;
