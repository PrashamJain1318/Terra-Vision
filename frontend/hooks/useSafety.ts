'use client';

import { useContext } from 'react';
import { SafetyContext, SafetyContextType } from '@/context/SafetyContext';

const defaultFallbackContext: SafetyContextType = {
  state: {
    selectedDestination: 'Amritsar, Punjab',
    travelDates: 'Oct 14 - Oct 18',
    riskLevel: 'low',
    safetyScore: 92,
    alerts: [
      {
        id: 'alert-1',
        type: 'scam_taxi',
        title: 'Overcharging Meter Scam at Railway Station',
        description: 'Drivers refusing to use digital meters during night hours.',
        severity: 'high',
        location: 'Amritsar Junction Rail Station',
        timestamp: '2 hours ago',
      },
    ],
    communityReports: [
      {
        id: 'rep-1',
        author: 'Traveler_Elena',
        title: 'Safe Walking Path near Heritage Corridor',
        description: 'Well-lit street with heavy police patrols active until 11 PM.',
        votes: 42,
        verified: true,
        timestamp: 'Today, 10:15 AM',
      },
    ],
    emergencyContacts: [
      { id: 'c-1', name: 'Tourist Police Control Room', role: 'Police', phone: '112', category: 'police' },
      { id: 'c-2', name: 'Amritsar Central Hospital', role: 'Medical', phone: '102', category: 'ambulance' },
    ],
    safeZones: ['Heritage Walk Precinct', 'Golden Temple Square', 'Ranjit Avenue'],
    unsafeZones: ['Unlit alleys near South Gate after midnight'],
    travelAdvisories: ['Keep valuables in front pockets in crowded markets.'],
    advisorConversation: [
      { sender: 'assistant', text: 'Hello! I am your AI Safety Assistant. Ask me about scam alerts or safe navigation in Amritsar.' },
    ],
    notificationSettings: { push: true, sms: true, email: false },
    privacySettings: { shareLocation: true, anonymousReporting: true },
    offlineMode: false,
    selectedProvider: 'gemini',
    loading: false,
    error: null,
    sosActive: false,
  },
  setSelectedDestination: () => {},
  triggerSOS: () => {},
  cancelSOS: () => {},
  setSelectedProvider: () => {},
  analyzeSafety: async () => {},
  reportScam: () => {},
};

export const useSafety = (): SafetyContextType => {
  const context = useContext(SafetyContext);
  return context || defaultFallbackContext;
};

export default useSafety;
