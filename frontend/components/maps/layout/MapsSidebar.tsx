'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mapRoutesConfig } from '@/config/mapRoutes';
import { Map, Compass, Route, Bookmark, History } from 'lucide-react';

const sidebarItems = [
  { href: mapRoutesConfig.root, label: 'Map Workspace', icon: <Map className="w-4 h-4" /> },
  { href: mapRoutesConfig.explore, label: 'Explore Nearby', icon: <Compass className="w-4 h-4" /> },
  { href: mapRoutesConfig.routes, label: 'Route Planner', icon: <Route className="w-4 h-4" /> },
  { href: mapRoutesConfig.saved, label: 'Saved Places', icon: <Bookmark className="w-4 h-4" /> },
  { href: mapRoutesConfig.history, label: 'Route History', icon: <History className="w-4 h-4" /> },
];

export const MapsSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 p-6 border-r border-border/20 bg-background/30 backdrop-blur-md space-y-6 flex-shrink-0">
      <div className="space-y-1">
        <h3 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
          Map Navigation
        </h3>
        <p className="text-xs text-muted-foreground">Spatial & location tools</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-2xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]'
                  : 'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default MapsSidebar;
