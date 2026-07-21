'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Camera } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import MemoryCard, { MemoryCardProps } from './widgets/MemoryCard';

interface RecentMemoriesProps {
  memories?: MemoryCardProps[];
}

const defaultMemories: MemoryCardProps[] = [
  {
    title: 'Sunset over Shimla Valleys',
    description: 'Captured beautiful golden hour highlights.',
    location: 'Shimla, India',
    date: new Date().toISOString(),
  },
];

export const RecentMemories = ({ memories = defaultMemories }: RecentMemoriesProps) => {
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
            <MemoryCard key={idx} {...mem} />
          ))}
        </div>
      )}
    </GlassCard>
  );
};

export default RecentMemories;
