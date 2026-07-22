'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import EditorialHeading from '../common/EditorialHeading';
import CoordinatesTag from '../common/CoordinatesTag';

export const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-[#111713] text-[#F3F0E8] p-10 sm:p-16 text-center space-y-8 relative overflow-hidden border border-[#244B3C]/50 shadow-2xl">
        <div className="absolute inset-0 topographic-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 contour-lines opacity-20 pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />

          <EditorialHeading as="h2" className="text-3xl sm:text-5xl font-extrabold text-[#F3F0E8] leading-tight">
            Your Next Journey Begins Before You Leave.
          </EditorialHeading>

          <p className="text-xs sm:text-base text-muted-foreground font-sans leading-relaxed">
            Join thousands of travelers exploring with AI planning, 3D cartography, visual landmark perception, and safety intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/dashboard/planner"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#244B3C] text-[#F3F0E8] font-extrabold text-xs uppercase tracking-wider shadow-xl hover:bg-[#244B3C]/90 transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 animate-spin-slow" /> Create My Journey
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#F3F0E8]/30 text-[#F3F0E8] hover:bg-[#F3F0E8]/10 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
