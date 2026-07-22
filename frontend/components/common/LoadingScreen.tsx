'use client';

import React from 'react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Apple/Tesla-inspired minimalist circular spinner */}
        <div className="w-12 h-12 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
        <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground animate-pulse">
          Loading TerraVision...
        </p>
      </div>
    </div>
  );
};
export default LoadingScreen;
