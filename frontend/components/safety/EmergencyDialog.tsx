'use client';

import React from 'react';
import { X, AlertTriangle, PhoneCall } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const EmergencyDialog = () => {
  const { state, cancelSOS } = useSafety();

  if (!state.sosActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-sm p-6 rounded-3xl bg-red-950/90 border border-red-500/60 shadow-2xl space-y-4 text-center">
        <div className="w-12 h-12 rounded-full bg-red-600/30 text-red-500 flex items-center justify-center mx-auto animate-ping">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-extrabold text-white">EMERGENCY SOS DISPATCHED</h3>
        <p className="text-xs text-red-200">
          Sending live GPS coordinates ({state.selectedDestination}) to Tourist Police Control Room and saved emergency contacts.
        </p>

        <button
          onClick={cancelSOS}
          className="w-full py-3 rounded-2xl bg-white text-red-600 font-extrabold text-xs hover:bg-red-100 transition-all"
        >
          Cancel SOS Alert
        </button>
      </div>
    </div>
  );
};

export default EmergencyDialog;
