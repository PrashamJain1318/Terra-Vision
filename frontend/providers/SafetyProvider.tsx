'use client';

import React, { useState, ReactNode } from 'react';
import { SafetyContext, SafetyState, SafetyAlert, CommunityReport, EmergencyContact } from '@/context/SafetyContext';

const initialAlerts: SafetyAlert[] = [
  {
    id: 'alert-1',
    type: 'scam_taxi',
    title: 'Overcharging Meter Scam at Railway Station',
    description: 'Drivers refusing to use digital meters during night hours.',
    severity: 'high',
    location: 'Amritsar Junction Rail Station',
    timestamp: '2 hours ago',
  },
  {
    id: 'alert-2',
    type: 'scam_guides',
    title: 'Fake VIP Entry Pass Scam',
    description: 'Unaccredited vendors claiming priority temple access passes.',
    severity: 'moderate',
    location: 'Heritage Street, Amritsar',
    timestamp: '5 hours ago',
  },
];

const initialReports: CommunityReport[] = [
  {
    id: 'rep-1',
    author: 'Traveler_Elena',
    title: 'Safe Walking Path near Heritage Corridor',
    description: 'Well-lit street with heavy police patrols active until 11 PM.',
    votes: 42,
    verified: true,
    timestamp: 'Today, 10:15 AM',
  },
];

const initialContacts: EmergencyContact[] = [
  { id: 'c-1', name: 'Tourist Police Control Room', role: 'Police', phone: '112', category: 'police' },
  { id: 'c-2', name: 'Amritsar Central Hospital', role: 'Medical', phone: '102', category: 'ambulance' },
];

export const SafetyProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<SafetyState>({
    selectedDestination: 'Amritsar, Punjab',
    travelDates: 'Oct 14 - Oct 18',
    riskLevel: 'low',
    safetyScore: 92,
    alerts: initialAlerts,
    communityReports: initialReports,
    emergencyContacts: initialContacts,
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
  });

  const setSelectedDestination = (selectedDestination: string) => {
    setState((prev) => ({ ...prev, selectedDestination }));
  };

  const triggerSOS = () => {
    setState((prev) => ({ ...prev, sosActive: true }));
  };

  const cancelSOS = () => {
    setState((prev) => ({ ...prev, sosActive: false }));
  };

  const setSelectedProvider = (selectedProvider: string) => {
    setState((prev) => ({ ...prev, selectedProvider }));
  };

  const analyzeSafety = async (dest: string) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const res = await fetch(`/api/v1/safety/analyze?destination=${encodeURIComponent(dest)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.data) {
          setState((prev) => ({
            ...prev,
            safetyScore: data.data.safetyScore || prev.safetyScore,
            riskLevel: data.data.riskLevel || prev.riskLevel,
            alerts: data.data.scamAlerts || prev.alerts,
            loading: false,
          }));
          return;
        }
      }
    } catch (e) {
      // Fallback
    }
    setState((prev) => ({ ...prev, loading: false }));
  };

  const reportScam = (reportData: Partial<CommunityReport>) => {
    const newRep: CommunityReport = {
      id: `rep-${Date.now()}`,
      author: 'You',
      title: reportData.title || 'Community Scam Alert',
      description: reportData.description || '',
      votes: 1,
      verified: false,
      timestamp: 'Just now',
    };
    setState((prev) => ({ ...prev, communityReports: [newRep, ...prev.communityReports] }));
  };

  return (
    <SafetyContext.Provider
      value={{
        state,
        setSelectedDestination,
        triggerSOS,
        cancelSOS,
        setSelectedProvider,
        analyzeSafety,
        reportScam,
      }}
    >
      {children}
    </SafetyContext.Provider>
  );
};

export default SafetyProvider;
