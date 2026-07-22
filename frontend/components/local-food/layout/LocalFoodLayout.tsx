'use client';

import React, { ReactNode } from 'react';
import LocalFoodWorkspace from './LocalFoodWorkspace';
import LocalFoodProvider from '@/providers/LocalFoodProvider';

interface LocalFoodLayoutProps {
  children?: ReactNode;
}

export const LocalFoodLayout = ({ children }: LocalFoodLayoutProps) => {
  return (
    <LocalFoodProvider>
      <div className="space-y-6">
        {children || <LocalFoodWorkspace />}
      </div>
    </LocalFoodProvider>
  );
};

export default LocalFoodLayout;
