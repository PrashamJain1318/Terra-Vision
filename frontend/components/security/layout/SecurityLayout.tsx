'use client';

import React from 'react';
import SecurityProvider from '@/providers/SecurityProvider';

export const SecurityLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SecurityProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {children}
      </div>
    </SecurityProvider>
  );
};

export default SecurityLayout;
