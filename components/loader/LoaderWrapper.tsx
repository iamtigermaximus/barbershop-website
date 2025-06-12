'use client';

import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add loading class to body
    document.body.classList.add('loading');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2000); // Adjust timing as needed

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
