'use client';

import React from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface DragDropUploaderProps {
  onFileSelect: (file: File) => void;
}

export const DragDropUploader = ({ onFileSelect }: DragDropUploaderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <label className="min-h-[260px] rounded-3xl bg-muted/15 border-2 border-dashed border-border/40 hover:border-primary/60 transition-all flex flex-col items-center justify-center text-center p-8 cursor-pointer space-y-3 group">
      <input type="file" accept="image/*" onChange={handleChange} className="hidden" />
      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
        <Upload className="w-7 h-7" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-extrabold text-foreground">Drag & Drop Landmark Photo</h4>
        <p className="text-xs text-muted-foreground">Supports JPEG, PNG, WEBP (Max 10 MB)</p>
      </div>
    </label>
  );
};

export default DragDropUploader;
