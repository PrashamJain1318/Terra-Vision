export interface RiskLevelConfig {
  level: 'low' | 'moderate' | 'high' | 'critical';
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const RISK_LEVELS: Record<string, RiskLevelConfig> = {
  low: {
    level: 'low',
    label: 'Low Risk — High Safety',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  moderate: {
    level: 'moderate',
    label: 'Moderate Risk — Stay Vigilant',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  high: {
    level: 'high',
    label: 'High Risk — Exercise Caution',
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.1)',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
  critical: {
    level: 'critical',
    label: 'Critical Warning — High Threat',
    color: '#ef4444',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
};

export default RISK_LEVELS;
