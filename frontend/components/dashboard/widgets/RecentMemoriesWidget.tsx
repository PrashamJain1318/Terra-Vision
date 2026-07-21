'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Image as ImageIcon } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

interface MemoryItem {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
}

interface RecentMemoriesWidgetProps {
  memories?: MemoryItem[];
}

const defaultMemories: MemoryItem[] = [
  {
    title: 'Sunset over Shimla Valleys',
    description: 'Captured beautiful golden hour highlights.',
  },
];

export const RecentMemoriesWidget = ({ memories = defaultMemories }: RecentMemoriesWidgetProps) => {
  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Recent Memories
        </h3>
        <Link
          href="/dashboard/memories"
          className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
        >
          View Gallery
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
          {memories.map((mem, idx) => (
            <motion.div
              key={mem._id || idx}
              whileHover={{ x: 4 }}
              className="p-3.5 rounded-2xl bg-muted/20 border border-border/30 hover:border-purple-500/30 transition-all flex items-center gap-3"
            >
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs text-foreground">{mem.title}</h4>
                <p className="text-[11px] text-muted-foreground line-clamp-1">{mem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentMemoriesWidget;
