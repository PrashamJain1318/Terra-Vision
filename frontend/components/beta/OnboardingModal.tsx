'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Navigation, Mic, ShieldCheck, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function OnboardingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    try {
      const onboarded = localStorage.getItem('locallens_onboarded');
      if (!onboarded) {
        setOpen(true);
      }
    } catch (e) {}
  }, []);

  const handleFinish = () => {
    try {
      localStorage.setItem('locallens_onboarded', 'true');
    } catch (e) {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#111827] border border-white/[0.12] rounded-3xl p-6 space-y-6 text-slate-100 relative shadow-2xl animate-in fade-in zoom-in-95">
        <button onClick={handleFinish} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-1.5 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? 'w-8 bg-[#7C3AED]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 rounded-3xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#7C3AED] flex items-center justify-center mx-auto shadow-lg shadow-[#7C3AED]/20">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">Welcome to TerraVision</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Your global AI Travel Operating System powered by live spatial intelligence & Gemini AI.
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 rounded-3xl bg-purple-500/20 border border-purple-500/40 text-purple-400 flex items-center justify-center mx-auto shadow-lg">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">AI Travel Intelligence</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Search any destination worldwide to uncover verified Google Places details and Gemini AI scores for photography, safety, and hidden gems.
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <Mic className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">Hands-Free & Routing</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Use voice commands to search destinations on the go and calculate multi-modal routes with live ETA and fuel estimation.
              </p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 rounded-3xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-white">Ready for Exploration!</h3>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Try searching <span className="text-[#7C3AED] font-bold">"Goa"</span>, <span className="text-[#7C3AED] font-bold">"Paris"</span>, or <span className="text-[#7C3AED] font-bold">"Tokyo"</span> to launch your experience.
              </p>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.08]">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 rounded-xl bg-white/[0.06] text-xs font-black text-slate-300 hover:text-white"
            >
              Back
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#A855F7] text-white text-xs font-black flex items-center gap-1.5 shadow-md"
            >
              Next <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center gap-1.5 shadow-md"
            >
              Start Exploring <CheckCircle2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
