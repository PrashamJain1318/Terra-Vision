'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Image as ImageIcon, Film, Mic, MapPin } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface MediaAsset {
  url: string;
  name: string;
  type: 'image' | 'video' | 'audio';
}

interface MemoryItem {
  _id?: string;
  title: string;
  destination?: string;
  description?: string;
  category?: string;
  media?: MediaAsset[];
}

const defaultMemories: MemoryItem[] = [
  {
    title: 'Golden Hour over Tea Gardens & Mattupetty Dam',
    destination: 'Munnar, Kerala',
    description: 'Captured breathtaking sunset rays over Nilgiri tea hills.',
    category: 'Scenic Views',
  },
  {
    title: 'Spiritual Evening Langar Darshan',
    destination: 'Amritsar, Punjab',
    description: 'Volunteered at Guru Ka Langar community kitchen.',
    category: 'Cultural Fest',
  },
];

export const RecentMemoriesWidget = ({ memories: initialMemories }: { memories?: MemoryItem[] | null }) => {
  const [memories, setMemories] = useState<MemoryItem[]>(initialMemories && initialMemories.length > 0 ? initialMemories : defaultMemories);

  useEffect(() => {
    fetchRecentMemories();
  }, []);

  const fetchRecentMemories = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5050/api/v1/memory/all', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setMemories(data.data);
      }
    } catch (e) {
      console.log('Using default memories fallback for widget');
    }
  };

  return (
    <GlassCard hoverEffect={false} className="space-y-4 border-border/40 shadow-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-primary" /> Travel Memories Vault
        </h3>
        <Link
          href="/dashboard/memories"
          className="text-xs text-primary hover:underline font-extrabold flex items-center gap-1"
        >
          View Gallery ({memories.length})
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {memories.length === 0 ? (
        <div className="text-center py-6">
          <Camera className="w-8 h-8 text-muted-foreground mx-auto opacity-50 mb-2" />
          <p className="text-xs text-muted-foreground">No memories recorded yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {memories.slice(0, 3).map((mem, idx) => (
            <motion.div
              key={mem._id || idx}
              whileHover={{ x: 4 }}
              className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 hover:border-purple-500/30 transition-all flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  {mem.media?.some((m) => m.type === 'video') ? (
                    <Film className="w-4 h-4" />
                  ) : mem.media?.some((m) => m.type === 'audio') ? (
                    <Mic className="w-4 h-4" />
                  ) : (
                    <ImageIcon className="w-4 h-4" />
                  )}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-xs text-foreground line-clamp-1">{mem.title}</h4>
                  <p className="text-[11px] text-muted-foreground line-clamp-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary shrink-0" />
                    {mem.destination || 'Destination'}
                  </p>
                </div>
              </div>

              <Link
                href="/dashboard/memories"
                className="px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 text-[10px] font-extrabold"
              >
                Inspect
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentMemoriesWidget;
