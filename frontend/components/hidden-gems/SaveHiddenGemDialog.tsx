'use client';

import React, { useState } from 'react';
import { X, Bookmark, Check } from 'lucide-react';

interface SaveHiddenGemDialogProps {
  gemName: string;
  onClose: () => void;
  onSave: (title: string, notes: string) => void;
}

export const SaveHiddenGemDialog = ({ gemName, onClose, onSave }: SaveHiddenGemDialogProps) => {
  const [title, setTitle] = useState(gemName);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, notes);
    setSaved(true);
    setTimeout(onClose, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 rounded-3xl bg-card border border-border/50 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-foreground flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-primary" /> Save Hidden Gem
          </h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-muted/40 text-muted-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>

        {saved ? (
          <div className="py-6 text-center text-emerald-400 space-y-2">
            <Check className="w-10 h-10 mx-auto animate-bounce" />
            <p className="text-xs font-bold">Saved to your Secret Gems!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-muted-foreground">Notes</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Personal notes..."
                className="w-full px-4 py-2.5 rounded-2xl bg-muted/20 border border-border/30 text-xs font-semibold focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Save to Favorites
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SaveHiddenGemDialog;
