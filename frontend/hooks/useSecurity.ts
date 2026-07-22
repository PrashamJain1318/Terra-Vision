'use client';

import { useContext } from 'react';
import { SecurityContext } from '@/context/SecurityContext';

const defaultFallbackSecurityState = {
  mfaActive: true,
  setMfaActive: () => {},
  sessionTimeRemaining: 1800,
  securityEvents: [],
  triggerSecurityScan: () => {},
  clearSecurityAlerts: () => {},
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  return context || defaultFallbackSecurityState;
};

export default useSecurity;
