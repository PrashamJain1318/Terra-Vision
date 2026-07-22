'use client';

import React from 'react';
import { Video } from 'lucide-react';

export const VideoGallery = () => {
  return (
    <div className="min-h-[220px] rounded-3xl bg-muted/20 border border-border/30 flex items-center justify-center p-6 text-center space-y-2">
      <div className="space-y-1">
        <Video className="w-8 h-8 mx-auto text-pink-400 animate-pulse" />
        <span className="text-xs font-semibold text-muted-foreground">[Travel Video Scrapbook Highlights]</span>
      </div>
    </div>
  );
};

export default VideoGallery;
