'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Map, Compass, ShieldAlert, BookOpen, Utensils } from 'lucide-react';
import EditorialHeading from '../common/EditorialHeading';
import Eyebrow from '../common/Eyebrow';

const journeySteps = [
  {
    id: 'imagine',
    stepNumber: '01',
    title: 'Imagine',
    subtitle: 'Natural Language Request',
    description: 'Describe any trip idea in natural speech or text. Terra Vision translates your desires into structured route parameters.',
    icon: Sparkles,
    previewTitle: 'Prompt Input',
    previewContent: '"5-day cultural exploration of Kyoto during autumn foliage with local vegetarian ramen recommendations."',
    color: 'text-amber-400',
  },
  {
    id: 'plan',
    stepNumber: '02',
    title: 'Plan',
    subtitle: 'AI Itinerary Generation',
    description: 'Multi-modal AI models craft hour-by-hour itineraries complete with transit modes, budget forecasts, and packing guides.',
    icon: Compass,
    previewTitle: 'Smart Itinerary',
    previewContent: 'Day 1 • Arashiyama Bamboo Grove -> Golden Pavilion -> Gion Evening Heritage Walk (Budget: $140/day)',
    color: 'text-emerald-400',
  },
  {
    id: 'navigate',
    stepNumber: '03',
    title: 'Navigate',
    subtitle: 'Interactive Cartography',
    description: '3D geofenced maps provide turn-by-turn routes, elevation profile analysis, and real-time offline map packs.',
    icon: Map,
    previewTitle: 'Cartographic Route',
    previewContent: 'Walking Route Active • 2.4 km • Elev Gain +45m • 28 mins • GIS Layer Verified',
    color: 'text-cyan-400',
  },
  {
    id: 'discover',
    stepNumber: '04',
    title: 'Discover',
    subtitle: 'Landmark Vision & Hidden Gems',
    description: 'Snap any landmark to instantly receive cultural historical context, hidden gem overlays, and authentic local food dishes.',
    icon: Utensils,
    previewTitle: 'Visual Recognition',
    previewContent: 'Kinkaku-ji (Golden Pavilion) Identified • 99.4% Match • Founded 1397 • Local Dish: Matcha Parfait Nearby',
    color: 'text-pink-400',
  },
  {
    id: 'safety',
    stepNumber: '05',
    title: 'Travel Safely',
    subtitle: 'Scam Shield & 1-Tap SOS',
    description: 'Stay shielded with real-time scam alert taxonomies, geofenced risk zones, official consular details, and emergency SOS dispatch.',
    icon: ShieldAlert,
    previewTitle: 'Scam Shield Active',
    previewContent: 'Safety Index: 92/100 (High) • Alert: Overcharging Taxi Scam active near Central Station • SOS Standby',
    color: 'text-red-400',
  },
  {
    id: 'remember',
    stepNumber: '06',
    title: 'Remember',
    subtitle: 'Living Travel Memory Capsule',
    description: 'Auto-organize photos, visited routes, landmark scans, and AI stories into a downloadable digital memory journal.',
    icon: BookOpen,
    previewTitle: 'Memory Capsule',
    previewContent: 'Kyoto Autumn Expedition • 14 Scans • 8 Hidden Gems • AI Travel Narrative Generated • PDF Album Ready',
    color: 'text-purple-400',
  },
];

export const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-card/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Eyebrow>ONE CONNECTED JOURNEY</Eyebrow>
          <EditorialHeading as="h2" className="text-3xl sm:text-5xl font-extrabold">
            How Terra Vision Guides Every Step
          </EditorialHeading>
          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed font-sans">
            From initial inspiration to lasting memories, explore how our intelligent field journal orchestrates your travel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-card border-primary shadow-xl scale-[1.02]'
                      : 'bg-card/40 border-border/40 hover:bg-card/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-muted-foreground">{step.stepNumber}</span>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                      <h3 className="text-sm font-extrabold text-foreground">{step.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase text-primary tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-muted-foreground font-sans mt-3 pt-3 border-t border-border/30 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Interactive Preview Panel */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="p-8 rounded-3xl atlas-card border-primary/30 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono font-bold text-muted-foreground ml-2">
                    Terra Vision Interactive Field Preview
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-primary uppercase">
                  Step {journeySteps[activeStep].stepNumber}
                </span>
              </div>

              <div className="space-y-4 py-4">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest font-mono">
                  <span>{journeySteps[activeStep].previewTitle}</span>
                </div>
                <div className="p-5 rounded-2xl bg-muted/30 border border-border/40 text-sm font-mono leading-relaxed text-foreground">
                  {journeySteps[activeStep].previewContent}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-4 border-t border-border/40">
                <span>LAT 35.0116° N, LON 135.7681° E</span>
                <span className="text-primary font-bold">STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
