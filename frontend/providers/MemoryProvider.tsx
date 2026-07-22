'use client';

import React, { useState } from 'react';
import MemoryContext, { MemoryState } from '@/context/MemoryContext';

export const MemoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<MemoryState>({
    selectedTrip: 'Amritsar Heritage & Food Escape',
    selectedProvider: 'gemini',
    timelineEvents: [
      {
        id: 'mem-1',
        type: 'landmark_scan',
        timestamp: '9:00 AM',
        title: 'Golden Temple Precinct Scan',
        location: 'Heritage Walk, Amritsar',
        description: 'AI Vision scanned 16th-century gilded marble architecture.',
      },
      {
        id: 'mem-2',
        type: 'food',
        timestamp: '1:30 PM',
        title: 'Tandoori Kulcha & Chole Feast',
        location: 'Kesar Da Dhaba',
        description: 'Sampled authentic clay-baked bread with churned white butter.',
      },
    ],
    savedMemories: [],
    travelStory: null,
    statistics: {
      photosImported: 24,
      landmarksScanned: 5,
      foodsTried: 8,
      hiddenGemsVisited: 3,
      distanceTraveledKm: 142,
    },
    mapReplayActive: false,
    exportingPdf: false,
    loading: false,
    error: null,
  });

  const setSelectedTrip = (tripId: string) => {
    setState((prev) => ({ ...prev, selectedTrip: tripId }));
  };

  const setSelectedProvider = (provider: string) => {
    setState((prev) => ({ ...prev, selectedProvider: provider }));
  };

  const importMemories = async (sources: string[]) => {
    setState((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, loading: false }));
    }, 800);
  };

  const generateTravelStory = async (templateId: string) => {
    setState((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        loading: false,
        travelStory: `Under the golden skies of Amritsar, this journey wove through centuries of sacred heritage, clay tandoor aromas, and secret underground stepwells.`,
      }));
    }, 1200);
  };

  const toggleMapReplay = () => {
    setState((prev) => ({ ...prev, mapReplayActive: !prev.mapReplayActive }));
  };

  const exportPdfCapsule = async () => {
    setState((prev) => ({ ...prev, exportingPdf: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, exportingPdf: false }));
    }, 1500);
  };

  const resetMemoryState = () => {
    setState((prev) => ({
      ...prev,
      travelStory: null,
      mapReplayActive: false,
      exportingPdf: false,
    }));
  };

  return (
    <MemoryContext.Provider
      value={{
        state,
        setSelectedTrip,
        setSelectedProvider,
        importMemories,
        generateTravelStory,
        toggleMapReplay,
        exportPdfCapsule,
        resetMemoryState,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export default MemoryProvider;
