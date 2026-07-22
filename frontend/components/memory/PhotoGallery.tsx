'use client';

import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const PhotoGallery = () => {
  return (
    <div className="min-h-[220px] rounded-3xl bg-muted/20 border border-border/30 flex items-center justify-center p-6 text-center space-y-2">
      <div className="space-y-1">
        <ImageIcon className="w-8 h-8 mx-auto text-pink-400 animate-pulse" />
        <span className="text-xs font-semibold text-muted-foreground">[Travel Photo Scrapbook Gallery Canvas]</span>
      </div>
    </div>
  );
};

export default PhotoGallery;
