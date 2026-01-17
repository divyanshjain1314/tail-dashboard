"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { PreLoader } from '@/components/common/PreLoader';
import { RootState } from '@/redux/store';

export default function RootPage() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setTimeout(() => {
        if (isAuthenticated) {
          router.push('/dashboard');
        } else {
          router.push('/login');
        }
        setLoading(false);
      }, 1200);
    };

    checkAuth();
  }, [isAuthenticated, router]);

  return loading ? <PreLoader /> : null;
}