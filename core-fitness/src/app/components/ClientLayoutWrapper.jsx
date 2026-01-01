'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      const timer = setTimeout(() => {
        setLoading(false);
        router.push('/SignIn');
      }, 2000); 

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading && pathname === '/') {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold animate-pulse">Welcome to Core Fitness</h1>
      </div>
    );
  }

  return <>{children}</>;
}

