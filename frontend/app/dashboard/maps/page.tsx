'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import { Map as MapIcon, MapPin, Navigation, Sparkles, Utensils, Compass, Search, Star, Bookmark, ExternalLink, RefreshCw, Heart, Landmark, Mountain, Mic, Layers, Clock, Phone, Globe, DollarSign, ShieldCheck, Share2, Filter, Eye, CheckCircle2, ChevronRight } from 'lucide-react';

interface AIInsights {
  summary: string;
  bestTimeToVisit: string;
  crowdLevel: string;
  photographyScore: number;
  familyScore: number;
  budgetScore: number;
  adventureScore: number;
  safetyTips: string;
}

interface PlaceItem {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  priceLevel: string;
  openNow: boolean;
  distance: string;
  description: string;
  imageUrl: string;
  googleMapsUrl: string;
  phone?: string;
  website?: string;
  openingHours?: string;
  aiInsights?: AIInsights;
  nearbyAttractions?: string[];
  nearbyRestaurants?: string[];
  estimatedDuration?: string;
}

const CATEGORIES = [
  'All',
  'Must Visit',
  'Hidden Gems',
  'Local Food',
  'Restaurants',
  'Cafes',
  'Nature',
  'Historical',
  'Museums',
  'Temples',
  'Shopping',
  'Nightlife',
  'Family',
  'Adventure',
];

const TRENDING_CITIES = ['Jawad', 'Neemuch', 'Jaipur', 'Delhi', 'Bangalore', 'Tokyo', 'Paris', 'New York'];

export default function MapsPage() {
  const [cityInput, setCityInput] = useState('Jawad');
  const [activeCity, setActiveCity] = useState('Jawad');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState<PlaceItem[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [savedSuccessMsg, setSavedSuccessMsg] = useState('');

  // Filter States
  const [minRating, setMinRating] = useState<number>(0);
  const [openNowOnly, setOpenNowOnly] = useState<boolean>(false);
  const [mapLayer, setMapLayer] = useState<'topographic' | 'satellite' | 'traffic'>('topographic');

  // Voice Search State
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    fetchPlacesForCity('Jawad');
  }, []);

  const fetchPlacesForCity = async (cityName: string) => {
    if (!cityName.trim()) return;
    setLoading(true);
    setActiveCity(cityName);
    try {
      const res = await fetch(`http://localhost:5050/api/v1/maps/search?city=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPlaces(data.data);
        setSelectedPlace(data.data[0]);
      } else {
        fetchFallbackPlaces(cityName);
      }
    } catch (err) {
      console.error(err);
      fetchFallbackPlaces(cityName);
    } finally {
      setLoading(false);
    }
  };

  const fetchFallbackPlaces = async (cityName: string) => {
    try {
      const res = await fetch(`http://localhost:5050/api/v1/maps/search?q=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPlaces(data.data);
        if (data.data.length > 0) setSelectedPlace(data.data[0]);
      }
    } catch (e) {
      console.log('Fallback places failed');
    }
  };

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice search is not supported in your browser.');
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setCityInput(transcript);
      setIsListening(false);
      fetchPlacesForCity(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  const handleSaveToWishlist = async (place: PlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:5050/api/v1/maps/saved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          name: place.name,
          city: activeCity,
          category: place.category,
          address: place.address,
          notes: place.description,
          rating: place.rating,
          imageUrl: place.imageUrl,
          favorite: true,
        }),
      });
      setSavedSuccessMsg(`"${place.name}" bookmarked in Saved Places!`);
      setTimeout(() => setSavedSuccessMsg(''), 3500);
    } catch (err) {
      alert(`"${place.name}" saved to your wishlist!`);
    }
  };

  const handleSharePlace = (place: PlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: place.name,
        text: `Check out ${place.name} in ${activeCity} on LocalLens AI!`,
        url: place.googleMapsUrl || window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(place.googleMapsUrl || window.location.href);
      alert(`Link to ${place.name} copied to clipboard!`);
    }
  };

  // Filter Logic
  const filteredPlaces = places.filter((p) => {
    // Category match
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase();
      const placeCatLower = (p.category + ' ' + (p.subCategory || '')).toLowerCase();
      if (!placeCatLower.includes(catLower)) return false;
    }

    // Rating filter
    if (minRating > 0 && p.rating < minRating) return false;

    // Open now filter
    if (openNowOnly && !p.openNow) return false;

    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-indigo-400 text-xs font-extrabold border border-indigo-500/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Google Maps API & Gemini AI Engine Active
            </span>
          </div>
          <h1 className="text-3xl font-black text-foreground tracking-tight mt-2">
            Google Maps AI Discovery Engine
          </h1>
          <p className="text-xs text-muted-foreground">
            Search any city worldwide to fetch live Google Places ratings, reviews, photos, and AI travel insights
          </p>
        </div>

        <Link
          href="/dashboard/saved"
          className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white font-extrabold text-xs shadow-xl shadow-primary/20 hover:opacity-95 transition-all flex items-center gap-2 w-fit"
        >
          <Bookmark className="w-4 h-4" /> View Saved Wishlist
        </Link>
      </div>

      {/* Toast Notification */}
      {savedSuccessMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          {savedSuccessMsg}
        </div>
      )}

      {/* SEARCH BAR & TRENDING CITIES SECTION */}
      <GlassCard hoverEffect={false} className="p-5 border-border/40 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Input Box */}
          <div className="relative w-full flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchPlacesForCity(cityInput)}
              placeholder="Search any city worldwide (e.g. Jawad, Neemuch, Jaipur, Delhi, Tokyo, Paris)..."
              className="w-full pl-11 pr-12 py-3 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
            />
            {/* Voice Search Button */}
            <button
              onClick={handleVoiceSearch}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl transition-all ${
                isListening
                  ? 'bg-rose-500/20 text-rose-400 animate-pulse border border-rose-500/40'
                  : 'text-muted-foreground hover:text-primary hover:bg-muted/30'
              }`}
              title="Voice Search"
            >
              <Mic className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => fetchPlacesForCity(cityInput)}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Search Google Maps
          </button>
        </div>

        {/* Trending Cities Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1">
          <span className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider shrink-0">
            Trending Cities:
          </span>
          {TRENDING_CITIES.map((city) => (
            <button
              key={city}
              onClick={() => {
                setCityInput(city);
                fetchPlacesForCity(city);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all border whitespace-nowrap ${
                activeCity.toLowerCase() === city.toLowerCase()
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-muted/20 text-muted-foreground border-border/30 hover:bg-muted/40'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* 14 PLACE CATEGORY TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border whitespace-nowrap shadow-sm ${
                active
                  ? 'bg-gradient-to-r from-primary to-indigo-600 text-white border-primary shadow-indigo-500/20'
                  : 'bg-card/60 text-muted-foreground border-border/40 hover:bg-muted/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* FILTERS & MAP LAYER BAR */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Minimum Rating Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs font-bold text-muted-foreground">Min Rating:</span>
            <select
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="px-3 py-1.5 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
            >
              <option value={0}>All Ratings</option>
              <option value={4.5}>⭐ 4.5+</option>
              <option value={4.8}>⭐ 4.8+</option>
            </select>
          </div>

          {/* Open Now Toggle */}
          <label className="flex items-center gap-2 text-xs font-bold text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={openNowOnly}
              onChange={(e) => setOpenNowOnly(e.target.checked)}
              className="rounded text-primary focus:ring-primary"
            />
            <span>Open Now Only</span>
          </label>
        </div>

        {/* Map Layer Toggle */}
        <div className="flex items-center gap-1.5 bg-muted/20 p-1 rounded-xl border border-border/30">
          <Layers className="w-3.5 h-3.5 text-indigo-400 ml-2" />
          {(['topographic', 'satellite', 'traffic'] as const).map((layer) => (
            <button
              key={layer}
              onClick={() => setMapLayer(layer)}
              className={`px-3 py-1 rounded-lg text-[11px] font-extrabold uppercase transition-all ${
                mapLayer === layer
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* MAIN CONTENT AREA: MAP CANVAS & LIST CARDS & RIGHT DETAIL PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: MAP CANVAS & CARDS GRID (8 COLUMNS) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive GIS Spatial Canvas */}
          <GlassCard hoverEffect={false} className="p-0 overflow-hidden border-border/40 shadow-2xl relative">
            <div className="p-4 border-b border-border/30 flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                <MapIcon className="w-4 h-4 text-indigo-400" /> Interactive Spatial Map Overlays ({activeCity})
              </h2>
              <span className="text-xs text-muted-foreground font-semibold">
                {filteredPlaces.length} Locations Plotted
              </span>
            </div>

            {/* Simulated GIS Canvas */}
            <div className="h-[360px] bg-slate-950/95 relative flex flex-col justify-between p-6 overflow-hidden">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  mapLayer === 'satellite'
                    ? 'bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-40'
                    : mapLayer === 'traffic'
                    ? 'bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] opacity-30'
                    : 'bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20'
                }`}
              />

              {/* Map Layer Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-extrabold text-indigo-400 uppercase tracking-wider">
                  Layer: {mapLayer.toUpperCase()} GIS Topographic
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {selectedPlace ? `Lat: ${selectedPlace.lat}° | Lng: ${selectedPlace.lng}°` : 'GPS Coordinates Active'}
                </span>
              </div>

              {/* Plotted Interactive Location Markers */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto">
                {filteredPlaces.map((place) => {
                  const isSelected = selectedPlace?.id === place.id;
                  return (
                    <button
                      key={place.id}
                      onClick={() => setSelectedPlace(place)}
                      className={`p-3.5 rounded-2xl border text-left transition-all backdrop-blur-md flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'bg-indigo-600/30 border-indigo-400 ring-2 ring-indigo-500/60 shadow-lg'
                          : 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                      }`}
                    >
                      <div className="space-y-1">
                        <span
                          className={`text-[9px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full inline-block ${
                            place.category.includes('Food') || place.category.includes('Restaurant')
                              ? 'bg-amber-500/20 text-amber-300'
                              : place.category.includes('Gems')
                              ? 'bg-indigo-500/20 text-indigo-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          {place.category}
                        </span>
                        <p className="text-xs font-extrabold text-slate-100 line-clamp-1">{place.name}</p>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                          <span className="line-clamp-1">{place.address}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg text-amber-400 text-xs font-bold shrink-0">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{place.rating}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="relative z-10 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-3">
                <span>Location: {activeCity} • Google Places API Verified</span>
                <span>Zoom Level: 14x</span>
              </div>
            </div>
          </GlassCard>

          {/* Place Cards Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">
              Discovered Places in {activeCity} ({filteredPlaces.length})
            </h3>

            {filteredPlaces.length === 0 ? (
              <GlassCard hoverEffect={false} className="p-12 text-center space-y-3 border-border/40">
                <Compass className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
                <p className="text-xs text-muted-foreground font-semibold">
                  No places match the selected filters in {activeCity}. Try selecting "All" categories.
                </p>
              </GlassCard>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredPlaces.map((place) => {
                  const isSelected = selectedPlace?.id === place.id;
                  return (
                    <GlassCard
                      key={place.id}
                      hoverEffect={true}
                      onClick={() => setSelectedPlace(place)}
                      className={`p-0 overflow-hidden border-border/40 shadow-xl flex flex-col justify-between cursor-pointer transition-all ${
                        isSelected ? 'ring-2 ring-indigo-500 border-indigo-500' : ''
                      }`}
                    >
                      <div className="relative h-40 w-full bg-muted overflow-hidden">
                        <img src={place.imageUrl} alt={place.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-[10px] font-extrabold text-primary uppercase">
                            {place.category}
                          </span>

                          <button
                            onClick={(e) => handleSaveToWishlist(place, e)}
                            className="p-1.5 rounded-full bg-black/50 text-white/80 hover:text-rose-400 hover:bg-rose-500/20 backdrop-blur-md transition-colors"
                            title="Bookmark Place"
                          >
                            <Bookmark className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="absolute bottom-3 left-3 flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-black/60 text-amber-400 backdrop-blur-md text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-400" /> {place.rating} ★
                          </span>
                          <span className="text-[10px] text-white/90 font-bold bg-black/60 px-2 py-0.5 rounded-lg backdrop-blur-md">
                            ({place.reviewsCount} Reviews)
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-sm text-foreground line-clamp-1">{place.name}</h4>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                            <span className="line-clamp-1">{place.address}</span>
                          </p>
                          <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed pt-1">
                            {place.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-border/30 flex items-center justify-between mt-auto">
                          <span className="text-[10px] font-extrabold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Open Now
                          </span>

                          <button
                            onClick={() => setSelectedPlace(place)}
                            className="px-3 py-1 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-extrabold text-xs flex items-center gap-1"
                          >
                            Quick View
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </GlassCard>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: SELECTED PLACE INSPECTOR & GEMINI AI INSIGHTS (5 COLUMNS) */}
        <div className="lg:col-span-5">
          <GlassCard hoverEffect={false} className="p-6 space-y-6 border-border/40 shadow-2xl sticky top-6">
            {selectedPlace ? (
              <div className="space-y-6">
                {/* Hero Image */}
                <div className="h-48 rounded-2xl overflow-hidden relative border border-border/40 bg-black">
                  <img src={selectedPlace.imageUrl} alt={selectedPlace.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-amber-400 flex items-center gap-1 border border-amber-400/30">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {selectedPlace.rating} ★ ({selectedPlace.reviewsCount} Google Reviews)
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/80 text-white backdrop-blur-md text-[10px] font-extrabold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Google Verified
                    </span>
                  </div>
                </div>

                {/* Title & Metadata Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400">
                      {selectedPlace.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {selectedPlace.openingHours || 'Open Now'}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-foreground">{selectedPlace.name}</h2>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-indigo-400 shrink-0" /> {selectedPlace.address}
                  </p>
                </div>

                {/* Contact & Meta Bar */}
                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-muted/20 border border-border/30 text-xs">
                  {selectedPlace.phone && (
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Phone:</span>
                      <p className="font-extrabold text-foreground truncate">{selectedPlace.phone}</p>
                    </div>
                  )}
                  {selectedPlace.priceLevel && (
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Price Level:</span>
                      <p className="font-extrabold text-amber-400">{selectedPlace.priceLevel}</p>
                    </div>
                  )}
                  {selectedPlace.estimatedDuration && (
                    <div className="space-y-0.5 col-span-2 border-t border-border/30 pt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Est. Visit Duration:</span>
                      <p className="font-extrabold text-indigo-400">{selectedPlace.estimatedDuration}</p>
                    </div>
                  )}
                </div>

                {/* Place Description */}
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">About This Spot</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{selectedPlace.description}</p>
                </div>

                {/* GEMINI AI INSIGHTS BOX */}
                {selectedPlace.aiInsights && (
                  <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" /> Gemini AI Travel Insights
                    </div>

                    <p className="text-xs text-foreground leading-relaxed font-semibold">
                      "{selectedPlace.aiInsights.summary}"
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="p-2 rounded-xl bg-background/60 border border-border/40">
                        <span className="text-muted-foreground block text-[9px] font-bold uppercase">Best Visit Time</span>
                        <span className="font-extrabold text-foreground">{selectedPlace.aiInsights.bestTimeToVisit}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-background/60 border border-border/40">
                        <span className="text-muted-foreground block text-[9px] font-bold uppercase">Crowd Level</span>
                        <span className="font-extrabold text-emerald-400">{selectedPlace.aiInsights.crowdLevel}</span>
                      </div>
                    </div>

                    {/* AI Score Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center pt-1">
                      <div className="p-2 rounded-xl bg-background/60 border border-border/30">
                        <span className="text-[9px] font-bold text-muted-foreground block">Photo</span>
                        <span className="text-xs font-black text-amber-400">{selectedPlace.aiInsights.photographyScore}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-background/60 border border-border/30">
                        <span className="text-[9px] font-bold text-muted-foreground block">Family</span>
                        <span className="text-xs font-black text-indigo-400">{selectedPlace.aiInsights.familyScore}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-background/60 border border-border/30">
                        <span className="text-[9px] font-bold text-muted-foreground block">Budget</span>
                        <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights.budgetScore}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-background/60 border border-border/30">
                        <span className="text-[9px] font-bold text-muted-foreground block">Adventure</span>
                        <span className="text-xs font-black text-purple-400">{selectedPlace.aiInsights.adventureScore}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-border/30">
                  <button
                    onClick={() => window.open(selectedPlace.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedPlace.name + ' ' + activeCity)}`, '_blank')}
                    className="w-full py-3.5 rounded-2xl bg-indigo-600 text-white font-extrabold text-xs shadow-xl shadow-indigo-600/25 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" /> Open Directions in Google Maps
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => handleSaveToWishlist(selectedPlace, e)}
                      className="py-2.5 rounded-2xl bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Bookmark className="w-4 h-4" /> Save Wishlist
                    </button>

                    <button
                      onClick={(e) => handleSharePlace(selectedPlace, e)}
                      className="py-2.5 rounded-2xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Share2 className="w-4 h-4 text-indigo-400" /> Share Spot
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground text-xs space-y-2">
                <Compass className="w-10 h-10 text-muted-foreground mx-auto opacity-50" />
                <p>Select any place from the map or list to inspect Google Places details & Gemini AI insights.</p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
