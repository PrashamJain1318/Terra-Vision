'use client';

import React, { ReactNode } from 'react';
import SafetyProvider from '@/providers/SafetyProvider';
import SafetyHeader from './SafetyHeader';
import SafetySidebar from './SafetySidebar';
import SafetyContainer from './SafetyContainer';
import SafetyWorkspace from './SafetyWorkspace';

interface SafetyLayoutProps {
  children?: ReactNode;
}

export const SafetyLayout = ({ children }: SafetyLayoutProps) => {
  return (
    <SafetyProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <SafetyHeader />
        <div className="flex flex-1">
          <SafetySidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <SafetyContainer>{children || <SafetyWorkspace />}</SafetyContainer>
          </main>
        </div>
      </div>
    </SafetyProvider>
  );
};

export default SafetyLayout;
