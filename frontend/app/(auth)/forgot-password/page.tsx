'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Mail, ArrowLeft } from 'lucide-react';
import EditorialHeading from '@/components/common/EditorialHeading';
import Eyebrow from '@/components/common/Eyebrow';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Eyebrow>JOURNAL RECOVERY</Eyebrow>
        <EditorialHeading as="h2" className="text-3xl font-extrabold">
          Reset Password
        </EditorialHeading>
        <p className="text-xs text-muted-foreground font-sans">
          {submitted
            ? "We've dispatched recovery instructions to your email."
            : 'Enter your explorer email to receive a password reset link.'}
        </p>
      </div>

      {submitted ? (
        <div className="space-y-4 font-sans">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs text-emerald-400 font-bold text-center">
            Check your inbox for a message from Terra Vision Field Support.
          </div>
          <Link
            href="/login"
            className="w-full py-3.5 bg-muted/40 hover:bg-muted/60 border border-border/50 font-extrabold rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
              <input
                id="email"
                type="email"
                required
                placeholder="explorer@terravision.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-muted/30 border border-border/50 focus:border-primary rounded-2xl text-xs text-foreground focus:outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary hover:opacity-95 text-primary-foreground font-extrabold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin font-mono" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Send Reset Link
              </>
            )}
          </button>

          <Link
            href="/login"
            className="w-full py-3.5 bg-transparent border border-transparent font-bold text-muted-foreground hover:text-foreground rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Login
          </Link>
        </form>
      )}
    </div>
  );
}
