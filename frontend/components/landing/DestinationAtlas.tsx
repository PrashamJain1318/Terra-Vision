'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Compass, Shield, Utensils, Sparkles } from 'lucide-react';
import EditorialHeading from '../common/EditorialHeading';
import Eyebrow from '../common/Eyebrow';

const sampleRegions = [
  {
    id: 'kyoto',
    name: 'Kyoto, Japan',
    coordinates: '35.0116° N, 135.7681° E',
    story: 'Ancient temples nestled in bamboo groves, traditional tea houses, and seasonal foliage corridors.',
    bestTime: 'Oct - Nov (Autumn)',
    crowdLevel: 'Moderate',
    safetyLevel: '98/100 (Exceptional)',
    foodCue: 'Matcha Parfait & Shojin Ryori',
  },
  {
    id: 'amritsar',
    name: 'Amritsar, India',
    coordinates: '31.6340° N, 74.8723° E',
    story: 'Spiritual heritage core, vibrant bazaars, and legendary community kitchens serving millions.',
    bestTime: 'Oct - Mar (Winter)',
    crowdLevel: 'High',
    safetyLevel: '92/100 (High)',
    foodCue: 'Amritsari Kulcha & Fresh Lassi',
  },
  {
    id: 'reykjavik',
    name: 'Reykjavik, Iceland',
    coordinates: '64.1466° N, 21.9426° W',
    story: 'Geothermal hot springs, dramatic volcanic coastlines, and glowing northern aurora skies.',
    bestTime: 'Nov - Feb (Aurora Season)',
    crowdLevel: 'Low',
    safetyLevel: '99/100 (Optimal)',
    foodCue: 'Plokkfiskur & Rye Bread',
  },
];

export const DestinationAtlas = () => {
  const [selectedRegion, setSelectedRegion] = useState(sampleRegions[0]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Eyebrow>INTERACTIVE FIELD ATLAS</Eyebrow>
          <EditorialHeading as="h2" className="text-3xl sm:text-5xl font-extrabold">
            Explore Curated Field Regions
          </EditorialHeading>
          <p className="text-xs sm:text-base text-muted-foreground font-sans">
            Hover or select a region to unveil real-time field notes, crowd forecasts, and safety indices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleRegions.map((region) => {
            const isSelected = selectedRegion.id === region.id;
            return (
              <div
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className={`p-6 rounded-3xl atlas-card cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-primary ring-2 ring-primary/20 shadow-2xl scale-[1.02]' : 'hover:border-border'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {region.coordinates}
                  </span>
                  <span className="passport-stamp text-emerald-500 border-emerald-500/40">
                    VERIFIED REGION
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-extrabold text-foreground mt-4">{region.name}</h3>
                <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">{region.story}</p>

                <div className="mt-6 pt-4 border-t border-border/40 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Best Time:</span>
                    <span className="font-bold text-foreground">{region.bestTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Safety Score:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <Shield className="w-3 h-3" /> {region.safetyLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Local Culinary:</span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      <Utensils className="w-3 h-3" /> {region.foodCue}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/dashboard/hidden-gems"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-xs font-extrabold uppercase tracking-wider shadow-xl hover:opacity-90 transition-all"
          >
            <Sparkles className="w-4 h-4" /> Find Hidden Places
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationAtlas;
