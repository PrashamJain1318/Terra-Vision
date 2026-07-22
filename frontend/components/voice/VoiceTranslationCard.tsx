'use client';

import React from 'react';
import { Languages } from 'lucide-react';

interface TranslationProps {
  originalText?: string;
  translatedText?: string;
  sourceLang?: string;
  targetLang?: string;
}

export const VoiceTranslationCard = ({
  originalText = 'Translate this menu',
  translatedText = 'このメニューを翻訳してください。',
  sourceLang = 'English',
  targetLang = 'Japanese',
}: TranslationProps) => {
  return (
    <div className="p-5 rounded-3xl bg-card/45 backdrop-blur-xl border border-border/40 space-y-3 shadow-xl">
      <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
        <span className="flex items-center gap-1">
          <Languages className="w-3.5 h-3.5 text-cyan-400" /> {sourceLang} → {targetLang}
        </span>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">"{originalText}"</p>
        <p className="text-sm font-extrabold text-cyan-400">"{translatedText}"</p>
      </div>
    </div>
  );
};

export default VoiceTranslationCard;
