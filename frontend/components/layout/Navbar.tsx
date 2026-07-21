'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/providers/ThemeProvider';
import { Compass, Menu, Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Compass className="w-8 h-8 text-primary animate-pulse" />
            <Link href="/" className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
              LocalLens AI
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <span className="text-muted-foreground/80 cursor-not-allowed">Explore</span>
            <span className="text-muted-foreground/80 cursor-not-allowed">Trips</span>
            <span className="text-muted-foreground/80 cursor-not-allowed">Vision</span>
            <span className="text-muted-foreground/80 cursor-not-allowed">Community</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/50 hover:bg-muted/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-900" />}
            </button>
            <button className="md:hidden p-2 rounded-full border border-border/50 hover:bg-muted/50 transition-colors">
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
