'use client';

import React, { ReactNode } from 'react';

interface AtlasCardProps {
  children: ReactNode;
  className?: string;
}

export const AtlasCard = ({ children, className = '' }: AtlasCardProps) => {
  return (
    <div
      className={`atlas-card p-6 border transition-all duration-300 hover:shadow-2xl hover:border-primary/40 ${className}`}
    >
      {children}
    </div>
  );
};

export default AtlasCard;
