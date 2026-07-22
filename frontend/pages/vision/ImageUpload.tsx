'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import ImageUploader from '@/components/vision/ImageUploader';

export const ImageUpload = () => {
  return (
    <VisionLayout>
      <div className="space-y-6">
        <ImageUploader />
      </div>
    </VisionLayout>
  );
};

export default ImageUpload;
