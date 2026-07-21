'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Select Destination',
    description: 'Provide your dream destination along with your budget limits.',
  },
  {
    step: '02',
    title: 'Customize Itinerary',
    description: 'Configure your travel style preference criteria, interests, and days.',
  },
  {
    step: '03',
    title: 'Generate Spot Guide',
    description: 'Let LocalLens AI suggest hidden local spots and map routes.',
  },
];

import SectionTitle from '../common/SectionTitle';
import TimelineCard from './TimelineCard';

export const TimelineSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        <SectionTitle
          title="How It Works"
          subtitle="Get your AI travel companion set up in three simple steps."
        />

        <div className="relative border-l border-border/40 pl-8 ml-4 md:ml-8 space-y-12">
          {steps.map((item, idx) => (
            <TimelineCard
              key={idx}
              step={item.step}
              title={item.title}
              description={item.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
