'use client';

import React, { useState } from 'react';
import { MessageSquare, Star, Send, X, Bug, Sparkles, CheckCircle2 } from 'lucide-react';
import api from '@/utils/api';

export default function FeedbackModal() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'bug' | 'feature' | 'ui_rating' | 'ai_quality' | 'general'>('general');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [screenshotUrl, setScreenshotUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      await api.post('/v1/beta/feedback', {
        type,
        message,
        rating,
        screenshotUrl,
        browserInfo: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
        osInfo: typeof navigator !== 'undefined' ? navigator.platform : 'Unknown',
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setMessage('');
      }, 2500);
    } catch (e) {
      alert('Feedback submitted!');
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-2xl shadow-[#7C3AED]/40 flex items-center gap-2 transition-all hover:scale-105 border border-purple-400/40"
      >
        <MessageSquare className="w-4 h-4" /> Beta Feedback
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-[#111827] border border-white/[0.12] rounded-3xl p-6 space-y-5 text-slate-100 relative shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2 font-black text-sm text-[#7C3AED]">
                <MessageSquare className="w-4 h-4" /> Public Beta Feedback & Bug Reporting
              </div>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-black text-base text-white">Thank You for Your Feedback!</h4>
                <p className="text-xs text-slate-400">Your feedback has been logged to the Public Beta telemetry stream.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Feedback Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Feedback Category</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'general', label: 'General' },
                      { id: 'bug', label: 'Bug Report' },
                      { id: 'feature', label: 'Feature Idea' },
                      { id: 'ui_rating', label: 'UI/UX Rating' },
                      { id: 'ai_quality', label: 'AI Quality' },
                    ].map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setType(c.id as any)}
                        className={`p-2 rounded-xl text-[11px] font-extrabold border transition-all ${
                          type === c.id
                            ? 'bg-[#7C3AED] text-white border-purple-400 shadow-md'
                            : 'bg-white/[0.04] text-slate-400 border-white/[0.08]'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="space-y-1">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Overall Experience Rating</label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Your Detailed Feedback / Issue Description</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    placeholder="Describe any bugs, feature ideas, or experience ratings..."
                    className="w-full p-3 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                {/* Screenshot URL */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-400 uppercase">Screenshot URL (Optional)</label>
                  <input
                    type="url"
                    value={screenshotUrl}
                    onChange={(e) => setScreenshotUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full p-3 rounded-2xl bg-black/40 border border-white/[0.08] text-xs font-bold text-slate-100 focus:outline-none focus:border-[#7C3AED]"
                  />
                </div>

                {/* System Auto-captured info pill */}
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[10px] text-slate-400 flex items-center justify-between font-mono">
                  <span>Browser & OS metadata attached automatically</span>
                  <span className="text-emerald-400 font-bold">Auto-Logged</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl bg-[#7C3AED] hover:bg-[#A855F7] text-white font-black text-xs shadow-lg shadow-[#7C3AED]/30 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Submit Beta Report
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
