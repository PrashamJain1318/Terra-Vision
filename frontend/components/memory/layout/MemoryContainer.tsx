'use client';

import React from 'react';

export const MemoryContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 min-w-0 p-6 rounded-3xl bg-card/35 backdrop-blur-xl border border-border/40 shadow-xl space-y-6">
      {children}
    </div>
  );
};

export default MemoryContainer;
