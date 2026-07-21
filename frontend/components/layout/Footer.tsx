'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="border-t border-border/20 bg-background/40 backdrop-blur-md pt-16 pb-12 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Logo & Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-primary" />
              <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500">
                LocalLens AI
              </span>
            </div>
            <p className="text-xs text-muted-foreground/80 max-w-sm leading-relaxed">
              Explore beyond the typical tourist spots. Harness the power of generative AI models to uncover hidden local destinations and auto-generate travel itineraries.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-full border border-border/50 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-border/50 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-border/50 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all" aria-label="GitHub">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="space-y-3 text-sm">
            <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Product</h4>
            <ul className="space-y-2 font-medium text-xs">
              <li><span className="text-muted-foreground/60 cursor-not-allowed hover:text-foreground">Features</span></li>
              <li><span className="text-muted-foreground/60 cursor-not-allowed hover:text-foreground">Pricing</span></li>
              <li><span className="text-muted-foreground/60 cursor-not-allowed hover:text-foreground">AI Models</span></li>
            </ul>
          </div>

          {/* Newsletter subscription form */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Stay Updated</h4>
            {subscribed ? (
              <p className="text-xs text-green-500 font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <p className="text-xs text-muted-foreground">Subscribe to our weekly local travel newsletter.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 bg-muted/40 border border-border/40 focus:border-primary/60 rounded-full text-xs focus:outline-none transition-all"
                  />
                  <button type="submit" className="px-4 py-2 bg-foreground text-background font-semibold rounded-full text-xs">
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 text-center md:flex md:justify-between md:items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LocalLens AI. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-muted-foreground/60">
            Phase 6 Landing Architecture • Built with Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
