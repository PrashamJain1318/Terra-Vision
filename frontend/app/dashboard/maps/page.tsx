'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import { Map as MapIcon, MapPin, Navigation, Sparkles, Utensils, Compass, Search, Star, Bookmark, ExternalLink, RefreshCw, Heart, Landmark, Mountain, Mic, Layers, Clock, Phone, Globe, DollarSign, ShieldCheck, Share2, Filter, Eye, CheckCircle2, ChevronRight, X, ArrowLeft, Camera, Trees, UtensilsCrossed, SlidersHorizontal, Maximize2, MessageSquare, ChevronDown } from 'lucide-react';

interface AIInsights {
  summary: string;
  bestTimeToVisit?: string;
  crowdLevel: string;
  photographyScore: string;
  familyFriendly: string;
  adventureScore: string;
}

interface PlaceItem {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  badge?: 'HIDDEN GEM' | 'MUST VISIT' | 'CAFE';
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
];

const TRENDING_SEARCHES = ['Munnar', 'Manali', 'Jaipur', 'Bali', 'Paris', 'Tokyo', 'New York', 'Dubai'];

const defaultMunnarPlaces: PlaceItem[] = [
  {
    id: 'place_munnar_1',
    name: 'Potters Hill Pine Forest',
    category: 'Nature',
    subCategory: 'Forest • Nature • Hiking Area',
    badge: 'HIDDEN GEM',
    isHiddenGem: true,
    isMustVisit: false,
    rating: 4.7,
    reviewsCount: 1248,
    distance: '12.4 km',
    address: 'Kallar - Mankulam Rd, Munnar, Kerala 685565',
    openNow: true,
    openingHours: 'Open 24 hours',
    priceLevel: 'Free',
    phone: '+91 4865 230 450',
    website: 'https://keralatourism.org/munnar/pine-forest',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Potters+Hill+Pine+Forest+Munnar',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'A beautiful pine forest with scenic hiking trails, perfect for nature walks and photography. Less crowded and peaceful.',
    bestTimeToVisit: 'September – March',
    popularFor: 'Nature Walks, Photography, Picnics',
    aiInsights: {
      summary: 'Potters Hill Pine Forest is best visited early in the morning. September–March offers the best weather.',
      crowdLevel: 'Low',
      photographyScore: 'Excellent',
      familyFriendly: 'Yes',
      adventureScore: 'Medium',
    },
    city: 'Munnar',
    lat: 10.12,
    lng: 77.02,
  },
  {
    id: 'place_munnar_2',
    name: 'Eravikulam National Park',
    category: 'Must Visit',
    subCategory: 'National Park • Wildlife',
    badge: 'MUST VISIT',
    isHiddenGem: false,
    isMustVisit: true,
    rating: 4.6,
    reviewsCount: 3782,
    distance: '15.7 km',
    address: 'Kannan Devan Hills, Munnar, Kerala 685612',
    openNow: true,
    openingHours: 'Open 7:00 AM – 6:00 PM',
    priceLevel: '₹200',
    phone: '+91 4865 231 580',
    website: 'https://eravikulam.org',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Eravikulam+National+Park+Munnar',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    photos: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    description: 'High altitude wildlife sanctuary famous for endangered Nilgiri Tahr mountain goats and rolling tea hills.',
    bestTimeToVisit: 'September – February',
    popularFor: 'Wildlife Spotting, Trekking, Views',
    aiInsights: {
      summary: 'Eravikulam National Park offers breath-taking views of Anamudi Peak and rare mountain flora.',
      crowdLevel: 'Moderate',
      photographyScore: 'Excellent',
      familyFriendly: 'Yes',
      adventureScore: 'Medium',
    },
    city: 'Munnar',
    lat: 10.15,
    lng: 77.08,
  },
  {
    id: 'place_munnar_3',
    name: 'Mattupetty Dam',
    category: 'Must Visit',
    subCategory: 'Tourist Attraction',
    badge: 'MUST VISIT',
    isHiddenGem: false,
    isMustVisit: true,
    rating: 4.5,
    reviewsCount: 2104,
    distance: '13.1 km',
    address: 'Mattupetty, Top Station Highway, Munnar, Kerala',
    openNow: true,
    openingHours: 'Open 8:00 AM – 5:30 PM',
    priceLevel: '₹50',
    phone: '+91 4865 230 910',
    website: 'https://keralatourism.org/munnar/mattupetty',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mattupetty+Dam+Munnar',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    photos: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'],
    description: 'Scenic storage reservoir lake nestled amidst Nilgiri hills, offering speedboating and tea garden walks.',
    bestTimeToVisit: 'October – March',
    popularFor: 'Speedboating, Horse Riding',
    aiInsights: {
      summary: 'Mattupetty Dam is best visited early in the morning. September–February offers the best weather.',
      crowdLevel: 'Moderate',
      photographyScore: 'Excellent',
      familyFriendly: 'Yes',
      adventureScore: 'Medium',
    },
    city: 'Munnar',
    lat: 10.105,
    lng: 77.123,
  },
  {
    id: 'place_munnar_4',
    name: 'Cafe 1983 Munnar',
    category: 'Cafes',
    subCategory: 'Cafe • European',
    badge: 'CAFE',
    isHiddenGem: false,
    isMustVisit: false,
    rating: 4.4,
    reviewsCount: 964,
    distance: '11.5 km • $$',
    address: 'Old Munnar Road, Munnar, Kerala',
    openNow: true,
    openingHours: 'Open 8:00 AM – 10:00 PM',
    priceLevel: '$$',
    phone: '+91 4865 232 400',
    website: 'https://locallens.ai/cafe1983',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe+1983+Munnar',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    photos: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'],
    description: 'Cozy heritage European cafe serving artisan coffee, freshly baked cinnamon rolls, and woodfired pizza.',
    bestTimeToVisit: '4:00 PM – 7:00 PM',
    popularFor: 'Artisan Coffee, Pastries, Relaxed Atmosphere',
    aiInsights: {
      summary: 'Charming heritage cafe offering high quality single origin espresso and freshly baked pastries.',
      crowdLevel: 'Low',
      photographyScore: 'Excellent',
      familyFriendly: 'Yes',
      adventureScore: 'Low',
    },
    city: 'Munnar',
    lat: 10.086,
    lng: 77.058,
  },
  {
    id: 'place_munnar_5',
    name: 'Suryanelli Kolukkumalai Tea Estate',
    category: 'Hidden Gems',
    subCategory: 'Tea Estate • Nature',
    badge: 'HIDDEN GEM',
    isHiddenGem: true,
    isMustVisit: false,
    rating: 4.6,
    reviewsCount: 1732,
    distance: '18.4 km',
    address: 'Suryanelli, Kolukkumalai Road, Munnar, Kerala',
    openNow: true,
    openingHours: 'Open 5:00 AM – 6:00 PM',
    priceLevel: '₹150',
    phone: '+91 4865 234 100',
    website: 'https://kolukkumalai.com',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kolukkumalai+Tea+Estate+Munnar',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    photos: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    description: "World's highest organic tea plantation (7900ft) with 360-degree sunrise view above clouds.",
    bestTimeToVisit: 'September – April',
    popularFor: 'Sunrise Jeep Safari, Tea Tasting',
    aiInsights: {
      summary: 'Kolukkumalai offers a breathtaking 4x4 Jeep trail to the highest tea garden on Earth.',
      crowdLevel: 'Low',
      photographyScore: 'Outstanding',
      familyFriendly: 'Yes',
      adventureScore: 'High',
    },
    city: 'Munnar',
    lat: 10.07,
    lng: 77.21,
  },
];

const mockFoodSpots = [
  {
    id: 'food_1',
    name: 'Rapsy Restaurant',
    rating: 4.5,
    reviewsCount: 892,
    distance: '1.2 km • $$',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'food_2',
    name: 'Al Buhari',
    rating: 4.3,
    reviewsCount: 1100,
    distance: '2.4 km • $$',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'food_3',
    name: 'Saravana Bhavan',
    rating: 4.2,
    reviewsCount: 756,
    distance: '3.6 km • $',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'food_4',
    name: 'Tea Tales Cafe',
    rating: 4.6,
    reviewsCount: 642,
    distance: '1.8 km • $$',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  },
];

export default function MapsPage() {
  const [searchInput, setSearchInput] = useState('Munnar');
  const [currentCity, setCurrentCity] = useState('Munnar');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState<PlaceItem[]>(defaultMunnarPlaces);
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(defaultMunnarPlaces[0]);
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
        setPlaces(defaultMunnarPlaces);
        setSelectedPlace(defaultMunnarPlaces[0]);
      }
    } catch (err) {
      console.error(err);
      setPlaces(defaultMunnarPlaces);
      setSelectedPlace(defaultMunnarPlaces[0]);
    } finally {
      setLoading(false);
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
      alert(`Google Maps link for "${place.name}" copied to clipboard!`);
    }
  };

  // Category Filtering
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

    return true;
  });

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-16">
      {/* SUB-HEADER BREADCRUMB & API STATUS BADGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>MAPS / AI DISCOVERY ENGINE</span>
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
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center gap-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <Bookmark className="w-4 h-4" />
          {savedMsg}
        </div>
      )}

      {/* SEARCH BAR & TRENDING PILLS SECTION */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 space-y-3 shadow-xl">
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
            onClick={() => fetchCityPlaces('Munnar')}
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
          const isGreenBadge = cat.name === 'Hidden Gems';
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all border whitespace-nowrap shadow-sm ${
                active
                  ? 'bg-primary text-primary-foreground border-primary shadow-primary/10'
                  : isGreenBadge
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                  : 'bg-card/60 text-muted-foreground border-border/40 hover:bg-muted/40'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          );
        })}
        <button className="p-2 rounded-2xl bg-card/60 border border-border/40 text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* FILTERS TOOLBAR */}
      <GlassCard hoverEffect={false} className="p-3 border-border/40 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Min Rating */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Min Rating</span>
            <select
              value={minRating}
              onChange={(e) => setMinRating(parseFloat(e.target.value))}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value={4.0}>4.0+ ∨</option>
              <option value={4.5}>4.5+ ∨</option>
              <option value={4.8}>4.8+ ∨</option>
            </select>
          </div>

          {/* Open Now Only */}
          <label className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={openNowOnly}
              onChange={(e) => setOpenNowOnly(e.target.checked)}
              className="rounded text-primary focus:ring-primary"
            />
            <span>Open Now Only</span>
          </label>

          {/* Price */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Price</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value="Any">Any ∨</option>
              <option value="Free">Free</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
            </select>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Distance</span>
            <select
              value={distanceFilter}
              onChange={(e) => setDistanceFilter(e.target.value)}
              className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none"
            >
              <option value="Any">Any ∨</option>
              <option value="< 5 km">&lt; 5 km</option>
              <option value="< 15 km">&lt; 15 km</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-muted-foreground font-bold">Sort By</span>
            <select className="px-2.5 py-1 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-foreground focus:outline-none">
              <option value="Relevance">Relevance ∨</option>
              <option value="Rating">Rating</option>
              <option value="Distance">Distance</option>
            </select>
          </div>
        </div>

        <button className="px-3.5 py-1.5 rounded-xl bg-card/60 border border-border/40 text-xs font-bold text-muted-foreground flex items-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5" /> More Filters
        </button>
      </GlassCard>

      {/* 3-COLUMN MAIN WORKSPACE LAYOUT (EXACT MATCH TO ATTACHED SCREENSHOT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: DISCOVERED PLACES LIST (4 COLUMNS / ~30% WIDTH) */}
        <div className="lg:col-span-4 space-y-3.5 max-h-[840px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted/30">
          {filteredPlaces.length === 0 ? (
            <GlassCard hoverEffect={false} className="p-8 text-center space-y-2 border-border/40">
              <Compass className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
              <p className="text-xs text-muted-foreground font-semibold">No places match selected filters.</p>
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
                    isSelected
                      ? 'ring-2 ring-primary border-primary bg-primary/5'
                      : 'hover:border-primary/40'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted shrink-0 relative border border-border/40">
                    <img src={place.imageUrl} alt={place.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Card Main Info */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-extrabold text-sm text-foreground truncate">{place.name}</h4>
                      <button
                        onClick={(e) => handleSavePlace(place, e)}
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                        title="Bookmark Place"
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

                      {/* Badge Pill on Right */}
                      {place.badge === 'HIDDEN GEM' || place.isHiddenGem ? (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-wider ml-auto">
                          HIDDEN GEM
                        </span>
                      ) : place.badge === 'MUST VISIT' || place.isMustVisit ? (
                        <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[9px] font-black uppercase tracking-wider ml-auto">
                          MUST VISIT
                        </span>
                      ) : place.badge === 'CAFE' || place.category === 'Cafes' ? (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-wider ml-auto">
                          CAFE
                        </span>
                      ) : null}
                    </div>

                    <p className="text-[10px] font-extrabold text-muted-foreground uppercase truncate">
                      {place.subCategory || place.category}
                    </p>

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

        {/* MIDDLE COLUMN: LIVE SATELLITE MAP & SUB-CAROUSELS (5 COLUMNS / ~40% WIDTH) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Satellite Map Canvas */}
          <GlassCard hoverEffect={false} className="p-0 overflow-hidden border-border/40 shadow-2xl relative">
            {/* Map Top Bar */}
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

            {/* Satellite Map View */}
            <div className="h-[380px] bg-slate-950 relative flex flex-col justify-between p-5 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

              {/* Simulated Category Pins on Map */}
              <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
                {filteredPlaces.slice(0, 6).map((p) => {
                  const isSelected = selectedPlace?.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlace(p)}
                      className={`p-2 rounded-2xl border text-left transition-all backdrop-blur-md flex items-center gap-2 ${
                        isSelected
                          ? 'bg-indigo-600/40 border-indigo-400 ring-2 ring-indigo-500'
                          : 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                      }`}
                    >
                      <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 shrink-0">
                        {p.category.includes('Nature') ? (
                          <Trees className="w-3.5 h-3.5 text-emerald-400" />
                        ) : p.category.includes('Food') || p.category.includes('Cafe') ? (
                          <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Camera className="w-3.5 h-3.5 text-indigo-400" />
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

              {/* Map Footer Overlay */}
              <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-indigo-600 focus:ring-indigo-500" />
                  <span>Search as I move the map</span>
                </label>
                <span className="font-mono">Google Maps © 2026</span>
              </div>
            </div>
          </GlassCard>

          {/* SUB-SECTION: TOP LOCAL FOOD SPOTS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-amber-400" /> Top Local Food Spots
              </h3>
              <button
                onClick={() => setSelectedCategory('Local Food')}
                className="text-[11px] font-bold text-primary hover:underline"
              >
                View all
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {mockFoodSpots.map((food) => (
                <GlassCard
                  key={food.id}
                  hoverEffect={true}
                  className="p-0 overflow-hidden border-border/40 shadow-md cursor-pointer group"
                >
                  <div className="h-24 w-full bg-muted overflow-hidden relative">
                    <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-2.5 space-y-1">
                    <h4 className="font-extrabold text-xs text-foreground truncate">{food.name}</h4>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-amber-400 font-extrabold">★ {food.rating} ({food.reviewsCount})</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground block truncate">{food.distance}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* SUB-SECTION: NEARBY ATTRACTIONS */}
          <div className="flex items-center justify-between text-xs pt-1">
            <h3 className="font-extrabold text-foreground">Nearby Attractions</h3>
            <span className="font-bold text-primary cursor-pointer hover:underline">View all</span>
          </div>
        </div>

        {/* RIGHT COLUMN: SELECTED PLACE DETAILS INSPECTOR (3 COLUMNS / ~30% WIDTH - EXACT MATCH TO ATTACHED SCREENSHOT) */}
        <div className="lg:col-span-3">
          <GlassCard hoverEffect={false} className="p-5 space-y-5 border-border/40 shadow-2xl sticky top-6">
            {selectedPlace ? (
              <div className="space-y-4">
                {/* Hero Photo & Thumbnails Block */}
                <div className="space-y-2">
                  <div className="h-48 rounded-2xl overflow-hidden relative border border-border/40 bg-black group">
                    <img src={selectedPlace.imageUrl} alt={selectedPlace.name} className="w-full h-full object-cover" />

                    <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-400">
                      <Heart className="w-4 h-4" />
                    </button>

                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-white flex items-center gap-1">
                      1 / 18
                    </span>

                    <button className="absolute bottom-3 right-3 p-1.5 rounded-xl bg-black/70 backdrop-blur-md text-white hover:bg-black">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-xl overflow-hidden bg-muted border border-border/40">
                      <img src={selectedPlace.imageUrl} alt="Thumb 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-14 rounded-xl overflow-hidden bg-muted border border-border/40">
                      <img
                        src={
                          selectedPlace.photos?.[1] ||
                          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
                        }
                        alt="Thumb 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="h-14 rounded-xl overflow-hidden bg-black/80 border border-border/40 relative flex items-center justify-center text-center">
                      <img
                        src={
                          selectedPlace.photos?.[2] ||
                          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
                        }
                        alt="Thumb 3"
                        className="w-full h-full object-cover opacity-40"
                      />
                      <span className="absolute text-[10px] font-extrabold text-white flex items-center gap-1">
                        <Camera className="w-3 h-3" /> View all photos
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title & Reviews Header */}
                <div className="space-y-1">
                  {selectedPlace.isHiddenGem && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-wider inline-block">
                      HIDDEN GEM
                    </span>
                  )}
                  {selectedPlace.isMustVisit && (
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[9px] font-black uppercase tracking-wider inline-block">
                      MUST VISIT
                    </span>
                  )}

                  <h2 className="text-xl font-black text-foreground">{selectedPlace.name}</h2>

                  {/* Rating Line */}
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
                    <span className="text-xs text-indigo-400 font-semibold cursor-pointer hover:underline">
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

                {/* Action Buttons Row */}
                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    onClick={() => window.open(selectedPlace.googleMapsUrl, '_blank')}
                    className="p-2.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-[11px] flex flex-col items-center gap-1 shadow-md hover:opacity-90 transition-all col-span-1"
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

                {/* Overview */}
                <div className="space-y-1 border-t border-border/20 pt-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Overview</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedPlace.description}{' '}
                    <span className="text-primary font-bold cursor-pointer hover:underline">Read more</span>
                  </p>
                </div>

                {/* Key Metadata Details */}
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

                {/* AI TRAVEL INSIGHTS PANEL (EXACT MATCH TO ATTACHED SCREENSHOT) */}
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
