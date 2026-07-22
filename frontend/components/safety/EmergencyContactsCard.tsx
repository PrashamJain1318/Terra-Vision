'use client';

import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useSafety } from '@/hooks/useSafety';

export const EmergencyContactsCard = () => {
  const { state } = useSafety();

  return (
    <div className="p-6 rounded-3xl bg-card/45 backdrop-blur-xl border border-red-500/30 space-y-4 shadow-xl">
      <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider flex items-center gap-2">
        <PhoneCall className="w-4 h-4 text-red-500" /> Emergency Hotline Directory
      </h3>
      <div className="space-y-3">
        {state.emergencyContacts.map((contact) => (
          <div key={contact.id} className="p-3.5 rounded-2xl bg-muted/20 border border-border/20 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-extrabold text-foreground">{contact.name}</h4>
              <span className="text-[10px] text-muted-foreground uppercase font-bold">{contact.role}</span>
            </div>
            <a href={`tel:${contact.phone}`} className="px-3 py-1 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-extrabold">
              {contact.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContactsCard;
