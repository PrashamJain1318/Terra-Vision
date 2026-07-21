'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl glass p-12 sm:p-16 text-center space-y-8 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Join the Adventure
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to See Beyond the Destination?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Register your profile details and explore hidden local sights instantly.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="w-fit mx-auto"
        >
          <Link
            href="/signup"
            className="inline-flex px-8 py-4 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-full text-sm transition-all shadow-lg items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
