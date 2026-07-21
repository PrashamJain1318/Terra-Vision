'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: <Compass className="w-6 h-6 text-primary" />,
    title: 'Hidden Local Spots',
    description: 'Explore verified offbeat destinations shared by local travel guides.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    title: 'AI Smart Itinerary',
    description: 'Create customized multi-day travel plans matching your style preferences.',
  },
  {
    icon: <Map className="w-6 h-6 text-indigo-500" />,
    title: 'Interactive Maps',
    description: 'Navigate seamlessly with built-in location visualizers and custom flags.',
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: 'Safe travel guides',
    description: 'Receive real-time location alerts, weather updates, and emergency support.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight">Explore the Features</h2>
          <p className="text-muted-foreground font-light">
            Designed to elevate your travel experiences through smart AI assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl glass space-y-4 cursor-pointer transition-all duration-300"
            >
              <div className="p-3 bg-muted/40 rounded-2xl w-fit">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
