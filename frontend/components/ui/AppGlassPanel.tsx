'use client';

import React from 'react';

interface AppGlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const AppGlassPanel: React.FC<AppGlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-2xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default AppGlassPanel;
