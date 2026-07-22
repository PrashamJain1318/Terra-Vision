'use client';

import React, { useState } from 'react';
import { VisionContext, VisionState } from '@/context/VisionContext';

const initialVisionState: VisionState = {
  cameraMode: false,
  uploadedImage: null,
  previewImage: null,
  analysisStatus: 'idle',
  recognizedObject: 'Viceregal Lodge, Shimla',
  confidenceScore: 0.98,
  landmarkData: {
    name: 'Viceregal Lodge (Rashtrapati Niwas)',
    location: 'Shimla, Himachal Pradesh, India',
    builtYear: 1888,
    architect: 'Henry Irwin',
    style: 'Jacobethan Revival Architecture',
    history: 'Formerly the summer residence of the British Viceroy of India, now housing the Indian Institute of Advanced Study.',
  },
  travelInsights: [
    'Best time to visit is during morning hours for clear architectural photography.',
    'Guided historical tours are conducted every 30 minutes.',
    'Lush botanical gardens surround the heritage mansion estate.',
  ],
  nearbyPlaces: [
    { name: 'Bird Sanctuary Viewpoint', distance: '600 m' },
    { name: 'Summer Hill Railway Station', distance: '1.2 km' },
  ],
  scanHistory: [],
  savedScans: [],
  visionTheme: 'dark',
  provider: 'gemini',
  offlineMode: false,
};

export const VisionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<VisionState>(initialVisionState);

  const setCameraMode = (active: boolean) => {
    setState(prev => ({ ...prev, cameraMode: active }));
  };

  const setUploadedImage = (file: File | null, previewUrl: string | null) => {
    setState(prev => ({
      ...prev,
      uploadedImage: file,
      previewImage: previewUrl,
      analysisStatus: previewUrl ? 'analyzing' : 'idle',
    }));
  };

  const setProvider = (provider: 'gemini' | 'openai' | 'azure' | 'aws') => {
    setState(prev => ({ ...prev, provider }));
  };

  const resetScanner = () => {
    setState(prev => ({
      ...prev,
      uploadedImage: null,
      previewImage: null,
      analysisStatus: 'idle',
    }));
  };

  const startAnalysis = () => {
    setState(prev => ({ ...prev, analysisStatus: 'scanning' }));
  };

  const saveToMemories = (memory: any) => {
    setState(prev => ({ ...prev, savedScans: [...prev.savedScans, memory] }));
  };

  return (
    <VisionContext.Provider
      value={{
        state,
        setCameraMode,
        setUploadedImage,
        setProvider,
        resetScanner,
        startAnalysis,
        saveToMemories,
      }}
    >
      {children}
    </VisionContext.Provider>
  );
};

export default VisionProvider;
