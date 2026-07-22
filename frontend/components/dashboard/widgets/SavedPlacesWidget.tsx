'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Star, MapPin, ArrowRight, Bookmark } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface SavedPlaceItem {
  _id?: string;
  name: string;
  address?: string;
  city?: string;
  category?: string;
  rating?: number;
  favorite?: boolean;
}

const defaultPlaces: SavedPlaceItem[] = [
  {
    name: 'Cafe Simla Times',
    city: 'Shimla, HP, India',
    address: 'Mall Road, Shimla, HP',
    category: 'Cafes & Dining',
    rating: 4.8,
    favorite: true,
  },
  {
    name: 'KDHP Tea Museum & Factory',
    city: 'Munnar, Kerala',
    address: 'Nullatanni Estate, Munnar',
    category: 'Hidden Gems',
    rating: 4.9,
    favorite: true,
  },
];

export const SavedPlacesWidget = ({ places: initialPlaces }: { places?: SavedPlaceItem[] | null }) => {
  const [places, setPlaces] = useState<SavedPlaceItem[]>(initialPlaces && initialPlaces.length > 0 ? initialPlaces : defaultPlaces);

  useEffect(() => {
    fetchRecentSavedPlaces();
  }, []);

  const fetchRecentSavedPlaces = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/maps/saved', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPlaces(data.data);
      }
    } catch (e) {
      console.log('Using default saved places fallback for widget');
    }
  };

  return (
    <GlassCard hoverEffect={false} className="space-y-4 border-border/40 shadow-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-1.5">
          <Bookmark className="w-3.5 h-3.5 text-primary" /> Saved Places & Wishlist
        </h3>
        <Link
          href="/dashboard/saved"
          className="text-xs text-primary hover:underline font-extrabold flex items-center gap-1"
        >
          View All ({places.length})
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {places.length === 0 ? (
        <div className="text-center py-6">
          <Heart className="w-8 h-8 text-muted-foreground mx-auto opacity-50 mb-2" />
          <p className="text-xs text-muted-foreground">No places bookmarked yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {places.slice(0, 3).map((place, idx) => (
            <motion.div
              key={place._id || idx}
              whileHover={{ x: 4 }}
              className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 hover:border-rose-500/30 transition-all flex items-center justify-between gap-3"
            >
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs text-foreground flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="line-clamp-1">{place.name}</span>
                </h4>
                <p className="text-[11px] text-muted-foreground line-clamp-1">
                  {place.city || place.address}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {place.rating && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{place.rating}</span>
                  </div>
                )}
                <Link
                  href="/dashboard/saved"
                  className="p-1 rounded-lg text-muted-foreground hover:text-rose-400 transition-colors"
                >
                  <Heart className={`w-3.5 h-3.5 ${place.favorite ? 'fill-rose-400 text-rose-400' : ''}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default SavedPlacesWidget;
