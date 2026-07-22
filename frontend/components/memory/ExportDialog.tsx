'use client';

import React from 'react';
import { X, Download, FileText } from 'lucide-react';

interface ExportProps {
  onClose: () => void;
}

export const ExportDialog = ({ onClose }: ExportProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-sm p-6 rounded-3xl bg-card border border-border/50 shadow-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
            <Download className="w-4 h-4 text-pink-400" /> Export Digital Scrapbook
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted/40 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        <button className="w-full py-3 rounded-2xl bg-pink-600 text-white font-extrabold text-xs shadow-lg shadow-pink-600/20 hover:bg-pink-500 transition-all flex items-center justify-center gap-2">
          <FileText className="w-4 h-4" /> Download 300DPI HD Scrapbook PDF
        </button>
      </div>
    </div>
  );
};

export default ExportDialog;
