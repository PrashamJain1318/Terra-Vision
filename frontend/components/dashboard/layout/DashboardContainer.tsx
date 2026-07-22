'use client';

import React from 'react';

interface DashboardContainerProps {
  children: React.ReactNode;
}

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 md:px-8 py-6 relative z-10 scroll-smooth overscroll-y-contain scrollbar-thin scrollbar-thumb-zinc-700/50 scrollbar-track-transparent">
      <div className="max-w-7xl mx-auto space-y-8 pb-32">
        {children}
      </div>
    </main>
  );
};

export default DashboardContainer;
