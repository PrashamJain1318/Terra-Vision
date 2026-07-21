'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Star, MapPin, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface SavedPlaceItem {
  _id?: string;
  name: string;
  address: string;
  category: string;
  rating?: number;
}

interface SavedPlacesWidgetProps {
  places?: SavedPlaceItem[];
}

const defaultPlaces: SavedPlaceItem[] = [
  {
    name: 'Cafe Simla Times',
    address: 'Mall Road, Shimla, HP, India',
    category: 'restaurant',
    rating: 4.5,
  },
];

export const SavedPlacesWidget = ({ places = defaultPlaces }: SavedPlacesWidgetProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Saved Places
        </h3>
        <Link
          href="/dashboard/saved"
          className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
        >
          View All
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {places.length === 0 ? (
        <div className="text-center py-6">
          <Heart className="w-8 h-8 text-muted-foreground mx-auto opacity-50 mb-2" />
          <p className="text-xs text-muted-foreground">No places saved yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {places.map((place, idx) => (
            <motion.div
              key={place._id || idx}
              whileHover={{ x: 4 }}
              className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 hover:border-rose-500/30 transition-all flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs text-foreground flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  {place.name}
                </h4>
                <p className="text-[11px] text-muted-foreground">{place.address}</p>
              </div>

              {place.rating && (
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{place.rating}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default SavedPlacesWidget;
