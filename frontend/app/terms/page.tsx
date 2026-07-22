'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 font-sans text-slate-100 bg-[#09090B] min-h-screen">
      <Link href="/dashboard" className="flex items-center gap-2 text-xs font-black text-[#7C3AED] hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-black text-[#7C3AED] uppercase tracking-widest">
          <FileText className="w-4 h-4" /> Legal & Governance
        </div>
        <h1 className="text-3xl font-black text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400 font-semibold">Last Updated: July 2026 • TerraVision Operating System</p>
      </div>

      <div className="space-y-6 text-xs text-slate-300 font-semibold leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-black text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TerraVision, you agree to be bound by these Terms of Service. Our services integrate Google Maps Platform spatial APIs and Gemini AI intelligence models to provide personalized travel discovery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black text-white">2. Acceptable Use Policy</h2>
          <p>
            You agree to use TerraVision for lawful travel planning, route discovery, and location bookmarking. Data retrieved from Google Places and Gemini AI is provided for informational purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black text-white">3. Public Beta Operations</h2>
          <p>
            During our Public Beta phase, product telemetry and error reporting are active to measure system performance and ensure sub-50ms latency.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-black text-white">4. Contact & Inquiries</h2>
          <p>For questions regarding these Terms, contact our governance team at support@locallens.ai.</p>
        </section>
      </div>
    </div>
  );
}
