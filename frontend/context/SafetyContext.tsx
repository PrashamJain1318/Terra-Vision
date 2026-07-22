'use client';

import { createContext } from 'react';

export interface SafetyAlert {
  id: string;
  type: string;
  title: string;
  description: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  location: string;
  timestamp: string;
}

export interface CommunityReport {
  id: string;
  author: string;
  title: string;
  description: string;
  votes: number;
  verified: boolean;
  timestamp: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  category: string;
}

export interface SafetyState {
  selectedDestination: string;
  travelDates: string;
  riskLevel: 'low' | 'moderate' | 'high' | 'critical';
  safetyScore: number;
  alerts: SafetyAlert[];
  communityReports: CommunityReport[];
  emergencyContacts: EmergencyContact[];
  safeZones: string[];
  unsafeZones: string[];
  travelAdvisories: string[];
  advisorConversation: Array<{ sender: 'user' | 'assistant'; text: string }>;
  notificationSettings: { push: boolean; sms: boolean; email: boolean };
  privacySettings: { shareLocation: boolean; anonymousReporting: boolean };
  offlineMode: boolean;
  selectedProvider: string;
  loading: boolean;
  error: string | null;
  sosActive: boolean;
}

export interface SafetyContextType {
  state: SafetyState;
  setSelectedDestination: (dest: string) => void;
  triggerSOS: () => void;
  cancelSOS: () => void;
  setSelectedProvider: (providerId: string) => void;
  analyzeSafety: (dest: string) => Promise<void>;
  reportScam: (reportData: Partial<CommunityReport>) => void;
}

export const SafetyContext = createContext<SafetyContextType | undefined>(undefined);
export default SafetyContext;
