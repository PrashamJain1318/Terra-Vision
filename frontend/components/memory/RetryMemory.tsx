'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';

interface RetryProps {
  onRetry: () => void;
}

export const RetryMemory = ({ onRetry }: RetryProps) => {
  return (
    <button
      onClick={onRetry}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-muted/30 border border-border/40 text-xs font-extrabold hover:bg-muted/50 transition-colors"
    >
      <RefreshCw className="w-4 h-4" /> Retry Memory Sync
    </button>
  );
};

export default RetryMemory;
