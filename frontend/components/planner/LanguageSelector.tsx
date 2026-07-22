'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import { Languages } from 'lucide-react';

const languages = [
  'English',
  'Spanish',
  'Hindi',
  'French',
  'German',
  'Japanese',
];

export const LanguageSelector = () => {
  const { state, setPreferences } = usePlanner();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {languages.map((lang) => {
        const isSelected = state.languagePreference.toLowerCase() === lang.toLowerCase();
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setPreferences({ language: lang.toLowerCase() })}
            className={`p-4 rounded-2xl text-left border transition-all flex items-center gap-3 ${
              isSelected
                ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]'
                : 'bg-muted/20 border-border/30 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span className="text-xs font-bold">{lang}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
