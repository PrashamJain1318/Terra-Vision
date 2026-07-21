'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import SavedPlaceCard, { SavedPlaceCardProps } from './widgets/SavedPlaceCard';

interface SavedPlacesProps {
  places?: SavedPlaceCardProps[];
}

const defaultPlaces: SavedPlaceCardProps[] = [
  {
    name: 'Cafe Simla Times',
    address: 'Mall Road, Shimla, HP, India',
    category: 'Restaurant',
    rating: 4.5,
  },
];

export const SavedPlaces = ({ places = defaultPlaces }: SavedPlacesProps) => {
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
          <p className="text-xs text-muted-foreground">No saved places yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {places.map((place, idx) => (
            <SavedPlaceCard key={idx} {...place} />
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default SavedPlaces;
