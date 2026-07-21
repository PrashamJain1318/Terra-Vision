'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Sparkles, Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simple placeholder mock request timeout
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary">
          <Compass className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">Reset Password</h2>
        <p className="text-sm text-muted-foreground">
          {submitted
            ? "We've sent a link to your email."
            : 'Enter your email to receive a password reset link.'}
        </p>
      </div>

      {submitted ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-xs text-green-500 font-medium text-center">
            Check your inbox for a message from LocalLens AI.
          </div>
          <Link
            href="/login"
            className="w-full py-3.5 bg-muted/40 hover:bg-muted/60 border border-border/40 font-semibold rounded-2xl text-sm transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-foreground/60 absolute left-4 top-3.5" />
              <input
                id="email"
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-muted/40 border border-border/40 focus:border-primary/60 rounded-2xl text-sm focus:outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-2xl text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Send Reset Link
              </>
            )}
          </button>

          <Link
            href="/login"
            className="w-full py-3.5 bg-transparent border border-transparent font-medium text-muted-foreground rounded-2xl text-xs transition-all flex items-center justify-center gap-1.5 hover:text-foreground"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Login
          </Link>
        </form>
      )}
    </div>
  );
}
