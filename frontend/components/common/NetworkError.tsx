import React from 'react';
import { AlertCircle } from 'lucide-react';

interface NetworkErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const NetworkError = ({ message = 'Failed to fetch network data.', onRetry }: NetworkErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl glass text-center space-y-4 max-w-sm mx-auto">
      <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center">
        <AlertCircle className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="font-semibold text-sm">Connection Error</h4>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-foreground text-background font-semibold rounded-full text-xs hover:bg-foreground/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
export default NetworkError;
