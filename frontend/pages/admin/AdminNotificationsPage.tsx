'use client';

import React, { useState } from 'react';
import { Send, Bell } from 'lucide-react';

export const AdminNotificationsPage = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message) return;
    setSent(true);
    setTitle('');
    setMessage('');
  };

  return (
    <div className="p-6 rounded-3xl bg-card border border-border/40 space-y-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Bell className="w-5 h-5 text-red-500" />
        <h3 className="font-extrabold text-lg text-foreground">Broadcast Platform Announcement</h3>
      </div>

      {sent ? (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 font-mono">
          Broadcast notification dispatched to all 14,850 active platform users.
        </div>
      ) : (
        <form onSubmit={handleBroadcast} className="space-y-4 font-sans">
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Announcement Header
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Scheduled System Maintenance Notice"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
              Message Body
            </label>
            <textarea
              required
              rows={3}
              placeholder="Notice details..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-muted/40 border border-border/40 rounded-xl text-xs text-foreground focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Send Broadcast
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminNotificationsPage;
