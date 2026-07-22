'use client';

import React from 'react';
import { Users, Search, PlusCircle } from 'lucide-react';
import { useCommunity } from '@/hooks/useCommunity';
import Eyebrow from '@/components/common/Eyebrow';

export const CommunityHeader = ({ onOpenCreateModal }: { onOpenCreateModal: () => void }) => {
  const { searchQuery, setSearchQuery } = useCommunity();

  return (
    <header className="p-6 rounded-3xl atlas-card border-primary/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-emerald-400" />
          <Eyebrow>GLOBAL TRAVELERS NETWORK</Eyebrow>
        </div>
        <h1 className="font-editorial text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          Terra Vision Community Hub
        </h1>
        <p className="text-xs text-muted-foreground font-sans">
          Discover authentic field reports, collaborative trip plans, reviews, and travel dispatches.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search travelers, posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/40 border border-border/50 rounded-full text-xs font-sans text-foreground focus:outline-none focus:border-primary transition-all"
          />
        </div>

        <button
          onClick={onOpenCreateModal}
          className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
        >
          <PlusCircle className="w-4 h-4" /> Share Dispatch
        </button>
      </div>
    </header>
  );
};

export default CommunityHeader;
