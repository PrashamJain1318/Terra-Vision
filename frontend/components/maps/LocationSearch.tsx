'use client';

import React, { useState } from 'react';
import { useMap } from '@/hooks/useMap';
import { Search, X } from 'lucide-react';

export const LocationSearch = () => {
  const [query, setQuery] = useState('');
  const { setSelectedDestination } = useMap();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSelectedDestination(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destination, landmark or place..."
        className="w-full pl-11 pr-10 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-border/30 text-xs font-medium focus:outline-none focus:border-primary/60 shadow-lg transition-all"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted/40 text-muted-foreground"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </form>
  );
};

export default LocationSearch;
