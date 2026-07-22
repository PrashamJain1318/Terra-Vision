'use client';

import React from 'react';
import SecurityProvider from '@/providers/SecurityProvider';

export const SecurityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SecurityProvider>
      <div className="space-y-6">
        {children}
      </div>
    </SecurityProvider>
  );
};

export default SecurityLayout;
