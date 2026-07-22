'use client';

import React from 'react';
import { Quote, MapPin } from 'lucide-react';
import EditorialHeading from '../common/EditorialHeading';
import Eyebrow from '../common/Eyebrow';

const fieldPostcards = [
  {
    author: 'Elena Rostova',
    location: 'Kyoto, Japan',
    coordinates: '35.0116° N',
    note: 'Terra Vision guided me through hidden alleyways in Gion that zero guidebook mentioned. The landmark scanner translated vintage wooden street signs instantly!',
    tag: 'EXPLORER DISPATCH',
  },
  {
    author: 'Marcus Vance',
    location: 'Amritsar, India',
    coordinates: '31.6340° N',
    note: 'The Scam Shield alert saved me from paying triple rate for an unmetered taxi outside the station. The Local Food AI led me to the most authentic Kulcha spot in town.',
    tag: 'FIELD VERIFIED',
  },
  {
    author: 'Aria Thorne',
    location: 'Reykjavik, Iceland',
    coordinates: '64.1466° N',
    note: 'The Memory Capsule automatically stitched my Aurora photos with visited route logs into a gorgeous journal. I generated my digital PDF album right on the plane home.',
    tag: 'CAPSULE CREATOR',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Eyebrow>FIELD POSTCARDS & DISPATCHES</Eyebrow>
          <EditorialHeading as="h2" className="text-3xl sm:text-5xl font-extrabold">
            Notes From Modern Explorers
          </EditorialHeading>
          <p className="text-xs sm:text-base text-muted-foreground font-sans">
            Real field reports from travelers navigating the world with Terra Vision intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fieldPostcards.map((card, idx) => (
            <div key={idx} className="p-6 rounded-3xl atlas-card space-y-4 relative">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="text-xs font-mono font-bold text-primary flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {card.location}
                </span>
                <span className="passport-stamp text-primary border-primary/40">{card.tag}</span>
              </div>

              <Quote className="w-6 h-6 text-primary/40" />
              <p className="text-xs font-sans text-foreground leading-relaxed italic">"{card.note}"</p>

              <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs font-mono">
                <span className="font-extrabold text-foreground">{card.author}</span>
                <span className="text-muted-foreground">{card.coordinates}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
