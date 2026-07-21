'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Bookmark } from 'lucide-react';

export interface SavedPlaceCardProps {
  name: string;
  category?: string;
  address?: string;
  rating?: number;
  bookmarkDate?: string;
}

export const SavedPlaceCard = ({
  name,
  category,
  address,
  rating,
}: SavedPlaceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="p-4 rounded-3xl bg-muted/20 border border-border/30 hover:border-rose-500/40 transition-all flex items-center justify-between"
    >
      <div className="space-y-1 min-w-0">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <h4 className="font-bold text-sm text-foreground truncate">{name}</h4>
        </div>

        {address && (
          <p className="text-xs text-muted-foreground flex items-center gap-1 pl-6">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="truncate">{address}</span>
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {category && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-muted/40 text-muted-foreground uppercase">
            {category}
          </span>
        )}

        {rating && (
          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{rating}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SavedPlaceCard;
