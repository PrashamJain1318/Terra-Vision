'use client';

import React from 'react';
import PersonalizationProvider from '@/providers/PersonalizationProvider';

export const PersonalizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PersonalizationProvider>
      <div className="space-y-6">
        {children}
      </div>
    </PersonalizationProvider>
  );
};

export default PersonalizationLayout;
