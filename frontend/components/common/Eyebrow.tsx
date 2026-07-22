'use client';

import React, { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export const Eyebrow = ({ children, className = '' }: EyebrowProps) => {
  return (
    <span
      className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary font-mono ${className}`}
    >
      {children}
    </span>
  );
};

export default Eyebrow;
