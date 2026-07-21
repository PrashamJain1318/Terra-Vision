import React from 'react';

export const LoadingIndicator = ({ message = 'Fetching data...' }: { message?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3">
      <div className="w-8 h-8 border-2 border-muted border-t-primary rounded-full animate-spin"></div>
      <p className="text-xs text-muted-foreground animate-pulse font-medium">{message}</p>
    </div>
  );
};
export default LoadingIndicator;
