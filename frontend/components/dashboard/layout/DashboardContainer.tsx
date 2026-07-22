'use client';

import React from 'react';
import { Heart } from 'lucide-react';

interface DashboardContainerProps {
  children: React.ReactNode;
}

export const DashboardContainer = ({ children }: DashboardContainerProps) => {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 md:px-8 py-6 relative z-10 scroll-smooth overscroll-y-contain scrollbar-thin scrollbar-thumb-zinc-700/50 scrollbar-track-transparent">
      <div className="max-w-7xl mx-auto space-y-8 pb-32">
        {children}

        {/* Flexible In-Flow Footer (Only visible at bottom of content scroll, never fixed/sticky) */}
        <footer className="pt-12 pb-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Terra Vision. All rights reserved.</p>
          <p className="flex items-center gap-1.5 mt-2 md:mt-0">
            Terra Atlas System • Crafting future field guides with <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
          </p>
        </footer>
      </div>
    </main>
  );
};

export default DashboardContainer;
