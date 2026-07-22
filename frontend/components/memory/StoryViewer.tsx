'use client';

import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { useMemory } from '@/hooks/useMemory';

export const StoryViewer = () => {
  const { state } = useMemory();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-pink-400" /> AI Travel Journal Story
        </h3>
        <span className="text-[10px] text-pink-400 font-bold uppercase">{state.selectedProvider} AI</span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed italic">
        "{state.travelStory || 'Select a story template in your Memory Workspace to generate an AI travel journal.'}"
      </p>
    </div>
  );
};

export default StoryViewer;
