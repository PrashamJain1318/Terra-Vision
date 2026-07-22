'use client';

import React, { ReactNode } from 'react';
import HiddenGemsHeader from './HiddenGemsHeader';
import HiddenGemsSidebar from './HiddenGemsSidebar';
import HiddenGemsContainer from './HiddenGemsContainer';
import HiddenGemsWorkspace from './HiddenGemsWorkspace';
import HiddenGemsProvider from '@/providers/HiddenGemsProvider';

interface HiddenGemsLayoutProps {
  children?: ReactNode;
}

export const HiddenGemsLayoutContent = ({ children }: HiddenGemsLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <HiddenGemsHeader />
      <div className="flex flex-1">
        <HiddenGemsSidebar />
        <HiddenGemsContainer>{children || <HiddenGemsWorkspace />}</HiddenGemsContainer>
      </div>
    </div>
  );
};

export const HiddenGemsLayout = ({ children }: HiddenGemsLayoutProps) => {
  return (
    <HiddenGemsProvider>
      <HiddenGemsLayoutContent>{children}</HiddenGemsLayoutContent>
    </HiddenGemsProvider>
  );
};

export default HiddenGemsLayout;
