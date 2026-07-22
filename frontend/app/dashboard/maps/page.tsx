'use client';

import React, { useState, useEffect } from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Map, MapPin, Navigation, Sparkles, Utensils, Compass, Search } from 'lucide-react';

interface MapMarker {
  id: string;
  name: string;
  category: 'Hidden Gem' | 'Food Spot' | 'Heritage Spot';
  location: string;
  rating: number;
}

export default function MapsPage() {
  const [query, setQuery] = useState('Amritsar');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMapMarkers();
  }, []);

  const fetchMapMarkers = async () => {
    setLoading(true);
    try {
      const [gemsRes, foodRes] = await Promise.all([
        fetch('http://localhost:5050/api/v1/hidden-gems/discover', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ destination: query }),
        }),
        fetch('http://localhost:5050/api/v1/food/discover', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ destination: query }),
        }),
      ]);

      const gemsData = await gemsRes.json();
      const foodData = await foodRes.json();

      const combined: MapMarker[] = [];

      if (gemsData.success && gemsData.data) {
        gemsData.data.forEach((gem: any, idx: number) => {
          combined.push({
            id: `gem-${idx}`,
            name: gem.name,
            category: 'Hidden Gem',
            location: gem.location || 'Heritage Precinct',
            rating: gem.rating || 4.9,
          });
        });
      }

      if (foodData.success && foodData.data) {
        foodData.data.forEach((food: any, idx: number) => {
          combined.push({
            id: `food-${idx}`,
            name: `${food.name} (${food.restaurantName})`,
            category: 'Food Spot',
            location: food.location || 'Food Hub',
            rating: food.rating || 4.8,
          });
        });
      }

      setMarkers(combined);
      if (combined.length > 0) setSelectedMarker(combined[0]);
    } catch (e) {
      console.log('Map markers fallback');
    } finally {
      setLoading(false);
    }
  };

  const filtered = markers.filter(
    (m) => categoryFilter === 'All' || m.category === categoryFilter
  );

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-extrabold border border-indigo-500/30 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> GIS Map Backend Connected
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-2">Interactive Local Maps</h1>
          <p className="text-xs text-muted-foreground">
            Explore AI-discovered hidden spots and legendary heritage dhabas plotted directly from live backend database
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center gap-2">
          {['All', 'Hidden Gem', 'Food Spot'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                categoryFilter === cat
                  ? 'bg-indigo-500 text-white border-indigo-500'
                  : 'bg-card/45 text-muted-foreground border-border/40 hover:bg-muted/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Canvas & GIS Map */}
        <GlassCard hoverEffect={false} className="p-6 space-y-4 lg:col-span-2 border-border/40 shadow-xl min-h-[460px] flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-extrabold text-foreground flex items-center gap-2">
              <Map className="w-4 h-4 text-indigo-400" /> Interactive Spatial Map Overlays
            </h2>
            <span className="text-xs text-muted-foreground">{filtered.length} Locations Plotted</span>
          </div>

          {/* Interactive Simulated GIS Canvas */}
          <div className="flex-1 rounded-2xl bg-slate-950/80 border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between p-6">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-semibold">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchMapMarkers()}
                  placeholder="Search location..."
                  className="bg-transparent text-xs text-slate-200 focus:outline-none w-36"
                />
              </div>
              <button
                onClick={fetchMapMarkers}
                className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow hover:bg-indigo-500 transition-colors"
              >
                Sync GIS Markers
              </button>
            </div>

            {/* Simulated Map Markers */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 py-8">
              {filtered.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMarker(m)}
                  className={`p-3 rounded-2xl border text-left transition-all backdrop-blur-md ${
                    selectedMarker?.id === m.id
                      ? 'bg-indigo-600/30 border-indigo-400 ring-2 ring-indigo-500/50'
                      : 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40'
                  }`}
                >
                  <span className="text-[9px] uppercase font-extrabold tracking-wider text-indigo-400 block">
                    {m.category}
                  </span>
                  <p className="text-xs font-extrabold text-slate-100 truncate">{m.name}</p>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-indigo-400" /> {m.location}
                  </p>
                </button>
              ))}
            </div>

            <div className="relative z-10 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-3">
              <span>Coordinates: 31.6340° N, 74.8723° E</span>
              <span>Map Layer: Vector GIS Topographic</span>
            </div>
          </div>
        </GlassCard>

        {/* Location Info Drawer */}
        <GlassCard hoverEffect={false} className="p-6 space-y-6 lg:col-span-1 border-border/40 shadow-xl">
          {selectedMarker ? (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">{selectedMarker.category}</span>
                <h3 className="text-xl font-extrabold text-foreground">{selectedMarker.name}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {selectedMarker.location}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/20 border border-border/20 space-y-2">
                <span className="text-[10px] font-bold uppercase text-muted-foreground">Community Rating</span>
                <p className="text-lg font-extrabold text-amber-400">★ {selectedMarker.rating} / 5.0</p>
              </div>

              <button
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(selectedMarker.name + ' ' + selectedMarker.location)}`, '_blank')}
                className="w-full py-3 rounded-2xl bg-indigo-600 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" /> Open Directions in Google Maps
              </button>
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground text-xs">
              Select a marker on the map to view detailed GPS coordinates and routing information.
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
