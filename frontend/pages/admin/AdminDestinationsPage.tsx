'use client';

import React from 'react';
import { MapPin, Plus, Check } from 'lucide-react';

const mockSubmissions = [
  { id: 'dest-1', name: 'Otagi Nenbutsu-ji Temple', location: 'Kyoto, Japan', category: 'Hidden Gem', status: 'Pending Review' },
  { id: 'dest-2', name: 'Kesar Da Dhaba', location: 'Amritsar, India', category: 'Local Food', status: 'Verified' },
];

export const AdminDestinationsPage = () => {
  return (
    <div className="space-y-4">
      <div className="p-6 rounded-3xl bg-card border border-border/40 flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-lg text-foreground">Destinations & Spots Catalog</h3>
          <p className="text-xs text-muted-foreground font-sans">Approve user submitted hidden gems, merge duplicates, and set featured spots.</p>
        </div>
        <button className="px-4 py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      <div className="space-y-3 font-mono text-xs">
        {mockSubmissions.map((sub) => (
          <div key={sub.id} className="p-4 rounded-2xl bg-card border border-border/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-red-500" />
              <div>
                <h4 className="font-bold text-foreground text-sm font-sans">{sub.name}</h4>
                <span className="text-muted-foreground">{sub.location} • {sub.category}</span>
              </div>
            </div>

            <button className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Approve Listing
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDestinationsPage;
