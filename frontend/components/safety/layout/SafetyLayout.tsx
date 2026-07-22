'use client';

import React, { ReactNode } from 'react';
import SafetyProvider from '@/providers/SafetyProvider';
import SafetyWorkspace from './SafetyWorkspace';

interface SafetyLayoutProps {
  children?: ReactNode;
}

export const SafetyLayout = ({ children }: SafetyLayoutProps) => {
  return (
    <SafetyProvider>
      <div className="space-y-6">
        {children || <SafetyWorkspace />}
      </div>
    </SafetyProvider>
  );
};

export default SafetyLayout;
