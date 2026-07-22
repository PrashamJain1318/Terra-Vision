'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Lock, Eye } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 font-sans text-slate-100 bg-[#09090B] min-h-screen">
      <Link href="/dashboard" className="flex items-center gap-2 text-xs font-black text-[#7C3AED] hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-widest">
          <Lock className="w-4 h-4" /> Privacy & Security
        </div>
        <h1 className="text-3xl font-black text-white">Privacy Policy & Cookie Consent</h1>
        <p className="text-xs text-slate-400 font-semibold">Last Updated: July 2026 • LocalLens AI</p>
      </div>

      <div className="space-y-6 text-xs text-slate-300 font-semibold leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-black text-white">1. Information Collection</h2>
          <p>
            LocalLens AI respects user privacy. We do not sell personal travel logs. Event telemetry is processed in aggregate to calculate DAU/MAU and optimize Google Maps & Gemini API cache hit ratios.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black text-white">2. Spatial Telemetry & Location Privacy</h2>
          <p>
            Location queries sent to Google Geocoding & Places APIs are used exclusively to render real-time map markers and multi-modal route steps.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black text-white">3. Cookies & Local Storage</h2>
          <p>
            We store session preferences and saved wishlists locally in your browser’s localStorage for instant offline access.
          </p>
        </section>
      </div>
    </div>
  );
}
