'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, Search, MessageSquare, ChevronDown, ChevronUp, Mail } from 'lucide-react';

const FAQS = [
  {
    q: 'How does TerraVision enrich Google Maps data?',
    a: 'TerraVision retrieves verified spatial details from Google Places and feeds them to Gemini AI models to calculate photography scores, crowd levels, safety scores, and travel summaries.',
  },
  {
    q: 'Can I use TerraVision offline?',
    a: 'Yes! TerraVision caches searched places and saved wishlists in your browser localStorage, allowing offline map access during intermittent connectivity.',
  },
  {
    q: 'How do I submit feedback or report a bug?',
    a: 'Click the "Beta Feedback" floating button at the bottom-right of any dashboard page to attach screenshots and submit reports directly to our team.',
  },
  {
    q: 'Is my search data private?',
    a: 'Yes, search queries are used solely for real-time spatial lookup and are aggregated anonymously for public beta performance monitoring.',
  },
];

export default function HelpPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 font-sans text-slate-100 bg-[#09090B] min-h-screen">
      <Link href="/dashboard" className="flex items-center gap-2 text-xs font-black text-[#7C3AED] hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-black text-purple-400 uppercase tracking-widest">
          <HelpCircle className="w-4 h-4" /> Knowledge Base & Support
        </div>
        <h1 className="text-3xl font-black text-white">Help Center & FAQ</h1>
        <p className="text-xs text-slate-400 font-semibold">Everything you need to know about LocalLens AI Public Beta</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-base font-black text-white">Frequently Asked Questions</h2>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="p-4 rounded-2xl bg-[#111827] border border-white/[0.08] space-y-2">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between font-black text-xs text-left text-slate-100"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#7C3AED]" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {isOpen && <p className="text-xs text-slate-400 font-semibold leading-relaxed pt-1 border-t border-white/[0.06]">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
