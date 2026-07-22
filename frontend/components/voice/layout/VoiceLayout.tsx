'use client';

import React, { ReactNode } from 'react';
import VoiceProvider from '@/providers/VoiceProvider';
import VoiceWorkspace from './VoiceWorkspace';

interface VoiceLayoutProps {
  children?: ReactNode;
}

export const VoiceLayout = ({ children }: VoiceLayoutProps) => {
  return (
    <VoiceProvider>
      <div className="space-y-6">
        {children || <VoiceWorkspace />}
      </div>
    </VoiceProvider>
  );
};

export default VoiceLayout;
