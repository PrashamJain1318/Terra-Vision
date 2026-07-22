'use client';

import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface SearchResultsProps {
  results?: Array<{ id: string; name: string; address: string; rating?: number }>;
  onSelect?: (place: any) => void;
}

export const SearchResults = ({ results = [], onSelect }: SearchResultsProps) => {
  if (!results.length) return null;

  return (
    <div className="rounded-3xl bg-card/70 backdrop-blur-xl border border-border/40 shadow-2xl p-3 space-y-1">
      {results.map((res) => (
        <button
          key={res.id}
          onClick={() => onSelect?.(res)}
          className="w-full text-left p-3 rounded-2xl hover:bg-muted/40 transition-colors flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground">{res.name}</h4>
              <p className="text-[11px] text-muted-foreground">{res.address}</p>
            </div>
          </div>
          {res.rating && (
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{res.rating}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default SearchResults;
