'use client';

import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorMapStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorMapState = ({ message = 'Failed to load map data', onRetry }: ErrorMapStateProps) => {
  return (
    <div className="p-8 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/30 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Map Connection Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-muted/30 border border-border/40 text-xs font-bold hover:bg-muted/50 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Retry Load
        </button>
      )}
    </div>
  );
};

export default ErrorMapState;
