'use client';

import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {children}
    </>
  );
};
