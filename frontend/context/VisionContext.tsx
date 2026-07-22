'use client';

import { createContext } from 'react';

export interface VisionState {
  cameraMode: boolean;
  uploadedImage: File | null;
  previewImage: string | null;
  analysisStatus: 'idle' | 'scanning' | 'analyzing' | 'completed' | 'error';
  recognizedObject: string | null;
  confidenceScore: number;
  landmarkData: any | null;
  travelInsights: string[];
  nearbyPlaces: any[];
  scanHistory: any[];
  savedScans: any[];
  visionTheme: string;
  provider: 'gemini' | 'openai' | 'azure' | 'aws';
  offlineMode: boolean;
}

export interface VisionContextType {
  state: VisionState;
  setCameraMode: (active: boolean) => void;
  setUploadedImage: (file: File | null, previewUrl: string | null) => void;
  setProvider: (provider: 'gemini' | 'openai' | 'azure' | 'aws') => void;
  resetScanner: () => void;
  startAnalysis: () => void;
  saveToMemories: (memory: any) => void;
}

export const VisionContext = createContext<VisionContextType | undefined>(undefined);

export default VisionContext;
