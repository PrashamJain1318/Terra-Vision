'use client';

import React, { useState } from 'react';
import { SecurityContext, SecurityEvent } from '@/context/SecurityContext';

const mockEvents: SecurityEvent[] = [
  { id: 'sec-1', type: 'AUTH_SUCCESS', details: 'Admin login via OAuth 2.0 + TOTP MFA', severity: 'INFO', timestamp: '5 mins ago' },
  { id: 'sec-2', type: 'RATE_LIMIT_EXCEEDED', details: 'IP 192.168.1.45 exceeded 100 reqs/min threshold', severity: 'WARNING', timestamp: '18 mins ago' },
  { id: 'sec-3', type: 'SUSPICIOUS_IP', details: 'Blocked unauthorized SSH probe from 45.12.89.12', severity: 'CRITICAL', timestamp: '1 hour ago' },
];

export const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
  const [mfaActive, setMfaActive] = useState(true);
  const [sessionTimeRemaining] = useState(1800); // 30 mins
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>(mockEvents);

  const triggerSecurityScan = () => {
    const scanEvent: SecurityEvent = {
      id: `sec-${Date.now()}`,
      type: 'AUTH_SUCCESS',
      details: 'Automated platform vulnerability & TLS handshake scan passed.',
      severity: 'INFO',
      timestamp: 'Just now',
    };
    setSecurityEvents([scanEvent, ...securityEvents]);
  };

  const clearSecurityAlerts = () => {
    setSecurityEvents(securityEvents.filter((e) => e.severity === 'INFO'));
  };

  return (
    <SecurityContext.Provider
      value={{
        mfaActive,
        setMfaActive,
        sessionTimeRemaining,
        securityEvents,
        triggerSecurityScan,
        clearSecurityAlerts,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;
