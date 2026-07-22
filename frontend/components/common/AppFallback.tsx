'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface AppFallbackProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

export const AppFallback = ({ error, resetErrorBoundary }: AppFallbackProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <h2 className="text-xl font-extrabold text-foreground">Something went wrong</h2>
        <p className="text-xs text-muted-foreground">
          {error?.message || 'An unexpected application error occurred. Our engineering team has been notified.'}
        </p>
      </div>

      {resetErrorBoundary && (
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </button>
      )}
    </div>
  );
};

export default AppFallback;
