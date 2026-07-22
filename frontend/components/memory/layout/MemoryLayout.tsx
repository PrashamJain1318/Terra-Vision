'use client';

import React from 'react';
import MemoryHeader from './MemoryHeader';
import MemorySidebar from './MemorySidebar';
import MemoryContainer from './MemoryContainer';
import MemoryWorkspace from './MemoryWorkspace';
import MemoryProvider from '@/providers/MemoryProvider';

export const MemoryLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MemoryProvider>
      <div className="space-y-6">
        <MemoryHeader />
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <MemorySidebar />
          <MemoryContainer>{children || <MemoryWorkspace />}</MemoryContainer>
        </div>
      </div>
    </MemoryProvider>
  );
};

export default MemoryLayout;
