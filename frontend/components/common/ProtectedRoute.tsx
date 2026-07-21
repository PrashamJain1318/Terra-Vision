'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import LoadingScreen from './LoadingScreen';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('user' | 'admin')[];
}

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    } else if (!isLoading && isAuthenticated && allowedRoles && user) {
      if (!allowedRoles.includes(user.role as 'user' | 'admin')) {
        router.push('/'); // Redirect unauthorized role to home
      }
    }
  }, [isAuthenticated, isLoading, user, allowedRoles, router]);

  if (isLoading || (!isAuthenticated && !isLoading)) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
