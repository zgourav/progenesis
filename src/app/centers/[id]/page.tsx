'use client';

import React, { Suspense } from 'react';
import SingleCenter from '@/page-components/centers/SingleCenter';
import { centersData } from '@/page-components/centers/CenterCard';
import { useRouter } from 'next/navigation';

interface CenterPageProps {
  params: Promise<{
    id: string;
  }>;
}

function CenterContent({ id }: { id: string }) {
  const router = useRouter();
  const centerId = parseInt(id, 10);
  
  // Check if the center exists
  const centerExists = centersData.some(center => center.id === centerId);

  React.useEffect(() => {
    if (!centerExists) {
      router.push('/centers');
    }
  }, [centerExists, router]);

  if (!centerExists) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <SingleCenter selectedId={centerId} />
    </main>
  );
}

export default function CenterPage({ params }: CenterPageProps) {
  const resolvedParams = React.use(params);
  
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1656A5]"></div>
      </div>
    }>
      <CenterContent id={resolvedParams.id} />
    </Suspense>
  );
}