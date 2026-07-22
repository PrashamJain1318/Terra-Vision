'use client';

import React from 'react';
import { useVoice } from '@/hooks/useVoice';
import VOICE_LANGUAGES from '@/config/voiceLanguages';

export const LanguageSelector = () => {
  const { state, setLanguage } = useVoice();

  return (
    <div className="flex items-center gap-2">
      <select
        value={state.activeLanguage}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-1.5 rounded-xl bg-card/60 border border-border/40 text-xs font-semibold text-foreground focus:outline-none"
      >
        {VOICE_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
