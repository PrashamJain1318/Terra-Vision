'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, Scan, CheckCircle2, Sparkles } from 'lucide-react';
import EditorialHeading from '../common/EditorialHeading';
import Eyebrow from '../common/Eyebrow';

export const VisionShowcase = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-card/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <Eyebrow>OPTICAL LANDMARK PERCEPTION</Eyebrow>
          <EditorialHeading as="h2" className="text-3xl sm:text-5xl font-extrabold">
            Point, Scan & Understand Any Landmark
          </EditorialHeading>
          <p className="text-xs sm:text-base text-muted-foreground font-sans leading-relaxed">
            Terra Vision Scanner combines generative multimodal vision models to instantly identify monuments, translate historic plaques, recommend nearby hidden spots, and warn of local scams.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-xs font-bold text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Instant 99%+ Landmark Accuracy</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Realtime Menu & Foreign Script Optical Translation</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Automatic Memory Capsule Journal Sync</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/dashboard/vision"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider shadow-xl hover:opacity-90 transition-all"
            >
              <Camera className="w-4 h-4" /> Try Terra Vision Scanner
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="p-8 rounded-3xl atlas-card border-primary/30 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-mono font-bold text-foreground uppercase tracking-widest">
                  Live Scanner Frame Active
                </span>
              </div>
              <span className="passport-stamp text-cyan-400 border-cyan-400/40">
                MULTIMODAL AI
              </span>
            </div>

            <div className="min-h-[220px] rounded-2xl bg-muted/30 border border-border/40 flex flex-col items-center justify-center p-6 text-center space-y-3 relative">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <Camera className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-foreground">Golden Temple (Harmandir Sahib)</h4>
                <p className="text-xs font-mono text-muted-foreground">Confidence: 99.4% • LAT 31.6200° N, LON 74.8765° E</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-muted/20 border border-border/30 text-xs font-mono text-muted-foreground leading-relaxed">
              [Field Context]: Founded in 1577 by Guru Ram Das. Famous for its gilded copper dome, surrounding Amrit Sarovar tank, and 24/7 Langar kitchen serving 100,000+ daily visitors.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionShowcase;
