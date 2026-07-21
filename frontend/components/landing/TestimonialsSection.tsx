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

import SectionTitle from '../common/SectionTitle';
import TestimonialCard from './TestimonialCard';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionTitle
          title="Testimonials"
          subtitle="Here is what active travellers have to say about LocalLens AI."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={idx}
              name={item.name}
              role={item.role}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
