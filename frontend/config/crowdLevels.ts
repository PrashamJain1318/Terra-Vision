/**
 * Crowd Level Classification Config
 */

export interface CrowdLevelConfig {
  id: 'very_low' | 'low' | 'moderate' | 'high';
  label: string;
  percentageRange: string;
  badgeColor: string;
}

export const CROWD_LEVELS: Record<string, CrowdLevelConfig> = {
  very_low: {
    id: 'very_low',
    label: 'Almost Empty',
    percentageRange: '0 - 15%',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  },
  low: {
    id: 'low',
    label: 'Light Crowd',
    percentageRange: '15 - 35%',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  },
  moderate: {
    id: 'moderate',
    label: 'Moderate Traffic',
    percentageRange: '35 - 65%',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  },
  high: {
    id: 'high',
    label: 'Busy / Touristy',
    percentageRange: '65 - 100%',
    badgeColor: 'text-red-400 bg-red-500/10 border-red-500/30',
  },
};

export default CROWD_LEVELS;
