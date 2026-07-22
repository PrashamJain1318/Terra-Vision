'use client';

import React, { useState } from 'react';
import { useVision } from '@/hooks/useVision';
import { X, Bookmark, Check } from 'lucide-react';

interface MemorySaveDialogProps {
  onClose: () => void;
}

export const MemorySaveDialog = ({ onClose }: MemorySaveDialogProps) => {
  const { saveToMemories, state } = useVision();
  const [title, setTitle] = useState(state.recognizedObject || 'Landmark Memory');
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveToMemories({ title, notes, date: new Date().toISOString() });
    setSaved(true);
    setTimeout(onClose, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 rounded-3xl bg-card border border-border/50 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
            <Bookmark className="w-4.5 h-4.5 text-primary" /> Save Travel Memory
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted/40 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        {saved ? (
          <div className="py-8 text-center space-y-2 text-emerald-400">
            <Check className="w-10 h-10 mx-auto animate-bounce" />
            <p className="text-xs font-bold">Saved to your Travel Memories!</p>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground">Memory Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none focus:border-primary/60"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground">Personal Notes</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes about your visit..."
                className="w-full px-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none focus:border-primary/60"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Save Memory
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MemorySaveDialog;
