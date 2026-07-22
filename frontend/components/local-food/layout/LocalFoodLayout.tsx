'use client';

import React, { ReactNode } from 'react';
import LocalFoodHeader from './LocalFoodHeader';
import LocalFoodSidebar from './LocalFoodSidebar';
import LocalFoodContainer from './LocalFoodContainer';
import LocalFoodWorkspace from './LocalFoodWorkspace';
import LocalFoodProvider from '@/providers/LocalFoodProvider';

interface LocalFoodLayoutProps {
  children?: ReactNode;
}

export const LocalFoodLayoutContent = ({ children }: LocalFoodLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <LocalFoodHeader />
      <div className="flex flex-1">
        <LocalFoodSidebar />
        <LocalFoodContainer>{children || <LocalFoodWorkspace />}</LocalFoodContainer>
      </div>
    </div>
  );
};

export const LocalFoodLayout = ({ children }: LocalFoodLayoutProps) => {
  return (
    <LocalFoodProvider>
      <LocalFoodLayoutContent>{children}</LocalFoodLayoutContent>
    </LocalFoodProvider>
  );
};

export default LocalFoodLayout;
