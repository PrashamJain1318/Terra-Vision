'use client';

import { useContext } from 'react';
import { SafetyContext, SafetyContextType } from '@/context/SafetyContext';

export const useSafety = (): SafetyContextType => {
  const context = useContext(SafetyContext);
  if (!context) {
    throw new Error('useSafety must be used within a SafetyProvider');
  }
  return context;
};

export default useSafety;
