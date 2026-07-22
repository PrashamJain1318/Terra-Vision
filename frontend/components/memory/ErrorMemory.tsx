'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import RetryMemory from './RetryMemory';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMemory = ({ message = 'Failed to load travel memory capsule', onRetry }: ErrorProps) => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/30 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Capsule Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && <RetryMemory onRetry={onRetry} />}
    </div>
  );
};

export default ErrorMemory;
