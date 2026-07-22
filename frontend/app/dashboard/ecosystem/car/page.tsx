'use client';

import React, { useState, useEffect } from 'react';
import EcosystemLayout from '@/components/dashboard/ecosystem/EcosystemLayout';
import GlassCard from '@/components/common/GlassCard';
import ecosystemService, { CarModeData } from '@/services/ecosystemService';
import { Car, Navigation, Fuel, Utensils, ShieldAlert, Mic, Volume2, ArrowRight, Compass, Clock, CheckCircle2 } from 'lucide-react';

export default function CarModePage() {
  const [carData, setCarData] = useState<CarModeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [voiceActive, setVoiceActive] = useState(true);

  useEffect(() => {
    loadCarData();
  }, []);

  const loadCarData = async () => {
    setLoading(true);
    try {
      const data = await ecosystemService.getCarModeData();
      setCarData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EcosystemLayout>
      <div className="space-y-6">
        {/* Car Mode Automotive Display Frame */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-6 shadow-2xl text-slate-100">
          {/* Top Automotive Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block">
                  Android Auto & Apple CarPlay Mode
                </span>
                <h2 className="text-xl font-black text-white">{carData?.activeTrip || 'Munnar Hill Escape'}</h2>
              </div>
            </div>

            {/* Hands-Free Voice Status */}
            <button
              onClick={() => setVoiceActive(!voiceActive)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold border transition-all flex items-center gap-2 ${
                voiceActive
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              <Mic className={`w-4 h-4 ${voiceActive ? 'animate-pulse' : ''}`} />
              <span>{voiceActive ? 'Hands-Free Voice Active' : 'Voice Assistant Muted'}</span>
            </button>
          </div>

          {/* Next Stop Navigation Highlight Card */}
          {carData?.nextStop && (
            <div className="p-6 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 block">
                  Next Stop Destination
                </span>
                <h3 className="text-2xl font-black text-white">{carData.nextStop.name}</h3>
                <div className="flex items-center gap-4 text-xs text-slate-300 font-semibold pt-1">
                  <span>📍 {carData.nextStop.distance}</span>
                  <span>⏱️ ETA {carData.nextStop.etaMinutes} mins</span>
                  <span>🏷️ {carData.nextStop.category}</span>
                </div>
              </div>

              <button
                onClick={() => alert(`Starting turn-by-turn navigation to ${carData.nextStop.name}`)}
                className="px-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm shadow-xl flex items-center justify-center gap-2 shrink-0"
              >
                <Navigation className="w-5 h-5 fill-white" /> Start Directions
              </button>
            </div>
          )}

          {/* Quick Automotive Touch Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Nearby Fuel */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Fuel className="w-4 h-4" /> Nearby Fuel Stations
              </h4>
              <div className="space-y-2 text-xs">
                {carData?.nearbyFuel.map((fuel, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-800/60 pb-1.5">
                    <span className="font-bold text-slate-200">{fuel.name}</span>
                    <span className="text-[10px] text-slate-400 font-semibold">{fuel.distance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Food */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Nearby Food & Rest Stops
              </h4>
              <div className="space-y-2 text-xs">
                {carData?.nearbyFood.map((food, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-slate-800/60 pb-1.5">
                    <span className="font-bold text-slate-200">{food.name}</span>
                    <span className="text-[10px] text-amber-400 font-extrabold">★ {food.rating} ({food.distance})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Driving Safety Alert */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-rose-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" /> Driving Safety Alerts
              </h4>
              {carData?.safetyAlerts.map((alert, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-semibold">
                  {alert.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EcosystemLayout>
  );
}
