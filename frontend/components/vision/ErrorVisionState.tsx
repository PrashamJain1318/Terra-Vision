'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import RetryAnalysis from './RetryAnalysis';

interface ErrorVisionStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorVisionState = ({ message = 'Landmark recognition failed', onRetry }: ErrorVisionStateProps) => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/30 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Recognition Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && <RetryAnalysis onRetry={onRetry} />}
    </div>
  );
};

export default ErrorVisionState;
