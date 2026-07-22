'use client';

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useCommunity } from '@/hooks/useCommunity';

export const CreatePostModal = ({ onClose }: { onClose: () => void }) => {
  const { addPost } = useCommunity();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState<'photo' | 'story' | 'journal' | 'review'>('story');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    addPost({
      authorName: 'Logged Explorer',
      authorHandle: '@explorer_user',
      title,
      content,
      location: location || 'Global',
      type,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-lg w-full atlas-card p-6 space-y-4 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-border/40 pb-3">
          <h3 className="font-editorial text-xl font-extrabold text-foreground">Share Dispatch to Community</h3>
          <button onClick={onClose} className="p-1 rounded-full text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Dispatch Category
            </label>
            <select
              value={type}
              onChange={(e: any) => setType(e.target.value)}
              className="w-full px-3.5 py-2 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            >
              <option value="story">Travel Story</option>
              <option value="journal">Travel Journal</option>
              <option value="photo">Photo Dispatch</option>
              <option value="review">Spot Review</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sunset over Arashiyama Bamboo Grove"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Kyoto, Japan"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Content
            </label>
            <textarea
              required
              rows={4}
              placeholder="Share field notes, authentic food spots, or travel advice..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Publish Dispatch
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
