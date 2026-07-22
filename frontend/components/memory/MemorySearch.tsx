'use client';

import React from 'react';
import { Search } from 'lucide-react';

export const MemorySearch = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search photos, landmark scans, food logs, or travel stories..."
        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-card/45 backdrop-blur-xl border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-pink-500/60 shadow-lg"
      />
    </div>
  );
};

export default MemorySearch;
