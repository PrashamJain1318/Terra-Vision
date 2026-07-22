'use client';

import React from 'react';
import AdminStatCard from '@/components/admin/AdminStatCard';
import { Users, Compass, Cpu, Mic, Camera, ShieldAlert } from 'lucide-react';
import { useAdmin } from '@/hooks/useAdmin';

export const AdminOverviewPage = () => {
  const { metrics } = useAdmin();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AdminStatCard title="Total Platform Users" value={metrics.totalUsers} subtitle={`+${metrics.newRegistrationsToday} registered today`} icon={Users} color="text-blue-400" />
        <AdminStatCard title="Trips Created" value={metrics.tripsCreated} subtitle="AI & Collaborative Itineraries" icon={Compass} color="text-emerald-400" />
        <AdminStatCard title="AI Requests Total" value={metrics.aiRequestsTotal} subtitle="Multimodal Inference Calls" icon={Cpu} color="text-indigo-400" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AdminStatCard title="Voice AI Streams" value={`${(metrics.voiceAiUsageMs / 60000).toFixed(1)} mins`} subtitle="Handsfree Speech Interaction" icon={Mic} color="text-cyan-400" />
        <AdminStatCard title="Vision AI Scans" value={metrics.visionAiScans} subtitle="Optical Landmark Recognition" icon={Camera} color="text-pink-400" />
        <AdminStatCard title="Pending Moderation" value={metrics.pendingReportsCount} subtitle="Abuse & Flagged Content" icon={ShieldAlert} color="text-red-400" />
      </div>
    </div>
  );
};

export default AdminOverviewPage;
