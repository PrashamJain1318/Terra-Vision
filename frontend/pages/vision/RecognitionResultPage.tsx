'use client';

import React from 'react';
import VisionLayout from '@/components/vision/layout/VisionLayout';
import RecognitionResult from '@/components/vision/RecognitionResult';

export const RecognitionResultPage = () => {
  return (
    <VisionLayout>
      <div className="space-y-6">
        <RecognitionResult />
      </div>
    </VisionLayout>
  );
};

export default RecognitionResultPage;
