'use client';

import { useContext } from 'react';
import LocalFoodContext from '@/context/LocalFoodContext';

export const useLocalFood = () => {
  const context = useContext(LocalFoodContext);
  if (!context) {
    throw new Error('useLocalFood must be used within a LocalFoodProvider');
  }
  return context;
};

export default useLocalFood;
