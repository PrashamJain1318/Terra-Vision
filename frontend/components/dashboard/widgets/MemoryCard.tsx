'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, MapPin, Calendar } from 'lucide-react';

export interface MemoryCardProps {
  title: string;
  description: string;
  location?: string;
  date?: string;
  imageUrl?: string;
}

export const MemoryCard = ({
  title,
  description,
  location,
  date,
}: MemoryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-4 rounded-3xl bg-muted/20 border border-border/30 hover:border-purple-500/40 transition-all flex items-start gap-4"
    >
      <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 flex-shrink-0">
        <ImageIcon className="w-5 h-5" />
      </div>

      <div className="space-y-1 min-w-0 flex-1">
        <h4 className="font-bold text-sm text-foreground truncate">{title}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>

        {(location || date) && (
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground pt-1">
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-purple-400" />
                {location}
              </span>
            )}
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(date).toLocaleDateString()}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MemoryCard;
