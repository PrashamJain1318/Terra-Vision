'use client';

import React from 'react';
import { AlertOctagon } from 'lucide-react';
import RetryVoice from './RetryVoice';

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorVoice = ({ message = 'Failed to establish voice session', onRetry }: ErrorProps) => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/30 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
        <AlertOctagon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Voice Engine Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && <RetryVoice onRetry={onRetry} />}
    </div>
  );
};

export default ErrorVoice;
