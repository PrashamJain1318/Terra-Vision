'use client';

import React from 'react';

export const CommunityFilter = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-1.5 rounded-xl bg-pink-600 text-white text-xs font-bold shadow-md">All Reports</button>
      <button className="px-3 py-1.5 rounded-xl bg-muted/30 text-muted-foreground text-xs font-bold border border-border/30 hover:bg-muted/50">
        Verified Only
      </button>
    </div>
  );
};

export default CommunityFilter;
