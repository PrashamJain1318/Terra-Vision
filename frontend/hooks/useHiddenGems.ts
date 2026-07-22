'use client';

import { useContext } from 'react';
import HiddenGemsContext from '@/context/HiddenGemsContext';

export const useHiddenGems = () => {
  const context = useContext(HiddenGemsContext);
  if (!context) {
    throw new Error('useHiddenGems must be used within a HiddenGemsProvider');
  }
  return context;
};

export default useHiddenGems;
