'use client';

import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

export const SkeletonLoader = ({ className = 'h-12 w-full' }: SkeletonLoaderProps) => {
  return <div className={`rounded-2xl bg-muted/20 animate-pulse ${className}`} />;
};

export default SkeletonLoader;
