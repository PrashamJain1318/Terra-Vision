'use client';

import { useContext } from 'react';
import { MemoryContext } from '@/context/MemoryContext';

export const useMemory = () => {
  const context = useContext(MemoryContext);
  if (!context) {
    throw new Error('useMemory must be used within a MemoryProvider');
  }
  return context;
};

export default useMemory;
