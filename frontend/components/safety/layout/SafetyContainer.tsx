'use client';

import React, { ReactNode } from 'react';

export const SafetyContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto space-y-6">{children}</div>;
};

export default SafetyContainer;
