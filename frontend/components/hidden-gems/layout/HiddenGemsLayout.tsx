'use client';

import React, { ReactNode } from 'react';
import HiddenGemsWorkspace from './HiddenGemsWorkspace';
import HiddenGemsProvider from '@/providers/HiddenGemsProvider';

interface HiddenGemsLayoutProps {
  children?: ReactNode;
}

export const HiddenGemsLayout = ({ children }: HiddenGemsLayoutProps) => {
  return (
    <HiddenGemsProvider>
      <div className="space-y-6">
        {children || <HiddenGemsWorkspace />}
      </div>
    </HiddenGemsProvider>
  );
};

export default HiddenGemsLayout;
