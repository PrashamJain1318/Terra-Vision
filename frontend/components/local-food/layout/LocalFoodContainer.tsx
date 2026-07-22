'use client';

import React, { ReactNode } from 'react';

export const LocalFoodContainer = ({ children }: { children: ReactNode }) => {
  return <main className="flex-1 p-6 space-y-6 overflow-y-auto max-w-7xl mx-auto">{children}</main>;
};

export default LocalFoodContainer;
