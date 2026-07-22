'use client';

import React from 'react';

export const TopographicBackdrop = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
      <div className="absolute inset-0 topographic-pattern" />
      <div className="absolute inset-0 contour-lines" />
    </div>
  );
};

export default TopographicBackdrop;
