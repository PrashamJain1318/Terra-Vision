'use client';

import React from 'react';

interface DashboardContainerProps {
  children: React.ReactNode;
}

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return (
    <main className="flex-1 overflow-y-auto px-6 py-8 relative z-10 scrollbar-thin scrollbar-thumb-muted">
      <div className="max-w-7xl mx-auto space-y-8 pb-12">
        {children}
      </div>
    </main>
  );
};

export default DashboardContainer;
