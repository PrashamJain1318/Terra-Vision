'use client';

import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';

const defaultItems = [
  { id: '1', text: 'Government ID & Passport copies', checked: true },
  { id: '2', text: 'Comfortable walking / trekking shoes', checked: true },
  { id: '3', text: 'Layered jackets & warm clothing', checked: false },
  { id: '4', text: 'Universal power adapter & power bank', checked: false },
  { id: '5', text: 'Personal first aid & altitude medications', checked: false },
];

export const PackingChecklist = () => {
  const [items, setItems] = useState(defaultItems);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  return (
    <GlassCard hoverEffect={false} className="space-y-4">
      <h4 className="font-extrabold text-xs uppercase tracking-wider text-muted-foreground select-none">
        Packing Checklist
      </h4>

      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center gap-3 p-3 rounded-2xl bg-muted/20 border border-border/30 hover:bg-muted/40 transition-all text-left text-xs font-semibold"
          >
            {item.checked ? (
              <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            ) : (
              <Square className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
            <span className={item.checked ? 'line-through text-muted-foreground' : 'text-foreground'}>
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

export default PackingChecklist;
