'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoordinatesTag from './CoordinatesTag';

export const CinematicIntroModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('terra_intro_seen');
    if (!hasSeenIntro) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = (enableSound: boolean) => {
    sessionStorage.setItem('terra_intro_seen', 'true');
    if (enableSound) {
      localStorage.setItem('terra_sound_enabled', 'true');
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-[#F3F0E8] dark:bg-[#111713] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
        >
          <div className="absolute inset-0 topographic-pattern opacity-40" />
          <div className="absolute inset-0 contour-lines opacity-30 animate-pulse" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 space-y-6 max-w-lg"
          >
            <CoordinatesTag lat="31.6340° N" lon="74.8723° E" />

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
                Field Journal Protocol Initiated
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                TERRA VISION
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-sm mx-auto leading-relaxed">
                See beyond the destination. Intelligent field guide for modern explorers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => handleDismiss(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-xl hover:opacity-90 transition-all"
              >
                Enter Terra Vision
              </button>
              <button
                onClick={() => handleDismiss(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-muted/50 text-foreground text-xs font-bold uppercase tracking-wider border border-border/50 hover:bg-muted transition-all"
              >
                Continue Without Sound
              </button>
            </div>
          </motion.div>

          <button
            onClick={() => handleDismiss(false)}
            className="absolute top-6 right-6 z-20 text-xs font-mono text-muted-foreground hover:text-foreground uppercase tracking-widest"
          >
            [ Skip Intro ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntroModal;
