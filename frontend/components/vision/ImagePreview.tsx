'use client';

import React from 'react';
import { X, Sparkles } from 'lucide-react';
import ImageMetadata from './ImageMetadata';

interface ImagePreviewProps {
  previewUrl: string;
  onClear: () => void;
  onAnalyze: () => void;
}

export const ImagePreview = ({ previewUrl, onClear, onAnalyze }: ImagePreviewProps) => {
  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-4">
      <div className="relative rounded-2xl overflow-hidden min-h-[280px] bg-muted/20 border border-border/30 flex items-center justify-center">
        <img src={previewUrl} alt="Landmark Preview" className="max-h-72 object-contain rounded-xl" />
        <button
          onClick={onClear}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <ImageMetadata />

      <button
        onClick={onAnalyze}
        className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4" /> Analyze Landmark with AI Vision
      </button>
    </div>
  );
};

export default ImagePreview;
