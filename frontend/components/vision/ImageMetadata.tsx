'use client';

import React from 'react';
import { FileImage, HardDrive, ShieldCheck } from 'lucide-react';

interface ImageMetadataProps {
  fileName?: string;
  size?: string;
  mimeType?: string;
}

export const ImageMetadata = ({ fileName = 'viceregal_lodge.jpg', size = '2.4 MB', mimeType = 'image/jpeg' }: ImageMetadataProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-3 rounded-2xl bg-card/45 backdrop-blur-md border border-border/30 text-xs font-semibold text-muted-foreground">
      <span className="flex items-center gap-1.5 text-foreground">
        <FileImage className="w-3.5 h-3.5 text-primary" /> {fileName}
      </span>
      <span>•</span>
      <span className="flex items-center gap-1.5">
        <HardDrive className="w-3.5 h-3.5" /> {size}
      </span>
      <span>•</span>
      <span className="flex items-center gap-1.5 text-emerald-400">
        <ShieldCheck className="w-3.5 h-3.5" /> {mimeType}
      </span>
    </div>
  );
};

export default ImageMetadata;
