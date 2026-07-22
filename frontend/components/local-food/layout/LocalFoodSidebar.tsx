'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Utensils, Sparkles, Bookmark, History, SlidersHorizontal } from 'lucide-react';
import FOOD_ROUTES from '@/config/foodRoutes';

const navItems = [
  { href: FOOD_ROUTES.HOME, label: 'Overview', icon: Utensils },
  { href: FOOD_ROUTES.DISCOVER, label: 'Food Discover', icon: Sparkles },
  { href: FOOD_ROUTES.RESULTS, label: 'Dishes', icon: SlidersHorizontal },
  { href: FOOD_ROUTES.SAVED, label: 'Saved Foods', icon: Bookmark },
  { href: FOOD_ROUTES.HISTORY, label: 'History', icon: History },
];

export const LocalFoodSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-card/30 backdrop-blur-xl border-r border-border/40 min-h-[calc(100vh-4rem)] p-4 hidden md:block space-y-6">
      <div className="space-y-1">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground px-3">
          Culinary Navigation
        </span>
        <nav className="space-y-1 pt-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                }`}
              >
                <Icon className="w-4 h-4" /> {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default LocalFoodSidebar;
