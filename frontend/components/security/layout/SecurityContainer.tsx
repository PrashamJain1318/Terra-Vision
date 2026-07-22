'use client';

import React from 'react';

export const SecurityContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">{children}</div>;
};

export default SecurityContainer;
