'use client';

import React from 'react';
import CommunityProvider from '@/providers/CommunityProvider';

export const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommunityProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {children}
      </div>
    </CommunityProvider>
  );
};

export default CommunityLayout;
