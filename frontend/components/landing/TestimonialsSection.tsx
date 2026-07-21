'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Backpacker',
    content: 'LocalLens AI helped me explore Himachal like a native. Found spot-on cafes and silent valleys!',
  },
  {
    name: 'David Miller',
    role: 'Adventure Enthusiast',
    content: 'The custom itinerary fits my hiking habits perfectly. The integration is seamless.',
  },
  {
    name: 'Elena Rostova',
    role: 'Cultural Explorer',
    content: 'Translated landmark historical descriptions instantly with the Vision AI tool. Amazing!',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground font-light">
            Here is what active travellers have to say about LocalLens AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl glass space-y-4 flex flex-col justify-between"
            >
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm">{item.name}</h4>
                <span className="text-xs text-primary font-medium">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
