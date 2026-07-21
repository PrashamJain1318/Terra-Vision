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

export const TimelineSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">How It Works</h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto">
            Get your AI travel companion set up in three simple steps.
          </p>
        </div>

        <div className="relative border-l border-border/40 pl-8 ml-4 md:ml-8 space-y-12">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative space-y-2"
            >
              {/* Timeline bubble connector */}
              <div className="absolute -left-[45px] top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center font-bold text-xs text-primary shadow-md">
                {idx + 1}
              </div>
              
              <span className="text-sm font-bold text-primary tracking-widest uppercase">
                Step {item.step}
              </span>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
