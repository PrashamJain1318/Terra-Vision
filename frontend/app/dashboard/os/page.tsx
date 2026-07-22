'use client';

import React, { useState } from 'react';
import OsLayout from '@/components/dashboard/os/OsLayout';
import GlassCard from '@/components/common/GlassCard';
import platformService, { OrchestrationResult } from '@/services/platformService';
import { Cpu, Send, Bot, MapPin, Calendar, DollarSign, ShieldAlert, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

export default function UnifiedWorkspacePage() {
  const [prompt, setPrompt] = useState('Plan a 3-day eco-luxury trip to Munnar focusing on tea plantations and local cuisine');
  const [city, setCity] = useState('Munnar');
  const [executing, setExecuting] = useState(false);
  const [result, setResult] = useState<OrchestrationResult | null>(null);

  const handleRunOrchestrator = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setExecuting(true);
    try {
      const res = await platformService.orchestrate(prompt, city);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setExecuting(false);
    }
  };

  return (
    <OsLayout>
      <div className="space-y-6">
        {/* Command Prompt Execution Interface */}
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">LocalLens OS Multi-Agent Command Console</h3>
              <p className="text-xs text-muted-foreground">
                Enter any travel objective. The Multi-Agent Orchestrator routes task execution across 8 specialized AI agents.
              </p>
            </div>
          </div>

          <form onSubmit={handleRunOrchestrator} className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 relative w-full">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask LocalLens OS anything about your trip..."
                className="w-full pl-4 pr-10 py-3.5 rounded-2xl bg-card border border-border/40 text-xs font-semibold text-foreground focus:outline-none focus:border-primary shadow-inner"
              />
              <Sparkles className="w-4 h-4 text-primary absolute right-3.5 top-4" />
            </div>

            <button
              type="submit"
              disabled={executing}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground font-black text-xs shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              {executing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span>{executing ? 'Orchestrating Agents...' : 'Execute OS Command'}</span>
            </button>
          </form>
        </GlassCard>

        {/* Execution Output Panel */}
        {result && (
          <div className="space-y-6 animate-in fade-in">
            {/* Telemetry Summary Header */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Multi-Agent Consensus Reached ({result.consensusScore}% Match)</span>
              </div>
              <div className="text-[11px] text-muted-foreground font-semibold">
                Execution Time: {result.totalExecutionTimeMs}ms • 8 Agents Coordinated
              </div>
            </div>

            {/* Agent Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {result.agentResponses.map((res, idx) => (
                <GlassCard key={idx} hoverEffect={true} className="p-4 space-y-2 border-border/40 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5" /> {res.agent}
                    </span>
                    <span className="text-[9px] text-emerald-400 font-bold">{res.executionTimeMs}ms</span>
                  </div>
                  <p className="text-xs text-foreground font-semibold leading-relaxed">{res.insight}</p>
                </GlassCard>
              ))}
            </div>

            {/* Unified Result Highlights */}
            <GlassCard hoverEffect={false} className="p-6 space-y-4 border-border/40">
              <h4 className="text-sm font-black text-foreground uppercase tracking-wider text-primary">
                {result.finalRecommendation.summary}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-2">
                <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-2">
                  <span className="font-extrabold text-indigo-400 block flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Top Attractions
                  </span>
                  <ul className="space-y-1 text-muted-foreground font-medium">
                    {result.finalRecommendation.topAttractions.map((att, i) => (
                      <li key={i}>• {att}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-2">
                  <span className="font-extrabold text-amber-400 block flex items-center gap-1">
                    ☕ Signature Culinary
                  </span>
                  <ul className="space-y-1 text-muted-foreground font-medium">
                    {result.finalRecommendation.topFood.map((food, i) => (
                      <li key={i}>• {food}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-card/60 border border-border/40 space-y-2">
                  <span className="font-extrabold text-purple-400 block flex items-center gap-1">
                    🏨 Recommended Resort
                  </span>
                  <p className="text-muted-foreground font-medium">{result.finalRecommendation.stayRecommendation}</p>
                  <span className="text-[10px] text-rose-400 font-bold block pt-1">
                    ⚠️ Tip: {result.finalRecommendation.safetyTip}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </OsLayout>
  );
}
