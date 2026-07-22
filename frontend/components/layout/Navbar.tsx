'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/providers/ThemeProvider';
import { Compass, Menu, X, Sun, Moon, Shield, Mic, User } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuthStore();
  const pathname = usePathname();
  
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Explore', href: '/dashboard/maps' },
    { name: 'Trips', href: '/dashboard/trips' },
    { name: 'Vision', href: '/dashboard/vision' },
    { name: 'Community', href: '/dashboard/community' },
    { name: 'Safety', href: '/dashboard/safety' },
    { name: 'Voice AI', href: '/dashboard/voice' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-all duration-500 ease-in-out transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Compass className="w-8 h-8 text-primary group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
              LocalLens AI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 font-semibold ${
                    isActive
                      ? 'text-primary border-primary'
                      : 'text-muted-foreground hover:text-foreground border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/50 hover:bg-muted/50 transition-colors text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-indigo-900" />}
            </button>
            
            {isAuthenticated && user ? (
              <Link
                href="/dashboard"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary transition-all shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Dashboard ({user.name})</span>
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-xs transition-all shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-border/50 hover:bg-muted/50 transition-colors text-foreground"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 border-b border-border/40 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-col gap-2">
            {isAuthenticated && user ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs"
              >
                Go to Dashboard ({user.name})
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl border border-border/60 text-foreground font-bold text-xs hover:bg-muted/40"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
