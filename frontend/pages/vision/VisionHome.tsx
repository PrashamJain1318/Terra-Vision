'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import ImageUploader from '@/components/vision/ImageUploader';
import RecognitionResult from '@/components/vision/RecognitionResult';

export const VisionHome = () => {
  return (
    <VisionLayout>
      <div className="space-y-8">
        <ImageUploader />
        <RecognitionResult />
      </div>
    </VisionLayout>
  );
};

export default VisionHome;
