'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import api from '@/utils/api';
import mapsService, { PlaceItem, CityWeather, RouteInfo, TelemetryStats } from '@/services/mapsService';
import {
  Map as MapIcon,
  MapPin,
  Navigation,
  Sparkles,
  Utensils,
  Compass,
  Search,
  Star,
  Bookmark,
  ExternalLink,
  RefreshCw,
  Heart,
  Landmark,
  Mountain,
  Mic,
  MicOff,
  Layers,
  Clock,
  Phone,
  Globe,
  DollarSign,
  ShieldCheck,
  Share2,
  Filter,
  Eye,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  ArrowLeft,
  Camera,
  Trees,
  UtensilsCrossed,
  SlidersHorizontal,
  Maximize2,
  MessageSquare,
  ChevronDown,
  Volume2,
  Sun,
  Sunset,
  CloudRain,
  Wind,
  ShieldAlert,
  Car,
  Bike,
  Footprints,
  Bus,
  Waves,
  Building,
  Hospital,
  CreditCard,
  Fuel,
  TrendingUp,
  Flame,
  Zap,
  Command,
  Activity,
  Check,
  Compass as CompassIcon,
  CheckCircle,
  Radio,
  Sliders,
} from 'lucide-react';

const CATEGORIES_WITH_ICONS = [
  { name: 'All', icon: Compass },
  { name: 'Attractions', icon: Camera },
  { name: 'Restaurants', icon: Utensils },
  { name: 'Hidden Gems', icon: Sparkles },
  { name: 'Museums', icon: Landmark },
  { name: 'Shopping', icon: CreditCard },
  { name: 'Nature', icon: Trees },
  { name: 'Nightlife', icon: Flame },
  { name: 'Adventure', icon: Mountain },
  { name: 'Family', icon: Heart },
];

const RECENT_SEARCHES = ['Goa', 'Munnar', 'Manali', 'Paris', 'Tokyo'];
const TRENDING_DESTINATIONS = ['Goa', 'Jaipur', 'Bali', 'New York', 'Dubai', 'Delhi', 'Neemuch', 'Jawad'];

// Custom Animated Map Markers (Icon Map)
const getMarkerIcon = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('food') || cat.includes('restaurant') || cat.includes('cafe'))
    return { icon: '🍽', bg: 'bg-amber-500/20 text-amber-400 border-amber-500/40' };
  if (cat.includes('temple') || cat.includes('historical') || cat.includes('fort'))
    return { icon: '🛕', bg: 'bg-purple-500/20 text-purple-400 border-purple-500/40' };
  if (cat.includes('nature') || cat.includes('park') || cat.includes('waterfall'))
    return { icon: '🌿', bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' };
  if (cat.includes('museum')) return { icon: '🏛', bg: 'bg-blue-500/20 text-blue-400 border-blue-500/40' };
  if (cat.includes('beach')) return { icon: '🏖️', bg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' };
  if (cat.includes('hotel')) return { icon: '🏨', bg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40' };
  return { icon: '🧗', bg: 'bg-purple-500/20 text-purple-400 border-purple-500/40' };
};

const initialGoaPlaces: PlaceItem[] = [
  {
    id: 'place_goa_1',
    name: 'Baga Beach & Nightlife Shore',
    category: 'Beaches',
    subCategory: 'Beach • Water Sports • Nightlife',
    badge: 'MUST VISIT',
    isHiddenGem: false,
    isMustVisit: true,
    rating: 4.8,
    reviewsCount: 45821,
    distance: '2.1 km',
    address: 'Baga Beach Road, Calangute, Goa 403516',
    openNow: true,
    openingHours: 'Open 24 hours',
    priceLevel: '₹₹',
    phone: '+91 832 227 6033',
    website: 'https://goatourism.gov.in/baga-beach',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Baga+Beach+Goa',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Famous golden sand stretch known for parasailing, beach shacks, seafood dining, and vibrant nightlife at Tito’s Lane.',
    bestTimeToVisit: 'Sunset (5:00 PM – 7:00 PM)',
    popularFor: 'Parasailing, Sunset Views, Shacks, Nightlife',
    aiScore: 98,
    aiInsights: {
      summary: 'Baga Beach is Goa’s premier nightlife and water sports hotspot. Visit at sunrise for peaceful beach walks or 5 PM for sunset shacks.',
      crowdLevel: 'Moderate',
      photographyScore: '9.6/10',
      familyFriendly: 'Yes',
      adventureScore: '9.1',
      nightlifeScore: '10/10',
      safetyScore: '9.8',
      budgetScore: '₹₹',
      suggestedDuration: '3 Hours',
      budgetTips: 'Group water sports packages yield 20% discounts.',
      safetyTips: 'Swim strictly inside lifeguard flag boundaries.',
    },
    city: 'Goa',
    lat: 15.5553,
    lng: 73.7517,
  },
  {
    id: 'place_goa_2',
    name: 'Butterfly Beach Cove',
    category: 'Hidden Gems',
    subCategory: 'Beach • Hidden Cove • Nature',
    badge: 'HIDDEN GEM',
    isHiddenGem: true,
    isMustVisit: false,
    rating: 4.8,
    reviewsCount: 520,
    distance: '14.2 km',
    address: 'Palolem Highway, Canacona, South Goa 403702',
    openNow: true,
    openingHours: 'Open 6:00 AM – 6:30 PM',
    priceLevel: 'Free',
    phone: '+91 832 264 3000',
    website: 'https://goatourism.gov.in/butterfly-beach',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Butterfly+Beach+Goa',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    photos: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Enclosed semi-circular white sand cove accessible via forest hike or boat ride, renowned for dolphin sightings and clear turquoise waters.',
    bestTimeToVisit: '7:00 AM – 10:00 AM',
    popularFor: 'Dolphin Spotting, Forest Hike, Quiet Relaxation',
    aiScore: 96,
    aiInsights: {
      summary: 'Butterfly Beach is a pristine secret sanctuary hidden by dense trees with frequent dolphin sightings.',
      crowdLevel: 'Low',
      photographyScore: '9.8/10',
      familyFriendly: 'Yes',
      adventureScore: '9.4',
      nightlifeScore: '2/10',
      safetyScore: '9.7',
      budgetScore: 'Free',
      suggestedDuration: '2.5 Hours',
    },
    city: 'Goa',
    lat: 15.0189,
    lng: 74.0201,
  },
  {
    id: 'place_goa_3',
    name: 'Aguada Fort & Lighthouse',
    category: 'Attractions',
    subCategory: 'Historical • Lighthouse • Fortress',
    badge: 'MUST VISIT',
    isHiddenGem: false,
    isMustVisit: true,
    rating: 4.5,
    reviewsCount: 38290,
    distance: '8.7 km',
    address: 'Fort Aguada Rd, Candolim, Goa 403515',
    openNow: true,
    openingHours: 'Open 9:30 AM – 6:00 PM',
    priceLevel: '₹50',
    phone: '+91 832 243 8750',
    website: 'https://goatourism.gov.in/fort-aguada',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fort+Aguada+Goa',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    photos: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'],
    description: '17th-century Portuguese freshwater fort and lighthouse overlooking the Arabian Sea where Mandovi river merges.',
    bestTimeToVisit: '4:30 PM – 6:00 PM',
    popularFor: 'Sunset Panorama, Portuguese Architecture',
    aiScore: 94,
    aiInsights: {
      summary: 'Fort Aguada provides commanding 360-degree ocean views. Ideal for historical photography and sunset breezes.',
      crowdLevel: 'Moderate',
      photographyScore: '9.2/10',
      familyFriendly: 'Yes',
      adventureScore: '6.5',
      safetyScore: '9.8',
      budgetScore: '₹',
      suggestedDuration: '2 Hours',
    },
    city: 'Goa',
    lat: 15.4927,
    lng: 73.7738,
  },
];

export default function MapsPage() {
  const [searchInput, setSearchInput] = useState('Goa');
  const [currentCity, setCurrentCity] = useState('Goa');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [places, setPlaces] = useState<PlaceItem[]>(initialGoaPlaces);
  const [selectedPlace, setSelectedPlace] = useState<PlaceItem | null>(initialGoaPlaces[0]);
  const [hoveredPlaceId, setHoveredPlaceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const [weather, setWeather] = useState<CityWeather | null>({
    cityName: 'Goa',
    temp: '24°C',
    condition: 'Tropical Sunny',
    aqi: 38,
    aqiLabel: 'Good',
    sunrise: '6:12 AM',
    sunset: '6:54 PM',
    uvIndex: '8.2',
    localTime: '06:30 PM',
    currency: 'INR (₹)',
    emergency: {
      police: '112',
      ambulance: '108',
      touristHelpline: '1364',
    },
  });

  // Layer toggles
  const [mapMode, setMapMode] = useState<'map' | 'satellite' | 'terrain'>('satellite');
  const [trafficLayer, setTrafficLayer] = useState(true);

  // Modals & Voice State
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [routeModalOpen, setRouteModalOpen] = useState(false);
  const [routeMode, setRouteMode] = useState<'driving' | 'walking' | 'cycling' | 'transit'>('driving');
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);

  useEffect(() => {
    fetchCityPlaces('Goa');
    fetchCityWeather('Goa');
  }, []);

  const fetchCityPlaces = async (cityName: string) => {
    const cityToFetch = cityName.trim() || 'Goa';
    setLoading(true);
    setCurrentCity(cityToFetch);

    try {
      const data = await mapsService.searchPlaces(cityToFetch, selectedCategory);
      if (Array.isArray(data) && data.length > 0) {
        setPlaces(data);
        setSelectedPlace(data[0]);
      } else {
        setPlaces(initialGoaPlaces);
        setSelectedPlace(initialGoaPlaces[0]);
      }
    } catch (err) {
      setPlaces(initialGoaPlaces);
      setSelectedPlace(initialGoaPlaces[0]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCityWeather = async (cityName: string) => {
    try {
      const data = await mapsService.getWeather(cityName);
      if (data) setWeather(data);
    } catch (e) {
      // Quiet catch
    }
  };

  // Voice Search Handler
  const startVoiceSearch = () => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice Search is supported on Chrome, Safari, and Edge browsers!');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      setSearchInput(transcript);
      fetchCityPlaces(transcript);
      fetchCityWeather(transcript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
  };

  const handleSavePlace = async (place: PlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const existing = localStorage.getItem('locallens_saved_places');
      const savedList = existing ? JSON.parse(existing) : [];
      if (!savedList.some((p: any) => p.name === place.name)) {
        savedList.push({
          id: place.id,
          name: place.name,
          city: currentCity,
          category: place.category,
          address: place.address,
          notes: place.description,
          rating: place.rating,
          imageUrl: place.imageUrl,
          favorite: true,
        });
        localStorage.setItem('locallens_saved_places', JSON.stringify(savedList));
      }
    } catch (e) {}

    try {
      await mapsService.saveBookmark({
        name: place.name,
        city: currentCity,
        category: place.category,
        address: place.address,
        notes: place.description,
        rating: place.rating,
        imageUrl: place.imageUrl,
      });
    } catch (err) {}

    setSavedMsg(`"${place.name}" saved to your Wishlist!`);
    setTimeout(() => setSavedMsg(''), 3500);
  };

  const handleSharePlace = (place: PlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(place.googleMapsUrl || window.location.href);
      alert(`Google Maps link for "${place.name}" copied to clipboard!`);
    }
  };

  const handleCalculateRoute = async (mode: 'driving' | 'walking' | 'cycling' | 'transit') => {
    setRouteMode(mode);
    if (!selectedPlace) return;
    try {
      const res = await mapsService.getRoute(currentCity, selectedPlace.name, mode);
      setRouteInfo(res);
    } catch (e) {
      setRouteInfo({
        origin: currentCity,
        destination: selectedPlace.name,
        mode,
        distance: selectedPlace.distance,
        duration: '18 mins',
        fuelEstimate: '1.2 L (₹115)',
        routeSteps: [
          `Head toward ${selectedPlace.name} via Coast Highway`,
          'Turn right at Lighthouse Junction',
          `Arrive at ${selectedPlace.name}`,
        ],
      });
    }
  };

  // Category Filtering
  const filteredPlaces = places.filter((p) => {
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase();
      const pCat = (p.category + ' ' + (p.subCategory || '')).toLowerCase();
      if (catLower === 'hidden gems' && !p.isHiddenGem) return false;
      if (catLower === 'attractions' && !p.isMustVisit && !pCat.includes('attraction')) return false;
      if (!catLower.includes('gems') && !catLower.includes('attraction') && !pCat.includes(catLower)) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-[1850px] mx-auto pb-32 relative font-sans text-slate-100 bg-[#09090B]">
      {/* TOP FLOATING COMMAND SEARCH BAR & SAAS TELEMETRY WIDGETS */}
      <div className="space-y-4">
        {/* Floating Command Search Bar */}
        <div className="p-3.5 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#7C3AED]" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    fetchCityPlaces(searchInput);
                    fetchCityWeather(searchInput);
                  }
                }}
                placeholder="Search any city, landmark, cafe, museum, beach worldwide..."
                className="w-full pl-12 pr-20 py-3.5 rounded-2xl bg-card/60 border border-white/[0.08] text-xs font-bold text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 shadow-inner transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <Command className="w-3 h-3" /> K
              </span>
            </div>

            {/* Voice Search Mic Button */}
            <button
              onClick={startVoiceSearch}
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-center shrink-0 shadow-md ${
                isListening
                  ? 'bg-rose-600 text-white border-rose-400 ring-4 ring-rose-500/30 animate-pulse'
                  : 'bg-[#111827] border-white/[0.08] hover:border-[#7C3AED]/50 text-[#7C3AED]'
              }`}
              title="Voice Search"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                fetchCityPlaces(searchInput);
                fetchCityWeather(searchInput);
              }}
              disabled={loading}
              className="px-7 py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-lg shadow-[#7C3AED]/30 transition-all flex items-center gap-2 shrink-0 hover:scale-105"
            >
              {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              Search
            </button>
          </div>

          {/* Trending Destinations */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> Trending:
            </span>
            {TRENDING_DESTINATIONS.map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSearchInput(city);
                  fetchCityPlaces(city);
                  fetchCityWeather(city);
                }}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold transition-all border whitespace-nowrap ${
                  currentCity.toLowerCase() === city.toLowerCase()
                    ? 'bg-[#7C3AED] text-white border-purple-400 shadow-md'
                    : 'bg-white/[0.04] text-slate-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* TOP SAAS TELEMETRY WIDGETS ROW (Weather, Nearby, Saved, Travel Score, AI Status, Google API) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3.5">
          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Temperature</span>
              <span className="text-xl font-black text-slate-100">{weather?.temp || '24°C'}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sun className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Nearby Places</span>
              <span className="text-xl font-black text-slate-100">154</span>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Compass className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Saved Places</span>
              <span className="text-xl font-black text-slate-100">42</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Bookmark className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Travel Score</span>
              <span className="text-xl font-black text-emerald-400">98/100</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Gemini AI</span>
              <span className="text-xs font-black text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111827]/80 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Google API</span>
              <span className="text-xs font-black text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Connected
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {savedMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-extrabold flex items-center gap-2.5 shadow-xl animate-in fade-in slide-in-from-top-3 backdrop-blur-md">
          <Bookmark className="w-4 h-4 text-emerald-400" />
          {savedMsg}
        </div>
      )}

      {/* FLOATING CATEGORY PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES_WITH_ICONS.map((cat) => {
          const IconComponent = cat.icon;
          const active = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all border whitespace-nowrap shadow-sm flex items-center gap-2 ${
                active
                  ? 'bg-[#7C3AED] text-white border-purple-400 shadow-lg shadow-[#7C3AED]/30 scale-105'
                  : 'bg-[#111827]/80 text-slate-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* V2 DASHBOARD WORKSPACE (LEFT EXPLORER 25% • CENTER HERO MAP 50% • RIGHT APPLE AI SHEET 25%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT SIDEBAR EXPLORER PANEL (3 COLUMNS) */}
        <div className="lg:col-span-3 space-y-3.5 max-h-[820px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
          <div className="flex items-center justify-between text-xs font-black text-slate-400 uppercase tracking-widest px-1">
            <span>Explorer ({filteredPlaces.length})</span>
            <span className="text-[#7C3AED]">{currentCity}</span>
          </div>

          {filteredPlaces.map((place) => {
            const isSelected = selectedPlace?.id === place.id;
            const isHovered = hoveredPlaceId === place.id;
            return (
              <div
                key={place.id}
                onClick={() => setSelectedPlace(place)}
                onMouseEnter={() => setHoveredPlaceId(place.id)}
                onMouseLeave={() => setHoveredPlaceId(null)}
                className={`p-3.5 rounded-3xl bg-[#111827]/90 border shadow-xl cursor-pointer transition-all duration-300 space-y-3 ${
                  isSelected || isHovered
                    ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/40 scale-[1.02] bg-[#111827]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Large Photo Preview */}
                <div className="h-36 rounded-2xl overflow-hidden relative bg-black border border-white/[0.08]">
                  <img src={place.imageUrl} alt={place.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />

                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md text-[11px] font-black text-amber-400 flex items-center gap-1 border border-amber-500/20">
                    ★ {place.rating}
                  </span>

                  {place.isHiddenGem && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-emerald-500/80 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-wider shadow-md">
                      Hidden Gem
                    </span>
                  )}
                  {place.isMustVisit && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-[#7C3AED]/80 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-wider shadow-md">
                      Must Visit
                    </span>
                  )}
                </div>

                {/* Place Info Block */}
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-black text-sm text-slate-100 truncate">{place.name}</h4>
                    <button
                      onClick={(e) => handleSavePlace(place, e)}
                      className="text-slate-400 hover:text-[#7C3AED] transition-colors shrink-0"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[10px] font-extrabold text-slate-400 uppercase truncate">
                    {place.subCategory || place.category}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/[0.08]">
                    <span className="text-slate-400 font-semibold">{place.distance}</span>
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-black">
                      AI Score {place.aiScore || 98}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER HERO INTERACTIVE GOOGLE MAP CANVAS (6 COLUMNS / ~55% WIDTH) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="h-[760px] rounded-[24px] overflow-hidden bg-slate-950 border border-white/[0.08] shadow-2xl relative flex flex-col justify-between p-5">
            <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

            {/* Map Top Floating Glass Controls */}
            <div className="relative z-10 p-3.5 rounded-2xl bg-[#111827]/90 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between text-xs shadow-xl">
              <div className="flex items-center gap-2 text-slate-200 font-black">
                <Search className="w-4 h-4 text-[#7C3AED]" />
                <span>Search Area ({currentCity})</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setMapMode('map')}
                  className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase transition-all ${
                    mapMode === 'map' ? 'bg-[#7C3AED] text-white shadow-lg' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Map
                </button>
                <button
                  onClick={() => setMapMode('satellite')}
                  className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase transition-all ${
                    mapMode === 'satellite' ? 'bg-[#7C3AED] text-white shadow-lg' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Satellite
                </button>
                <button
                  onClick={() => setMapMode('terrain')}
                  className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase transition-all ${
                    mapMode === 'terrain' ? 'bg-[#7C3AED] text-white shadow-lg' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Terrain
                </button>
                <button
                  onClick={() => setTrafficLayer(!trafficLayer)}
                  className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase transition-all ${
                    trafficLayer ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  Traffic
                </button>
              </div>
            </div>

            {/* CUSTOM ANIMATED MAP MARKERS */}
            <div className="relative z-10 grid grid-cols-2 gap-4 my-auto">
              {filteredPlaces.slice(0, 4).map((p) => {
                const isSelected = selectedPlace?.id === p.id;
                const isHovered = hoveredPlaceId === p.id;
                const markerStyle = getMarkerIcon(p.category);

                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlace(p)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl flex items-center gap-3 ${
                      isSelected || isHovered
                        ? 'bg-[#7C3AED]/40 border-[#7C3AED] ring-4 ring-[#7C3AED]/30 scale-105 shadow-2xl'
                        : 'bg-[#111827]/85 border-white/[0.08] hover:border-[#7C3AED]/50'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl border text-base shrink-0 ${markerStyle.bg}`}>
                      {markerStyle.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-black text-slate-100 truncate block">{p.name}</span>
                      <span className="text-[10px] text-amber-400 font-bold">★ {p.rating} • {p.distance}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Footer Glass Controls */}
            <div className="relative z-10 p-3 rounded-2xl bg-[#111827]/90 border border-white/[0.08] backdrop-blur-xl flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <label className="flex items-center gap-2 cursor-pointer font-sans text-xs">
                <input type="checkbox" defaultChecked className="rounded text-[#7C3AED] focus:ring-[#7C3AED]" />
                <span>Live Google Places Sync</span>
              </label>
              <span>Google Maps JavaScript API v3 © 2026</span>
            </div>
          </div>
        </div>

        {/* RIGHT APPLE-STYLE AI INTELLIGENCE SHEET (3 COLUMNS) */}
        <div className="lg:col-span-3">
          <div className="p-6 rounded-3xl bg-[#111827]/90 border border-white/[0.08] shadow-2xl sticky top-6 backdrop-blur-2xl space-y-5">
            {selectedPlace ? (
              <div className="space-y-5">
                {/* Hero Photo Carousel */}
                <div className="h-52 rounded-2xl overflow-hidden relative bg-black border border-white/[0.08] shadow-xl group">
                  <img src={selectedPlace.imageUrl} alt={selectedPlace.name} className="w-full h-full object-cover" />

                  <button
                    onClick={(e) => handleSavePlace(selectedPlace, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:text-rose-400 transition-colors"
                  >
                    <Heart className="w-4.5 h-4.5" />
                  </button>

                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-black text-white">
                    1 / {(selectedPlace.photos?.length || 1) + 15}
                  </span>

                  <button
                    onClick={() => setPhotoModalOpen(true)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-black/70 backdrop-blur-md text-white hover:bg-black transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Title & Ratings */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {selectedPlace.isHiddenGem && (
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase tracking-wider">
                        Hidden Gem
                      </span>
                    )}
                    {selectedPlace.isMustVisit && (
                      <span className="px-2.5 py-0.5 rounded-md bg-[#7C3AED]/20 text-[#7C3AED] text-[9px] font-black uppercase tracking-wider">
                        Must Visit
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-black text-slate-100 leading-snug">{selectedPlace.name}</h2>

                  <div className="flex items-center gap-2 text-xs font-black text-amber-400">
                    <span>★ {selectedPlace.rating}</span>
                    <span className="text-slate-400 font-bold">({selectedPlace.reviewsCount.toLocaleString()} Google Reviews)</span>
                  </div>
                </div>

                {/* GEMINI AI INSIGHTS MATRIX CARDS */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" /> AI Intelligence Matrix
                  </span>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Photography</span>
                      <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights?.photographyScore || '9.6/10'}</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Crowd</span>
                      <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights?.crowdLevel || 'Low'}</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Budget</span>
                      <span className="text-xs font-black text-amber-400">{selectedPlace.priceLevel || '₹₹'}</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Adventure</span>
                      <span className="text-xs font-black text-purple-400">{selectedPlace.aiInsights?.adventureScore || '9.1'}</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Family</span>
                      <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights?.familyFriendly || 'Yes'}</span>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-0.5">
                      <span className="text-[9px] font-extrabold text-slate-400 block">Safety</span>
                      <span className="text-xs font-black text-emerald-400">{selectedPlace.aiInsights?.safetyScore || '9.8'}</span>
                    </div>
                  </div>
                </div>

                {/* Gemini AI Summary */}
                <div className="p-3.5 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 space-y-1">
                  <span className="text-[10px] font-black text-[#7C3AED] uppercase block">Gemini Travel Intelligence</span>
                  <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                    {selectedPlace.aiInsights?.summary || selectedPlace.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => window.open(selectedPlace.googleMapsUrl, '_blank')}
                    className="p-3 rounded-2xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#7C3AED]/30 transition-all col-span-1"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Directions</span>
                  </button>

                  <button
                    onClick={(e) => handleSavePlace(selectedPlace, e)}
                    className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] text-slate-100 font-black text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Bookmark className="w-4 h-4 text-[#7C3AED]" />
                    <span>Save</span>
                  </button>

                  <button
                    onClick={(e) => handleSharePlace(selectedPlace, e)}
                    className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] text-slate-100 font-black text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Share2 className="w-4 h-4 text-purple-400" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: AI RECOMMENDATIONS HORIZONTAL CAROUSEL CARDS */}
      <div className="space-y-3 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#7C3AED]" /> AI Recommended Nearby Places in {currentCity}
          </span>
          <span className="text-[11px] font-bold text-[#7C3AED]">Curated by Gemini AI</span>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-3 scrollbar-none">
          {places.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPlace(item)}
              className="w-72 shrink-0 p-3.5 rounded-3xl bg-[#111827]/90 border border-white/[0.08] hover:border-[#7C3AED]/50 cursor-pointer transition-all hover:scale-105 shadow-xl space-y-2.5"
            >
              <div className="h-32 rounded-2xl overflow-hidden relative bg-black">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-black text-amber-400">
                  ★ {item.rating}
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-xs text-slate-100 truncate">{item.name}</h4>
                <p className="text-[10px] text-slate-400 truncate">{item.address}</p>
                <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold pt-1 border-t border-white/[0.06]">
                  <span>{item.distance}</span>
                  <span>AI Score {item.aiScore || 97}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FLOATING BOTTOM ROUTE PLANNER PANEL */}
      {selectedPlace && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 max-w-4xl w-[92%] z-40">
          <div className="p-4 rounded-3xl bg-[#111827]/95 border border-white/[0.12] shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30">
                <Navigation className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Route Planner</span>
                <span className="text-xs font-black text-slate-100">{currentCity} → {selectedPlace.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCalculateRoute('driving')}
                className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 border transition-all ${
                  routeMode === 'driving' ? 'bg-[#7C3AED] text-white border-purple-400 shadow-md' : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                }`}
              >
                <Car className="w-4 h-4" /> Driving
              </button>
              <button
                onClick={() => handleCalculateRoute('walking')}
                className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 border transition-all ${
                  routeMode === 'walking' ? 'bg-[#7C3AED] text-white border-purple-400 shadow-md' : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                }`}
              >
                <Footprints className="w-4 h-4" /> Walking
              </button>
              <button
                onClick={() => handleCalculateRoute('cycling')}
                className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 border transition-all ${
                  routeMode === 'cycling' ? 'bg-[#7C3AED] text-white border-purple-400 shadow-md' : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                }`}
              >
                <Bike className="w-4 h-4" /> Cycling
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-black">
              <div>
                <span className="text-slate-400 text-[9px] uppercase block">ETA</span>
                <span className="text-purple-300">{routeInfo?.duration || '18 mins'}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] uppercase block">Distance</span>
                <span className="text-emerald-400">{routeInfo?.distance || selectedPlace.distance}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] uppercase block">Fuel Est</span>
                <span className="text-amber-400">{routeInfo?.fuelEstimate || '1.2 L'}</span>
              </div>
              <button
                onClick={() => window.open(selectedPlace.googleMapsUrl, '_blank')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black hover:scale-105 transition-all shadow-md shrink-0"
              >
                Start Navigation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PHOTO LIGHTBOX MODAL */}
      {photoModalOpen && selectedPlace && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full space-y-4 relative">
            <button
              onClick={() => setPhotoModalOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-[540px] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 relative flex items-center justify-center shadow-2xl">
              <img
                src={selectedPlace.photos?.[activePhotoIdx] || selectedPlace.imageUrl}
                alt={selectedPlace.name}
                className="max-h-full max-w-full object-contain"
              />

              <button
                onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : (selectedPlace.photos?.length || 1) - 1))}
                className="absolute left-4 p-3 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setActivePhotoIdx((prev) => (prev + 1) % (selectedPlace.photos?.length || 1))}
                className="absolute right-4 p-3 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center text-slate-300 text-xs font-black">
              {selectedPlace.name} • Photo {activePhotoIdx + 1} of {selectedPlace.photos?.length || 1}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
