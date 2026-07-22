'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import { Compass, MapPin, Calendar, Plus, RefreshCw, Trash2, Eye, Share2, Sparkles, Filter, Search, Clock, CheckCircle2, Bookmark } from 'lucide-react';

interface TripItem {
  _id?: string;
  title: string;
  destination: { name: string } | string;
  startDate?: string;
  endDate?: string;
  status: string;
  travelDays?: number;
  travelStyle?: string;
  generatedResponse?: any;
}

const mockDefaultTrips: TripItem[] = [
  {
    _id: 'trip-1',
    title: '7-Day Experience in Munnar, Kerala',
    destination: { name: 'Munnar, Kerala' },
    startDate: '2026-07-25T00:00:00.000Z',
    endDate: '2026-08-01T00:00:00.000Z',
    status: 'upcoming',
    travelDays: 7,
    travelStyle: 'Heritage & Food',
    generatedResponse: {
      summary: 'A curated 7-day travel experience in Munnar, Kerala tailored for Heritage & Food.',
      itinerary: [
        {
          day: 1,
          title: 'Tea Gardens & Eravikulam National Park Expedition',
          morning: 'Sunrise walk through tea estates & spot endangered Nilgiri Tahr at Eravikulam National Park.',
          afternoon: 'Guided tour of KDHP Tea Museum and tea processing masterclass.',
          evening: 'Golden hour sunset promenade around Mattupetty Lake & Dam.',
          foodSuggestions: ['Saravana Bhavan Kerala Sadya', 'Fresh Cardamom Tea'],
        },
        {
          day: 2,
          title: 'Anamudi Peak Trail & Echo Point Discovery',
          morning: 'Morning trek towards Anamudi Peak vantage points and fresh mountain air walk.',
          afternoon: 'Boating at Kundala Lake & picnic under pine canopy forests.',
          evening: 'Guided spice plantation tour at Echo Point.',
          foodSuggestions: ['Rapsy Restaurant Malabar Parotta', 'Kerala Duck Roast'],
        },
      ],
    },
  },
  {
    _id: 'trip-2',
    title: 'Himalayan Adventure & Ridge Walk',
    destination: { name: 'Shimla, India' },
    startDate: '2026-08-10T00:00:00.000Z',
    endDate: '2026-08-13T00:00:00.000Z',
    status: 'upcoming',
    travelDays: 3,
    travelStyle: 'Relaxed Exploration',
  },
  {
    _id: 'trip-3',
    title: 'Golden Temple & Amritsar Culinary Immersion',
    destination: { name: 'Amritsar, Punjab' },
    startDate: '2026-06-12T00:00:00.000Z',
    endDate: '2026-06-17T00:00:00.000Z',
    status: 'completed',
    travelDays: 5,
    travelStyle: 'Heritage & Food',
  },
  {
    _id: 'trip-4',
    title: 'Kyoto Hidden Temples & Bamboo Forest Walk',
    destination: { name: 'Kyoto, Japan' },
    startDate: '2026-05-01T00:00:00.000Z',
    endDate: '2026-05-06T00:00:00.000Z',
    status: 'completed',
    travelDays: 5,
    travelStyle: 'Hidden Gems Only',
  },
];

export default function TripsPage() {
  const [trips, setTrips] = useState<TripItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTripModal, setSelectedTripModal] = useState<TripItem | null>(null);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const [resRecent, resHistory] = await Promise.all([
        fetch('http://localhost:5050/api/v1/dashboard/recent-trips', {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }),
        fetch('http://localhost:5050/api/v1/planner/history', {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }),
      ]);

      const dataRecent = await resRecent.json();
      const dataHistory = await resHistory.json();

      let combined: TripItem[] = [];

      if (dataRecent.success && Array.isArray(dataRecent.data)) {
        combined = [...combined, ...dataRecent.data];
      }

      if (dataHistory.success && dataHistory.data?.items && Array.isArray(dataHistory.data.items)) {
        const historyItems = dataHistory.data.items.map((item: any) => ({
          _id: item._id,
          title: item.generatedResponse?.tripTitle || `${item.travelDays || 3}-Day Experience in ${item.destination}`,
          destination: { name: item.destination },
          startDate: item.createdAt || new Date().toISOString(),
          status: item.status === 'generated' ? 'upcoming' : item.status,
          travelDays: item.travelDays || 3,
          travelStyle: item.travelStyle || 'Heritage & Food',
          generatedResponse: item.generatedResponse,
        }));
        combined = [...combined, ...historyItems];
      }

      if (combined.length > 0) {
        // Remove duplicates by ID or Title
        const uniqueMap = new Map();
        combined.forEach((t) => {
          const key = t._id || t.title;
          if (!uniqueMap.has(key)) uniqueMap.set(key, t);
        });
        setTrips(Array.from(uniqueMap.values()));
      } else {
        setTrips(mockDefaultTrips);
      }
    } catch (err) {
      console.error('Error fetching trips:', err);
      setTrips(mockDefaultTrips);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrip = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to delete this trip itinerary?')) return;

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5050/api/v1/planner/${id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setTrips((prev) => prev.filter((t) => t._id !== id));
      if (selectedTripModal?._id === id) setSelectedTripModal(null);
    } catch (err) {
      setTrips((prev) => prev.filter((t) => t._id !== id));
    }
  };

  const filteredTrips = trips.filter((trip) => {
    const destName = typeof trip.destination === 'object' ? trip.destination?.name : trip.destination;
    const matchesSearch =
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (destName && destName.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (filter === 'upcoming') return trip.status === 'upcoming' || trip.status === 'generated';
    if (filter === 'completed') return trip.status === 'completed';
    return true;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold border border-primary/30 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Synchronized with Dashboard & AI Engine
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-2">My Trips & Travel Plans</h1>
          <p className="text-xs text-muted-foreground">
            Manage your AI-generated itineraries, planned routes, and saved travel experiences in one place
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchTrips}
            className="p-2.5 rounded-2xl bg-card border border-border/40 hover:bg-muted/40 text-foreground transition-all text-xs font-semibold flex items-center gap-1.5"
            title="Refresh Trips"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-primary' : ''}`} />
          </button>
          <Link
            href="/dashboard/planner"
            className="px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Plan New Trip
          </Link>
        </div>
      </div>

      {/* Summary Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground">Total Trips</span>
          <p className="text-2xl font-black text-foreground">{trips.length}</p>
        </GlassCard>
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-emerald-400">Upcoming</span>
          <p className="text-2xl font-black text-emerald-400">
            {trips.filter((t) => t.status === 'upcoming' || t.status === 'generated').length}
          </p>
        </GlassCard>
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-indigo-400">Completed</span>
          <p className="text-2xl font-black text-indigo-400">
            {trips.filter((t) => t.status === 'completed').length}
          </p>
        </GlassCard>
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-amber-400">Destinations</span>
          <p className="text-2xl font-black text-amber-400">
            {new Set(trips.map((t) => (typeof t.destination === 'object' ? t.destination?.name : t.destination))).size}
          </p>
        </GlassCard>
      </div>

      {/* Search & Filter Bar */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trips or destinations..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {['all', 'upcoming', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-xl text-xs font-extrabold capitalize transition-all ${
                filter === tab
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted/20 hover:bg-muted/40 text-muted-foreground'
              }`}
            >
              {tab === 'all' ? 'All Trips' : tab}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Trips Grid */}
      {filteredTrips.length === 0 ? (
        <GlassCard hoverEffect={false} className="p-12 text-center space-y-4 border-border/40 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-foreground">No Trips Found</h3>
            <p className="text-xs text-muted-foreground">
              Try adjusting your search query or generate a new trip using our AI Planner.
            </p>
          </div>
          <Link
            href="/dashboard/planner"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs"
          >
            <Sparkles className="w-4 h-4" /> Create AI Itinerary
          </Link>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTrips.map((trip) => {
            const destName = typeof trip.destination === 'object' ? trip.destination?.name : trip.destination;
            const isUpcoming = trip.status === 'upcoming' || trip.status === 'generated';

            return (
              <GlassCard
                key={trip._id || trip.title}
                hoverEffect={true}
                className="p-6 border-border/40 shadow-xl flex flex-col justify-between space-y-5 relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        isUpcoming
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      {isUpcoming ? 'Upcoming' : 'Completed'}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => handleDeleteTrip(trip._id || '', e)}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                        title="Delete Trip"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {trip.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold">{destName || 'Shimla, India'}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/20 text-xs">
                    {trip.travelDays && (
                      <span className="px-2.5 py-1 rounded-lg bg-muted/30 border border-border/30 text-muted-foreground font-mono">
                        <Clock className="w-3 h-3 inline mr-1 text-primary" />
                        {trip.travelDays} Days
                      </span>
                    )}
                    {trip.travelStyle && (
                      <span className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary font-mono font-bold">
                        {trip.travelStyle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1" suppressHydrationWarning>
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    {trip.startDate ? new Date(trip.startDate).toLocaleDateString('en-US') : 'Jul 25, 2026'}
                  </span>

                  <button
                    onClick={() => setSelectedTripModal(trip)}
                    className="px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-extrabold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" /> View Itinerary
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* Modal Drawer to View Full Itinerary */}
      {selectedTripModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-border/30 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">AI Travel Itinerary</span>
                <h2 className="text-xl font-extrabold text-foreground">{selectedTripModal.title}</h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {typeof selectedTripModal.destination === 'object'
                    ? selectedTripModal.destination?.name
                    : selectedTripModal.destination}
                </p>
              </div>
              <button
                onClick={() => setSelectedTripModal(null)}
                className="px-3 py-1.5 rounded-full bg-muted/30 text-xs font-bold text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>

            {selectedTripModal.generatedResponse?.itinerary ? (
              <div className="space-y-4">
                {selectedTripModal.generatedResponse.itinerary.map((dayItem: any) => (
                  <div key={dayItem.day} className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>Day {dayItem.day}</span>
                      <span className="text-foreground">• {dayItem.title}</span>
                    </div>
                    <div className="text-xs text-muted-foreground pl-3 border-l-2 border-primary/30 space-y-1">
                      {dayItem.morning && <p><strong className="text-foreground">Morning:</strong> {dayItem.morning}</p>}
                      {dayItem.afternoon && <p><strong className="text-foreground">Afternoon:</strong> {dayItem.afternoon}</p>}
                      {dayItem.evening && <p><strong className="text-foreground">Evening:</strong> {dayItem.evening}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-muted/20 text-center space-y-2">
                <Compass className="w-8 h-8 text-primary mx-auto" />
                <p className="text-xs text-muted-foreground">Standard Itinerary Details generated by LocalLens AI Engine.</p>
              </div>
            )}

            <div className="pt-4 border-t border-border/30 flex justify-end">
              <button
                onClick={() => setSelectedTripModal(null)}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
