'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import { Compass, Sparkles, User as UserIcon, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import EditorialHeading from '@/components/common/EditorialHeading';
import Eyebrow from '@/components/common/Eyebrow';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setLoading(true);
    try {
      const response = await authService.register({ name, email, password });
      if (response.success && response.data) {
        setCredentials(response.data.user, response.data.token);
        router.push('/dashboard/overview');
      } else {
        setError(response.message || 'Registration failed.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Connection to authentication services failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Eyebrow>FIELD JOURNAL REGISTRATION</Eyebrow>
        <EditorialHeading as="h2" className="text-3xl font-extrabold">
          Begin Your Journey
        </EditorialHeading>
        <p className="text-xs text-muted-foreground font-sans">
          Create your Terra Vision explorer profile
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs text-red-500 font-bold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 font-sans">
        <div className="space-y-1">
          <label className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest" htmlFor="name">
            Full Name
          </label>
          <div className="relative">
            <UserIcon className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
            <input
              id="name"
              type="text"
              placeholder="Elena Rostova"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-muted/30 border border-border/50 focus:border-primary rounded-2xl text-xs text-foreground focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
            <input
              id="email"
              type="email"
              placeholder="explorer@terravision.ai"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-muted/30 border border-border/50 focus:border-primary rounded-2xl text-xs text-foreground focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="w-4 h-4 text-muted-foreground absolute left-4 top-3.5" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-11 py-3 bg-muted/30 border border-border/50 focus:border-primary rounded-2xl text-xs text-foreground focus:outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
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
              Sign Up
            </>
          )}
        </button>
      </form>

      <div className="text-center text-xs text-muted-foreground font-sans pt-2">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
}
