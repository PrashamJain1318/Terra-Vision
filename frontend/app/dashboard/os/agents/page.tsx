'use client';

import React, { useState, useEffect } from 'react';
import OsLayout from '@/components/dashboard/os/OsLayout';
import GlassCard from '@/components/common/GlassCard';
import platformService, { AgentStatusItem } from '@/services/platformService';
import { Bot, Zap, Activity, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AgentDashboardPage() {
  const [agents, setAgents] = useState<AgentStatusItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    setLoading(true);
    try {
      const data = await platformService.getAgents();
      setAgents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OsLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Multi-Agent AI Mesh Telemetry</h3>
              <p className="text-xs text-muted-foreground">
                Real-time status, latency benchmarks, and active workloads across all 8 specialized AI agents.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Agents Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <GlassCard key={agent.id} hoverEffect={true} className="p-5 space-y-3.5 border-border/40 relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <h4 className="font-extrabold text-sm text-foreground">{agent.name}</h4>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">
                  {agent.status}
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-semibold leading-snug">{agent.role}</p>

              <div className="grid grid-cols-2 gap-2 text-xs border-t border-border/20 pt-3">
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground block">Latency</span>
                  <span className="font-black text-indigo-400">{agent.latencyMs} ms</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-muted-foreground block">Agent Load</span>
                  <span className="font-black text-foreground">{agent.loadPct}%</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </OsLayout>
  );
}
