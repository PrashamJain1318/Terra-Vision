'use client';

import React from 'react';
import { useSafety } from '@/hooks/useSafety';
import RISK_LEVELS from '@/config/riskLevels';

export const RiskLevelBadge = () => {
  const { state } = useSafety();
  const risk = RISK_LEVELS[state.riskLevel] || RISK_LEVELS.low;

  return (
    <span
      className="px-3 py-1 rounded-full text-xs font-extrabold border"
      style={{ backgroundColor: risk.bgColor, borderColor: risk.borderColor, color: risk.color }}
    >
      {risk.label}
    </span>
  );
};

export default RiskLevelBadge;
