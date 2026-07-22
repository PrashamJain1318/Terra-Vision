'use client';

import { createContext } from 'react';

export interface SecurityEvent {
  id: string;
  type: 'AUTH_SUCCESS' | 'FAILED_LOGIN' | 'MFA_CHALLENGE' | 'RATE_LIMIT_EXCEEDED' | 'SUSPICIOUS_IP';
  details: string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
  timestamp: string;
}

export interface SecurityState {
  mfaActive: boolean;
  setMfaActive: (active: boolean) => void;
  sessionTimeRemaining: number;
  securityEvents: SecurityEvent[];
  triggerSecurityScan: () => void;
  clearSecurityAlerts: () => void;
}

export const SecurityContext = createContext<SecurityState | null>(null);

export default SecurityContext;
