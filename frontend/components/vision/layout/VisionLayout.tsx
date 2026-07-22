'use client';

import React from 'react';
import VisionProvider from '@/providers/VisionProvider';
import VisionHeader from './VisionHeader';
import VisionSidebar from './VisionSidebar';
import VisionContainer from './VisionContainer';
import VisionWorkspace from './VisionWorkspace';

interface VisionLayoutProps {
  children?: React.ReactNode;
}

export const VisionLayout = ({ children }: VisionLayoutProps) => {
  return (
    <VisionProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <VisionHeader />

        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
          <VisionSidebar />
          <VisionContainer>
            {children || <VisionWorkspace />}
          </VisionContainer>
        </div>
      </div>
    </VisionProvider>
  );
};

export default VisionLayout;
