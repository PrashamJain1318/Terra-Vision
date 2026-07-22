'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import CameraView from '@/components/vision/CameraView';

export const CameraScanner = () => {
  return (
    <VisionLayout>
      <div className="space-y-6">
        <CameraView />
      </div>
    </VisionLayout>
  );
};

export default CameraScanner;
