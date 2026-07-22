'use client';

import React from 'react';
import VisionProvider from '@/providers/VisionProvider';
import VisionWorkspace from './VisionWorkspace';

interface VisionLayoutProps {
  children?: React.ReactNode;
}

export const VisionLayout = ({ children }: VisionLayoutProps) => {
  return (
    <VisionProvider>
      <div className="space-y-6">
        {children || <VisionWorkspace />}
      </div>
    </VisionProvider>
  );
};

export default VisionLayout;
