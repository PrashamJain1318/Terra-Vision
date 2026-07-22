'use client';

import React from 'react';
import CommunityProvider from '@/providers/CommunityProvider';

export const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CommunityProvider>
      <div className="space-y-6">
        {children}
      </div>
    </CommunityProvider>
  );
};

export default CommunityLayout;
