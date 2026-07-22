'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

export const EmptyMemory = () => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center mx-auto">
        <BookOpen className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-extrabold text-foreground">No Travel Memories Saved</h4>
      <p className="text-xs text-muted-foreground max-w-sm mx-auto">
        Import your photos, AI Vision scans, and Local Food spots to generate a digital scrapbook.
      </p>
    </div>
  );
};

export default EmptyMemory;
