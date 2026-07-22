'use client';

import React from 'react';
import { Shield, Ban, CheckCircle } from 'lucide-react';
import { AdminUserItem } from '@/context/AdminContext';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminUserRow = ({ user }: { user: AdminUserItem }) => {
  const { toggleUserBanStatus, toggleUserVerifyStatus } = useAdmin();

  return (
    <div className="p-4 rounded-2xl bg-card border border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 font-extrabold flex items-center justify-center border border-red-500/20">
          {user.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-extrabold text-foreground text-sm font-sans">{user.name}</h4>
            {user.verifiedTraveler && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
          </div>
          <span className="text-muted-foreground">{user.email} • Role: {user.role}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
            user.status === 'banned'
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
          }`}
        >
          {user.status}
        </span>

        <button
          onClick={() => toggleUserVerifyStatus(user.id)}
          className="px-3 py-1.5 rounded-xl border border-border bg-muted/40 hover:bg-muted text-foreground transition-all flex items-center gap-1"
        >
          <Shield className="w-3.5 h-3.5" /> Toggle Verify
        </button>

        <button
          onClick={() => toggleUserBanStatus(user.id)}
          className={`px-3 py-1.5 rounded-xl text-white font-bold transition-all flex items-center gap-1 ${
            user.status === 'banned' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          <Ban className="w-3.5 h-3.5" /> {user.status === 'banned' ? 'Unban' : 'Ban User'}
        </button>
      </div>
    </div>
  );
};

export default AdminUserRow;
