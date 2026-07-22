'use client';

import React from 'react';
import { Layers, Bookmark, Share2 } from 'lucide-react';

export const FloatingActionMenu = () => {
  return (
    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-card/60 backdrop-blur-md border border-border/30 shadow-lg">
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <Layers className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <Bookmark className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-muted/40 rounded-xl text-muted-foreground hover:text-foreground transition-all">
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FloatingActionMenu;
