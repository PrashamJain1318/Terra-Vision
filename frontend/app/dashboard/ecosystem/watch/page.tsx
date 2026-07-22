'use client';

import React, { useState, useEffect } from 'react';
import EcosystemLayout from '@/components/dashboard/ecosystem/EcosystemLayout';
import GlassCard from '@/components/common/GlassCard';
import ecosystemService, { SmartwatchData } from '@/services/ecosystemService';
import { Watch, Navigation, ShieldAlert, CheckSquare, Mic, CloudSun, Footprints, Heart, Compass, CheckCircle2 } from 'lucide-react';

export default function SmartwatchPage() {
  const [watchData, setWatchData] = useState<SmartwatchData | null>(null);
  const [loading, setLoading] = useState(true);
  const [sosTriggered, setSosTriggered] = useState(false);

  useEffect(() => {
    loadWatchData();
  }, []);

  const loadWatchData = async () => {
    setLoading(true);
    try {
      const data = await ecosystemService.getSmartwatchData();
      setWatchData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSosTrigger = () => {
    setSosTriggered(true);
    alert('SOS Offline Signal Triggered! Emergency contacts notified with live coordinates.');
    setTimeout(() => setSosTriggered(false), 5000);
  };

  return (
    <EcosystemLayout>
      <div className="space-y-6">
        <GlassCard hoverEffect={false} className="p-6 border-border/40 space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Watch className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-foreground">Smartwatch Companion Interface (Apple Watch & WearOS)</h3>
              <p className="text-xs text-muted-foreground">
                Compact watch-face UI preview with turn-by-turn directions, trip timeline, quick checklists, and one-tap offline SOS trigger.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* 390px Watch Face Display Frame */}
        <div className="flex justify-center py-4">
          <div className="w-[380px] h-[480px] rounded-[50px] border-[8px] border-slate-800 bg-slate-950 p-5 space-y-4 shadow-2xl relative text-slate-100 flex flex-col justify-between overflow-hidden">
            {/* Watch Face Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs">
              <span className="font-extrabold text-slate-400">14:30</span>
              <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                <CloudSun className="w-3.5 h-3.5" /> {watchData?.currentTemp || '19°C'}
              </span>
            </div>

            {/* Next Turn Direction Card */}
            <div className="p-3.5 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 text-xs space-y-1">
              <span className="text-[9px] font-extrabold text-indigo-400 uppercase tracking-wider block">Turn-by-Turn</span>
              <p className="font-bold text-white leading-tight">{watchData?.nextTurn}</p>
            </div>

            {/* Next Trip Activity */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Up Next</span>
              <p className="font-bold text-slate-200">{watchData?.nextActivity}</p>
            </div>

            {/* Quick Checklist */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Watch Checklist</span>
              <div className="space-y-1">
                {watchData?.checklists.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300 font-medium">{item.task}</span>
                    {item.done ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <span className="text-[9px] text-slate-500">Pending</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Watch Bottom Action Buttons Bar */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => alert('Smartwatch Voice Assistant activated')}
                className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold text-[11px] flex items-center justify-center gap-1.5"
              >
                <Mic className="w-3.5 h-3.5 text-indigo-400" /> Voice
              </button>

              <button
                onClick={handleSosTrigger}
                className="py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-[11px] flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/30"
              >
                <ShieldAlert className="w-3.5 h-3.5" /> SOS Emergency
              </button>
            </div>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
