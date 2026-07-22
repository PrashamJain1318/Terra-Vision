'use client';

import React, { ReactNode } from 'react';
import VoiceProvider from '@/providers/VoiceProvider';
import VoiceHeader from './VoiceHeader';
import VoiceSidebar from './VoiceSidebar';
import VoiceContainer from './VoiceContainer';
import VoiceWorkspace from './VoiceWorkspace';

interface VoiceLayoutProps {
  children?: ReactNode;
}

export const VoiceLayout = ({ children }: VoiceLayoutProps) => {
  return (
    <VoiceProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <VoiceHeader />
        <div className="flex flex-1">
          <VoiceSidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <VoiceContainer>{children || <VoiceWorkspace />}</VoiceContainer>
          </main>
        </div>
      </div>
    </VoiceProvider>
  );
};

export default VoiceLayout;
