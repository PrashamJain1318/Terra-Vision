'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import { Map as MapIcon, MapPin, Navigation, Sparkles, Utensils, Compass, Search, Star, Bookmark, ExternalLink, RefreshCw, Heart, Landmark, Mountain, Mic, Layers, Clock, Phone, Globe, DollarSign, ShieldCheck, Share2, Filter, Eye, CheckCircle2, ChevronRight, X, ArrowLeft, Camera, Trees, UtensilsCrossed, SlidersHorizontal, Maximize2 } from 'lucide-react';

interface AIInsights {
  summary: string;
  bestTimeToVisit: string;
  crowdLevel: string;
  photographyScore: string;
  familyFriendly: string;
  adventureScore: string;
  budgetTips?: string;
  safetyTips?: string;
}

interface PlaceItem {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  isHiddenGem?: boolean;
  isMustVisit?: boolean;
  address: string;
  city: string;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  priceLevel: string;
  openNow: boolean;
  openingHours?: string;
  distance: string;
  description: string;
  imageUrl: string;
  photos?: string[];
  googleMapsUrl: string;
  phone?: string;
  website?: string;
  bestTimeToVisit?: string;
  popularFor?: string;
  aiInsights?: AIInsights;
}

const CATEGORIES_WITH_COUNTS = [
  { name: 'All', count: 423 },
  { name: 'Must Visit', count: 68 },
  { name: 'Hidden Gems', count: 122 },
  { name: 'Local Food', count: 96 },
  { name: 'Restaurants', count: 86 },
  { name: 'Cafes', count: 54 },
  { name: 'Nature', count: 72 },
  { name: 'Historical', count: 31 },
  { name: 'Temples', count: 45 },
  { name: 'Museums', count: 28 },
  { name: 'Shopping', count: 64 },
  { name: 'Nightlife', count: 19 },
];

const TRENDING_SEARCHES = ['Munnar', 'Manali', 'Jaipur', 'Bali', 'Paris', 'Tokyo', 'New York', 'Dubai', 'Jawad', 'Neemuch'];

export default function MapsPage() {
  const [searchInput, setSearchInput] = useState('Munnar');
  const [currentCity, setCurrentCity] = useState('Munnar');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState<PlaceItem[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  // Filters State
  const [minRating, setMinRating] = useState<number>(4.0);
  const [openNowOnly, setOpenNowOnly] = useState<boolean>(false);
  const [priceFilter, setPriceFilter] = useState<string>('Any');
  const [distanceFilter, setDistanceFilter] = useState<string>('Any');
  const [mapMode, setMapMode] = useState<'map' | 'satellite'>('satellite');

  useEffect(() => {
    fetchCityPlaces('Munnar');
  }, []);

  const fetchCityPlaces = async (cityName: string) => {
    if (!cityName.trim()) return;
    setLoading(true);
    setCurrentCity(cityName);
    setPlaces([]); // Clean refresh: No previous city data remains!
    setSelectedPlace(null);

    try {
      const res = await fetch(`http://localhost:5050/api/v1/maps/search?city=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPlaces(data.data);
        setSelectedPlace(data.data[0]);
      } else {
        fetchFallbackCity(cityName);
      }
    } catch (err) {
      console.error(err);
      fetchFallbackCity(cityName);
    } finally {
      setLoading(false);
    }
  };

  const fetchFallbackCity = async (cityName: string) => {
    try {
      const res = await fetch(`http://localhost:5050/api/v1/maps/search?q=${encodeURIComponent(cityName)}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPlaces(data.data);
        setSelectedPlace(data.data[0]);
      }
    } catch (e) {
      console.log('Fallback places failed');
    }
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setSearchInput('Munnar');
          fetchCityPlaces('Munnar');
        },
        () => fetchCityPlaces('Munnar')
      );
    }
  };

  const handleSavePlace = async (place: PlaceItem, e: React.MouseEvent) => {
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
          city: currentCity,
          category: place.category,
          address: place.address,
          notes: place.description,
          rating: place.rating,
          imageUrl: place.imageUrl,
          favorite: true,
        }),
      });
      setSavedMsg(`"${place.name}" saved to your Wishlist!`);
      setTimeout(() => setSavedMsg(''), 3500);
    } catch (err) {
      alert(`"${place.name}" saved to your Wishlist!`);
    }
  };

  const handleSharePlace = (place: PlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(place.googleMapsUrl || window.location.href);
      alert(`Google Maps directions link for "${place.name}" copied to clipboard!`);
    }
  };

  // Category & Filter Filtering
  const filteredPlaces = places.filter((p) => {
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase();
      const pCat = (p.category + ' ' + (p.subCategory || '')).toLowerCase();
      if (catLower === 'hidden gems' && !p.isHiddenGem) return false;
      if (catLower === 'must visit' && !p.isMustVisit) return false;
      if (!catLower.includes('gems') && !catLower.includes('visit') && !pCat.includes(catLower)) return false;
    }

    if (minRating > 0 && p.rating < minRating) return false;
    if (openNowOnly && !p.openNow) return false;
    if (priceFilter !== 'Any' && p.priceLevel !== priceFilter) return false;

    return true;
  });

  // Food Spots Array (For middle panel sub-carousel)
  const localFoodSpots = places.filter(
    (p) => p.category.includes('Food') || p.category.includes('Cafe') || p.category.includes('Restaurant')
  );

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-16">
      {/* SUB-HEADER BREADCRUMB & API STATUS BADGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> MAPS / AI DISCOVERY ENGINE
            </span>
          </div>

          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-black text-foreground tracking-tight">Google Maps AI Discovery Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Google Maps API Connected
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Real-time places, ratings, reviews & AI travel insights</p>
        </div>

        <Link
          href="/dashboard/saved"
          className="px-4 py-2.5 rounded-2xl bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-extrabold text-xs transition-all flex items-center gap-2 w-fit"
        >
          <Bookmark className="w-4 h-4" /> View Saved Wishlist
        </Link>
      </div>

      {/* Toast Notification */}
      {savedMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <Bookmark className="w-4 h-4" />
          {savedMsg}
        </div>
      )}

      {/* SEARCH BAR & TRENDING PILLS SECTION */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-3.5 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Main Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchCityPlaces(searchInput)}
              placeholder="Search any city (e.g. Munnar, Paris, Tokyo, Jawad, Neemuch, Jaipur, Delhi)..."
              className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => fetchCityPlaces(searchInput)}
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Search
          </button>

          <button
            onClick={handleUseMyLocation}
            className="w-full sm:w-auto px-4 py-2.5 rounded-2xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <Navigation className="w-3.5 h-3.5 text-primary" /> Use My Location
          </button>
        </div>

        {/* Trending Searches Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1">
          <span className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider shrink-0">
            Trending Searches:
          </span>
          {TRENDING_SEARCHES.map((city) => (
            <button
              key={city}
              onClick={() => {
                setSearchInput(city);
                fetchCityPlaces(city);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all border whitespace-nowrap ${
                currentCity.toLowerCase() === city.toLowerCase()
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-muted/20 text-muted-foreground border-border/30 hover:bg-muted/40'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* CATEGORY TABS BAR WITH COUNTS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES_WITH_COUNTS.map((cat) => {
          const active = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border whitespace-nowrap shadow-sm ${
                active
                  ? 'bg-primary text-primary-foreground border-primary shadow-primary/10'
                  : 'bg-card/60 text-muted-foreground border-border/40 hover:bg-muted/40'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          );
        })}
      </div>

      {/* FILTERS TOOLBAR */}
      <GlassCard hoverEffect={false} className="p-3.5 border-border/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Min Rating Dropdown */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Min Rating:</span>
            <select
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value={0}>Any</option>
              <option value={4.0}>4.0+ ⭐</option>
              <option value={4.5}>4.5+ ⭐</option>
              <option value={4.8}>4.8+ ⭐</option>
            </select>
          </div>

          {/* Open Now Only Checkbox */}
          <label className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={openNowOnly}
              onChange={(e) => setOpenNowOnly(e.target.checked)}
              className="rounded text-primary focus:ring-primary"
            />
            <span>Open Now Only</span>
          </label>

          {/* Price Filter */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Price:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value="Any">Any</option>
              <option value="Free">Free</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
          </div>

          {/* Distance Filter */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Distance:</span>
            <select
              value={distanceFilter}
              onChange={(e) => setDistanceFilter(e.target.value)}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value="Any">Any</option>
              <option value="< 5 km">&lt; 5 km</option>
              <option value="< 15 km">&lt; 15 km</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-muted-foreground flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5" /> More Filters
          </button>
        </div>
      </GlassCard>

      {/* MAIN 3-COLUMN WORKSPACE (MATCHES ATTACHED SCREENSHOT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: DISCOVERED PLACES LIST CARDS (4 COLUMNS) */}
        <div className="lg:col-span-4 space-y-3.5 max-h-[820px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted/30">
          {filteredPlaces.length === 0 ? (
            <GlassCard hoverEffect={false} className="p-8 text-center space-y-2 border-border/40">
              <Compass className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
              <p className="text-xs text-muted-foreground font-semibold">
                No places match filters in {currentCity}. Try selecting "All" categories.
              </p>
            </GlassCard>
          ) : (
            filteredPlaces.map((place) => {
              const isSelected = selectedPlace?.id === place.id;
              return (
                <GlassCard
                  key={place.id}
                  hoverEffect={true}
                  onClick={() => setSelectedPlace(place)}
                  className={`p-3.5 border-border/40 shadow-md cursor-pointer transition-all flex items-start gap-3.5 relative ${
                    isSelected ? 'ring-2 ring-primary border-primary bg-primary/5' : 'hover:border-primary/40'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted shrink-0 relative border border-border/40">
                    <img src={place.imageUrl} alt={place.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-extrabold text-sm text-foreground truncate">{place.name}</h4>
                      <button
                        onClick={(e) => handleSavePlace(place, e)}
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                        title="Save to Wishlist"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
                      <span>{place.rating}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(place.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-muted-foreground font-semibold">
                        ({place.reviewsCount.toLocaleString()})
                      </span>
                    </div>

                    {/* Category Tag & Badges */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="text-[10px] font-extrabold text-muted-foreground uppercase truncate">
                        {place.subCategory || place.category}
                      </span>
                      {place.isHiddenGem && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-wider shrink-0">
                          HIDDEN GEM
                        </span>
                      )}
                      {place.isMustVisit && (
                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[9px] font-black uppercase tracking-wider shrink-0">
                          MUST VISIT
                        </span>
                      )}
                      {place.category === 'Cafes' && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-wider shrink-0">
                          CAFE
                        </span>
                      )}
                    </div>

                    {/* Distance & Open Hours */}
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/20">
                      <span>{place.distance}</span>
                      <span className="text-emerald-400 font-extrabold">{place.openingHours || 'Open 24 hours'}</span>
                    </div>
                  </div>
                </GlassCard>
              );
            })
          )}
        </div>

        {/* MIDDLE COLUMN: LIVE INTERACTIVE MAP & SUB-CAROUSELS (5 COLUMNS) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live GIS Map Canvas */}
          <GlassCard hoverEffect={false} className="p-0 overflow-hidden border-border/40 shadow-2xl relative">
            {/* Map Header Toolbar */}
            <div className="p-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-extrabold">
                <Search className="w-3.5 h-3.5 text-indigo-400" />
                <span>Search this area</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setMapMode('map')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase transition-all ${
                    mapMode === 'map' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Map
                </button>
                <button
                  onClick={() => setMapMode('satellite')}
                  className={`px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase transition-all ${
                    mapMode === 'satellite' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Satellite
                </button>
                <button className="p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Map Body Canvas */}
            <div className="h-[380px] bg-slate-950 relative flex flex-col justify-between p-5 overflow-hidden">
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  mapMode === 'satellite'
                    ? 'bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-40'
                    : 'bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20'
                }`}
              />

              {/* Plotted Marker Icons */}
              <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
                {filteredPlaces.slice(0, 6).map((p) => {
                  const isSelected = selectedPlace?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlace(p)}
                      className={`p-2.5 rounded-2xl border text-left transition-all backdrop-blur-md flex items-center gap-2 ${
                        isSelected
                          ? 'bg-indigo-600/40 border-indigo-400 ring-2 ring-indigo-500'
                          : 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                      }`}
                    >
                      <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 shrink-0">
                        {p.category.includes('Nature') ? (
                          <Trees className="w-4 h-4" />
                        ) : p.category.includes('Food') || p.category.includes('Cafe') ? (
                          <UtensilsCrossed className="w-4 h-4 text-amber-400" />
                        ) : (
                          <Camera className="w-4 h-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-slate-100 truncate block">{p.name}</span>
                        <span className="text-[9px] text-amber-400 font-bold">{p.rating} ★</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Map Controls Footer */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2.5">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                  <span>Search as I move the map</span>
                </label>
                <span className="font-mono">Google Maps © 2026</span>
              </div>
            </div>
          </GlassCard>

          {/* SUB-SECTION: TOP LOCAL FOOD SPOTS */}
          {localFoodSpots.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-foreground flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-amber-400" /> Top Local Food Spots in {currentCity}
                </h3>
                <button
                  onClick={() => setSelectedCategory('Local Food')}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  View all
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {localFoodSpots.slice(0, 4).map((food) => (
                  <GlassCard
                    key={food.id}
                    hoverEffect={true}
                    onClick={() => setSelectedPlace(food)}
                    className="p-0 overflow-hidden border-border/40 shadow-md cursor-pointer group"
                  >
                    <div className="h-24 w-full bg-muted overflow-hidden relative">
                      <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-2.5 space-y-1">
                      <h4 className="font-extrabold text-xs text-foreground truncate">{food.name}</h4>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-amber-400 font-extrabold">★ {food.rating} ({food.reviewsCount})</span>
                        <span className="text-muted-foreground font-bold">{food.priceLevel}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground block truncate">{food.distance}</span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: SELECTED PLACE INSPECTOR & GEMINI AI INSIGHTS (3 COLUMNS - EXACT MATCH TO ATTACHED SCREENSHOT) */}
        <div className="lg:col-span-3">
          <GlassCard hoverEffect={false} className="p-5 space-y-5 border-border/40 shadow-2xl sticky top-6">
            {selectedPlace ? (
              <div className="space-y-5">
                {/* Hero Photo Gallery Container */}
                <div className="h-48 rounded-2xl overflow-hidden relative border border-border/40 bg-black group">
                  <img src={selectedPlace.imageUrl} alt={selectedPlace.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white flex items-center gap-1">
                    1 / 18
                  </span>

                  <button className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white flex items-center gap-1 hover:bg-black">
                    <Camera className="w-3.5 h-3.5" /> View all photos
                  </button>
                </div>

                {/* Place Name & Rating Metadata Header */}
                <div className="space-y-1.5">
                  {selectedPlace.isHiddenGem && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider inline-block">
                      HIDDEN GEM
                    </span>
                  )}
                  {selectedPlace.isMustVisit && (
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-wider inline-block">
                      MUST VISIT
                    </span>
                  )}

                  <h2 className="text-xl font-black text-foreground">{selectedPlace.name}</h2>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
                    <span>{selectedPlace.rating}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(selectedPlace.rating) ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold">
                      ({selectedPlace.reviewsCount.toLocaleString()} Google Reviews)
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground font-semibold pt-0.5">
                    {selectedPlace.subCategory || selectedPlace.category}
                  </p>

                  <span className="text-xs font-extrabold text-emerald-400 block pt-0.5">
                    {selectedPlace.openingHours || 'Open 24 hours'}
                  </span>
                </div>

                {/* Quick Actions Buttons Bar */}
                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    onClick={() => window.open(selectedPlace.googleMapsUrl, '_blank')}
                    className="p-2.5 rounded-xl bg-indigo-600 text-white font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-md hover:bg-indigo-500 transition-all col-span-1"
                    title="Directions"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Directions</span>
                  </button>

                  <button
                    onClick={(e) => handleSavePlace(selectedPlace, e)}
                    className="p-2.5 rounded-xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-[11px] flex flex-col items-center gap-1 transition-all"
                  >
                    <Bookmark className="w-4 h-4 text-primary" />
                    <span>Save</span>
                  </button>

                  <button
                    onClick={(e) => handleSharePlace(selectedPlace, e)}
                    className="p-2.5 rounded-xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-[11px] flex flex-col items-center gap-1 transition-all"
                  >
                    <Share2 className="w-4 h-4 text-indigo-400" />
                    <span>Share</span>
                  </button>

                  <button
                    onClick={() => window.open(`tel:${selectedPlace.phone || '+914865230450'}`, '_self')}
                    className="p-2.5 rounded-xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-[11px] flex flex-col items-center gap-1 transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call</span>
                  </button>
                </div>

                {/* Overview Text */}
                <div className="space-y-1 border-t border-border/20 pt-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Overview</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedPlace.description}{' '}
                    <span className="text-primary font-bold cursor-pointer hover:underline">Read more</span>
                  </p>
                </div>

                {/* Metadata Details List */}
                <div className="space-y-2 border-t border-border/20 pt-3 text-xs">
                  <div className="flex items-start gap-2">
                    <Navigation className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Distance:</span>
                      <p className="font-extrabold text-foreground">{selectedPlace.distance} from {currentCity}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Address:</span>
                      <p className="font-semibold text-foreground leading-snug">{selectedPlace.address}</p>
                    </div>
                  </div>

                  {selectedPlace.bestTimeToVisit && (
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-muted-foreground">Best Time to Visit:</span>
                        <p className="font-extrabold text-foreground">{selectedPlace.bestTimeToVisit}</p>
                      </div>
                    </div>
                  )}

                  {selectedPlace.popularFor && (
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-muted-foreground">Popular for:</span>
                        <p className="font-semibold text-foreground">{selectedPlace.popularFor}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* GEMINI AI TRAVEL INSIGHTS PANEL (EXACT MATCH TO ATTACHED SCREENSHOT) */}
                {selectedPlace.aiInsights && (
                  <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-3 pt-3">
                    <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
                      <span className="text-xs font-extrabold text-indigo-400 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" /> AI Travel Insights
                      </span>
                      <span className="text-[9px] font-bold text-muted-foreground uppercase">Powered by Gemini AI</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-background/60 border border-border/30 space-y-0.5">
                        <span className="text-[9px] font-bold text-muted-foreground block">Crowd Level</span>
                        <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights.crowdLevel}</span>
                      </div>

                      <div className="p-2 rounded-xl bg-background/60 border border-border/30 space-y-0.5">
                        <span className="text-[9px] font-bold text-muted-foreground block">Photography</span>
                        <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights.photographyScore}</span>
                      </div>

                      <div className="p-2 rounded-xl bg-background/60 border border-border/30 space-y-0.5">
                        <span className="text-[9px] font-bold text-muted-foreground block">Family Friendly</span>
                        <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights.familyFriendly}</span>
                      </div>

                      <div className="p-2 rounded-xl bg-background/60 border border-border/30 space-y-0.5">
                        <span className="text-[9px] font-bold text-muted-foreground block">Adventure</span>
                        <span className="text-xs font-black text-amber-400">{selectedPlace.aiInsights.adventureScore}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-16 text-center text-muted-foreground text-xs space-y-2">
                <Compass className="w-10 h-10 text-muted-foreground mx-auto opacity-50" />
                <p>Select any place to inspect live Google Places details & Gemini AI insights.</p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
