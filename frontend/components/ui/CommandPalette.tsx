'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Compass,
  Map,
  Camera,
  Utensils,
  DollarSign,
  Shield,
  Users,
  Building2,
  Sparkles,
  X,
  Navigation,
  CloudSun
} from 'lucide-react';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!open) return null;

  const commands = [
    { name: 'AI Travel Chat & Planner', category: 'AI Brain', href: '/dashboard/planner', icon: Compass },
    { name: 'Smart Google Maps V2', category: 'Maps', href: '/dashboard/maps', icon: Map },
    { name: 'Multimodal Vision AI Scanner', category: 'Vision AI', href: '/dashboard/vision', icon: Camera },
    { name: 'Local Food & Street Food Guide', category: 'Experience', href: '/dashboard/local-food', icon: Utensils },
    { name: 'Smart Expense Tracker', category: 'Travel Hub', href: '/dashboard/expenses', icon: DollarSign },
    { name: 'Travel Memories & AI Journal', category: 'Travel Hub', href: '/dashboard/memories', icon: Sparkles },
    { name: 'Travel Risk & Emergency SOS', category: 'Utilities', href: '/dashboard/utilities', icon: Shield },
    { name: 'Social Travel Community Feed', category: 'Community', href: '/dashboard/community', icon: Users },
    { name: 'Enterprise & Partner Platform', category: 'Enterprise', href: '/dashboard/enterprise', icon: Building2 },
    { name: 'Hidden Gems Discovery Engine', category: 'Maps', href: '/dashboard/hidden-gems', icon: Navigation },
    { name: 'Weather & AQI Dashboard', category: 'Utilities', href: '/dashboard/utilities', icon: CloudSun },
  ];

  const filtered = query.trim() === ''
    ? commands
    : commands.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-zinc-950/90 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden glassmorphism">
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-zinc-800/80 gap-3">
          <Search className="w-5 h-5 text-emerald-400 animate-pulse" />
          <input
            type="text"
            placeholder="Type a command or search destination... (⌘K / Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none"
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-zinc-400 text-xs font-mono">
              No matching commands or places found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/30 border border-transparent text-left transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/40 text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono font-bold px-2 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-3 bg-zinc-900/60 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>Navigation: <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200">↓</kbd></span>
          <span>Open: <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200">↵ Enter</kbd></span>
          <span>Close: <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200">Esc</kbd></span>
        </div>
      </div>
    </div>
  );
}
