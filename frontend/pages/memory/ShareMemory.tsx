'use client';

import React, { useState } from 'react';
import MemoryLayout from '@/components/memory/layout/MemoryLayout';
import ShareDialog from '@/components/memory/ShareDialog';

export const ShareMemory = () => {
  const [showShare, setShowShare] = useState(true);

  return (
    <MemoryLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-foreground">Share Travel Capsule</h2>
        {showShare && <ShareDialog onClose={() => setShowShare(false)} />}
      </div>
    </MemoryLayout>
  );
};

export default ShareMemory;
