'use client';

import React from 'react';
import PersonalizationProvider from '@/providers/PersonalizationProvider';

export const PersonalizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PersonalizationProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {children}
      </div>
    </PersonalizationProvider>
  );
};

export default PersonalizationLayout;
