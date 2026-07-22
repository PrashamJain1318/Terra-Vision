'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import { Bookmark, MapPin, Star, Plus, Trash2, Heart, ExternalLink, Search, RefreshCw, Compass, Sparkles, Navigation, Utensils, Landmark, Mountain } from 'lucide-react';

interface SavedPlaceItem {
  _id?: string;
  name: string;
  category: string;
  city?: string;
  address?: string;
  coordinates?: { lat: number; lng: number };
  notes?: string;
  imageUrl?: string;
  rating?: number;
  reviewsCount?: number;
  favorite?: boolean;
}

const mockDefaultPlaces: SavedPlaceItem[] = [
  {
    _id: 'place-1',
    name: 'Cafe Simla Times',
    category: 'Cafes & Dining',
    city: 'Shimla, HP, India',
    address: 'Mall Road, Shimla, HP 171001',
    coordinates: { lat: 31.1048, lng: 77.1734 },
    notes: 'Best rooftop sunset view over Shimla hills. Try their wood-fired pizza & spiced cardamom mocha.',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviewsCount: 342,
    favorite: true,
  },
  {
    _id: 'place-2',
    name: 'KDHP Tea Museum & Factory',
    category: 'Hidden Gems',
    city: 'Munnar, Kerala',
    address: 'Nullatanni Estate, Munnar, Kerala 685612',
    coordinates: { lat: 10.0889, lng: 77.0597 },
    notes: 'Historical 19th-century tea processing machinery demonstration. Fresh cardamom tea tasting on-site.',
    imageUrl: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 890,
    favorite: true,
  },
  {
    _id: 'place-3',
    name: 'Kesar Da Dhaba',
    category: 'Cafes & Dining',
    city: 'Amritsar, Punjab',
    address: 'Chowk Passian, Shastri Market, Amritsar, Punjab 143001',
    coordinates: { lat: 31.62, lng: 74.8765 },
    notes: 'Legendary 100-year-old culinary institution. Signature slow-cooked Dal Makhani & Lachha Paratha.',
    imageUrl: 'https://images.unsplash.com/photo-1588097281266-310cead47879?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 1540,
    favorite: false,
  },
  {
    _id: 'place-4',
    name: 'Otagi Nenbutsu-ji Temple',
    category: 'Heritage Sites',
    city: 'Kyoto, Japan',
    address: '2-5 Sagatoriimoto Fukatanicho, Ukyo Ward, Kyoto',
    coordinates: { lat: 35.029, lng: 135.666 },
    notes: 'Serene moss temple filled with 1200 whimsical carved stone Rakan statues nestled in bamboo groves.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviewsCount: 620,
    favorite: true,
  },
  {
    _id: 'place-5',
    name: 'Mattupetty Dam & Lake Viewpoint',
    category: 'Scenic Viewpoints',
    city: 'Munnar, Kerala',
    address: 'Mattupetty, Munnar Top Station Highway',
    coordinates: { lat: 10.105, lng: 77.123 },
    notes: 'Panoramic lake reflections surrounded by Nilgiri tea hills. Ideal for golden hour photography.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviewsCount: 410,
    favorite: false,
  },
];

export default function SavedPage() {
  const [places, setPlaces] = useState<SavedPlaceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modal State
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('Munnar, Kerala');
  const [newCategory, setNewCategory] = useState('Cafes & Dining');
  const [newAddress, setNewAddress] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newRating, setNewRating] = useState('4.8');

  useEffect(() => {
    fetchSavedPlaces();
  }, []);

  const fetchSavedPlaces = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/maps/saved', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPlaces(data.data);
      } else {
        setPlaces(mockDefaultPlaces);
      }
    } catch (err) {
      console.error('Error fetching saved places:', err);
      setPlaces(mockDefaultPlaces);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFavorite = async (place: SavedPlaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedFav = !place.favorite;

    setPlaces((prev) =>
      prev.map((p) => (p._id === place._id ? { ...p, favorite: updatedFav } : p))
    );

    if (place._id) {
      try {
        const token = localStorage.getItem('token');
        await fetch(`http://localhost:5050/api/v1/maps/saved/${place._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ favorite: updatedFav }),
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDeletePlace = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to remove this place from your bookmarks?')) return;

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5050/api/v1/maps/saved/${id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setPlaces((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setPlaces((prev) => prev.filter((p) => p._id !== id));
    }
  };

  const handleAddPlaceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newPlacePayload: SavedPlaceItem = {
      name: newName,
      city: newCity,
      category: newCategory,
      address: newAddress || `${newCity}`,
      notes: newNotes,
      imageUrl: newImageUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      rating: parseFloat(newRating) || 4.8,
      reviewsCount: 140,
      favorite: true,
      coordinates: { lat: 31.1048, lng: 77.1734 },
    };

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/maps/saved', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(newPlacePayload),
      });
      const data = await res.json();

      if (data.success && data.data) {
        setPlaces((prev) => [data.data, ...prev]);
      } else {
        setPlaces((prev) => [{ ...newPlacePayload, _id: `place-${Date.now()}` }, ...prev]);
      }
    } catch (err) {
      setPlaces((prev) => [{ ...newPlacePayload, _id: `place-${Date.now()}` }, ...prev]);
    } finally {
      setAddModalOpen(false);
      setNewName('');
      setNewAddress('');
      setNewNotes('');
      setNewImageUrl('');
    }
  };

  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (place.city && place.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (place.address && place.address.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (categoryFilter === 'favorites') return place.favorite;
    if (categoryFilter === 'cafes') return place.category.toLowerCase().includes('cafe') || place.category.toLowerCase().includes('dining');
    if (categoryFilter === 'heritage') return place.category.toLowerCase().includes('heritage');
    if (categoryFilter === 'gems') return place.category.toLowerCase().includes('gem');
    if (categoryFilter === 'scenic') return place.category.toLowerCase().includes('scenic');

    return true;
  });

  const totalFavorites = places.filter((p) => p.favorite).length;

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold border border-primary/30 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Spatial Map Sync Connected
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-2">Saved Places & Bookmarks</h1>
          <p className="text-xs text-muted-foreground">
            Your personal travel wishlist of bookmarked hidden gems, cafes, heritage monuments, and scenic viewpoints
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Bookmark New Place
          </button>
          <Link
            href="/dashboard/maps"
            className="px-4 py-2.5 rounded-2xl bg-card border border-border/40 hover:bg-muted/40 text-foreground font-extrabold text-xs transition-all flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-primary" /> Explore Map
          </Link>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground">Total Bookmarks</span>
          <p className="text-2xl font-black text-foreground">{places.length}</p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-rose-400 flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-rose-400" /> Favorites
          </span>
          <p className="text-2xl font-black text-rose-400">{totalFavorites}</p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-amber-400 flex items-center gap-1">
            <Utensils className="w-3.5 h-3.5" /> Cafes & Dining
          </span>
          <p className="text-2xl font-black text-amber-400">
            {places.filter((p) => p.category.toLowerCase().includes('cafe') || p.category.toLowerCase().includes('dining')).length}
          </p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-indigo-400 flex items-center gap-1">
            <Landmark className="w-3.5 h-3.5" /> Heritage & Gems
          </span>
          <p className="text-2xl font-black text-indigo-400">
            {places.filter((p) => p.category.toLowerCase().includes('heritage') || p.category.toLowerCase().includes('gem')).length}
          </p>
        </GlassCard>
      </div>

      {/* Search & Filter Controls */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search places, cities, or address..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Places' },
            { id: 'favorites', label: '❤️ Favorites' },
            { id: 'cafes', label: 'Cafes & Dining' },
            { id: 'heritage', label: 'Heritage Sites' },
            { id: 'gems', label: 'Hidden Gems' },
            { id: 'scenic', label: 'Scenic Viewpoints' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                categoryFilter === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted/20 hover:bg-muted/40 text-muted-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Places Cards Grid */}
      {filteredPlaces.length === 0 ? (
        <GlassCard hoverEffect={false} className="p-12 text-center space-y-4 border-border/40 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-foreground">No Saved Places Match Filter</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Bookmark your favorite spots while exploring interactive maps or create a new bookmark manually!
            </p>
          </div>
          <button
            onClick={() => setAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs"
          >
            <Plus className="w-4 h-4" /> Bookmark New Place
          </button>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => {
            const cover = place.imageUrl || 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80';

            return (
              <GlassCard
                key={place._id || place.name}
                hoverEffect={true}
                className="p-0 overflow-hidden border-border/40 shadow-xl flex flex-col justify-between group relative"
              >
                {/* Image Cover */}
                <div className="relative h-44 w-full bg-muted overflow-hidden">
                  <img
                    src={cover}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-[10px] font-extrabold text-primary uppercase">
                      {place.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleToggleFavorite(place, e)}
                        className={`p-1.5 rounded-full backdrop-blur-md transition-all ${
                          place.favorite
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : 'bg-black/50 text-white/70 hover:text-rose-400'
                        }`}
                        title="Toggle Favorite"
                      >
                        <Heart className={`w-3.5 h-3.5 ${place.favorite ? 'fill-rose-400' : ''}`} />
                      </button>

                      <button
                        onClick={(e) => handleDeletePlace(place._id || '', e)}
                        className="p-1.5 rounded-full bg-black/50 text-white/70 hover:text-rose-400 hover:bg-rose-500/20 backdrop-blur-md transition-colors"
                        title="Delete Bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-lg text-amber-400 text-xs font-bold backdrop-blur-md">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{place.rating || 4.8}</span>
                    <span className="text-muted-foreground text-[10px]">({place.reviewsCount || 120})</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {place.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold">{place.city || place.address}</span>
                    </div>

                    {place.notes && (
                      <div className="p-3 rounded-xl bg-muted/20 border border-border/30 text-xs text-muted-foreground italic leading-relaxed mt-2">
                        "{place.notes}"
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-border/30 flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-muted-foreground truncate max-w-[150px]">
                      {place.address}
                    </span>

                    <Link
                      href={`/dashboard/maps?lat=${place.coordinates?.lat || 31.1048}&lng=${place.coordinates?.lng || 77.1734}`}
                      className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-extrabold text-xs flex items-center gap-1 transition-all"
                    >
                      Open Map
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* ADD BOOKMARK MODAL */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">Spatial Bookmark</span>
                <h2 className="text-lg font-extrabold text-foreground">Save New Place</h2>
              </div>
              <button
                onClick={() => setAddModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-muted/40 text-muted-foreground"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddPlaceSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Place Name</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Saravana Bhavan Kerala Sadya"
                  className="w-full px-3.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">City / Region</label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="Munnar, Kerala"
                    className="w-full px-3.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                  >
                    <option value="Cafes & Dining">Cafes & Dining</option>
                    <option value="Heritage Sites">Heritage Sites</option>
                    <option value="Hidden Gems">Hidden Gems</option>
                    <option value="Scenic Viewpoints">Scenic Viewpoints</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Address / Location</label>
                <input
                  type="text"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Street Address or Mall Road..."
                  className="w-full px-3.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Personal Notes</label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Why did you bookmark this spot?"
                  className="w-full px-3.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Cover Image URL (Optional)</label>
                <input
                  type="url"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-border/30 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-muted/30 text-xs font-extrabold text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs shadow-md"
                >
                  Save Bookmark
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
