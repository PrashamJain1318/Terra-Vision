'use client';

import React from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import PhotoGallery from '@/components/memory/PhotoGallery';
import VideoGallery from '@/components/memory/VideoGallery';

export const MemoryGallery = () => {
  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Scrapbook Media Gallery</h2>
        <PhotoGallery />
        <VideoGallery />
      </div>
    </MemoryLayout>
  );
};

export default MemoryGallery;
