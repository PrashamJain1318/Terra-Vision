'use client';

import React from 'react';
import DragDropUploader from './DragDropUploader';
import ImagePreview from './ImagePreview';
import { useVision } from '@/hooks/useVision';

export const ImageUploader = () => {
  const { state, setUploadedImage, resetScanner, startAnalysis } = useVision();

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setUploadedImage(file, url);
  };

  if (state.previewImage) {
    return (
      <ImagePreview
        previewUrl={state.previewImage}
        onClear={resetScanner}
        onAnalyze={startAnalysis}
      />
    );
  }

  return <DragDropUploader onFileSelect={handleFile} />;
};

export default ImageUploader;
