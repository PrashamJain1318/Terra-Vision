'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, Send, ShieldCheck, Heart } from 'lucide-react';
import CoordinatesTag from '@/components/common/CoordinatesTag';

export const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-border/40 bg-card/60 backdrop-blur-xl pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Logo & Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-editorial text-2xl font-extrabold tracking-tight text-foreground">
                TERRA VISION
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm font-sans">
              See beyond the destination. Intelligent field guide for modern travelers, combining generative AI planning, 3D cartography, visual landmark recognition, and safety intelligence.
            </p>
            <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />
          </div>

          {/* Site Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Explore Terra Vision</h4>
            <ul className="space-y-2 text-xs font-semibold text-muted-foreground">
              <li>
                <Link href="/dashboard/planner" className="hover:text-foreground transition-colors">
                  AI Travel Planner
                </Link>
              </li>
              <li>
                <Link href="/dashboard/hidden-gems" className="hover:text-foreground transition-colors">
                  Hidden Gems AI
                </Link>
              </li>
              <li>
                <Link href="/dashboard/safety" className="hover:text-foreground transition-colors">
                  Travel Safety & Scam Shield
                </Link>
              </li>
              <li>
                <Link href="/dashboard/memories" className="hover:text-foreground transition-colors">
                  Travel Memory Capsule
                </Link>
              </li>
              <li>
                <Link href="/dashboard/voice" className="hover:text-foreground transition-colors">
                  Voice AI Travel Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary">Field Intelligence Dispatch</h4>
            {subscribed ? (
              <p className="text-xs text-emerald-500 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> You are subscribed to the Terra Vision Field Dispatch.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Receive curated local field guides, safety advisories, and hidden gem dispatches.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="explorer@terravision.ai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/50 focus:border-primary rounded-xl text-xs font-sans text-foreground focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-90 transition-all flex items-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-mono">
          <p>&copy; {new Date().getFullYear()} Terra Vision. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Terra Atlas System • Crafting future field guides with <Heart className="w-3 h-3 text-red-500 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
