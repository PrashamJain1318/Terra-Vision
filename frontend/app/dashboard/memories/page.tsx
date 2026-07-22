'use client';

import React, { useState, useEffect, useRef } from 'react';
import GlassCard from '@/components/common/GlassCard';
import { Camera, Video, Mic, Plus, Trash2, Eye, Sparkles, MapPin, Calendar, Search, Music, Film, Image as ImageIcon, Play, Pause, X, Upload, CheckCircle2 } from 'lucide-react';

interface MediaAsset {
  url: string;
  name: string;
  type: 'image' | 'video' | 'audio';
}

interface MemoryItem {
  _id?: string;
  title: string;
  destination: string;
  description?: string;
  category?: string;
  date?: string;
  media: MediaAsset[];
  tripId?: string;
}

const mockDefaultMemories: MemoryItem[] = [
  {
    _id: 'mem-1',
    title: 'Golden Hour over Tea Gardens & Mattupetty Dam',
    destination: 'Munnar, Kerala',
    description: 'Captured breathtaking sunset rays over Nilgiri tea hills. Listened to birds chirping while sipping cardamom chai.',
    category: 'Scenic Views',
    date: '2026-07-22T14:00:00.000Z',
    media: [
      {
        url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
        name: 'munnar_tea_hills.jpg',
        type: 'image',
      },
      {
        url: 'https://assets.mixkit.co/videos/preview/mixkit-landscape-of-mountains-and-sun-4112-large.mp4',
        name: 'sunset_valley.mp4',
        type: 'video',
      },
    ],
  },
  {
    _id: 'mem-2',
    title: 'Spiritual Evening Langar & Sacred Sarovar Darshan',
    destination: 'Amritsar, Punjab',
    description: 'Volunteered at Guru Ka Langar community kitchen. The atmosphere was peaceful and deeply inspiring.',
    category: 'Cultural Fest',
    date: '2026-06-12T18:30:00.000Z',
    media: [
      {
        url: 'https://images.unsplash.com/photo-1588097281266-310cead47879?auto=format&fit=crop&w=800&q=80',
        name: 'golden_temple_night.jpg',
        type: 'image',
      },
    ],
  },
  {
    _id: 'mem-3',
    title: 'Snow Peak Sunset & Pine Forest Ridge Trail',
    destination: 'Shimla, Himachal',
    description: 'Crisp mountain air, hot clay tandoor tea, and panoramic views of Himalayan peaks.',
    category: 'Sunset/Sunrise',
    date: '2026-05-10T11:20:00.000Z',
    media: [
      {
        url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        name: 'shimla_pines.jpg',
        type: 'image',
      },
    ],
  },
];

export default function MemoriesPage() {
  const [memories, setMemories] = useState<MemoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [mediaFilter, setMediaFilter] = useState<'all' | 'image' | 'video' | 'audio'>('all');
  
  // Modals state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [selectedLightboxMemory, setSelectedLightboxMemory] = useState<MemoryItem | null>(null);

  // New Memory Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDestination, setNewDestination] = useState('Munnar, Kerala');
  const [newDescription, setNewDescription] = useState('');
  const [newCategory, setNewCategory] = useState('Scenic Views');
  const [stagedMedia, setStagedMedia] = useState<MediaAsset[]>([]);

  // Voice recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/memory/all', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setMemories(data.data);
      } else {
        setMemories(mockDefaultMemories);
      }
    } catch (err) {
      console.error(err);
      setMemories(mockDefaultMemories);
    } finally {
      setLoading(false);
    }
  };

  // Handle File Pickers for Images, Videos, Audios
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video' | 'audio') => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const objectUrl = URL.createObjectURL(file);
      setStagedMedia((prev) => [
        ...prev,
        {
          url: objectUrl,
          name: file.name,
          type,
        },
      ]);
    });
  };

  // Live Audio Microphone Voice Recorder
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      const chunks: Blob[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(blob);
        setStagedMedia((prev) => [
          ...prev,
          {
            url: audioUrl,
            name: `Voice_Note_${new Date().toLocaleTimeString()}.mp3`,
            type: 'audio',
          },
        ]);
        stream.getTracks().forEach((track) => track.stop());
      };

      recorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert('Microphone access permission required to record voice notes.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
    }
  };

  const handleCreateMemorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const memoryPayload: MemoryItem = {
      title: newTitle,
      destination: newDestination,
      description: newDescription,
      category: newCategory,
      date: new Date().toISOString(),
      media: stagedMedia.length > 0 ? stagedMedia : [
        {
          url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
          name: 'travel_memory.jpg',
          type: 'image',
        },
      ],
    };

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/memory/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(memoryPayload),
      });
      const data = await res.json();

      if (data.success && data.data) {
        setMemories((prev) => [data.data, ...prev]);
      } else {
        setMemories((prev) => [{ ...memoryPayload, _id: `mem-${Date.now()}` }, ...prev]);
      }
    } catch (err) {
      setMemories((prev) => [{ ...memoryPayload, _id: `mem-${Date.now()}` }, ...prev]);
    } finally {
      setCreateModalOpen(false);
      setNewTitle('');
      setNewDescription('');
      setStagedMedia([]);
    }
  };

  const handleDeleteMemory = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Are you sure you want to delete this memory capsule?')) return;

    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:5050/api/v1/memory/${id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setMemories((prev) => prev.filter((m) => m._id !== id));
      if (selectedLightboxMemory?._id === id) setSelectedLightboxMemory(null);
    } catch (err) {
      setMemories((prev) => prev.filter((m) => m._id !== id));
    }
  };

  // Filter Memories
  const filteredMemories = memories.filter((mem) => {
    const matchesSearch =
      mem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mem.destination.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (mediaFilter === 'image') return mem.media.some((m) => m.type === 'image');
    if (mediaFilter === 'video') return mem.media.some((m) => m.type === 'video');
    if (mediaFilter === 'audio') return mem.media.some((m) => m.type === 'audio');

    return true;
  });

  // Calculate Media Stats
  const totalPhotos = memories.reduce((acc, m) => acc + m.media.filter((asset) => asset.type === 'image').length, 0);
  const totalVideos = memories.reduce((acc, m) => acc + m.media.filter((asset) => asset.type === 'video').length, 0);
  const totalAudio = memories.reduce((acc, m) => acc + m.media.filter((asset) => asset.type === 'audio').length, 0);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-extrabold border border-primary/30 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> High-Res Media Vault & AI Journal Connected
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-2">Personal Travel Hub & AI Journal</h1>
          <p className="text-xs text-muted-foreground">
            Automated daily timelines, AI trip journals, visited country badges, and high-res memory vaults
          </p>
        </div>

        <button
          onClick={() => setCreateModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white font-extrabold text-xs shadow-xl shadow-primary/25 hover:opacity-90 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Memory Capsule
        </button>
      </div>

      {/* Explorer Level & Travel Stats Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-zinc-950 via-emerald-950/30 to-zinc-950 border border-emerald-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-extrabold text-emerald-400">Level 7 World Explorer</span>
              <h2 className="text-xl font-black text-white">Prasham Jain</h2>
              <p className="text-xs text-zinc-400">14 Countries Visited • 38 Cities • 12,450 km Traveled</p>
            </div>
          </div>

          <div className="w-full sm:w-48 space-y-1">
            <div className="flex justify-between text-[11px] font-mono text-zinc-400">
              <span>XP Progress</span>
              <span className="text-emerald-400 font-bold">4,850 / 5,000</span>
            </div>
            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[97%]" />
            </div>
          </div>
        </div>

        {/* AI Travel Journal Automated Writer Box */}
        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Automated AI Travel Journal
            </span>
            <span>Today • 29°C Pleasant</span>
          </div>
          <p className="text-xs text-zinc-200 leading-relaxed italic">
            "Today you explored Fort Aguada. The weather was pleasant with temperatures around 29°C. You visited three attractions and covered approximately 12 km. Your favorite stop appears to have been Sinquerim Beach."
          </p>
        </div>

        {/* Smart Travel Timeline Widget */}
        <div className="space-y-2 pt-2 border-t border-zinc-800/80">
          <span className="text-[10px] font-mono uppercase font-bold text-zinc-400">Smart Daily Timeline</span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
              <span className="text-[10px] text-emerald-400 font-mono block">7:30 AM</span>
              <span className="font-bold text-white">Breakfast</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
              <span className="text-[10px] text-emerald-400 font-mono block">9:00 AM</span>
              <span className="font-bold text-white">Museum</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
              <span className="text-[10px] text-emerald-400 font-mono block">12:00 PM</span>
              <span className="font-bold text-white">Lunch</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
              <span className="text-[10px] text-emerald-400 font-mono block">2:00 PM</span>
              <span className="font-bold text-white">Beach</span>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-emerald-400 font-mono block">6:00 PM</span>
              <span className="font-bold text-white">Sunset Point</span>
            </div>
          </div>
        </div>
      </div>

      {/* Media Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-muted-foreground">Total Capsules</span>
          <p className="text-2xl font-black text-foreground">{memories.length}</p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-emerald-400 flex items-center gap-1">
            <ImageIcon className="w-3.5 h-3.5" /> Photos Vault
          </span>
          <p className="text-2xl font-black text-emerald-400">{totalPhotos}</p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-indigo-400 flex items-center gap-1">
            <Film className="w-3.5 h-3.5" /> Video Reels
          </span>
          <p className="text-2xl font-black text-indigo-400">{totalVideos}</p>
        </GlassCard>

        <GlassCard hoverEffect={false} className="p-4 space-y-1 border-border/30">
          <span className="text-[10px] font-extrabold uppercase text-amber-400 flex items-center gap-1">
            <Mic className="w-3.5 h-3.5" /> Voice Notes
          </span>
          <p className="text-2xl font-black text-amber-400">{totalAudio}</p>
        </GlassCard>
      </div>

      {/* Filter & Search Controls */}
      <GlassCard hoverEffect={false} className="p-4 border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search memory titles or cities..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Media', icon: Sparkles },
            { id: 'image', label: 'Photos', icon: ImageIcon },
            { id: 'video', label: 'Videos', icon: Film },
            { id: 'audio', label: 'Voice Notes', icon: Mic },
          ].map((item) => {
            const Icon = item.icon;
            const active = mediaFilter === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setMediaFilter(item.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted/20 hover:bg-muted/40 text-muted-foreground'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* Memories Grid */}
      {filteredMemories.length === 0 ? (
        <GlassCard hoverEffect={false} className="p-12 text-center space-y-4 border-border/40 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Camera className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-foreground">No Memory Capsules Found</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Start building your travel memory vault by uploading photos, video reels, or recording audio notes!
            </p>
          </div>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs"
          >
            <Plus className="w-4 h-4" /> Add Memory Capsule
          </button>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((memory) => {
            const coverImage = memory.media.find((m) => m.type === 'image')?.url || 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80';
            const hasVideo = memory.media.some((m) => m.type === 'video');
            const hasAudio = memory.media.some((m) => m.type === 'audio');

            return (
              <GlassCard
                key={memory._id || memory.title}
                hoverEffect={true}
                className="p-0 overflow-hidden border-border/40 shadow-xl flex flex-col justify-between group relative"
              >
                {/* Media Cover Header */}
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <img
                    src={coverImage}
                    alt={memory.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-[10px] font-extrabold text-primary uppercase">
                      {memory.category || 'Scenic Views'}
                    </span>

                    <button
                      onClick={(e) => handleDeleteMemory(memory._id || '', e)}
                      className="p-1.5 rounded-full bg-black/50 text-white/80 hover:text-rose-400 hover:bg-rose-500/20 backdrop-blur-md transition-colors"
                      title="Delete Memory"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Media Type Badges */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    {memory.media.some((m) => m.type === 'image') && (
                      <span className="p-1 rounded-lg bg-black/60 text-emerald-400 backdrop-blur-md text-[10px] font-bold flex items-center gap-1 px-2">
                        <ImageIcon className="w-3 h-3" /> Photo
                      </span>
                    )}
                    {hasVideo && (
                      <span className="p-1 rounded-lg bg-black/60 text-indigo-400 backdrop-blur-md text-[10px] font-bold flex items-center gap-1 px-2">
                        <Film className="w-3 h-3" /> Video
                      </span>
                    )}
                    {hasAudio && (
                      <span className="p-1 rounded-lg bg-black/60 text-amber-400 backdrop-blur-md text-[10px] font-bold flex items-center gap-1 px-2">
                        <Mic className="w-3 h-3" /> Voice Note
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {memory.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold">{memory.destination}</span>
                    </div>
                    {memory.description && (
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed pt-1">
                        {memory.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-border/30 flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-semibold text-muted-foreground flex items-center gap-1" suppressHydrationWarning>
                      <Calendar className="w-3 h-3" />
                      {memory.date ? new Date(memory.date).toLocaleDateString('en-US') : 'Jul 22, 2026'}
                    </span>

                    <button
                      onClick={() => setSelectedLightboxMemory(memory)}
                      className="px-3 py-1.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-extrabold text-xs flex items-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" /> Inspect Media
                    </button>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {/* CREATE MEMORY MODAL WITH MEDIA UPLOAD & VOICE RECORDER */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-border/30 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">New Travel Memory</span>
                <h2 className="text-xl font-extrabold text-foreground">Create Memory Capsule</h2>
              </div>
              <button
                onClick={() => setCreateModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted/40 text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateMemorySubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Memory Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Golden Hour at Mattupetty Dam"
                  className="w-full px-4 py-2.5 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary/60"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Destination</label>
                  <input
                    type="text"
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)}
                    placeholder="City or Location..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
                  >
                    <option value="Scenic Views">Scenic Views</option>
                    <option value="Food & Feast">Food & Feast</option>
                    <option value="Cultural Fest">Cultural Fest</option>
                    <option value="Sunset/Sunrise">Sunset/Sunrise</option>
                    <option value="Hidden Gem">Hidden Gem</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Story & Journal Notes</label>
                <textarea
                  rows={3}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe your feelings, sights, and personal experience..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none resize-none"
                />
              </div>

              {/* MEDIA ATTACHMENTS ENGINE */}
              <div className="space-y-3 pt-2 border-t border-border/30">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                  Attach Media Assets (Photos, Videos, Voice Recordings)
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {/* Photo File Picker */}
                  <label className="p-3 rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 cursor-pointer text-center space-y-1 transition-all">
                    <ImageIcon className="w-5 h-5 text-emerald-400 mx-auto" />
                    <span className="text-[10px] font-bold text-emerald-400 block">+ Photos</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'image')}
                    />
                  </label>

                  {/* Video File Picker */}
                  <label className="p-3 rounded-2xl border border-dashed border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer text-center space-y-1 transition-all">
                    <Film className="w-5 h-5 text-indigo-400 mx-auto" />
                    <span className="text-[10px] font-bold text-indigo-400 block">+ Videos</span>
                    <input
                      type="file"
                      accept="video/*"
                      multiple
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'video')}
                    />
                  </label>

                  {/* Audio Microphone Voice Recorder */}
                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`p-3 rounded-2xl border border-dashed text-center space-y-1 transition-all ${
                      isRecording
                        ? 'border-rose-500/60 bg-rose-500/20 text-rose-400 animate-pulse'
                        : 'border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400'
                    }`}
                  >
                    <Mic className="w-5 h-5 mx-auto" />
                    <span className="text-[10px] font-bold block">
                      {isRecording ? `Recording (${recordingTime}s)` : '+ Record Voice'}
                    </span>
                  </button>
                </div>

                {/* Staged Media Preview Assets */}
                {stagedMedia.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                      Attached Media ({stagedMedia.length}):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {stagedMedia.map((asset, idx) => (
                        <div
                          key={idx}
                          className="px-2.5 py-1 rounded-xl bg-muted/40 border border-border/40 text-[11px] font-mono flex items-center gap-1.5 text-foreground"
                        >
                          {asset.type === 'image' && <ImageIcon className="w-3 h-3 text-emerald-400" />}
                          {asset.type === 'video' && <Film className="w-3 h-3 text-indigo-400" />}
                          {asset.type === 'audio' && <Mic className="w-3 h-3 text-amber-400" />}
                          <span className="truncate max-w-[120px]">{asset.name}</span>
                          <button
                            type="button"
                            onClick={() => setStagedMedia((prev) => prev.filter((_, i) => i !== idx))}
                            className="text-muted-foreground hover:text-rose-400"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border/30 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2.5 rounded-2xl bg-muted/30 text-xs font-extrabold text-muted-foreground hover:text-foreground"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20"
                >
                  Save Memory Capsule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FULL SCREEN LIGHTBOX MEDIA INSPECTOR MODAL */}
      {selectedLightboxMemory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-card border border-border/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between border-b border-border/30 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-primary tracking-wider">Memory Capsule Vault</span>
                <h2 className="text-xl font-extrabold text-foreground">{selectedLightboxMemory.title}</h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {selectedLightboxMemory.destination}
                </p>
              </div>
              <button
                onClick={() => setSelectedLightboxMemory(null)}
                className="p-2 rounded-full hover:bg-muted/40 text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Assets Display Vault */}
            <div className="space-y-6">
              {selectedLightboxMemory.media.map((asset, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    {asset.type === 'image' && <ImageIcon className="w-4 h-4 text-emerald-400" />}
                    {asset.type === 'video' && <Film className="w-4 h-4 text-indigo-400" />}
                    {asset.type === 'audio' && <Mic className="w-4 h-4 text-amber-400" />}
                    <span>{asset.name || `${asset.type.toUpperCase()} Asset #${idx + 1}`}</span>
                  </div>

                  {asset.type === 'image' && (
                    <div className="rounded-2xl overflow-hidden border border-border/40 bg-black">
                      <img src={asset.url} alt={asset.name} className="w-full max-h-[400px] object-contain mx-auto" />
                    </div>
                  )}

                  {asset.type === 'video' && (
                    <div className="rounded-2xl overflow-hidden border border-border/40 bg-black">
                      <video src={asset.url} controls className="w-full max-h-[400px] object-contain mx-auto" />
                    </div>
                  )}

                  {asset.type === 'audio' && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3">
                      <Mic className="w-6 h-6 text-amber-400 animate-pulse" />
                      <audio src={asset.url} controls className="w-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {selectedLightboxMemory.description && (
              <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 space-y-1">
                <span className="text-[10px] font-extrabold uppercase text-muted-foreground">Personal Journal Notes:</span>
                <p className="text-xs text-foreground leading-relaxed">{selectedLightboxMemory.description}</p>
              </div>
            )}

            <div className="pt-4 border-t border-border/30 flex justify-end">
              <button
                onClick={() => setSelectedLightboxMemory(null)}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs"
              >
                Close Vault
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
