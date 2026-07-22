'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Menu, X, Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { useAuthStore } from '@/store/authStore';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuthStore();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '/#experience' },
    { label: 'Planner', href: '/dashboard/planner' },
    { label: 'Hidden Gems', href: '/dashboard/hidden-gems' },
    { label: 'Safety', href: '/dashboard/safety' },
    { label: 'Memories', href: '/dashboard/memories' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl font-extrabold tracking-tight text-foreground">
                TERRA VISION
              </span>
              <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase -mt-1">
                Field Guide
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary font-extrabold' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/50 bg-card/50 text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {isAuthenticated && user ? (
              <Link
                href="/dashboard/overview"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-all"
              >
                <MapPin className="w-3.5 h-3.5" /> Workspace ({user.name})
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/dashboard/planner"
                  className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider shadow-lg hover:opacity-90 transition-all"
                >
                  Plan a Journey
                </Link>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-border/50 bg-card/50 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-card border-b border-border p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-3 text-sm font-bold uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/30 text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            {!isAuthenticated && (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full border border-border text-xs font-extrabold uppercase tracking-wider text-foreground"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
