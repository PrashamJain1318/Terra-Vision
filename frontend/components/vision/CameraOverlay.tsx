'use client';

import React from 'react';

export const CameraOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
      {/* Target Framing Bounding Box */}
      <div className="relative w-64 h-64 border-2 border-dashed border-primary/70 rounded-3xl animate-pulse flex items-center justify-center">
        <span className="absolute -top-3 px-3 py-0.5 rounded-full bg-primary/80 backdrop-blur-md text-[10px] font-extrabold text-primary-foreground uppercase tracking-widest">
          Align Landmark
        </span>
        {/* Corner Accents */}
        <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
      </div>
    </div>
  );
};

export default CameraOverlay;
