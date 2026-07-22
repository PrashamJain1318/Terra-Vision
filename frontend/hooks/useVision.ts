'use client';

import { useContext } from 'react';
import { VisionContext } from '@/context/VisionContext';

export const useVision = () => {
  const context = useContext(VisionContext);
  if (!context) {
    throw new Error('useVision must be used within a VisionProvider');
  }
  return context;
};

export default useVision;
