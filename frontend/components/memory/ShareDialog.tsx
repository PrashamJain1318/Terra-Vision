'use client';

import React from 'react';
import { X, Share2, Copy } from 'lucide-react';

interface ShareProps {
  onClose: () => void;
}

export const ShareDialog = ({ onClose }: ShareProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-sm p-6 rounded-3xl bg-card border border-border/50 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
            <Share2 className="w-4 h-4 text-pink-400" /> Share Memory Capsule
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted/40 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        <button className="w-full py-3 rounded-2xl bg-muted/30 border border-border/40 text-xs font-extrabold text-foreground flex items-center justify-center gap-2">
          <Copy className="w-4 h-4" /> Copy Share Token Link
        </button>
      </div>
    </div>
  );
};

export default ShareDialog;
