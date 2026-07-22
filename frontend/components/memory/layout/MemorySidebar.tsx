'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Clock, Image as ImageIcon, Sparkles, Share2, Settings, Compass } from 'lucide-react';
import MEMORY_ROUTES from '@/config/memoryRoutes';

export const MemorySidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Memory Home', route: MEMORY_ROUTES.HOME, icon: BookOpen },
    { label: 'Create Memory', route: MEMORY_ROUTES.CREATE, icon: Compass },
    { label: 'Chronological Timeline', route: MEMORY_ROUTES.TIMELINE, icon: Clock },
    { label: 'AI Travel Story', route: MEMORY_ROUTES.STORY, icon: Sparkles },
    { label: 'Photo & Video Scrapbook', route: MEMORY_ROUTES.GALLERY, icon: ImageIcon },
    { label: 'Share Capsule', route: MEMORY_ROUTES.SHARE, icon: Share2 },
    { label: 'Capsule Settings', route: MEMORY_ROUTES.SETTINGS, icon: Settings },
  ];

  return (
    <aside className="w-full md:w-64 space-y-2 p-4 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 shadow-xl">
      <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-400 px-3 block">
        Capsule Navigation
      </span>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs font-extrabold transition-all ${
                isActive
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                  : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default MemorySidebar;
