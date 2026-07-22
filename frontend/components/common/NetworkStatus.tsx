'use client';

import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 px-4 py-2.5 rounded-2xl bg-amber-500 text-amber-950 font-extrabold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
      <WifiOff className="w-4 h-4" /> You are currently offline. Retrying connection...
    </div>
  );
};

export default NetworkStatus;
