'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/providers/ThemeProvider';
import { Compass, Menu, Sun, Moon } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuthStore();
  
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/30 transition-all duration-500 ease-in-out transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
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
            
            {isAuthenticated && user ? (
              <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-border/50 bg-muted/40">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {user.name}
              </span>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="px-4 py-2 bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-full text-xs transition-all shadow-md">
                  Get Started
                </Link>
              </div>
            )}

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
