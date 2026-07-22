'use client';

import React from 'react';
import VoiceLayout from '@/components/voice/layout/VoiceLayout';
import VoiceTranslationCard from '@/components/voice/VoiceTranslationCard';
import LanguageSelector from '@/components/voice/LanguageSelector';

export const VoiceTranslatorPage = () => {
  return (
    <VoiceLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-foreground">Voice Speech Translator</h2>
          <LanguageSelector />
        </div>
        <VoiceTranslationCard />
      </div>
    </VoiceLayout>
  );
};

export default VoiceTranslatorPage;
